/* ============================================================================
 * OPDLE Online — 1v1 via Supabase Realtime Broadcast (AUCUNE table SQL).
 * Salon à code + matchmaking auto (lobby presence). Mystère partagé dérivé
 * d'une seed (tirage uniforme sur le pool, formes comme pickRandomCharacter).
 * Basé sur la confiance : comme le solo (réponse en console), un joueur qui
 * ouvre la console peut tricher — parties entre amis.
 * Limites v1 : pas de reconnexion en cours de manche, mêmes données et
 * mêmes réglages requis des deux côtés (avertissement si pools différents).
 * ========================================================================== */
const online = {
  active: false, code: null, isHost: false, myIdx: 0, myKey: null,
  seed: null, chan: null, started: false, lastRoomRound: 0,
  applyingRemote: false, lobbyChan: null, lobbyTimer: null, lobbyKey: null,
  pendingName: null, tab: "local", viaAuto: false,
  // Options de salon (hôte) : timer/s (0 = illimité), bridage, mode mystère
  turnSecs: 0, bridled: false, mmode: "shared",
  // Timer de tour (mes tours uniquement, pas de synchro d'horloge)
  deadline: 0, tickTimer: null,
  // Chien de garde d'inactivité : dernier message adverse reçu (forfait si silence)
  idleSecs: 120, lastRemote: 0, idleTimer: null,
  // Mode "chacun son mystère" : phase pick puis play
  phase: "play", myPick: null, oppPick: null, pendingPick: null,
  // Séquence des catégories bridées : RNG déterministe (seed du salon) →
  // les deux clients tirent les MÊMES catégories masquées
  mystSeq: 0
};
const ONLINE_LOBBY = "opdle-lobby-v1";

function onlineT() {
  return (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : TRANSLATIONS.fr;
}
function onlineToast(msg) {
  if (typeof showToast === "function") showToast(msg);
}
function onlineNeedNet() {
  if (typeof supabaseClient === "undefined" || !supabaseClient) {
    onlineToast((onlineT() || {}).versusNoNet || "no net");
    return false;
  }
  return true;
}
function onlineChanOpts(key) {
  return { config: { presence: { key }, broadcast: { ack: true, self: true } } };
}
function onlineNewKey() {
  return "p" + Math.random().toString(36).slice(2, 10);
}
function onlineRandCode() {
  const A = "ABCDEFGHJKMNPQRSTUVWXYZ";
  let s = "";
  for (let i = 0; i < 4; i++) s += A[Math.floor(Math.random() * A.length)];
  return s;
}
function onlineHashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function onlineRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Tirage déterministe (seed partagée) — mêmes poids que le solo (rareté
 *  visible × niche cachée × difficulté), pour des probas identiques.
 *  Seule différence assumée : SANS le mode Collecter (anti-doublon par
 *  joueur — l'appliquer ferait diverger les mystères entre les deux
 *  joueurs qui n'ont pas le même album). À tenir synchro avec
 *  getDrawWeight (hors Collecter). */
function onlineDrawWeight(c, difficulty) {
  const w = getRarityWeight(c.rarity || 2, difficulty);
  const row = (typeof NICHE_FACTOR !== "undefined" && NICHE_FACTOR[difficulty]) || null;
  const f = row ? row[nicheOf(c)] : 1;
  return w * (typeof f === "number" && isFinite(f) && f > 0 ? f : 1);
}
function pickOnlineMystery(seedStr) {
  const rng = onlineRng(onlineHashStr("opdle|" + seedStr));
  const pool = getAvailableCharacters();
  if (!pool.length) return CHARACTERS[0];
  const weights = pool.map(c => onlineDrawWeight(c, currentDifficulty));
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  let r = rng() * total;
  let base = pool[pool.length - 1];
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) { base = pool[i]; break; }
  }
  const variants = getVariantsForBase(base.name, currentStory);
  if (!variants.length) return base;
  const odds = (typeof FORM_ODDS !== "undefined" && FORM_ODDS[currentDifficulty]) || FORM_ODDS.medium;
  // Actuel : aucune forme forcée (alts probabilistes, carte normale majoritaire).
  const onlyVariants = currentStory === "all" ? [] : variants.filter(v => v.onlyAsVariant);
  if (onlyVariants.length > 0) {
    const pick = onlyVariants[Math.floor(rng() * onlyVariants.length)];
    const forced = applyVariant(base, pick);
    const forcedShinies = variants.filter(v => v.isShiny && !v.unlock && !v.onlyAsVariant);
    if (forcedShinies.length > 0 && rng() < odds.shiny) {
      const sh = forcedShinies[Math.floor(rng() * forcedShinies.length)];
      const shiny = applyVariant(base, sh);
      shiny.overrides = Object.assign({}, pick.overrides || {}, sh.overrides || {});
      shiny.image = sh.image || pick.image;
      shiny._variantId = pick.id;
      shiny._isShiny = true;
      shiny._variantDisplay = pick.displayName
        ? { fr: pick.displayName.fr + " ✦", en: pick.displayName.en + " ✦" }
        : sh.displayName;
      shiny._shinyId = sh.id;
      return shiny;
    }
    return forced;
  }
  const alts = variants.filter(v => !v.isShiny && !v.unlock);
  const shinies = variants.filter(v => v.isShiny && !v.unlock);
  // Même règle que le solo : excludesBase jamais en mode Actuel ("all") --
  // la forme de base (actuelle) doit y rester tirable.
  const noBase = currentStory !== "all" && alts.length > 0 && alts.some(v => v.excludesBase);
  let pAlt = alts.length ? odds.alt : 0;
  let pShiny = shinies.length ? odds.shiny : 0;
  // Même boost + plafond que le solo (mode spécial Alt/Shiny débloqué par
  // Roger Shiny) : le tirage en ligne doit rester identique au tirage local.
  if (typeof applyFormGate === "function") {
    ({ pAlt, pShiny } = applyFormGate(pAlt, pShiny, noBase));
  } else {
    const nonNormal = pAlt + pShiny;
    if (nonNormal > 0.55 && !noBase) {
      const scale = 0.55 / nonNormal;
      pAlt *= scale; pShiny *= scale;
    }
  }
  if (noBase) pAlt += Math.max(0, 1 - (pAlt + pShiny));
  const pickW = (list) => {
    const weights = list.map(v => Math.max(0.0001, (7 - (v.rarity != null ? v.rarity : 3)) * (v.formWeight != null ? v.formWeight : 1)));
    const tot = weights.reduce((a, b) => a + b, 0) || 1;
    let rr = rng() * tot;
    for (let i = 0; i < list.length; i++) { rr -= weights[i]; if (rr <= 0) return list[i]; }
    return list[list.length - 1];
  };
  const roll = rng();
  if (roll < pAlt) return applyVariant(base, pickW(alts));
  if (roll < pAlt + pShiny) return applyVariant(base, shinies[Math.floor(rng() * shinies.length)]);
  return base;
}

/* ---------------- hooks appelés par app.js ---------------- */

