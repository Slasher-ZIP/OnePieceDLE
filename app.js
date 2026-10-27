let answer;
let guessedNames = new Set();
let currentGuessesList = [];
let attemptsCount = 0;
let selectedSuggestionIndex = -1;
let isGameOver = false;
let currentDifficulty = localStorage.getItem("opdle_diff") || "easy";
let currentStory = localStorage.getItem("opdle_story") || "all";
let maxAttempts = Infinity;
let mysteryCategories = []; // accumulates categories that show "???" in extreme (never includes 0 = character)

// ========== Versus 1v1 (local, tour par tour, même mystère) ==========
let versusMode = false;
let versusTurn = 0; // 0 = J1, 1 = J2
let versusRound = 1;
let versusNames = ["Joueur 1", "Joueur 2"];
let versusScores = [0, 0];
let versusWinner = -1; // index du gagnant de la manche (lu par showVictoryModal)
try {
  const vn = JSON.parse(localStorage.getItem("opdle_versus_names") || "null");
  if (Array.isArray(vn) && vn[0] && vn[1]) versusNames = [String(vn[0]).slice(0, 16), String(vn[1]).slice(0, 16)];
} catch (e) {}

let streak = parseInt(localStorage.getItem("opdle_streak") || "0");
let wins = parseInt(localStorage.getItem("opdle_wins") || "0");
// Meilleure série + total de parties (menu Réglages → Mes statistiques)
let bestStreak = parseInt(localStorage.getItem("opdle_best_streak") || "0") || 0;
let gamesTotal = parseInt(localStorage.getItem("opdle_games_total") || "0") || 0;
// Victoires en Difficile + Extrême (pour Gear 2/3/4)
let hardExtremeWins = parseInt(localStorage.getItem("opdle_hard_extreme_wins") || "0");
// Victoires en Extrême uniquement (pour Gear 5)
let extremeWins = parseInt(localStorage.getItem("opdle_extreme_wins") || "0");

// ========== Account / Profile system (Supabase) ==========
// ⚙️ CONFIG : colle ici ton Project URL et ta clé anon (Settings → API)
const SUPABASE_URL = "https://csqzqjgcgbfzyikxjsey.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_-M7NWERjPF1fgmv6ZSmhkA_mMHMw9-r"; // <-- colle ici ta Publishable key (sb_publishable_...) ou legacy anon (eyJ...)

const supabaseReady = SUPABASE_URL.startsWith("http") && !SUPABASE_ANON_KEY.startsWith("YOUR_");
const supabaseClient = (typeof supabase !== "undefined" && supabaseReady)
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let authMode = "login"; // login | register
let currentUser = null; // { id, username, unlocked, avatar, streak, wins }

function showAuthError(msg) {
  const err = document.getElementById("authError");
  const ok = document.getElementById("authSuccess");
  if (ok) ok.classList.add("hidden");
  if (!err) return;
  if (!msg) { err.classList.add("hidden"); return; }
  err.textContent = msg;
  err.classList.remove("hidden");
}
function showAuthSuccess(msg) {
  const err = document.getElementById("authError");
  const ok = document.getElementById("authSuccess");
  if (err) err.classList.add("hidden");
  if (!ok) return;
  ok.textContent = msg;
  ok.classList.remove("hidden");
}

async function fetchProfile(userId) {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("username, avatar, unlocked, streak, wins")
    .eq("id", userId)
    .maybeSingle();
  if (error) {
    console.warn("fetchProfile", error.message);
    return null;
  }
  return data;
}

async function ensureProfile(user, usernameFallback) {
  if (!supabaseClient || !user) return null;
  let profile = await fetchProfile(user.id);
  if (profile) return profile;
  const username = (usernameFallback || user.user_metadata?.username || (user.email || "user").split("@")[0]).slice(0, 20);
  const { data, error } = await supabaseClient.from("profiles").insert({
    id: user.id,
    username,
    unlocked: [],
    avatar: null,
    streak: 0,
    wins: 0
  }).select("username, avatar, unlocked, streak, wins").maybeSingle();
  if (error) {
    // maybe race: try fetch again
    profile = await fetchProfile(user.id);
    return profile;
  }
  return data;
}

/** Fusionne profil cloud + progression locale (évite d'écraser les victoires en invité). */
function readLocalUnlocked() {
  try { return JSON.parse(localStorage.getItem("opdle_unlocked") || "[]"); } catch (e) { return []; }
}
function readLocalStat(key) {
  try { return parseInt(localStorage.getItem(key) || "0", 10) || 0; } catch (e) { return 0; }
}

function mergeUnlocked(cloudList, localList) {
  const set = new Set();
  (cloudList || []).forEach(x => set.add(x));
  (localList || []).forEach(x => set.add(x));
  return [...set];
}

function applyProfile(user, profile) {
  const localUnlocked = readLocalUnlocked();
  const cloudUnlocked = Array.isArray(profile?.unlocked) ? profile.unlocked : [];
  const mergedUnlocked = mergeUnlocked(cloudUnlocked, localUnlocked);

  const cloudStreak = profile?.streak || 0;
  const cloudWins = profile?.wins || 0;
  const localStreak = readLocalStat("opdle_streak");
  const localWins = readLocalStat("opdle_wins");
  // On garde le max pour ne pas perdre de progression
  const mergedStreak = Math.max(cloudStreak, localStreak);
  const mergedWins = Math.max(cloudWins, localWins);
  bestStreak = Math.max(bestStreak || 0, readLocalStat("opdle_best_streak"));

  currentUser = {
    id: user.id,
    email: user.email,
    username: profile?.username || user.user_metadata?.username || user.email?.split("@")[0] || "user",
    unlocked: mergedUnlocked,
    avatar: profile?.avatar || localStorage.getItem("opdle_avatar") || null,
    streak: mergedStreak,
    wins: mergedWins,
    bestStreak: bestStreak
  };
  streak = currentUser.streak;
  wins = currentUser.wins;

  // Réécrire le local pour rester cohérent hors ligne
  try {
    localStorage.setItem("opdle_unlocked", JSON.stringify(mergedUnlocked));
    localStorage.setItem("opdle_streak", String(mergedStreak));
    localStorage.setItem("opdle_wins", String(mergedWins));
  } catch (e) {}

  // Si le cloud était en retard, pousser la fusion
  const cloudLag =
    mergedUnlocked.length > cloudUnlocked.length ||
    mergedWins > cloudWins ||
    mergedStreak > cloudStreak;
  if (cloudLag) {
    persistCurrentUser();
  }
}

async function loadSession() {
  if (!supabaseClient) {
    currentUser = null;
    return;
  }
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session?.user) {
      currentUser = null;
      return;
    }
    const profile = await ensureProfile(session.user);
    applyProfile(session.user, profile);
  } catch (e) {
    console.warn("loadSession", e);
    currentUser = null;
  }
}

async function persistCurrentUser() {
  if (!supabaseClient || !currentUser?.id) return;
  currentUser.streak = streak;
  currentUser.wins = wins;
  const { error } = await supabaseClient.from("profiles").update({
    unlocked: currentUser.unlocked || [],
    avatar: currentUser.avatar || null,
    streak: streak,
    wins: wins,
    updated_at: new Date().toISOString()
  }).eq("id", currentUser.id);
  if (error) console.warn("persistCurrentUser", error.message);
}

async function registerAccount(username, email, password) {
  const t = TRANSLATIONS[currentLang];
  if (!supabaseClient) return "Configure SUPABASE_URL et SUPABASE_ANON_KEY dans le code.";
  username = (username || "").trim();
  email = (email || "").trim();
  if (username.length < 3 || (password || "").length < 6) return t.authErrorShort || "Pseudo (3+) et mot de passe (6+) requis.";
  if (!email.includes("@")) return currentLang === "fr" ? "Email invalide." : "Invalid email.";
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { username } }
  });
  if (error) return error.message;
  if (data.user) {
    // If email confirmation is disabled, session exists
    if (data.session) {
      const profile = await ensureProfile(data.user, username);
      applyProfile(data.user, profile);
      return null;
    }
    return "CONFIRM_EMAIL";
  }
  return currentLang === "fr" ? "Erreur d'inscription." : "Sign up error.";
}

async function loginAccount(email, password) {
  const t = TRANSLATIONS[currentLang];
  if (!supabaseClient) return "Configure SUPABASE_URL et SUPABASE_ANON_KEY dans le code.";
  email = (email || "").trim();
  if (!email || !password) return t.authErrorEmpty;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return error.message;
  if (!data.user) return t.authErrorWrong;
  const profile = await ensureProfile(data.user);
  applyProfile(data.user, profile);
  return null;
}

async function logoutAccount() {
  if (currentUser) await persistCurrentUser();
  if (supabaseClient) await supabaseClient.auth.signOut();
  currentUser = null;
  streak = parseInt(localStorage.getItem("opdle_streak") || "0");
  wins = parseInt(localStorage.getItem("opdle_wins") || "0");
  bestStreak = parseInt(localStorage.getItem("opdle_best_streak") || "0") || 0;
  gamesTotal = parseInt(localStorage.getItem("opdle_games_total") || "0") || 0;
  hardExtremeWins = parseInt(localStorage.getItem("opdle_hard_extreme_wins") || "0");
  extremeWins = parseInt(localStorage.getItem("opdle_extreme_wins") || "0");
  updateProfileUI();
  updateStatsUI();
  closeAuthAndProfile();
}

function getUnlockedNames() {
  const local = readLocalUnlocked();
  if (currentUser && Array.isArray(currentUser.unlocked)) {
    return mergeUnlocked(currentUser.unlocked, local);
  }
  return local.slice();
}

function unlockCharacter(name) {
  // Always track in localStorage (guest + logged-in)
  let local = [];
  try { local = JSON.parse(localStorage.getItem("opdle_unlocked") || "[]"); } catch (e) { local = []; }
  let changed = false;
  if (!local.includes(name)) {
    local.push(name);
    localStorage.setItem("opdle_unlocked", JSON.stringify(local));
    changed = true;
  }
  if (currentUser) {
    if (!currentUser.unlocked) currentUser.unlocked = [];
    if (!currentUser.unlocked.includes(name)) {
      currentUser.unlocked.push(name);
      persistCurrentUser();
      changed = true;
    }
  }
  return changed;
}

function canUseAsAvatar(key) {
  if (!key) return false;
  const unlocked = getUnlockedNames();
  if (unlocked.includes(key)) return true;
  const variant = typeof findVariantById === "function" ? findVariantById(key) : null;
  if (variant) {
    // Alt/shiny : ok si l'id variante OU la base est débloquée
    if (unlocked.includes(variant.baseName)) return true;
    if (typeof isVariantUnlocked === "function" && isVariantUnlocked(variant)) return true;
  }
  return false;
}

function setAvatar(name) {
  if (name && !canUseAsAvatar(name)) return;
  if (currentUser) {
    currentUser.avatar = name || null;
    persistCurrentUser();
  }
  // Toujours en local aussi (guest + backup)
  try {
    if (name) localStorage.setItem("opdle_avatar", name);
    else localStorage.removeItem("opdle_avatar");
  } catch (e) {}
  refreshAvatarDisplays();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
  if (typeof showToast === "function" && name) {
    showToast((currentLang === "fr" ? "Avatar : " : "Avatar: ") + avatarDisplayName(name));
  }
}

/** Met à jour mini (header) + grand (profil) avec la forme alt/shiny choisie. */
function refreshAvatarDisplays() {
  if (typeof updateProfileUI === "function") updateProfileUI();
  const large = document.getElementById("profileAvatarLarge");
  if (large) {
    large.innerHTML = profileAvatarHTML("w-14 h-14");
    const inner = large.querySelector("img, div");
    if (inner) {
      inner.classList.remove("rounded-xl");
      inner.classList.add("rounded-full", "w-full", "h-full");
      if (inner.tagName === "IMG") {
        inner.classList.add("object-cover", "object-top");
        inner.style.width = "100%";
        inner.style.height = "100%";
      }
    }
  }
}

function findCharByName(name) {
  return CHARACTERS.find(c => c.name === name) || null;
}

function findVariantById(id) {
  if (typeof CHARACTER_VARIANTS === "undefined" || !CHARACTER_VARIANTS || !id) return null;
  return CHARACTER_VARIANTS.find(v => v.id === id) || null;
}

/** Resolve avatar target: base character name OR variant id. */
function resolveAvatarTarget(key) {
  if (!key) return null;
  const variant = findVariantById(key);
  if (variant) {
    const base = findCharByName(variant.baseName);
    if (!base) return null;
    return applyVariant(base, variant);
  }
  return findCharByName(key);
}

function avatarDisplayName(key) {
  const variant = findVariantById(key);
  if (variant && variant.displayName) {
    return variant.displayName[currentLang] || variant.displayName.fr || variant.displayName.en || variant.id;
  }
  return key;
}

/** Migrate legacy unlock ids (e.g. duplicate gear4). */
function migrateUnlockIds() {
  const map = {
    "luffy_gear4": "luffy_gear4_bounceman"
  };
  try {
    let local = JSON.parse(localStorage.getItem("opdle_unlocked") || "[]");
    let changed = false;
    local = local.map(id => {
      if (map[id]) { changed = true; return map[id]; }
      return id;
    });
    // dedupe
    const seen = new Set();
    local = local.filter(id => {
      if (seen.has(id)) { changed = true; return false; }
      seen.add(id);
      return true;
    });
    if (changed) localStorage.setItem("opdle_unlocked", JSON.stringify(local));
  } catch (e) {}
  if (typeof currentUser !== "undefined" && currentUser && Array.isArray(currentUser.unlocked)) {
    let changed = false;
    currentUser.unlocked = currentUser.unlocked.map(id => {
      if (map[id]) { changed = true; return map[id]; }
      return id;
    });
    const seen = new Set();
    currentUser.unlocked = currentUser.unlocked.filter(id => {
      if (seen.has(id)) { changed = true; return false; }
      seen.add(id);
      return true;
    });
    if (changed && typeof persistCurrentUser === "function") persistCurrentUser();
  }
}

function getCurrentAvatarName() {
  if (currentUser && currentUser.avatar) return currentUser.avatar;
  try { return localStorage.getItem("opdle_avatar") || null; } catch (e) { return null; }
}

function profileAvatarHTML(sizeClass) {
  const av = getCurrentAvatarName();
  if (av) {
    const ch = resolveAvatarTarget(av);
    if (ch) return avatarHTML(ch, sizeClass);
  }
  return `<div class="${sizeClass} rounded-full bg-slate-600 flex items-center justify-center text-slate-300">👤</div>`;
}

function updateProfileUI() {
  const t = TRANSLATIONS[currentLang];
  const nameEl = document.getElementById("profileNameLabel");
  const mini = document.getElementById("profileAvatarMini");
  if (!nameEl || !mini) return;
  if (currentUser) {
    nameEl.textContent = currentUser.username;
  } else {
    nameEl.textContent = t.guest;
  }
  // Icône header : toujours la forme choisie (base / alt / shiny)
  const av = getCurrentAvatarName();
  mini.innerHTML = "";
  if (av) {
    const ch = resolveAvatarTarget(av);
    if (ch && ch.image) {
      const img = document.createElement("img");
      img.src = ch.image;
      img.alt = "";
      img.className = "w-full h-full object-cover object-top";
      img.onerror = () => { mini.textContent = "👤"; };
      mini.appendChild(img);
    } else if (ch) {
      mini.textContent = getInitials(ch.name || av);
    } else {
      mini.textContent = "👤";
    }
  } else if (currentUser && currentUser.username) {
    mini.textContent = (currentUser.username || "?").charAt(0).toUpperCase();
  } else {
    mini.textContent = "👤";
  }
}

function getAvatarCategoryId(key) {
  const variant = findVariantById(key);
  const baseName = variant ? variant.baseName : key;
  if (typeof COLLECTION_CATEGORIES === "undefined") return null;
  for (const cat of COLLECTION_CATEGORIES) {
    if ((cat.members || []).includes(key) || (cat.members || []).includes(baseName)) return cat.id;
  }
  return null;
}

function renderUnlockedGrid() {
  const grid = document.getElementById("unlockedGrid");
  if (!grid) return;
  grid.innerHTML = "";
  grid.className = "avatar-picker-grid";
  // Styles inline de secours (évite l’empilement si le CSS est surchargé)
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
  grid.style.gap = "10px";
  grid.style.alignContent = "start";
  grid.style.overflowY = "auto";
  grid.style.overflowX = "hidden";
  grid.style.padding = "0 1.25rem 0.75rem";
  grid.style.minHeight = "160px";
  if (window.matchMedia("(min-width: 560px)").matches) {
    grid.style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";
  } else if (window.matchMedia("(min-width: 420px)").matches) {
    grid.style.gridTemplateColumns = "repeat(5, minmax(0, 1fr))";
  }

  const sortSel = document.getElementById("avatarSortSelect");
  const catSel = document.getElementById("avatarCatFilter");
  const rarSel = document.getElementById("avatarRarityFilter");
  const sortMode = sortSel ? sortSel.value : "alpha";
  const catFilter = catSel ? catSel.value : "all";
  const rarFilter = rarSel ? rarSel.value : "all";

  // Populate category filter once / refresh options
  if (catSel && typeof COLLECTION_CATEGORIES !== "undefined" && catSel.dataset.filled !== "1") {
    const lang = currentLang;
    const opts = [`<option value="all">${lang === "fr" ? "Toutes catégories" : "All categories"}</option>`];
    [...COLLECTION_CATEGORIES].sort((a, b) => (a.order || 0) - (b.order || 0)).forEach(cat => {
      opts.push(`<option value="${cat.id}">${lang === "en" ? (cat.en || cat.fr) : (cat.fr || cat.en)}</option>`);
    });
    catSel.innerHTML = opts.join("");
    catSel.dataset.filled = "1";
  }

  let unlockedList = getUnlockedNames().filter(n => resolveAvatarTarget(n));
  // Doublons pixel-identiques (récompenses Merry/Sunny = même image que la base) :
  // on garde la carte de base, pas la clé de récompense
  {
    const baseKeys = new Set(unlockedList.filter(k => !(typeof findVariantById === "function" && findVariantById(k))));
    unlockedList = unlockedList.filter(k => {
      const v = (typeof findVariantById === "function") ? findVariantById(k) : null;
      if (!v || !v.collectionOnly) return true;
      const base = (typeof findCharByName === "function") ? findCharByName(v.baseName) : null;
      if (!base) return true;
      if ((v.image || base.image) === base.image && baseKeys.has(v.baseName)) return false;
      return true;
    });
  }

  if (catFilter && catFilter !== "all") {
    unlockedList = unlockedList.filter(k => getAvatarCategoryId(k) === catFilter);
  }
  if (rarFilter && rarFilter !== "all") {
    const rr = parseInt(rarFilter, 10);
    unlockedList = unlockedList.filter(k => {
      const ch = resolveAvatarTarget(k);
      return ch && (ch.rarity || 1) === rr;
    });
  }

  const loc = currentLang === "fr" ? "fr" : "en";
  unlockedList.sort((a, b) => {
    const ca = resolveAvatarTarget(a);
    const cb = resolveAvatarTarget(b);
    if (sortMode === "rarity") {
      const d = (cb?.rarity || 1) - (ca?.rarity || 1);
      if (d) return d;
    }
    if (sortMode === "category") {
      const da = getAvatarCategoryId(a) || "";
      const db = getAvatarCategoryId(b) || "";
      if (da !== db) return da.localeCompare(db);
    }
    return avatarDisplayName(a).localeCompare(avatarDisplayName(b), loc, { sensitivity: "base" });
  });

  if (!unlockedList.length) {
    grid.innerHTML = `<p class="col-span-full text-center text-slate-500 text-xs py-6">${currentLang === "fr" ? "Aucun personnage (filtre ou non débloqué)." : "No characters (filter or none unlocked)."}</p>`;
    return;
  }

  const currentAv = getCurrentAvatarName();
  unlockedList.forEach(key => {
    const ch = resolveAvatarTarget(key);
    if (!ch) return;
    const label = avatarDisplayName(key);
    const isSelected = currentAv === key;
    const shiny = !!(ch._isShiny || (findVariantById(key) && isVariantShiny(findVariantById(key))));
    const varOfKey = (typeof findVariantById === "function") ? findVariantById(key) : null;
    const isAlt = !!(varOfKey && !isVariantShiny(varOfKey));
    // Cadre par type : violet = shiny, bleu = alt, or = carte normale sélectionnée
    const frameCls = isSelected
      ? (shiny ? "border-violet-400 ring-2 ring-violet-400/50" : (isAlt ? "border-sky-400 ring-2 ring-sky-400/50" : "border-amber-400 ring-2 ring-amber-400/40"))
      : "border-slate-600/50";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `avatar-pick relative overflow-hidden border-2 transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${frameCls} ${isSelected ? "is-selected" : ""} ${shiny ? "shiny-av" : (isAlt ? "alt-av" : "")}`;
    btn.title = label + (shiny ? " ✦" : (isAlt ? " ◇" : ""));
    btn.setAttribute("aria-label", label);
    const imgSrc = ch.image || "";
    if (imgSrc) {
      btn.innerHTML = `<img src="${imgSrc}" alt="${label.replace(/"/g, "&quot;")}" loading="lazy" draggable="false" />`;
    } else {
      btn.innerHTML = avatarHTML(ch, "avatar-pick-fallback");
    }
    if (shiny) {
      const star = document.createElement("span");
      star.className = "absolute top-0.5 left-0.5 text-[10px] leading-none drop-shadow";
      star.textContent = "✦";
      btn.appendChild(star);
    }
    if (isSelected) {
      const badge = document.createElement("span");
      badge.className = "absolute top-0.5 right-0.5 text-[9px] font-bold px-1 rounded " +
        (shiny ? "bg-violet-500 text-white" : (isAlt ? "bg-sky-500 text-white" : "bg-amber-400 text-slate-900"));
      badge.textContent = "✓";
      btn.appendChild(badge);
    }
    // Carré forcé (padding-bottom) — les img absolute ne donnent pas de hauteur
    btn.style.position = "relative";
    btn.style.width = "100%";
    btn.style.height = "0";
    btn.style.paddingBottom = "100%";
    btn.style.overflow = "hidden";
    btn.style.display = "block";
    const imgEl = btn.querySelector("img");
    if (imgEl) {
      imgEl.style.position = "absolute";
      imgEl.style.inset = "0";
      imgEl.style.width = "100%";
      imgEl.style.height = "100%";
      imgEl.style.objectFit = "cover";
      imgEl.style.objectPosition = "center top";
    }
    btn.addEventListener("click", () => setAvatar(key));
    grid.appendChild(btn);
  });
}

function setupAvatarFilters() {
  ["avatarSortSelect", "avatarCatFilter", "avatarRarityFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.dataset.bound) {
      el.addEventListener("change", () => renderUnlockedGrid());
      el.dataset.bound = "1";
    }
  });
}

function openAuthModal() {
  authMode = "login";
  showAuthError(null);
  const ok = document.getElementById("authSuccess");
  if (ok) ok.classList.add("hidden");
  document.getElementById("authUsername").value = "";
  document.getElementById("authEmail").value = "";
  document.getElementById("authPassword").value = "";
  updateAuthTabs();
  document.getElementById("authModal").classList.remove("hidden");
  if (!supabaseClient) {
    showAuthError(currentLang === "fr"
      ? "Supabase non configuré : mets ton URL et ta clé anon dans le code (SUPABASE_URL / SUPABASE_ANON_KEY)."
      : "Supabase not configured: set SUPABASE_URL and SUPABASE_ANON_KEY in the code.");
  }
}

function openProfileModal() {
  if (!currentUser) {
    // Guests can still pick an avatar from locally unlocked characters
    const localUnlocked = getUnlockedNames().filter(n => resolveAvatarTarget(n));
    if (!localUnlocked.length) {
      openAuthModal();
      return;
    }
    const t = TRANSLATIONS[currentLang];
    document.getElementById("profileDisplayName").textContent = t.guest;
    document.getElementById("profileUnlockCount").textContent = `${localUnlocked.length} ${t.unlockedCount}`;
    document.getElementById("profileAvatarHint").textContent = t.avatarHint;
    document.getElementById("profileLogoutBtn").textContent = t.authLogin || (currentLang === "fr" ? "Connexion" : "Log in");
    document.getElementById("profileCloseBtn").textContent = t.close;
    document.getElementById("profileAvatarLarge").innerHTML = profileAvatarHTML("w-14 h-14");
    const largeInnerG = document.getElementById("profileAvatarLarge").querySelector("img, div");
    if (largeInnerG) {
      largeInnerG.classList.remove("rounded-xl");
      largeInnerG.classList.add("rounded-full", "w-full", "h-full");
    }
    setupAvatarFilters();
    renderUnlockedGrid();
    document.getElementById("profileModal").classList.remove("hidden");
    // Rebind logout button temporarily to open auth
    const lo = document.getElementById("profileLogoutBtn");
    if (lo) {
      lo.onclick = () => { closeAuthAndProfile(); openAuthModal(); };
    }
    return;
  }
  const t = TRANSLATIONS[currentLang];
  document.getElementById("profileDisplayName").textContent = currentUser.username;
  document.getElementById("profileUnlockCount").textContent = `${(currentUser.unlocked || []).length} ${t.unlockedCount}`;
  document.getElementById("profileAvatarHint").textContent = t.avatarHint;
  document.getElementById("profileLogoutBtn").textContent = t.logout;
  document.getElementById("profileCloseBtn").textContent = t.close;
  const loBtn = document.getElementById("profileLogoutBtn");
  if (loBtn) loBtn.onclick = () => logoutAccount();
  document.getElementById("profileAvatarLarge").innerHTML = profileAvatarHTML("w-14 h-14");
  const largeInner = document.getElementById("profileAvatarLarge").querySelector("img, div");
  if (largeInner) {
    largeInner.classList.remove("rounded-xl");
    largeInner.classList.add("rounded-full", "w-full", "h-full");
  }
  setupAvatarFilters();
  renderUnlockedGrid();
  document.getElementById("profileModal").classList.remove("hidden");
}

function closeAuthAndProfile() {
  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("profileModal").classList.add("hidden");
}

function updateAuthTabs() {
  const t = TRANSLATIONS[currentLang];
  const loginTab = document.getElementById("authTabLogin");
  const regTab = document.getElementById("authTabRegister");
  const title = document.getElementById("authModalTitle");
  const submit = document.getElementById("authSubmitBtn");
  const userWrap = document.getElementById("authUsernameWrap");
  if (loginTab) loginTab.textContent = t.authLogin || "Connexion";
  if (regTab) regTab.textContent = t.authRegister || "Créer un compte";
  const uPh = document.getElementById("authUsername");
  if (uPh) uPh.placeholder = t.authUserPh || t.authUser || (currentLang === "fr" ? "Ton pseudo" : "Your username");
  if (authMode === "login") {
    loginTab.className = "flex-1 py-1.5 rounded-md text-xs font-semibold bg-amber-500 text-slate-950";
    regTab.className = "flex-1 py-1.5 rounded-md text-xs font-semibold text-slate-400 hover:text-white";
    title.textContent = t.authLogin;
    submit.textContent = t.authSubmitLogin;
    if (userWrap) userWrap.classList.add("hidden");
  } else {
    regTab.className = "flex-1 py-1.5 rounded-md text-xs font-semibold bg-amber-500 text-slate-950";
    loginTab.className = "flex-1 py-1.5 rounded-md text-xs font-semibold text-slate-400 hover:text-white";
    title.textContent = t.authRegister;
    submit.textContent = t.authSubmitRegister;
    if (userWrap) userWrap.classList.remove("hidden");
  }
  document.getElementById("labelAuthUser").textContent = t.authUser;
  document.getElementById("labelAuthPass").textContent = t.authPass;
  const emailLabel = document.getElementById("labelAuthEmail");
  if (emailLabel) emailLabel.textContent = currentLang === "fr" ? "Email" : "Email";
  document.getElementById("authHint").textContent = t.authHint;
}

async function handleAuthSubmit() {
  tryAdminCodeFromAuthFields();
  const user = document.getElementById("authUsername").value;
  const email = document.getElementById("authEmail").value;
  const pass = document.getElementById("authPassword").value;
  const submitBtn = document.getElementById("authSubmitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "...";
  showAuthError(null);
  let err;
  if (authMode === "login") {
    err = await loginAccount(email, pass);
  } else {
    err = await registerAccount(user, email, pass);
  }
  submitBtn.disabled = false;
  updateAuthTabs();
  if (err === "CONFIRM_EMAIL") {
    showAuthSuccess(currentLang === "fr"
      ? "Compte créé ! Vérifie ta boîte mail pour confirmer, puis connecte-toi."
      : "Account created! Check your email to confirm, then log in.");
    return;
  }
  if (err) {
    showAuthError(err);
    return;
  }
  closeAuthAndProfile();
  updateProfileUI();
  updateStatsUI();
}

// ========== end account system ==========

// ========== Collection / Album ==========
const RARITY_META = {
  1: { fr: "Commun", en: "Common", color: "#94a3b8", glow: "rgba(148,163,184,0.35)", class: "rarity-1" },
  2: { fr: "Peu commun", en: "Uncommon", color: "#34d399", glow: "rgba(52,211,153,0.45)", class: "rarity-2" },
  3: { fr: "Rare", en: "Rare", color: "#60a5fa", glow: "rgba(96,165,250,0.5)", class: "rarity-3" },
  4: { fr: "Épique", en: "Epic", color: "#c084fc", glow: "rgba(192,132,252,0.55)", class: "rarity-4" },
  5: { fr: "Mythique", en: "Mythic", color: "#ef4444", glow: "rgba(239,68,68,0.6)", class: "rarity-5" },
  6: { fr: "Légendaire", en: "Legendary", color: "#fbbf24", glow: "rgba(251,191,36,0.75)", class: "rarity-6" }
};

function rarityLabel(r, lang) {
  const m = RARITY_META[r] || RARITY_META[1];
  return lang === "en" ? m.en : m.fr;
}


/** Texte d'aide : **mot clé** → <span class="help-key"> (jaune). Les retours
 *  ligne des chaînes sont conservés (whitespace-pre-line sur le <p>). */
function helpHtml(str) {
  return String(str || "").replace(/\*\*([^*]+)\*\*/g, '<span class="help-key">$1</span>');
}

/** Aide sous les réglages : le bouton « ? » masque/affiche SON texte.
 *  Chaque aide reste dans sa colonne (voir styles.css), donc les deux
 *  peuvent être ouvertes simultanément sans casser la grille. */
function setupHelpToggle(btnId, textId, key) {
  const btn = document.getElementById(btnId);
  const text = document.getElementById(textId);
  if (!btn || !text) return;
  const t = TRANSLATIONS[currentLang] || {};
  text.innerHTML = helpHtml(t[key]);
  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    text.classList.toggle("hidden", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });
}

function setupStoryHelp() {
  setupHelpToggle("storyHelpBtn", "storyHelpText", "storyHelpText");
  setupHelpToggle("modeHelpBtn", "modeHelpText", "modeHelpText");
  setupHelpToggle("versusAutoHelpBtn", "versusAutoHelpText", "versusAutoHelpText");
}


function openCollectionModal() {
  try {
    const modal = document.getElementById("collectionModal");
    if (!modal) {
      console.error("[OPDLE] #collectionModal introuvable");
      return;
    }
    updateCollectionUI();
    modal.classList.remove("hidden");
  } catch (err) {
    console.error("[OPDLE] openCollectionModal error:", err);
  }
}

function closeCollectionModal() {
  const modal = document.getElementById("collectionModal");
  if (modal) modal.classList.add("hidden");
}

/** Nombre total de cartes collectionnables : personnages + variantes.
 *  Doit correspondre au numérateur (getUnlockedNames) qui contient les deux. */
function collectionTotalCount() {
  const persos = (typeof CHARACTERS !== "undefined" && CHARACTERS) ? CHARACTERS.length : 0;
  const variantes = (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS)
    ? CHARACTER_VARIANTS.length : 0;
  return persos + variantes;
}

function updateCollectionUI() {
  const t = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  const title = document.getElementById("collectionTitle");
  if (title) title.textContent = t.collectionTitle || (currentLang === "fr" ? "Album" : "Album");
  const hint = document.getElementById("collectionHint");
  if (hint) {
    hint.textContent = t.collectionHint || (currentLang === "fr"
      ? "Album de collection — les cases non débloquées restent assombries."
      : "Collection album — locked slots stay darkened.");
  }
  const unlocked = new Set(getUnlockedNames());
  // Le numérateur compte les persos ET leurs variantes (alts, shinies, gears) ;
  // le dénominateur doit couvrir les deux, sinon l'album affiche plus de 100 %.
  const total = collectionTotalCount();
  const knownKeys = new Set([...(CHARACTERS || []).map(c => c.name), ...(CHARACTER_VARIANTS || []).map(v => v.id)]);
  const knownUnlocked = [...unlocked].filter(k => knownKeys.has(k)).length;
  const countEl = document.getElementById("collectionCount");
  if (countEl) countEl.textContent = `${knownUnlocked} / ${total}`;
  const unlLabel = document.getElementById("collectionUnlockedLabel");
  if (unlLabel) unlLabel.textContent = t.collectionUnlocked || (currentLang === "fr" ? "Débloqués" : "Unlocked");
  const eraTitle = document.getElementById("strawhatEraTitle");
  if (eraTitle) eraTitle.textContent = t.eraTitle || (currentLang === "fr" ? "Époque" : "Era");

  const raritySel = document.getElementById("collectionRarityFilter");
  const affSel = document.getElementById("collectionAffFilter");
  if (raritySel) {
    const prev = raritySel.value || "all";
    raritySel.innerHTML = `<option value="all">${currentLang === "fr" ? "Toutes raretés" : "All rarities"}</option>` +
      RARITY_LEVELS.map(r => `<option value="${r}">${rarityLabel(r, currentLang)}</option>`).join("");
    if ([...raritySel.options].some(o => o.value === prev)) raritySel.value = prev;
  }
  if (typeof updateStrawhatEraToggle === "function") updateStrawhatEraToggle();
  if (affSel) {
    const prev = affSel.value || "all";
    const cats = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : [])
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0));
    affSel.innerHTML = `<option value="all">${currentLang === "fr" ? "Toutes catégories" : "All categories"}</option>` +
      cats.map(cat => {
        const label = currentLang === "en" ? (cat.en || cat.fr) : (cat.fr || cat.en);
        return `<option value="${cat.id}">${label}</option>`;
      }).join("");
    if ([...affSel.options].some(o => o.value === prev)) affSel.value = prev;
  }

  renderCollectionGrid();
}

/** Visuel de l'interrupteur d'époque Mugiwara (track + knob + label). */
function updateStrawhatEraToggle() {
  const cb = document.getElementById("collectionStrawhatEra");
  if (!cb) return;
  const track = document.getElementById("strawhatEraTrack");
  const knob = document.getElementById("strawhatEraKnob");
  const label = document.getElementById("strawhatEraLabel");
  const post = !!cb.checked;
  if (track) track.classList.toggle("bg-amber-600", post);
  if (track) track.classList.toggle("bg-slate-600", !post);
  if (knob) knob.style.transform = post ? "translateX(20px)" : "translateX(0)";
  if (label) {
    const tt = TRANSLATIONS[currentLang] || {};
    label.textContent = post
      ? (tt.eraPost || (currentLang === "en" ? "Post-timeskip" : "Post-ellipse"))
      : (tt.eraPre || (currentLang === "en" ? "Pre-timeskip" : "Pré-ellipse"));
    label.className = "text-[11px] font-bold w-[92px] " + (post ? "text-sky-300" : "text-amber-300");
  }
}

