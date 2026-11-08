/* ============================================================================
 * OPDLE — Jeu « Fruit du Démon » intégré à l'application.
 * Même nav / même DA : seule la zone de jeu change.
 * ========================================================================== */
(function () {
  if (typeof document === "undefined") return;
  const FRUITS = (typeof DEVIL_FRUITS !== "undefined" ? DEVIL_FRUITS : []);
  const CHARS = (typeof CHARACTERS !== "undefined" ? CHARACTERS : []);
  if (!FRUITS.length || !CHARS.length) return;

  const KEY = "opdle_fruits_unlocked";
  const MAX = 10;
  let fruit = null;
  let guesses = [];
  let over = false;
  let abandoned = false;
  let revealedHints = {};

  function clean(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "").trim();
  }
  function getUnlocked() { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } }
  function unlock(id) {
    const a = getUnlocked();
    if (a.indexOf(id) < 0) { a.push(id); try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  }
  function dailyIndex() {
    const d = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    let h = 2166136261;
    for (const ch of String(seed)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
    return (h >>> 0) % pool().length;
  }
  function validUsers(f) {
    // On résout chaque nom vers le personnage réel de la base (nom canonique),
    // sinon un fruit dont l'utilisateur n'est connu que par un alias serait impossible à deviner.
    return [f.user].concat(f.altUsers || []).filter(Boolean)
      .map(u => { const c = charByName(u) || findChar(u); return c ? c.name : null; })
      .filter(Boolean);
  }
  function playable(f) { return validUsers(f).length > 0; }
  function pool() {
    const p = FRUITS.filter(playable);
    return p.length ? p : FRUITS;
  }
  function findChar(text) {
    const q = clean(text);
    if (!q) return null;
    return CHARS.find(c => clean(c.name) === q || (c.aliases || []).some(a => clean(a) === q)) || null;
  }
  function charByName(name) { return CHARS.find(c => c.name === name) || null; }
  function getArcName(a) {
    if (!a) return "—";
    try { if (typeof getArcDisplayName === "function") return getArcDisplayName(a); } catch (e) {}
    return a;
  }

  function newGame(daily) {
    const forced = (typeof location !== "undefined") ? new URLSearchParams(location.search).get("fruit") : null;
    const list = pool();
    if (forced) fruit = list.find(f => f.id === forced) || FRUITS.find(f => f.id === forced) || list[0];
    else fruit = list[daily ? dailyIndex() : Math.floor(Math.random() * list.length)];
    guesses = [];
    over = false;
    abandoned = false;
    revealedHints = {};
    const inp = document.getElementById("fpInput");
    if (inp) { inp.value = ""; inp.disabled = false; }
    const btn = document.getElementById("fpGuessBtn");
    if (btn) btn.disabled = false;
    hideSug();
    render();
  }

  function render() {
    if (!fruit) return;
    const best = document.getElementById("fpBest");
    if (best) best.textContent = "🏆 Fruits débloqués : " + getUnlocked().length + " / " + FRUITS.length;
    const title = document.getElementById("fpFruitName");
    if (title) title.textContent = "« " + fruit.name + " »";

    const attempts = document.getElementById("fpAttempts");
    if (attempts) attempts.textContent = over ? (abandoned ? "Partie abandonnée" : "Partie terminée") : "Essai " + (guesses.length + 1);
    const left = document.getElementById("fpLeft");
    if (left) left.textContent = over ? "" : (MAX - guesses.length) + " essai(s) restant(s) — les indices se débloquent à chaque erreur";
    const giveUp = document.getElementById("fpGiveUpBtn");
    if (giveUp) { giveUp.hidden = over; giveUp.style.display = over ? "none" : ""; }

    setHint("fpHintType", "type", 3, fruit.type);
    setHint("fpHintArc", "arc", 4, getArcName(fruit.arc));
    setHint("fpHintName", "name", 6, fruit.nameFr + " / " + fruit.nameEn);
    setHint("fpHintPower", "power", 8, (fruit.power && fruit.power.fr) || "");

    const list = document.getElementById("fpGuesses");
    if (list) {
      list.innerHTML = "";
      guesses.slice().reverse().forEach(name => {
        const c = charByName(name);
        const ok = validUsers(fruit).indexOf(name) >= 0;
        const row = document.createElement("div");
        row.className = "fp-guess-row " + (ok ? "ok" : "no");
        row.innerHTML = `${c && c.image ? `<img src="${c.image}" alt="" onerror="this.style.visibility='hidden'">` : ""}
          <span class="name">${name}</span><span class="mark">${ok ? "✓" : "✗"}</span>`;
        list.appendChild(row);
      });
    }

    const msg = document.getElementById("fpMessage");
    if (msg) {
      const thumb = fruit.image
        ? `<img class="fp-result-img" src="${fruit.image}" alt="" loading="eager" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="fp-result-noimg" style="display:none">?</div>`
        : `<div class="fp-result-noimg">?</div>`;
      if (over && !abandoned && validUsers(fruit).indexOf(guesses[guesses.length - 1]) >= 0) {
        unlock(fruit.id);
        msg.innerHTML = `<div class="fp-msg win"><div class="fp-result">${thumb}<div class="fp-result-text">🏴‍☠️ <b>Nakama trouvé !</b><br>Tu as identifié <b>${validUsers(fruit)[0]}</b> en ${guesses.length} essai(s).</div></div><div class="fp-actions">
          <button type="button" class="fp-btn" id="fpAvatarBtn">Utiliser le fruit en avatar</button>
          <button type="button" class="fp-btn quiet" id="fpReplayBtn">Nouveau fruit</button></div></div>`;
        bindOverActions();
      } else if (over) {
        const loseTxt = abandoned
          ? `☠️ Abandon — c'était <b>${validUsers(fruit).join(" / ")}</b> qui a mangé le <b>${fruit.name}</b>.`
          : `☠️ Perdu — c'était <b>${validUsers(fruit).join(" / ")}</b> qui a mangé le <b>${fruit.name}</b>.`;
        msg.innerHTML = `<div class="fp-msg lose"><div class="fp-result">${thumb}<div class="fp-result-text">${loseTxt}</div></div><div class="fp-actions">
          <button type="button" class="fp-btn quiet" id="fpReplayBtn">Nouveau fruit</button></div></div>`;
        bindOverActions();
      } else {
        msg.innerHTML = "";
      }
    }
  }

  function setHint(id, key, threshold, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const unlocked = guesses.length >= threshold;
    const revealed = unlocked && !!revealedHints[key];
    el.classList.toggle("is-open", revealed);
    el.classList.toggle("is-available", unlocked && !revealed);
    el.classList.toggle("is-locked", !unlocked);
    const v = el.querySelector(".fp-hint-val");
    if (v) v.textContent = revealed ? value : (unlocked ? "Cliquer pour révéler" : "???");
  }

  function bindOverActions() {
    const av = document.getElementById("fpAvatarBtn");
    if (av) av.addEventListener("click", () => {
      try { localStorage.setItem("opdle_avatar", "fruit:" + fruit.id); } catch (e) {}
      av.textContent = "✓ Avatar enregistré";
      av.disabled = true;
      if (typeof refreshAvatarDisplays === "function") refreshAvatarDisplays();
    });
    const rp = document.getElementById("fpReplayBtn");
    if (rp) rp.addEventListener("click", () => newGame(false));
  }

  function abandon() {
    if (over || !fruit) return;
    abandoned = true;
    over = true;
    const inp = document.getElementById("fpInput");
    if (inp) inp.disabled = true;
    const btn = document.getElementById("fpGuessBtn");
    if (btn) btn.disabled = true;
    hideSug();
    render();
  }

  function submit(text) {
    if (over) return;
    const c = findChar(text);
    if (!c) { flashError(); return; }
    if (guesses.indexOf(c.name) >= 0) return;
    guesses.push(c.name);
    if (validUsers(fruit).indexOf(c.name) >= 0) over = true;
    else if (guesses.length >= MAX) over = true;
    const inp = document.getElementById("fpInput");
    if (inp) inp.value = "";
    hideSug();
    if (over) {
      if (inp) inp.disabled = true;
      const btn = document.getElementById("fpGuessBtn");
      if (btn) btn.disabled = true;
    }
    render();
  }

  function flashError() {
    const inp = document.getElementById("fpInput");
    if (!inp) return;
    inp.classList.add("is-error");
    setTimeout(() => inp.classList.remove("is-error"), 500);
  }

  function hideSug() {
    const m = document.getElementById("fpSuggestions");
    if (m) { m.classList.add("hidden"); m.innerHTML = ""; }
  }
  function setupSearch() {
    const inp = document.getElementById("fpInput");
    const menu = document.getElementById("fpSuggestions");
    const btn = document.getElementById("fpGuessBtn");
    if (inp) {
      inp.addEventListener("input", () => {
        const q = clean(inp.value);
        if (!q) { hideSug(); return; }
        const matches = CHARS.filter(c => clean(c.name).indexOf(q) >= 0 || (c.aliases || []).some(a => clean(a).indexOf(q) >= 0)).slice(0, 8);
        if (!matches.length) { hideSug(); return; }
        menu.innerHTML = "";
        matches.forEach(c => {
          const item = document.createElement("div");
          item.className = "fp-sug";
          item.innerHTML = `${c.image ? `<img src="${c.image}" alt="" onerror="this.style.visibility='hidden'">` : ""}<span>${c.name}</span>`;
          item.addEventListener("mousedown", (e) => { e.preventDefault(); submit(c.name); });
          menu.appendChild(item);
        });
        menu.classList.remove("hidden");
      });
      inp.addEventListener("blur", () => setTimeout(hideSug, 150));
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { hideSug(); return; }
        if (e.key !== "Enter") return;
        const first = menu && menu.querySelector(".fp-sug");
        if (first && !menu.classList.contains("hidden")) { first.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })); return; }
        submit(inp.value);
      });
    }
    if (btn) btn.addEventListener("click", () => submit(inp.value));
  }

  function openFruit() {
    const fv = document.getElementById("fruitView");
    if (!fv) return;
    document.getElementById("gameHeader")?.classList.add("hidden");
    document.getElementById("gameMain")?.classList.add("hidden");
    fv.classList.remove("hidden");
    document.getElementById("fruitBtn")?.classList.add("is-active");
    if (!fruit) newGame(true); else render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function closeFruit() {
    document.getElementById("fruitView")?.classList.add("hidden");
    document.getElementById("gameHeader")?.classList.remove("hidden");
    document.getElementById("gameMain")?.classList.remove("hidden");
    document.getElementById("fruitBtn")?.classList.remove("is-active");
  }

  function setup() {
    document.getElementById("fruitBtn")?.addEventListener("click", openFruit);
    document.getElementById("fruitBackBtn")?.addEventListener("click", closeFruit);
    document.getElementById("fpGiveUpBtn")?.addEventListener("click", abandon);
    // Indices optionnels : cliquer sur une carte d'indice disponible la révèle.
    [["fpHintType", "type", 3], ["fpHintArc", "arc", 4], ["fpHintName", "name", 6], ["fpHintPower", "power", 8]].forEach(function (row) {
      const el = document.getElementById(row[0]);
      if (!el) return;
      el.addEventListener("click", function () {
        const key = row[1], threshold = row[2];
        if (guesses.length >= threshold && !revealedHints[key]) {
          revealedHints[key] = true;
          render();
        }
      });
    });
    setupSearch();
    // Démo / captures
    if (typeof location !== "undefined" && location.search.indexOf("fruitDemo=1") >= 0) {
      openFruit();
      const q = new URLSearchParams(location.search);
      const nWrong = Math.min(9, Math.max(0, parseInt(q.get("fruitWrong") || "3", 10)));
      CHARS.filter(c => validUsers(fruit).indexOf(c.name) < 0).slice(0, nWrong).forEach(c => submit(c.name));
      if (q.get("fruitWin") === "1") submit(validUsers(fruit)[0]);
      const rev = (q.get("fruitHints") || "").split(",").filter(Boolean);
      rev.forEach(k => { revealedHints[k] = true; });
      render();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();

  window.FruitPlay = { open: openFruit, close: closeFruit, next: () => newGame(false), answer: () => fruit && ({ fruit: fruit.id, users: validUsers(fruit) }), submit };
})();
