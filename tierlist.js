/* ============================================================================
 * OPDLE — Mode « Tier List »
 * Classement des personnages par rang (S/A/B/C/D) + banc (mis de côté).
 * Filtres : personnages (base, sans alt/shiny), empereurs, tous (avec variantes).
 * Glisser-déposer sur desktop, clic-sélection puis clic-rang sur mobile.
 * État sauvegardé dans localStorage.
 * ========================================================================== */
(function () {
  if (typeof document === "undefined") return;

  const TIERS = ["S", "A", "B", "C", "D"];
  const BENCH = "bench";
  const POOL = "pool";
  const KEY = "opdle_tierlist_v1";

  let state = load();
  let filter = "chars";
  let sortMode = "name";
  let selectedId = null;

  function load() {
    const base = { S: [], A: [], B: [], C: [], D: [], bench: [] };
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      for (const k of Object.keys(base)) if (Array.isArray(s[k])) base[k] = s[k].filter(x => typeof x === "string");
    } catch (e) {}
    return base;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function isEn() { return (typeof currentLang !== "undefined" && currentLang === "en"); }
  function L(fr, en) { return isEn() ? en : fr; }

  function variantsById() {
    const m = {};
    (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).forEach(v => { if (v && v.id) m[v.id] = v; });
    return m;
  }

  function baseChars() {
    return (typeof CHARACTERS !== "undefined" ? CHARACTERS : []).filter(c => c && c.name && !c.notGuessable);
  }

  function cardFromBase(c) {
    return { id: c.name, name: c.name, image: c.image, rarity: c.rarity, prime: c.prime };
  }
  function cardFromVariant(v) {
    const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
    const disp = (v._variantDisplay && (v._variantDisplay[lang] || v._variantDisplay.fr || v._variantDisplay.en)) || v.name || v.id || "?";
    return { id: v.id, name: disp, image: v.image || (v.baseName ? ((typeof findCharByName === "function" && findCharByName(v.baseName) || {}).image) : null), rarity: v.rarity, prime: v.prime };
  }

  function emperorNames() {
    const names = new Set();
    const cats = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : []);
    const cat = cats.find(c => c.id === "emperors");
    const vmap = variantsById();
    if (cat && Array.isArray(cat.members)) {
      cat.members.forEach(m => {
        if (vmap[m] && vmap[m].baseName) names.add(vmap[m].baseName);
        else names.add(m);
      });
    }
    const isEmperorTitle = (t) => {
      const s = (t || "").toLowerCase();
      if (!s) return false;
      // « Commandant, Equipage d'empereur » n'est PAS un empereur
      if (s.includes("equipage d'empereur") || s.includes("emperor's crew")) return false;
      return /empereur|emperor|yonko/.test(s);
    };
    baseChars().forEach(c => {
      const t = c.titre ? ((c.titre.fr || "") + " " + (c.titre.en || "")) : "";
      if (isEmperorTitle(t)) names.add(c.name);
    });
    return names;
  }

  function getCards() {
    const bases = baseChars();
    if (filter === "emperors") {
      const names = emperorNames();
      return bases.filter(c => names.has(c.name)).map(cardFromBase);
    }
    if (filter === "all") {
      const seen = new Set();
      const cards = [];
      bases.forEach(c => { if (!seen.has(c.name)) { seen.add(c.name); cards.push(cardFromBase(c)); } });
      (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).forEach(v => {
        if (!v || !v.id || seen.has(v.id)) return;
        seen.add(v.id);
        cards.push(cardFromVariant(v));
      });
      return cards;
    }
    return bases.map(cardFromBase);
  }

  function tierOf(id) {
    for (const k of Object.keys(state)) if (state[k].indexOf(id) >= 0) return k;
    return POOL;
  }

  function place(id, tier) {
    if (!id) return;
    for (const k of Object.keys(state)) {
      const i = state[k].indexOf(id);
      if (i >= 0) state[k].splice(i, 1);
    }
    if (tier && tier !== POOL && state[tier]) state[tier].push(id);
    save();
    selectedId = null;
    render();
  }

  function sortCards(cards) {
    const arr = cards.slice();
    const nm = (c) => (c.name || "");
    if (sortMode === "rarity") arr.sort((a, b) => (b.rarity || 0) - (a.rarity || 0) || nm(a).localeCompare(nm(b)));
    else if (sortMode === "prime") arr.sort((a, b) => (Number(b.prime) || 0) - (Number(a.prime) || 0) || nm(a).localeCompare(nm(b)));
    else arr.sort((a, b) => nm(a).localeCompare(nm(b)));
    return arr;
  }

  function cardEl(card) {
    const el = document.createElement("div");
    el.className = "tl-card" + (selectedId === card.id ? " is-selected" : "");
    el.draggable = true;
    el.dataset.id = card.id;
    const img = card.image
      ? `<img src="${card.image}" alt="" loading="lazy" draggable="false" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="tl-avatar-fallback" style="display:none">👤</span>`
      : `<span class="tl-avatar-fallback">👤</span>`;
    const r = card.rarity ? `<span class="tl-rarity">R${card.rarity}</span>` : "";
    el.innerHTML = `${r}${img}<span class="tl-name">${card.name}</span>`;
    el.addEventListener("dragstart", (e) => {
      try { e.dataTransfer.setData("text/plain", card.id); } catch (err) {}
      e.dataTransfer.effectAllowed = "move";
    });
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedId = (selectedId === card.id) ? null : card.id;
      render();
    });
    return el;
  }

  function dropZone(tier, cards) {
    const zone = document.createElement("div");
    zone.className = "tl-drop" + (tier === POOL ? " tl-pool" : "");
    zone.dataset.tier = tier;
    sortCards(cards).forEach(c => zone.appendChild(cardEl(c)));
    zone.addEventListener("dragover", (e) => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; zone.classList.add("tl-dragover"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("tl-dragover"));
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("tl-dragover");
      let id = "";
      try { id = e.dataTransfer.getData("text/plain"); } catch (err) {}
      if (!id) id = selectedId;
      place(id, tier);
    });
    zone.addEventListener("click", () => { if (selectedId) place(selectedId, tier); });
    return zone;
  }

  function render() {
    const body = document.getElementById("tierListBody");
    if (!body) return;
    const cards = getCards();
    const byId = {};
    cards.forEach(c => { byId[c.id] = c; });
    const assigned = new Set();
    Object.keys(state).forEach(k => state[k].forEach(id => assigned.add(id)));

    const poolCards = cards.filter(c => !assigned.has(c.id));
    body.innerHTML = "";

    // Rangs S/A/B/C/D (d'abord : ils restent visibles)
    TIERS.forEach(tier => {
      const row = document.createElement("div");
      row.className = "tl-row";
      const lab = document.createElement("div");
      lab.className = "tl-label tl-" + tier;
      lab.textContent = tier;
      row.appendChild(lab);
      const tierCards = state[tier].map(id => byId[id]).filter(Boolean);
      row.appendChild(dropZone(tier, tierCards));
      body.appendChild(row);
    });

    // Banc
    const benchSec = document.createElement("div");
    const benchRow = document.createElement("div");
    benchRow.className = "tl-row";
    const benchLab = document.createElement("div");
    benchLab.className = "tl-label tl-bench";
    benchLab.textContent = L("Banc", "Bench");
    benchRow.appendChild(benchLab);
    const benchCards = state[BENCH].map(id => byId[id]).filter(Boolean);
    benchRow.appendChild(dropZone(BENCH, benchCards));
    benchSec.appendChild(benchRow);
    body.appendChild(benchSec);

    // Zone « À classer » (en bas, défilement interne pour ne pas pousser les rangs)
    const poolSec = document.createElement("div");
    const poolTitle = document.createElement("div");
    poolTitle.className = "tl-section-title";
    poolTitle.innerHTML = L("À classer", "To rank") + " (<b>" + poolCards.length + "</b>)";
    poolSec.appendChild(poolTitle);
    poolSec.appendChild(dropZone(POOL, poolCards));
    body.appendChild(poolSec);

    // Compteur + état du filtre
    const count = document.getElementById("tierListCount");
    if (count) {
      const placed = TIERS.reduce((n, t) => n + state[t].length, 0);
      count.textContent = L(placed + "/" + cards.length + " classés", placed + "/" + cards.length + " ranked");
    }
  }

  function setFilter(f) {
    filter = f;
    selectedId = null;
    document.querySelectorAll("#tierListFilters .tl-filter-btn").forEach(b => {
      b.classList.toggle("is-active", b.dataset.filter === f);
    });
    render();
  }

  function buildFilters() {
    const box = document.getElementById("tierListFilters");
    if (!box) return;
    const defs = [
      ["chars", L("Personnages", "Characters")],
      ["emperors", L("Empereurs", "Emperors")],
      ["all", L("Tous", "All")]
    ];
    box.innerHTML = "";
    defs.forEach(([key, label]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tl-filter-btn" + (filter === key ? " is-active" : "");
      b.dataset.filter = key;
      b.textContent = label;
      b.addEventListener("click", () => setFilter(key));
      box.appendChild(b);
    });
  }

  function setup() {
    const modal = document.getElementById("tierListModal");
    const btn = document.getElementById("tierListBtn");
    if (!modal || !btn) return;

    btn.addEventListener("click", () => { buildFilters(); render(); modal.classList.remove("hidden"); });
    document.querySelectorAll(".tierListClose").forEach(b => b.addEventListener("click", () => modal.classList.add("hidden")));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });

    const sortSel = document.getElementById("tierListSort");
    if (sortSel) sortSel.addEventListener("change", () => { sortMode = sortSel.value; render(); });
    const reset = document.getElementById("tierListReset");
    if (reset) reset.addEventListener("click", () => {
      state = { S: [], A: [], B: [], C: [], D: [], bench: [] };
      selectedId = null; save(); render();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) modal.classList.add("hidden");
    });

    // Mise à jour des libellés à chaque changement de langue
    const label = document.getElementById("labelTierList");
    if (label) label.textContent = "Tier List";
    const title = document.getElementById("tierListTitle");
    if (title) title.textContent = "Tier List";
    const sl = document.getElementById("tierListSortLabel");
    if (sl) sl.textContent = L("Trier", "Sort");
    if (sortSel) {
      const opts = sortSel.querySelectorAll("option");
      if (opts[0]) opts[0].textContent = L("Nom", "Name");
      if (opts[1]) opts[1].textContent = L("Rareté", "Rarity");
      if (opts[2]) opts[2].textContent = L("Prime", "Bounty");
    }
    const rst = document.getElementById("tierListReset");
    if (rst) rst.textContent = L("Réinitialiser", "Reset");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();

  // Exposé pour les tests / le harnais
  window.tierListRender = render;
  window.tierListSetState = function (s) {
    const base = { S: [], A: [], B: [], C: [], D: [], bench: [] };
    for (const k of Object.keys(base)) if (s && Array.isArray(s[k])) base[k] = s[k].slice();
    state = base; save(); render();
  };
})();
