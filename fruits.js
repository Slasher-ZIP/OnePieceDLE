/* ============================================================================
 * OPDLE — Fruits du Démon : collection & avatar (module partagé)
 * Le JEU est sur la page dédiée fruit.html.
 * Ce module gère : déblocages, collection (Album), avatar fruit.
 * ========================================================================== */
(function () {
  if (typeof document === "undefined") return;
  const LIST = (typeof DEVIL_FRUITS !== "undefined" ? DEVIL_FRUITS : []);
  if (!LIST.length) return;
  const KEY = "opdle_fruits_unlocked";
  let collectionMode = false;

  function isEn() { return (typeof currentLang !== "undefined" && currentLang === "en"); }
  function L(fr, en) { return isEn() ? en : fr; }
  function byId(id) { return LIST.find(f => f.id === id) || null; }
  function byUser(name) { return LIST.find(f => f.user === name || (f.altUsers || []).indexOf(name) >= 0) || null; }
  function getUnlocked() { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } }
  function isUnlocked(id) { return getUnlocked().indexOf(id) >= 0; }
  function unlock(id) {
    const a = getUnlocked();
    if (a.indexOf(id) < 0) { a.push(id); try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  }
  function fruitAvatarKey(id) { return "fruit:" + id; }
  function useAsAvatar(id) {
    if (typeof setAvatar === "function") setAvatar(fruitAvatarKey(id));
    else { try { localStorage.setItem("opdle_avatar", fruitAvatarKey(id)); } catch (e) {} }
    if (typeof showToast === "function") showToast((isEn() ? "Avatar: " : "Avatar : ") + byId(id).name);
  }

  function sortFruits(list) {
    const sel = document.getElementById("fruitSortSel");
    const mode = sel ? sel.value : "name";
    const arr = list.slice();
    if (mode === "type") arr.sort((a, b) => (a.type || "").localeCompare(b.type || "") || a.name.localeCompare(b.name));
    else if (mode === "user") arr.sort((a, b) => (a.user || "").localeCompare(b.user || "") || a.name.localeCompare(b.name));
    else if (mode === "rarity") arr.sort((a, b) => (b.rarity || 0) - (a.rarity || 0) || a.name.localeCompare(b.name));
    else arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }

  function norm(s) {
    return String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function renderCollection(container) {
    container = container || document.getElementById("collectionGrid");
    if (!container) return;
    container.innerHTML = "";
    // On GARDE les classes de scroll (flex-1 overflow-y-auto) : on ajoute juste la grille.
    container.classList.add("fruit-grid");
    const unl = getUnlocked();
    const q = norm((document.getElementById("fruitSearch") || {}).value || "");
    const rarity = (document.getElementById("fruitRaritySel") || {}).value || "all";
    const type = (document.getElementById("fruitTypeSel") || {}).value || "all";
    const list = LIST.filter(f => {
      if (rarity !== "all" && String(f.rarity) !== rarity) return false;
      if (type !== "all" && f.type !== type) return false;
      if (q && ![f.name, f.nameFr, f.nameEn, f.user, f.type].concat(f.aliases || []).some(x => norm(x).indexOf(q) >= 0)) return false;
      return true;
    });
    if (!list.length) {
      container.innerHTML = `<p class="text-center text-slate-500 text-sm py-10" style="grid-column:1 / -1">${L("Aucun fruit trouvé.", "No fruit found.")}</p>`;
      updateHeader();
      return;
    }
    sortFruits(list).forEach(f => {
      const ok = unl.indexOf(f.id) >= 0;
      const card = document.createElement("div");
      card.className = "fruit-card" + (ok ? "" : " is-locked");
      const thumbUrl = (typeof window.thumbSrc === "function") ? window.thumbSrc(f.image) : f.image;
      const thumb = f.image
        ? `<img class="fruit-img" src="${thumbUrl}" alt="" loading="lazy" decoding="async" onerror="this.style.visibility='hidden';this.nextElementSibling.style.display='flex'"><div class="fruit-noimg" style="display:none">?</div>`
        : `<div class="fruit-noimg">?</div>`;
      card.innerHTML = `${thumb}
        <div class="fruit-card-name">${ok ? f.name : "???"}</div>
        <div class="fruit-card-meta">${ok ? f.type : L("Verrouillé", "Locked")}</div>`;
      if (ok) card.addEventListener("click", () => useAsAvatar(f.id));
      container.appendChild(card);
    });
    updateHeader();
  }

  function updateHeader() {
    const count = document.getElementById("collectionCount");
    const hint = document.getElementById("collectionHint");
    const total = LIST.length;
    const got = getUnlocked().filter(id => byId(id)).length;
    if (collectionMode) {
      if (count) count.textContent = got + " / " + total;
      if (hint) hint.textContent = L("Collection des Fruits du Démon — clique sur un fruit débloqué pour le mettre en avatar.", "Devil Fruit collection — click an unlocked fruit to set it as your avatar.");
    }
  }

  function setCollectionMode(v) {
    collectionMode = !!v;
    const modal = document.getElementById("collectionModal");
    if (modal) modal.classList.toggle("fruit-mode", collectionMode);
    const btn = document.getElementById("collectionFruitToggle");
    if (btn) {
      btn.classList.toggle("is-active", collectionMode);
      btn.textContent = collectionMode ? L("← Personnages", "← Characters") : L("Fruits", "Fruits");
    }
    const charFilters = document.getElementById("collectionCharacterFilters");
    if (charFilters) charFilters.style.display = collectionMode ? "none" : "flex";
    const fruitFilters = document.getElementById("fruitFiltersRow");
    if (fruitFilters) {
      fruitFilters.classList.toggle("hidden", !collectionMode);
      fruitFilters.style.display = collectionMode ? "flex" : "none";
    }
    if (collectionMode) {
      // Mode Fruits : en-tête + grille gérés par le module fruits.
      if (typeof renderCollectionGrid === "function") renderCollectionGrid();
      updateHeader();
    } else if (typeof updateCollectionUI === "function") {
      // Retour aux personnages : on restaure l'en-tête (compteur, description…)
      // et la grille de l'album ; sinon le « 1 / 56 » des fruits restait affiché.
      updateCollectionUI();
    } else if (typeof renderCollectionGrid === "function") {
      renderCollectionGrid();
    }
  }

  function setup() {
    const toggle = document.getElementById("collectionFruitToggle");
    if (toggle) toggle.addEventListener("click", (e) => { e.stopPropagation(); setCollectionMode(!collectionMode); });
    const sort = document.getElementById("fruitSortSel");
    if (sort) sort.addEventListener("change", () => { if (collectionMode) renderCollection(document.getElementById("collectionGrid")); });
    const search = document.getElementById("fruitSearch");
    if (search) search.addEventListener("input", () => { if (collectionMode) renderCollection(document.getElementById("collectionGrid")); });
    // Filtres de rareté / type, construits à partir des fruits existants.
    const raritySel = document.getElementById("fruitRaritySel");
    if (raritySel) {
      const levels = (typeof RARITY_LEVELS !== "undefined") ? RARITY_LEVELS : [1,2,3,4,5,6];
      const label = (r) => (typeof rarityLabel === "function") ? rarityLabel(r, (typeof currentLang !== "undefined" ? currentLang : "fr")) : String(r);
      raritySel.innerHTML = `<option value="all">${L("Toutes raretés", "All rarities")}</option>` +
        levels.map(r => `<option value="${r}">${label(r)}</option>`).join("");
      raritySel.addEventListener("change", () => { if (collectionMode) renderCollection(document.getElementById("collectionGrid")); });
    }
    const typeSel = document.getElementById("fruitTypeSel");
    if (typeSel) {
      const types = [...new Set(LIST.map(f => f.type).filter(Boolean))].sort();
      typeSel.innerHTML = `<option value="all">${L("Tous types", "All types")}</option>` +
        types.map(t => `<option value="${t}">${t}</option>`).join("");
      typeSel.addEventListener("change", () => { if (collectionMode) renderCollection(document.getElementById("collectionGrid")); });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
  else setup();

  window.OPFruits = {
    list: LIST, byId, byUser, isUnlocked, unlock, fruitAvatarKey,
    isCollectionMode: () => collectionMode,
    setCollectionMode, renderCollection, updateHeader,
    _sortFruits: sortFruits
  };
})();