/** Garde du tour en ligne : false (bloque) si ce n'est pas à moi. */
function onlineGateGuess() {
  if (!online.active || online.applyingRemote) return true;
  if (versusTurn !== online.myIdx) {
    onlineToast((onlineT() || {}).versusNotYourTurn || "Pas ton tour !");
    return false;
  }
  return true;
}
/** Après un essai local : diffusion aux pairs (sauf application distante). */
function onlineSendGuess(character) {
  if (online.active && !online.applyingRemote && online.chan && character) {
    online.lastGuessName = character.name;
    try {
      online.chan.send({ type: "broadcast", event: "msg", payload: { t: "guess", from: online.myKey, by: online.myIdx, turn: versusTurn, name: character.name } });
    } catch (e) {}
  }
  onlineSyncTimer();
}
/** Victoire locale en ligne : on prévient l'autre (indispensable en "chacun son mystère"). */
function onlineSendWin(guessName) {
  if (!online.active || online.applyingRemote) return;
  if (guessName) online.lastGuessName = guessName;
  onlineSend({ t: "win", by: online.myIdx, winner: versusTurn, name: online.lastGuessName || null });
}

/** Demande de nul en ligne : on envoie, l'adversaire accepte via modal. */
function onlineAskDraw() {
  if (!online.active || !online.chan) return;
  try {
    online.chan.send({ type: "broadcast", event: "msg", payload: { t: "drawAsk", from: online.myKey, by: online.myIdx, turn: versusTurn } });
    onlineToast("½ …");
  } catch (e) {}
}

/* ---------------- timer de tour (mes tours uniquement) ---------------- */

function onlineStopTimer() {
  online.deadline = 0;
  if (online.tickTimer) {
    try { clearInterval(online.tickTimer); } catch (e) {}
    online.tickTimer = null;
  }
}

/** (Re)lance le chrono si c'est à moi, partie en cours, temps limité. */
function onlineSyncTimer() {
  onlineStopTimer();
  if (!online.active || isGameOver) { updateVersusBanner(); return; }
  if (online.phase !== "play" || !online.turnSecs || versusTurn !== online.myIdx) {
    updateVersusBanner();
    return;
  }
  online.deadline = Date.now() + online.turnSecs * 1000;
  online.tickTimer = setInterval(onlineTick, 500);
  updateVersusBanner();
}

function onlineTick() {
  if (!online.active || isGameOver || online.phase !== "play" ||
      versusTurn !== online.myIdx || !online.turnSecs || !online.deadline) {
    onlineStopTimer();
    updateVersusBanner();
    return;
  }
  if (Date.now() >= online.deadline) {
    onlineStopTimer();
    onlineAutoPass();
    return;
  }
  updateVersusBanner();
}

/** Temps écoulé : on passe la main (pas de pénalité). */
function onlineAutoPass() {
  if (!online.active || isGameOver || online.phase !== "play" || versusTurn !== online.myIdx) return;
  const t = onlineT() || {};
  versusTurn = 1 - versusTurn;
  updateVersusBanner();
  onlineSend({ t: "pass", by: online.myIdx });
  onlineToast(t.versusTimeout || "Temps écoulé !");
  onlineSyncTimer();
}

/* ---------------- chien de garde d'inactivité ---------------- */

/** Démarre la surveillance : sans nouvelles de l'adversaire, forfait. */
function onlineIdleStart() {
  onlineIdleStop();
  if (!online.active) return;
  if (!online.lastRemote) online.lastRemote = Date.now();
  online.idleTimer = setInterval(onlineIdleCheck, 5000);
}
function onlineIdleStop() {
  if (online.idleTimer) {
    try { clearInterval(online.idleTimer); } catch (e) {}
    online.idleTimer = null;
  }
}
function onlineIdleCheck() {
  if (!online.active || !online.started || isGameOver) return;
  // Onglet en arrière-plan : les timers y sont throttlés, le silence observé
  // n'est pas une preuve d'inactivité → la surveillance est laissée à
  // l'onglet actif (qui reçoit quand même les messages).
  if (typeof document !== "undefined" && document.hidden) return;
  // Arbitrage : seul le joueur DONT CE N'EST PAS LE TOUR peut gagner par
  // inactivité (l'adversaire devait jouer et n'a rien fait). Si c'est mon
  // tour, c'est moi le joueur lent — jamais l'adversaire. Cette règle,
  // fondée sur le tour partagé, garantit qu'un seul des deux clients peut
  // déclarer le forfait (fin des doubles victoires).
  if (versusTurn === online.myIdx) return;
  // Seuil adaptatif : au-delà de turnSecs × 2 (+ marge), un tour complet sans
  // message serait anormal — mais le throttlage d'un onglet en arrière-plan
  // peut retarder l'auto-pass. Timer 60 s → 150 s avant de conclure.
  const seuilSecs = Math.max(online.idleSecs || 120, (online.turnSecs || 0) * 2 + 30);
  const quietMs = Date.now() - (online.lastRemote || Date.now());
  if (quietMs >= seuilSecs * 1000) {
    onlineIdleStop();
    // Forfait explicite envoyé AVANT de fermer : l'adversaire apprend la
    // vérité par le message (et non par la disparition de sa présence).
    onlineSend({ t: "forfeit", by: online.myIdx, winner: online.myIdx });
    versusScores[online.myIdx]++;
    versusWinner = online.myIdx;
    versusRound++;
    isGameOver = true;
    try { document.getElementById("guessInput").disabled = true; } catch (e) {}
    if (typeof recordGameEnd === "function") recordGameEnd({ win: true, how: "forfeit", winner: versusNames[online.myIdx] });
    showVictoryModal();
    onlineToast((onlineT() || {}).versusIdle || "Adversaire inactif — victoire par forfait !");
    onlineEndSession();
  }
}

/* ---------------- réception ---------------- */

