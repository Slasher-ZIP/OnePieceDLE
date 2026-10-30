/* ============================================================================
 * OPDLE — Mode « Tier List » (v2)
 * - Rangs personnalisables : renommer, changer la couleur, ajouter, supprimer.
 * - Filtre multi-collections (Chapeau de paille, Empereurs, Barbe Noire…)
 *   avec dédoublonnage par personnage de base (pas de Luffy + Luffy G5).
 * - Sélection personnalisée : ajouter un perso précis, en retirer.
 * - Double-clic sur une carte : variantes (alt/shiny).
 * - Glisser-déposer (desktop) + clic-sélection puis clic-rang (mobile).
 * État sauvegardé dans localStorage.
 * ========================================================================== */
(function () {
  if (typeof document === "undefined") return;

  const DEFAULT_TIERS = [
    { id: "S", name: "S", color: "#ef4444" },
    { id: "A", name: "A", color: "#f97316" },
    { id: "B", name: "B", color: "#f59e0b" },
    { id: "C", name: "C", color: "#10b981" },
    { id: "D", name: "D", color: "#3b82f6" }
  ];
  const KEY = "opdle_tierlist_v2";
  const OLD_KEY = "opdle_tierlist_v1";
  const POOL = "pool";
  const BENCH = "bench";

  let state = load();
  let sortMode = "name";
  let selectedId = null;

  /* ---------- utilitaires ---------- */
  function isEn() { return (typeof currentLang !== "undefined" && currentLang === "en"); }
  function L(fr, en) { return isEn() ? en : fr; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function clean(s) { return (typeof cleanString === "function") ? cleanString(s || "") : String(s || "").toLowerCase(); }
  function baseChars() { return (typeof CHARACTERS !== "undefined" ? CHARACTERS : []).filter(c => c && c.name && !c.notGuessable); }
  function baseMap() { const m = {}; baseChars().forEach(c => { m[c.name] = c; }); return m; }
  function variantBaseMap() {
    const m = {};
    (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).forEach(v => { if (v && v.id) m[v.id] = v.baseName; });
    return m;
  }
  function resolveBase(member, byName, vmap) {
    if (byName[member]) return member;
    const b = vmap[member];
    return (b && byName[b]) ? b : null;
  }

  /* ---------- état ---------- */
  function defaults() {
    const tiers = DEFAULT_TIERS.map(t => ({ id: t.id, name: t.name, color: t.color }));
    const assign = {};
    tiers.forEach(t => { assign[t.id] = []; });
    assign[BENCH] = [];
    return { tiers, assign, collections: [], custom: [], exclude: [] };
  }
  function sanitize(raw) {
    const tiers = (Array.isArray(raw.tiers) && raw.tiers.length ? raw.tiers : DEFAULT_TIERS).map((t, i) => ({
      id: String(t.id || ("t" + i + "_" + Date.now())),
      name: String(t.name != null ? t.name : (t.id || "?")),
      color: /^#[0-9a-f]{6}$/i.test(t.color || "") ? t.color : DEFAULT_TIERS[i % DEFAULT_TIERS.length].color
    }));
    const assign = {};
    tiers.forEach(t => { assign[t.id] = Array.isArray(raw.assign && raw.assign[t.id]) ? raw.assign[t.id].filter(x => typeof x === "string") : []; });
    assign[BENCH] = Array.isArray(raw.assign && raw.assign[BENCH]) ? raw.assign[BENCH].filter(x => typeof x === "string") : [];
    return {
      tiers, assign,
      collections: Array.isArray(raw.collections) ? raw.collections.filter(x => typeof x === "string") : [],
      custom: Array.isArray(raw.custom) ? raw.custom.filter(x => typeof x === "string") : [],
      exclude: Array.isArray(raw.exclude) ? raw.exclude.filter(x => typeof x === "string") : []
    };
  }
  function load() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
    if (raw && raw.tiers) return sanitize(raw);
    // migration v1 : { S:[], A:[], ..., bench:[] }
    let old = null;
    try { old = JSON.parse(localStorage.getItem(OLD_KEY) || "null"); } catch (e) {}
    const st = defaults();
    if (old && typeof old === "object") {
      st.tiers.forEach(t => { if (Array.isArray(old[t.id])) st.assign[t.id] = old[t.id].filter(x => typeof x === "string"); });
      if (Array.isArray(old.bench)) st.assign[BENCH] = old.bench.filter(x => typeof x === "string");
    }
    return st;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ---------- cartes visibles ---------- */
  function visibleCards() {
    const byName = baseMap();
    const vmap = variantBaseMap();
    const names = new Set();
    const cats = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : []);
    if (state.collections.length) {
      state.collections.forEach(cid => {
        const cat = cats.find(c => c.id === cid);
        ((cat && cat.members) || []).forEach(m => { const b = resolveBase(m, byName, vmap); if (b) names.add(b); });
      });
    } else {
      Object.keys(byName).forEach(n => names.add(n));
    }
    state.custom.forEach(m => { const b = resolveBase(m, byName, vmap); if (b) names.add(b); });
    state.exclude.forEach(m => { const b = resolveBase(m, byName, vmap); if (b) names.delete(b); });
    return [...names].map(n => byName[n]).filter(Boolean).map(c => ({ id: c.name, name: c.name, image: c.image, rarity: c.rarity, prime: c.prime }));
  }

  function sortCards(cards) {
    const arr = cards.slice();
    const nm = c => (c.name || "");
    if (sortMode === "rarity") arr.sort((a, b) => (b.rarity || 0) - (a.rarity || 0) || nm(a).localeCompare(nm(b)));
    else if (sortMode === "prime") arr.sort((a, b) => (Number(b.prime) || 0) - (Number(a.prime) || 0) || nm(a).localeCompare(nm(b)));
    else arr.sort((a, b) => nm(a).localeCompare(nm(b)));
    return arr;
  }

  function tierOf(id) {
    for (const k of Object.keys(state.assign)) if (state.assign[k].indexOf(id) >= 0) return k;
    return POOL;
  }

  function place(id, tier) {
    if (!id) return;
    for (const k of Object.keys(state.assign)) {
      const i = state.assign[k].indexOf(id);
      if (i >= 0) state.assign[k].splice(i, 1);
    }
    if (tier && tier !== POOL && state.assign[tier]) state.assign[tier].push(id);
    save(); selectedId = null; render();
  }

  function excludeCard(id) {
    for (const k of Object.keys(state.assign)) {
      const i = state.assign[k].indexOf(id);
      if (i >= 0) state.assign[k].splice(i, 1);
    }
    state.custom = state.custom.filter(x => x !== id);
    if (state.exclude.indexOf(id) < 0) state.exclude.push(id);
    save(); selectedId = null; render();
  }

  function addCustom(name) {
    state.exclude = state.exclude.filter(x => x !== name);
    if (state.custom.indexOf(name) < 0) state.custom.push(name);
    save(); render();
  }

  /* ---------- rendu ---------- */
  function cardEl(card) {
    const el = document.createElement("div");
    el.className = "tl-card" + (selectedId === card.id ? " is-selected" : "");
    el.draggable = true;
    el.dataset.id = card.id;
    el.title = card.name + L(" — double-clic : variantes", " — double-click: variants");
    const img = card.image
      ? `<img src="${card.image}" alt="" loading="lazy" draggable="false" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="tl-avatar-fallback" style="display:none">👤</span>`
      : `<span class="tl-avatar-fallback">👤</span>`;
    el.innerHTML = `${img}<span class="tl-name">${esc(card.name)}</span><button type="button" class="tl-card-remove" draggable="false" title="${L("Retirer", "Remove")}">×</button>`;
    el.addEventListener("dragstart", (e) => {
      try { e.dataTransfer.setData("text/plain", card.id); } catch (err) {}
      e.dataTransfer.effectAllowed = "move";
    });
    el.addEventListener("click", (e) => {
      if (e.target.closest(".tl-card-remove")) return;
      e.stopPropagation();
      // Mise à jour de la sélection SANS reconstruire la carte, sinon le
      // double-clic (variantes) est cassé : l'élément serait remplacé entre
      // les deux clics.
      const newId = (selectedId === card.id) ? null : card.id;
      selectedId = newId;
      document.querySelectorAll(".tl-card.is-selected").forEach(x => x.classList.remove("is-selected"));
      if (newId) el.classList.add("is-selected");
    });
    el.addEventListener("dblclick", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openVariants(card.id);
    });
    const rm = el.querySelector(".tl-card-remove");
    if (rm) rm.addEventListener("click", (e) => { e.stopPropagation(); excludeCard(card.id); });
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

  function tierHead(tier) {
    const head = document.createElement("div");
    head.className = "tl-tier-head";
    head.style.setProperty("--tier-color", tier.color);
    head.innerHTML =
      `<div class="tl-tier-name" contenteditable="true" spellcheck="false" title="${L("Renommer", "Rename")}">${esc(tier.name)}</div>` +
      `<div class="tl-tier-tools">` +
      `<input type="color" class="tl-tier-color" value="${tier.color}" title="${L("Couleur", "Color")}">` +
      `<button type="button" class="tl-tier-del" title="${L("Supprimer ce rang", "Delete this tier")}">×</button>` +
      `</div>`;
    const nameEl = head.querySelector(".tl-tier-name");
    nameEl.addEventListener("blur", () => {
      const v = (nameEl.textContent || "").trim() || tier.name;
      tier.name = v.slice(0, 14);
      nameEl.textContent = tier.name;
      save();
    });
    nameEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); nameEl.blur(); }
    });
    head.querySelector(".tl-tier-color").addEventListener("input", (e) => {
      tier.color = e.target.value;
      head.style.setProperty("--tier-color", tier.color);
      save();
    });
    head.querySelector(".tl-tier-del").addEventListener("click", (e) => {
      e.stopPropagation();
      removeTier(tier.id);
    });
    return head;
  }

  function renderTiers() {
    const body = document.getElementById("tierListTiers");
    if (!body) return;
    const cards = visibleCards();
    const byId = {};
    cards.forEach(c => { byId[c.id] = c; });
    const visibleSet = new Set(cards.map(c => c.id));
    body.innerHTML = "";

    // Rangs personnalisables
    state.tiers.forEach(tier => {
      const row = document.createElement("div");
      row.className = "tl-row";
      row.appendChild(tierHead(tier));
      const tierCards = state.assign[tier.id].filter(id => visibleSet.has(id)).map(id => byId[id]).filter(Boolean);
      row.appendChild(dropZone(tier.id, tierCards));
      body.appendChild(row);
    });

    // Banc (fixe)
    const benchRow = document.createElement("div");
    benchRow.className = "tl-row";
    const benchHead = document.createElement("div");
    benchHead.className = "tl-tier-head";
    benchHead.style.setProperty("--tier-color", "#64748b");
    benchHead.innerHTML = `<div class="tl-tier-name" style="font-size:11px">${L("Banc", "Bench")}</div>`;
    benchRow.appendChild(benchHead);
    const benchCards = state.assign[BENCH].filter(id => visibleSet.has(id)).map(id => byId[id]).filter(Boolean);
    benchRow.appendChild(dropZone(BENCH, benchCards));
    body.appendChild(benchRow);

    // Pool « À classer »
    const poolSec = document.createElement("div");
    const poolTitle = document.createElement("div");
    poolTitle.className = "tl-section-title";
    const poolCards = cards.filter(c => tierOf(c.id) === POOL);
    poolTitle.innerHTML = L("À classer", "To rank") + " (<b>" + poolCards.length + "</b>)";
    poolSec.appendChild(poolTitle);
    poolSec.appendChild(dropZone(POOL, poolCards));
    body.appendChild(poolSec);

    const placed = cards.filter(c => tierOf(c.id) !== POOL).length;
    const count = document.getElementById("tierListCount");
    if (count) count.textContent = L(placed + "/" + cards.length + " classés", placed + "/" + cards.length + " ranked");
  }

  function renderFilters() {
    const box = document.getElementById("tierListFilters");
    if (!box) return;
    box.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "tl-filter-btn" + (state.collections.length ? "" : " is-active");
    allBtn.textContent = L("Toutes", "All");
    allBtn.addEventListener("click", () => { state.collections = []; save(); renderCollections(); render(); });
    box.appendChild(allBtn);

    const colBtn = document.createElement("button");
    colBtn.type = "button";
    colBtn.className = "tl-filter-btn" + (state.collections.length ? " is-active" : "");
    colBtn.textContent = L("Collections", "Collections") + (state.collections.length ? " (" + state.collections.length + ")" : "");
    colBtn.addEventListener("click", () => {
      const panel = document.getElementById("tierListCollections");
      if (panel) panel.classList.toggle("hidden");
    });
    box.appendChild(colBtn);
  }

  function renderCollections() {
    const panel = document.getElementById("tierListCollections");
    if (!panel) return;
    panel.innerHTML = "";
    const cats = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : []);
    cats.forEach(cat => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.cat = cat.id;
      b.className = "tl-filter-btn" + (state.collections.indexOf(cat.id) >= 0 ? " is-active" : "");
      b.textContent = isEn() ? (cat.en || cat.fr) : (cat.fr || cat.en);
      b.addEventListener("click", () => {
        const i = state.collections.indexOf(cat.id);
        if (i >= 0) state.collections.splice(i, 1); else state.collections.push(cat.id);
        save(); renderCollections(); render();
      });
      panel.appendChild(b);
    });
  }

  function render() {
    renderFilters();
    renderTiers();
  }

  /* ---------- gestion des rangs ---------- */
  function addTier() {
    const palette = ["#ef4444", "#f97316", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];
    const id = "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    state.tiers.push({ id, name: L("Nouveau", "New"), color: palette[state.tiers.length % palette.length] });
    state.assign[id] = [];
    save(); render();
  }
  function removeTier(id) {
    const i = state.tiers.findIndex(t => t.id === id);
    if (i < 0) return;
    state.tiers.splice(i, 1);
    delete state.assign[id];
    save(); render();
  }

  /* ---------- variantes ---------- */
  function openVariants(name) {
    const modal = document.getElementById("tierVariantModal");
    const title = document.getElementById("tierVariantTitle");
    const list = document.getElementById("tierVariantList");
    if (!modal || !list) return;
    const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
    const vars = (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).filter(v => v && v.baseName === name);
    if (title) title.textContent = name;
    if (!vars.length) {
      list.innerHTML = `<p class="text-slate-400 text-sm text-center w-full">${L("Aucune variante connue.", "No known variants.")}</p>`;
    } else {
      list.innerHTML = vars.map(v => {
        const disp = (v._variantDisplay && (v._variantDisplay[lang] || v._variantDisplay.fr || v._variantDisplay.en)) || v.name || v.id;
        const img = v.image
          ? `<img src="${v.image}" alt="" loading="lazy" class="w-20 h-20 object-cover rounded-lg border border-slate-600" onerror="this.style.display='none'">`
          : `<div class="w-20 h-20 rounded-lg border border-slate-600 flex items-center justify-center text-2xl">👤</div>`;
        return `<div class="flex flex-col items-center gap-1 w-24">${img}<span class="text-[10px] text-center text-slate-300 leading-tight">${esc(disp)}</span></div>`;
      }).join("");
    }
    modal.classList.remove("hidden");
  }

  /* ---------- recherche / ajout personnalisé ---------- */
  function setupSearch() {
    const input = document.getElementById("tierListSearch");
    const menu = document.getElementById("tierListSearchMenu");
    if (!input || !menu) return;
    const close = () => { menu.classList.add("hidden"); menu.innerHTML = ""; };
    input.addEventListener("input", () => {
      const q = clean(input.value);
      if (!q) { close(); return; }
      const matches = baseChars().filter(c => clean(c.name).includes(q) || (c.aliases || []).some(a => clean(a).includes(q))).slice(0, 8);
      if (!matches.length) { close(); return; }
      menu.innerHTML = "";
      matches.forEach(c => {
        const item = document.createElement("div");
        item.className = "flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-800 text-sm text-white";
        item.innerHTML = `<img src="${c.image || ""}" alt="" class="w-7 h-7 rounded object-cover" onerror="this.style.visibility='hidden'"><span class="font-semibold">${esc(c.name)}</span>`;
        item.addEventListener("mousedown", (e) => { e.preventDefault(); addCustom(c.name); input.value = ""; close(); });
        menu.appendChild(item);
      });
      menu.classList.remove("hidden");
    });
    input.addEventListener("blur", () => setTimeout(close, 150));
    input.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  function refreshLabels() {
    const label = document.getElementById("labelTierList");
    if (label) label.textContent = "Tier List";
    const title = document.getElementById("tierListTitle");
    if (title) title.textContent = "Tier List";
    const sortSel = document.getElementById("tierListSort");
    const sl = document.getElementById("tierListSortLabel");
    if (sl) sl.textContent = L("Trier", "Sort");
    const hint = document.getElementById("tierListHint");
    if (hint) hint.textContent = L("Double-clic : variantes", "Double-click: variants");
    if (sortSel) {
      const opts = sortSel.querySelectorAll("option");
      if (opts[0]) opts[0].textContent = L("Nom", "Name");
      if (opts[1]) opts[1].textContent = L("Rareté", "Rarity");
      if (opts[2]) opts[2].textContent = L("Prime", "Bounty");
    }
    const addBtn = document.getElementById("tierListAddTier");
    if (addBtn) addBtn.textContent = L("+ Rang", "+ Tier");
    const reset = document.getElementById("tierListReset");
    if (reset) reset.textContent = L("Réinitialiser", "Reset");
    const search = document.getElementById("tierListSearch");
    if (search) search.placeholder = L("Ajouter un perso…", "Add a character…");
  }

  /* ---------- setup ---------- */
  function setup() {
    const modal = document.getElementById("tierListModal");
    const btn = document.getElementById("tierListBtn");
    if (!modal || !btn) return;

    btn.addEventListener("click", () => {
      refreshLabels();
      renderCollections();
      render();
      modal.classList.remove("hidden");
    });

    document.querySelectorAll(".tierListClose").forEach(b => b.addEventListener("click", () => modal.classList.add("hidden")));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });

    const sortSel = document.getElementById("tierListSort");
    if (sortSel) sortSel.addEventListener("change", () => { sortMode = sortSel.value; render(); });

    const addBtn = document.getElementById("tierListAddTier");
    if (addBtn) addBtn.addEventListener("click", addTier);

    const reset = document.getElementById("tierListReset");
    if (reset) reset.addEventListener("click", () => {
      // Réinitialise les placements, conserve les rangs personnalisés + le filtre
      Object.keys(state.assign).forEach(k => { state.assign[k] = []; });
      selectedId = null; save(); render();
    });

    // Variantes
    const vModal = document.getElementById("tierVariantModal");
    if (vModal) {
      document.querySelectorAll(".tierVariantClose").forEach(b => b.addEventListener("click", () => vModal.classList.add("hidden")));
      vModal.addEventListener("click", (e) => { if (e.target === vModal) vModal.classList.add("hidden"); });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (!modal.classList.contains("hidden")) modal.classList.add("hidden");
      if (vModal && !vModal.classList.contains("hidden")) vModal.classList.add("hidden");
    });

    setupSearch();
    refreshLabels();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();

  // Exposé pour le harnais de test
  window.tierListRender = render;
  window.tierListSetState = function (s) {
    state = sanitize(Object.assign(defaults(), s || {}));
    save(); renderCollections(); render();
  };
})();
