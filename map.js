/* ============================================================================
 * OPDLE — Carte du monde de One Piece
 * Quatre Blues, Red Line, Calm Belt, Grand Line (Paradise / New World),
 * Reverse Mountain, Fish-Man Island sous la Red Line.
 * ========================================================================== */
(function () {
  if (typeof document === "undefined") return;

  const ISLANDS = [
    // East Blue (quart nord-est)
    { id: "fuchsia", name: "Village de Fuchsia", short: "Fuchsia", arc: "Romance Dawn", story: "eastblue", region: "east", x: 1210, y: 250, desc: "Le port où tout commence. Luffy y rencontre Shanks et mange le Gomu Gomu no Mi." },
    { id: "orange", name: "Orange Town", short: "Orange Town", arc: "Orange", story: "eastblue", region: "east", x: 1320, y: 165, desc: "Ville portuaire de Buggy le Clown et de la belle Alvida." },
    { id: "syrup", name: "Syrup Village", short: "Syrup Village", arc: "Syrup", story: "eastblue", region: "east", x: 1450, y: 280, desc: "Le village de Kaya et du capitaine Kuro aux mille plans." },
    { id: "baratie", name: "Baratie", short: "Baratie", arc: "Baratie", story: "eastblue", region: "east", x: 1580, y: 175, desc: "Le restaurant flottant de Zeff, où Sanji rejoint l'équipage." },
    { id: "arlong", name: "Arlong Park", short: "Arlong Park", arc: "Arlong Park", story: "eastblue", region: "east", x: 1700, y: 290, desc: "Le repaire d'Arlong et le sacrifice de Nami pour Cocoyasi." },
    { id: "loguetown", name: "Loguetown", short: "Loguetown", arc: "Loguetown", story: "eastblue", region: "east", x: 1830, y: 190, desc: "La ville du roi des pirates, où tout pirate rêve de partir." },
    // Paradise (moitié droite de la Grand Line)
    { id: "reversemtn", name: "Reverse Mountain", short: "Reverse Mountain", arc: "Reverse Mountain", story: "eastblue", region: "center", x: 1010, y: 540, desc: "L'entrée de la Grand Line : les quatre courants se croisent au sommet de la Red Line." },
    { id: "alabasta", name: "Alabasta", short: "Alabasta", arc: "Alabasta", story: "alabasta", region: "paradise", x: 1125, y: 560, desc: "Le royaume de sable, en proie à la Baroque Works de Crocodile." },
    { id: "jaya", name: "Jaya", short: "Jaya", arc: "Jaya", story: "skypiea", region: "paradise", x: 1205, y: 520, desc: "L'île du roi de la jet-set et de la cité d'or disparue." },
    { id: "skypiea", name: "Skypiea", short: "Skypiea", arc: "Skypiea", story: "skypiea", region: "paradise", x: 1285, y: 435, desc: "L'île céleste d'Enel et de la cloche d'or." },
    { id: "longring", name: "Long Ring Long Land", short: "Long Ring", arc: "Long Ring Long Land", story: "skypiea", region: "paradise", x: 1360, y: 560, desc: "L'île des longues terres et du Davy Back Fight." },
    { id: "water7", name: "Water 7", short: "Water 7", arc: "Water 7", story: "water7", region: "paradise", x: 1440, y: 520, desc: "La cité des eaux et le chantier naval de Galley-La." },
    { id: "enies", name: "Enies Lobby", short: "Enies Lobby", arc: "Enies Lobby", story: "water7", region: "paradise", x: 1520, y: 560, desc: "L'île judiciaire : le sauvetage de Robin et le drapeau brûlé." },
    { id: "thriller", name: "Thriller Bark", short: "Thriller Bark", arc: "Thriller Bark", story: "thriller", region: "paradise", x: 1600, y: 520, desc: "Le navire-île de Moria, peuplé de zombies et d'ombres volées." },
    { id: "sabaody", name: "Archipel de Sabaody", short: "Sabaody", arc: "Archipel de Sabaody", story: "marineford", region: "paradise", x: 1685, y: 560, desc: "Les mangroves géantes, les bulles et la descente vers l'île des Hommes-Poissons." },
    // New World (moitié gauche)
    { id: "fishman", name: "Île des Hommes-Poissons", short: "Fish-Man Island", arc: "Île des Hommes-Poissons", story: "fishman", region: "center", x: 1010, y: 700, under: true, desc: "Sous la Red Line, le royaume Ryugu et la prophétie de Joy Boy." },
    { id: "punkhazard", name: "Punk Hazard", short: "Punk Hazard", arc: "Punk Hazard", story: "dressrosa", region: "new", x: 890, y: 560, desc: "L'île de glace et de feu, laboratoire de Caesar Clown." },
    { id: "dressrosa", name: "Dressrosa", short: "Dressrosa", arc: "Dressrosa", story: "dressrosa", region: "new", x: 810, y: 520, desc: "L'île-jouet de Doflamingo et la révolte des gladiateurs." },
    { id: "zou", name: "Zou", short: "Zou", arc: "Zou", story: "dressrosa", region: "new", x: 730, y: 560, desc: "L'île sur le dos d'un éléphant géant, refuge des Minks." },
    { id: "wholecake", name: "Whole Cake Island", short: "Whole Cake Island", arc: "Whole Cake Island", story: "wholecake", region: "new", x: 650, y: 520, desc: "Le territoire de Big Mom, ses îles sucrées et son mariage piégé." },
    { id: "wano", name: "Wano", short: "Wano", arc: "Wano Kuni", story: "wano", region: "new", x: 570, y: 560, desc: "Le pays des samouraïs, la chute de Kaido et l'éveil de Gear 5." },
    { id: "egghead", name: "Egghead", short: "Egghead", arc: "Egghead", story: "all", region: "new", x: 710, y: 595, labelSide: "below", desc: "L'île du futur de Vegapunk, porte vers les secrets du monde." },
    { id: "elbaf", name: "Elbaf", short: "Elbaf", arc: "Elbaf", story: "all", region: "new", x: 800, y: 560, labelSide: "above", alwaysOpen: true, desc: "Le pays des géants, terre de guerre et de légendes. C'est ici que Kid a défié Shanks." },
    { id: "winner", name: "Winner Island", short: "Winner Island", arc: "Winner Island", story: "all", region: "new", x: 690, y: 520, labelSide: "above", alwaysOpen: true, desc: "L'île du Nouveau Monde où l'équipage de Law est tombé dans une embuscade des Pirates de Barbe Noire." },
    { id: "laughtale", name: "Laugh Tale", short: "Laugh Tale", arc: null, story: null, region: "decor", x: 250, y: 540, decor: true, desc: "L'île au trésor de Gol D. Roger, au bout de la Grand Line." }
  ];
  const NEED = 2;
  let scale = 1, tx = 0, ty = 0;
  let dragging = false, lastX = 0, lastY = 0;

  function isEn() { return (typeof currentLang !== "undefined" && currentLang === "en"); }
  function L(fr, en) { return isEn() ? en : fr; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function baseChars() { return (typeof CHARACTERS !== "undefined" ? CHARACTERS : []).filter(c => c && c.name && !c.notGuessable); }
  function unlockedSet() { try { return new Set(typeof getUnlockedNames === "function" ? getUnlockedNames() : []); } catch (e) { return new Set(); } }
  /* ---------- affectations spécifiques à la carte ---------- */
  // Certains personnages sont affichés sur l'île de leur arc principal,
  // pas sur leur lieu de première apparition.
  const MAP_ARC_OVERRIDE = {
    "Donquixote Doflamingo": "Dressrosa",
    "Kaido": "Wano Kuni",
    "Big Mom": "Whole Cake Island"
  };
  // Shiny favorisé selon le lieu (moments clés de l'œuvre).
  const SHINY_FOCUS_BY_ARC = {
    "Elbaf": ["Shanks"],
    "Winner Island": ["Marshall D. Teach", "Bepo"]
  };
  // Personnages à ne pas afficher sur une île malgré leur arc.
  const MAP_EXCLUDE = new Set(["Rocks D. Xebec"]);
  // Roster spécifique (îles sans arc de personnage dans les données).
  const MAP_ROSTER = {
    "winner": [
      "Trafalgar D. Water Law", "Bepo", "Marshall D. Teach", "Shiryu",
      "Jesus Burgess", "Van Augur", "Doc Q", "Catarina Devon",
      "Lafitte", "Kuzan"
    ]
  };
  function mapArcOf(c) { return MAP_ARC_OVERRIDE[c.name] || c.arc; }
  function arcStats(island, un) {
    const custom = MAP_ROSTER[island.id];
    let list;
    if (custom) {
      list = custom.map(n => baseChars().find(c => c.name === n)).filter(Boolean);
    } else if (!island.arc) {
      return { total: 0, owned: 0, list: [] };
    } else {
      list = baseChars().filter(c => !MAP_EXCLUDE.has(c.name) && mapArcOf(c) === island.arc);
    }
    const owned = list.filter(c => un.has(c.name)).length;
    return { total: list.length, owned, list };
  }
  /** Visuel cohérent avec l'époque de l'île (ex. Coby jeune à Romance Dawn). */
  const NO_ERA_VARIANT = new Set(["Shanks", "Zeff"]);
  function imageForIsland(c, island) {
    if (!c) return "";
    // Shanks et Zeff gardent leur carte normale.
    if (NO_ERA_VARIANT.has(c.name)) return c.image || "";
    const sid = island.story || "all";
    if (sid === "all" || typeof CHARACTER_VARIANTS === "undefined") return c.image || "";
    const vs = CHARACTER_VARIANTS.filter(v => v && v.baseName === c.name && !v.isShiny &&
      Array.isArray(v.stories) && v.stories.indexOf(sid) >= 0);
    const pick = vs.find(v => v.excludesBase) || vs.find(v => v.onlyAsVariant) || vs[0];
    return (pick && pick.image) ? pick.image : (c.image || "");
  }
  function isOpen(island, un) {
    if (island.decor) return false;
    if (island.alwaysOpen || island.id === "fuchsia") return true;
    const st = arcStats(island, un);
    return st.total > 0 && st.owned >= Math.max(1, Math.min(NEED, st.total));
  }
  function eastBlueStats() {
    const un = unlockedSet();
    const list = ISLANDS.filter(p => p.region === "east");
    const opened = list.filter(p => isOpen(p, un)).length;
    return { total: list.length, opened };
  }
  function worldRevealed() { const s = eastBlueStats(); return s.opened >= s.total; }

  /* ---------- position du joueur + quêtes par île ---------- */
  const POS_KEY = "opdle_map_pos";
  const ARC_ISLAND = {
    "Romance Dawn": "fuchsia", "Orange": "orange", "Syrup": "syrup",
    "Baratie": "baratie", "Arlong Park": "arlong", "Loguetown": "loguetown",
    "Reverse Mountain": "reversemtn", "Whiskey Peak": "alabasta",
    "Alabasta": "alabasta", "Jaya": "jaya", "Skypiea": "skypiea",
    "Long Ring Long Land": "longring", "Water 7": "water7", "Enies Lobby": "enies",
    "Thriller Bark": "thriller", "Archipel de Sabaody": "sabaody",
    "Post-Marineford": "sabaody", "Île des Hommes-Poissons": "fishman",
    "Punk Hazard": "punkhazard", "Dressrosa": "dressrosa", "Zou": "zou",
    "Whole Cake Island": "wholecake", "Wano Kuni": "wano",
    "Egghead": "egghead", "Elbaf": "elbaf"
  };
  const STORY_ISLAND = {
    eastblue: "orange", alabasta: "alabasta", skypiea: "skypiea",
    water7: "water7", thriller: "thriller", marineford: "sabaody",
    fishman: "fishman", dressrosa: "dressrosa", wholecake: "wholecake", wano: "wano"
  };
  // Quêtes dont le lieu réel diffère de l'arc du personnage.
  const QUEST_ISLAND = {
    nami_walk: "arlong",
    usopp_sogeking: "enies",
    robin_live: "enies",
    kaido_hybrid: "wano",
    roger_shiny: "elbaf"
  };
  function getPos() { try { return localStorage.getItem(POS_KEY) || ""; } catch (e) { return ""; } }
  function setPos(id) { try { if (id) localStorage.setItem(POS_KEY, id); } catch (e) {} }
  function allQuests() {
    const chars = (typeof CHARACTERS !== "undefined" ? CHARACTERS : []);
    const vars = (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []);
    return vars.filter(v => v && v.unlock && v.questName)
      .concat(chars.filter(c => c && c.unlock && c.questName));
  }
  function questIslandId(q) {
    const qid = q.id || q.name;
    if (qid && QUEST_ISLAND[qid]) return QUEST_ISLAND[qid];
    if (q.minStory && STORY_ISLAND[q.minStory]) return STORY_ISLAND[q.minStory];
    const baseName = q.baseName || q.name;
    const base = (typeof CHARACTERS !== "undefined" ? CHARACTERS : []).find(c => c.name === baseName);
    const arc = (base && base.arc) || q.arc;
    return ARC_ISLAND[arc] || null;
  }
  function isQuestDone(q) {
    try { return typeof isVariantUnlocked === "function" ? isVariantUnlocked(q) : false; } catch (e) { return false; }
  }
  function islandQuests(isl) {
    return allQuests().filter(q => questIslandId(q) === isl.id);
  }
  function questLocation(q) {
    const id = questIslandId(q);
    const isl = ISLANDS.find(p => p.id === id);
    if (!isl) return null;
    return { id: isl.id, name: isl.name, here: getPos() === isl.id };
  }
  /** Une quête est « débloquée » quand son île est ouverte sur la carte. */
  function questUnlocked(q) {
    const id = questIslandId(q);
    if (!id) return true;
    const isl = ISLANDS.find(p => p.id === id);
    return !!isl && isOpen(isl, unlockedSet());
  }
  function focusStage(animate) {
    const vp = document.getElementById("mapViewport");
    const canvas = document.getElementById("mapCanvas");
    const svg = document.getElementById("mapSvg");
    if (!vp || !canvas) return;
    const vw = vp.clientWidth, vh = vp.clientHeight;
    if (!vw || !vh) return;
    if (worldRevealed()) {
      // Carte du monde : on montre tout (léger fond de mer dans les marges).
      if (svg) svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      scale = 1; tx = 0; ty = 0;
    } else {
      // Zoom East Blue : « slice » remplit l'écran sans bandes noires.
      if (svg) svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      scale = 2.4;
      const px = 1530, py = 240; // centre East Blue
      // Repère du SVG en mode slice : contenu centré puis rogné.
      const k = Math.max(vw / 2000, vh / 1100);
      const ax = (px - 1000) * k + vw / 2;
      const ay = (py - 550) * k + vh / 2;
      tx = vw / 2 - ax * scale;
      ty = vh / 2 - ay * scale;
    }
    // Ne jamais laisser un bord du canvas décoller du viewport (bande vide).
    if (scale >= 1) {
      tx = Math.min(0, Math.max(vw - vw * scale, tx));
      ty = Math.min(0, Math.max(vh - vh * scale, ty));
    } else {
      tx = (vw - vw * scale) / 2;
      ty = (vh - vh * scale) / 2;
    }
    if (animate) {
      canvas.classList.add("map-animating");
      setTimeout(() => canvas.classList.remove("map-animating"), 850);
    }
    applyTransform();
  }

  function render() {
    const svg = document.getElementById("mapSvg");
    const countEl = document.getElementById("mapCount");
    if (!svg) return;
    const un = unlockedSet();
    const opened = ISLANDS.filter(p => isOpen(p, un)).length;
    const world = worldRevealed();
    const eastStats = eastBlueStats();
    if (countEl) {
      countEl.textContent = world
        ? opened + " / " + (ISLANDS.length - 1) + " " + L("îles", "islands")
        : "East Blue " + eastStats.opened + " / " + eastStats.total;
    }
    const hintEl = document.getElementById("mapHint");
    if (hintEl) {
      hintEl.textContent = world
        ? L("Clique sur une île révélée pour voir sa fiche · molette / +− pour zoomer.", "Click a revealed island for its file · wheel / +− to zoom.")
        : L("Termine les 6 arcs d'East Blue pour révéler la Grand Line.", "Finish all 6 East Blue arcs to reveal the Grand Line.");
    }
    const drawList = world ? ISLANDS : ISLANDS.filter(p => p.region === "east");

    const byId = {};
    ISLANDS.forEach(p => { byId[p.id] = p; });
    const east = ["fuchsia","orange","syrup","baratie","arlong","loguetown"].map(id => byId[id]);
    const paradise = ["reversemtn","alabasta","jaya","skypiea","longring","water7","enies","thriller","sabaody"].map(id => byId[id]);
    const newworld = ["fishman","punkhazard","dressrosa","zou","wholecake","wano"].map(id => byId[id]);
    const pathOf = (arr) => arr.map((p, i) => (i === 0 ? "M" : " L") + p.x + " " + p.y).join("");
    const loguetown = byId.loguetown, rev = byId.reversemtn, sab = byId.sabaody, fish = byId.fishman, punk = byId.punkhazard;
    // East Blue → Reverse Mountain (liaison, révélée avec la Grand Line)
    const eastPath = pathOf(east) + (world ? ` Q ${(loguetown.x + rev.x) / 2} ${loguetown.y + 90} ${rev.x} ${rev.y}` : "");
    // Paradise → virage sous la Red Line (Fish-Man) → New World
    const grandPath = pathOf(paradise)
      + ` C ${sab.x - 140} ${sab.y + 230}, ${fish.x + 230} ${fish.y + 90}, ${fish.x} ${fish.y}`
      + ` C ${fish.x - 230} ${fish.y + 90}, ${punk.x + 140} ${punk.y + 230}, ${punk.x} ${punk.y}`
      + newworld.slice(2).map(p => ` L ${p.x} ${p.y}`).join("");
    // Route finale (discrète) : Wano → Laugh Tale, en restant sur la Grand Line.
    const finalPath = `M ${byId.wano.x} ${byId.wano.y} Q 420 520 ${byId.laughtale.x} ${byId.laughtale.y}`;

    let html = `
      <defs>
        <radialGradient id="sea" cx="50%" cy="45%" r="80%">
          <stop offset="0%" stop-color="#1d5570"/><stop offset="55%" stop-color="#123a52"/><stop offset="100%" stop-color="#0a2233"/>
        </radialGradient>
        <linearGradient id="redline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#5a1a1a"/><stop offset="35%" stop-color="#8f2b2b"/><stop offset="65%" stop-color="#7a2222"/><stop offset="100%" stop-color="#4a1414"/>
        </linearGradient>
        <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4f7f4a"/><stop offset="100%" stop-color="#2f5a34"/>
        </linearGradient>
        <pattern id="hatch" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(160,210,240,0.14)" stroke-width="2"/>
        </pattern>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0H0V50" fill="none" stroke="rgba(160,210,240,0.05)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="2000" height="1100" fill="url(#sea)"/>
      <rect width="2000" height="1100" fill="url(#grid)"/>

      <!-- Bandes Calm Belt -->
      <rect x="0" y="430" width="2000" height="70" fill="rgba(9,30,46,0.65)"/>
      <rect x="0" y="430" width="2000" height="70" fill="url(#hatch)"/>
      <rect x="0" y="600" width="2000" height="80" fill="rgba(9,30,46,0.65)"/>
      <rect x="0" y="600" width="2000" height="80" fill="url(#hatch)"/>
      <text x="470" y="468" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(160,210,240,0.45)" letter-spacing="12">CALM BELT</text>
      <text x="1530" y="468" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(160,210,240,0.45)" letter-spacing="12">CALM BELT</text>
      <text x="470" y="652" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(160,210,240,0.45)" letter-spacing="12">CALM BELT</text>
      <text x="1530" y="652" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(160,210,240,0.45)" letter-spacing="12">CALM BELT</text>

      <!-- Grand Line -->
      <rect x="0" y="500" width="2000" height="100" fill="rgba(30,90,120,0.18)"/>
      <line x1="0" y1="500" x2="2000" y2="500" stroke="rgba(160,210,240,0.18)" stroke-width="2"/>
      <line x1="0" y1="600" x2="2000" y2="600" stroke="rgba(160,210,240,0.18)" stroke-width="2"/>
      <text x="1380" y="590" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(246,178,31,0.35)" letter-spacing="10">${world ? "PARADISE" : ""}</text>
      <text x="640" y="590" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(246,178,31,0.35)" letter-spacing="10">${world ? "NEW WORLD" : ""}</text>

      <!-- Red Line -->
      <path d="M 950 0 L 1050 0 L 1040 120 L 1062 250 L 1032 380 L 1058 490 L 1022 545 L 1060 610 L 1032 730 L 1060 850 L 1040 980 L 1050 1100 L 950 1100 L 960 980 L 940 850 L 962 730 L 938 610 L 978 545 L 942 490 L 968 380 L 938 250 L 960 120 Z"
        fill="url(#redline)" stroke="#3a0f0f" stroke-width="3"/>
      <text x="1000" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(40,8,8,0.75)" letter-spacing="4">RED</text>
      <text x="1000" y="340" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(40,8,8,0.75)" letter-spacing="4">LINE</text>
      ${world ? "" : `<rect x="0" y="420" width="2000" height="290" fill="rgba(4,10,18,0.82)"/>
        <text x="1000" y="548" text-anchor="middle" font-family="Georgia, serif" font-size="26" fill="rgba(246,178,31,0.5)" letter-spacing="8">GRAND LINE — À DÉCOUVRIR</text>
        <text x="1000" y="585" text-anchor="middle" font-family="Segoe UI" font-size="15" fill="rgba(160,210,240,0.55)">Termine East Blue (6/6) pour révéler la suite</text>`}

      <!-- Îles décoratives (Blues) -->
      <g fill="url(#land)" stroke="rgba(20,50,25,0.7)" stroke-width="2" opacity="0.9">
        <ellipse cx="300" cy="200" rx="70" ry="28"/><ellipse cx="470" cy="320" rx="52" ry="22"/>
        <ellipse cx="660" cy="160" rx="46" ry="20"/><ellipse cx="760" cy="330" rx="38" ry="16"/>
        <ellipse cx="320" cy="880" rx="64" ry="26"/><ellipse cx="540" cy="990" rx="50" ry="20"/>
        <ellipse cx="1250" cy="880" rx="70" ry="28"/><ellipse cx="1500" cy="990" rx="46" ry="18"/>
        <ellipse cx="1700" cy="860" rx="40" ry="16"/>
      </g>

      <!-- Labels des mers -->
      <text x="470" y="90" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(160,210,240,0.45)" letter-spacing="6">NORTH BLUE</text>
      <text x="1530" y="90" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(160,210,240,0.45)" letter-spacing="6">EAST BLUE</text>
      <text x="470" y="1050" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(160,210,240,0.45)" letter-spacing="6">WEST BLUE</text>
      <text x="1530" y="1050" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="rgba(160,210,240,0.45)" letter-spacing="6">SOUTH BLUE</text>

      <!-- Routes -->
      <path d="${eastPath}" fill="none" stroke="rgba(246,178,31,0.5)" stroke-width="3" stroke-dasharray="9 8"/>
      ${world ? `<path d="${grandPath}" fill="none" stroke="rgba(246,178,31,0.7)" stroke-width="3" stroke-dasharray="10 8" stroke-linejoin="round"/>` : ""}
      ${world ? `
        <!-- Trois routes post-Wano : Luffy (SE), Law (NE), Kid (E), toutes sur la Grand Line -->
        <path d="M ${byId.wano.x} ${byId.wano.y} Q 635 600 ${byId.egghead.x} ${byId.egghead.y}"
          fill="none" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="6 7" stroke-linecap="round" opacity="0.9"/>
        <path d="M ${byId.wano.x} ${byId.wano.y} Q 635 520 ${byId.winner.x} ${byId.winner.y}"
          fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="6 7" stroke-linecap="round" opacity="0.9"/>
        <path d="M ${byId.wano.x} ${byId.wano.y} Q 690 560 ${byId.elbaf.x} ${byId.elbaf.y}"
          fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6 7" stroke-linecap="round" opacity="0.9"/>
        <path d="${finalPath}" fill="none" stroke="rgba(246,178,31,0.3)" stroke-width="2" stroke-dasharray="4 9"/>
        <g transform="translate(62, 872)" font-family="Segoe UI, Arial">
          <rect x="-14" y="-30" width="352" height="128" rx="12" fill="rgba(5,15,25,0.72)" stroke="rgba(148,163,184,0.28)"/>
          <text x="0" y="-8" font-size="13" font-weight="800" fill="#94a3b8" letter-spacing="2">ROUTES APRÈS WANO</text>
          <line x1="0" y1="16" x2="26" y2="16" stroke="#4ade80" stroke-width="4" stroke-dasharray="6 5"/>
          <text x="36" y="21" font-size="16" font-weight="700" fill="#86efac">Luffy → Egghead</text>
          <line x1="0" y1="44" x2="26" y2="44" stroke="#a78bfa" stroke-width="4" stroke-dasharray="6 5"/>
          <text x="36" y="49" font-size="16" font-weight="700" fill="#c4b5fd">Law → Winner Island</text>
          <line x1="0" y1="72" x2="26" y2="72" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6 5"/>
          <text x="36" y="77" font-size="16" font-weight="700" fill="#7dd3fc">Kid → Elbaf</text>
        </g>
      ` : ""}

      <text x="1000" y="1080" text-anchor="middle" font-family="Georgia, serif" font-size="24" fill="rgba(246,241,230,0.18)" letter-spacing="12">GRAND LINE</text>`;

    drawList.forEach((p) => {
      const open = isOpen(p, un);
      const isDecor = !!p.decor;
      const st = arcStats(p, un);
      const col = open ? "#f6b21f" : (isDecor ? "#6b7280" : "#4b5f73");
      const idx = ISLANDS.indexOf(p);
      const above = p.under ? false : (p.labelSide ? p.labelSide === "above" : (p.y < 500 || idx % 2 === 0));
      const labelY = p.under ? p.y + 52 : (above ? p.y - 44 : p.y + 60);
      const name = p.short || p.name;
      const here = getPos() === p.id;
      const quests = open ? islandQuests(p) : [];
      const pendingQuests = quests.filter(q => !isQuestDone(q)).length;
      const sub = isDecor ? "???" : (open ? st.owned + "/" + st.total + " " + L("héros", "heroes") : st.owned + "/" + Math.max(1, Math.min(NEED, st.total)) + " " + L("requis", "required"));
      html += `
        <g class="map-island${open ? " is-open" : " is-locked"}${isDecor ? " is-decor" : ""}${here ? " is-here" : ""}" data-id="${p.id}" style="cursor:${open ? "pointer" : "default"}">
          ${here ? `<circle cx="${p.x}" cy="${p.y}" r="31" fill="none" stroke="rgba(226,232,240,0.85)" stroke-width="1.5" stroke-dasharray="3 4"/>` : ""}
          <circle cx="${p.x}" cy="${p.y}" r="22" fill="rgba(5,15,25,0.9)" stroke="${col}" stroke-width="${open ? 3 : 2}"
            ${open ? 'filter="drop-shadow(0 0 9px rgba(246,178,31,0.65))"' : 'stroke-dasharray="4 4"'}/>
          <circle cx="${p.x}" cy="${p.y}" r="7" fill="${col}" opacity="${open ? 1 : 0.45}"/>
          ${open || isDecor ? "" : `<text x="${p.x}" y="${p.y + 4}" text-anchor="middle" font-size="11" fill="#94a3b8">🔒</text>`}
          ${quests.length ? `<g class="map-quest-badge" transform="translate(${p.x + 17},${p.y - 17})">
            <title>${esc(quests.length + " " + L("quête(s) ici", "quest(s) here"))}</title>
            <circle r="10" fill="${pendingQuests ? "#f59e0b" : "#10b981"}" stroke="#0b1220" stroke-width="2"/>
            <text x="0" y="3.5" text-anchor="middle" font-size="11.5" font-weight="900" fill="#0b1220">${pendingQuests ? "!" : "✓"}</text>
          </g>` : ""}
          <text x="${p.x}" y="${labelY}" text-anchor="middle" font-size="19" font-weight="${open ? 800 : 600}"
            font-family="Segoe UI, Arial" fill="${open ? "#f6f1e6" : (isDecor ? "#9ca3af" : "#64748b")}">${esc(name)}</text>
          <text x="${p.x}" y="${labelY + 18}" text-anchor="middle" font-size="12.5" fill="${open ? "#c9a25a" : "#475569"}">${here ? "📍 " + L("vous êtes ici", "you are here") : sub}</text>
        </g>`;
    });
    svg.innerHTML = html;
    svg.querySelectorAll(".map-island.is-open").forEach(g => {
      g.addEventListener("click", () => openIsland(g.dataset.id));
    });
  }

  function openIsland(id) {
    const un = unlockedSet();
    const isl = ISLANDS.find(p => p.id === id);
    if (!isl) return;
    const st = arcStats(isl, un);
    const panel = document.getElementById("mapIslandPanel");
    const body = document.getElementById("mapIslandBody");
    if (!panel || !body) return;
    const chars = st.list;
    const quests = islandQuests(isl);
    const shinyNames = SHINY_FOCUS_BY_ARC[isl.arc] || null;
    const questHtml = quests.length
      ? quests.map(q => {
          const done = isQuestDone(q);
          const qn = q.questName ? (q.questName[isEn() ? "en" : "fr"] || q.questName.fr || q.questName.en) : L("Quête", "Quest");
          let detail = L("En cours", "In progress");
          if (done) detail = L("Terminée", "Completed");
          else if (typeof questProgress === "function") {
            const prog = questProgress(q);
            const parts = (prog && prog.parts ? prog.parts : []).slice(0, 2)
              .map(p => Math.min(p.cur, p.need) + "/" + p.need + " " + p.label);
            if (parts.length) detail = parts.join(" · ");
          }
          return `<div class="map-quest${done ? " is-done" : ""}">
            <span class="map-quest-ico">${done ? "✓" : "!"}</span>
            <div class="min-w-0 flex-1">
              <p class="map-quest-name">${esc(done ? qn : L("Quête en cours", "Quest in progress"))}</p>
              <p class="map-quest-sub">${esc(detail)}</p>
            </div>
          </div>`;
        }).join("")
      : `<p class="text-[11px] text-slate-500">${L("Aucune quête sur cette île.", "No quest on this island.")}</p>`;
    body.innerHTML = `
      <div class="flex items-start gap-2">
        <div class="flex-1 min-w-0">
          <h3 class="text-base font-extrabold text-amber-300">${esc(isl.name)}</h3>
          <p class="text-[11px] text-slate-400 mt-0.5">${esc(isl.arc || "")} · ${st.owned}/${st.total} ${L("personnages possédés", "characters owned")}</p>
        </div>
        <button type="button" id="mapIslandClose" class="text-slate-400 hover:text-white text-lg font-bold leading-none">✕</button>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed mt-2">${esc(isl.desc)}</p>
      <div class="flex flex-wrap gap-1.5 mt-3">
        ${chars.map(c => {
          const ok = un.has(c.name);
          const img = imageForIsland(c, isl);
          const thumb = (typeof window.thumbSrc === "function") ? window.thumbSrc(img) : img;
          return `<div class="map-mini${ok ? " is-owned" : ""}" title="${esc(c.name)}">
            ${thumb ? `<img src="${thumb}" alt="" loading="lazy" decoding="async" onerror="this.style.visibility='hidden'">` : ""}
            <span>${ok ? "✓" : "🔒"}</span></div>`;
        }).join("")}
      </div>
      <div class="map-quests">
        <div class="map-quests-head">
          <span>${L("Quêtes", "Quests")} (${quests.length})</span>
          ${quests.length ? `<button type="button" id="mapAllQuests" class="map-quests-all">${L("Tout voir", "See all")}</button>` : ""}
        </div>
        ${questHtml}
      </div>
      ${isl.story ? `<p class="map-play-hint">🎯 ${L("Jouer cet arc augmente les chances de tomber sur ses personnages.", "Playing this arc increases the chance of drawing its characters.")}</p>` : ""}
      ${shinyNames ? `<p class="map-play-hint" style="color:#c4b5fd">✨ ${L("Chance de shiny augmentée pour", "Increased shiny chance for")} <b>${esc(shinyNames.join(", "))}</b>.</p>` : ""}
      <div class="flex gap-2 mt-3">
        ${isl.story ? `<button type="button" id="mapPlayArc" class="flex-1 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold">${L("Jouer cet arc", "Play this arc")}</button>` : ""}
        <button type="button" id="mapCloseAll" class="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold">${L("Fermer", "Close")}</button>
      </div>`;
    panel.classList.remove("hidden");
    const close = document.getElementById("mapIslandClose");
    if (close) close.addEventListener("click", () => panel.classList.add("hidden"));
    const closeAll = document.getElementById("mapCloseAll");
    if (closeAll) closeAll.addEventListener("click", () => document.getElementById("mapModal").classList.add("hidden"));
    const allQuests = document.getElementById("mapAllQuests");
    if (allQuests) allQuests.addEventListener("click", () => {
      document.getElementById("mapModal").classList.add("hidden");
      if (typeof openQuestsModal === "function") openQuestsModal();
    });
    const play = document.getElementById("mapPlayArc");
    if (play) play.addEventListener("click", () => { setPos(isl.id); playStory(isl.story, isl.arc); });
  }

  function playStory(story, arc) {
    if (!story) return;
    try { if (typeof currentStory !== "undefined") currentStory = story; localStorage.setItem("opdle_story", story); } catch (e) {}
    // Favorise les personnages de l'arc de l'île choisie au prochain tirage.
    if (typeof setArcFocus === "function") setArcFocus(arc || null);
    // Et favorise le shiny du moment clé de l'île (Shanks à Elbaf, Teach à Winner Island).
    if (typeof setShinyFocus === "function") setShinyFocus(SHINY_FOCUS_BY_ARC[arc] || null);
    const sel = document.getElementById("storySelect");
    if (sel) sel.value = story;
    if (typeof updateStoryButtons === "function") updateStoryButtons();
    document.getElementById("mapModal").classList.add("hidden");
    if (typeof startGame === "function") startGame();
  }

  function applyTransform() {
    const canvas = document.getElementById("mapCanvas");
    if (!canvas) return;
    canvas.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")";
  }
  function resetView() { focusStage(true); }
  function setZoom(s) { scale = Math.max(0.6, Math.min(3, s)); applyTransform(); }

  function setupPanZoom() {
    const vp = document.getElementById("mapViewport");
    if (!vp) return;
    vp.addEventListener("wheel", (e) => {
      e.preventDefault();
      const canvas = document.getElementById("mapCanvas");
      if (canvas) canvas.classList.remove("map-animating");
      const rect = vp.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const old = scale;
      setZoom(scale * (e.deltaY < 0 ? 1.15 : 0.87));
      tx = mx - (mx - tx) * (scale / old);
      ty = my - (my - ty) * (scale / old);
      applyTransform();
    }, { passive: false });
    vp.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".map-island")) return;
      const canvas = document.getElementById("mapCanvas");
      if (canvas) canvas.classList.remove("map-animating");
      dragging = true; lastX = e.clientX; lastY = e.clientY;
      vp.setPointerCapture(e.pointerId);
    });
    vp.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      tx += e.clientX - lastX; ty += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      applyTransform();
    });
    vp.addEventListener("pointerup", () => { dragging = false; });
    vp.addEventListener("pointercancel", () => { dragging = false; });
  }

  function setup() {
    const btn = document.getElementById("mapBtn");
    const modal = document.getElementById("mapModal");
    if (!btn || !modal) return;
    btn.addEventListener("click", () => {
      render();
      modal.classList.remove("hidden");
      requestAnimationFrame(() => focusStage(true));
    });
    document.querySelectorAll(".mapClose").forEach(b => b.addEventListener("click", () => modal.classList.add("hidden")));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });
    const zin = document.getElementById("mapZoomIn");
    const zout = document.getElementById("mapZoomOut");
    const zreset = document.getElementById("mapReset");
    if (zin) zin.addEventListener("click", () => setZoom(scale * 1.2));
    if (zout) zout.addEventListener("click", () => setZoom(scale * 0.83));
    if (zreset) zreset.addEventListener("click", () => focusStage(true));
    setupPanZoom();
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.classList.contains("hidden")) modal.classList.add("hidden"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();

  window.OPMap = {
    render,
    open: () => { render(); const m = document.getElementById("mapModal"); if (m) { m.classList.remove("hidden"); requestAnimationFrame(() => focusStage(true)); } },
    islands: ISLANDS,
    questLocation,
    questUnlocked,
    position: getPos,
    setPosition: setPos
  };
})();