function onlineOnMsg(p) {
  if (!p || p.t == null) return;
  if (p.from && p.from === online.myKey) return; // ignore propre écho
  online.lastRemote = Date.now();
  // Re-synchro légère du tour : les messages qui ne basculent pas le tour
  // eux-mêmes (draw, win, hello, mymyst) portent la vision de l'émetteur →
  // si elle diffère de la mienne, je réaligne ma bannière. Les messages
  // "guess"/"pass" restent maîtres de leur bascule et ne sont pas concernés.
  if ((p.t === "drawAsk" || p.t === "drawAnswer" || p.t === "win" || p.t === "hello" || p.t === "mymyst") &&
      typeof p.turn === "number" && online.active && !isGameOver && online.phase === "play" &&
      versusTurn !== p.turn) {
    versusTurn = p.turn;
    updateVersusBanner();
    onlineSyncTimer();
  }
  switch (p.t) {
    case "guess": onlineRemoteGuess(p); break;
    case "pass":
      if (online.active && !isGameOver && online.phase === "play" && p.by === versusTurn) {
        versusTurn = 1 - versusTurn;
        updateVersusBanner();
        onlineSyncTimer();
      }
      break;
    case "forfeit":
      if (online.active && !isGameOver && typeof p.winner === "number") {
        versusScores[p.winner]++;
        versusWinner = p.winner;
        versusRound++;
        isGameOver = true;
        try { document.getElementById("guessInput").disabled = true; } catch (e) {}
        if (typeof recordGameEnd === "function") recordGameEnd({ win: p.winner === online.myIdx, how: "forfeit", winner: versusNames[p.winner] });
        showVictoryModal();
      }
      break;
    case "quit":
      if (online.active) {
        versusScores[online.myIdx]++;
        versusWinner = online.myIdx;
        versusRound++;
        isGameOver = true;
        try { document.getElementById("guessInput").disabled = true; } catch (e) {}
        if (typeof recordGameEnd === "function") recordGameEnd({ win: true, how: "forfeit", winner: versusNames[online.myIdx] });
        showVictoryModal();
        onlineToast((onlineT() || {}).versusPeerLeft || "Adversaire parti");
        onlineEndSession();
      }
      break;
    case "drawAsk":
      if (online.active && !isGameOver) {
        const t = onlineT() || {};
        const other = (versusNames[p.by] != null ? versusNames[p.by] : "?");
        showConfirmModal({
          icon: "🤝",
          title: other + " " + (t.versusDrawAsk || "demande le match nul"),
          desc: (t.versusDrawAccept || "{name}, tu acceptes ?").replace("{name}", versusNames[online.myIdx] || "?"),
          okLabel: t.confirmDefaultOk,
          danger: false
        }).then(yes => {
          onlineSend({ t: "drawAnswer", by: online.myIdx, yes: !!yes });
          if (yes) versusApplyDraw();
          else onlineToast(t.versusDrawRefused || "Nul refusé !");
        });
      }
      break;
    case "drawAnswer":
      if (online.active && p.yes) versusApplyDraw();
      else if (online.active) onlineToast((onlineT() || {}).versusDrawRefused || "Nul refusé !");
      break;
    case "win":
      if (online.active && typeof p.winner === "number" && versusWinner !== p.winner) {
        const gc = (p.name && typeof findCharByName === "function" && findCharByName(p.name)) || null;
        if (online.mmode === "own" && gc) {
          // Chacun son mystère : la trouvaille concerne MON perso, pas ma réponse.
          // On ne l'ajoute pas à mon tableau ; la modale affiche la trouvaille.
          answer = gc;
        } else if (gc && !guessedNames.has(gc.name)) {
          // Mystère partagé : l'essai gagnant complète mon tableau
          guessedNames.add(gc.name);
          try {
            const row = compareValues(gc, answer);
            currentGuessesList.push({ character: gc, mystery: mysteryCategories.slice() });
            renderRow(row, true, mysteryCategories.slice());
          } catch (e) {}
        }
        versusScores[p.winner]++;
        versusWinner = p.winner;
        versusRound++;
        isGameOver = true;
        try { document.getElementById("guessInput").disabled = true; } catch (e) {}
        if (typeof recordGameEnd === "function") recordGameEnd({ win: p.winner === online.myIdx, how: "guess", winner: versusNames[p.winner] });
        if (typeof updateVersusBanner === "function") updateVersusBanner();
        showVictoryModal();
      }
      break;
    case "room": onlineOnRoom(p); break;
    case "start": onlineOnStart(p); break;
    case "hello": onlineOnHello(p); break;
    case "mymyst":
      if (online.active && online.mmode === "own" && online.phase === "pick") {
        const c = (typeof findCharByName === "function" && findCharByName(p.name)) || null;
        if (c) {
          online.oppPick = c.name;
          onlineMaybeBegin();
        }
      }
      break;
    default: break;
  }
}

/* ---------------- mode "chacun son mystère" : choix puis jeu ---------------- */

/** Clic suggestion / Entrée pendant la phase de choix : sélectionne au lieu de deviner. */
function onlinePickIntercept(character) {
  if (!online.active || online.phase !== "pick" || online.applyingRemote) return false;
  if (!character) return true;
  online.pendingPick = character.name;
  renderVersusPickbar();
  return true;
}

function hidePickSuggestions() {
  const menu = document.getElementById("versusPickSuggestions");
  if (menu) { menu.classList.add("hidden"); menu.innerHTML = ""; }
}

/** Liste de suggestions (comme le champ de devinette) pour le choix du perso. */
function renderPickSuggestions(query) {
  const menu = document.getElementById("versusPickSuggestions");
  if (!menu) return;
  if (!online.active || online.phase !== "pick" || online.myPick) { hidePickSuggestions(); return; }
  const q = typeof cleanString === "function" ? cleanString(query || "") : (query || "").trim().toLowerCase();
  if (!q) { hidePickSuggestions(); return; }
  let pool = [];
  try { pool = getAvailableCharacters(); } catch (e) {}
  const matches = pool.filter(c => {
    const n = typeof cleanString === "function" ? cleanString(c.name) : c.name.toLowerCase();
    if (n.includes(q)) return true;
    return (c.aliases || []).some(a => (typeof cleanString === "function" ? cleanString(a) : a.toLowerCase()).includes(q));
  }).slice(0, 8);
  if (!matches.length) { hidePickSuggestions(); return; }
  const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
  menu.innerHTML = "";
  matches.forEach(char => {
    const displayChar = typeof forceOnlyAsVariantIfNeeded === "function" ? forceOnlyAsVariantIfNeeded(char, currentStory) : char;
    const sugName = (displayChar._variantDisplay && (displayChar._variantDisplay[lang] || displayChar._variantDisplay.fr || displayChar._variantDisplay.en)) || displayChar.name;
    const item = document.createElement("div");
    item.className = "p-2.5 hover:bg-violet-800/60 cursor-pointer flex items-center gap-3 text-sm text-white transition pick-suggestion-item";
    item.innerHTML = (typeof avatarHTML === "function" ? avatarHTML(displayChar, "w-8 h-8") : "") + '<span class="font-semibold">' + sugName + '</span>';
    // mousedown + preventDefault : évite que le blur du champ ne ferme la liste avant le clic
    item.addEventListener("mousedown", (e) => { e.preventDefault(); selectPickSuggestion(char, sugName); });
    menu.appendChild(item);
  });
  menu.classList.remove("hidden");
}

/** Sélection (non confirmée) d'un perso depuis la liste de suggestions. */
function selectPickSuggestion(char, label) {
  if (!online.active || online.phase !== "pick" || online.myPick) return;
  online.pendingPick = char.name;
  const input = document.getElementById("versusPickInput");
  if (input) input.value = label || char.name;
  hidePickSuggestions();
  renderVersusPickbar();
}