function renderCollectionGrid() {
  if (typeof syncCollectionRewards === "function") syncCollectionRewards();

  const grid = document.getElementById("collectionGrid");
  if (!grid || typeof CHARACTERS === "undefined") return;

  const rarityFilter = document.getElementById("collectionRarityFilter")?.value || "all";
  const catFilter = document.getElementById("collectionAffFilter")?.value || "all";
  const searchRaw = (document.getElementById("collectionSearch")?.value || "").trim();
  const search = typeof cleanString === "function" ? cleanString(searchRaw) : searchRaw.toLowerCase();
  // Époque de la page Mugiwara : par défaut les formes pré-ellipse (elles sont
  // forcées à 100 % par onlyAsVariant, donc naturellement acquises en jouant).
  const strawhatPost = !!document.getElementById("collectionStrawhatEra")?.checked;
  const unlocked = new Set(getUnlockedNames());
  const lang = currentLang;

  const byName = new Map(CHARACTERS.map(c => [c.name, c]));
  const categories = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : [])
    .slice()
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  grid.innerHTML = "";
  grid.className = "flex-1 overflow-y-auto p-3 sm:p-4 space-y-5 content-start";

  // L'interrupteur d'époque ne concerne que la page Mugiwara : masqué par
  // défaut, ré-affiché par la boucle si la page est réellement rendue.
  const eraWrap = document.getElementById("strawhatEraWrap");
  if (eraWrap) eraWrap.classList.add("hidden");

  let any = false;

  categories.forEach(cat => {
    if (catFilter !== "all" && cat.id !== catFilter) return;

    // L'interrupteur d'époque ne concerne que la page Mugiwara
    if (eraWrap && cat.id === "strawhat") eraWrap.classList.remove("hidden");

    let members = (cat.members || [])
      .map(n => {
        // Mugiwara : afficher la forme pré (défaut) ou post selon l'interrupteur.
        // Les variantes *_pre n'ont pas d'unlock -> toujours considérées débloquées.
        if (cat.id === "strawhat" && typeof CHARACTER_VARIANTS !== "undefined" && !strawhatPost) {
          const pre = CHARACTER_VARIANTS.find(v => v.baseName === n && /_pre$/.test(v.id));
          if (pre) n = pre.id;
        }
        return (typeof resolveCollectionMember === "function" ? resolveCollectionMember(n) : byName.get(n));
      })
      .filter(Boolean);

    // Récompenses (Merry, Sunny…) : visibles UNIQUEMENT si déjà débloquées — jamais en silhouette
    if (typeof CHARACTER_VARIANTS !== "undefined") {
      CHARACTER_VARIANTS.forEach(v => {
        const cats = v.albumCategories || [];
        if (!cats.includes(cat.id)) return;
        if (!unlocked.has(v.id)) return;
        const resolved = typeof resolveCollectionMember === "function" ? resolveCollectionMember(v.id) : null;
        if (!resolved) return;
        if (members.some(m => m._collectionVariantId === v.id || m.name === resolved.name)) return;
        members.push(resolved);
      });
    }

    if (rarityFilter !== "all") {
      const rr = parseInt(rarityFilter, 10);
      members = members.filter(c => (c.rarity || 1) === rr);
    }
    if (search) {
      members = members.filter(c => {
        const nameOk = cleanString(c.name).includes(search);
        const aliasOk = (c.aliases || []).some(a => cleanString(a).includes(search));
        return nameOk || aliasOk;
      });
    }
    if (members.length === 0) return;
    any = true;

    const page = document.createElement("section");
    page.dataset.cat = cat.id;
    page.className = "album-page rounded-xl border border-slate-700/80 bg-slate-950/60 p-3 sm:p-4";

    const unlockedInGroup = members.filter(c => {
      const keys = c._unlockKeys || [c.name];
      return keys.some(k => unlocked.has(k));
    }).length;
    const catLabel = lang === "en" ? (cat.en || cat.fr) : (cat.fr || cat.en);
    // Page Barbe Noire : compléter l'album débloque le thème « Jolly Roger »
    let themeHint = "";
    if (cat.id === "blackbeard") {
      themeHint = jollyThemeUnlocked()
        ? `<p class="mb-2 text-[10px] sm:text-[11px] font-bold text-emerald-400">${lang === "fr" ? "🎨 Thème « Jolly Roger » débloqué ✔" : "🎨 “Jolly Roger” theme unlocked ✔"}</p>`
        : `<p class="mb-2 text-[10px] sm:text-[11px] font-semibold text-amber-400/80">${lang === "fr" ? "🎨 Compléter cette page débloque le thème « Jolly Roger »" : "🎨 Complete this page to unlock the “Jolly Roger” theme"}</p>`;
    }

    page.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-700/70">
        <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-400/90">${catLabel}</h3>
        <span class="text-[10px] sm:text-xs text-slate-500 tabular-nums">${unlockedInGroup}/${members.length}</span>
      </div>
      ${themeHint}
      <div class="album-slots grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2"></div>
    `;
    const slots = page.querySelector(".album-slots");

    members.forEach(c => {
      const r = c.rarity || 1;
      const meta = RARITY_META[r] || RARITY_META[1];
      const unlockKeys = c._unlockKeys || [c.name];
      const isUnlocked = unlockKeys.some(k => unlocked.has(k));
      const variants = (typeof getCollectionVariantsForBase === "function") ? getCollectionVariantsForBase(c.name) : [];
      const totalVariants = variants.length;
      const unlockedVariantsCount = variants.filter(v => unlocked.has(v.id)).length;
      const allVariantsUnlocked = totalVariants > 0 && unlockedVariantsCount === totalVariants;
      const hasAnyVariantUnlocked = unlockedVariantsCount > 0;
      const shinyUnlocked = variants.some(v => isVariantShiny(v) && unlocked.has(v.id));
      const slot = document.createElement("button");
      slot.type = "button";
      const rarityClass = "rarity-" + r;
      const lockClass = isUnlocked ? "" : " locked";
      slot.className = "album-slot relative aspect-[3/4] rounded-lg overflow-hidden border-2 select-none cursor-pointer transition hover:scale-[1.03] hover:z-10 focus:outline-none focus:ring-2 focus:ring-amber-400/50 " + rarityClass + " " + (meta.class || "") + lockClass;
      slot.style.borderColor = meta.color;
      slot.style.opacity = isUnlocked ? "1" : "0.9";
      slot.style.boxShadow = isUnlocked
        ? `0 0 12px ${meta.glow || meta.color}, inset 0 0 0 1px ${meta.color}66`
        : `inset 0 0 0 1px ${meta.color}44`;
      slot.style.background = "#0f172a";
      const label = c._collectionLabel || c.name;
      let tip = isUnlocked ? label : (lang === "fr" ? "Non débloqué — cliquer pour détails" : "Locked — click for details");
      if (totalVariants > 0) {
        tip += (lang === "fr" ? ` · Variantes ${unlockedVariantsCount}/${totalVariants}` : ` · Variants ${unlockedVariantsCount}/${totalVariants}`);
        if (allVariantsUnlocked) tip += " ✓";
      }
      tip += ` · ${rarityLabel(r, lang)}`;
      slot.title = tip;
      slot.dataset.charName = c.name;

      const imgSrc = c.image || "";
      const initials = (typeof getInitials === "function") ? getInitials(c.name) : "?";
      const hue = (typeof nameToHue === "function") ? nameToHue(c.name) : 210;
      const objPos = getImageObjectPosition(c.name);

      // Variant badge (always if variants exist)
      let variantBadge = "";
      if (totalVariants > 0) {
        const badgeColor = allVariantsUnlocked
          ? "bg-emerald-500/90 text-white"
          : hasAnyVariantUnlocked
            ? "bg-sky-500/90 text-white"
            : "bg-slate-700/90 text-slate-300";
        const badgeIcon = allVariantsUnlocked ? "✓" : (shinyUnlocked ? "✦" : "◇");
        variantBadge = `<span class="absolute top-0.5 right-0.5 z-10 flex items-center gap-0.5 rounded px-1 py-0.5 text-[7px] sm:text-[8px] font-bold leading-none ${badgeColor} shadow-sm" title="${unlockedVariantsCount}/${totalVariants}">${badgeIcon}${unlockedVariantsCount}/${totalVariants}</span>`;
      } else if (shinyUnlocked) {
        variantBadge = `<span class="absolute top-0.5 right-0.5 z-10 text-[9px] leading-none" title="Shiny">✦</span>`;
      }

      // Rarity dot always visible
      const rarityDot = `<span class="absolute top-0.5 left-0.5 z-10 w-1.5 h-1.5 rounded-full" style="background:${meta.color};box-shadow:0 0 4px ${meta.color}${isUnlocked ? "" : "88"}" title="${rarityLabel(r, lang)}"></span><span class="rarity-bar" style="background:${meta.color};opacity:${isUnlocked ? "0.95" : "0.45"}"></span>`;
      slot.innerHTML = `
        <div class="absolute inset-0">
          ${imgSrc
            ? `<img src="${imgSrc}" alt="" draggable="false"
                 class="w-full h-full object-cover"
                 style="object-position:${objPos};${isUnlocked ? "" : "filter:brightness(0.55) opacity(0.6);"}"
                 onerror="this.style.display='none';const f=this.nextElementSibling;if(f)f.style.display='flex'" />
               <div class="w-full h-full items-center justify-center text-lg font-black text-slate-600"
                    style="display:none;background:hsl(${hue},30%,18%)">${initials}</div>`
            : `<div class="w-full h-full flex items-center justify-center text-lg font-black"
                 style="background:hsl(${hue},30%,14%);color:${isUnlocked ? "#e2e8f0" : "#334155"}">${initials}</div>`
          }
        </div>
        ${rarityDot}
        ${variantBadge}
        ${isUnlocked
          ? `<div class="absolute inset-x-0 bottom-0 pt-6 pb-1 px-0.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
               <div class="text-[8px] sm:text-[9px] font-bold text-white text-center leading-tight line-clamp-2 drop-shadow">${c._collectionLabel || c.name}</div>
             </div>`
          : `<div class="absolute inset-0 bg-black/45 pointer-events-none"></div>
             <div class="absolute inset-x-0 bottom-0 py-1 bg-black/80">
               <div class="text-[8px] font-semibold text-slate-500 text-center">???</div>
             </div>`
        }
      `;
      slot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openCharacterDetail(c._collectionVariantId || c.name);
      });
      slots.appendChild(slot);
    });

    grid.appendChild(page);
  });

  // Si la page Mugiwara n'a pas été rendue (filtre), masquer l'interrupteur
  if (eraWrap && !grid.querySelector('[data-cat="strawhat"]')) eraWrap.classList.add("hidden");

  if (!any) {
    grid.innerHTML = `<p class="text-center text-slate-500 text-sm py-10">${lang === "fr" ? "Aucun personnage" : "No characters"}</p>`;
  }
}

function formatStatLine(label, value) {
  return `<div class="flex justify-between gap-3 text-xs py-1 border-b border-slate-800/80">
    <span class="text-slate-500 shrink-0">${label}</span>
    <span class="text-slate-200 font-semibold text-right break-words">${value}</span>
  </div>`;
}

function openCharacterDetail(charName) {
  const modal = document.getElementById("charDetailModal");
  if (!modal) {
    console.warn("[OPDLE] #charDetailModal missing");
    return;
  }
  // Accept base name OR variant id
  const variant = (typeof findVariantById === "function") ? findVariantById(charName) : null;
  const c = variant
    ? (typeof applyVariant === "function" ? applyVariant(findCharByName(variant.baseName), variant) : findCharByName(variant.baseName))
    : findCharByName(charName);
  if (!c) return;
  const detailKey = variant ? variant.id : c.name;

  const lang = currentLang;
  const unlocked = new Set(getUnlockedNames());
  const isUnlocked = unlocked.has(detailKey) || unlocked.has(c.name);
  const r = c.rarity || 1;
  const meta = RARITY_META[r] || RARITY_META[1];

  const avatarEl = document.getElementById("charDetailAvatar");
  const nameEl = document.getElementById("charDetailName");
  const rarityEl = document.getElementById("charDetailRarity");
  const lockEl = document.getElementById("charDetailLock");
  if (avatarEl) {
    if (isUnlocked) {
      avatarEl.innerHTML = avatarHTML(c, "w-20 h-20");
    } else {
      avatarEl.innerHTML = `<div class="w-20 h-20 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-3xl text-slate-600">👤</div>`;
    }
  }
  if (nameEl) {
    let display = c.name;
    if (variant && variant.displayName) {
      display = variant.displayName[lang] || variant.displayName.fr || variant.displayName.en || c.name;
    } else if (c._variantDisplay) {
      display = c._variantDisplay[lang] || c._variantDisplay.fr || c._variantDisplay.en || c.name;
    }
    nameEl.textContent = isUnlocked ? display : "???";
  }
  if (rarityEl) {
    rarityEl.textContent = rarityLabel(r, lang);
    rarityEl.style.color = meta.color;
  }
  if (lockEl) {
    lockEl.textContent = isUnlocked
      ? (lang === "fr" ? "✓ Débloqué" : "✓ Unlocked")
      : (lang === "fr" ? "🔒 Non débloqué" : "🔒 Locked");
    lockEl.className = isUnlocked
      ? "text-xs font-semibold text-emerald-400"
      : "text-xs font-semibold text-slate-500";
  }

  const statsEl = document.getElementById("charDetailStats");
  if (statsEl) {
    if (!isUnlocked) {
      statsEl.innerHTML = `<p class="text-slate-500 text-xs text-center py-4">${lang === "fr" ? "Gagne une partie avec ce personnage pour révéler ses caractéristiques." : "Win a game with this character to reveal their stats."}</p>`;
    } else {
      const aff = isUnknownValue(c.affiliation) ? unknownLabel(lang) : (c.affiliation[lang] || c.affiliation.fr);
      const fruit = isUnknownValue(c.fruit) ? unknownLabel(lang) : (c.fruit[lang] || c.fruit.fr);
      const haki = isUnknownValue(c.haki) ? unknownLabel(lang) : (c.haki[lang] || c.haki.fr);
      const titre = isUnknownValue(c.titre) ? unknownLabel(lang) : (c.titre[lang] || c.titre.fr);
      const gender = c.gender ? (c.gender[lang] || c.gender.fr) : "—";
      const age = (c.age == null || c.age === 0) ? unknownLabel(lang) : c.age + " " + (TRANSLATIONS[lang]?.yearsOld || "ans");
      const height = (c.height == null || c.height === 0) ? unknownLabel(lang) : c.height + " cm";
      statsEl.innerHTML = [
        formatStatLine(lang === "fr" ? "Genre" : "Gender", gender),
        formatStatLine(lang === "fr" ? "Affiliation" : "Affiliation", aff),
        formatStatLine(lang === "fr" ? "Fruit" : "Devil Fruit", fruit),
        formatStatLine("Haki", haki),
        formatStatLine(lang === "fr" ? "Prime" : "Bounty", formatPrimeDisplay(c.prime, lang)),
        formatStatLine(lang === "fr" ? "Arc d'apparition" : "First arc", getArcDisplayName(c.arc)),
        formatStatLine(lang === "fr" ? "Titre" : "Title", titre),
        formatStatLine(lang === "fr" ? "Âge" : "Age", age),
        formatStatLine(lang === "fr" ? "Taille" : "Height", height)
      ].join("");
    }
  }

  const evoEl = document.getElementById("charDetailEvolution");
  if (evoEl) {
    const hist = (typeof CHARACTER_HISTORY !== "undefined" && CHARACTER_HISTORY[c.name]) || null;
    if (!hist || !isUnlocked) {
      evoEl.innerHTML = `<p class="text-slate-600 text-[11px] text-center py-2">${lang === "fr" ? "Pas d'évolution enregistrée ou personnage verrouillé." : "No evolution data or character locked."}</p>`;
    } else {
      const points = STORY_ORDER.filter(sid => hist[sid]);
      if (points.length === 0) {
        evoEl.innerHTML = `<p class="text-slate-600 text-[11px] text-center py-2">${lang === "fr" ? "Pas d'évolution enregistrée." : "No evolution data."}</p>`;
      } else {
        evoEl.innerHTML = points.map(sid => {
          const ov = hist[sid];
          const storyLabel = (STORY_POINTS[sid] && TRANSLATIONS[lang]?.[STORY_POINTS[sid].labelKey]) || sid;
          const bits = [];
          if (ov.prime !== undefined) bits.push((lang === "fr" ? "Prime " : "Bounty ") + formatPrimeDisplay(ov.prime, lang));
          if (ov.age !== undefined) bits.push((lang === "fr" ? "Âge " : "Age ") + ov.age);
          if (ov.fruit) bits.push((ov.fruit[lang] || ov.fruit.fr));
          if (ov.haki) bits.push("Haki: " + (ov.haki[lang] || ov.haki.fr));
          if (ov.titre) bits.push(ov.titre[lang] || ov.titre.fr);
          if (ov.affiliation) bits.push(ov.affiliation[lang] || ov.affiliation.fr);
          return `<div class="rounded-lg bg-slate-800/60 border border-slate-700/50 px-2.5 py-2">
            <div class="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 mb-0.5">${storyLabel}</div>
            <div class="text-[11px] text-slate-300 leading-snug">${bits.length ? bits.join(" · ") : "—"}</div>
          </div>`;
        }).join("");
      }
    }
  }

  const varEl = document.getElementById("charDetailVariants");
  if (varEl) {
    const allVariants = (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : [])
      .filter(v => v.baseName === c.name)
      // Récompense pixel-identique à la base (Merry/Sunny) : pas de ligne "Variante" en double
      .filter(v => !(v.collectionOnly && (v.image || c.image) === c.image));
    // Quand on consulte un alt/shiny, la carte normale est listée aussi (en premier) —
    // sauf si elle est visuellement identique (ex. navires : même image, même nom)
    let baseRow = "";
    const baseChar = variant ? findCharByName(variant.baseName) : null;
    if (variant && baseChar && baseChar.image !== variant.image) {
      const baseUnlocked = unlocked.has(baseChar.name);
      const baseIsCurrentAv = baseUnlocked && typeof getCurrentAvatarName === "function" && getCurrentAvatarName() === baseChar.name;
      const baseAvLabel = baseIsCurrentAv
        ? (lang === "fr" ? "✓ Avatar actuel" : "✓ Current avatar")
        : (lang === "fr" ? "Utiliser comme avatar" : "Use as avatar");
      const baseAvBtn = baseUnlocked
        ? `<button type="button" class="char-var-avatar-btn shrink-0 max-w-[7.5rem] px-2 py-1.5 rounded-lg text-[10px] font-bold leading-tight border transition ${baseIsCurrentAv ? "border-emerald-500/50 bg-emerald-900/40 text-emerald-300" : "border-amber-500/40 bg-slate-800 hover:bg-amber-500/20 text-amber-300"}" data-avatar-key="${baseChar.name}">${baseAvLabel}</button>`
        : "";
      const baseRLabel = rarityLabel(baseChar.rarity || 1, lang);
      const baseArc = (typeof getArcDisplayName === "function" && baseChar.arc) ? getArcDisplayName(baseChar.arc) : "";
      baseRow = `<div class="flex items-center gap-2.5 rounded-xl border ${baseUnlocked ? "border-emerald-500/40 bg-slate-800/70" : "border-slate-700/60 bg-slate-900/50"} p-2">
          <div class="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 shrink-0 flex items-center justify-center">
            ${baseUnlocked && baseChar.image
              ? `<img src="${baseChar.image}" class="w-full h-full object-cover" style="object-position:${getImageObjectPosition(baseChar.name)}" onerror="this.parentElement.textContent='○'" />`
              : `<span class="text-slate-600 text-lg">○</span>`}
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs font-bold ${baseUnlocked ? "text-white" : "text-slate-500"} truncate">${baseUnlocked ? baseChar.name : "???"}</div>
            <div class="text-[10px] text-slate-500">${lang === "fr" ? "Carte normale" : "Normal card"} · ${baseRLabel}</div>
            <div class="text-[10px] text-slate-600">${baseArc}</div>
          </div>
          ${baseAvBtn}
          <div class="text-[10px] font-semibold shrink-0 ${baseUnlocked ? "text-emerald-400" : "text-slate-600"}">
            ${baseUnlocked ? "✓" : "🔒"}
          </div>
        </div>`;
    }
    if (allVariants.length === 0 && !baseRow) {
      varEl.innerHTML = `<p class="text-slate-600 text-[11px] text-center py-2">${lang === "fr" ? "Aucune variante / shiny pour ce personnage." : "No variants / shinies for this character."}</p>`;
    } else {
      varEl.innerHTML = baseRow + allVariants.map(v => {
        const vUnlocked = unlocked.has(v.id);
        const label = v.displayName[lang] || v.displayName.fr || v.displayName.en;
        const rLabel = rarityLabel(v.rarity || 4, lang);
        let storyNeed = "";
        if (Array.isArray(v.stories) && v.stories.length) {
          storyNeed = v.stories.map(s => {
            if (s === "all") return lang === "fr" ? "Actuel" : "Current";
            return (STORY_POINTS[s] && TRANSLATIONS[lang]?.[STORY_POINTS[s].labelKey]) || s;
          }).join(" · ");
        } else if (v.minStory === "all") {
          storyNeed = lang === "fr" ? "Histoire : Actuel" : "Story: Current";
        } else {
          const minL = (STORY_POINTS[v.minStory] && TRANSLATIONS[lang]?.[STORY_POINTS[v.minStory].labelKey]) || v.minStory || "";
          const maxL = v.maxStory
            ? ((STORY_POINTS[v.maxStory] && TRANSLATIONS[lang]?.[STORY_POINTS[v.maxStory].labelKey]) || v.maxStory)
            : null;
          storyNeed = maxL && maxL === minL ? minL : (maxL ? `${minL} → ${maxL}` : minL);
        }
        const badge = isVariantShiny(v) ? "✦ Shiny" : (lang === "fr" ? "Variante" : "Variant");
        let unlockHint = "";
        if (v.unlock) {
          if (v.unlock.hardExtremeWins != null) {
            unlockHint = lang === "fr"
              ? `${hardExtremeWins}/${v.unlock.hardExtremeWins} victoires Difficile/Extrême`
              : `${hardExtremeWins}/${v.unlock.hardExtremeWins} Hard/Extreme wins`;
          } else if (v.unlock.extremeWins != null) {
            unlockHint = lang === "fr"
              ? `${extremeWins}/${v.unlock.extremeWins} victoires Extrême`
              : `${extremeWins}/${v.unlock.extremeWins} Extreme wins`;
          }
        }
        const reqOk = isVariantUnlocked(v);
        // Collection unlock = won with this form OR threshold reached for gear unlocks
        const showUnlocked = vUnlocked || (v.unlock && reqOk && unlocked.has(v.id));
        const isCurrentAv = showUnlocked && getCurrentAvatarName() === v.id;
        const avLabel = isCurrentAv
          ? (lang === "fr" ? "✓ Avatar actuel" : "✓ Current avatar")
          : (lang === "fr" ? "Utiliser comme avatar" : "Use as avatar");
        const avBtn = showUnlocked
          ? `<button type="button" class="char-var-avatar-btn shrink-0 max-w-[7.5rem] px-2 py-1.5 rounded-lg text-[10px] font-bold leading-tight border transition ${isCurrentAv ? "border-emerald-500/50 bg-emerald-900/40 text-emerald-300" : "border-amber-500/40 bg-slate-800 hover:bg-amber-500/20 text-amber-300"}" data-avatar-key="${v.id}">${avLabel}</button>`
          : "";
        const rowFrame = !showUnlocked
          ? "border-slate-700/60 bg-slate-900/50"
          : (isVariantShiny(v) ? "border-violet-500/60 bg-violet-950/30" : "border-sky-500/60 bg-sky-950/30");
        return `<div class="flex items-center gap-2.5 rounded-xl border ${rowFrame} p-2">
          <div class="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 shrink-0 flex items-center justify-center">
            ${showUnlocked && v.image
              ? `<img src="${v.image}" class="w-full h-full object-cover" style="object-position:${getImageObjectPosition(v.baseName || "")}" onerror="this.parentElement.textContent='${isVariantShiny(v) ? "✦" : "◇"}'" />`
              : `<span class="text-slate-600 text-lg">${isVariantShiny(v) ? "✦" : "◇"}</span>`}
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-xs font-bold ${showUnlocked ? "text-white" : "text-slate-500"} truncate">${showUnlocked ? label : "???"}</div>
            <div class="text-[10px] text-slate-500">${badge} · ${rLabel}</div>
            <div class="text-[10px] text-slate-600">${storyNeed}</div>
            ${unlockHint ? `<div class="text-[10px] ${reqOk ? "text-emerald-500" : "text-amber-500/80"}">${unlockHint}</div>` : ""}
          </div>
          ${avBtn}
          <div class="text-[10px] font-semibold shrink-0 ${showUnlocked ? "text-emerald-400" : "text-slate-600"}">
            ${showUnlocked ? "✓" : "🔒"}
          </div>
        </div>`;
      }).join("");
    }
  }

  document.querySelectorAll(".char-var-avatar-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const key = btn.getAttribute("data-avatar-key");
      if (key && typeof setAvatar === "function") {
        setAvatar(key);
        // Rafraîchir les libellés des boutons avatar de la liste
        document.querySelectorAll(".char-var-avatar-btn").forEach(b => {
          const k = b.getAttribute("data-avatar-key");
          const cur = getCurrentAvatarName() === k;
          b.textContent = cur
            ? (lang === "fr" ? "✓ Avatar actuel" : "✓ Current avatar")
            : (lang === "fr" ? "Utiliser comme avatar" : "Use as avatar");
          b.className = `char-var-avatar-btn shrink-0 max-w-[7.5rem] px-2 py-1.5 rounded-lg text-[10px] font-bold leading-tight border transition ${cur ? "border-emerald-500/50 bg-emerald-900/40 text-emerald-300" : "border-amber-500/40 bg-slate-800 hover:bg-amber-500/20 text-amber-300"}`;
          b.setAttribute("data-avatar-key", k);
        });
      }
    });
  });

  const titleEvo = document.getElementById("charDetailEvoTitle");
  if (titleEvo) titleEvo.textContent = lang === "fr" ? "Évolution dans l'histoire" : "Story evolution";
  const titleVar = document.getElementById("charDetailVarTitle");
  if (titleVar) titleVar.textContent = lang === "fr" ? "Variantes & Shinies" : "Variants & Shinies";
  const closeBtn = document.getElementById("charDetailCloseBtn");
  if (closeBtn) closeBtn.textContent = TRANSLATIONS[lang]?.close || (lang === "fr" ? "Fermer" : "Close");

  // Avatar picker from collection detail
  let avBtn = document.getElementById("charDetailSetAvatarBtn");
  if (!avBtn) {
    const footer = closeBtn ? closeBtn.parentElement : null;
    if (footer) {
      avBtn = document.createElement("button");
      avBtn.id = "charDetailSetAvatarBtn";
      avBtn.type = "button";
      avBtn.className = "w-full bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold py-2.5 rounded-xl border border-slate-600/50 transition mb-2";
      footer.insertBefore(avBtn, closeBtn);
    }
  }
  if (avBtn) {
    if (isUnlocked) {
      avBtn.classList.remove("hidden");
      const avatarKey = detailKey;
      const isCurrent = getCurrentAvatarName() === avatarKey;
      avBtn.textContent = isCurrent
        ? (lang === "fr" ? "✓ Avatar actuel" : "✓ Current avatar")
        : (lang === "fr" ? "Utiliser comme avatar" : "Use as avatar");
      avBtn.onclick = () => {
        setAvatar(avatarKey);
        avBtn.textContent = lang === "fr" ? "✓ Avatar actuel" : "✓ Current avatar";
        if (typeof refreshAvatarDisplays === "function") refreshAvatarDisplays();
      };
    } else {
      avBtn.classList.add("hidden");
      avBtn.onclick = null;
    }
  }

  modal.classList.remove("hidden");
}

function closeCharacterDetail() {
  const modal = document.getElementById("charDetailModal");
  if (modal) modal.classList.add("hidden");
}

// Film-only characters: only available in story mode "all" (Actuel)
const FILM_ONLY_NAMES = new Set(["Uta", "Douglas Bullet", "Shiki"]);

function getAvailableCharacters() {
  const point = STORY_POINTS[currentStory] || STORY_POINTS.all;
  let pool;
  if (!point.maxArc) {
    pool = CHARACTERS.slice();
  } else {
    const maxIdx = ARCS_ORDER.indexOf(point.maxArc);
    if (maxIdx < 0) pool = CHARACTERS.slice();
    else {
      pool = CHARACTERS.filter(c => {
        const idx = ARCS_ORDER.indexOf(c.arc);
        return idx !== -1 && idx <= maxIdx;
      });
    }
  }
  // Exclude film-only characters outside "Actuel"
  if (currentStory !== "all") {
    pool = pool.filter(c => !FILM_ONLY_NAMES.has(c.name));
  }
  pool = pool.filter(c => !c.notGuessable);

  // Overrides admin (panneau Raretés) : arcs imposés ou carte désactivée.
  // (forceInPool ci-dessous reste prioritaire : une base forcée entre quand même,
  // sauf si explicitement désactivée.)
  try {
    const vo = (typeof variantOverrides === "function") ? variantOverrides() : {};
    pool = pool.filter(c => {
      const o = vo[c.name];
      if (!o) return true;
      if (o.disabled) return false;
      if (Array.isArray(o.stories)) return o.stories.includes(currentStory);
      return true;
    });
  } catch (e) {}

  // Base réservée à un point d'histoire (ex. Buggy : minStory "fishman"). Placé
  // avant le forceInPool : un alt forceInPool (buggy_eastblue…) la ré-ajoute là où
  // il est disponible.
  pool = pool.filter(c => !c.minStory || storyIndex(currentStory) >= storyIndex(c.minStory));

  // Force-include bases for variants with forceInPool (e.g. young Sabo at Fish-Man Island)
  const forced = getForceInPoolVariants(currentStory);
  if (forced.length) {
    const names = new Set(pool.map(c => c.name));
    let voF = {};
    try { voF = (typeof variantOverrides === "function") ? variantOverrides() : {}; } catch (e) {}
    forced.forEach(v => {
      if (names.has(v.baseName)) return;
      if (voF[v.baseName] && voF[v.baseName].disabled) return;
      const base = CHARACTERS.find(c => c.name === v.baseName);
      if (base) {
        pool.push(base);
        names.add(base.name);
      }
    });
  }
  return pool;
}

// Story order for cascading history (earlier keys apply until overridden)
// STORY_ORDER is defined in data/meta.js (single source of truth)

// Historical overrides per character. Keys are story point ids.
// Values cascade: the latest defined key up to currentStory is used.
// Only fields present are overridden (prime, age, titre, affiliation, fruit, haki).

// CHARACTER_HISTORY is defined in data.js (single source of truth for temporal stats).
// Run: node validate-history.js



function isUnknownValue(val) {
  if (val === null || val === undefined) return true;
  if (typeof val === "number" && val === 0 && arguments.length > 1) return false; // 0 can be valid (prime 0, age 0 rare)
  if (typeof val === "object" && val !== null) {
    const fr = val.fr;
    if (fr === "Inconnu" || fr === "Unknown") return true;
  }
  if (val === "Inconnu" || val === "Unknown") return true;
  return false;
}

function unknownLabel(lang) {
  return lang === "en" ? "Unknown" : "Inconnu";
}

function resolveCharacter(baseChar, storyId) {
  if (!baseChar) return baseChar;
  const hist = CHARACTER_HISTORY[baseChar.name];
  if (!hist) return baseChar;

  const sid = storyId || currentStory;
  const orderIdx = STORY_ORDER.indexOf(sid);
  // Cascade: apply all overrides from earliest up to current story point
  let merged = {};
  for (let i = 0; i <= orderIdx; i++) {
    const key = STORY_ORDER[i];
    if (hist[key]) Object.assign(merged, hist[key]);
  }
  if (Object.keys(merged).length === 0) return baseChar;

  // Deep-ish merge for nested objects; null means "unknown at this point"
  const resolved = Object.assign({}, baseChar);
  for (const k of Object.keys(merged)) {
    if (merged[k] !== null && typeof merged[k] === "object" && !Array.isArray(merged[k])) {
      resolved[k] = Object.assign({}, baseChar[k] || {}, merged[k]);
    } else {
      resolved[k] = merged[k]; // includes null for unknown
    }
  }
  return resolved;
}

const TOOLTIP_DATA = {
  char: {
    title: { fr: "Personnage", en: "Character" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Bon personnage</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Mauvais personnage</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Correct character</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: Incorrect character</div>"
    }
  },
  gender: {
    title: { fr: "Genre", en: "Gender" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Genre identique</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Genre différent</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Same gender</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: Different gender</div>"
    }
  },
  affiliation: {
    title: { fr: "Affiliation", en: "Affiliation" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Même affiliation</div><div><span class='text-amber-400 font-bold'>🟨 Jaune</span> : Autre équipage pirate</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Affiliation différente</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Same affiliation</div><div><span class='text-amber-400 font-bold'>🟨 Yellow</span>: Another pirate crew</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: Different affiliation</div>"
    }
  },
  fruit: {
    title: { fr: "Fruit du démon", en: "Devil Fruit" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Type de fruit exact</div><div><span class='text-amber-400 font-bold'>🟨 Jaune</span> : Ont tous deux un fruit</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Type différent / Aucun</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact fruit type</div><div><span class='text-amber-400 font-bold'>🟨 Yellow</span>: Both have fruit</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: Different type / None</div>"
    }
  },
  haki: {
    title: { fr: "Haki", en: "Haki" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Combinaison exacte</div><div><span class='text-amber-400 font-bold'>🟨 Jaune</span> : Au moins un Haki commun</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Aucun Haki commun</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact match</div><div><span class='text-amber-400 font-bold'>🟨 Yellow</span>: Shared Haki</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: No Haki in common</div>"
    }
  },
  bounty: {
    title: { fr: "Prime", en: "Bounty" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Prime exacte</div><div><span class='text-sky-400 font-bold'>🟦 Bleu ⬆️</span> : Prime cherchée plus haute</div><div><span class='text-rose-400 font-bold'>🟥 Rouge ⬇️</span> : Prime cherchée plus basse</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact bounty</div><div><span class='text-sky-400 font-bold'>🟦 Blue ⬆️</span>: Mystery bounty higher</div><div><span class='text-rose-400 font-bold'>🟥 Red ⬇️</span>: Mystery bounty lower</div>"
    }
  },
  arc: {
    title: { fr: "Arc d'apparition", en: "First Arc" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Arc exact</div><div><span class='text-sky-400 font-bold'>🟦 Bleu ⬆️</span> : Apparu plus tard</div><div><span class='text-rose-400 font-bold'>🟥 Rouge ⬇️</span> : Apparu plus tôt</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact arc</div><div><span class='text-sky-400 font-bold'>🟦 Blue ⬆️</span>: Appeared later</div><div><span class='text-rose-400 font-bold'>🟥 Red ⬇️</span>: Appeared earlier</div>"
    }
  },
  title: {
    title: { fr: "Titre / Statut", en: "Title / Status" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Titre exact</div><div><span class='text-amber-400 font-bold'>🟨 Jaune</span> : Titre partagé</div><div><span class='text-slate-400 font-bold'>⬛ Gris</span> : Aucun titre commun</div><div class='mt-1.5 pt-1.5 border-t border-slate-700/60 text-slate-400 text-[10px] leading-snug'>On compare <span class='text-slate-200 font-semibold'>tous les titres qu'un personnage a eus dans l'histoire</span>, pas seulement celui d'aujourd'hui. Un même personnage peut changer de titre au fil des arcs : il compte donc pour chacun de ses anciens titres aussi.</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact title</div><div><span class='text-amber-400 font-bold'>🟨 Yellow</span>: Shared title</div><div><span class='text-slate-400 font-bold'>⬛ Gray</span>: No title in common</div><div class='mt-1.5 pt-1.5 border-t border-slate-700/60 text-slate-400 text-[10px] leading-snug'>We compare <span class='text-slate-200 font-semibold'>every title a character has held at any point in the story</span>, not just their current one. A character may change title across arcs, so their earlier titles count too.</div>"
    }
  },
  age: {
    title: { fr: "Âge", en: "Age" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Âge exact</div><div><span class='text-sky-400 font-bold'>🟦 Bleu ⬆️</span> : Personnage plus âgé</div><div><span class='text-rose-400 font-bold'>🟥 Rouge ⬇️</span> : Personnage plus jeune</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact age</div><div><span class='text-sky-400 font-bold'>🟦 Blue ⬆️</span>: Mystery character older</div><div><span class='text-rose-400 font-bold'>🟥 Red ⬇️</span>: Mystery character younger</div>"
    }
  },
  height: {
    title: { fr: "Taille", en: "Height" },
    content: {
      fr: "<div><span class='text-emerald-400 font-bold'>🟩 Vert</span> : Taille exacte</div><div><span class='text-sky-400 font-bold'>🟦 Bleu ⬆️</span> : Personnage plus grand</div><div><span class='text-rose-400 font-bold'>🟥 Rouge ⬇️</span> : Personnage plus petit</div>",
      en: "<div><span class='text-emerald-400 font-bold'>🟩 Green</span>: Exact height</div><div><span class='text-sky-400 font-bold'>🟦 Blue ⬆️</span>: Mystery character taller</div><div><span class='text-rose-400 font-bold'>🟥 Red ⬇️</span>: Mystery character shorter</div>"
    }
  }
};

const globalTooltip = document.getElementById("globalTooltip");

document.querySelectorAll(".header-col").forEach(col => {
  col.addEventListener("mouseenter", (e) => {
    const key = col.dataset.col;
    const data = TOOLTIP_DATA[key];
    if (!data) return;

    globalTooltip.innerHTML = `
      <div class="font-bold text-amber-400 mb-1">${data.title[currentLang]}</div>
      ${data.content[currentLang]}
    `;
    globalTooltip.classList.remove("hidden");
    positionTooltip(e);
  });

  col.addEventListener("mousemove", (e) => {
    positionTooltip(e);
  });

  col.addEventListener("mouseleave", () => {
    globalTooltip.classList.add("hidden");
  });
});

function positionTooltip(e) {
  const tooltipWidth = globalTooltip.offsetWidth || 220;
  const tooltipHeight = globalTooltip.offsetHeight || 100;
  let left = e.clientX + 10;
  let top = e.clientY + 15;

  if (left + tooltipWidth > window.innerWidth - 10) {
    left = window.innerWidth - tooltipWidth - 10;
  }
  if (top + tooltipHeight > window.innerHeight - 10) {
    top = e.clientY - tooltipHeight - 10;
  }

  globalTooltip.style.left = `${Math.max(10, left)}px`;
  globalTooltip.style.top = `${Math.max(10, top)}px`;
}

function getArcDisplayName(arcId) {
  const found = ARCS_DATA.find(a => a.id === arcId);
  if (!found) return arcId;
  return currentLang === "en" ? found.en : found.fr;
}

function updateLanguageUI() {
  const t = TRANSLATIONS[currentLang];
  document.documentElement.lang = currentLang;

  document.getElementById("subTitleText").textContent = t.subtitle;
  const footerText = document.getElementById("footerText");
  if (footerText) footerText.textContent = t.footerText || "";
  document.getElementById("labelStreak").textContent = "🔥";
  document.getElementById("labelWins").textContent = "🏆";
  document.getElementById("labelGiveUp").textContent = t.giveUp;
  document.getElementById("labelNewGame").textContent = t.newGame;
  document.getElementById("guessInput").placeholder = t.placeholder;
  document.getElementById("labelMode").textContent = t.modeLabel;
  document.getElementById("labelAttemptsLeft").textContent = t.attemptsLeft;
  document.getElementById("labelStory").textContent = t.storyLabel;

  const modeSel = document.getElementById("modeSelect");
  if (modeSel) {
    modeSel.options[0].text = t.modeEasy;
    modeSel.options[1].text = t.modeMedium;
    modeSel.options[2].text = t.modeHard;
    modeSel.options[3].text = t.modeExtreme;
  }
  const storySel = document.getElementById("storySelect");
  if (storySel) {
    const storyLabels = [
      t.storyEastBlue, t.storyAlabasta, t.storySkypiea, t.storyWater7,
      t.storyThriller, t.storyMarineford, t.storyFishman, t.storyDressrosa,
      t.storyWholeCake, t.storyWano, t.storyAll
    ];
    for (let i = 0; i < storySel.options.length && i < storyLabels.length; i++) {
      storySel.options[i].text = storyLabels[i];
    }
  }
  // Lang button short label (bouton dédié supprimé : langue via Réglages)

  document.getElementById("legCorrect").textContent = t.legCorrect;
  document.getElementById("legPartial").textContent = t.legPartial;
  document.getElementById("legIncorrect").textContent = t.legIncorrect;
  document.getElementById("legLower").textContent = t.legLower;
  document.getElementById("legHigher").textContent = t.legHigher;

  document.getElementById("colCharLabel").textContent = t.colChar;
  document.getElementById("colGenderLabel").textContent = t.colGender;
  document.getElementById("colAffiliationLabel").textContent = t.colAffiliation;
  document.getElementById("colFruitLabel").textContent = t.colFruit;
  document.getElementById("colHakiLabel").textContent = t.colHaki;
  document.getElementById("colBountyLabel").textContent = t.colBounty;
  document.getElementById("colArcLabel").textContent = t.colArc;
  document.getElementById("colTitleLabel").textContent = t.colTitle;
  document.getElementById("colAgeLabel").textContent = t.colAge;
  document.getElementById("colHeightLabel").textContent = t.colHeight;

  document.getElementById("modalWinTitle").textContent = t.winTitle;
  if (versusMode && versusWinner >= 0) {
    document.getElementById("modalWinTitle").textContent =
      versusNames[versusWinner] + " " + (t.versusWin || "gagne !");
  }
  document.getElementById("modalWinDesc1").textContent = t.winDesc1;
  document.getElementById("modalWinDesc2").textContent = t.winDesc2;
  document.getElementById("modalWinDesc3").textContent = t.winDesc3;
  document.getElementById("modalWinAffLabel").textContent = t.winAffLabel;
  document.getElementById("modalWinBountyLabel").textContent = t.winBountyLabel;
  const winFruitEl = document.getElementById("modalWinFruitLabel");
  if (winFruitEl) winFruitEl.textContent = t.winFruitLabel || "";
  const winArcEl = document.getElementById("modalWinArcLabel");
  if (winArcEl) winArcEl.textContent = t.winArcLabel || "";
  const winAgeEl = document.getElementById("modalWinAgeLabel");
  if (winAgeEl) winAgeEl.textContent = t.winAgeLabel || "";
  const winHeightEl = document.getElementById("modalWinHeightLabel");
  if (winHeightEl) winHeightEl.textContent = t.winHeightLabel || "";
  document.getElementById("modalWinBtnText").textContent = t.winBtnText;
  const colBtn = document.getElementById("labelCollection");
  if (colBtn) colBtn.textContent = t.collection || (currentLang === "fr" ? "Collection" : "Collection");
  const questBtn = document.getElementById("labelQuests");
  if (questBtn) questBtn.textContent = t.quests || (currentLang === "fr" ? "Quêtes" : "Quests");
  const versusBtn = document.getElementById("labelVersus");
  if (versusBtn) versusBtn.textContent = t.versus || "Versus";
  const versusTitle = document.getElementById("versusTitle");
  if (versusTitle) versusTitle.textContent = t.versusTitle || "1v1";
  const versusStartBtn = document.getElementById("versusStartBtn");
  if (versusStartBtn) versusStartBtn.innerHTML = (t.versusStart || "Start") + ' <span class="ico">⚔️</span>';
  if (typeof updateVersusBanner === "function") updateVersusBanner();
  const questsTitle = document.getElementById("questsTitle");
  if (questsTitle) questsTitle.textContent = t.questsTitle || (currentLang === "fr" ? "Quêtes" : "Quests");
  const questsHint = document.getElementById("questsHint");
  if (questsHint) questsHint.textContent = t.questsHint || "";
  if (!document.getElementById("questsModal")?.classList.contains("hidden") && typeof renderQuestsList === "function") renderQuestsList();
  if (!document.getElementById("collectionModal")?.classList.contains("hidden")) updateCollectionUI();


  document.getElementById("modalGiveUpTitle").textContent = t.giveUpTitle;
  document.getElementById("modalGiveUpDesc").textContent = t.giveUpDesc;
  document.getElementById("mGUAff").textContent = t.giveUpAff;
  document.getElementById("mGUFruit").textContent = t.giveUpFruit;
  document.getElementById("mGUBounty").textContent = t.giveUpBounty;
  document.getElementById("mGUArc").textContent = t.giveUpArc;
  document.getElementById("mGUAge").textContent = t.giveUpAge;
  document.getElementById("mGUHeight").textContent = t.giveUpHeight;
  document.getElementById("modalGiveUpBtnText").textContent = t.giveUpBtnText;

  if (answer) {
    const resolved = resolveCharacter(answer, currentStory);
    const affTxt = isUnknownValue(resolved.affiliation) ? unknownLabel(currentLang) : resolved.affiliation[currentLang];
    const fruTxt = isUnknownValue(resolved.fruit) ? unknownLabel(currentLang) : resolved.fruit[currentLang];
    document.getElementById("modalWinnerAffiliation").textContent = affTxt;
    document.getElementById("modalGiveUpAffiliation").textContent = affTxt;
    document.getElementById("modalGiveUpFruit").textContent = fruTxt;
    const winFruEl = document.getElementById("modalWinnerFruit");
    if (winFruEl) winFruEl.textContent = fruTxt;
    document.getElementById("modalGiveUpArc").textContent = getArcDisplayName(resolved.arc);
    const winArcEl = document.getElementById("modalWinnerArc");
    if (winArcEl) winArcEl.textContent = getArcDisplayName(resolved.arc);
    document.getElementById("modalGiveUpAge").textContent = (resolved.age === null || resolved.age === undefined)
      ? unknownLabel(currentLang)
      : resolved.age + " " + t.yearsOld;
    const winAgeEl = document.getElementById("modalWinnerAge");
    if (winAgeEl) winAgeEl.textContent = (resolved.age === null || resolved.age === undefined)
      ? unknownLabel(currentLang)
      : resolved.age + " " + t.yearsOld;
    const winHeightEl = document.getElementById("modalWinnerHeight");
    if (winHeightEl) winHeightEl.textContent = (resolved.height === null || resolved.height === undefined || resolved.height === 0)
      ? unknownLabel(currentLang)
      : resolved.height + " cm";
  }

  rerenderResults();

  const cSearch = document.getElementById("collectionSearch");
  if (cSearch && TRANSLATIONS[currentLang].collectionSearchPlaceholder) {
    cSearch.placeholder = TRANSLATIONS[currentLang].collectionSearchPlaceholder;
  }
  const storyHelp = document.getElementById("storyHelpText");
  if (storyHelp && TRANSLATIONS[currentLang].storyHelpText) {
    storyHelp.innerHTML = helpHtml(TRANSLATIONS[currentLang].storyHelpText);
  }
  const storyHelpBtn = document.getElementById("storyHelpBtn");
  if (storyHelpBtn && TRANSLATIONS[currentLang].storyHelpBtn) {
    storyHelpBtn.textContent = TRANSLATIONS[currentLang].storyHelpBtn;
  }
  const modeHelp = document.getElementById("modeHelpText");
  if (modeHelp && TRANSLATIONS[currentLang].modeHelpText) {
    modeHelp.innerHTML = helpHtml(TRANSLATIONS[currentLang].modeHelpText);
  }
  const modeHelpBtn = document.getElementById("modeHelpBtn");
  if (modeHelpBtn && TRANSLATIONS[currentLang].modeHelpBtn) {
    modeHelpBtn.textContent = TRANSLATIONS[currentLang].modeHelpBtn;
  }
  const autoHelp = document.getElementById("versusAutoHelpText");
  if (autoHelp && TRANSLATIONS[currentLang].versusAutoHelpText) {
    autoHelp.innerHTML = helpHtml(TRANSLATIONS[currentLang].versusAutoHelpText);
  }
  const autoHelpBtn = document.getElementById("versusAutoHelpBtn");
  if (autoHelpBtn && TRANSLATIONS[currentLang].versusAutoHelpBtn) {
    autoHelpBtn.textContent = TRANSLATIONS[currentLang].versusAutoHelpBtn;
  }
  if (typeof updateAttemptsUI === "function") updateAttemptsUI();
  if (typeof updateOnlineUI === "function") updateOnlineUI();
}

function toggleLanguage() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("opdle_lang", currentLang);
  updateLanguageUI();
}

function rerenderResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  currentGuessesList.forEach(entry => {
    const char = entry.character || entry;
    const mystery = entry.mystery !== undefined ? entry.mystery : null;
    const row = compareValues(char, answer);
    renderRow(row, false, mystery);
  });
}

function updateStatsUI() {
  document.getElementById("streakCount").textContent = streak;
  document.getElementById("winsCount").textContent = wins;
}

function updateAttemptsUI() {
  const box = document.getElementById("attemptsLeftBox");
  const countEl = document.getElementById("attemptsLeftCount");
  if (maxAttempts === Infinity) {
    box.classList.add("hidden");
  } else {
    box.classList.remove("hidden");
    const left = Math.max(0, maxAttempts - attemptsCount);
    countEl.textContent = left;
  }
  // « Nouveau » grisé pendant la partie (bloqué aussi dans requestNewRound) ;
  // l'état visuel suit isGameOver/attemptsCount et se réactive en fin de manche.
  const ng = document.getElementById("newGameBtn");
  if (ng) {
    const blocked = !isGameOver && attemptsCount > 0;
    ng.disabled = blocked;
    ng.style.opacity = blocked ? "0.45" : "";
    ng.title = blocked ? ((TRANSLATIONS[currentLang] || {}).toastRestartBlocked || "") : "";
  }
}

function updateModeButtons() {
  const sel = document.getElementById("modeSelect");
  if (sel) sel.value = currentDifficulty;
}

function updateHeaderVisibility() {
  // Always show all categories (extreme mode only replaces one value with ???)
  const headerCols = document.querySelectorAll(".header-col");
  headerCols.forEach((col) => {
    col.classList.remove("hidden");
  });
  const header = document.querySelector(".results-header");
  if (header) {
    header.style.gridTemplateColumns = "repeat(10, minmax(0, 1fr))";
  }
}

function setDifficulty(mode) {
  if (mode === currentDifficulty) return;
  currentDifficulty = mode;
  localStorage.setItem("opdle_diff", mode);
  startGame();
}

function setStory(storyId) {
  if (storyId === currentStory) return;
  if (!STORY_POINTS[storyId]) return;
  currentStory = storyId;
  localStorage.setItem("opdle_story", storyId);
  startGame();
}

function updateStoryButtons() {
  const sel = document.getElementById("storySelect");
  if (sel) sel.value = currentStory;
}

function getInitials(name) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function nameToHue(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}

/** Per-character object-position so faces aren't cropped (default: top). */
const IMAGE_OBJECT_POSITION = {
  "Monkey D. Dragon": "center 18%",
  "Benn Beckman": "center 22%"
};

function getImageObjectPosition(name) {
  return IMAGE_OBJECT_POSITION[name] || "center top";
}

function avatarHTML(character, sizeClass) {
  const initials = getInitials(character.name);
  const hue = nameToHue(character.name);
  const bg = `hsl(${hue}, 60%, 32%)`;
  const border = `hsl(${hue}, 70%, 55%)`;
  const safeName = character.name.replace(/"/g, "&quot;");
  const objPos = getImageObjectPosition(character.name);

  if (character.image) {
    return `<img src="${character.image}" alt="${safeName}" data-name="${safeName}"
      class="${sizeClass} rounded-xl object-cover border-2 shadow-md shrink-0"
      style="border-color:${border};object-position:${objPos}"
      onerror="handleAvatarError(this)" />`;
  }

  return `<div class="${sizeClass} rounded-xl flex items-center justify-center font-extrabold text-white border-2 shadow-md shrink-0"
    style="background:${bg};border-color:${border}">${initials}</div>`;
}

function handleAvatarError(imgEl) {
  const name = imgEl.dataset.name || "?";
  const initials = getInitials(name);
  const hue = nameToHue(name);
  const bg = `hsl(${hue}, 60%, 32%)`;
  const border = `hsl(${hue}, 70%, 55%)`;

  const div = document.createElement("div");
  div.className = imgEl.className.replace("object-cover", "").replace("object-top", "") + " flex items-center justify-center font-extrabold text-white";
  div.style.background = bg;
  div.style.borderColor = border;
  div.textContent = initials;
  imgEl.replaceWith(div);
}

function cleanString(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/* ========== Taux de rareté (réglables depuis l'admin) ========== */
/** Table par défaut : [index ignoré, R1, R2, R3, R4, R5, R6] par difficulté.
 *  Poids = probabilité relative. Plus le poids est haut, plus c'est courant. */
const RARITY_WEIGHT_DEFAULTS = {
  easy:    [0, 12,   6,   3,   1.2, 0.5, 0.15],
  medium:  [0, 5,    4.2, 3.4, 2.4, 1.6, 0.5 ],
  hard:    [0, 3.2,  3.0, 2.8, 2.6, 2.4, 1.2 ],
  extreme: [0, 2.20, 2.15, 2.10, 2.05, 2.00, 1.6 ]
};
const RARITY_WEIGHT_KEY = "opdle_rarity_weights_v1";
let RARITY_WEIGHT_OVERRIDE = null;

/** Surcharges admin { easy:[...], medium:[...], hard:[...], extreme:[...] }. */
function getRarityWeightTable() {
  if (RARITY_WEIGHT_OVERRIDE) return RARITY_WEIGHT_OVERRIDE;
  try {
    const raw = localStorage.getItem(RARITY_WEIGHT_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      const out = {};
      let ok = true;
      for (const d of ["easy", "medium", "hard", "extreme"]) {
        const row = p && p[d];
        if (!Array.isArray(row) || row.length !== 7) { ok = false; break; }
        out[d] = row.map((n, i) => (i === 0 ? 0 : Math.max(0, Number(n) || 0)));
      }
      if (ok) RARITY_WEIGHT_OVERRIDE = out;
    }
  } catch (e) {}
  return RARITY_WEIGHT_OVERRIDE || RARITY_WEIGHT_DEFAULTS;
}
function setRarityWeightTable(tbl) {
  RARITY_WEIGHT_OVERRIDE = tbl;
  try { localStorage.setItem(RARITY_WEIGHT_KEY, JSON.stringify(tbl)); } catch (e) {}
}
function resetRarityWeightTable() {
  RARITY_WEIGHT_OVERRIDE = null;
  try { localStorage.removeItem(RARITY_WEIGHT_KEY); } catch (e) {}
}

function getRarityWeight(rarity, difficulty) {
  // Higher weight = more likely. rarity 1=Commun … 6=Légendaire.
  // Plus la difficulté monte, plus les poids se rapprochent (Extrême ≈ égalité).
  // On n'inverse PAS la rareté : un légendaire ne devient jamais "commun".
  const r = rarity || 2;
  const table = getRarityWeightTable();
  const row = table[difficulty] || table.medium || RARITY_WEIGHT_DEFAULTS.medium;
  const w = row[r];
  return typeof w === "number" && isFinite(w) && w > 0 ? w : 1;
}

/* ========== Notoriété cachée (multiplicateur de tirage) ==========
 * 1 = icône (boostée en facile) … 6 = ultra niche (pénalisée sauf en extrême).
 * La table se resserre avec la difficulté : en extrême, cool (R5/R6 via la
 * table de rareté) ET niche (via ce facteur) sortent nettement plus.
 * Jamais affichée (ni album, ni admin) : seul le tirage la voit. */
const NICHE_FACTOR = {
  easy:    { 1: 1.6,  2: 1.25, 3: 1.0, 4: 0.65, 5: 0.4,  6: 0.25 },
  medium:  { 1: 1.3,  2: 1.15, 3: 1.0, 4: 0.8,  5: 0.6,  6: 0.45 },
  hard:    { 1: 1.15, 2: 1.08, 3: 1.0, 4: 0.9,  5: 0.8,  6: 0.7  },
  extreme: { 1: 1.05, 2: 1.02, 3: 1.0, 4: 0.98, 5: 0.95, 6: 0.92 }
};
function nicheOf(c) {
  const n = c && c.niche;
  return (n >= 1 && n <= 6) ? n : 3;
}
/** Poids de tirage réel : rareté visible × notoriété cachée.
 *  Le mode Collecter n'agit PAS ici mais au tirage de forme (rollForm +
 *  collectAcceptForm) : chaque forme (normale/alt/shiny) est freinée
 *  individuellement si possédée, jamais les formes non possédées. */
const COLLECT_KEY = "opdle_collect_mode";
const SPECIAL_KEY = "opdle_special_mode";

/* --- Verrous de mode ---
 *  Le mode Collecter est bloqué jusqu'à la quête Barbe Blanche (100 victoires).
 *  Le mode spécial Alt/Shiny est bloqué jusqu'à la quête Roger Shiny (300 victoires).
 *  Les deux lisent la condition EN DIRECT (isVariantUnlocked), donc le mode
 *  s'ouvre dès le tirage qui fait passer le cap, sans attendre un rechargement. */
function questById(id) {
  if (typeof CHARACTER_VARIANTS === "undefined") return null;
  return CHARACTER_VARIANTS.find(v => v.id === id) || null;
}
/** Fail-open : si la carte de quête disparaît des données, on ne verrouille pas
 *  un joueur qui a déjà le mode actif. */
function questGateUnlocked(id) {
  const q = questById(id);
  if (!q || !q.unlock) return true;
  try { return isVariantUnlocked(q); } catch (e) { return true; }
}
function collectModeUnlocked() { return questGateUnlocked("whitebeard_reveal"); }
function specialModeUnlocked() { return questGateUnlocked("roger_shiny"); }

function isCollectMode() {
  if (!collectModeUnlocked()) return false;
  try { return localStorage.getItem(COLLECT_KEY) === "1"; } catch (e) { return false; }
}
function setCollectMode(on) {
  if (on && !collectModeUnlocked()) return false;
  try { localStorage.setItem(COLLECT_KEY, on ? "1" : "0"); } catch (e) {}
  return true;
}
function isSpecialMode() {
  if (!specialModeUnlocked()) return false;
  try { return localStorage.getItem(SPECIAL_KEY) === "1"; } catch (e) { return false; }
}
function setSpecialMode(on) {
  if (on && !specialModeUnlocked()) return false;
  try { localStorage.setItem(SPECIAL_KEY, on ? "1" : "0"); } catch (e) {}
  return true;
}

/* --- Puissance du mode spécial Alt/Shiny ---
 *  Trois boutons seuls à régler : le plafond « non-normal » (0,55 en mode normal,
 *  d'où l'ampoule par défaut), le multiplicateur des formes et le multiplicateur
 *  propre aux shinies. Plafond = 1 : la forme normale ne tombe plus que si les
 *  variantes du perso ne remplissent pas 100 %. Le mode normal reste strictement
 *  identique (boost = 1, shiny = 1, cap = 0,55). */
const SPECIAL_NON_NORMAL_CAP = 1;
const SPECIAL_FORM_MULT = 3;
const SPECIAL_SHINY_MULT = 4;
function formCap() {
  if (isSpecialMode()) return SPECIAL_NON_NORMAL_CAP;
  // Actuel : la carte normale doit rester la forme principale (toutes les formes
  // sont disponibles, mais elles se partagent au plus 42 %).
  if (typeof currentStory !== "undefined" && currentStory === "all") return 0.42;
  return 0.55;
}
function formBoost() { return isSpecialMode() ? SPECIAL_FORM_MULT : 1; }
function shinyBoost() { return isSpecialMode() ? SPECIAL_SHINY_MULT : 1; }
/** Applique boost (+ multiplicateur shiny) puis plafond sur (pAlt, pShiny) :
 *  source unique pour rollForm, l'affichage des probabilités et le mode en ligne.
 *  Le plafond écrase la somme en gardant le rapport alt/shiny, d'où le
 *  multiplicateur shiny dédié qui fait monter les shinies au-delà de ce rapport.
 *  En mode spécial la somme est au contraire COMPLÉTÉE jusqu'au plafond (1) :
 *  zéro carte normale, y compris pour un perso à une seule sorte de variante.
 *  Sans forme normale (excludesBase) le total doit tenir dans [0,1] : plafond à 1.
 *  En mode normal on ne complète ni ne dépasse rien, donc le comportement
 *  historique est strictement conservé. */
function applyFormGate(pAlt, pShiny, noBase) {
  const boost = formBoost();
  if (boost !== 1) { pAlt *= boost; pShiny *= boost; }
  const sb = shinyBoost();
  if (sb !== 1) pShiny *= sb;
  const cap = noBase ? 1 : formCap();
  const nonNormal = pAlt + pShiny;
  if (nonNormal > cap) {
    const scale = cap / nonNormal;
    pAlt *= scale; pShiny *= scale;
  } else if (!noBase && isSpecialMode() && nonNormal > 0) {
    // Mode spécial « sans normale » : compléter jusqu'au plafond en gardant le
    // rapport alt/shiny. Sans ça, un perso à une seule sorte de variante
    // (shiny seul ou alt seul) laisserait retomber la forme normale, alors que
    // le mode promet zéro carte normale. noBase gère déjà son propre cas.
    const scale = cap / nonNormal;
    pAlt *= scale; pShiny *= scale;
  }
  return { pAlt, pShiny };
}
function getDrawWeight(c, difficulty) {
  const diff = difficulty || currentDifficulty;
  const w = getRarityWeight(c.rarity || 2, diff);
  const row = NICHE_FACTOR[diff] || NICHE_FACTOR.medium;
  const f = row[nicheOf(c)];
  return w * (typeof f === "number" && isFinite(f) && f > 0 ? f : 1);
}

function storyIndex(storyId) {
  const idx = STORY_ORDER.indexOf(storyId || currentStory);
  return idx < 0 ? STORY_ORDER.length - 1 : idx;
}

function isVariantAvailable(variant, storyId) {
  if (!variant) return false;
  const sid = storyId || currentStory;
  // Override admin (panneau Raretés) : désactivation ou arcs imposés.
  const ovo = (typeof variantOverrides === "function" && variant.id && variantOverrides()[variant.id]) || null;
  if (ovo && ovo.disabled) return false;
  // Forms with unlock conditions (Gear 2–5, etc.): once unlocked, available
  // in any story arc where the base character is in the pool.
  if (variant.unlock) {
    return isVariantUnlocked(variant);
  }
  // "Actuel" = le manga lu dans son entier : TOUTES les formes sont disponibles
  // (pré-ellipse, anciens designs, exclusives d'arc). En Actuel elles sont
  // probabilistes (rollForm ne force personne ici) : la carte normale reste la
  // forme principale et les autres se partagent le reste, pondérées par rareté.
  if (sid === "all") return true;
  // Arcs imposés par l'admin (même vides = nulle part), sinon liste de la variante.
  if (ovo && Array.isArray(ovo.stories)) {
    return ovo.stories.includes(sid);
  }
  // Explicit list of story points (e.g. Luffy young: eastblue + fishman only)
  if (Array.isArray(variant.stories) && variant.stories.length) {
    return variant.stories.includes(sid);
  }
  // minStory
  if (variant.minStory) {
    if (variant.minStory === "all") {
      if (sid !== "all") return false;
    } else if (storyIndex(sid) < storyIndex(variant.minStory)) {
      return false;
    }
  }
  // maxStory (inclusive) — e.g. only East Blue or only Fish-Man Island
  if (variant.maxStory) {
    if (variant.maxStory === "all") {
      if (sid !== "all") return false;
    } else if (storyIndex(sid) > storyIndex(variant.maxStory)) {
      return false;
    }
  }
  return true;
}

/** IDs de cartes-récompense liées à une catégorie (exclus de la complétion). */
function getAllCollectionRewardIds() {
  if (typeof CHARACTER_VARIANTS === "undefined") return new Set();
  return new Set(
    CHARACTER_VARIANTS
      .filter(v => v.unlock && v.unlock.collectionComplete)
      .map(v => v.id)
  );
}

function isCategoryCollectionComplete(categoryId) {
  if (!categoryId || typeof COLLECTION_CATEGORIES === "undefined") return false;
  const cat = COLLECTION_CATEGORIES.find(c => c.id === categoryId);
  if (!cat || !cat.members || !cat.members.length) return false;
  const unlocked = new Set(getUnlockedNames());
  const rewards = getAllCollectionRewardIds();
  // Les récompenses (Sunny, Merry…) ne bloquent jamais la complétion
  return cat.members.every(m => rewards.has(m) || unlocked.has(m));
}

function isVariantUnlocked(variant) {
  if (!variant || !variant.unlock) return true;
  const u = variant.unlock;
  if (u.hardExtremeWins != null && hardExtremeWins < u.hardExtremeWins) return false;
  if (u.extremeWins != null && extremeWins < u.extremeWins) return false;
  if (u.wins != null && wins < u.wins) return false;
  // Compteurs conditionnels (voir recordGameEnd)
  if (u.winsW7mhe != null && qGet(Q_W7MHE_KEY) < u.winsW7mhe) return false;
  if (u.winsDRhe != null && qGet(Q_DRHE_KEY) < u.winsDRhe) return false;
  if (u.winsWChec != null && qGet(Q_WCHE_KEY) < u.winsWChec) return false;
  if (u.winsWanoEx != null && qGet(Q_WANOEX_KEY) < u.winsWanoEx) return false;
  if (u.winsEBex != null && qGet(Q_EBEX_KEY) < u.winsEBex) return false;
  if (u.streakW7he != null && qGet(Q_BEST_KEY) < u.streakW7he) return false;
  if (u.firstTryW7 != null && qGet(Q_FIRSTTRY_KEY) < u.firstTryW7) return false;
  // Mystères déjà TIRÉS (pas forcément devinés) : ex. La Marche (Arlong Park)
  if (Array.isArray(u.drawn)) {
    let stats = {};
    try { stats = JSON.parse(localStorage.getItem(PICK_STATS_KEY) || "{}"); } catch (e) {}
    if (!u.drawn.every(k => (Number(stats[k]) || 0) > 0)) return false;
  }
  // Formes / personnages possédés : ex. l'équipage pré-ellipse (Merry), un équipage au complet
  if (Array.isArray(u.hasVariants) || Array.isArray(u.hasCharacters)) {
    let un = [];
    try { un = getUnlockedNames(); } catch (e) {}
    if (Array.isArray(u.hasVariants) && !u.hasVariants.every(id => un.includes(id))) return false;
    if (Array.isArray(u.hasCharacters) && !u.hasCharacters.every(n => un.includes(n))) return false;
  }
  if (u.collectionComplete && !isCategoryCollectionComplete(u.collectionComplete)) return false;
  return true;
}

/** Débloque Merry / Sunny (etc.) quand la catégorie cible est complète. */
function syncCollectionRewards() {
  if (typeof CHARACTER_VARIANTS === "undefined") return [];
  const newly = [];
  CHARACTER_VARIANTS.forEach(v => {
    if (!v.unlock || !v.unlock.collectionComplete) return;
    if (!isVariantUnlocked(v)) return;
    if (unlockCharacter(v.id)) newly.push(v);
    // aussi débloquer le nom de base pour l'album / avatar si besoin
    if (v.baseName) unlockCharacter(v.baseName);
  });
  return newly;
}


function getVariantsForBase(baseName, storyId) {
  if (typeof CHARACTER_VARIANTS === "undefined" || !CHARACTER_VARIANTS) return [];
  // collectionOnly (Gear Luffy, etc.) never enter the game answer pool
  return CHARACTER_VARIANTS.filter(v =>
    v.baseName === baseName &&
    !v.collectionOnly &&
    isVariantAvailable(v, storyId || currentStory) &&
    isVariantUnlocked(v)
  );
}

/** All variants for collection UI, including quest rewards (Gears). */

/** Resolve a collection member key: base character name OR variant id. */
function resolveCollectionMember(memberKey) {
  if (!memberKey || typeof CHARACTERS === "undefined") return null;
  // Variant id?
  if (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS) {
    const variant = CHARACTER_VARIANTS.find(v => v.id === memberKey);
    if (variant) {
      const base = CHARACTERS.find(c => c.name === variant.baseName);
      if (!base) return null;
      const display = variant.displayName
        ? (currentLang === "en"
            ? (variant.displayName.en || variant.displayName.fr || base.name)
            : (variant.displayName.fr || variant.displayName.en || base.name))
        : base.name;
      return {
        name: base.name,
        image: variant.image || base.image,
        rarity: variant.rarity != null ? variant.rarity : base.rarity,
        aliases: base.aliases || [],
        _collectionVariantId: variant.id,
        _collectionLabel: display,
        // Alt en collection : débloqué seulement si la variante l'est (pas la base seule)
        _unlockKeys: [variant.id]
      };
    }
  }
  const c = CHARACTERS.find(ch => ch.name === memberKey);
  if (!c) return null;
  return {
    name: c.name,
    image: c.image,
    rarity: c.rarity || 1,
    aliases: c.aliases || [],
    _collectionVariantId: null,
    _collectionLabel: c.name,
    _unlockKeys: [c.name]
  };
}

function getCollectionVariantsForBase(baseName) {
  if (typeof CHARACTER_VARIANTS === "undefined" || !CHARACTER_VARIANTS) return [];
  const base = (typeof CHARACTERS !== "undefined" && CHARACTERS) ? CHARACTERS.find(c => c.name === baseName) : null;
  const baseImg = base && base.image;
  // Les récompenses pixel-identiques (Merry/Sunny) ne sont pas des alts : exclues du compteur
  return CHARACTER_VARIANTS.filter(v => v.baseName === baseName && !(v.collectionOnly && (v.image || baseImg) === baseImg));
}

/** Variants that force their base into the pool even if arc is later (e.g. young Sabo at FMI). */
function getForceInPoolVariants(storyId) {
  if (typeof CHARACTER_VARIANTS === "undefined" || !CHARACTER_VARIANTS) return [];
  return CHARACTER_VARIANTS.filter(v =>
    v.forceInPool &&
    !v.collectionOnly &&
    isVariantAvailable(v, storyId || currentStory) &&
    isVariantUnlocked(v)
  );
}

/** Apply a variant/shiny onto a base character clone used as mystery answer. */
function applyVariant(baseChar, variant) {
  if (!baseChar || !variant) return baseChar;
  const resolved = Object.assign({}, baseChar);
  resolved.name = baseChar.name;
  resolved._variantId = variant.id;
  resolved._isShiny = !!variant && isVariantShiny(variant);
  resolved._variantDisplay = variant.displayName;
  if (variant.image) resolved.image = variant.image;
  if (variant.rarity != null) resolved.rarity = variant.rarity;
  if (variant.overrides && typeof variant.overrides === "object") {
    for (const k of Object.keys(variant.overrides)) {
      const val = variant.overrides[k];
      if (val !== null && typeof val === "object" && !Array.isArray(val)) {
        resolved[k] = Object.assign({}, baseChar[k] || {}, val);
      } else {
        resolved[k] = val;
      }
    }
  }
  return resolved;
}

/** Si le perso n'a QUE des onlyAsVariant dispo à ce point d'histoire (ex. Sabo à FMI), force cette forme.
 *  Si sa forme de base est remplacée à ce point (excludesBase, ex. Robin avant Fish-Man),
 *  on montre la forme qui la remplace : l'image de la base spoilerait l'époque. */
function forceOnlyAsVariantIfNeeded(char, storyId) {
  if (!char || char._variantId) return char;
  const sid = storyId || currentStory;
  // Actuel : toutes les formes sont probabilistes, on montre la carte normale.
  if (sid === "all") return char;
  const variants = getVariantsForBase(char.name, sid);
  const only = variants.filter(v => isOnlyAsVariant(v));
  if (only.length === 1) return applyVariant(char, only[0]);
  if (only.length > 1) return applyVariant(char, only[Math.floor(Math.random() * only.length)]);
  if (sid !== "all") {
    const repl = variants.find(v => v.excludesBase && !isVariantShiny(v) && !v.unlock);
    if (repl) return applyVariant(char, repl);
  }
  return char;
}

// Chances de forme (alt / shiny) par difficulté — source unique.
// (Pas de clé "unlock" : toutes les variantes à unlock sont collectionOnly
// et n'entrent jamais dans le pool de tirage, voir getVariantsForBase.)
const FORM_ODDS = {
  easy:    { alt: 0.34, shiny: 0.06 },
  medium:  { alt: 0.38, shiny: 0.08 },
  hard:    { alt: 0.41, shiny: 0.10 },
  extreme: { alt: 0.44, shiny: 0.12 }
};

/** Modulation de la part alt / shiny selon la rareté de la VARIANTE.
 *  Ancre : R4 (Épic) = taux de base ci-dessus. Plus la variante est rare,
 *  moins elle tombe souvent : Mythique R5 → 7 %, Légendaire R6 → 6 % (en Moyen).
 *  S'applique aussi aux alts (38 % → R5 33,25 %, R6 28,5 %).
 *  Aucun perso n'a 2 shiny au même arc (donc répartition interne inutile pour
 *  les shinies aujourd'hui) ; la moyenne par compartiment ne joue donc que sur
 *  les 3 cas à 2 alts (Robin@W7, Brook@TH, Buggy@EB). */
const FORM_RARITY_MULT = {
  1: 1.35,   // Commun      → shiny 8,1 % / alt 51,3 % (en Moyen)
  2: 1.20,   // Peu commun  → shiny 9,6 % / alt 45,6 %
  3: 1.10,   // Rare        → shiny 8,8 % / alt 41,8 %
  4: 1.00,   // Épic        → shiny 8,0 % / alt 38,0 %  (base)
  5: 0.875,  // Mythique    → shiny 7,0 % / alt 33,25 %
  6: 0.75    // Légendaire  → shiny 6,0 % / alt 28,5 %
};
function formRarityMult(v) {
  const r = (v && v.rarity != null) ? v.rarity : 3;
  return (typeof FORM_RARITY_MULT === "object" && FORM_RARITY_MULT[r]) || 1;
}
/** Modulation moyenne d'un compartiment (1 variante → sa propre modulation). */
function formBucketMult(list) {
  if (!list || !list.length) return 0;
  let s = 0;
  for (let i = 0; i < list.length; i++) s += formRarityMult(list[i]);
  return s / list.length;
}

function pickRandomCharacter() {
  const pool = getAvailableCharacters();
  if (pool.length === 0) return CHARACTERS[0];
  const weights = pool.map(c => getDrawWeight(c, currentDifficulty));
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  let r = Math.random() * total;
  let base = pool[pool.length - 1];
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      base = pool[i];
      break;
    }
  }

  // --- Form roll (normal / alt / shiny) ---
  // Quand un alt est dispo pour ce perso + filtre Histoire (ex. Law à Dressrosa) :
  //   ~1/3 chance d'alt (selon difficulté), pondéré par rareté de l'alt.
  // Shiny : un peu plus fréquent qu'avant, toujours rare.
  // Si une catégorie n'est pas dispo, sa part revient à la forme normale.
  // onlyAsVariant (ex. Sabo enfant à FMI): 100% parmi ces variantes.

  const variants = getVariantsForBase(base.name, currentStory);
  if (variants.length === 0) return base;

  // Alt ~1/3 quand dispo (filtre Histoire aligné). Shiny légèrement plus fréquent.
  const odds = FORM_ODDS[currentDifficulty] || FORM_ODDS.medium;

  return rollForm(base, variants, odds);
}

/** Acceptation anti-doublon par FORME (mode Collecter) : une forme déjà
 *  possédée (normale = nom du perso, alt/shiny = id de variante) est
 *  ré-acceptée avec une proba réduite (1 / (1 + 0,5 × tirages), ↓ quand elle
 *  retombe) ; les formes NON possédées gardent leur taux EXACT.
 *  Hors Collecter : toujours accepté (tirage strictement inchangé). */
function collectAcceptForm(key) {
  if (typeof isCollectMode !== "function" || !isCollectMode()) return true;
  let owned = false;
  try { owned = getUnlockedNames().includes(key); } catch (e) {}
  if (!owned) return true;
  let n = 0;
  try { n = Number((loadPickStats() || {})[key]) || 0; } catch (e) {}
  const eff = n > 0 ? n : 1; // possédée mais sans stats (vieux compte, admin) = compte 1 fois
  return Math.random() < 1 / (1 + 0.5 * eff);
}

/** Tirage de forme (normal / alt / shiny) pour une base déjà tirée.
 *  Structure des probas inchangée (FORM_ODDS, pondération rareté, noBase,
 *  onlyAsVariant, shiny empilé) ; le mode Collecter ajoute seulement une
 *  ré-acceptation bornée par forme (voir collectAcceptForm). */
function rollForm(base, variants, odds) {
  // Actuel : aucune forme forcée — toutes les formes sont des alts probabilistes
  // pour que la carte normale reste la forme principale.
  const actuel = currentStory === "all";
  const onlyVariants = actuel ? [] : variants.filter(v => isOnlyAsVariant(v));
  if (onlyVariants.length > 0) {
    const pick = onlyVariants[Math.floor(Math.random() * onlyVariants.length)];
    const forced = applyVariant(base, pick);
    // Un shiny reste toujours jouable : il s'empile SUR la forme forcée
    // (Garp masque ✦, Robin pré-ellipse ✦…). Indispensable car sinon la
    // forme forcée (100 %) écraserait définitivement le shiny du perso.
    const forcedShinies = variants.filter(v => isVariantShiny(v) && !v.unlock && !isOnlyAsVariant(v));
    if (forcedShinies.length > 0 && Math.random() < odds.shiny) {
      const sh = forcedShinies[Math.floor(Math.random() * forcedShinies.length)];
      // Collecter : shiny déjà possédé → on retombe sur la forme forcée simple
      if (!collectAcceptForm(sh.id)) return forced;
      const shiny = applyVariant(base, sh);
      // On garde l'overrides de la forme forcée (âge/titre) mais l'image du shiny
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

  const alts = variants.filter(v => !isVariantShiny(v) && !v.unlock);
  const shinies = variants.filter(v => isVariantShiny(v) && !v.unlock);
  // excludesBase : un alt présent interdit la forme normale (ex. Buggy East
  // Blue à côté de Buggy enfant, mais jamais Buggy tout court).
  // Jamais en mode Actuel ("all") : la forme de base est la forme canonique
  // actuelle et doit y rester tirable.
  const noBase = currentStory !== "all" && alts.length > 0 && alts.some(v => v.excludesBase);

  // Part de chaque compartiment, modulée par la rareté des variantes qu'il
  // contient (R4 = taux de base ; plus c'est rare, moins ça tombe).
  let pAlt = alts.length ? odds.alt * formBucketMult(alts) : 0;
  let pShiny = shinies.length ? odds.shiny * formBucketMult(shinies) : 0;
  // Cap souple : normal reste majoritaire si les 2 formes coexistent.
  // Mode spécial Alt/Shiny (Roger Shiny, 300 victoires) : boost puis plafond relevé.
  ({ pAlt, pShiny } = applyFormGate(pAlt, pShiny, noBase));
  if (noBase) {
    // La masse « forme normale » est réattribuée aux alts.
    pAlt += Math.max(0, 1 - (pAlt + pShiny));
  }

  function pickByRarityWeight(list) {
    // Mêmes multiplicateurs que la part de compartiment (FORM_RARITY_MULT) :
    // une seule source de vérité pour la rareté.
    // formWeight (optionnel, données) : répartition interne plus marquée entre alts
    // (ex. enfant rare à East Blue, pré-ellipse dominante)
    const weights = list.map(v => Math.max(0.0001, formRarityMult(v) * (v.formWeight != null ? v.formWeight : 1)));
    const tot = weights.reduce((a, b) => a + b, 0) || 1;
    let rr = Math.random() * tot;
    for (let i = 0; i < list.length; i++) {
      rr -= weights[i];
      if (rr <= 0) return list[i];
    }
    return list[list.length - 1];
  }

  // Tirage avec ré-acceptation Collecter (bornée à 8 essais, puis forme normale) :
  // hors Collecter, le 1er essai est toujours accepté → comportement inchangé.
  for (let guard = 0; guard < 8; guard++) {
    const roll = Math.random();
    if (roll < pAlt) {
      const alt = pickByRarityWeight(alts);
      if (collectAcceptForm(alt.id)) return applyVariant(base, alt);
      continue;
    }
    if (roll < pAlt + pShiny) {
      // Idem alts : départage par rareté (inopérant aujourd'hui, aucun perso
      // n'a 2 shiny au même arc — mais cohérent et prêt si c'est ajouté).
      const sh = pickByRarityWeight(shinies);
      if (collectAcceptForm(sh.id)) return applyVariant(base, sh);
      continue;
    }
    if (collectAcceptForm(base.name)) return base;
  }
  return base;
}

function getMaxAttempts(diff) {
  if (diff === "easy") return Infinity;
  if (diff === "medium") return 5;
  return 3; // hard & extreme
}

function pickMysteryCategory() {
  // Extreme: pick one random category not already bridled (never 0 = character)
  const possible = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(i => !mysteryCategories.includes(i));
  if (possible.length === 0) return null;
  // En ligne : RNG déterministe dérivé de la seed du salon + manche +
  // séquence → les DEUX clients masquent les mêmes catégories pour les
  // mêmes essais (avant : Math.random local → tableaux divergents).
  let r = Math.random();
  if (typeof online !== "undefined" && online.active &&
      typeof onlineHashStr === "function" && typeof onlineRng === "function") {
    online.mystSeq = (online.mystSeq || 0) + 1;
    r = onlineRng(onlineHashStr(String(online.seed || "") + "#" + versusRound + "#" + online.mystSeq))();
  }
  return possible[Math.floor(r * possible.length)];
}

function normalizeCharacterTitles() {
  CHARACTERS.forEach(character => {
    character.titre.fr = character.titre.fr
      .replace(/\bAncien\s+Pirate\b/gi, "")
      .replace(/\bPirate\b/gi, "")
      .replace(/\s*,\s*/g, ", ")
      .replace(/,\s*,/g, ",")
      .replace(/^,\s*|,\s*$/g, "");

    character.titre.en = character.titre.en
      .replace(/\bFormer\s+Pirate\b/gi, "")
      .replace(/\bPirate\b/gi, "")
      .replace(/\s*,\s*/g, ", ")
      .replace(/,\s*,/g, ",")
      .replace(/^,\s*|,\s*$/g, "");

    if (!character.titre.fr) character.titre.fr = "—";
    if (!character.titre.en) character.titre.en = "—";
  });

  ["Donquixote Doflamingo", "Shanks"].forEach(name => {
    const character = CHARACTERS.find(c => c.name === name);
    if (!character) return;
    if (!character.titre.fr.split(", ").some(t => cleanString(t) === "dragon celeste")) {
      character.titre.fr = character.titre.fr === "—" ? "Dragon Céleste" : character.titre.fr + ", Dragon Céleste";
    }
    if (!character.titre.en.split(", ").some(t => cleanString(t) === "celestial dragon")) {
      character.titre.en = character.titre.en === "—" ? "Celestial Dragon" : character.titre.en + ", Celestial Dragon";
    }
  });
}

normalizeCharacterTitles();



function maybeShowSpecialUnlockTip(kind) {
  const key = kind === "shiny" ? "opdle_tip_shiny_v1" : "opdle_tip_alt_v1";
  try { if (localStorage.getItem(key) === "1") return; localStorage.setItem(key, "1"); } catch (e) {}
  const isShiny = kind === "shiny";
  const title = currentLang === "fr"
    ? (isShiny ? "✦ Carte Shiny !" : "◇ Forme alternative !")
    : (isShiny ? "✦ Shiny card!" : "◇ Alternate form!");
  const body = currentLang === "fr"
    ? (isShiny
      ? "Les shinies sont des versions rares : image différente, cadre violet, et la ligne devient violette quand tu les trouves. Ils peuvent tomber à n'importe quel moment où la carte normale est disponible."
      : "Une seconde carte pour certains personnages, avec une image différente : le Luffy enfant s'obtient par exemple à East Blue. Selon le personnage, l'alt arrive à un autre moment ou remplit des conditions (victoires en difficile, album complet).")
    : (isShiny
      ? "Shinies are rare versions: different art, purple frame, and a purple row when found. They can drop any time the normal card is available."
      : "A second card for some characters, with different art: young Luffy, for instance, comes from East Blue. Depending on the character, the alt arrives at another point or after meeting conditions (wins on hard, full album).");
  showToast(title + " — " + body);
  if (isShiny && typeof playShinyChime === "function") playShinyChime();
}


function isSoundEnabled() {
  try { return localStorage.getItem("opdle_sound") !== "0"; } catch (e) { return true; }
}
function setSoundEnabled(on) {
  try { localStorage.setItem("opdle_sound", on ? "1" : "0"); } catch (e) {}
}

function playAltChime() {
  if (!isSoundEnabled()) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(523, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(784, ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

function playShinyChime() {
  if (!isSoundEnabled()) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function showShinyBanner(char) {
  let el = document.getElementById("shinyBanner");
  if (!el) {
    el = document.createElement("div");
    el.id = "shinyBanner";
    el.className = "shiny-banner";
    const resultsScroll = document.querySelector(".results-scroll");
    if (resultsScroll && resultsScroll.parentNode) {
      resultsScroll.parentNode.insertBefore(el, resultsScroll.nextSibling);
    } else {
      document.querySelector("main")?.appendChild(el);
    }
  }
  const name = (char._variantDisplay && (char._variantDisplay[currentLang] || char._variantDisplay.fr)) || char.name;
  const img = char.image ? `<img src="${char.image}" alt="" />` : "";
  el.innerHTML = `${img}<div><div class="shiny-banner-label">✦ SHINY</div><div class="text-slate-200 text-sm font-semibold">${name}</div></div>`;
  el.classList.remove("hidden");
  playShinyChime();
}

function hideShinyBanner() {
  const el = document.getElementById("shinyBanner");
  if (el) { el.classList.add("hidden"); el.innerHTML = ""; }
}

/* ========== Versus 1v1 (local, tour par tour, même mystère) ========== */
function updateVersusBanner() {
  const banner = document.getElementById("versusBanner");
  if (!banner) return;
  // La ligne bleue n'apparaît qu'une fois la partie lancée : pendant le choix
  // du mystère, la barre violette suffit (sinon elle prête à confusion).
  const picking = typeof online !== "undefined" && online.active && online.phase === "pick";
  const show = versusMode && !picking;
  banner.classList.toggle("hidden", !show);
  banner.classList.toggle("flex", show);
  if (!versusMode) return;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  let txt;
  if (picking) {
    txt = "";
  } else {
    txt = `⚔️ ${t.versusRound || "Manche"} ${versusRound} · ${versusNames[0]} ${versusScores[0]} — ${versusScores[1]} ${versusNames[1]} · ` +
      (t.versusTurn || "À {name} de jouer").replace("{name}", versusNames[versusTurn]);
    // Compte à rebours du tour (en ligne, temps limité, à moi, partie en cours)
    if (typeof online !== "undefined" && online.active && online.turnSecs > 0 && !isGameOver &&
        versusTurn === online.myIdx && online.deadline > 0) {
      const left = Math.max(0, Math.ceil((online.deadline - Date.now()) / 1000));
      txt += ` · ⏱ ${left}${t.versusSec || "s"}`;
    }
  }
  const el = document.getElementById("versusBannerText");
  if (el) el.textContent = txt;
  const quit = document.getElementById("versusQuitBtn");
  if (quit) {
    quit.textContent = t.versusQuitBtn || "Quit";
    quit.title = t.versusQuit || "Quit";
  }
  const drawBtn = document.getElementById("versusDrawBtn");
  if (drawBtn) {
    drawBtn.textContent = "½ " + (t.versusDrawBtn || "Nul");
    drawBtn.title = t.versusDraw || "Match nul";
  }
}

function openVersusSetup() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const i1 = document.getElementById("versusName1");
  const i2 = document.getElementById("versusName2");
  const defaults = ["Joueur 1", "Joueur 2", "Player 1", "Player 2"];
  if (i1) {
    if (!i1.value || defaults.includes(i1.value)) i1.value = t.versusJ1 || "Player 1";
    i1.placeholder = t.versusJ1 || "Player 1";
  }
  if (i2) {
    if (!i2.value || defaults.includes(i2.value)) i2.value = t.versusJ2 || "Player 2";
    i2.placeholder = t.versusJ2 || "Player 2";
  }
  const l1 = document.getElementById("versusPseudo1Label");
  const l2 = document.getElementById("versusPseudo2Label");
  if (l1) l1.textContent = t.versusPseudo1 || "Pseudo joueur 1";
  if (l2) l2.textContent = t.versusPseudo2 || "Pseudo joueur 2";
  document.getElementById("versusModal")?.classList.remove("hidden");
}

function closeVersusModal() {
  document.getElementById("versusModal")?.classList.add("hidden");
}

function startVersusFromModal() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const n1 = (document.getElementById("versusName1")?.value || "").trim().slice(0, 16) || t.versusJ1 || "Joueur 1";
  const n2 = (document.getElementById("versusName2")?.value || "").trim().slice(0, 16) || t.versusJ2 || "Joueur 2";
  versusNames = [n1, n2];
  try { localStorage.setItem("opdle_versus_names", JSON.stringify(versusNames)); } catch (e) {}
  versusScores = [0, 0];
  versusRound = 1;
  versusMode = true;
  closeVersusModal();
  startGame();
}

function endVersus(sendQuit) {
  const wasOnline = (typeof online !== "undefined" && online.active);
  if (wasOnline) {
    online.active = false;
    if (sendQuit !== false && online.chan) {
      try { online.chan.send({ type: "broadcast", event: "msg", payload: { t: "quit", from: online.myKey, by: online.myIdx } }); } catch (e) {}
    }
    if (typeof onlineLeaveRoom === "function") onlineLeaveRoom(true);
  } else if (typeof online !== "undefined" && (online.chan || online.code) && typeof onlineLeaveRoom === "function") {
    // Salon ouvert mais partie pas encore lancée (phase d'attente) :
    // on ferme quand même le canal, sinon le salon reste fantôme
    // (rejoignable alors que le joueur pense l'avoir fermé).
    onlineLeaveRoom(true);
  }
  recordVersusMatch();
  versusMode = false;
  versusWinner = -1;
  updateVersusBanner();
  closeVersusModal();
  if (typeof updateOnlineUI === "function") updateOnlineUI();
  showToast((TRANSLATIONS[currentLang] || {}).versusOver || "Versus terminé");
  startGame();
}

/** Forfait en versus : l'adversaire gagne la manche. */
function versusGiveUp() {
  const winner = 1 - versusTurn;
  versusScores[winner]++;
  versusWinner = winner;
  versusRound++;
  isGameOver = true;
  try { document.getElementById("guessInput").disabled = true; } catch (e) {}
  if (typeof recordGameEnd === "function") {
    recordGameEnd({ win: true, how: "forfeit", winner: (typeof versusNames !== "undefined" ? versusNames[winner] : null) });
  }
  if (typeof online !== "undefined" && online.active) {
    try { online.chan.send({ type: "broadcast", event: "msg", payload: { t: "forfeit", from: online.myKey, winner } }); } catch (e) {}
  }
  showVictoryModal();
}

/** Nul accepté : fin de manche sans point (local + distant). */
function versusApplyDraw() {
  if (!versusMode || isGameOver) return;
  isGameOver = true;
  try { document.getElementById("guessInput").disabled = true; } catch (e) {}
  versusRound++;
  if (typeof recordGameEnd === "function") recordGameEnd({ draw: true, how: "draw" });
  showToast((TRANSLATIONS[currentLang] || {}).versusDrawDone || "Match nul");
  showGiveUpModal(true); // versus + échec = titre "Match nul"
}

/** Nul proposé en versus : l'adversaire accepte via le modal (hotseat). */
function versusAskDraw() {
  if (!versusMode || isGameOver) return;
  if (typeof online !== "undefined" && online.active) { onlineAskDraw(); return; }
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const other = versusNames[1 - versusTurn];
  showConfirmModal({
    icon: "🤝",
    title: versusNames[versusTurn] + " " + (t.versusDrawAsk || "demande le match nul"),
    desc: (t.versusDrawAccept || "{name}, tu acceptes ?").replace("{name}", other),
    okLabel: t.confirmDefaultOk,
    danger: false
  }).then(confirmed => {
    if (!confirmed || !versusMode || isGameOver) return;
    versusApplyDraw();
  });
}

function startGame() {
  hideShinyBanner();
  answer = pickRandomCharacter();
  // Versus en ligne : la vraie réponse est enregistrée par onlineApplyStart /
  // onlineMaybeBegin (sinon on compterait un mystère tiré au hasard, jamais joué).
  if (typeof recordMysteryPick === "function" && !deferPickRecord) recordMysteryPick(answer);
  guessedNames.clear();
  currentGuessesList = [];
  attemptsCount = 0;
  isGameOver = false;
  roundRecorded = false;
  roundForced = false;
  // Versus : pas de limite d'essais, on joue jusqu'à victoire / nul / forfait
  maxAttempts = versusMode ? Infinity : getMaxAttempts(currentDifficulty);
  mysteryCategories = [];
  versusWinner = -1;
  if (versusMode) versusTurn = (versusRound - 1) % 2; // le starter alterne
  updateVersusBanner();
  
  const input = document.getElementById("guessInput");
  input.disabled = false;
  input.value = "";
  
  document.getElementById("results").innerHTML = "";
  hideSuggestions();
  updateStatsUI();
  updateAttemptsUI();
  updateModeButtons();
  updateStoryButtons();
  updateHeaderVisibility();
  closeModals();
  if (typeof isAdmin === "function" && isAdmin()) {
    console.log("🤫 Réponse mystère :", answer.name, "| Mode:", currentDifficulty, "| Histoire:", currentStory, "| Pool:", getAvailableCharacters().length);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2500);
}

function isPirateCrewAffiliation(character) {
  if (!character) return false;
  const affiliation = cleanString(character.affiliation?.fr || "");
  const knownPirateAffiliations = [
    "chapeau de paille",
    "cross guild",
    "pirates",
    "armada de krieg",
    "baratie",
    "buggy's delivery",
    "fire tank pirates",
    "fallen monk pirates",
    "mads"
  ];
  return knownPirateAffiliations.some(name => affiliation.includes(name));
}

function compareValues(guess, answer) {
  // Fiabilité data:
  // 1) forcer onlyAsVariant si besoin (ex. Sabo enfant)
  // 2) resolveCharacter sur la base (historique)
  // 3) ré-appliquer les overrides de variante PAR-DESSUS (prime 0, âge enfant, etc.)
  //    pour que history.js ne réécrase jamais une forme alt.
  guess = forceOnlyAsVariantIfNeeded(guess, currentStory);
  answer = forceOnlyAsVariantIfNeeded(answer, currentStory);
  const variantGuessId = guess && guess._variantId;
  const variantAnswerId = answer && answer._variantId;
  const variantGuess = variantGuessId ? findVariantById(variantGuessId) : null;
  const variantAnswer = variantAnswerId ? findVariantById(variantAnswerId) : null;

  // Resolve on "clean" base names (drop variant overlays before cascade)
  const baseGuess = findCharByName(guess.name) || guess;
  const baseAnswer = findCharByName(answer.name) || answer;
  guess = resolveCharacter(baseGuess, currentStory);
  answer = resolveCharacter(baseAnswer, currentStory);
  if (variantGuess) guess = applyVariant(guess, variantGuess);
  if (variantAnswer) answer = applyVariant(answer, variantAnswer);

  // Même personnage (nom) : si le mystère est une forme alt/shiny, on aligne le guess
  // sur cette forme → toutes les cases deviennent correctes (victoire d'identité).
  const sameIdentity = guess && answer && guess.name === answer.name;
  if (sameIdentity && (answer._variantId || answer._isShiny)) {
    guess = Object.assign({}, answer);
  }

  const row = [];
  const lang = currentLang;
  const unk = unknownLabel(lang);
  const locale = lang === "fr" ? "fr-FR" : "en-US";

  {
    let nameClass = "bg-slate-700";
    if (sameIdentity) {
      if (answer._isShiny || guess._isShiny) nameClass = "bg-violet-600 row-special-shiny";
      else if (answer._variantId && !answer._isShiny) nameClass = "bg-sky-600 row-special-alt";
      else nameClass = "bg-emerald-600";
    }
    row.push({
      value: guess.name,
      class: nameClass,
      isCharacter: true,
      // Toujours l'image de la forme trouvée (answer) si même identité ; sinon la
      // forme affichée à ce point d'histoire (pas la base si elle est remplacée)
      character: sameIdentity ? answer : forceOnlyAsVariantIfNeeded(guess, currentStory)
    });
  }

  // Gender
  row.push({
    value: guess.gender ? guess.gender[lang] : unk,
    class: guess.gender && answer.gender && guess.gender.fr === answer.gender.fr ? "bg-emerald-600" : "bg-slate-700"
  });

  // Affiliation
  {
    const gUnk = isUnknownValue(guess.affiliation);
    const aUnk = isUnknownValue(answer.affiliation);
    let affClass = "bg-slate-700";
    let affVal = gUnk ? unk : guess.affiliation[lang];
    if (gUnk && aUnk) {
      affClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      const sameAffiliation = cleanString(guess.affiliation.fr) === cleanString(answer.affiliation.fr);
      const guessIsPirateCrew = isPirateCrewAffiliation(guess);
      const answerIsPirateCrew = isPirateCrewAffiliation(answer);
      if (sameAffiliation) affClass = "bg-emerald-600";
      else if (guessIsPirateCrew && answerIsPirateCrew) affClass = "bg-amber-600";
    }
    row.push({ value: affVal, class: affClass });
  }

  // Fruit
  {
    const gUnk = isUnknownValue(guess.fruit);
    const aUnk = isUnknownValue(answer.fruit);
    let fruitClass = "bg-slate-700";
    let fruitVal = formatFruitOrNone(guess.fruit, lang, true);
    if (gUnk && aUnk) {
      fruitClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.fruit.fr === answer.fruit.fr) {
        fruitClass = "bg-emerald-600";
      } else if (
        (guess.fruit.fr !== "Aucun" && answer.fruit.fr !== "Aucun") ||
        (guess.fruit.fr.includes("Zoan") && answer.fruit.fr.includes("Zoan"))
      ) {
        fruitClass = "bg-amber-600";
      }
    }
    row.push({ value: fruitVal, class: fruitClass });
  }

  // Haki
  {
    const gUnk = isUnknownValue(guess.haki);
    const aUnk = isUnknownValue(answer.haki);
    let hakiClass = "bg-slate-700";
    let hakiVal = formatHakiDisplay(guess.haki, lang, true);
    if (gUnk && aUnk) {
      hakiClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.haki.fr === answer.haki.fr) {
        hakiClass = "bg-emerald-600";
      } else {
        const gHaki = guess.haki.fr.split(", ").map(cleanString);
        const aHaki = answer.haki.fr.split(", ").map(cleanString);
        const hasOverlap = gHaki.some(h => aHaki.includes(h) && h !== "inconnu");
        if (hasOverlap) hakiClass = "bg-amber-600";
      }
    }
    row.push({ value: hakiVal, class: hakiClass });
  }

  // Bounty / Prime
  {
    const gUnk = isPrimeUnknown(guess.prime);
    const aUnk = isPrimeUnknown(answer.prime);
    let bountyClass = "bg-slate-700";
    let bountyDisplay;
    if (gUnk) {
      bountyDisplay = formatPrimeDisplay(null, lang, true);
    } else {
      bountyDisplay = formatPrimeDisplay(guess.prime, lang, true);
    }
    if (gUnk && aUnk) {
      bountyClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.prime === answer.prime) {
        bountyClass = "bg-emerald-600";
      } else {
        bountyDisplay += guess.prime < answer.prime ? " ⬆️" : " ⬇️";
        bountyClass = guess.prime < answer.prime ? "bg-sky-900/80 border border-sky-500/50" : "bg-rose-900/80 border border-rose-500/50";
      }
    }
    // if only one side unknown → stay gray (no arrow)
    row.push({ value: bountyDisplay, class: bountyClass });
  }

  // Arc
  {
    let arcClass = "bg-slate-700";
    let arcDisplay = getArcDisplayName(guess.arc);
    const guessArcIndex = ARCS_ORDER.indexOf(guess.arc);
    const answerArcIndex = ARCS_ORDER.indexOf(answer.arc);
    if (guess.arc === answer.arc) {
      arcClass = "bg-emerald-600";
    } else if (guessArcIndex !== -1 && answerArcIndex !== -1) {
      arcDisplay += guessArcIndex < answerArcIndex ? " ⬆️" : " ⬇️";
      arcClass = guessArcIndex < answerArcIndex ? "bg-sky-900/80 border border-sky-500/50" : "bg-rose-900/80 border border-rose-500/50";
    }
    row.push({ value: arcDisplay, class: arcClass });
  }

  // Title
  {
    const gUnk = isUnknownValue(guess.titre);
    const aUnk = isUnknownValue(answer.titre);
    let titleClass = "bg-slate-700";
    let titleVal = gUnk ? unk : (guess.titre[lang] || unk);
    if (gUnk && aUnk) {
      titleClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.titre[lang] === answer.titre[lang]) {
        titleClass = "bg-emerald-600";
      } else {
        const gTitles = (guess.titre.fr || "").split(", ").map(cleanString);
        const aTitles = (answer.titre.fr || "").split(", ").map(cleanString);
        const hasOverlap = gTitles.some(t => aTitles.includes(t) && t !== "—" && t !== "inconnu");
        if (hasOverlap) titleClass = "bg-amber-600";
      }
    }
    row.push({ value: titleVal, class: titleClass });
  }

  // Age
  {
    const gUnk = guess.age === null || guess.age === undefined || guess.age === 0;
    const aUnk = answer.age === null || answer.age === undefined || answer.age === 0;
    let ageClass = "bg-slate-700";
    let ageDisplay = gUnk ? unk : (guess.age + " " + TRANSLATIONS[lang].yearsOld);
    if (gUnk && aUnk) {
      ageClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.age === answer.age) {
        ageClass = "bg-emerald-600";
      } else {
        ageDisplay += guess.age < answer.age ? " ⬆️" : " ⬇️";
        ageClass = guess.age < answer.age ? "bg-sky-900/80 border border-sky-500/50" : "bg-rose-900/80 border border-rose-500/50";
      }
    }
    row.push({ value: ageDisplay, class: ageClass });
  }

  // Height
  {
    const gUnk = guess.height === null || guess.height === undefined || guess.height === 0;
    const aUnk = answer.height === null || answer.height === undefined || answer.height === 0;
    let heightClass = "bg-slate-700";
    let heightDisplay = gUnk ? unk : (guess.height + " cm");
    if (gUnk && aUnk) {
      heightClass = "bg-emerald-600";
    } else if (!gUnk && !aUnk) {
      if (guess.height === answer.height) {
        heightClass = "bg-emerald-600";
      } else {
        heightDisplay += guess.height < answer.height ? " ⬆️" : " ⬇️";
        heightClass = guess.height < answer.height ? "bg-sky-900/80 border border-sky-500/50" : "bg-rose-900/80 border border-rose-500/50";
      }
    }
    row.push({ value: heightDisplay, class: heightClass });
  }

  return row;
}

/** Labels de catégories (pastilles mobile + a11y). Index = ordre compareValues. */
const CATEGORY_META = [
  { key: "char", fr: "Perso", en: "Char" },
  { key: "gender", fr: "Genre", en: "Gender" },
  { key: "affiliation", fr: "Affiliation", en: "Affiliation" },
  { key: "fruit", fr: "Fruit", en: "Fruit" },
  { key: "haki", fr: "Haki", en: "Haki" },
  { key: "bounty", fr: "Prime", en: "Bounty" },
  { key: "arc", fr: "Arc", en: "Arc" },
  { key: "title", fr: "Titre", en: "Title" },
  { key: "age", fr: "Âge", en: "Age" },
  { key: "height", fr: "Taille", en: "Height" }
];

function categoryLabel(index) {
  const meta = CATEGORY_META[index];
  if (!meta) return "";
  return currentLang === "en" ? meta.en : meta.fr;
}

function renderRow(cellsData, animate = true, mysteryOverride = undefined) {
  const container = document.getElementById("results");
  const rowDiv = document.createElement("div");
  rowDiv.className = "guess-row grid grid-cols-10 gap-2 text-center text-xs sm:text-sm font-semibold transition-all";
  const charCell = cellsData && cellsData[0];
  if (charCell && charCell.class && charCell.class.includes("row-special-shiny")) {
    rowDiv.classList.add("guess-row-shiny");
  } else if (charCell && charCell.class && charCell.class.includes("row-special-alt")) {
    rowDiv.classList.add("guess-row-alt");
  }

  const activeMysteries = Array.isArray(mysteryOverride)
    ? mysteryOverride
    : (Array.isArray(mysteryCategories) ? mysteryCategories : []);

  const isShinyRow = rowDiv.classList.contains("guess-row-shiny");
  const isAltRow = rowDiv.classList.contains("guess-row-alt");
  cellsData.forEach((cell, index) => {
    const isMystery = activeMysteries.includes(index);
    const meta = CATEGORY_META[index] || { key: "x", fr: "", en: "" };
    const cellDiv = document.createElement("div");
    let cellClass = isMystery
      ? "bg-slate-800 border border-slate-600"
      : cell.class;
    // Shiny / Alt : toutes les cases "correctes" (vert) passent en violet / bleu
    if (!isMystery && cellClass && cellClass.includes("bg-emerald")) {
      if (isShinyRow) cellClass = cellClass.replace(/bg-emerald-\d+/g, "bg-violet-600");
      else if (isAltRow) cellClass = cellClass.replace(/bg-emerald-\d+/g, "bg-sky-600");
    }
    cellDiv.className = `guess-cell p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center min-h-[80px] shadow-lg text-white break-words overflow-visible w-full ${cellClass} ${cell.isCharacter ? "character-cell" : ""} ${animate ? "cell-flip" : ""}`;
    cellDiv.dataset.key = meta.key;
    cellDiv.dataset.label = categoryLabel(index);
    if (animate) {
      cellDiv.style.animationDelay = `${index * 0.08}s`;
    }

    const labelHtml = cell.isCharacter
      ? ""
      : `<span class="guess-cell-label">${categoryLabel(index)}</span>`;

    if (isMystery) {
      cellDiv.innerHTML = `${labelHtml}<span class="guess-cell-value leading-snug break-words text-slate-400 font-bold tracking-widest">???</span>`;
    } else if (cell.isCharacter) {
      let showChar = cell.character ? Object.assign({}, cell.character) : null;
      // Priorité : forme mystère si même perso
      if (answer && showChar && answer.name === showChar.name && (answer._isShiny || answer._variantId || isShinyRow || isAltRow)) {
        showChar = Object.assign({}, answer);
      }
      if (!showChar) {
        showChar = { name: String(cell.value || "?"), image: null };
      }
      let displayName = (showChar._variantDisplay && (showChar._variantDisplay[currentLang] || showChar._variantDisplay.fr))
        || showChar.name
        || cell.value
        || "?";
      // Image : variante → answer → base CHARACTERS
      let imgSrc = showChar.image || null;
      if (!imgSrc && answer && answer.name === showChar.name && answer.image) imgSrc = answer.image;
      if (!imgSrc) {
        const base = typeof findCharByName === "function" ? findCharByName(showChar.name) : null;
        if (base && base.image) imgSrc = base.image;
      }
      showChar.image = imgSrc;
      const shiny = !!(showChar._isShiny) || isShinyRow;
      const isAlt = (!!showChar._variantId && !showChar._isShiny) || (isAltRow && !shiny);
      if (shiny) cellDiv.classList.add("shiny-hit");
      if (isAlt) cellDiv.classList.add("alt-hit");
      // displayName peut déjà contenir ✦ / Shiny — ne pas doubler
      let label = String(displayName || showChar.name || "?");
      if (shiny && !/[✦✧]|shiny/i.test(label)) label += " ✦";
      if (isAlt && !shiny && !/[◇♦]|\byoung\b|enfant|gear/i.test(label)) label += " ◇";
      const safeName = label.replace(/</g, "&lt;").replace(/"/g, "&quot;");
      const initials = (typeof getInitials === "function" ? getInitials(showChar.name || label) : (label || "?").slice(0, 2));
      // Une seule image ; fallback initiales UNIQUEMENT si onerror (classe distincte, pas forcée en display:block)
      const imgHtml = imgSrc
        ? `<img src="${imgSrc}" alt="${safeName}" class="char-guess-img rounded-xl object-cover border-2 border-white/50 shadow-md" width="56" height="56" style="width:56px;height:56px;object-position:center top;" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('div'),{className:'char-guess-fallback',textContent:'${initials.replace(/'/g, "")}',style:'width:56px;height:56px'}))" />`
        : `<div class="char-guess-fallback" style="width:56px;height:56px">${initials}</div>`;
      cellDiv.innerHTML = `
        <div class="char-guess-wrap">
          ${imgHtml}
          <span class="guess-cell-value line-clamp-2 leading-tight text-xs font-bold">${safeName}</span>
        </div>
      `;
    } else {
      cellDiv.innerHTML = `${labelHtml}<span class="guess-cell-value leading-snug break-words">${cell.value}</span>`;
    }

    rowDiv.appendChild(cellDiv);
  });

  container.insertBefore(rowDiv, container.firstChild);
  // Garantir visibilité (évite opacity:0 si une anim a écrasé flipIn)
  rowDiv.querySelectorAll(".guess-cell").forEach(el => {
    el.style.opacity = "1";
  });
}

