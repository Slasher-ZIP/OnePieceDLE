/* ============================================================================
 * OPDLE — Mode « Tier List » (v3)
 * - Rangs personnalisables : renommer, couleur, ajouter au-dessus/en dessous,
 *   déplacer, supprimer (menu dédié, lisible).
 * - Sauvegarde / chargement de plusieurs tier lists nommées.
 * - Filtre multi-collections (dédoublonné par personnage de base).
 * - Ajout/retrait de personnages précis.
 * - Survol d'une carte : changement rapide de forme (base / alt / shiny).
 * - Glisser-déposer + clic-sélection puis clic-rang (mobile).
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
  const SAVES_KEY = "opdle_tierlist_saves";
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
  function variantsFor(baseName) {
    return (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).filter(v => v && v.baseName === baseName);
  }

  /** Libellé court d'une variante : displayName si parlant, sinon dérivé de l'id. */
  function variantLabel(v, baseName) {
    const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
    const dn = v.displayName && (v.displayName[lang] || v.displayName.fr || v.displayName.en);
    if (dn && dn !== baseName) return dn;
    const map = {
      pre: L("Pré-ellipse", "Pre-timeskip"), young: L("Jeune", "Young"),
      gear2: "Gear 2", gear3: "Gear 3", gear4: "Gear 4", gear5: "Gear 5",
      bounceman: "Boundman", snakeman: "Snakeman", tankman: "Tankman",
      eastblue: "East Blue", germa: "Germa", pirate: L("Pirate", "Pirate")
    };
    const baseTokens = new Set(clean(baseName).split(/\s+/).filter(Boolean));
    let parts = String(v.id || "").split("_").filter(Boolean);
    while (parts.length > 1 && baseTokens.has(parts[0])) parts.shift();
    if (!parts.length) parts = String(v.id || "").split("_");
    return parts.map(p => map[p] || (p.charAt(0).toUpperCase() + p.slice(1))).join(" ");
  }

  /* ---------- état ---------- */
  function defaults() {
    const tiers = DEFAULT_TIERS.map(t => ({ id: t.id, name: t.name, color: t.color }));
    const assign = {};
    tiers.forEach(t => { assign[t.id] = []; });
    assign[BENCH] = [];
    return { tiers, assign, collections: [], custom: [], exclude: [], forms: {} };
  }
  function sanitize(raw) {
    raw = raw || {};
    const tiers = (Array.isArray(raw.tiers) && raw.tiers.length ? raw.tiers : DEFAULT_TIERS).map((t, i) => ({
      id: String(t.id || ("t" + i + "_" + Date.now())),
      name: String(t.name != null ? t.name : (t.id || "?")),
      color: /^#[0-9a-f]{6}$/i.test(t.color || "") ? t.color : DEFAULT_TIERS[i % DEFAULT_TIERS.length].color
    }));
    const assign = {};
    tiers.forEach(t => { assign[t.id] = Array.isArray(raw.assign && raw.assign[t.id]) ? raw.assign[t.id].filter(x => typeof x === "string") : []; });
    assign[BENCH] = Array.isArray(raw.assign && raw.assign[BENCH]) ? raw.assign[BENCH].filter(x => typeof x === "string") : [];
    const forms = {};
    if (raw.forms && typeof raw.forms === "object") {
      Object.keys(raw.forms).forEach(k => { if (typeof raw.forms[k] === "string") forms[k] = raw.forms[k]; });
    }
    return {
      tiers, assign, forms,
      collections: Array.isArray(raw.collections) ? raw.collections.filter(x => typeof x === "string") : [],
      custom: Array.isArray(raw.custom) ? raw.custom.filter(x => typeof x === "string") : [],
      exclude: Array.isArray(raw.exclude) ? raw.exclude.filter(x => typeof x === "string") : []
    };
  }
  function load() {
    let raw = null;
    try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
    if (raw && raw.tiers) return sanitize(raw);
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

  /* ---------- sauvegardes nommées ---------- */
  function getSaves() { try { return JSON.parse(localStorage.getItem(SAVES_KEY) || "{}"); } catch (e) { return {}; } }
  function setSaves(s) { try { localStorage.setItem(SAVES_KEY, JSON.stringify(s)); } catch (e) {} }

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

  function displayFor(card) {
    const fid = state.forms[card.id];
    if (fid) {
      const v = variantsFor(card.id).find(x => x.id === fid);
      if (v) {
        const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
        const dn = v.displayName && (v.displayName[lang] || v.displayName.fr || v.displayName.en);
        const nm = (dn && dn !== card.name) ? dn : card.name;
        return { image: v.image || card.image, name: nm, isVariant: true, variantId: v.id, label: variantLabel(v, card.id) };
      }
    }
    return { image: card.image, name: card.name, isVariant: false, variantId: "", label: "" };
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
    delete state.forms[id];
    save(); selectedId = null; render();
  }
  function addCustom(name) {
    state.exclude = state.exclude.filter(x => x !== name);
    if (state.custom.indexOf(name) < 0) state.custom.push(name);
    save(); render();
  }

  /* ---------- popover générique (fixed, non rogné par la modale) ---------- */
  function closePopover() { const p = document.getElementById("tlPopover"); if (p) p.remove(); }
  function showPopover(anchor, html, onMount) {
    closePopover();
    const pop = document.createElement("div");
    pop.id = "tlPopover";
    pop.className = "tl-popover";
    pop.innerHTML = html;
    document.body.appendChild(pop);
    const a = anchor.getBoundingClientRect();
    const w = pop.offsetWidth, h = pop.offsetHeight, m = 8;
    let left = a.left;
    let top = a.bottom + 4;
    if (left + w > window.innerWidth - m) left = Math.max(m, window.innerWidth - w - m);
    if (top + h > window.innerHeight - m) top = Math.max(m, a.top - h - 4);
    pop.style.left = left + "px";
    pop.style.top = top + "px";
    if (onMount) onMount(pop);
    return pop;
  }

  /* ---------- rendu des cartes ---------- */
  function cardEl(card) {
    const disp = displayFor(card);
    const el = document.createElement("div");
    el.className = "tl-card" + (selectedId === card.id ? " is-selected" : "") + (disp.isVariant ? " has-variant" : "");
    el.draggable = true;
    el.dataset.id = card.id;
    el.title = disp.name + (disp.isVariant ? " · " + disp.label : "");
    const img = disp.image
      ? `<img src="${disp.image}" alt="" loading="lazy" draggable="false" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span class="tl-avatar-fallback" style="display:none">👤</span>`
      : `<span class="tl-avatar-fallback">👤</span>`;
    const hasForms = variantsFor(card.id).length > 0;
    const formsBtn = hasForms
      ? `<button type="button" class="tl-forms-toggle" draggable="false" title="${L("Changer de forme (alt/shiny)", "Switch form (alt/shiny)")}">${disp.isVariant ? "✦" : "◇"}</button>`
      : "";
    el.innerHTML = `${img}<span class="tl-name">${esc(disp.name)}</span>${formsBtn}<button type="button" class="tl-card-remove" draggable="false" title="${L("Retirer", "Remove")}">×</button>`;

    el.addEventListener("dragstart", (e) => {
      try { e.dataTransfer.setData("text/plain", card.id); } catch (err) {}
      e.dataTransfer.effectAllowed = "move";
    });
    el.addEventListener("click", (e) => {
      if (e.target.closest(".tl-card-remove") || e.target.closest(".tl-forms-toggle")) return;
      e.stopPropagation();
      const newId = (selectedId === card.id) ? null : card.id;
      selectedId = newId;
      document.querySelectorAll(".tl-card.is-selected").forEach(x => x.classList.remove("is-selected"));
      if (newId) el.classList.add("is-selected");
    });

    const rm = el.querySelector(".tl-card-remove");
    if (rm) rm.addEventListener("click", (e) => { e.stopPropagation(); excludeCard(card.id); });
    const fb = el.querySelector(".tl-forms-toggle");
    if (fb) fb.addEventListener("click", (e) => { e.stopPropagation(); e.preventDefault(); openFormsPop(fb, card.id); });
    return el;
  }

  function openFormsPop(anchor, baseId) {
    const base = baseChars().find(c => c.name === baseId) || { name: baseId, image: null };
    const forms = [{ id: "", image: base.image, name: base.name }];
    variantsFor(baseId).forEach(v => {
      forms.push({ id: v.id, image: v.image || base.image, name: variantLabel(v, baseId) });
    });
    const activeFid = state.forms[baseId] || "";
    const html = `<div class="tl-forms-grid">` + forms.map(f => {
      const img = f.image
        ? `<img src="${f.image}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">`
        : `<span class="tl-form-fallback">👤</span>`;
      return `<button type="button" class="tl-form-item${f.id === activeFid ? " is-active" : ""}" data-fid="${esc(f.id)}">${img}<span>${esc(f.name)}</span></button>`;
    }).join("") + `</div>`;
    showPopover(anchor, html, (pop) => {
      pop.querySelectorAll(".tl-form-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const fid = btn.dataset.fid;
          if (fid) state.forms[baseId] = fid; else delete state.forms[baseId];
          save(); closePopover(); render();
        });
      });
    });
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

  /* ---------- en-tête de rang + menu ---------- */
  function tierHead(tier, index) {
    const head = document.createElement("div");
    head.className = "tl-tier-head";
    head.style.setProperty("--tier-color", tier.color);
    head.innerHTML =
      `<div class="tl-tier-name" contenteditable="true" spellcheck="false" title="${L("Renommer", "Rename")}">${esc(tier.name)}</div>` +
      `<button type="button" class="tl-tier-menu" title="${L("Options du rang", "Tier options")}">⋮</button>`;
    const nameEl = head.querySelector(".tl-tier-name");
    nameEl.addEventListener("blur", () => {
      const v = (nameEl.textContent || "").trim() || tier.name;
      tier.name = v.slice(0, 14);
      nameEl.textContent = tier.name;
      save();
    });
    nameEl.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); nameEl.blur(); } });
    const menuBtn = head.querySelector(".tl-tier-menu");
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      openTierMenu(menuBtn, tier, index);
    });
    return head;
  }

  function openTierMenu(anchor, tier, index) {
    const last = index === state.tiers.length - 1;
    const html =
      `<button type="button" class="tl-pop-item" data-act="color">🎨 ${L("Couleur", "Color")}</button>` +
      `<button type="button" class="tl-pop-item" data-act="above">➕ ${L("Rang au-dessus", "Tier above")}</button>` +
      `<button type="button" class="tl-pop-item" data-act="below">➕ ${L("Rang en dessous", "Tier below")}</button>` +
      `<button type="button" class="tl-pop-item" data-act="up"${index === 0 ? " disabled" : ""}>⬆ ${L("Monter", "Move up")}</button>` +
      `<button type="button" class="tl-pop-item" data-act="down"${last ? " disabled" : ""}>⬇ ${L("Descendre", "Move down")}</button>` +
      `<button type="button" class="tl-pop-item danger" data-act="delete">🗑 ${L("Supprimer ce rang", "Delete this tier")}</button>` +
      `<input type="color" class="tl-hidden-color" value="${tier.color}">`;
    showPopover(anchor, html, (pop) => {
      const colorInput = pop.querySelector(".tl-hidden-color");
      pop.querySelectorAll(".tl-pop-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const act = btn.dataset.act;
          if (act === "color") { if (colorInput) colorInput.click(); return; }
          if (act === "above") addTierAt(index);
          else if (act === "below") addTierAt(index + 1);
          else if (act === "up") moveTier(index, -1);
          else if (act === "down") moveTier(index, 1);
          else if (act === "delete") removeTier(tier.id);
          closePopover();
        });
      });
      if (colorInput) colorInput.addEventListener("input", () => {
        tier.color = colorInput.value;
        save(); render();
      });
    });
  }

  function addTierAt(index) {
    const palette = ["#ef4444", "#f97316", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6"];
    const id = "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    const tier = { id, name: L("Nouveau", "New"), color: palette[(index + state.tiers.length) % palette.length] };
    state.tiers.splice(Math.max(0, Math.min(index, state.tiers.length)), 0, tier);
    state.assign[id] = [];
    save(); closePopover(); render();
  }
  function removeTier(id) {
    const i = state.tiers.findIndex(t => t.id === id);
    if (i < 0) return;
    state.tiers.splice(i, 1);
    delete state.assign[id];
    save(); closePopover(); render();
  }
  function moveTier(index, delta) {
    const j = index + delta;
    if (j < 0 || j >= state.tiers.length) return;
    const [t] = state.tiers.splice(index, 1);
    state.tiers.splice(j, 0, t);
    save(); closePopover(); render();
  }

  function renderTiers() {
    const body = document.getElementById("tierListTiers");
    if (!body) return;
    const cards = visibleCards();
    const byId = {};
    cards.forEach(c => { byId[c.id] = c; });
    const visibleSet = new Set(cards.map(c => c.id));
    body.innerHTML = "";

    state.tiers.forEach((tier, index) => {
      const row = document.createElement("div");
      row.className = "tl-row";
      row.appendChild(tierHead(tier, index));
      const tierCards = state.assign[tier.id].filter(id => visibleSet.has(id)).map(id => byId[id]).filter(Boolean);
      row.appendChild(dropZone(tier.id, tierCards));
      body.appendChild(row);
    });

    const benchRow = document.createElement("div");
    benchRow.className = "tl-row";
    const benchHead = document.createElement("div");
    benchHead.className = "tl-tier-head tl-tier-bench";
    benchHead.style.setProperty("--tier-color", "#64748b");
    benchHead.innerHTML = `<div class="tl-tier-name" style="font-size:11px">${L("Banc", "Bench")}</div>`;
    benchRow.appendChild(benchHead);
    const benchCards = state.assign[BENCH].filter(id => visibleSet.has(id)).map(id => byId[id]).filter(Boolean);
    benchRow.appendChild(dropZone(BENCH, benchCards));
    body.appendChild(benchRow);

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

  /* ---------- sauvegarde / chargement ---------- */
  function renderSaveList() {
    const box = document.getElementById("tierSaveList");
    if (!box) return;
    const saves = getSaves();
    const names = Object.keys(saves).sort();
    if (!names.length) {
      box.innerHTML = `<p class="text-slate-500 text-sm text-center py-4">${L("Aucune liste sauvegardée.", "No saved list yet.")}</p>`;
      return;
    }
    box.innerHTML = "";
    names.forEach(name => {
      const row = document.createElement("div");
      row.className = "flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-lg px-2 py-1.5";
      row.innerHTML = `<span class="flex-1 min-w-0 text-sm text-white truncate" title="${esc(name)}">${esc(name)}</span>` +
        `<button type="button" class="tl-save-load px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shrink-0">${L("Charger", "Load")}</button>` +
        `<button type="button" class="tl-save-del px-2 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shrink-0" title="${L("Supprimer", "Delete")}">🗑</button>`;
      row.querySelector(".tl-save-load").addEventListener("click", () => {
        state = sanitize(saves[name].state);
        save(); selectedId = null;
        renderCollections(); render();
        document.getElementById("tierSaveModal")?.classList.add("hidden");
      });
      row.querySelector(".tl-save-del").addEventListener("click", () => {
        delete saves[name]; setSaves(saves); renderSaveList();
      });
      box.appendChild(row);
    });
  }

  function openSaveModal() {
    renderSaveList();
    const input = document.getElementById("tierSaveName");
    if (input) input.value = "";
    document.getElementById("tierSaveModal")?.classList.remove("hidden");
  }

  /* ---------- recherche / ajout ---------- */
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

  /* ---------- libellés ---------- */
  function refreshLabels() {
    const label = document.getElementById("labelTierList");
    if (label) label.textContent = "Tier List";
    const title = document.getElementById("tierListTitle");
    if (title) title.textContent = "Tier List";
    const sortSel = document.getElementById("tierListSort");
    const sl = document.getElementById("tierListSortLabel");
    if (sl) sl.textContent = L("Trier", "Sort");
    const hint = document.getElementById("tierListHint");
    if (hint) hint.textContent = L("Survol : changer de forme", "Hover: switch form");
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
    const saveBtn = document.getElementById("tierListSaveBtn");
    if (saveBtn) saveBtn.textContent = L("Mes listes", "My lists");
    const saveTitle = document.getElementById("tierSaveTitle");
    if (saveTitle) saveTitle.textContent = L("Mes tier lists", "My tier lists");
    const saveName = document.getElementById("tierSaveName");
    if (saveName) saveName.placeholder = L("Nom de la liste", "List name");
    const saveBtn2 = document.getElementById("tierSaveBtn");
    if (saveBtn2) saveBtn2.textContent = L("Sauvegarder", "Save");
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

    document.querySelectorAll(".tierListClose").forEach(b => b.addEventListener("click", () => { closePopover(); modal.classList.add("hidden"); }));
    modal.addEventListener("click", (e) => { if (e.target === modal) { closePopover(); modal.classList.add("hidden"); } });

    const sortSel = document.getElementById("tierListSort");
    if (sortSel) sortSel.addEventListener("change", () => { sortMode = sortSel.value; render(); });

    const addBtn = document.getElementById("tierListAddTier");
    if (addBtn) addBtn.addEventListener("click", () => addTierAt(state.tiers.length));

    const reset = document.getElementById("tierListReset");
    if (reset) reset.addEventListener("click", () => {
      // Réinitialisation COMPLÈTE : rangs par défaut S/A/B/C/D + placements vides.
      state = defaults();
      selectedId = null;
      closePopover();
      save(); renderCollections(); render();
    });

    const saveBtn = document.getElementById("tierListSaveBtn");
    if (saveBtn) saveBtn.addEventListener("click", openSaveModal);

    const saveModal = document.getElementById("tierSaveModal");
    if (saveModal) {
      document.querySelectorAll(".tierSaveClose").forEach(b => b.addEventListener("click", () => saveModal.classList.add("hidden")));
      saveModal.addEventListener("click", (e) => { if (e.target === saveModal) saveModal.classList.add("hidden"); });
      const doSave = document.getElementById("tierSaveBtn");
      if (doSave) doSave.addEventListener("click", () => {
        const input = document.getElementById("tierSaveName");
        const name = ((input && input.value) || "").trim() || (L("Liste ", "List ") + new Date().toLocaleDateString());
        const saves = getSaves();
        saves[name.slice(0, 40)] = { at: Date.now(), state: JSON.parse(JSON.stringify(state)) };
        setSaves(saves);
        if (input) input.value = "";
        renderSaveList();
      });
    }

    // Fermeture des popovers au clic extérieur / Échap
    document.addEventListener("click", (e) => {
      if (e.target.closest("#tlPopover") || e.target.closest(".tl-tier-menu") || e.target.closest(".tl-forms-toggle")) return;
      closePopover();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (document.getElementById("tlPopover")) { closePopover(); return; }
      if (!modal.classList.contains("hidden")) modal.classList.add("hidden");
      if (saveModal && !saveModal.classList.contains("hidden")) saveModal.classList.add("hidden");
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