function renderVersusPickbar() {
  const bar = document.getElementById("versusPickBar");
  if (!bar) return;
  const show = online.active && online.mmode === "own" && online.phase === "pick";
  bar.classList.toggle("hidden", !show);
  bar.classList.toggle("flex", show);
  if (!show) { hidePickSuggestions(); return; }
  const t = onlineT() || {};
  const confirmed = !!online.myPick;
  const chosen = online.myPick || online.pendingPick || "";
  const el = document.getElementById("versusPickText");
  if (el) {
    el.textContent = confirmed
      ? (t.versusPickWaiting || "En attente du mystère adverse…")
      : (t.versusPickPrompt || "Choisis ton mystère !");
  }
  const chosenEl = document.getElementById("versusPickChosen");
  if (chosenEl) {
    chosenEl.classList.toggle("hidden", !chosen);
    chosenEl.textContent = chosen ? (confirmed ? "✓ " + chosen : chosen) : "";
    chosenEl.classList.toggle("text-emerald-300", confirmed);
    chosenEl.classList.toggle("text-amber-300", !confirmed);
  }
  const inp = document.getElementById("versusPickInput");
  if (inp) {
    inp.placeholder = t.versusPickInputPh || "Nom du perso…";
    inp.disabled = confirmed;
    if (confirmed) { inp.value = online.myPick; hidePickSuggestions(); }
  }
  const ok = document.getElementById("versusPickOkBtn");
  if (ok) {
    ok.textContent = confirmed ? "✓ " + (t.versusPickConfirmed || "Confirmé") : (t.versusPickOk || "Valider");
    ok.disabled = confirmed;
    ok.classList.toggle("opacity-60", confirmed);
    ok.classList.toggle("cursor-not-allowed", confirmed);
  }
  const rand = document.getElementById("versusPickRandomBtn");
  if (rand) rand.disabled = confirmed;
}

function onlinePickRandom() {
  if (!online.active || online.phase !== "pick" || online.myPick) return;
  let pool = [];
  try { pool = getAvailableCharacters(); } catch (e) {}
  if (!pool.length) return;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  online.pendingPick = pick.name;
  const input = document.getElementById("versusPickInput");
  if (input) input.value = pick.name;
  hidePickSuggestions();
  renderVersusPickbar();
}

/** Perso tapé dans la barre de choix (nom ou alias, comme une réponse). */
function onlinePickByName(text) {
  const q = typeof cleanString === "function" ? cleanString(text || "") : (text || "").trim().toLowerCase();
  if (!q) return null;
  let pool = [];
  try { pool = getAvailableCharacters(); } catch (e) {}
  return pool.find(c => (typeof cleanString === "function" ? cleanString(c.name) : c.name.toLowerCase()) === q ||
    (c.aliases || []).some(a => (typeof cleanString === "function" ? cleanString(a) : a.toLowerCase()) === q)) || null;
}

function onlinePickConfirm() {
  if (!online.active || online.phase !== "pick" || online.myPick) return;
  const input = document.getElementById("versusPickInput");
  const typed = input ? input.value.trim() : "";
  if (typed) {
    const c = onlinePickByName(typed);
    if (!c) { onlineToast((onlineT() || {}).versusPickNotFound || "Personnage introuvable"); return; }
    online.pendingPick = c.name;
  }
  if (!online.pendingPick) return;
  online.myPick = online.pendingPick;
  onlineSend({ t: "mymyst", by: online.myIdx, name: online.myPick });
  hidePickSuggestions();
  renderVersusPickbar();
  onlineMaybeBegin();
}

/** Les deux mystères sont connus : la manche commence (réponse = celui de l'adversaire). */
function onlineMaybeBegin() {
  if (!online.active || online.phase !== "pick" || !online.myPick || !online.oppPick) return;
  const opp = (typeof findCharByName === "function" && findCharByName(online.oppPick)) || null;
  if (!opp) return;
  online.phase = "play";
  answer = opp;
  if (typeof recordMysteryPick === "function") recordMysteryPick(answer);
  renderVersusPickbar();
  updateVersusBanner();
  onlineToast((onlineT() || {}).versusPickBegin || "Que le meilleur gagne !");
  onlineSyncTimer();
}

function onlineSend(payload) {
  if (!online.chan) return;
  try {
    // "turn" accompagne chaque message : permet de réaligner le tour si un
    // message a été perdu ou retardé (bannières qui divergent).
    online.chan.send({ type: "broadcast", event: "msg", payload: Object.assign({ from: online.myKey, turn: versusTurn }, payload) });
  } catch (e) {}
}

function onlineRemoteGuess(p) {
  if (!online.active || online.applyingRemote) return;
  if (typeof p.by !== "number" || p.by !== versusTurn) return;
  const c = (typeof findCharByName === "function" && findCharByName(p.name)) || null;
  if (!c || guessedNames.has(c.name)) return;
  online.applyingRemote = true;
  try { makeGuess(c); } finally { online.applyingRemote = false; }
  onlineSyncTimer();
}

/* ---------------- manches ---------------- */

function onlineApplyStart(round, story, difficulty, opts) {
  versusRound = round;
  online.mystSeq = 0; // catégories bridées : séquence remise à zéro à chaque manche
  // La manche démarre : on n'est plus en « attente de salon », le plateau
  // redevient visible.
  document.body.classList.remove("vs-room-waiting");
  online.viaAuto = false;
  if (story && story !== currentStory && typeof STORY_POINTS !== "undefined" && STORY_POINTS[story]) {
    currentStory = story;
    try { localStorage.setItem("opdle_story", story); } catch (e) {}
  }
  if (difficulty && difficulty !== currentDifficulty) {
    currentDifficulty = difficulty;
    try { localStorage.setItem("opdle_diff", difficulty); } catch (e) {}
  }
  const o = opts || {};
  if (typeof o.turnSecs === "number") online.turnSecs = o.turnSecs;
  if (typeof o.bridled === "boolean") online.bridled = o.bridled;
  if (o.mmode === "own" || o.mmode === "shared") online.mmode = o.mmode;
  if (typeof updateModeButtons === "function") updateModeButtons();
  if (typeof updateStoryButtons === "function") updateStoryButtons();
  deferPickRecord = true;
  startGame();
  deferPickRecord = false;
  if (online.mmode === "own") {
    // Chacun fait deviner SON perso : phase de choix puis on joue
    online.phase = "pick";
    online.myPick = null;
    online.oppPick = null;
    online.pendingPick = null;
    answer = pickOnlineMystery(online.seed + "#" + round);
    renderVersusPickbar();
  } else {
    online.phase = "play";
    renderVersusPickbar();
    answer = pickOnlineMystery(online.seed + "#" + round);
    if (typeof recordMysteryPick === "function") recordMysteryPick(answer);
  }
  updateVersusBanner();
  if (typeof updateOnlineUI === "function") updateOnlineUI();
  onlineSyncTimer();
  online.lastRemote = Date.now();
  onlineIdleStart();
}

function onlinePoolInfo() {
  let pool = 0, vc = 0;
  try { pool = getAvailableCharacters().length; } catch (e) {}
  try { vc = (CHARACTER_VARIANTS || []).length; } catch (e) {}
  return { pool, vc };
}