function makeGuess(character) {
  if (isGameOver) return;
  if (typeof onlinePickIntercept === "function" && onlinePickIntercept(character)) return;
  if (typeof onlineGateGuess === "function" && !onlineGateGuess()) return;
  if (guessedNames.has(character.name)) {
    showToast(TRANSLATIONS[currentLang].toastAlreadyTried);
    return;
  }
  if (attemptsCount >= maxAttempts) {
    showToast(TRANSLATIONS[currentLang].toastNoAttempts);
    return;
  }

  guessedNames.add(character.name);

  // Extreme (+ bridage d'option en ligne) : ajoute une catégorie bridée aux 1er et 2e essais
  if ((currentDifficulty === "extreme" || (typeof online !== "undefined" && online.active && online.bridled)) && mysteryCategories.length < 2) {
    const newCat = pickMysteryCategory();
    if (newCat !== null) mysteryCategories.push(newCat);
  }
  // Snapshot the current list for this guess (so older rows keep their state if re-rendered)
  const thisMystery = mysteryCategories.slice();
  currentGuessesList.push({ character, mystery: thisMystery });
  attemptsCount++;

  const row = compareValues(character, answer);
  renderRow(row, true, thisMystery);

  const input = document.getElementById("guessInput");
  input.value = "";
  hideSuggestions();
  updateAttemptsUI();

  if (character.name === answer.name) {
    isGameOver = true;
    input.disabled = true;
    if (typeof updateAttemptsUI === "function") updateAttemptsUI(); // réactive « Nouveau »
    // Partie forcée (admin) : exclue des stats, la série est préservée
    if (!roundForced) {
      streak++;
      wins++;
      localStorage.setItem("opdle_streak", streak);
      localStorage.setItem("opdle_wins", wins);
    }
    if (versusMode) {
      versusScores[versusTurn]++;
      versusWinner = versusTurn;
      versusRound++;
      if (typeof onlineSendWin === "function") onlineSendWin(character.name);
    }
    if ((currentDifficulty === "hard" || currentDifficulty === "extreme") && !roundForced) {
      hardExtremeWins++;
      localStorage.setItem("opdle_hard_extreme_wins", hardExtremeWins);
    }
    if (currentDifficulty === "extreme" && !roundForced) {
      extremeWins++;
      localStorage.setItem("opdle_extreme_wins", extremeWins);
    }
    if (typeof recordGameEnd === "function") {
      recordGameEnd({ win: true, how: "guess", winner: versusMode ? versusNames[versusTurn] : null });
    }
        // Quêtes collection (Gear, etc.) : déblocage hors pool de jeu
    const newlyUnlockedQuests = [];
    if (typeof CHARACTER_VARIANTS !== "undefined") {
      CHARACTER_VARIANTS.forEach(v => {
        if (v.collectionOnly && v.unlock && isVariantUnlocked(v)) {
          const wasNew = unlockCharacter(v.id);
          if (wasNew) newlyUnlockedQuests.push(v);
        } else if (v.unlock && isVariantUnlocked(v) && !v.collectionOnly) {
          // Quête accomplie : popup « Quête accomplie ! » aussi pour les
          // quêtes hors collection (elles n'apparaissaient jamais avant).
          if (unlockCharacter(v.id)) newlyUnlockedQuests.push(v);
        }
      });
    }
    // Quêtes portées par des cartes bases (navires) : la carte débloquée EST la récompense
    if (typeof CHARACTERS !== "undefined") {
      CHARACTERS.forEach(c => {
        if (c.unlock && c.questName && isVariantUnlocked(c)) {
          if (unlockCharacter(c.name)) newlyUnlockedQuests.push(c);
        }
      });
    }
    let justUnlocked = unlockCharacter(answer.name);
    // Forme forcée empilée d'un shiny : les deux ids doivent être débloqués
    if (answer._shinyId) justUnlocked = unlockCharacter(answer._shinyId) || justUnlocked;
    if (answer._variantId) {
      const wasNewVar = unlockCharacter(answer._variantId);
      justUnlocked = wasNewVar || justUnlocked;
      if (wasNewVar && typeof maybeShowSpecialUnlockTip === "function") {
        maybeShowSpecialUnlockTip(answer._isShiny ? "shiny" : "alt");
      }
    } else if (answer._isShiny && justUnlocked && typeof maybeShowSpecialUnlockTip === "function") {
      maybeShowSpecialUnlockTip("shiny");
    }
    if (answer && answer._isShiny && typeof playShinyChime === "function") playShinyChime();
    else if (answer && answer._variantId && !answer._isShiny && typeof playAltChime === "function") playAltChime();
    persistCurrentUser();
    updateStatsUI();
    updateProfileUI();
    // Album Barbe Noire complet → thème Jolly Roger (annonce unique)
    if (typeof maybeAnnounceJollyTheme === "function") maybeAnnounceJollyTheme();
    setTimeout(() => {
      triggerConfetti();
      showVictoryModal();
      if (newlyUnlockedQuests.length) {
        // Afficher la récompense de quête après la victoire
        setTimeout(() => showQuestRewardModal(newlyUnlockedQuests), 400);
      }
    }, 600);
  } else if (attemptsCount >= maxAttempts) {
    // Out of attempts
    isGameOver = true;
    input.disabled = true;
    if (typeof updateAttemptsUI === "function") updateAttemptsUI(); // réactive « Nouveau »
    if (!roundForced) {
      streak = 0;
      localStorage.setItem("opdle_streak", streak);
    }
    if (typeof recordGameEnd === "function") recordGameEnd({ win: false, how: "fail" });
    persistCurrentUser();
    updateStatsUI();
    if (versusMode) versusRound++; // match nul : personne ne marque
    setTimeout(() => {
      showGiveUpModal(true); // true = failed by attempts
    }, 600);
  }
  // Versus : on passe la main si la manche continue
  if (versusMode && !isGameOver) {
    versusTurn = 1 - versusTurn;
    updateVersusBanner();
  }
  if (typeof onlineSendGuess === "function") onlineSendGuess(character);
}