function onlineOnRoom(p) {
  if (!online.chan || online.isHost) return;
  if (p.round !== 1 || online.lastRoomRound >= 1) return;
  online.lastRoomRound = 1;
  online.seed = p.seed || online.code;
  versusNames[0] = p.hostName || versusNames[0];
  versusNames[1] = versusNames[1];
  const mine = onlinePoolInfo();
  if (typeof p.pool === "number" && p.pool !== mine.pool) {
    onlineToast((onlineT() || {}).versusPoolMismatch || "pool différent");
  }
  versusScores = [0, 0];
  online.active = true;
  // L'invité participe aussi à la partie : sans ça, son départ de salon ne
  // déclenche jamais la détection "adversaire parti" (online.started restait
  // réservé à l'hôte → l'invité reste bloqué dans un salon mort).
  online.started = true;
  closeVersusModal();
  onlineApplyStart(1, p.story, p.difficulty, { turnSecs: p.turnSecs, bridled: p.bridled, mmode: p.mmode });
  // Préférences de l'invité (matchmaking) : l'hôte fusionne au hello.
  // Ce sont SES réglages actuels (menu principal), pas les sélecteurs du panneau
  // (qui restent réservés à la création manuelle d'un salon).
  onlineSend({ t: "hello", pool: mine.pool, vc: mine.vc, name: versusNames[1], diff: currentDifficulty, story: currentStory });
}

function onlineOnStart(p) {
  if (!online.chan) return;
  if (typeof p.round !== "number" || p.round < versusRound) return;
  onlineApplyStart(p.round, p.story, p.difficulty, { turnSecs: p.turnSecs, bridled: p.bridled, mmode: p.mmode });
}

function onlineOnHello(p) {
  if (!online.chan || !online.isHost) return;
  const mine = onlinePoolInfo();
  if (typeof p.pool === "number" && (p.pool !== mine.pool || p.vc !== mine.vc)) {
    onlineToast((onlineT() || {}).versusPoolMismatch || "pool différent");
  }
  // Matchmaking auto : ne garder que la difficulté la PLUS FACILE et l'arc
  // le PLUS ANCIEN des deux joueurs, puis rediffuser le start corrigé
  // (l'invité se réapplique aussi via onlineOnStart).
  const po = online.pendingOpts || {};
  if (!po.autoMatch) return;
  const DIFF_RANK = { easy: 0, medium: 1, hard: 2, extreme: 3 };
  const ownDiff = po.autoDiff || currentDifficulty;
  const ownStory = po.autoStory || currentStory;
  const theirDiff = (typeof p.diff === "string" && DIFF_RANK[p.diff] !== undefined) ? p.diff : ownDiff;
  const theirStory = (typeof p.story === "string" && p.story) ? p.story : ownStory;
  const mergedDiff = (DIFF_RANK[theirDiff] < DIFF_RANK[ownDiff]) ? theirDiff : ownDiff;
  let mergedStory = ownStory;
  if (typeof storyIndex === "function" && storyIndex(theirStory) < storyIndex(ownStory)) mergedStory = theirStory;
  if (mergedDiff === currentDifficulty && mergedStory === currentStory) return;
  currentDifficulty = mergedDiff;
  currentStory = mergedStory;
  try { localStorage.setItem("opdle_diff", mergedDiff); localStorage.setItem("opdle_story", mergedStory); } catch (e) {}
  if (typeof updateModeButtons === "function") updateModeButtons();
  if (typeof updateStoryButtons === "function") updateStoryButtons();
  onlineSend({ t: "start", round: versusRound, story: mergedStory, difficulty: mergedDiff,
    turnSecs: online.turnSecs, bridled: online.bridled, mmode: online.mmode });
  onlineApplyStart(versusRound, mergedStory, mergedDiff,
    { turnSecs: online.turnSecs, bridled: online.bridled, mmode: online.mmode });
}

function onlineNextRound() {
  if (!online.active) { startGame(); return; }
  onlineSend({ t: "start", round: versusRound, story: currentStory, difficulty: currentDifficulty,
    turnSecs: online.turnSecs, bridled: online.bridled, mmode: online.mmode });
  onlineApplyStart(versusRound);
}

function onlineMembers() {
  try {
    const s = online.chan.presenceState();
    const out = [];
    for (const k of Object.keys(s)) {
      const metas = s[k] || [];
      for (const m of metas) out.push({ key: k, name: m.name, idx: m.idx, joinedAt: m.joinedAt });
    }
    return out;
  } catch (e) { return []; }
}

function onlineSyncNames() {
  if (!online.chan) return;
  for (const m of onlineMembers()) {
    if (m.key === online.myKey) continue;
    if (m.idx === 1 - online.myIdx) versusNames[m.idx] = m.name || versusNames[m.idx];
  }
  updateVersusBanner();
}

function onlineOnPresence() {
  if (!online.chan) return;
  const others = onlineMembers().filter(m => m.key !== online.myKey);
  onlineSyncNames();
  // Invité en double : deux clients ont pris idx=1 (arrivée simultanée).
  // Seul le premier arrivé reste — l'autre referme son salon proprement
  // (endVersus(false) : pas de forfait envoyé, il n'a jamais joué).
  if (online.myIdx === 1 && !online.isHost) {
    const dup = others.find(m => m.idx === 1);
    if (dup && typeof dup.joinedAt === "number" && typeof online.myJoinedAt === "number" &&
        dup.joinedAt <= online.myJoinedAt) {
      onlineToast((onlineT() || {}).versusRoomFull || "complet");
      endVersus(false);
      return;
    }
  }
  if (online.isHost && !online.started && others.length >= 1) {
    online.started = true;
    versusScores = [0, 0];
    online.active = true;
    closeVersusModal();
    const info = onlinePoolInfo();
    const po = online.pendingOpts || {};
    onlineSend({ t: "room", round: 1, seed: online.seed, story: currentStory, difficulty: currentDifficulty,
      hostName: versusNames[0], pool: info.pool, vc: info.vc,
      turnSecs: po.turnSecs, bridled: po.bridled, mmode: po.mmode });
    onlineApplyStart(1, currentStory, currentDifficulty, po);
    onlineToast((onlineT() || {}).versusConnected || "Connecté !");
  }
  if (online.active && others.length === 0 && online.started) {
    // L'adversaire a disparu (onglet fermé, coupure réseau, fin de session).
    // Même arbitrage que le chien de garde : seul celui dont CE N'EST PAS
    // LE TOUR peut gagner. Si c'était mon tour, personne ne marque — on ne
    // peut pas prouver une victoire qu'on n'a pas jouée.
    if (isGameOver) { onlineEndSession(); return; } // manche déjà finie : simple nettoyage
    const gagnant = (versusTurn !== online.myIdx) ? online.myIdx : -1;
    isGameOver = true;
    try { document.getElementById("guessInput").disabled = true; } catch (e) {}
    if (gagnant >= 0) {
      versusScores[gagnant]++;
      versusWinner = gagnant;
      versusRound++;
      if (typeof recordGameEnd === "function") recordGameEnd({ win: true, how: "forfeit", winner: versusNames[gagnant] });
      showVictoryModal();
      onlineToast((onlineT() || {}).versusPeerLeft || "Adversaire parti");
    } else {
      // C'était mon tour : manche annulée (match nul)
      versusRound++;
      if (typeof recordGameEnd === "function") recordGameEnd({ draw: true, how: "abandon" });
      showToast((TRANSLATIONS[currentLang] || {}).versusDrawDone || "Match nul");
      showGiveUpModal(true);
    }
    onlineEndSession();
  }
}