function handleInput() {
  const val = cleanString(document.getElementById("guessInput").value);
  const menu = document.getElementById("suggestionsMenu");

  if (!val || isGameOver) {
    hideSuggestions();
    return;
  }

  const pool = getAvailableCharacters();
  const all = pool.filter(c => {
    if (guessedNames.has(c.name)) return false;
    const nameClean = cleanString(c.name);
    if (nameClean.includes(val)) return true;
    return c.aliases.some(a => cleanString(a).includes(val));
  });
  // 14 >= le plus grand groupe d'aliases partages ("supernova" = 11) : sans
  // cela, certains personnages restaient injoignables via leur propre alias.
  const matches = all.slice(0, 14);

  if (matches.length === 0) {
    hideSuggestions();
    return;
  }

  selectedSuggestionIndex = -1;
  menu.innerHTML = "";
  matches.forEach((char, index) => {
    const item = document.createElement("div");
    item.className = "p-3 hover:bg-slate-700/80 cursor-pointer flex items-center gap-3 text-sm text-white transition suggestion-item";
    item.dataset.index = index;
    const displayChar = forceOnlyAsVariantIfNeeded(char, currentStory);
    const sugName = (displayChar._variantDisplay && (displayChar._variantDisplay[currentLang] || displayChar._variantDisplay.fr || displayChar._variantDisplay.en)) || displayChar.name;
    item.innerHTML = `
      ${avatarHTML(displayChar, "w-8 h-8")}
      <span class="font-semibold">${sugName}</span>
    `;
    item.addEventListener("click", () => {
      makeGuess(char);
    });
    menu.appendChild(item);
  });

  // Alias de groupe (MARINE, WANO, PIRATES…) : beaucoup de correspondances,
  // le menu n'en montre que 8 — on prévient le joueur d'affiner sa saisie.
  if (all.length > matches.length) {
    const more = document.createElement("div");
    more.className = "px-3 py-2 text-[11px] text-slate-500 border-t border-slate-700/60 sticky bottom-0 bg-slate-900";
    more.textContent = "+" + (all.length - matches.length) + " " +
      ((TRANSLATIONS[currentLang] || {}).suggestionMore || "autres — affinez avec plus de lettres");
    menu.appendChild(more);
  }

  menu.classList.remove("hidden");
}

function hideSuggestions() {
  const menu = document.getElementById("suggestionsMenu");
  menu.classList.add("hidden");
  menu.innerHTML = "";
  selectedSuggestionIndex = -1;
}

function highlightSuggestion(items) {
  items.forEach((item, idx) => {
    if (idx === selectedSuggestionIndex) {
      item.classList.add("bg-slate-700");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("bg-slate-700");
    }
  });
}

/** Prime compacte : 30M, 1,5Md (FR) / 1.5B (EN). HTML optionnel pour style. */
/** Prime inconnue = valeur jamais révélée (null/undefined) → « Inconnue ».
 *  0 est une VRAIE valeur : un Marine/GM/civil n'a pas de prime (Smoker = 0),
 *  à l'inverse d'un pirate dont la prime n'a pas été dévoilée (Rocks = null). */
function isPrimeUnknown(prime) {
  return prime === null || prime === undefined;
}
function formatPrimeDisplay(prime, lang, asHtml = false) {
  if (isPrimeUnknown(prime)) {
    const t = unknownLabel(lang);
    return asHtml ? `<span class="val-unknown">${t}</span>` : t;
  }
  const isFr = lang === "fr";
  let core;
  if (prime >= 1e9) {
    const v = prime / 1e9;
    const s = (isFr ? v.toFixed(v >= 10 ? 0 : 1) : v.toFixed(v >= 10 ? 0 : 1)).replace(/\.0$/, "");
    core = isFr ? s.replace(".", ",") + "Md" : s + "B";
  } else if (prime >= 1e6) {
    const v = prime / 1e6;
    const s = (v >= 100 ? Math.round(v).toString() : (v % 1 === 0 ? String(Math.round(v)) : v.toFixed(1))).replace(/\.0$/, "");
    core = isFr ? s.replace(".", ",") + "M" : s + "M";
  } else if (prime >= 1e3) {
    const v = Math.round(prime / 1e3);
    core = isFr ? v + "k" : v + "K";
  } else {
    core = String(prime);
  }
  const t = core + " ฿";
  return asHtml ? t : t;
}

/** Haki → pastilles lisibles (œil / bouclier / couronne + libellé court). */
function formatHakiDisplay(hakiObj, lang, asHtml = false) {
  const unk = unknownLabel(lang);
  const isFr = lang === "fr";
  if (hakiObj == null || isUnknownValue(hakiObj)) {
    return asHtml ? `<span class="val-unknown">${unk}</span>` : unk;
  }
  const raw = (hakiObj[lang] || hakiObj.fr || hakiObj.en || "").trim();
  const low = raw.toLowerCase();
  if (!raw || low === "aucun" || low === "none") {
    const t = raw || (isFr ? "Aucun" : "None");
    return asHtml ? `<span class="val-none">${t}</span>` : t;
  }
  if (low === "inconnu" || low === "unknown") {
    return asHtml ? `<span class="val-unknown">${raw}</span>` : raw;
  }
  if (!asHtml) return raw;
  const parts = [];
  if (/observation/i.test(raw)) {
    parts.push(`<span class="haki-pill haki-obs" title="Observation"><span class="haki-emoji" aria-hidden="true">👁</span><span class="haki-txt">${isFr ? "Obs." : "Obs."}</span></span>`);
  }
  if (/armement|armament/i.test(raw)) {
    parts.push(`<span class="haki-pill haki-arm" title="${isFr ? "Armement" : "Armament"}"><span class="haki-emoji" aria-hidden="true">🛡</span><span class="haki-txt">${isFr ? "Arm." : "Arm."}</span></span>`);
  }
  if (/roi|conqueror/i.test(raw)) {
    parts.push(`<span class="haki-pill haki-roi" title="${isFr ? "Roi" : "Conqueror's"}"><span class="haki-emoji" aria-hidden="true">👑</span><span class="haki-txt">${isFr ? "Roi" : "Conq."}</span></span>`);
  }
  if (!parts.length) return raw;
  return `<span class="haki-icons">${parts.join("")}</span>`;
}

function formatFruitOrNone(fruitObj, lang, asHtml = false) {
  const unk = unknownLabel(lang);
  if (fruitObj == null || isUnknownValue(fruitObj)) {
    return asHtml ? `<span class="val-unknown">${unk}</span>` : unk;
  }
  const raw = (fruitObj[lang] || fruitObj.fr || fruitObj.en || "").trim();
  const low = raw.toLowerCase();
  if (!raw || low === "aucun" || low === "none") {
    return asHtml ? `<span class="val-none">${raw || (lang === "fr" ? "Aucun" : "None")}</span>` : (raw || (lang === "fr" ? "Aucun" : "None"));
  }
  return raw;
}


/** Modal de récompense de quête (ex. Gear Luffy) — image collection, pas de pool de jeu. */
function showQuestRewardModal(variants) {
  if (!variants || !variants.length) return;
  const modal = document.getElementById("questRewardModal");
  if (!modal) return;
  const lang = currentLang;
  const list = document.getElementById("questRewardList");
  const title = document.getElementById("questRewardTitle");
  const desc = document.getElementById("questRewardDesc");
  if (title) {
    title.textContent = lang === "fr" ? "Quête accomplie !" : "Quest complete!";
  }
  if (desc) {
    desc.textContent = lang === "fr"
      ? "Nouvelle image débloquée dans ta collection."
      : "New image unlocked in your collection.";
  }
  if (list) {
    list.innerHTML = variants.map(v => {
      const name = (v.displayName && (v.displayName[lang] || v.displayName.fr || v.displayName.en)) || v.id || v.name;
      const img = v.image
        ? `<img src="${v.image}" alt="${name}" class="w-full h-full object-cover object-top" onerror="this.style.display='none'" />`
        : `<span class="text-3xl">✦</span>`;
      return `<div class="flex flex-col items-center gap-2">
        <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-lg shadow-amber-500/20 bg-slate-900 flex items-center justify-center">${img}</div>
        <p class="text-amber-300 font-bold text-sm text-center">${name}</p>
      </div>`;
    }).join("");
  }
  modal.classList.remove("hidden");
}

function closeQuestRewardModal() {
  const modal = document.getElementById("questRewardModal");
  if (modal) modal.classList.add("hidden");
}

/** Progression d'une quête (variante à unlock) : { done, parts: [{ label, cur, need }] }. */
function questProgress(variant) {
  const u = (variant && variant.unlock) || {};
  const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
  const t = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};
  const parts = [];
  if (u.extremeWins != null) {
    parts.push({ label: t.questNeedExtreme || "Victoires en Extrême", cur: (typeof extremeWins !== "undefined" ? extremeWins : 0), need: u.extremeWins });
  }
  if (u.hardExtremeWins != null) {
    parts.push({ label: t.questNeedHardExtreme || "Victoires en Difficile / Extrême", cur: (typeof hardExtremeWins !== "undefined" ? hardExtremeWins : 0), need: u.hardExtremeWins });
  }
  if (u.wins != null) {
    parts.push({ label: t.questNeedWins || "Victoires", cur: (typeof wins !== "undefined" ? wins : 0), need: u.wins });
  }
  const fr = (lang !== "en");
  if (u.winsW7mhe != null) {
    parts.push({ label: fr ? "Victoires (post Water 7 · Moyen/Difficile/Extrême)" : "Wins (post Water 7 · Medium/Hard/Extreme)", cur: qGet(Q_W7MHE_KEY), need: u.winsW7mhe });
  }
  if (u.winsDRhe != null) {
    parts.push({ label: fr ? "Victoires (post Dressrosa · Difficile/Extrême)" : "Wins (post Dressrosa · Hard/Extreme)", cur: qGet(Q_DRHE_KEY), need: u.winsDRhe });
  }
  if (u.winsWChec != null) {
    parts.push({ label: fr ? "Victoires (post Whole Cake · Difficile/Extrême)" : "Wins (post Whole Cake · Hard/Extreme)", cur: qGet(Q_WCHE_KEY), need: u.winsWChec });
  }
  if (u.winsWanoEx != null) {
    parts.push({ label: fr ? "Victoires (post Wano · Extrême)" : "Wins (post Wano · Extreme)", cur: qGet(Q_WANOEX_KEY), need: u.winsWanoEx });
  }
  if (u.winsEBex != null) {
    parts.push({ label: fr ? "Victoires (East Blue · Extrême)" : "Wins (East Blue · Extreme)", cur: qGet(Q_EBEX_KEY), need: u.winsEBex });
  }
  if (u.streakW7he != null) {
    parts.push({ label: fr ? "Série de victoires (Water 7 · Difficile/Extrême)" : "Win streak (Water 7 · Hard/Extreme)", cur: Math.min(qGet(Q_BEST_KEY), u.streakW7he), need: u.streakW7he });
  }
  if (u.firstTryW7 != null) {
    parts.push({ label: fr ? "Victoire au 1er coup (post Water 7)" : "First-try win (post Water 7)", cur: Math.min(qGet(Q_FIRSTTRY_KEY), u.firstTryW7), need: u.firstTryW7 });
  }
  if (Array.isArray(u.drawn)) {
    let stats = {};
    try { stats = JSON.parse(localStorage.getItem(PICK_STATS_KEY) || "{}"); } catch (e) {}
    const cur = u.drawn.filter(k => (Number(stats[k]) || 0) > 0).length;
    parts.push({
      label: fr ? "Personnages d'East Blue tirés en mystère (chacun compte une fois)" : "East Blue characters drawn as mystery (each counts once)",
      cur, need: u.drawn.length
    });
  }
  if (Array.isArray(u.hasVariants)) {
    let un = [];
    try { un = getUnlockedNames(); } catch (e) {}
    const cur = u.hasVariants.filter(id => un.includes(id)).length;
    parts.push({ label: fr ? "Formes possédées" : "Forms owned", cur, need: u.hasVariants.length });
  }
  if (Array.isArray(u.hasCharacters)) {
    let un = [];
    try { un = getUnlockedNames(); } catch (e) {}
    const cur = u.hasCharacters.filter(n => un.includes(n)).length;
    parts.push({ label: fr ? "Personnages possédés" : "Characters owned", cur, need: u.hasCharacters.length });
  }
  if (u.collectionComplete) {
    const cat = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : []).find(c => c.id === u.collectionComplete);
    const catLabel = cat ? (lang === "en" ? (cat.en || cat.fr) : (cat.fr || cat.en)) : u.collectionComplete;
    const rewards = (typeof getAllCollectionRewardIds === "function") ? getAllCollectionRewardIds() : new Set();
    const target = ((cat && cat.members) || []).filter(m => !rewards.has(m));
    const unlocked = new Set((typeof getUnlockedNames === "function" ? getUnlockedNames() : []));
    parts.push({ label: (t.questNeedAlbum || "Album") + " « " + catLabel + " »", cur: target.filter(m => unlocked.has(m)).length, need: target.length });
  }
  return { done: (typeof isVariantUnlocked === "function" ? isVariantUnlocked(variant) : parts.every(p => p.cur >= p.need)), parts };
}

function openQuestsModal() {
  const modal = document.getElementById("questsModal");
  if (!modal) return;
  renderQuestsList();
  modal.classList.remove("hidden");
}

function closeQuestsModal() {
  const modal = document.getElementById("questsModal");
  if (modal) modal.classList.add("hidden");
}

/** « Je veux vivre ! — Je veux vivre ! » : si le nom d'affichage et le nom de
 *  quête disent la même chose, on n'affiche qu'une seule fois. */
function joinQuestName(displayName, questName) {
  const norm = s => (s || "").toLowerCase()
    .replace(/[\s\u2019'\u2026.,!?;:]/g, "")
    .replace(/[\u0300-\u036f]/g, "");
  if (norm(displayName) === norm(questName)) return questName;
  return displayName + " — " + questName;
}

/**
 * Ordre des quêtes selon l'histoire (l'ordre du fichier variants.js est celui
 * des données, pas celui du récit). Les quêtes absentes de cette liste sont
 * rangées à la fin, groupées par arc.
 */
const QUEST_CHRONO_ORDER = [
  // East Blue
  "shanks_arm",
  "nami_walk",
  // Alabasta
  "bye_vivi",
  // Water 7 / Enies Lobby
  "luffy_gear2",
  "luffy_gear3",
  "usopp_sogeking",
  "robin_live",
  // Navires : récompenses de quête (la carte base EST la récompense)
  "Going Merry",
  "Thousand Sunny",
  // Thriller Bark
  "Thriller Bark",
  "zoro_nothing",
  // Marineford
  "whitebeard_reveal",
  // Dressrosa
  "luffy_sabo",
  "luffy_gear4_bounceman",
  // Whole Cake
  "Queen Mama Chanter",
  "luffy_gear4_snakeman",
  // Wano
  "kaido_hybrid",
  "luffy_gear5",
  // Le grand final (300 victoires)
  "roger_shiny"
];

/** Rang chronologique d'une quête (inconnue → fin de son arc). */
function questChronoRank(v) {
  const i = QUEST_CHRONO_ORDER.indexOf(v.id || v.name);
  if (i >= 0) return i;
  const sid = v.minStory || (v.stories && v.stories[0]) || "all";
  const keys = typeof STORY_POINTS !== "undefined" ? Object.keys(STORY_POINTS) : [];
  const arc = Math.max(0, keys.indexOf(sid));
  return 1000 + arc * 10;
}

function renderQuestsList() {
  const list = document.getElementById("questsList");
  if (!list || typeof CHARACTER_VARIANTS === "undefined") return;
  if (typeof syncCollectionRewards === "function") syncCollectionRewards();
  const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
  const t = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};
  const unlocked = new Set((typeof getUnlockedNames === "function" ? getUnlockedNames() : []));
  // Quêtes portées par des cartes bases (navires Merry/Sunny) : la carte EST la récompense
  const baseQuests = (typeof CHARACTERS !== "undefined" ? CHARACTERS : []).filter(c => c.unlock && c.questName);
  const quests = CHARACTER_VARIANTS
    .filter(v => v.unlock)
    .concat(baseQuests)
    .slice()
    .sort((a, b) => questChronoRank(a) - questChronoRank(b));
  if (!quests.length) {
    list.innerHTML = `<p class="text-center text-slate-500 text-sm py-10">${t.questsEmpty || "—"}</p>`;
    return;
  }
  list.innerHTML = quests.map(v => {
    const isDone = unlocked.has(v.id || v.name);
    const prog = questProgress(v);
    // Nom créatif de quête si défini (caché tant que verrouillé : ??? anti-spoiler)
    const qn = (v.questName && (v.questName[lang] || v.questName.fr || v.questName.en)) || null;
    // questSubject : nom qui mène la ligne de quête (ex. « The Pirate King » pour
    // le shiny de Roger). Permet de renommer la quête sans toucher à l'étiquette
    // de la carte dans la collection (displayName).
    const baseName = (v.questSubject && (v.questSubject[lang] || v.questSubject.fr || v.questSubject.en))
      || (v.displayName && (v.displayName[lang] || v.displayName.fr || v.displayName.en)) || v.id || v.name;
    const name = qn ? (isDone ? joinQuestName(baseName, qn) : qn) : baseName;
    const img = v.image
      ? `<img src="${v.image}" alt="" draggable="false" class="w-full h-full object-cover" style="object-position:center top;${isDone ? "" : "filter:brightness(0.55) opacity(0.6);"}" onerror="this.style.display='none'" />`
      : `<span class="ico text-2xl">🏆</span>`;
    const conds = prog.parts.map(p => {
      const pct = p.need > 0 ? Math.min(100, Math.round((p.cur / p.need) * 100)) : 100;
      return `<div class="mt-1">
        <div class="flex justify-between text-[10px] text-slate-400"><span>${p.label}</span><span class="tabular-nums">${p.cur} / ${p.need}</span></div>
        <div class="h-1.5 rounded-full bg-slate-800 overflow-hidden"><div class="h-full rounded-full ${isDone ? "bg-emerald-500" : "bg-amber-500"}" style="width:${pct}%"></div></div>
      </div>`;
    }).join("");
    return `<div class="flex gap-3 items-start bg-slate-950/60 border ${isDone ? "border-emerald-600/40" : "border-slate-700/70"} rounded-xl p-2.5">
      <div class="w-14 h-14 rounded-lg overflow-hidden bg-slate-900 shrink-0 flex items-center justify-center border border-slate-700/60">${img}</div>
      <div class="min-w-0 flex-1">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-bold leading-snug min-w-0 break-words ${isDone ? "text-white" : "text-slate-500"}">${isDone ? name : (t.questLockedName || "???")}</p>
          ${isDone ? `<span class="text-[10px] font-bold text-emerald-400 shrink-0">${t.questDone || "✓"}</span>` : ""}
        </div>
        ${conds}
      </div>
    </div>`;
  }).join("");
}

/** Stats à afficher dans les modales de fin : même résolution que la ligne
 *  de jeu (base résolue au point d'histoire, variante ré-appliquée par-dessus
 *  — cf. compareValues). Sans ça, une victoire sur alt affiche les stats
 *  actuelles au lieu de celles du filtre Histoire. */
function resolveAnswerForDisplay() {
  const base = (typeof findCharByName === "function" && findCharByName(answer.name)) || answer;
  let resolved = resolveCharacter(base, currentStory);
  if (answer._variantId && typeof findVariantById === "function") {
    const v = findVariantById(answer._variantId);
    if (v) resolved = applyVariant(resolved, v);
  }
  if (answer._isShiny && answer._shinyId && typeof findVariantById === "function") {
    const sh = findVariantById(answer._shinyId);
    if (sh && sh.image) resolved.image = sh.image;
  }
  return resolved;
}

function showVictoryModal() {
  const resolved = resolveAnswerForDisplay();
  if (answer && answer._isShiny) showShinyBanner(answer);
  const modal = document.getElementById("victoryModal");
  document.getElementById("modalWinnerAvatar").innerHTML = avatarHTML(resolved, "w-20 h-20");
  let displayName = resolved.name;
  if (answer._variantDisplay) {
    displayName = answer._variantDisplay[currentLang] || answer._variantDisplay.fr || answer._variantDisplay.en;
  }
  document.getElementById("modalWinnerName").textContent = displayName;
  document.getElementById("modalAttempts").textContent = attemptsCount;
  document.getElementById("modalWinnerAffiliation").textContent =
    isUnknownValue(resolved.affiliation) ? unknownLabel(currentLang) : resolved.affiliation[currentLang];
  document.getElementById("modalWinnerBounty").textContent = formatPrimeDisplay(resolved.prime, currentLang);
  // Display font seulement pour un vrai montant ("Inconnu" reste en typo normale)
  document.getElementById("modalWinnerBounty").classList.toggle("bounty-known", !isPrimeUnknown(resolved.prime));
  document.getElementById("modalWinnerFruit").textContent =
    isUnknownValue(resolved.fruit) ? unknownLabel(currentLang) : formatFruitOrNone(resolved.fruit, currentLang);
  document.getElementById("modalWinnerArc").textContent = getArcDisplayName(resolved.arc);
  const wAgeUnk = resolved.age === null || resolved.age === undefined || resolved.age === 0;
  document.getElementById("modalWinnerAge").textContent = wAgeUnk
    ? unknownLabel(currentLang)
    : resolved.age + " " + TRANSLATIONS[currentLang].yearsOld;
  const wHeightUnk = resolved.height === null || resolved.height === undefined || resolved.height === 0;
  document.getElementById("modalWinnerHeight").textContent = wHeightUnk
    ? unknownLabel(currentLang)
    : resolved.height + " cm";
  let unlockNote = document.getElementById("modalUnlockNote");
  if (!unlockNote) {
    unlockNote = document.createElement("p");
    unlockNote.id = "modalUnlockNote";
    unlockNote.className = "text-xs text-emerald-400 font-semibold";
    const btn = document.getElementById("modalNextBtn");
    if (btn) btn.parentNode.insertBefore(unlockNote, btn);
  }
  if (currentUser) {
    const unlockLabel = answer._variantDisplay
      ? (answer._variantDisplay[currentLang] || answer._variantDisplay.fr || resolved.name)
      : resolved.name;
    unlockNote.textContent = "✨ " + TRANSLATIONS[currentLang].unlockToast + " — " + unlockLabel;
    unlockNote.classList.remove("hidden");
  } else {
    unlockNote.classList.add("hidden");
  }
  // Thème « Jolly Roger » tout juste débloqué (album Barbe Noire complet)
  const themeNote = document.getElementById("modalThemeNote");
  if (themeNote) {
    const tt = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    themeNote.textContent = tt.themeJollyUnlockedNote || "🎨 Nouveau thème débloqué : Jolly Roger";
    themeNote.classList.toggle("hidden", !jollyThemeJustUnlocked);
    jollyThemeJustUnlocked = false;
  }
  if (versusMode && versusWinner >= 0) {
    const vt = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    document.getElementById("modalWinTitle").textContent =
      versusNames[versusWinner] + " " + (vt.versusWin || "gagne !");
  }
  modal.classList.remove("hidden");
}

function showGiveUpModal(isFail = false) {
  if (!isFail && isGameOver) return;
  isGameOver = true;
  if (typeof updateAttemptsUI === "function") updateAttemptsUI(); // réactive « Nouveau »
  if (!isFail) {
    // Abandon avant le premier essai : la série est préservée
    if (attemptsCount > 0) {
      streak = 0;
      localStorage.setItem("opdle_streak", streak);
      persistCurrentUser();
      updateStatsUI();
    }
  }

  document.getElementById("guessInput").disabled = true;

  const resolved = resolveAnswerForDisplay();
  const modal = document.getElementById("giveUpModal");
  document.getElementById("modalGiveUpAvatar").innerHTML = avatarHTML(resolved, "w-20 h-20");
  let giveUpName = resolved.name;
  if (answer._variantDisplay) {
    giveUpName = answer._variantDisplay[currentLang] || answer._variantDisplay.fr || answer._variantDisplay.en || resolved.name;
  }
  document.getElementById("modalGiveUpName").textContent = giveUpName;
  document.getElementById("modalGiveUpAffiliation").textContent =
    isUnknownValue(resolved.affiliation) ? unknownLabel(currentLang) : resolved.affiliation[currentLang];
  document.getElementById("modalGiveUpFruit").textContent =
    isUnknownValue(resolved.fruit) ? unknownLabel(currentLang) : resolved.fruit[currentLang];
  document.getElementById("modalGiveUpBounty").textContent = formatPrimeDisplay(resolved.prime, currentLang);
  document.getElementById("modalGiveUpArc").textContent = getArcDisplayName(resolved.arc);
  const ageUnk = resolved.age === null || resolved.age === undefined || resolved.age === 0;
  document.getElementById("modalGiveUpAge").textContent = ageUnk
    ? unknownLabel(currentLang)
    : resolved.age + " " + TRANSLATIONS[currentLang].yearsOld;
  const hUnk = resolved.height === null || resolved.height === undefined || resolved.height === 0;
  document.getElementById("modalGiveUpHeight").textContent = hUnk
    ? unknownLabel(currentLang)
    : resolved.height + " cm";

  if (isFail) {
    document.getElementById("modalGiveUpTitle").textContent = TRANSLATIONS[currentLang].failTitle;
    document.getElementById("modalGiveUpDesc").textContent = TRANSLATIONS[currentLang].failDesc;
    if (versusMode) {
      // Match nul : personne ne marque, la réponse reste affichée
      document.getElementById("modalGiveUpTitle").textContent = TRANSLATIONS[currentLang].versusDraw || "Match nul !";
      document.getElementById("modalGiveUpDesc").textContent = TRANSLATIONS[currentLang].versusDrawDesc || "";
    }
  } else {
    document.getElementById("modalGiveUpTitle").textContent = TRANSLATIONS[currentLang].giveUpTitle;
    document.getElementById("modalGiveUpDesc").textContent = TRANSLATIONS[currentLang].giveUpDesc;
  }

  modal.classList.remove("hidden");
}

function closeModals() {
  document.getElementById("victoryModal").classList.add("hidden");
  document.getElementById("giveUpModal").classList.add("hidden");
  closeAuthAndProfile();
  closeCollectionModal();
  closeCharacterDetail();
  closeVersusModal();
  if (typeof closeSettingsModal === "function") closeSettingsModal();
}

function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#f59e0b", "#ef4444", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      if (p.life > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.life -= 1;
        p.rotation += p.rSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 100;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

document.getElementById("guessInput").addEventListener("input", handleInput);

document.getElementById("guessInput").addEventListener("keydown", (e) => {
  const menu = document.getElementById("suggestionsMenu");
  const items = menu.querySelectorAll(".suggestion-item");

  if (menu.classList.contains("hidden") || items.length === 0) {
    if (e.key === "Enter") {
      const val = cleanString(document.getElementById("guessInput").value);
      const exactMatch = getAvailableCharacters().find(c => cleanString(c.name) === val || c.aliases.some(a => cleanString(a) === val));
      if (exactMatch) {
        makeGuess(exactMatch);
      }
    }
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedSuggestionIndex = (selectedSuggestionIndex + 1) % items.length;
    highlightSuggestion(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedSuggestionIndex = (selectedSuggestionIndex - 1 + items.length) % items.length;
    highlightSuggestion(items);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < items.length) {
      items[selectedSuggestionIndex].click();
    } else if (items.length > 0) {
      items[0].click();
    }
  } else if (e.key === "Escape") {
    hideSuggestions();
  }
});

// Langue via menu réglages
if (typeof setupSettings === "function") setupSettings();
// (le thème est appliqué en fin de fichier : le thème Jolly Roger dépend de
//  l'album Barbe Noire, dont les données admin sont initialisées plus bas)
document.getElementById("giveUpBtn").addEventListener("click", () => { if (versusMode) versusGiveUp(); else { if (!isGameOver && attemptsCount > 0 && typeof recordGameEnd === "function") recordGameEnd({ win: false, how: "abandon" }); showGiveUpModal(false); } });
document.getElementById("versusBtn")?.addEventListener("click", () => {
  if (!versusMode) { openVersusSetup(); return; }
  // Salon en attente (pas encore de partie) : rouvrir la modale pour
  // revoir le CODE et les réglages — aucune confirmation de quit.
  if (typeof online !== "undefined" && online.chan && !online.started) {
    if (typeof onlineSwitchTab === "function") onlineSwitchTab("online");
    if (typeof updateOnlineUI === "function") updateOnlineUI();
    document.getElementById("versusModal")?.classList.remove("hidden");
    return;
  }
  // En partie (ou local) : le bouton Versus QUITTE la partie,
  // avec confirmation explicite (envoi d'un forfait à l'adversaire).
  const t = TRANSLATIONS[currentLang] || {};
  showConfirmModal({
    icon: "⚔️",
    title: t.versusQuitTitle || (currentLang === "fr" ? "Quitter le versus ?" : "Leave the versus?"),
    desc: t.versusQuitDesc || (currentLang === "fr" ? "La partie en cours se termine et le salon est fermé : l'adversaire remporte la manche par forfait." : "The current game ends and the room closes: your opponent wins the round by forfeit."),
    okLabel: t.versusQuitOk || (currentLang === "fr" ? "Quitter" : "Leave"),
    danger: true
  }).then(yes => { if (yes) endVersus(); });
});
document.getElementById("versusQuitBtn")?.addEventListener("click", () => endVersus());
document.getElementById("versusDrawBtn")?.addEventListener("click", () => versusAskDraw());
document.getElementById("versusStartBtn")?.addEventListener("click", () => startVersusFromModal());
document.querySelectorAll(".versusModalClose").forEach(b => b.addEventListener("click", closeVersusModal));
document.getElementById("newGameBtn").addEventListener("click", requestNewRound);
document.getElementById("profileBtn").addEventListener("click", openProfileModal);
(function bindCollectionUI() {
  const btn = document.getElementById("collectionBtn");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openCollectionModal();
    });
  } else {
    console.warn("[OPDLE] #collectionBtn introuvable");
  }
  document.querySelectorAll(".collectionModalClose").forEach(b => b.addEventListener("click", closeCollectionModal));
  const questBtn = document.getElementById("questsBtn");
  if (questBtn) {
    questBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openQuestsModal();
    });
  }
  document.querySelectorAll(".questsModalClose").forEach(b => b.addEventListener("click", closeQuestsModal));
  const questsModal = document.getElementById("questsModal");
  if (questsModal) {
    questsModal.addEventListener("click", function (e) {
      if (e.target === questsModal) closeQuestsModal();
    });
  }
  const rf = document.getElementById("collectionRarityFilter");
  const af = document.getElementById("collectionAffFilter");
  if (rf) rf.addEventListener("change", renderCollectionGrid);
  if (af) af.addEventListener("change", renderCollectionGrid);
  const cs = document.getElementById("collectionSearch");
  if (cs) {
    cs.addEventListener("input", () => { renderCollectionGrid(); });
  }
  // Interrupteur d'époque de la page Mugiwara (pré-ellipse / post-ellipse)
  const era = document.getElementById("collectionStrawhatEra");
  if (era) {
    era.addEventListener("change", () => {
      updateStrawhatEraToggle();
      renderCollectionGrid();
    });
    updateStrawhatEraToggle();
  }
  setupStoryHelp();
  // click backdrop to close
  const modal = document.getElementById("collectionModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeCollectionModal();
    });
  }
  document.querySelectorAll(".questRewardModalClose").forEach(btn => {
  btn.addEventListener("click", closeQuestRewardModal);
});
document.querySelectorAll(".charDetailModalClose").forEach(b => b.addEventListener("click", closeCharacterDetail));
  const detailModal = document.getElementById("charDetailModal");
  if (detailModal) {
    detailModal.addEventListener("click", function (e) {
      if (e.target === detailModal) closeCharacterDetail();
    });
  }
})();
document.getElementById("authTabLogin").addEventListener("click", () => { authMode = "login"; updateAuthTabs(); document.getElementById("authError").classList.add("hidden"); });
document.getElementById("authTabRegister").addEventListener("click", () => { authMode = "register"; updateAuthTabs(); document.getElementById("authError").classList.add("hidden"); });
document.getElementById("authSubmitBtn").addEventListener("click", handleAuthSubmit);
document.getElementById("authPassword").addEventListener("keydown", (e) => { if (e.key === "Enter") handleAuthSubmit(); });
document.getElementById("authUsername").addEventListener("keydown", (e) => { if (e.key === "Enter") handleAuthSubmit(); });
document.querySelectorAll(".authModalClose").forEach(b => b.addEventListener("click", closeAuthAndProfile));
document.querySelectorAll(".profileModalClose").forEach(b => b.addEventListener("click", closeAuthAndProfile));
document.getElementById("profileCloseBtn").addEventListener("click", closeAuthAndProfile);
document.getElementById("profileLogoutBtn").addEventListener("click", logoutAccount);
function requestNewRound() {
  // Bloqué pendant une partie : « Nouveau » ne doit pas pouvoir remise à zéro
  // un plateau en cours (solo, local OU en ligne — en ligne, ça désynchronise).
  // Le passage à la manche suivante se fait uniquement en fin de manche
  // (modale victoire/nul), où isGameOver = true.
  if (!isGameOver && attemptsCount > 0) {
    showToast((TRANSLATIONS[currentLang] || {}).toastRestartBlocked || (currentLang === "fr" ? "Termine ta partie d'abord 🚫" : "Finish your game first 🚫"));
    return;
  }
  if (typeof online !== "undefined" && online.active && typeof onlineNextRound === "function") { onlineNextRound(); return; }
  startGame();
}
document.getElementById("modalNextBtn").addEventListener("click", requestNewRound);
document.getElementById("modalGiveUpRetryBtn").addEventListener("click", requestNewRound);