/* ---------------- salon : création / join / sortie ---------------- */

async function onlineSubscribe(timeoutMs) {
  return new Promise((resolve) => {
    let done = false;
    const to = setTimeout(() => { if (!done) { done = true; resolve("TIMEOUT"); } }, timeoutMs || 12000);
    online.chan.subscribe((status) => {
      if (status === "SUBSCRIBED" || status === "CLOSED" || status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
        if (!done) { done = true; clearTimeout(to); resolve(status); }
      }
    });
  });
}

async function onlineOpenRoom(code, asHost, explicitName) {
  if (!onlineNeedNet()) return false;
  // Double-clic sur Rejoindre/Créer : une seule connexion à la fois.
  if (online.connecting) return false;
  onlineLeaveRoom(true);
  online.connecting = true;
  const tok = online.roomTok || 0;
  online.code = code;
  online.isHost = asHost;
  online.myIdx = asHost ? 0 : 1;
  online.myKey = onlineNewKey();
  online.seed = code;
  online.started = false;
  online.lastRoomRound = 0;
  versusMode = true;
  versusScores = [0, 0];
  versusRound = 1;
  versusWinner = -1;
  // Options d'hôte appliquées tout de suite (confirmées à l'arrivée de l'invité)
  if (asHost && online.pendingOpts) {
    const po = online.pendingOpts;
    if (typeof po.turnSecs === "number") online.turnSecs = po.turnSecs;
    if (typeof po.bridled === "boolean") online.bridled = po.bridled;
    if (po.mmode === "own" || po.mmode === "shared") online.mmode = po.mmode;
  } else if (!asHost) {
    online.turnSecs = 0;
    online.bridled = false;
    online.mmode = "shared";
  }
  const t = onlineT() || {};
  const me = (explicitName || "").trim().slice(0, 16) || versusNames[asHost ? 0 : 1] || (asHost ? (t.versusJ1 || "Joueur 1") : (t.versusJ2 || "Joueur 2"));
  console.log("[online] join room", code, "as", asHost ? "host" : "guest", "name=", me);
  if (asHost) versusNames = [me, "?"];
  else versusNames = ["?", me];
  try { localStorage.setItem("opdle_versus_names", JSON.stringify(asHost ? [me, versusNames[1]] : versusNames)); } catch (e) {}
  online.chan = supabaseClient.channel("opdle-room-" + code, onlineChanOpts(online.myKey));
  online.chan.on("broadcast", { event: "msg" }, ({ payload }) => onlineOnMsg(payload || {}));
  online.chan.on("presence", { event: "sync" }, () => onlineOnPresence());
  online.chan.on("presence", { event: "leave" }, () => onlineOnPresence());
  const st = await onlineSubscribe(12000);
  if (tok !== online.roomTok) return false; // join annulé/remplacé pendant l'attente
  if (st !== "SUBSCRIBED") {
    onlineToast((onlineT() || {}).versusNoNet || "no net");
    onlineLeaveRoom(true);
    return false;
  }
  // Salon complet ?
  const others = onlineMembers().filter(m => m.key !== online.myKey);
  if (others.length >= 2 || (others.length === 1 && !asHost && others[0].idx === 1)) {
    onlineToast((onlineT() || {}).versusRoomFull || "complet");
    onlineLeaveRoom(true);
    return false;
  }
  // joinedAt sert à départager deux invités qui prendraient le même idx=1
  // (course d'arrivée) : le premier arrivé reste, le second est écarté.
  online.myJoinedAt = Date.now();
  try { await online.chan.track({ name: me, idx: online.myIdx, joinedAt: online.myJoinedAt }); } catch (e) {}
  if (tok !== online.roomTok) return false;
  online.connecting = false;
  // Pas de startGame() ici : il rendait un plateau jouable DERRIÈRE la modale
  // (légende « Trop bas / Too low », champ de saisie…) alors qu'on attend
  // simplement un adversaire. La vraie manche démarre plus tard, via
  // onlineApplyStart(). On masque aussi le plateau pendant l'attente.
  updateOnlineUI();
  onlineSwitchTab("online");
  document.getElementById("versusModal")?.classList.remove("hidden");
  document.body.classList.add("vs-room-waiting");
  return true;
}

function onlineLeaveRoom(silent) {
  // Annule tout join en cours : un appel en attente (subscribe/track) qui
  // reprendrait après une fermeture ne doit pas ressusciter l'ancien état.
  online.roomTok = (online.roomTok || 0) + 1;
  online.connecting = false;
  document.body.classList.remove("vs-room-waiting");
  onlineIdleStop();
  if (online.chan) {
    try {
      const ch = online.chan;
      online.chan = null;
      supabaseClient.removeChannel(ch);
    } catch (e) { online.chan = null; }
  }
  if (!silent) updateOnlineUI();
  online.active = false;
  online.started = false;
  online.code = null;
  online.seed = null;
}

/** Fin de session en ligne SANS relancer de partie (la modale de victoire reste visible). */
function onlineEndSession() {
  online.active = false;
  online.viaAuto = false;
  onlineLeaveRoom(true);
  versusMode = false;
  versusWinner = -1;
  updateVersusBanner();
  closeVersusModal();
  updateOnlineUI();
}

/** Fermeture de la modale pendant l'attente d'un salon : on quitte proprement. */
function onlineCancelWaiting() {
  if (online.chan && !online.active) {
    onlineLeaveRoom(true);
    if (typeof versusMode !== "undefined") versusMode = false;
    if (typeof updateVersusBanner === "function") updateVersusBanner();
  }
  online.viaAuto = false;
  document.body.classList.remove("vs-room-waiting");
  if (typeof closeVersusModal === "function") closeVersusModal();
  updateOnlineUI();
}

/* ---------------- matchmaking auto (lobby presence) ---------------- */

function onlineLobbyLeave() {
  if (online.lobbyTimer) { clearTimeout(online.lobbyTimer); online.lobbyTimer = null; }
  if (online.lobbyChan) {
    try {
      const ch = online.lobbyChan;
      online.lobbyChan = null;
      supabaseClient.removeChannel(ch);
    } catch (e) { online.lobbyChan = null; }
  }
  updateOnlineUI();
}