document.getElementById("modeSelect").addEventListener("change", (e) => {
  setDifficulty(e.target.value);
});
document.getElementById("storySelect").addEventListener("change", (e) => {
  setStory(e.target.value);
});

document.querySelectorAll(".modalCloseBtn").forEach(btn => {
  btn.addEventListener("click", closeModals);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#guessInput") && !e.target.closest("#suggestionsMenu")) {
    hideSuggestions();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const onboardOpen = !document.getElementById("onboardingModal")?.classList.contains("hidden");
    if (onboardOpen) {
      closeOnboarding(true);
      return;
    }
    const detailOpen = !document.getElementById("charDetailModal")?.classList.contains("hidden");
    if (detailOpen) {
      closeCharacterDetail();
      return;
    }
    const collectionOpen = !document.getElementById("collectionModal")?.classList.contains("hidden");
    if (collectionOpen) {
      closeCollectionModal();
      return;
    }
    const victoryOpen = !document.getElementById("victoryModal").classList.contains("hidden");
    const giveUpOpen = !document.getElementById("giveUpModal").classList.contains("hidden");
    if (victoryOpen || giveUpOpen) {
      closeModals();
    }
  }
});

/* Migration unique (v1) : la quête « Marche vers Arlong Park » comptait avant les
 * personnages TIRÉS. On retire seulement sa carte de quête (nami_walk) pour que
 * la nouvelle règle (personnages possédés) s'applique. Les personnages/forms
 * possédés ne sont PAS touchés : syncGearUnlocksFromWins revalide aussitôt la
 * quête pour ceux qui ont déjà tout (ou laisse la progression partielle). */
const ARLONG_RESET_KEY = "opdle_quest_arlong_reset_v1";
function migrateArlongQuestReset() {
  try { if (localStorage.getItem(ARLONG_RESET_KEY) === "1") return; } catch (e) { return; }
  try {
    let local = JSON.parse(localStorage.getItem("opdle_unlocked") || "[]");
    if (Array.isArray(local) && local.includes("nami_walk")) {
      local = local.filter(x => x !== "nami_walk");
      localStorage.setItem("opdle_unlocked", JSON.stringify(local));
    }
  } catch (e) {}
  if (typeof currentUser !== "undefined" && currentUser && Array.isArray(currentUser.unlocked) &&
      currentUser.unlocked.includes("nami_walk")) {
    currentUser.unlocked = currentUser.unlocked.filter(x => x !== "nami_walk");
    if (typeof persistCurrentUser === "function") persistCurrentUser();
  }
  try { localStorage.setItem(ARLONG_RESET_KEY, "1"); } catch (e) {}
}

function syncGearUnlocksFromWins() {
  if (typeof CHARACTER_VARIANTS === "undefined") return;
  CHARACTER_VARIANTS.forEach(v => {
    if (v.unlock && isVariantUnlocked(v)) unlockCharacter(v.id);
  });
  // Quêtes portées par des cartes bases (navires Merry/Sunny)
  if (typeof CHARACTERS !== "undefined") {
    CHARACTERS.forEach(c => {
      if (c.unlock && c.questName && isVariantUnlocked(c)) unlockCharacter(c.name);
    });
  }
}

(async () => {
  await loadSession();
  if (typeof migrateUnlockIds === "function") migrateUnlockIds();
  if (typeof migrateArlongQuestReset === "function") migrateArlongQuestReset();
  syncGearUnlocksFromWins();
  updateLanguageUI();
  updateProfileUI();
  startGame();
  setupOnboarding();
  maybeShowOnboarding();
  const onboardHelpBtn = document.getElementById("onboardHelpBtn");
  if (onboardHelpBtn) {
    onboardHelpBtn.addEventListener("click", () => openOnboarding());
  }
  if (typeof setupAdminBar === "function") setupAdminBar();
  if (typeof updateAdminUI === "function") updateAdminUI();
  // RaretésOverridées par l'admin : appliquées APRÈS applyRarityToCharacters
  if (typeof applyAdminRarityOverrides === "function") applyAdminRarityOverrides();
})();





/* ========== Mode admin (tests) ========== */
const ADMIN_KEY = "opdle_admin";
const PICK_STATS_KEY = "opdle_pick_stats";
const ADMIN_UNLOCK_KEY = "opdle_admin_unlocked";
const ADMIN_SANDBOX_KEY = "opdle_admin_sandbox"; // "1" = test sandbox, "0" = vraies données joueur
const ADMIN_ACTIVE_KEY = "opdle_admin_active"; // "0" = mode joueur (barre off, nouveau tirage)

function isAdmin() { return false; /* version publique : mode admin désactivé */ }

function isAdminSandbox() {
  try {
    const v = localStorage.getItem(ADMIN_SANDBOX_KEY);
    return v !== "0"; // défaut: sandbox ON pour ne pas écraser le joueur
  } catch (e) { return true; }
}

function isAdminActive() {
  try {
    return localStorage.getItem(ADMIN_ACTIVE_KEY) !== "0";
  } catch (e) { return true; }
}

function setAdminActive(on) {
  try { localStorage.setItem(ADMIN_ACTIVE_KEY, on ? "1" : "0"); } catch (e) {}
  const bar = document.getElementById("adminBar");
  const show = document.getElementById("adminShowBtn");
  if (!on) {
    if (bar) {
      bar.dataset.userHidden = "1";
      bar.classList.add("hidden");
      bar.style.display = "none";
    }
    if (show) {
      show.classList.remove("hidden");
      show.textContent = currentLang === "fr" ? "ADMIN" : "ADMIN";
    }
    // Nouvelle partie pure joueur (nouveau mystère, sans forçage)
    if (typeof startGame === "function") startGame();
    showToast(currentLang === "fr"
      ? "Mode joueur — admin désactivé, nouveau mystère"
      : "Player mode — admin off, new mystery");
  } else {
    if (bar) {
      bar.dataset.userHidden = "0";
      bar.classList.remove("hidden");
      bar.style.display = "flex";
    }
    if (show) show.classList.add("hidden");
    showToast(currentLang === "fr" ? "Mode admin réactivé" : "Admin mode back");
  }
  updateAdminUI();
}


function setAdminSandbox(on) {
  try { localStorage.setItem(ADMIN_SANDBOX_KEY, on ? "1" : "0"); } catch (e) {}
  updateAdminUI();
  updateProfileUI();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  showToast(on
    ? (currentLang === "fr" ? "Mode test admin (données isolées)" : "Admin test sandbox")
    : (currentLang === "fr" ? "Mode joueur (vraies données)" : "Player mode (real data)"));
}

function enableOpdleAdmin() { updateAdminUI(); return true; }
function disableOpdleAdmin() {
  const bar = document.getElementById("adminBar");
  if (bar) { bar.classList.add("hidden"); bar.style.display = "none"; }
  const show = document.getElementById("adminShowBtn");
  if (show) show.classList.remove("hidden");
  return false;
}
try {
  window.enableOpdleAdmin = enableOpdleAdmin;
  window.disableOpdleAdmin = disableOpdleAdmin;
} catch (e) {}

/** getUnlockedNames patch: sandbox admin isolé */
const _getUnlockedNamesPlayer = typeof getUnlockedNames === "function" ? null : null;

function getAdminUnlocked() {
  try { return JSON.parse(localStorage.getItem(ADMIN_UNLOCK_KEY) || "[]"); } catch (e) { return []; }
}
function setAdminUnlocked(arr) {
  try { localStorage.setItem(ADMIN_UNLOCK_KEY, JSON.stringify(arr)); } catch (e) {}
}

// Redéfinir getUnlockedNames pour respecter le sandbox (après définition originale — on override)
function getUnlockedNames() {
  if (isAdmin() && isAdminSandbox()) {
    return getAdminUnlocked().slice();
  }
  const local = typeof readLocalUnlocked === "function" ? readLocalUnlocked() : (() => { try { return JSON.parse(localStorage.getItem("opdle_unlocked") || "[]"); } catch (e) { return []; } })();
  if (currentUser && Array.isArray(currentUser.unlocked)) {
    return typeof mergeUnlocked === "function" ? mergeUnlocked(currentUser.unlocked, local) : local.slice();
  }
  return local.slice();
}

function unlockCharacter(name) {
  if (isAdmin() && isAdminSandbox()) {
    const arr = getAdminUnlocked();
    if (!arr.includes(name)) {
      arr.push(name);
      setAdminUnlocked(arr);
      return true;
    }
    return false;
  }
  let local = [];
  try { local = JSON.parse(localStorage.getItem("opdle_unlocked") || "[]"); } catch (e) { local = []; }
  let changed = false;
  if (!local.includes(name)) {
    local.push(name);
    localStorage.setItem("opdle_unlocked", JSON.stringify(local));
    changed = true;
  }
  if (currentUser) {
    if (!currentUser.unlocked) currentUser.unlocked = [];
    if (!currentUser.unlocked.includes(name)) {
      currentUser.unlocked.push(name);
      persistCurrentUser();
      changed = true;
    }
  }
  return changed;
}

function pickStatKey(char) {
  if (!char) return "?";
  // shiny empilé sur une forme forcée : compte la combo comme une stat à part
  if (char._shinyId) return char._variantId + "+" + char._shinyId;
  if (char._variantId) return char._variantId;
  return char.name;
}

function loadPickStats() {
  try { return JSON.parse(localStorage.getItem(PICK_STATS_KEY) || "{}"); } catch (e) { return {}; }
}
function savePickStats(obj) {
  try { localStorage.setItem(PICK_STATS_KEY, JSON.stringify(obj)); } catch (e) {}
}
function recordMysteryPick(char) {
  const key = pickStatKey(char);
  const stats = loadPickStats();
  stats[key] = (stats[key] || 0) + 1;
  stats._total = (stats._total || 0) + 1;
  if (char && char._isShiny) stats._shiny = (stats._shiny || 0) + 1;
  savePickStats(stats);
}

/* ========== Historique des parties (Réglages → Mes statistiques) ==========
 * Une entrée par manche terminée (solo + versus). Local uniquement.
 * {t,w,draw,a,v,s,d,st,at,vs,wn,how} — voir recordGameEnd. */
const GAME_HISTORY_KEY = "opdle_history_v1";
const BEST_STREAK_KEY = "opdle_best_streak";
const GAMES_TOTAL_KEY = "opdle_games_total";
/* Compteurs de quêtes conditionnels (voir recordGameEnd) */
const Q_W7MHE_KEY = "opdle_q_w7mhe";
const Q_DRHE_KEY = "opdle_q_drhe";
const Q_WCHE_KEY = "opdle_q_wche";
const Q_WANOEX_KEY = "opdle_q_wanoex";
const Q_EBEX_KEY = "opdle_q_ebex";
const Q_FIRSTTRY_KEY = "opdle_q_firsttry";
const Q_STREAK_KEY = "opdle_q_streak";
const Q_BEST_KEY = "opdle_q_best";
function qGet(k) {
  try { return parseInt(localStorage.getItem(k) || "0", 10) || 0; } catch (e) { return 0; }
}
function qBump(k, x) {
  try { localStorage.setItem(k, String(qGet(k) + x)); } catch (e) {}
}
const HISTORY_MAX = 50;
let roundRecorded = false;
// Partie forcée via l'admin (mystère imposé) : exclue des stats/historique.
let roundForced = false;
// Versus en ligne : l'enregistrement du mystère est fait quand la réponse est connue.
let deferPickRecord = false;

function loadGameHistory() {
  try {
    const a = JSON.parse(localStorage.getItem(GAME_HISTORY_KEY) || "[]");
    return Array.isArray(a) ? a : [];
  } catch (e) { return []; }
}
function saveGameHistory(h) {
  try { localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify((h || []).slice(0, HISTORY_MAX))); } catch (e) {}
}
/* Historique des matchs versus (score final), séparé de l'historique des manches. */
const VERSUS_MATCH_KEY = "opdle_versus_matches_v1";
const VERSUS_MATCH_MAX = 50;
function loadVersusMatches() {
  try { return JSON.parse(localStorage.getItem(VERSUS_MATCH_KEY) || "[]"); } catch (e) { return []; }
}
/** Sauvegarde le score final du match en cours (appelé à la fin du versus). */
function recordVersusMatch() {
  if (!versusMode || !Array.isArray(versusNames) || versusRound <= 1) return;
  const m = loadVersusMatches();
  m.unshift({
    t: Date.now(),
    names: [versusNames[0], versusNames[1]],
    scores: [versusScores[0], versusScores[1]],
    rounds: versusRound - 1,
    st: currentStory,
    d: currentDifficulty,
    on: (typeof online !== "undefined" && online.active) ? 1 : 0
  });
  try { localStorage.setItem(VERSUS_MATCH_KEY, JSON.stringify(m.slice(0, VERSUS_MATCH_MAX))); } catch (e) {}
}

/** Enregistre la fin de manche en cours (une seule fois par manche).
 *  res: { win, draw, how: "guess"|"fail"|"forfeit"|"draw"|"abandon", winner } */
function recordGameEnd(res) {
  if (roundRecorded) return;
  roundRecorded = true;
  if (roundForced) return;
  res = res || {};
  let entry = null;
  try {
    const a = (typeof answer !== "undefined" && answer) ? answer : null;
    entry = {
      t: Date.now(),
      w: res.draw ? 0 : (res.win ? 1 : 0),
      draw: res.draw ? 1 : 0,
      a: a ? a.name : null,
      v: (a && a._variantId) || null,
      s: (a && a._isShiny) ? 1 : 0,
      d: (typeof currentDifficulty !== "undefined" ? currentDifficulty : "medium"),
      st: (typeof currentStory !== "undefined" ? currentStory : "all"),
      at: (typeof attemptsCount === "number" ? attemptsCount : 0),
      vs: (typeof versusMode !== "undefined" && versusMode) ? 1 : 0,
      wn: res.winner || null,
      how: res.how || "guess"
    };
  } catch (e) { return; }
  const h = loadGameHistory();
  h.unshift(entry);
  saveGameHistory(h);
  gamesTotal++;
  try { localStorage.setItem(GAMES_TOTAL_KEY, String(gamesTotal)); } catch (e) {}
  if (entry.w && typeof streak === "number" && streak > bestStreak) {
    bestStreak = streak;
    try { localStorage.setItem(BEST_STREAK_KEY, String(bestStreak)); } catch (e) {}
    if (typeof currentUser !== "undefined" && currentUser) currentUser.bestStreak = bestStreak;
  }
  // Compteurs de quêtes conditionnels (cumulatifs ; remis à zéro par le reset progression)
  try {
    const d = entry.d, si = storyIndex(entry.st);
    const iW7 = storyIndex("water7"), iDR = storyIndex("dressrosa"),
      iWC = storyIndex("wholecake"), iWano = storyIndex("wano");
    const mhe = (d === "medium" || d === "hard" || d === "extreme");
    const he = (d === "hard" || d === "extreme");
    if (entry.w && !entry.draw) {
      if (si >= iW7 && mhe) qBump(Q_W7MHE_KEY, 1);
      if (si >= iDR && he) qBump(Q_DRHE_KEY, 1);
      if (si >= iWC && he) qBump(Q_WCHE_KEY, 1);
      if (si >= iWano && d === "extreme") qBump(Q_WANOEX_KEY, 1);
      if (entry.st === "eastblue" && d === "extreme") qBump(Q_EBEX_KEY, 1);
      if (entry.at <= 1 && si >= iW7) qBump(Q_FIRSTTRY_KEY, 1); // snipe du 1er coup
      // Série « Je veux vivre » : victoires à Water 7 en Difficile/Extrême, sans défaite entre
      if (entry.st === "water7" && he) {
        const s = qGet(Q_STREAK_KEY) + 1;
        try { localStorage.setItem(Q_STREAK_KEY, String(s)); } catch (e) {}
        if (s > qGet(Q_BEST_KEY)) { try { localStorage.setItem(Q_BEST_KEY, String(s)); } catch (e) {} }
      } else {
        try { localStorage.setItem(Q_STREAK_KEY, "0"); } catch (e) {}
      }
    } else if (!entry.draw) {
      // défaite / forfait / abandon : la série casse (le nul versus, lui, ne casse pas)
      try { localStorage.setItem(Q_STREAK_KEY, "0"); } catch (e) {}
    }
  } catch (e) {}
}

/** Remet à zéro TOUTE la progression des quêtes.
 *
 *  Point d'attention : isVariantUnlocked() RECALCULE en permanence certains
 *  déblocs à partir de l'état actuel du compte — notamment
 *  `collectionComplete` (Sunny, Big Mom Rocks, Kaido mi-dragon, via
 *  isCategoryCollectionComplete) et `hasVariants` (Merry, via getUnlockedNames).
 *  Retirer simplement l'id de la carte de `opdle_unlocked` ne suffirait donc
 *  pas : la carte serait re-débloquée au rendu suivant tant que ses conditions
 *  restent vraies. On zéroe donc AUSSI ces conditions :
 *   - les 4 cartes obtenues par complétion d'album, puisqu'il faut vider ces
 *     pages de l'album pour qu'elles se re-verrouillent ;
 *   - Merry, dont la condition (équipage pré-ellipse au complet) est dérivée
 *     des mêmes débloquages.
 *  Les autres quêtes (victoires, séries, tirages) reposent sur des compteurs
 *  ou des stats de tirage déjà remises à zéro ci-dessus.
 *  Utilisée par le bouton admin « Reset quêtes », par le reset de progression
 *  et par la suppression de compte — les trois restent donc alignés. */
const Q_COUNTER_KEYS = [Q_W7MHE_KEY, Q_DRHE_KEY, Q_WCHE_KEY, Q_WANOEX_KEY, Q_EBEX_KEY, Q_FIRSTTRY_KEY, Q_STREAK_KEY, Q_BEST_KEY];
function resetQuestProgressAll() {
  // Compteurs cumulatifs de victoires / séries
  for (const k of Q_COUNTER_KEYS) {
    try { localStorage.setItem(k, "0"); } catch (e) {}
  }
  // Historique de parties : source de vérité qui ferait REMONTER les quêtes
  try { localStorage.removeItem(GAME_HISTORY_KEY); } catch (e) {}
  try { localStorage.removeItem(VERSUS_MATCH_KEY); } catch (e) {}
  // Stats de tirage : pilote la quête « La Marche » (u.drawn)
  try { localStorage.removeItem(PICK_STATS_KEY); } catch (e) {}
  // Compteur brut « parties jouées » (utilisé par certaines quêtes)
  try { localStorage.setItem(GAMES_TOTAL_KEY, "0"); gamesTotal = 0; } catch (e) {}
  // Compteurs cumulatifs de victoires (quêtes u.wins / u.hardExtremeWins / u.extremeWins)
  wins = 0;
  hardExtremeWins = 0;
  extremeWins = 0;
  try {
    localStorage.setItem("opdle_wins", "0");
    localStorage.setItem("opdle_hard_extreme_wins", "0");
    localStorage.setItem("opdle_extreme_wins", "0");
  } catch (e) {}
  if (currentUser) {
    currentUser.wins = 0;
    if (typeof persistCurrentUser === "function") persistCurrentUser();
  }
  // syncCollectionRewards ne retire JAMAIS un déblocage : il faut donc retirer
  // manuellement les cartes de quête déjà débloquées, sinon Sunny / Merry /
  // Big Mom Rocks / Kaido mi-dragon resteraient acquises malgré le reset.
  try {
    const quests = CHARACTER_VARIANTS.filter(v => v.unlock && v.collectionOnly);
    // 1) Les ids des cartes de quête elles-mêmes + cartes bases portant une quête (navires)
    const questIds = quests.map(v => v.id)
      .concat((typeof CHARACTERS !== "undefined" ? CHARACTERS : []).filter(c => c.unlock && c.questName).map(c => c.name));
    // 2) Les membres des pages d'album dont dépend une quête collectionComplete
    //    (+ Merry, dont la condition est dérivée des mêmes débloquages).
    //    Sans ça, isCategoryCollectionComplete resterait vrai et la carte
    //    serait re-débloquée au rendu suivant.
    const derived = new Set();
    quests.forEach(v => {
      const catId = v.unlock && v.unlock.collectionComplete;
      if (catId && typeof COLLECTION_CATEGORIES !== "undefined") {
        const cat = COLLECTION_CATEGORIES.find(c => c.id === catId);
        if (cat && Array.isArray(cat.members)) cat.members.forEach(m => derived.add(m));
      }
      if (Array.isArray(v.unlock && v.unlock.hasVariants)) v.unlock.hasVariants.forEach(m => derived.add(m));
    });
    const strip = arr => (Array.isArray(arr) ? arr.filter(k => !questIds.includes(k) && !derived.has(k)) : arr);
    // localStorage (compte joueur / invité)
    const local = strip(JSON.parse(localStorage.getItem("opdle_unlocked") || "[]"));
    localStorage.setItem("opdle_unlocked", JSON.stringify(local));
    // Sandbox admin : on réécrit le même ensemble filtré (opdle_admin_unlocked
    // est vidé puis repeuplé par getUnlockedNames()/unlockCharacter côté sandbox)
    if (isAdmin() && isAdminSandbox()) setAdminUnlocked(strip(getAdminUnlocked()));
    if (currentUser) currentUser.unlocked = strip(currentUser.unlocked || []);
  } catch (e) {}
}

function adminResetQuests() {
  if (!isAdminSandbox()) {
    if (!confirm(currentLang === "fr"
      ? "Mode JOUEUR actif : cela effacera ta progression des quêtes. Continuer ?"
      : "PLAYER mode: this will erase your quest progress. Continue?")) return;
  }
  resetQuestProgressAll();
  if (typeof updateStatsUI === "function") updateStatsUI();
  if (typeof updateProfileUI === "function") updateProfileUI();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  showToast(currentLang === "fr" ? "Progression des quêtes remise à zéro" : "Quest progress reset");
}

/** Complète TOUTES les quêtes d'un coup (bouton admin « Compléter quêtes »).
 *
 *  Une quête est « faite » dès que son id figure dans la liste des débloqués
 *  (cf. renderQuestsList → isDone), mais ses barres de progression se
 *  recalculent en direct : on remplit donc AUSSI les compteurs de victoires /
 *  de séries (opdle_wins* et Q_COUNTER_KEYS), les cibles « déjà tirées »
 *  (PICK_STATS_KEY) et on débloque persos + variantes pour satisfaire les
 *  conditions `hasCharacters`, `hasVariants` et `collectionComplete` (albums).
 *  Sans ces étapes la quête serait cochée ✓ mais afficherait 0 / N. */
function adminCompleteAllQuests() {
  if (!isAdminSandbox()) {
    if (!confirm(currentLang === "fr"
      ? "Mode JOUEUR actif : cela remplira ta progression (victoires, séries, albums) pour compléter toutes les quêtes. Continuer ?"
      : "PLAYER mode: this will fill your progress to complete every quest. Continue?")) return;
  }
  // 1) Compteurs cumulatifs : au-dessus du plus grand besoin de quête (300)
  const BIG = 300;
  const setNum = (k, v) => { try { localStorage.setItem(k, String(v)); } catch (e) {} };
  wins = BIG; hardExtremeWins = BIG; extremeWins = BIG;
  setNum("opdle_wins", BIG);
  setNum("opdle_hard_extreme_wins", BIG);
  setNum("opdle_extreme_wins", BIG);
  for (const k of Q_COUNTER_KEYS) setNum(k, BIG);
  if (currentUser) {
    currentUser.wins = BIG;
    if (typeof persistCurrentUser === "function") persistCurrentUser();
  }
  // 2) « Mystères déjà tirés » (quête de la Marche) : chaque cible comptée ≥ 1
  try {
    const stats = JSON.parse(localStorage.getItem(PICK_STATS_KEY) || "{}");
    let touched = false;
    CHARACTER_VARIANTS.forEach(v => {
      if (v.unlock && Array.isArray(v.unlock.drawn)) {
        v.unlock.drawn.forEach(k => {
          if ((Number(stats[k]) || 0) < 1) { stats[k] = 1; touched = true; }
        });
      }
    });
    if (touched) localStorage.setItem(PICK_STATS_KEY, JSON.stringify(stats));
  } catch (e) {}
  // 3) Persos + variantes débloqués : albums et « formes / personnages possédés » au complet
  const keys = new Set();
  if (typeof CHARACTERS !== "undefined") CHARACTERS.forEach(c => keys.add(c.name));
  if (typeof CHARACTER_VARIANTS !== "undefined") CHARACTER_VARIANTS.forEach(v => keys.add(v.id));
  const arr = [...keys];
  if (isAdminSandbox()) {
    setAdminUnlocked(arr);
  } else {
    try { localStorage.setItem("opdle_unlocked", JSON.stringify(arr)); } catch (e) {}
    if (currentUser) {
      currentUser.unlocked = arr.slice();
      persistCurrentUser();
    }
  }
  showToast(currentLang === "fr"
    ? `Toutes les quêtes complétées (${arr.length} cartes débloquées)`
    : `All quests completed (${arr.length} cards unlocked)`);
  if (typeof updateStatsUI === "function") updateStatsUI();
  if (typeof updateProfileUI === "function") updateProfileUI();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  if (typeof renderQuestsList === "function") renderQuestsList();
}

function adminUnlockAll() {
  if (!isAdminSandbox()) {
    if (!confirm(currentLang === "fr"
      ? "Mode JOUEUR actif : cela modifiera ta vraie progression. Continuer ?"
      : "PLAYER mode: this will modify real progress. Continue?")) return;
  }
  const keys = new Set();
  if (typeof CHARACTERS !== "undefined") CHARACTERS.forEach(c => keys.add(c.name));
  if (typeof CHARACTER_VARIANTS !== "undefined") CHARACTER_VARIANTS.forEach(v => keys.add(v.id));
  const arr = [...keys];
  if (isAdminSandbox()) {
    setAdminUnlocked(arr);
  } else {
    try { localStorage.setItem("opdle_unlocked", JSON.stringify(arr)); } catch (e) {}
    if (currentUser) {
      currentUser.unlocked = arr.slice();
      persistCurrentUser();
    }
  }
  showToast(currentLang === "fr" ? `Débloqué : ${arr.length}` : `Unlocked: ${arr.length}`);
  updateProfileUI();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
}

function adminClearAll() {
  if (!isAdminSandbox()) {
    if (!confirm(currentLang === "fr"
      ? "Mode JOUEUR : vider ta vraie progression ?"
      : "PLAYER mode: clear real progress?")) return;
  } else if (!confirm(currentLang === "fr" ? "Vider le sandbox admin ?" : "Clear admin sandbox?")) {
    return;
  }
  if (isAdminSandbox()) {
    setAdminUnlocked([]);
  } else {
    try { localStorage.setItem("opdle_unlocked", "[]"); localStorage.removeItem("opdle_avatar"); } catch (e) {}
    if (currentUser) {
      currentUser.unlocked = [];
      currentUser.avatar = null;
      persistCurrentUser();
    }
  }
  showToast(currentLang === "fr" ? "Déblocages vidés" : "Unlocks cleared");
  updateProfileUI();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
}

function adminRevealAnswer() {
  if (!answer) { showToast("—"); return; }
  let name = answer.name;
  if (answer._variantDisplay) name = answer._variantDisplay[currentLang] || answer._variantDisplay.fr || name;
  const stats = loadPickStats();
  const key = pickStatKey(answer);
  const n = stats[key] || 0;
  const total = stats._total || 0;
  const shinyN = stats._shiny || 0;
  const pct = total ? ((100 * n) / total).toFixed(1) : "0";
  const shinyPct = total ? ((100 * shinyN) / total).toFixed(1) : "0";
  showToast(`🎯 ${name}${answer._isShiny ? " ✦" : ""} · ${n}/${total} (${pct}%) · shiny global ${shinyPct}%`);
  if (typeof isAdmin === "function" && isAdmin()) console.log("[OPDLE admin]", answer);
}

function resolveAdminMysteryQuery(qRaw, forceShiny, forceAltId, forceAlt) {
  const q = cleanString(qRaw);
  if (!q && !forceAltId) return null;
  const pool = typeof getAvailableCharacters === "function" ? getAvailableCharacters() : CHARACTERS;

  let match = null;
  if (q) {
    match = pool.find(c => cleanString(c.name) === q || (c.aliases || []).some(a => cleanString(a) === q));
    if (!match) match = pool.find(c => cleanString(c.name).includes(q) || (c.aliases || []).some(a => cleanString(a).includes(q)));
  }

  let variant = null;
  if (typeof CHARACTER_VARIANTS !== "undefined" && q) {
    variant = CHARACTER_VARIANTS.find(v =>
      cleanString(v.id) === q ||
      cleanString(v.displayName?.fr || "") === q ||
      cleanString(v.displayName?.en || "") === q ||
      (v.aliases || []).some(a => cleanString(a) === q)
    );
  }

  // Forcer un alt précis (plusieurs alts possibles)
  if (forceAltId) {
    const v = (typeof findVariantById === "function" ? findVariantById(forceAltId) : null)
      || (CHARACTER_VARIANTS || []).find(x => x.id === forceAltId);
    if (v) {
      const base = findCharByName(v.baseName) || match;
      if (base) return applyVariant(base, v);
    }
    showToast(currentLang === "fr" ? "Alt introuvable" : "Alt not found");
    return null;
  }

  if (forceShiny && match) {
    const all = (CHARACTER_VARIANTS || []).filter(v =>
      v.baseName === match.name && isVariantShiny(v) && !v.collectionOnly
    );
    // Préfère une shiny dispo au point d'histoire actuel (arcs imposés),
    // sinon retombe sur toutes (outil de test admin).
    const atStory = all.filter(v => {
      try { return isVariantAvailable(v, currentStory); } catch (e) { return true; }
    });
    const shinies = atStory.length ? atStory : all;
    if (shinies.length) {
      return applyVariant(match, shinies[0]);
    }
    showToast(currentLang === "fr" ? "Pas de shiny pour ce perso" : "No shiny for this character");
    return applyVariant(match, { id: match.name + "_force_shiny", baseName: match.name, isShiny: true, displayName: { fr: match.name + " ✦", en: match.name + " ✦" }, overrides: {} });
  }

  // Variante nommée par le texte : seulement si la case alt est cochée
  // (sinon taper "Sabo" — alias de sabo_young — forcerait l'alt sans prévenir).
  if (variant && forceAlt) {
    const base = findCharByName(variant.baseName);
    if (base) return applyVariant(base, variant);
  }
  return match || null;
}