async function onlineAuto() {
  if (!onlineNeedNet()) return;
  onlineLobbyLeave();
  online.myKey = onlineNewKey();
  online.viaAuto = true;
  const me = (document.getElementById("versusOnlineName")?.value || "").trim().slice(0, 16) || versusNames[0] || "Joueur";
  online.pendingName = me;
  onlineStatus((onlineT() || {}).versusSearching || "…");
  const ch = supabaseClient.channel(ONLINE_LOBBY, onlineChanOpts(online.myKey));
  online.lobbyChan = ch;
  ch.on("broadcast", { event: "invite" }, ({ payload }) => {
    if (!payload || payload.to !== online.myKey || !online.lobbyChan) return;
    if (online.chan) return; // déjà en salon : ignore
    const code = payload.code;
    const me = online.pendingName || versusNames[0];
    onlineLobbyLeave();
    versusNames = ["?", me];
    onlineOpenRoom(code, false, me).then(ok => {
      if (ok) { if (!online.viaAuto) onlineStatus(""); updateOnlineUI(); } // auto : garde « Recherche… »
    });
  });
  ch.on("presence", { event: "sync" }, () => {
    if (!online.lobbyChan || online.chan) return;
    let others = [];
    try {
      const s = ch.presenceState();
      for (const k of Object.keys(s)) {
        if (k === online.myKey) continue;
        others.push({ key: k, name: (s[k][0] || {}).name });
      }
    } catch (e) {}
    if (!others.length) return;
    others.sort((a, b) => (a.key < b.key ? -1 : 1));
    const other = others[0];
    if (online.myKey > other.key) {
      // Moi : j'héberge et j'invite (auto : 45 s imposées, mystère partagé)
      const code = onlineRandCode();
      // Matchmaking : chaque joueur apporte SES réglages actuels (menu principal).
      // L'hôte fusionne ensuite avec ceux de l'invité en prenant le plus bas.
      online.pendingOpts = { turnSecs: 45, bridled: false, mmode: "shared",
        autoMatch: true, autoDiff: currentDifficulty, autoStory: currentStory };
      const myName = online.pendingName || me;
      try {
        ch.send({ type: "broadcast", event: "invite", payload: { to: other.key, code, story: currentStory, difficulty: currentDifficulty } });
      } catch (e) {}
      onlineLobbyLeave();
      onlineOpenRoom(code, true, myName).then(ok => {
        if (ok) { if (!online.viaAuto) onlineStatus(""); updateOnlineUI(); } // auto : garde « Recherche… »
      });
    }
    // Sinon : j'attends l'invitation de l'autre
  });
  const st = await new Promise((resolve) => {
    let done = false;
    const to = setTimeout(() => { if (!done) { done = true; resolve("TIMEOUT"); } }, 10000);
    ch.subscribe((s) => {
      if (s === "SUBSCRIBED" || s === "CLOSED" || s === "CHANNEL_ERROR" || s === "TIMED_OUT") {
        if (!done) { done = true; clearTimeout(to); resolve(s); }
      }
    });
  });
  if (st !== "SUBSCRIBED" || !online.lobbyChan) { onlineLobbyLeave(); return; }
  try { await ch.track({ name: me }); } catch (e) {}
  online.lobbyTimer = setTimeout(() => {
    onlineLobbyLeave();
    online.viaAuto = false;
    onlineStatus((onlineT() || {}).versusNobodyFound || "Personne");
  }, 60000);
}

/* ---------------- UI ---------------- */

function onlineStatus(msg) {
  const el = document.getElementById("versusOnlineStatus");
  if (el) el.textContent = msg || "";
}

function updateOnlineUI() {
  const t = onlineT() || {};
  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  set("versusModeOnlineLabel", t.versusOnline || "En ligne");
  set("versusCreateBtn", t.versusCreate || "Créer un salon");
  set("versusJoinBtn", t.versusJoin || "Rejoindre");
  set("versusAutoBtn", t.versusAuto || "🔍 Trouver un adversaire");
  set("versusOnlineHint", t.versusOnlineHint || "Crée un salon et partage son code à un ami, ou rejoins un salon avec son code — ou laisse le jeu te trouver un adversaire.");
  const nameI = document.getElementById("versusOnlineName");
  if (nameI) nameI.placeholder = t.versusNamePh || "ex. Luffy340";
  const codeI = document.getElementById("versusRoomCode");
  if (codeI && !codeI.placeholder) codeI.placeholder = "CODE";
  const info = document.getElementById("versusRoomInfo");
  // En matchmaking auto : PAS de code de salon à afficher (l'adversaire est
  // trouvé automatiquement) ; on masque le panneau « Salon ».
  const showRoom = !!(online.code && online.chan && !online.viaAuto);
  if (info) info.classList.toggle("hidden", !showRoom);
  if (showRoom) {
    set("versusRoomCodeBig", online.code);
    const mem = onlineMembers().filter(m => m.key !== online.myKey);
    const peer = mem.length ? mem[0].name : (t.versusWaiting || "…");
    set("versusRoomPeer", mem.length ? peer : (t.versusWaiting || "…"));
    set("versusRoomOpts", onlineOptsLine());
  }
  // Auto : conserve un statut « Recherche… » tant que la manche n'a pas démarré
  if (online.viaAuto && online.chan && !online.started) {
    const st = document.getElementById("versusOnlineStatus");
    if (st && !st.textContent) st.textContent = t.versusSearching || "Recherche d'adversaire…";
  }
  const ms = document.getElementById("modeSelect");
  const ss = document.getElementById("storySelect");
  if (ms) ms.disabled = online.active;
  if (ss) ss.disabled = online.active;
  // Libellés des options d'hôte
  const opt = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  opt("versusOptTimerLabel", t.versusOptTimer || "Timer / tour");
  opt("versusOptDiffLabel", t.versusOptDiff || "Difficulté");
  opt("versusOptStoryLabel", t.versusOptStory || "Arc");
  opt("versusOptModeLabel", t.versusOptMode || "Mystère");
  opt("versusOptBridledLabel", t.versusOptBridled || "Bridage");
  const noLim = document.querySelector('#versusOptTimer option[value="0"]');
  if (noLim) noLim.textContent = t.versusOptNoLimit || "Illimité";
  const mShared = document.querySelector('#versusOptMode option[value="shared"]');
  if (mShared) mShared.textContent = t.versusModeShared || "Partagé";
  const mOwn = document.querySelector('#versusOptMode option[value="own"]');
  if (mOwn) mOwn.textContent = t.versusModeOwn || "Chacun le sien";
  const diffSel = document.getElementById("versusOptDiff");
  if (diffSel) {
    const names = { easy: { fr: "Facile", en: "Easy" }, medium: { fr: "Moyen", en: "Medium" }, hard: { fr: "Difficile", en: "Hard" }, extreme: { fr: "Extrême", en: "Extreme" } };
    const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
    [...diffSel.options].forEach(o => { if (names[o.value]) o.textContent = names[o.value][lang] || names[o.value].fr; });
  }
  const storySel = document.getElementById("versusOptStory");
  if (storySel) {
    const keys = ["storyEastBlue", "storyAlabasta", "storySkypiea", "storyWater7", "storyThriller",
      "storyMarineford", "storyFishman", "storyDressrosa", "storyWholeCake", "storyWano", "storyAll"];
    [...storySel.options].forEach((o, i) => { if (keys[i] && t[keys[i]]) o.textContent = t[keys[i]]; });
  }
  renderVersusPickbar();
}