function adminSetMysteryFromInput() {
  const input = document.getElementById("adminMysteryInput");
  const shinyChk = document.getElementById("adminForceShiny");
  const altChk = document.getElementById("adminForceAlt");
  const altSel = document.getElementById("adminAltSelect");
  if (!input) return;
  const forceShiny = !!(shinyChk && shinyChk.checked);
  const forceAlt = !!(altChk && altChk.checked);
  const forceAltId = forceAlt && altSel && altSel.value ? altSel.value : null;
  if (forceShiny && forceAlt) {
    showToast(currentLang === "fr" ? "Choisis shiny OU alt, pas les deux" : "Pick shiny OR alt, not both");
    return;
  }
  const match = resolveAdminMysteryQuery(input.value, forceShiny, forceAltId, forceAlt);
  if (!match) {
    showToast(currentLang === "fr" ? "Introuvable (filtre Histoire ?) — nouveau tirage" : "Not found (Story filter?) — new draw");
    startGame();
    return;
  }
  answer = match;
  answer = forceOnlyAsVariantIfNeeded(answer, currentStory);
  const vid = answer._variantId;
  const baseAnswer = findCharByName(answer.name) || answer;
  answer = resolveCharacter(baseAnswer, currentStory);
  if (vid) {
    const vv = findVariantById(vid);
    if (vv) answer = applyVariant(answer, vv);
  } else if (forceShiny && match._isShiny) {
    answer = match;
  }
  if (forceShiny) answer._isShiny = true;

  guessedNames.clear();
  currentGuessesList = [];
  attemptsCount = 0;
  isGameOver = false;
  roundRecorded = false;
  roundForced = true;
  document.getElementById("results").innerHTML = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
  updateAttemptsUI();
  hideShinyBanner();
  recordMysteryPick(answer);
  if (answer._isShiny) showShinyBanner(answer);
  let label = answer.name;
  if (answer._variantDisplay) label = answer._variantDisplay[currentLang] || answer._variantDisplay.fr || label;
  const mark = answer._isShiny ? " ✦" : (answer._variantId ? " ◇" : "");
  showToast((currentLang === "fr" ? "Mystère : " : "Mystery: ") + label + mark);
}

function adminRefreshAltSelect() {
  const input = document.getElementById("adminMysteryInput");
  const sel = document.getElementById("adminAltSelect");
  const altChk = document.getElementById("adminForceAlt");
  if (!sel) return;
  const q = input ? cleanString(input.value) : "";
  let match = null;
  if (q) {
    const pool = typeof getAvailableCharacters === "function" ? getAvailableCharacters() : CHARACTERS;
    match = pool.find(c => cleanString(c.name) === q || (c.aliases || []).some(a => cleanString(a) === q));
    if (!match) match = pool.find(c => cleanString(c.name).includes(q) || (c.aliases || []).some(a => cleanString(a).includes(q)));
  }
  // Toutes les versions du perso : alts ◇ ET shinies ✦ (avant, seuls les alts
  // étaient listés — impossible de forcer une shiny précise, le bouton « shiny »
  // n'en prenait qu'au hasard parmi celles disponibles).
  const versions = match
    ? (CHARACTER_VARIANTS || []).filter(v =>
        v.baseName === match.name && !v.collectionOnly)
    : [];
  const isShinyVar = v => isVariantShiny(v);
  versions.sort((a, b) => (isShinyVar(a) === isShinyVar(b) ? 0 : (isShinyVar(a) ? 1 : -1)));
  const prev = sel.value;
  sel.innerHTML = `<option value="">${currentLang === "fr" ? "— choisir une version —" : "— pick a version —"}</option>` +
    versions.map(v => {
      const lab = (v.displayName && (v.displayName[currentLang] || v.displayName.fr)) || v.id;
      const mark = isShinyVar(v) ? "✦ " : "◇ ";
      return `<option value="${v.id}">${mark}${lab} (${v.id})</option>`;
    }).join("");
  if (prev && [...sel.options].some(o => o.value === prev)) sel.value = prev;
  const show = !!(altChk && altChk.checked && versions.length);
  sel.classList.toggle("hidden", !show);
  if (altChk && altChk.checked && !versions.length && match) {
    showToast(currentLang === "fr" ? "Pas d'alt ni de shiny pour ce perso" : "No alt or shiny for this character");
  }
}


function theoreticalPickShare(charName) {
  const pool = getAvailableCharacters();
  if (!pool.length) return 0;
  const weights = pool.map(c => getDrawWeight(c, currentDifficulty));
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  const idx = pool.findIndex(c => c.name === charName);
  if (idx < 0) return 0;
  return weights[idx] / total;
}

/** Odds de forme (base / alt / shiny) pour un perso, même logique que pickRandomCharacter. */
function computeFormOdds(baseName, difficulty, storyId) {
  const diff = difficulty || currentDifficulty;
  const sid = storyId || currentStory;
  const odds = FORM_ODDS[diff] || FORM_ODDS.medium;
  const variants = typeof getVariantsForBase === "function"
    ? getVariantsForBase(baseName, sid)
    : [];
  // Actuel : aucune forme forcée (elles deviennent des alts probabilistes).
  const onlyVariants = sid === "all" ? [] : variants.filter(v => isOnlyAsVariant(v));
  if (onlyVariants.length > 0) {
    // Comme dans pickRandomCharacter, un shiny peut s'empiler sur la forme
    // forcée : la proba shiny réelle n'est pas nulle dans ce cas.
    const forcedShinies = variants.filter(v => isVariantShiny(v) && !v.unlock && !isOnlyAsVariant(v));
    const stackShiny = forcedShinies.length ? odds.shiny : 0;
    // Une forme forcée elle-même shiny (override) sort shiny à 100 % de sa part.
    const forcedShinyPart = onlyVariants.filter(v => isVariantShiny(v)).length / onlyVariants.length;
    const pShiny = Math.max(forcedShinyPart, (1 - forcedShinyPart) * stackShiny);
    return {
      onlyAsVariant: true,
      pBase: 0, pAlt: 1 - pShiny, pShiny,
      alts: onlyVariants, shinies: forcedShinies
    };
  }
  const alts = variants.filter(v => !isVariantShiny(v) && !v.unlock);
  const shinies = variants.filter(v => isVariantShiny(v) && !v.unlock);
  // Même règle que rollForm : excludesBase jamais en mode Actuel.
  const noBase = sid !== "all" && alts.length > 0 && alts.some(v => v.excludesBase);
  // Même modulation de rareté que rollForm : l'affichage doit coller au réel.
  let pAlt = alts.length ? odds.alt * formBucketMult(alts) : 0;
  let pShiny = shinies.length ? odds.shiny * formBucketMult(shinies) : 0;
  // Même boost + plafond que rollForm : l'affichage doit coller au réel.
  ({ pAlt, pShiny } = applyFormGate(pAlt, pShiny, noBase));
  if (noBase) pAlt += Math.max(0, 1 - (pAlt + pShiny));
  return {
    onlyAsVariant: false,
    pBase: noBase ? 0 : Math.max(0, 1 - pAlt - pShiny),
    pAlt, pShiny,
    alts, shinies
  };
}

function openAdminStats() {
  const modal = document.getElementById("adminStatsModal");
  if (!modal) return;
  const lang = currentLang;
  const fr = lang === "fr";
  const diffs = ["easy", "medium", "hard", "extreme"];
  const diffLabels = fr
    ? { easy: "Facile", medium: "Moyen", hard: "Difficile", extreme: "Extrême" }
    : { easy: "Easy", medium: "Medium", hard: "Hard", extreme: "Extreme" };

  // Pool = personnages disponibles pour le filtre Histoire actuel
  const pool = typeof getAvailableCharacters === "function" ? getAvailableCharacters() : (CHARACTERS || []);
  const storyLab = (typeof STORY_POINTS !== "undefined" && STORY_POINTS[currentStory])
    ? (TRANSLATIONS[lang] && TRANSLATIONS[lang][STORY_POINTS[currentStory].labelKey]) || currentStory
    : currentStory;

  // Poids par difficulté pour chaque perso du pool
  const weightsByDiff = {};
  const totalByDiff = {};
  diffs.forEach(d => {
    const w = pool.map(c => getDrawWeight(c, d));
    weightsByDiff[d] = w;
    totalByDiff[d] = w.reduce((a, b) => a + b, 0) || 1;
  });

  const pct = (x) => (x * 100).toFixed(2) + "%";

  // Lignes : un perso = bloc (total + formes)
  const rows = pool.map((c, i) => {
    const formByDiff = {};
    const pickByDiff = {};
    diffs.forEach(d => {
      pickByDiff[d] = weightsByDiff[d][i] / totalByDiff[d];
      formByDiff[d] = computeFormOdds(c.name, d, currentStory);
    });
    return { c, pickByDiff, formByDiff };
  }).sort((a, b) => b.pickByDiff.easy - a.pickByDiff.easy);

  const summary = document.getElementById("adminStatsSummary");
  if (summary) {
    summary.textContent = fr
      ? `Chances théoriques · Histoire : ${storyLab} · ${pool.length} personnages dans le pool`
      : `Theoretical odds · Story: ${storyLab} · ${pool.length} characters in pool`;
  }

  // Highlight mystère actuel en tête
  let currentBlock = "";
  if (answer) {
    const name = answer.name;
    const row = rows.find(r => r.c.name === name);
    if (row) {
      const formNow = row.formByDiff[currentDifficulty] || row.formByDiff.medium;
      currentBlock = `<div class="mb-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-left text-xs">
        <div class="font-bold text-amber-300 mb-1">${fr ? "Mystère actuel" : "Current"} : ${name}${answer._isShiny ? " ✦" : (answer._variantId ? " ◇" : "")}</div>
        <div class="text-slate-400 mb-1">${fr ? "Mode en cours" : "Current mode"} : ${diffLabels[currentDifficulty] || currentDifficulty}</div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1 text-slate-200">
          ${diffs.map(d => `<div><span class="text-slate-500">${diffLabels[d]}</span><br><b>${pct(row.pickByDiff[d])}</b></div>`).join("")}
        </div>
        <div class="mt-2 text-slate-400">${fr ? "Dont (mode actuel)" : "Of which (current mode)"} —
          base <b>${pct(formNow.pBase * row.pickByDiff[currentDifficulty])}</b> ·
          alt <b>${pct(formNow.pAlt * row.pickByDiff[currentDifficulty])}</b> ·
          shiny <b>${pct(formNow.pShiny * row.pickByDiff[currentDifficulty])}</b>
        </div>
      </div>`;
    }
  }

  const head = `<thead><tr class="text-slate-500 text-left sticky top-0 bg-slate-900">
    <th class="py-1 pr-2">${fr ? "Personnage / forme" : "Character / form"}</th>
    ${diffs.map(d => `<th class="py-1 px-1 text-right">${diffLabels[d]}</th>`).join("")}
  </tr></thead>`;

  const bodyRows = rows.map(({ c, pickByDiff, formByDiff }) => {
    const hasAlt = diffs.some(d => formByDiff[d].pAlt > 0);
    const hasShiny = diffs.some(d => formByDiff[d].pShiny > 0);
    let html = `<tr class="border-b border-slate-700/60 bg-slate-800/40">
      <td class="py-1.5 pr-2 font-semibold text-slate-100">${c.name}</td>
      ${diffs.map(d => `<td class="py-1.5 px-1 text-right tabular-nums text-amber-200/90">${pct(pickByDiff[d])}</td>`).join("")}
    </tr>`;
    // Sous-lignes formes = chance combinée (être tiré × forme)
    const sub = (label, getP) => `<tr class="border-b border-slate-800/40 text-slate-400">
      <td class="py-0.5 pr-2 pl-3 text-[11px]">↳ ${label}</td>
      ${diffs.map(d => {
        const p = pickByDiff[d] * getP(formByDiff[d]);
        return `<td class="py-0.5 px-1 text-right tabular-nums text-[11px]">${p > 0 ? pct(p) : "—"}</td>`;
      }).join("")}
    </tr>`;
    html += sub(fr ? "forme normale" : "normal form", o => o.pBase);
    if (hasAlt) html += sub("alt ◇", o => o.pAlt);
    if (hasShiny) html += sub("shiny ✦", o => o.pShiny);
    return html;
  }).join("");

  const body = document.getElementById("adminStatsBody");
  if (body) {
    body.innerHTML = currentBlock + `
      <p class="text-[10px] text-slate-500 mb-2 leading-relaxed">
        ${fr
          ? "Chaque % = chance théorique d’obtenir ce personnage (ou cette forme) au prochain tirage, selon le mode. Le filtre Histoire actuel limite le pool."
          : "Each % = theoretical chance to roll that character (or form) on the next pick, by difficulty. Current Story filter limits the pool."}
      </p>
      <div class="max-h-[55vh] overflow-auto rounded-lg border border-slate-700/50">
        <table class="w-full text-xs text-slate-200">
          ${head}
          <tbody>${bodyRows}</tbody>
        </table>
      </div>`;
  }
  modal.classList.remove("hidden");
}


function closeAdminStats() {
  document.getElementById("adminStatsModal")?.classList.add("hidden");
}

function adminResetPickStats() {
  savePickStats({});
  showToast(currentLang === "fr" ? "Stats remises à 0" : "Stats reset");
  openAdminStats();
}

/* ========== Admin — Raretés & taux de drop ========== */
const ADMIN_RARITY_KEY = "opdle_rarity_overrides_v1";
/* ========== Admin — Variantes (on/off + arcs des alts/shinies) ========== */
const ADMIN_VARIANT_KEY = "opdle_variant_overrides_v1";
let VARIANT_OVERRIDE_CACHE = null;
function variantOverrides() {
  if (VARIANT_OVERRIDE_CACHE) return VARIANT_OVERRIDE_CACHE;
  try { VARIANT_OVERRIDE_CACHE = JSON.parse(localStorage.getItem(ADMIN_VARIANT_KEY) || "{}") || {}; }
  catch (e) { VARIANT_OVERRIDE_CACHE = {}; }
  return VARIANT_OVERRIDE_CACHE;
}
/** isShiny effectif : override admin puis donnée. */
function isVariantShiny(v) {
  if (!v) return false;
  try {
    const o = v.id && variantOverrides()[v.id];
    if (o && typeof o.isShiny === "boolean") return o.isShiny;
  } catch (e) {}
  return !!v.isShiny;
}
/** onlyAsVariant effectif : override admin (Remplace / Coexiste) puis donnée. */
function isOnlyAsVariant(v) {
  if (!v) return false;
  try {
    const o = v.id && variantOverrides()[v.id];
    if (o && typeof o.onlyAsVariant === "boolean") return o.onlyAsVariant;
  } catch (e) {}
  return !!v.onlyAsVariant;
}
function adminSetVariantOverrides(o) {
  VARIANT_OVERRIDE_CACHE = o || {};
  try {
    if (!o || !Object.keys(o).length) localStorage.removeItem(ADMIN_VARIANT_KEY);
    else localStorage.setItem(ADMIN_VARIANT_KEY, JSON.stringify(o));
  } catch (e) {}
}

function adminGetRarityOverrides() {
  try { return JSON.parse(localStorage.getItem(ADMIN_RARITY_KEY) || "{}") || {}; }
  catch (e) { return {}; }
}
function adminSetRarityOverrides(o) {
  try {
    if (!o || !Object.keys(o).length) localStorage.removeItem(ADMIN_RARITY_KEY);
    else localStorage.setItem(ADMIN_RARITY_KEY, JSON.stringify(o));
  } catch (e) {}
}
/** Snapshot des raretés d'origine : permet de restaurer après un override admin. */
let ADMIN_RARITY_SNAPSHOT = null;
function captureBaseRarities() {
  if (ADMIN_RARITY_SNAPSHOT) return;
  const m = {};
  for (const c of CHARACTERS) m[c.name] = c.rarity;
  if (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS) {
    for (const v of CHARACTER_VARIANTS) m[v.id] = v.rarity;
  }
  ADMIN_RARITY_SNAPSHOT = m;
}
/** Applique les overrides admin : on repar TOUJOURS de l'original, sinon un
 *  reset ne fonctionnerait pas (la valeur mutée écraserait la base). */
function applyAdminRarityOverrides() {
  captureBaseRarities();
  const base = ADMIN_RARITY_SNAPSHOT;
  const ov = adminGetRarityOverrides();
  for (const c of CHARACTERS) c.rarity = ov[c.name] || base[c.name];
  if (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS) {
    for (const v of CHARACTER_VARIANTS) {
      v.rarity = ov[v.id] || ov[v.baseName] || base[v.id];
    }
  }
}

const RARITY_COLOR = { 1: "bg-slate-600", 2: "bg-emerald-700", 3: "bg-sky-700", 4: "bg-violet-700", 5: "bg-red-700", 6: "bg-amber-600" };
// Liste unique des raretés disponibles (1..6) — évite les décalages
const RARITY_LEVELS = [1, 2, 3, 4, 5, 6];

function adminRarityRows() {
  const out = [];
  for (const c of CHARACTERS) out.push({ id: c.name, label: c.name, kind: "base", rarity: c.rarity, image: c.image });
  if (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS) {
    for (const v of CHARACTER_VARIANTS) {
      // Une récompense de quête reste une quête même si elle porte le flag
      // shiny (ex. luffy_gear5 : isShiny + unlock) — sinon elle disparaît
      // du filtre "Quêtes / récompenses".
      const kind = (v.unlock || v.collectionOnly) ? "quete" : (isVariantShiny(v) ? "shiny" : "alt");
      const lab = (v.displayName && (v.displayName[currentLang] || v.displayName.fr)) || v.id;
      out.push({ id: v.id, label: lab, sub: v.baseName, kind, rarity: v.rarity, image: v.image });
    }
  }
  return out;
}

function adminRenderRarityRates() {
  const wrap = document.getElementById("adminRarityRates");
  if (!wrap) return;
  const diff = document.getElementById("adminRarityDiff")?.value || "medium";
  const tbl = getRarityWeightTable();
  const def = RARITY_WEIGHT_DEFAULTS[diff];
  const row = tbl[diff] || def;
  const fr = currentLang !== "en";
  const dName = { easy: "Facile", medium: "Moyen", hard: "Difficile", extreme: "Extrême" }[diff];
  const head = `<div class="flex items-center justify-between mb-1.5">
      <span class="font-bold text-amber-300">${fr ? "Poids de drop" : "Drop weights"} — ${dName}</span>
      <span class="text-slate-500 text-[10px]">${fr ? "modifiable ci-dessous, appliqué en direct" : "editable below, applied live"}</span>
    </div>`;
  const cells = RARITY_LEVELS.map(r => {
    const w = row[r], d = def[r];
    const changed = Math.abs(w - d) > 0.0001;
    return `<label class="flex items-center gap-1.5 ${changed ? "text-amber-200 font-semibold" : "text-slate-300"}">
      <span class="w-4 text-right">R${r}</span>
      <input type="number" step="0.05" min="0" data-rw="${diff}:${r}" value="${w}"
        class="w-16 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-600 text-white text-[11px] outline-none focus:border-amber-400" />
      <span class="text-[10px] text-slate-500">déf. ${d}</span>
    </label>`;
  }).join("");
  wrap.innerHTML = head + `<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">${cells}</div>`;
  wrap.querySelectorAll("input[data-rw]").forEach(inp => {
    inp.addEventListener("change", () => {
      const parts = inp.dataset.rw.split(":");
      const d = parts[0];
      const r = Number(parts[1]);
      if (!RARITY_WEIGHT_DEFAULTS[d] || !RARITY_LEVELS.includes(r)) return;
      const cur = JSON.parse(JSON.stringify(getRarityWeightTable()));
      if (!cur[d]) cur[d] = RARITY_WEIGHT_DEFAULTS[d].slice();
      cur[d][0] = 0;
      cur[d][r] = Math.max(0, Number(inp.value) || 0);
      setRarityWeightTable(cur);
      adminRenderRarityRates();
      if (typeof openAdminStats === "function" && !document.getElementById("adminStatsModal")?.classList.contains("hidden")) openAdminStats();
      showToast(currentLang === "en" ? "Weights updated" : "Poids mis à jour");
    });
  });
}

function adminRenderRarityList() {
  const wrap = document.getElementById("adminRarityBody");
  if (!wrap) return;
  const q = cleanString(document.getElementById("adminRaritySearch")?.value || "");
  const filter = document.getElementById("adminRarityFilter")?.value || "all";
  let rows = adminRarityRows();
  if (filter !== "all") rows = rows.filter(r => r.kind === filter);
  if (q) rows = rows.filter(r => cleanString(r.label).includes(q) || cleanString(r.id).includes(q) || cleanString(r.sub || "").includes(q));
  rows.sort((a, b) => (a.kind === b.kind ? String(a.label).localeCompare(String(b.label)) : a.kind.localeCompare(b.kind)));
  const countEl = document.getElementById("adminRarityCount");
  if (countEl) countEl.textContent = rows.length + " / " + adminRarityRows().length;

  const fr = currentLang !== "en";
  const badge = { base: "base", alt: "alt ◇", shiny: "shiny ✦", quete: "quête" };
  const SHORT = { eastblue: "EB", alabasta: "AL", skypiea: "SK", water7: "W7", thriller: "TH", marineford: "MF", fishman: "FI", dressrosa: "DR", wholecake: "WC", wano: "WA", all: "★" };
  const STORIES = (typeof STORY_ORDER !== "undefined" && STORY_ORDER) ? STORY_ORDER : ["eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford", "fishman", "dressrosa", "wholecake", "wano", "all"];
  wrap.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5">` + rows.map(r => {
    const sel = RARITY_LEVELS.map(n =>
      `<button type="button" data-rar="${r.id}" data-val="${n}"
        class="px-1.5 py-0.5 rounded text-[10px] font-bold border ${r.rarity === n ? RARITY_COLOR[n] + " border-white/70 text-white" : "bg-slate-800/70 border-slate-700 text-slate-400 hover:bg-slate-700"}"
        title="${fr ? "Rareté " + n : "Rarity " + n}">${n}</button>`).join("");
    // Éditeur : alts/shinies (on/off + arcs + Remplace la normale),
    // bases (on/off + arcs du pool).
    let editor = "";
    const isVarRow = (r.kind === "shiny" || r.kind === "alt") && typeof CHARACTER_VARIANTS !== "undefined";
    const v = isVarRow ? CHARACTER_VARIANTS.find(x => x.id === r.id) : null;
    if ((v && !v.unlock) || r.kind === "base") {
      const key = r.id;
      const ovo = variantOverrides()[key] || {};
      const off = !!ovo.disabled;
      const dataStories = v ? v.stories : null;
      const eff = Array.isArray(ovo.stories) ? ovo.stories : dataStories;
      const boxes = STORIES.map(s => {
        const on = eff ? eff.includes(s) : true;
        return `<label class="inline-flex items-center gap-0.5 cursor-pointer ${on ? "text-amber-200" : "text-slate-600"}" title="${s}">` +
          `<input type="checkbox" data-varc="${key}" data-story="${s}" ${on ? "checked" : ""} class="rounded border-slate-500 w-3 h-3" />` +
          `<span class="text-[9px] font-bold">${SHORT[s] || s}</span></label>`;
      }).join("");
      let repSel = "";
      if (v) {
        const mode = (ovo && typeof ovo.onlyAsVariant === "boolean")
          ? (ovo.onlyAsVariant ? "force" : "coexist")
          : "auto";
        const rbb = (val, lab) => `<button type="button" data-vrep="${v.id}" data-vmode="${val}" title="${fr ? "Remplace la forme normale ?" : "Replace base form?"}" ` +
          `class="px-1 py-0.5 rounded text-[9px] font-bold border ${mode === val ? "bg-amber-600 border-amber-400 text-slate-950" : "bg-slate-800/70 border-slate-700 text-slate-400 hover:bg-slate-700"}">${lab}</button>`;
        repSel = `<span class="inline-flex gap-0.5" role="group">` +
          rbb("auto", "Auto") + rbb("force", fr ? "Remp." : "Repl.") + rbb("coexist", fr ? "Coex." : "Coex.") + `</span>`;
        const isSh = isVariantShiny(v);
        repSel += `<button type="button" data-vsh="${v.id}" title="${fr ? "Alt normal ↔ Shiny" : "Normal alt ↔ Shiny"}" ` +
          `class="px-1 py-0.5 rounded text-[9px] font-bold border ${isSh ? "bg-violet-600 border-violet-400 text-white" : "bg-slate-800/70 border-slate-700 text-slate-400 hover:bg-slate-700"}">${isSh ? "✦" : "◇"}</button>`;
      }
      editor = `<div class="mt-1 pt-1 border-t border-slate-700/60 flex flex-wrap items-center gap-x-1.5 gap-y-1">` +
        `<button type="button" data-vdis="${key}" title="${fr ? "Activer / désactiver cette carte" : "Enable / disable this card"}" ` +
        `class="px-1.5 py-0.5 rounded text-[10px] font-bold border ${off ? "bg-rose-900/60 border-rose-600 text-rose-200" : "bg-emerald-900/60 border-emerald-600 text-emerald-200"}">${off ? "OFF" : "ON"}</button>` +
        repSel + boxes + `</div>`;
    }
    const img = r.image
      ? `<img src="${r.image}" class="w-7 h-7 rounded object-cover border border-slate-600 shrink-0" onerror="this.style.visibility='hidden'" />`
      : `<div class="w-7 h-7 rounded bg-slate-800 border border-slate-600 shrink-0"></div>`;
    const vo = (variantOverrides()[r.id] && variantOverrides()[r.id].disabled) ? " opacity-50" : "";
    return `<div class="px-1.5 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50${vo}">
      <div class="flex items-center gap-1.5">
      ${img}
      <div class="min-w-0 flex-1">
        <div class="text-[11px] font-semibold text-slate-100 truncate">${String(r.label).replace(/</g, "&lt;")}</div>
        <div class="text-[9px] text-slate-500 truncate">${badge[r.kind] || r.kind}${r.sub ? " · " + String(r.sub).replace(/</g, "&lt;") : ""}</div>
      </div>
      <div class="flex gap-0.5 shrink-0">${sel}</div>
      </div>${editor}
    </div>`;
  }).join("") + `</div>`;

  wrap.querySelectorAll("button[data-rar]").forEach(b => {
    b.addEventListener("click", () => {
      const id = b.dataset.rar, val = Number(b.dataset.val);
      const ov = adminGetRarityOverrides();
      ov[id] = val;
      adminSetRarityOverrides(ov);
      applyAdminRarityOverrides();
      adminRenderRarityList();
      if (typeof renderCollectionGrid === "function") renderCollectionGrid();
      showToast((currentLang === "en" ? id + " → R" : id + " → R") + val);
    });
  });
  // Variantes : on/off + arcs d'apparition (alts & shinies).
  wrap.querySelectorAll("button[data-vdis]").forEach(b => {
    b.addEventListener("click", () => {
      const id = b.dataset.vdis;
      const o = JSON.parse(JSON.stringify(variantOverrides()));
      o[id] = o[id] || {};
      o[id].disabled = !o[id].disabled;
      if (!o[id].disabled && !o[id].stories && o[id].onlyAsVariant === undefined && o[id].isShiny === undefined) delete o[id];
      adminSetVariantOverrides(o);
      adminRenderRarityList();
      showToast(id + (o[id] && o[id].disabled
        ? (currentLang === "en" ? " disabled" : " désactivée")
        : (currentLang === "en" ? " enabled" : " activée")));
    });
  });
  wrap.querySelectorAll("input[data-varc]").forEach(box => {
    box.addEventListener("change", () => {
      const id = box.dataset.varc;
      const sel = (typeof CSS !== "undefined" && CSS.escape) ? CSS.escape(id) : id.replace(/"/g, "");
      const checked = [...wrap.querySelectorAll(`input[data-varc="${sel}"]`)]
        .filter(x => x.checked).map(x => x.dataset.story);
      const o = JSON.parse(JSON.stringify(variantOverrides()));
      o[id] = o[id] || {};
      o[id].stories = checked;
      adminSetVariantOverrides(o);
      // Pas de re-render : les cases restent en place pour cocher la suite.
      showToast(id + " → " + (checked.length ? checked.join(", ") : (currentLang === "en" ? "nowhere" : "nulle part")));
    });
  });
  wrap.querySelectorAll("button[data-vsh]").forEach(shBtn => {
    shBtn.addEventListener("click", () => {
      const id = shBtn.dataset.vsh;
      const o = JSON.parse(JSON.stringify(variantOverrides()));
      o[id] = o[id] || {};
      const v = (typeof CHARACTER_VARIANTS !== "undefined" ? CHARACTER_VARIANTS : []).find(x => x.id === id);
      const cur = (o[id] && typeof o[id].isShiny === "boolean") ? o[id].isShiny : !!(v && v.isShiny);
      o[id].isShiny = !cur;
      if (v && o[id].isShiny === !!v.isShiny) delete o[id].isShiny;
      if (!o[id].stories && o[id].disabled === undefined && o[id].onlyAsVariant === undefined && o[id].isShiny === undefined) delete o[id];
      adminSetVariantOverrides(o);
      adminRenderRarityList();
      const effShiny = !cur;
      showToast(id + " → " + (effShiny ? "✦ shiny" : "◇ alt"));
    });
  });
  wrap.querySelectorAll("button[data-vrep]").forEach(repBtn => {
    repBtn.addEventListener("click", () => {
      const id = repBtn.dataset.vrep;
      const mode = repBtn.dataset.vmode;
      const o = JSON.parse(JSON.stringify(variantOverrides()));
      o[id] = o[id] || {};
      if (mode === "force") o[id].onlyAsVariant = true;
      else if (mode === "coexist") o[id].onlyAsVariant = false;
      else delete o[id].onlyAsVariant;
      if (!o[id].stories && o[id].disabled === undefined && o[id].onlyAsVariant === undefined) delete o[id];
      adminSetVariantOverrides(o);
      adminRenderRarityList();
      showToast(id + " → " + (mode === "force"
        ? (currentLang === "en" ? "replaces base" : "remplace la normale")
        : mode === "coexist"
          ? (currentLang === "en" ? "coexists" : "coexiste")
          : (currentLang === "en" ? "auto" : "auto")));
    });
  });
}

function openAdminRarity() {
  applyAdminRarityOverrides();
  adminRenderRarityRates();
  adminRenderRarityList();
  document.getElementById("adminRarityModal")?.classList.remove("hidden");
}

function closeAdminRarity() {
  document.getElementById("adminRarityModal")?.classList.add("hidden");
}

function setupAdminRarity() {
  document.getElementById("adminRarityBtn")?.addEventListener("click", openAdminRarity);
  document.getElementById("adminRarityClose")?.addEventListener("click", closeAdminRarity);
  document.getElementById("adminRarityClose2")?.addEventListener("click", closeAdminRarity);
  document.getElementById("adminRaritySearch")?.addEventListener("input", () => adminRenderRarityList());
  document.getElementById("adminRarityFilter")?.addEventListener("change", () => adminRenderRarityList());
  document.getElementById("adminRarityDiff")?.addEventListener("change", () => adminRenderRarityRates());
  document.getElementById("adminRarityReset")?.addEventListener("click", () => {
    resetRarityWeightTable();
    adminRenderRarityRates();
    showToast(currentLang === "en" ? "Default weights restored" : "Poids par défaut rétablis");
  });
  document.getElementById("adminRarityApplyAll")?.addEventListener("click", () => {
    const val = Number(document.getElementById("adminRarityBulk")?.value);
    if (!val) { showToast(currentLang === "en" ? "Pick a rarity first" : "Choisis d'abord une rareté"); return; }
    const q = cleanString(document.getElementById("adminRaritySearch")?.value || "");
    const filter = document.getElementById("adminRarityFilter")?.value || "all";
    const ov = adminGetRarityOverrides();
    let n = 0;
    for (const r of adminRarityRows()) {
      if (filter !== "all" && r.kind !== filter) continue;
      if (q && !(cleanString(r.label).includes(q) || cleanString(r.id).includes(q) || cleanString(r.sub || "").includes(q))) continue;
      ov[r.id] = val; n++;
    }
    adminSetRarityOverrides(ov);
    applyAdminRarityOverrides();
    adminRenderRarityList();
    showToast((currentLang === "en" ? "Applied R" : "R") + val + (currentLang === "en" ? " to " : " à ") + n);
  });
  document.getElementById("adminRarityExport")?.addEventListener("click", async () => {
    const payload = { rarityOverrides: adminGetRarityOverrides(), weights: getRarityWeightTable() };
    const txt = JSON.stringify(payload, null, 2);
    try {
      await navigator.clipboard.writeText(txt);
      showToast(currentLang === "en" ? "JSON copied to clipboard" : "JSON copié dans le presse-papiers");
    } catch (e) {
      showToast(txt);
    }
  });
}

/* Responsive : la barre admin est fixée en haut — elle doit décaler la page
   (body padding-top) et la nav collante (top), sinon elle les recouvre.
   La hauteur varie selon la largeur d'écran (la barre s'empile en mobile). */
function syncAdminBarOffset() {
  const bar = document.getElementById("adminBar");
  const visible = bar && !bar.classList.contains("hidden") && bar.style.display !== "none";
  const h = visible ? bar.offsetHeight : 0;
  document.documentElement.style.setProperty("--admin-bar-h", h + "px");
}

function updateAdminUI() {
  const bar = document.getElementById("adminBar");
  const show = document.getElementById("adminShowBtn");
  // sandbox btn retiré
  if (!bar) return;
  if (!isAdminActive() || bar.dataset.userHidden === "1") {
    bar.classList.add("hidden");
    bar.style.display = "none";
    if (show) show.classList.remove("hidden");
    syncAdminBarOffset();
    return;
  }
  bar.classList.remove("hidden");
  bar.style.display = "flex";
  if (show) show.classList.add("hidden");
  syncAdminBarOffset();
}

function setupAdminBar() {
  const bar = document.getElementById("adminBar");
  if (!bar) return;
  // Décalage de la page / nav collante selon la hauteur réelle de la barre
  syncAdminBarOffset();
  window.addEventListener("resize", syncAdminBarOffset);
  if (window.MutationObserver) {
    new MutationObserver(syncAdminBarOffset).observe(bar, { attributes: true, attributeFilter: ["class", "style"] });
  }
  document.getElementById("adminUnlockAllBtn")?.addEventListener("click", adminUnlockAll);
  document.getElementById("adminResetQuestsBtn")?.addEventListener("click", adminResetQuests);
  document.getElementById("adminCompleteQuestsBtn")?.addEventListener("click", adminCompleteAllQuests);
  document.getElementById("adminClearAllBtn")?.addEventListener("click", adminClearAll);
  document.getElementById("adminRevealBtn")?.addEventListener("click", adminRevealAnswer);
  document.getElementById("adminSetMysteryBtn")?.addEventListener("click", adminSetMysteryFromInput);
  document.getElementById("adminStatsBtn")?.addEventListener("click", openAdminStats);
  if (typeof setupAdminRarity === "function") setupAdminRarity();
  document.getElementById("adminPlayerModeBtn")?.addEventListener("click", () => {
    setAdminActive(false);
  });
  document.getElementById("adminOffBtn")?.addEventListener("click", () => {
    bar.dataset.userHidden = "1";
    disableOpdleAdmin();
  });
  document.getElementById("adminShowBtn")?.addEventListener("click", () => {
    bar.dataset.userHidden = "0";
    setAdminActive(true);
    enableOpdleAdmin();
    updateAdminUI();
  });
  // Sandbox toujours actif en admin (données joueur isolées) — pas de bouton
  document.getElementById("adminMysteryInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") adminSetMysteryFromInput();
  });
  document.getElementById("adminMysteryInput")?.addEventListener("input", () => {
    if (typeof adminRefreshAltSelect === "function") adminRefreshAltSelect();
  });
  document.getElementById("adminForceAlt")?.addEventListener("change", () => {
    const shinyChk = document.getElementById("adminForceShiny");
    if (document.getElementById("adminForceAlt")?.checked && shinyChk) shinyChk.checked = false;
    adminRefreshAltSelect();
  });
  document.getElementById("adminForceShiny")?.addEventListener("change", () => {
    const altChk = document.getElementById("adminForceAlt");
    if (document.getElementById("adminForceShiny")?.checked && altChk) {
      altChk.checked = false;
      document.getElementById("adminAltSelect")?.classList.add("hidden");
    }
  });
  document.querySelectorAll(".adminStatsClose").forEach(b => b.addEventListener("click", closeAdminStats));
  document.getElementById("adminResetStatsBtn")?.addEventListener("click", adminResetPickStats);
  updateAdminUI();
}

function tryAdminCodeFromAuthFields() { return false; }


/* ========== Settings (thème, langue, son, compte) ========== */
const THEME_KEY = "opdle_theme"; // "dark" | "light" | "jolly"

function getTheme() {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "jolly") return jollyThemeUnlocked() ? "jolly" : "dark";
    return v === "light" ? "light" : "dark";
  } catch (e) { return "dark"; }
}

/* ---------- Thème « Jolly Roger » : débloqué par l'album Barbe Noire ----------
   Le thème reprend la DA de l'icône (crâne os sur encre + or). Il se débloque
   quand toutes les cartes de la page « Pirates de Barbe Noire » sont réunies. */
function jollyThemeProgress() {
  const cats = (typeof COLLECTION_CATEGORIES !== "undefined" ? COLLECTION_CATEGORIES : []);
  const cat = cats.find(c => c.id === "blackbeard");
  if (!cat || !Array.isArray(cat.members) || !cat.members.length) {
    return { done: false, cur: 0, total: 0, cat: null };
  }
  const unlocked = new Set(typeof getUnlockedNames === "function" ? getUnlockedNames() : []);
  const rewards = typeof getAllCollectionRewardIds === "function" ? getAllCollectionRewardIds() : new Set();
  const cur = cat.members.filter(m => rewards.has(m) || unlocked.has(m)).length;
  return { done: cur >= cat.members.length, cur, total: cat.members.length, cat };
}

function jollyThemeUnlocked() { return jollyThemeProgress().done; }

/** « 🔒 Verrouillé — Pirates de Barbe Noire  3 / 8 » */
function jollyThemeLockText() {
  const p = jollyThemeProgress();
  const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
  const t = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};
  const cat = p.cat;
  const name = cat ? (lang === "en" ? (cat.en || cat.fr) : (cat.fr || cat.en)) : "";
  return (t.modeLockPrefix || "🔒 Locked") + " — " + (name ? name + "  " : "") + p.cur + " / " + p.total;
}

/** Annonce le déblocage du thème, une seule fois (après la victoire qui complète l'album).
 *  Le message est affiché dans la fenêtre de victoire (la note « toast » du bas
 *  de page passe derrière la modale). */
let jollyThemeJustUnlocked = false;

function maybeAnnounceJollyTheme() {
  if (!jollyThemeUnlocked()) return false;
  let seen = false;
  try { seen = localStorage.getItem("opdle_jolly_theme_seen") === "1"; } catch (e) {}
  if (seen) return false;
  try { localStorage.setItem("opdle_jolly_theme_seen", "1"); } catch (e) {}
  jollyThemeJustUnlocked = true;
  return true;
}

function applyTheme(theme) {
  const t = theme === "light" ? "light" : theme === "jolly" ? "jolly" : "dark";
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  const root = document.documentElement;
  if (t === "light") {
    root.classList.remove("dark", "jolly");
    root.classList.add("light");
  } else if (t === "jolly") {
    root.classList.remove("light");
    root.classList.add("dark", "jolly");
  } else {
    root.classList.remove("light", "jolly");
    root.classList.add("dark");
  }
  updateSettingsUI();
}

/* ========== Mes statistiques (Réglages) : chiffres + historique ========== */
function renderSettingsStats() {
  const box = document.getElementById("settingsStatsBox");
  if (!box) return;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const locale = currentLang === "en" ? "en-US" : "fr-FR";
  const hist = (typeof loadGameHistory === "function" ? loadGameHistory() : []).slice(0, 15);
  const rate = gamesTotal > 0 ? Math.round((100 * wins) / gamesTotal) : 0;
  const wonHist = hist.filter(h => h.w && !h.draw && (h.at || 0) > 0);
  const avg = wonHist.length
    ? (wonHist.reduce((a, h) => a + h.at, 0) / wonHist.length).toFixed(1).replace(".", currentLang === "en" ? "." : ",")
    : "—";
  const unlocked = new Set(typeof getUnlockedNames === "function" ? getUnlockedNames() : []);
  let shinyGot = 0, shinyTot = 0, altGot = 0, altTot = 0;
  if (typeof CHARACTER_VARIANTS !== "undefined" && CHARACTER_VARIANTS) {
    for (const v of CHARACTER_VARIANTS) {
      if (v.collectionOnly) continue;
      if (isVariantShiny(v)) { shinyTot++; if (unlocked.has(v.id)) shinyGot++; }
      else { altTot++; if (unlocked.has(v.id)) altGot++; }
    }
  }
  let charTot = 0, charGot = 0;
  if (typeof CHARACTERS !== "undefined" && CHARACTERS) {
    charTot = CHARACTERS.length;
    for (const c of CHARACTERS) if (unlocked.has(c.name)) charGot++;
  }
  // Album : seules les clés connues comptent (pas d'identifiant orphelin au-dessus du total)
  const albumKnown = new Set([...(CHARACTERS || []).map(c => c.name), ...(CHARACTER_VARIANTS || []).map(v => v.id)]);
  const albumGot = [...unlocked].filter(k => albumKnown.has(k)).length;
  const cell = (label, val, cls) =>
    `<div class="rounded-xl bg-slate-800/60 border border-slate-700/60 px-2 py-2 text-center">` +
    `<div class="text-lg font-black tabular-nums ${cls || "text-white"}">${val}</div>` +
    `<div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">${label}</div></div>`;
  const diffName = { easy: t.modeEasy || "Facile", medium: t.modeMedium || "Moyen", hard: t.modeHard || "Difficile", extreme: t.modeExtreme || "Extrême" };
  const storyName = (sid) => {
    if (!sid) return "";
    if (sid === "all") return (STORY_POINTS.all && t[STORY_POINTS.all.labelKey]) || sid;
    const sp = (typeof STORY_POINTS !== "undefined" && STORY_POINTS[sid]) || null;
    return (sp && t[sp.labelKey]) || sid;
  };
  const matchRows = loadVersusMatches().slice(0, 10).map(m => {
    let when = "";
    try {
      const d = new Date(m.t);
      when = d.toLocaleDateString(locale, { day: "2-digit", month: "2-digit" }) + " " +
        d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    } catch (e) {}
    const [s1, s2] = m.scores;
    const verdict = s1 === s2 ? "½ " + (t.settingsResDraw || "Nul")
      : (s1 > s2 ? "✓ " + m.names[0] : "✓ " + m.names[1]);
    const cls = s1 === s2 ? "text-slate-400" : "text-emerald-400";
    const stN = storyName(m.st);
    return `<div class="flex items-center gap-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40 px-2 py-1.5">` +
      `<div class="min-w-0 flex-1">` +
        `<div class="text-xs font-bold text-white truncate">${m.names[0]} ${s1} — ${s2} ${m.names[1]}</div>` +
        `<div class="text-[10px] ${cls} font-semibold truncate">${verdict} · ${m.rounds} ${t.settingsRounds || (currentLang === "en" ? "rounds" : "manches")}` +
        ` · ${diffName[m.d] || m.d}${stN ? " · " + stN : ""}${m.on ? " · 🌐" : ""}</div>` +
      `</div>` +
      `<div class="text-[10px] text-slate-500 tabular-nums shrink-0">${when}</div>` +
      `</div>`;
  }).join("");
  const rows = hist.map(h => {
    let img = null, nm = h.a || "?";
    try {
      const base = h.a && typeof findCharByName === "function" ? findCharByName(h.a) : null;
      if (base) img = base.image;
      if (h.v && typeof findVariantById === "function") {
        const vv = findVariantById(h.v);
        if (vv && vv.image) img = vv.image;
      }
    } catch (e) {}
    const initials = (typeof getInitials === "function" ? getInitials(nm) : "?") || "?";
    const avatar = img
      ? `<img src="${img}" alt="" draggable="false" class="w-9 h-9 rounded-lg object-cover border border-slate-600/60" style="object-position:center top" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />` +
        `<div class="w-9 h-9 rounded-lg items-center justify-center text-xs font-black text-slate-400 bg-slate-800" style="display:none">${initials}</div>`
      : `<div class="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black text-slate-400 bg-slate-800">${initials}</div>`;
    let resTxt = "", resCls = "text-slate-400";
    if (h.draw) { resTxt = "½ " + (t.settingsResDraw || "Nul"); }
    else if (h.w) {
      resCls = "text-emerald-400";
      resTxt = "✓ " + (h.vs && h.wn ? h.wn : (t.settingsResWin || "Victoire"));
    } else if (h.how === "forfeit") {
      resCls = "text-amber-400";
      resTxt = "🏳 " + (h.wn ? h.wn + " · " : "") + (t.settingsResForfeit || "Forfait");
    } else if (h.how === "abandon") {
      resTxt = "🚪 " + (t.settingsResAbandon || "Abandon");
    } else { resCls = "text-rose-400"; resTxt = "✗ " + (t.settingsResLoss || "Défaite"); }
    let when = "";
    try {
      const d = new Date(h.t);
      when = d.toLocaleDateString(locale, { day: "2-digit", month: "2-digit" }) + " " +
        d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    } catch (e) {}
    const bits = [resTxt];
    if ((h.at || 0) > 0) bits.push(h.at + " " + (t.settingsTries || (currentLang === "en" ? "tries" : "coups")));
    bits.push(diffName[h.d] || h.d);
    const stN = storyName(h.st);
    if (stN) bits.push(stN);
    return `<div class="flex items-center gap-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40 px-2 py-1.5">` +
      `<div class="shrink-0 flex">${avatar}</div>` +
      `<div class="min-w-0 flex-1">` +
        `<div class="text-xs font-bold text-white truncate">${nm}${h.s ? " ✦" : ""}${h.v && !h.s ? " ◇" : ""}${h.vs ? ' <span class="text-[9px] font-black text-sky-300 border border-sky-500/50 rounded px-1 ml-1">' + (t.settingsVs || "VS") + "</span>" : ""}</div>` +
        `<div class="text-[10px] ${resCls} font-semibold truncate">${bits.join(" · ")}</div>` +
      `</div>` +
      `<div class="text-[10px] text-slate-500 tabular-nums shrink-0">${when}</div>` +
      `</div>`;
  }).join("");
  box.innerHTML =
    `<div class="grid grid-cols-3 gap-1.5">` +
    cell(t.settingsGames || "Parties", gamesTotal) +
    cell(t.settingsWins || "Victoires", wins, "text-emerald-400") +
    cell(t.settingsWinrate || "Réussite", rate + " %", "text-amber-300") +
    cell(t.settingsStreak || "Série", streak, "text-orange-400") +
    cell(t.settingsBestStreak || "Record", bestStreak, "text-yellow-300") +
    cell(t.settingsAvgTries || "Essais moy.", avg, "text-sky-300") +
    `</div>` +
    `<div class="grid grid-cols-3 gap-1.5">` +
    cell("✦ " + (t.settingsShinyFound || "Shinies"), shinyGot + "/" + shinyTot, "text-violet-300") +
    cell("◇ " + (t.settingsAltFound || "Alts"), altGot + "/" + altTot, "text-sky-300") +
    cell("🃏 " + (t.settingsAlbum || "Album"), albumGot + "/" + collectionTotalCount(), "text-amber-200") +
    `</div>` +
    `<div>` +
    `<div class="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">${t.settingsHistory || "Historique"}</div>` +
    (rows || `<p class="text-xs text-slate-500 text-center py-3">${t.settingsHistoryEmpty || ""}</p>`) +
    `</div>` +
    `<div>` +
    `<div class="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">${t.settingsVsHistory || "Matchs versus"}</div>` +
    (matchRows || `<p class="text-xs text-slate-500 text-center py-3">${t.settingsVsHistoryEmpty || ""}</p>`) +
    `</div>`;
}

function openSettingsModal() {
  const modal = document.getElementById("settingsModal");
  if (!modal) return;
  updateSettingsUI();
  if (typeof renderSettingsStats === "function") renderSettingsStats();
  modal.classList.remove("hidden");
}

function closeSettingsModal() {
  document.getElementById("settingsModal")?.classList.add("hidden");
  const pw = document.getElementById("settingsDeletePassword");
  if (pw) pw.value = "";
}

/** Verrou visuel d'un bouton de mode : désactive le bouton tant que la quête
 *  correspondante n'est pas remplie, et affiche la ligne de progression. */
function setModeLock(btnId, lockId, unlocked, text) {
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.disabled = !unlocked;
    btn.classList.toggle("opacity-40", !unlocked);
    btn.setAttribute("aria-disabled", unlocked ? "false" : "true");
  }
  const lock = document.getElementById(lockId);
  if (lock) {
    lock.classList.toggle("hidden", unlocked);
    if (!unlocked && text) lock.textContent = text;
  }
}
/** Ligne « 🔒 Verrouillé — Victoires 42 / 100 » à partir de questProgress. */
function modeLockText(questId) {
  const lang = (typeof currentLang !== "undefined" && currentLang) || "fr";
  const t = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};
  const q = questById(questId);
  if (!q || typeof questProgress !== "function") return "";
  const p = questProgress(q);
  if (p.done) return "";
  const parts = p.parts.map(x => x.label + "  " + x.cur + " / " + x.need).join("  ·  ");
  return (t.modeLockPrefix || "🔒 Verrouillé") + " — " + parts;
}

function updateSettingsUI() {
  const t = (TRANSLATIONS[currentLang] || TRANSLATIONS.fr);
  const set = (id, text) => { const el = document.getElementById(id); if (el && text != null) el.textContent = text; };
  // Libellé avec icône : l'emoji est isolé dans un <span class="ico"> pour que le
  // thème Jolly Roger puisse le teinter en or sans toucher au texte.
  const setIcon = (id, icon, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = "";
    const sp = document.createElement("span");
    sp.className = icon === "🃏" ? "ico ico-card" : "ico";
    sp.textContent = icon;
    el.appendChild(sp);
    el.appendChild(document.createTextNode(" " + (text || "")));
  };
  set("settingsTitle", t.settingsTitle);
  set("settingsThemeLabel", t.settingsTheme);
  set("settingsLangLabel", t.settingsLang);
  set("settingsSoundLabel", t.settingsSound);
  set("settingsStatsLabel", t.settingsStats);
  if (typeof renderSettingsStats === "function") renderSettingsStats();
  set("settingsAccountLabel", t.settingsAccount);
  set("settingsResetBtn", t.settingsResetProgress);
  set("settingsDeleteBtn", t.settingsDeleteAccount);
  set("settingsDeleteHint", t.settingsDeleteHint);
  set("settingsCloseBtn", t.settingsClose);
  const pw = document.getElementById("settingsDeletePassword");
  if (pw) pw.placeholder = t.settingsPassword || "Password";

  const theme = getTheme();
  const themeLabels = {
    dark: t.settingsThemeDark || "Dark",
    light: t.settingsThemeLight || "Light",
    jolly: t.settingsThemeJolly || "Jolly Roger"
  };
  // Pastilles de thème : pas de texte visible, mais libellés pour l'accessibilité
  [["settingsThemeDark", "dark"], ["settingsThemeLight", "light"]].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("is-active", theme === key);
    el.setAttribute("aria-pressed", theme === key ? "true" : "false");
    el.setAttribute("aria-label", themeLabels[key]);
    el.title = themeLabels[key];
  });

  // Thème Jolly Roger : verrouillé tant que l'album Barbe Noire n'est pas complet
  const jollyDone = jollyThemeUnlocked();
  const jollyBtn = document.getElementById("settingsThemeJolly");
  if (jollyBtn) {
    jollyBtn.classList.toggle("is-active", theme === "jolly");
    jollyBtn.disabled = !jollyDone;
    jollyBtn.classList.toggle("is-locked", !jollyDone);
    jollyBtn.setAttribute("aria-disabled", jollyDone ? "false" : "true");
    jollyBtn.setAttribute("aria-pressed", theme === "jolly" ? "true" : "false");
    jollyBtn.setAttribute("aria-label", themeLabels.jolly);
    jollyBtn.title = themeLabels.jolly;
  }
  const jollyLock = document.getElementById("settingsThemeJollyLock");
  if (jollyLock) {
    jollyLock.classList.toggle("hidden", jollyDone);
    jollyLock.textContent = jollyDone ? "" : jollyThemeLockText();
  }

  document.getElementById("settingsLangFr")?.classList.toggle("is-active", currentLang === "fr");
  document.getElementById("settingsLangEn")?.classList.toggle("is-active", currentLang === "en");

  const soundOn = isSoundEnabled();
  document.getElementById("settingsSoundOn")?.classList.toggle("is-active", soundOn);
  document.getElementById("settingsSoundOff")?.classList.toggle("is-active", !soundOn);
  setIcon("settingsSoundOn", "🔊", t.settingsSoundOn || "On");
  setIcon("settingsSoundOff", "🔇", t.settingsSoundOff || "Off");

  const collectOn = isCollectMode();
  document.getElementById("settingsCollectOn")?.classList.toggle("is-active", collectOn);
  document.getElementById("settingsCollectOff")?.classList.toggle("is-active", !collectOn);
  set("settingsCollectLabel", t.settingsCollect);
  setIcon("settingsCollectOn", "🃏", t.settingsCollectOn || "Collect");
  setIcon("settingsCollectOff", "🎲", t.settingsCollectOff || "Normal");
  set("settingsCollectHint", t.settingsCollectHint);
  setModeLock("settingsCollectOn", "settingsCollectLock", collectModeUnlocked(), modeLockText("whitebeard_reveal"));

  const specialOn = isSpecialMode();
  document.getElementById("settingsSpecialOn")?.classList.toggle("is-active", specialOn);
  document.getElementById("settingsSpecialOff")?.classList.toggle("is-active", !specialOn);
  set("settingsSpecialLabel", t.settingsSpecial);
  setIcon("settingsSpecialOn", "✨", t.settingsSpecialOn || "Alt/Shiny");
  setIcon("settingsSpecialOff", "🎲", t.settingsSpecialOff || "Normal");
  set("settingsSpecialHint", t.settingsSpecialHint);
  setModeLock("settingsSpecialOn", "settingsSpecialLock", specialModeUnlocked(), modeLockText("roger_shiny"));

  // Delete section: show password only if logged in
  const delWrap = document.getElementById("settingsDeleteWrap");
  if (delWrap) {
    const logged = !!(currentUser && currentUser.id);
    const hint = document.getElementById("settingsDeleteHint");
    if (hint) hint.textContent = logged
      ? (t.settingsDeleteHint || "")
      : (t.settingsDeleteNeedLogin || "");
    if (pw) pw.classList.toggle("hidden", !logged);
  }
}

/* --- Confirmation in-app : remplace le confirm() natif (plus joli + bilingue) --- */
let confirmModalResolver = null;

function showConfirmModal(opts) {
  const o = opts || {};
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const modal = document.getElementById("confirmModal");
  // Repli silencieux si le modal est absent du DOM
  if (!modal) return Promise.resolve(window.confirm(o.desc || t.confirmDefaultTitle || "Confirm?"));

  const iconEl = document.getElementById("confirmIcon");
  const titleEl = document.getElementById("confirmTitle");
  const descEl = document.getElementById("confirmDesc");
  const okBtn = document.getElementById("confirmOkBtn");
  const cancelBtn = document.getElementById("confirmCancelBtn");

  if (iconEl) {
    iconEl.textContent = o.icon || "⚠️";
    iconEl.classList.toggle("ico-card", (o.icon || "") === "🃏");
  }
  if (titleEl) titleEl.textContent = o.title || t.confirmDefaultTitle || "Confirmation";
  if (descEl) descEl.textContent = o.desc || "";
  if (cancelBtn) cancelBtn.textContent = o.cancelLabel || t.confirmDefaultCancel || "Annuler";
  if (okBtn) {
    okBtn.textContent = o.okLabel || t.confirmDefaultOk || "Confirmer";
    okBtn.className = o.danger
      ? "py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-extrabold transition shadow-lg shadow-rose-600/20 active:scale-95"
      : "py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition active:scale-95";
  }

  modal.classList.remove("hidden");
  if (okBtn) setTimeout(() => okBtn.focus(), 30);

  return new Promise((resolve) => { confirmModalResolver = resolve; });
}

function closeConfirmModal(result) {
  const modal = document.getElementById("confirmModal");
  if (modal) modal.classList.add("hidden");
  const r = confirmModalResolver;
  confirmModalResolver = null;
  if (r) r(!!result);
}

document.getElementById("confirmOkBtn")?.addEventListener("click", () => closeConfirmModal(true));
document.getElementById("confirmCancelBtn")?.addEventListener("click", () => closeConfirmModal(false));
document.getElementById("confirmModal")?.addEventListener("click", (e) => {
  if (e.target && e.target.id === "confirmModal") closeConfirmModal(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const modal = document.getElementById("confirmModal");
  if (modal && !modal.classList.contains("hidden")) closeConfirmModal(false);
});

async function settingsResetProgress() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const confirmed = await showConfirmModal({
    icon: "♻️",
    title: t.settingsResetTitle,
    desc: t.settingsResetConfirm,
    okLabel: t.settingsResetOk,
    danger: true
  });
  if (!confirmed) return;
  try {
    localStorage.setItem("opdle_unlocked", "[]");
    localStorage.setItem("opdle_streak", "0");
    localStorage.setItem("opdle_wins", "0");
    localStorage.setItem("opdle_best_streak", "0");
    localStorage.setItem("opdle_games_total", "0");
    localStorage.removeItem("opdle_history_v1");
    // Progression des quêtes (synchrone avec le bouton admin Reset quêtes)
    resetQuestProgressAll();
    localStorage.removeItem("opdle_avatar");
    localStorage.removeItem("opdle_admin_unlocked");
    // Réinitialiser la progression ne touche PAS à la config admin :
    // les raretés/poids/variantes réglés via le menu admin sont conservés.
    try { localStorage.removeItem(PICK_STATS_KEY); } catch (e) {}
  } catch (e) {}
  streak = 0;
  wins = 0;
  bestStreak = 0;
  gamesTotal = 0;
  hardExtremeWins = 0;
  extremeWins = 0;
  if (currentUser) {
    currentUser.unlocked = [];
    currentUser.avatar = null;
    currentUser.streak = 0;
    currentUser.wins = 0;
    currentUser.bestStreak = 0;
    if (typeof persistCurrentUser === "function") await persistCurrentUser();
  }
  if (typeof updateStatsUI === "function") updateStatsUI();
  if (typeof updateProfileUI === "function") updateProfileUI();
  if (typeof renderUnlockedGrid === "function") renderUnlockedGrid();
  if (typeof renderCollectionGrid === "function") renderCollectionGrid();
  // Le thème Jolly Roger se reverrouille avec la collection Barbe Noire
  if (!jollyThemeUnlocked() && document.documentElement.classList.contains("jolly")) applyTheme("dark");
  if (typeof updateSettingsUI === "function") updateSettingsUI();
  showToast(t.settingsResetDone || "Reset");
}

async function settingsDeleteAccount() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  if (!currentUser || !currentUser.id || !supabaseClient) {
    showToast(t.settingsDeleteNeedLogin || "Login required");
    return;
  }
  const pass = (document.getElementById("settingsDeletePassword")?.value || "").trim();
  if (!pass) {
    showToast(t.settingsDeleteNeedPass || "Password required");
    return;
  }
  if (!confirm(t.settingsDeleteConfirm || "Delete account?")) return;
  try {
    const email = currentUser.email;
    if (!email) throw new Error("no email");
    // Re-auth
    const { error: loginErr } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if (loginErr) throw loginErr;
    // Delete profile row
    await supabaseClient.from("profiles").delete().eq("id", currentUser.id);
    // Best-effort: sign out (full user delete needs service role / Edge Function)
    await supabaseClient.auth.signOut();
    currentUser = null;
    try {
      localStorage.setItem("opdle_unlocked", "[]");
      localStorage.setItem("opdle_streak", "0");
      localStorage.setItem("opdle_wins", "0");
      localStorage.setItem("opdle_best_streak", "0");
      localStorage.setItem("opdle_games_total", "0");
      localStorage.removeItem("opdle_history_v1");
      // Progression des quêtes (synchrone avec le bouton admin Reset quêtes)
      resetQuestProgressAll();
      localStorage.removeItem("opdle_avatar");
      localStorage.removeItem("opdle_admin_unlocked");
      localStorage.removeItem(PICK_STATS_KEY);
      // La suppression du compte ne touche PAS à la config admin du site :
      // raretés/poids/variantes réglés via le menu admin sont conservés.
    } catch (e) {}
    streak = 0; wins = 0;
    bestStreak = 0; gamesTotal = 0;
    hardExtremeWins = 0; extremeWins = 0;
    updateProfileUI();
    updateStatsUI();
    closeSettingsModal();
    showToast(t.settingsDeleteDone || "Deleted");
  } catch (e) {
    console.warn("delete account", e);
    showToast((t.settingsDeleteFail || "Failed") + (e.message ? ": " + e.message : ""));
  }
}

function setupSettings() {
  document.getElementById("settingsBtn")?.addEventListener("click", openSettingsModal);
  document.querySelectorAll(".settingsModalClose").forEach(b => b.addEventListener("click", closeSettingsModal));
  document.getElementById("settingsThemeDark")?.addEventListener("click", () => applyTheme("dark"));
  document.getElementById("settingsThemeLight")?.addEventListener("click", () => applyTheme("light"));
  document.getElementById("settingsThemeJolly")?.addEventListener("click", () => {
    if (!jollyThemeUnlocked()) { showToast(jollyThemeLockText()); return; }
    applyTheme("jolly");
    showToast((TRANSLATIONS[currentLang] || {}).settingsSaved || "OK");
  });
  document.getElementById("settingsLangFr")?.addEventListener("click", () => {
    if (currentLang !== "fr") {
      currentLang = "fr";
      try { localStorage.setItem("opdle_lang", "fr"); } catch (e) {}
      if (typeof updateLanguageUI === "function") updateLanguageUI();
      document.documentElement.lang = "fr";
    }
    updateSettingsUI();
  });
  document.getElementById("settingsLangEn")?.addEventListener("click", () => {
    if (currentLang !== "en") {
      currentLang = "en";
      try { localStorage.setItem("opdle_lang", "en"); } catch (e) {}
      if (typeof updateLanguageUI === "function") updateLanguageUI();
      document.documentElement.lang = "en";
    }
    updateSettingsUI();
  });
  document.getElementById("settingsSoundOn")?.addEventListener("click", () => {
    setSoundEnabled(true);
    updateSettingsUI();
    showToast((TRANSLATIONS[currentLang] || {}).settingsSaved || "OK");
  });
  document.getElementById("settingsSoundOff")?.addEventListener("click", () => {
    setSoundEnabled(false);
    updateSettingsUI();
  });
  document.getElementById("settingsCollectOn")?.addEventListener("click", () => {
    if (!collectModeUnlocked()) { showToast(modeLockText("whitebeard_reveal")); return; }
    setCollectMode(true);
    updateSettingsUI();
    showToast((TRANSLATIONS[currentLang] || {}).settingsSaved || "OK");
  });
  document.getElementById("settingsCollectOff")?.addEventListener("click", () => {
    setCollectMode(false);
    updateSettingsUI();
  });
  document.getElementById("settingsSpecialOn")?.addEventListener("click", () => {
    if (!specialModeUnlocked()) { showToast(modeLockText("roger_shiny")); return; }
    setSpecialMode(true);
    updateSettingsUI();
    showToast((TRANSLATIONS[currentLang] || {}).settingsSaved || "OK");
  });
  document.getElementById("settingsSpecialOff")?.addEventListener("click", () => {
    setSpecialMode(false);
    updateSettingsUI();
  });
  document.getElementById("settingsResetBtn")?.addEventListener("click", settingsResetProgress);
  document.getElementById("settingsDeleteBtn")?.addEventListener("click", settingsDeleteAccount);
}

function applyLanguageUI() {
  // Réutilise la logique de toggleLanguage sans inverser
  const prev = currentLang;
  // force refresh: temporarily set opposite then call toggle? Better extract.
  if (typeof updateAllLabels === "function") {
    updateAllLabels();
  } else if (typeof toggleLanguage === "function") {
    // toggleLanguage flips language — call twice is noop; instead set storage and manually flip once from wrong
    const want = prev;
    currentLang = want === "fr" ? "en" : "fr";
    toggleLanguage(); // flips to want and updates labels
  }
  document.documentElement.lang = currentLang;
  // Filtres du sélecteur d'avatar : reconstruits à la prochaine ouverture, dans
  // la langue courante (ils étaient figés dans la langue du 1er affichage).
  ["avatarSortSelect", "avatarCatFilter", "avatarRarityFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) delete el.dataset.filled;
  });
  try { if (typeof updateCollectionUI === "function") updateCollectionUI(); } catch (e) {}
  // Libellés statiques (légende des raretés, filtres du sélecteur d'avatar)
  const tt = TRANSLATIONS[currentLang] || {};
  document.querySelectorAll("[data-rarity-label]").forEach(el => {
    el.textContent = rarityLabel(parseInt(el.dataset.rarityLabel, 10), currentLang);
  });
  const arf = document.getElementById("avatarRarityFilter");
  if (arf) {
    [...arf.options].forEach(o => {
      if (o.value === "all") o.textContent = tt.allRarities || (currentLang === "fr" ? "Toutes raretés" : "All rarities");
      else if (o.value) o.textContent = rarityLabel(parseInt(o.value, 10), currentLang);
    });
  }
  const asel = document.getElementById("avatarSortSelect");
  if (asel) {
    [...asel.options].forEach(o => {
      if (o.value === "rarity") o.textContent = tt.settingsRarity || "Rarity";
      if (o.value === "category") o.textContent = tt.settingsCategory || "Category";
    });
  }
}


/* ========== Onboarding (première visite) ========== */
let onboardStep = 0;
const ONBOARD_KEY = "opdle_onboarded_v1";

function getOnboardSlides() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const slides = [
    { icon: "☠️", title: t.onboardTitle1, body: t.onboardBody1 },
    { icon: "📖", title: t.onboardTitle2, body: t.onboardBody2 },
    { icon: "🗂️", title: t.onboardTitle3, body: t.onboardBody3 }
  ];
  // Slide unique alts + shinies (nouveau système : même mécanique, shiny = niveau rare lié aux arcs).
  let hasForms = false;
  try {
    hasForms = localStorage.getItem("opdle_tip_shiny_v1") === "1" || localStorage.getItem("opdle_tip_alt_v1") === "1";
  } catch (e) {}
  if (typeof isAdmin === "function" && isAdmin()) { hasForms = true; }
  if (hasForms) {
    slides.push({
      icon: "🃏",
      title: t.onboardTitleForms || "Cartes alternatives",
      body: t.onboardBodyForms || "Alternate cards."
    });
  }
  return slides;
}

function isOnboarded() {
  try { return localStorage.getItem(ONBOARD_KEY) === "1"; } catch (e) { return false; }
}

function setOnboarded() {
  try { localStorage.setItem(ONBOARD_KEY, "1"); } catch (e) {}
}

function renderOnboardStep() {
  const slides = getOnboardSlides();
  const s = slides[onboardStep] || slides[0];
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const icon = document.getElementById("onboardIcon");
  const title = document.getElementById("onboardTitle");
  const body = document.getElementById("onboardBody");
  const prev = document.getElementById("onboardPrev");
  const next = document.getElementById("onboardNext");
  if (icon) icon.textContent = s.icon;
  if (title) title.textContent = s.title;
  if (body) body.innerHTML = s.body;
  // Rebuild dots for dynamic slide count
  const dotsWrap = document.querySelector("#onboardingModal .flex.justify-center.gap-2");
  if (dotsWrap) {
    dotsWrap.innerHTML = slides.map((_, i) =>
      `<span class="onboard-dot${i === onboardStep ? " active" : ""}" data-dot="${i}"></span>`
    ).join("");
  } else {
    document.querySelectorAll(".onboard-dot").forEach((d, i) => {
      d.classList.toggle("active", i === onboardStep);
    });
  }
  if (prev) {
    if (onboardStep === 0) prev.classList.add("hidden");
    else prev.classList.remove("hidden");
  }
  if (next) {
    next.textContent = onboardStep >= slides.length - 1 ? (t.onboardStart || "Go") : (t.onboardNext || "Next");
  }
}

function openOnboarding() {
  const modal = document.getElementById("onboardingModal");
  if (!modal) return;
  onboardStep = 0;
  renderOnboardStep();
  modal.classList.remove("hidden");
}

function closeOnboarding(markDone) {
  const modal = document.getElementById("onboardingModal");
  if (modal) modal.classList.add("hidden");
  if (markDone) setOnboarded();
}

function setupOnboarding() {
  const next = document.getElementById("onboardNext");
  const prev = document.getElementById("onboardPrev");
  const skip = document.getElementById("onboardSkip");
  if (next) next.addEventListener("click", () => {
    const slides = getOnboardSlides();
    if (onboardStep >= slides.length - 1) {
      closeOnboarding(true);
    } else {
      onboardStep++;
      renderOnboardStep();
    }
  });
  if (prev) prev.addEventListener("click", () => {
    if (onboardStep > 0) {
      onboardStep--;
      renderOnboardStep();
    }
  });
  if (skip) skip.addEventListener("click", () => closeOnboarding(true));
  // Pastilles cliquables (délégation : les dots sont reconstruits à chaque rendu)
  const modal2 = document.getElementById("onboardingModal");
  if (modal2 && !modal2.dataset.dotsBound) {
    modal2.dataset.dotsBound = "1";
    modal2.addEventListener("click", (e) => {
      const dot = e.target && e.target.closest ? e.target.closest(".onboard-dot") : null;
      if (!dot || !modal2.contains(dot)) return;
      const slides = getOnboardSlides();
      const i = Number(dot.dataset.dot);
      if (Number.isInteger(i) && i >= 0 && i < slides.length) {
        onboardStep = i;
        renderOnboardStep();
      }
    });
  }
  // Re-render text on language change while open
  const modal = document.getElementById("onboardingModal");
  if (modal && !modal.classList.contains("hidden")) renderOnboardStep();
}

function maybeShowOnboarding() {
  if (!isOnboarded()) {
    // slight delay so layout paints first
    setTimeout(openOnboarding, 400);
  }
}

/* Thème : appliqué en tout dernier — le thème Jolly Roger vérifie l'album
   Barbe Noire, qui dépend des données admin/collection initialisées plus haut. */
if (typeof applyTheme === "function") applyTheme(getTheme());