/** Lit les options d'hôte du panneau (timer, difficulté, arc, bridage, mode). */
function onlineReadHostOpts() {
  const secs = Number(document.getElementById("versusOptTimer")?.value ?? 45);
  const diff = document.getElementById("versusOptDiff")?.value || currentDifficulty;
  const storySel = document.getElementById("versusOptStory");
  const story = (storySel && storySel.value && typeof STORY_POINTS !== "undefined" && STORY_POINTS[storySel.value])
    ? storySel.value : currentStory;
  const bridled = !!document.getElementById("versusOptBridled")?.checked;
  const mmode = document.getElementById("versusOptMode")?.value === "own" ? "own" : "shared";
  return { turnSecs: secs, difficulty: diff, story, bridled, mmode };
}

/** Résumé des options pour l'invité (panneau salon). */
function onlineStoryLabel(sid) {
  const t = onlineT() || {};
  const key = "story" + (sid.charAt(0).toUpperCase() + sid.slice(1));
  return t[key] || sid;
}
function onlineOptsLine() {
  const t = onlineT() || {};
  const secs = online.turnSecs ? online.turnSecs + (t.versusSec || "s") : (t.versusOptNoLimit || "∞");
  return `⏱ ${secs} · ${onlineStoryLabel(currentStory)} · ${online.mmode === "own" ? (t.versusModeOwn || "own") : (t.versusModeShared || "shared")}` +
    (online.bridled ? " · ✂" : "");
}

function onlineSwitchTab(which) {
  online.tab = which;
  const l = document.getElementById("versusModeLocalBtn");
  const o = document.getElementById("versusModeOnlineBtn");
  const pl = document.getElementById("versusLocalPanel");
  const po = document.getElementById("versusOnlinePanel");
  const on = "py-2 rounded-xl text-xs font-bold border bg-sky-500 text-slate-950 border-sky-500";
  const off = "py-2 rounded-xl text-xs font-bold border bg-slate-800 text-slate-300 border-slate-600";
  if (l) l.className = which === "local" ? on : off;
  if (o) o.className = which === "online" ? on : off;
  if (pl) pl.classList.toggle("hidden", which !== "local");
  if (po) po.classList.toggle("hidden", which !== "online");
  if (which === "online") {
    const ds = document.getElementById("versusOptDiff");
    if (ds && typeof currentDifficulty !== "undefined") ds.value = currentDifficulty;
    const st = document.getElementById("versusOptStory");
    if (st && typeof currentStory !== "undefined") st.value = currentStory;
  }
}

function setupOnlineUI() {
  document.getElementById("versusModeLocalBtn")?.addEventListener("click", () => onlineSwitchTab("local"));
  document.getElementById("versusModeOnlineBtn")?.addEventListener("click", () => onlineSwitchTab("online"));
  document.getElementById("versusCreateBtn")?.addEventListener("click", async () => {
    if (!onlineNeedNet()) return;
    online.viaAuto = false;
    const me = (document.getElementById("versusOnlineName")?.value || "").trim().slice(0, 16) || versusNames[0];
    document.getElementById("versusName1").value = me;
    const opts = onlineReadHostOpts();
    online.pendingOpts = { turnSecs: opts.turnSecs, bridled: opts.bridled, mmode: opts.mmode };
    // La difficulté ET l'arc du salon s'appliquent aussi à l'hôte
    if (opts.difficulty && opts.difficulty !== currentDifficulty) {
      currentDifficulty = opts.difficulty;
      try { localStorage.setItem("opdle_diff", opts.difficulty); } catch (e) {}
      const ds = document.getElementById("versusOptDiff");
      if (ds) ds.value = opts.difficulty;
      if (typeof updateModeButtons === "function") updateModeButtons();
    }
    if (opts.story && opts.story !== currentStory && typeof STORY_POINTS !== "undefined" && STORY_POINTS[opts.story]) {
      currentStory = opts.story;
      try { localStorage.setItem("opdle_story", opts.story); } catch (e) {}
      const ss2 = document.getElementById("versusOptStory");
      if (ss2) ss2.value = opts.story;
      if (typeof updateStoryButtons === "function") updateStoryButtons();
    }
    const code = onlineRandCode();
    const ok = await onlineOpenRoom(code, true, me);
    if (ok) { onlineStatus(""); } // modale ouverte : code + réglages visibles
    updateOnlineUI();
  });
  document.getElementById("versusJoinBtn")?.addEventListener("click", async () => {
    if (!onlineNeedNet()) return;
    online.viaAuto = false;
    const code = (document.getElementById("versusRoomCode")?.value || "").trim().toUpperCase().replace(/[^A-Z]/g, "");
    if (code.length !== 4) { onlineStatus("CODE ?"); return; }
    const me = (document.getElementById("versusOnlineName")?.value || "").trim().slice(0, 16) || versusNames[1];
    const ok = await onlineOpenRoom(code, false, me);
    if (ok) { onlineStatus(""); } // modale ouverte : code + réglages visibles
    updateOnlineUI();
  });
  document.getElementById("versusRoomCode")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("versusJoinBtn")?.click();
  });
  document.getElementById("versusAutoBtn")?.addEventListener("click", () => onlineAuto());
  document.getElementById("versusPickRandomBtn")?.addEventListener("click", () => onlinePickRandom());
  document.getElementById("versusPickOkBtn")?.addEventListener("click", () => onlinePickConfirm());
  const pickInput = document.getElementById("versusPickInput");
  if (pickInput) {
    pickInput.addEventListener("input", () => renderPickSuggestions(pickInput.value));
    pickInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { hidePickSuggestions(); return; }
      if (e.key !== "Enter") return;
      const menu = document.getElementById("versusPickSuggestions");
      const first = (menu && !menu.classList.contains("hidden")) ? menu.querySelector(".pick-suggestion-item") : null;
      if (first) { first.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })); return; }
      onlinePickConfirm();
    });
    pickInput.addEventListener("blur", () => setTimeout(hidePickSuggestions, 120));
  }
  document.getElementById("versusLeaveBtn")?.addEventListener("click", () => {
    // endVersus envoie le "quit" AVANT de couper le canal : sinon l'autre
    // joueur ne remarque le départ qu'au timeout de présence.
    // Confirmation (comme le bouton Versus en jeu) : le code partagé sera perdu.
    const t = onlineT() || {};
    showConfirmModal({
      icon: "⚔️",
      title: t.versusQuitTitle || (currentLang === "fr" ? "Quitter le versus ?" : "Leave the versus?"),
      desc: t.versusQuitRoomDesc || (currentLang === "fr" ? "Le salon se ferme et son code n'est plus valable." : "The room closes and its code is no longer valid."),
      okLabel: t.versusQuitOk || (currentLang === "fr" ? "Quitter" : "Leave"),
      danger: true
    }).then(yes => {
      if (!yes) return;
      endVersus();
      closeVersusModal();
    });
  });
  onlineSwitchTab("local");
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupOnlineUI);
} else {
  setupOnlineUI();
}
