/**
 * data/meta.js
 * Arcs, points d'histoire, listes de rareté.
 * Chargé en premier.
 */
const ARCS_DATA = [
  {
    id: "Romance Dawn",
    fr: "Romance Dawn",
    en: "Romance Dawn"
  },
  {
    id: "Orange",
    fr: "Orange",
    en: "Orange Town"
  },
  {
    id: "Syrup",
    fr: "Syrup",
    en: "Syrup Village"
  },
  {
    id: "Baratie",
    fr: "Baratie",
    en: "Baratie"
  },
  {
    id: "Arlong Park",
    fr: "Arlong Park",
    en: "Arlong Park"
  },
  {
    id: "Loguetown",
    fr: "Loguetown",
    en: "Loguetown"
  },
  {
    id: "Reverse Mountain",
    fr: "Reverse Mountain",
    en: "Reverse Mountain"
  },
  {
    id: "Whiskey Peak",
    fr: "Whiskey Peak",
    en: "Whisky Peak"
  },
  {
    id: "Little Garden",
    fr: "Little Garden",
    en: "Little Garden"
  },
  {
    id: "Royaume de Drum",
    fr: "Royaume de Drum",
    en: "Drum Island"
  },
  {
    id: "Alabasta",
    fr: "Alabasta",
    en: "Alabasta"
  },
  {
    id: "Jaya",
    fr: "Jaya",
    en: "Jaya"
  },
  {
    id: "Skypiea",
    fr: "Skypiea",
    en: "Skypiea"
  },
  {
    id: "Long Ring Long Land",
    fr: "Long Ring Long Land",
    en: "Long Ring Long Land"
  },
  {
    id: "Water 7",
    fr: "Water 7",
    en: "Water 7"
  },
  {
    id: "Enies Lobby",
    fr: "Enies Lobby",
    en: "Enies Lobby"
  },
  {
    id: "Post-Enies Lobby",
    fr: "Post-Enies Lobby",
    en: "Post-Enies Lobby"
  },
  {
    id: "Thriller Bark",
    fr: "Thriller Bark",
    en: "Thriller Bark"
  },
  {
    id: "Archipel de Sabaody",
    fr: "Archipel de Sabaody",
    en: "Sabaody Archipelago"
  },
  {
    id: "Amazon Lily",
    fr: "Amazon Lily",
    en: "Amazon Lily"
  },
  {
    id: "Impel Down",
    fr: "Impel Down",
    en: "Impel Down"
  },
  {
    id: "Marineford",
    fr: "Marineford",
    en: "Marineford"
  },
  {
    id: "Post-Marineford",
    fr: "Post-Marineford",
    en: "Post-Marineford"
  },
  {
    id: "Île des Hommes-Poissons",
    fr: "Île des Hommes-Poissons",
    en: "Fish-Man Island"
  },
  {
    id: "Punk Hazard",
    fr: "Punk Hazard",
    en: "Punk Hazard"
  },
  {
    id: "Dressrosa",
    fr: "Dressrosa",
    en: "Dressrosa"
  },
  {
    id: "Zou",
    fr: "Zou",
    en: "Zou"
  },
  {
    id: "Whole Cake Island",
    fr: "Whole Cake Island",
    en: "Whole Cake Island"
  },
  {
    id: "Rêverie",
    fr: "Rêverie",
    en: "Levely"
  },
  {
    id: "Stampede",
    fr: "Film : Stampede",
    en: "Film: Stampede"
  },
  {
    id: "Wano Kuni",
    fr: "Wano Kuni",
    en: "Wano Country"
  },
  {
    id: "Film Red",
    fr: "Film : Red",
    en: "Film: Red"
  },
  {
    id: "Egghead",
    fr: "Egghead",
    en: "Egghead"
  },
  {
    id: "Elbaf",
    fr: "Elbaf",
    en: "Elbaf"
  }
];

const ARCS_ORDER = ARCS_DATA.map(a => a.id);

/**
 * Filtres "Histoire" : maxArc = dernière arc connue du lecteur à ce point.
 * "all" = infos actuelles (post-Egghead / manga en cours).
 */
const STORY_POINTS = {
  eastblue: {
    maxArc: "Loguetown",
    labelKey: "storyEastBlue"
  },
  alabasta: {
    maxArc: "Alabasta",
    labelKey: "storyAlabasta"
  },
  skypiea: {
    maxArc: "Skypiea",
    labelKey: "storySkypiea"
  },
  water7: {
    maxArc: "Post-Enies Lobby",
    labelKey: "storyWater7"
  },
  thriller: {
    maxArc: "Thriller Bark",
    labelKey: "storyThriller"
  },
  marineford: {
    maxArc: "Post-Marineford",
    labelKey: "storyMarineford"
  },
  fishman: {
    maxArc: "Île des Hommes-Poissons",
    labelKey: "storyFishman"
  },
  dressrosa: {
    maxArc: "Dressrosa",
    labelKey: "storyDressrosa"
  },
  wholecake: {
    maxArc: "Whole Cake Island",
    labelKey: "storyWholeCake"
  },
  wano: {
    maxArc: "Wano Kuni",
    labelKey: "storyWano"
  },
  all: {
    maxArc: null,
    labelKey: "storyAll"
  }
};

const STORY_ORDER = ["eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford", "fishman", "dressrosa", "wholecake", "wano", "all"];

// --- Rareté (album + tirage) ---
// 6 = Légende : mystique maximal, quasi aucune notoriété publique (Imu, Joy Boy…)
const RARITY_LEGENDARY = new Set([
  "Gunko",
  "Imu",
  "Joy Boy",
  "Loki",
  "Rocks D. Xebec",
  "Saint Figarland Garling",
  "Shamrock",
  "Zunesha"
]);
// 5 = Mythique : légendes mondiales connues de nom, jamais croisées
const RARITY_MYTHIC = new Set([
  "Edward Newgate",
  "Emet",
  "Gol D. Roger",
  "Kozuki Oden",
  "Monkey D. Dragon",
  "Ryuma",
  "Scopper Gaban",
  "Shiki",
  "Silvers Rayleigh"
]);
// 4 = Épique : sommets de puissance ET de notoriété (Yonko, amiraux…)
const RARITY_EPIC = new Set([
  "Aramaki",
  "Bartholomew Kuma",
  "Big Mom",
  "Boa Hancock",
  "Borsalino",
  "Buggy",
  "Catarina Devon",
  "Charlotte Katakuri",
  "Donquixote Doflamingo",
  "Douglas Bullet",
  "Dr. Vegapunk",
  "Dracule Mihawk",
  "Issho",
  "Kaido",
  "King",
  "Kuzan",
  "Marco",
  "Marshall D. Teach",
  "Monkey D. Garp",
  "Queen",
  "Rob Lucci",
  "Saint Ethanbaron V. Nusjuro",
  "Saint Jaygarcia Saturn",
  "Saint Marcus Mars",
  "Saint Shepherd Ju Peter",
  "Saint Topman Warcury",
  "Sakazuki",
  "Sengoku",
  "Shanks",
  "Uta"
]);
// 3 = Rare : milieu du panier — notables mais exposés, ou obscurs mais incontournables
const RARITY_RARE = new Set([
  "Atlas",
  "Bartolomeo",
  "Basil Hawkins",
  "Belo Betty",
  "Benn Beckman",
  "Bentham (Mr. 2)",
  "Black Maria",
  "Blueno",
  "Caesar Clown",
  "Capone Bege",
  "Carrot",
  "Cavendish",
  "Charlotte Cracker",
  "Charlotte Pudding",
  "Charlotte Smoothie",
  "Crocodile",
  "Daz Bonez (Mr. 1)",
  "Diamante",
  "Doc Q",
  "Don Chinjao",
  "Donquixote Rosinante",
  "Dr. Hiriluk",
  "Dr. Kureha",
  "Edison",
  "Edward Weevil",
  "Emporio Ivankov",
  "Enel",
  "Eustass Kid",
  "Fisher Tiger",
  "Fukurou",
  "Galdino (Mr. 3)",
  "Gan Fall",
  "Gecko Moria",
  "Gloriosa",
  "Hack",
  "Hajrudin",
  "Hody Jones",
  "Iceburg",
  "Inuarashi",
  "Izo",
  "Jabra",
  "Jack",
  "Jaguar D. Saul",
  "Jesus Burgess",
  "Jewelry Bonney",
  "Jozu",
  "Kaku",
  "Kalifa",
  "Kanjuro",
  "Karasu",
  "Killer",
  "Kin'emon",
  "Kozuki Hiyori",
  "Kozuki Momonosuke",
  "Kumadori",
  "Kurozumi Orochi",
  "Kyros",
  "Lafitte",
  "Lilith",
  "Lindbergh",
  "Little Oars Jr.",
  "Lucky Roux",
  "Magellan",
  "Mont Blanc Noland",
  "Morgans",
  "Morley",
  "Nefertari Cobra",
  "Nekomamushi",
  "Neptune",
  "Oars",
  "Otohime",
  "Page One",
  "Paulie",
  "Pedro",
  "Pekoms",
  "Perona",
  "Pica",
  "Pythagoras",
  "Riku Doldo III",
  "Sabo",
  "Scratchmen Apoo",
  "Senor Pink",
  "Sentomaru",
  "Shaka",
  "Shakuyaku",
  "Shirahoshi",
  "Shiryu",
  "Smoker",
  "Spandam",
  "Stussy",
  "Sugar",
  "Thatch",
  "Tom",
  "Trafalgar D. Water Law",
  "Trebol",
  "Tsuru",
  "Ulti",
  "Urouge",
  "Van Augur",
  "Vander Decken IX",
  "Vergo",
  "Vinsmoke Judge",
  "Vinsmoke Reiju",
  "Vista",
  "Who's-Who",
  "X Drake",
  "Yamato",
  "Yasopp",
  "York",
  "Zeff"
]);
// 2 = Peu commun : personnages random sans notoriété (défaut)
const RARITY_UNCOMMON = new Set([
  "Absalom",
  "Baby 5",
  "Bellamy",
  "Bepo",
  "Boa Marigold",
  "Boa Sandersonia",
  "Broggy",
  "Camie",
  "Caribou",
  "Charlotte Brûlée",
  "Charlotte Chiffon",
  "Charlotte Mont-d'Or",
  "Charlotte Oven",
  "Charlotte Perospero",
  "Conis",
  "Crocus",
  "Curly Dadan",
  "Dalton",
  "Dellinger",
  "Denjiro",
  "Dorry",
  "Dr. Hogback",
  "Elizabello II",
  "Foxy",
  "Fukaboshi",
  "Gedatsu",
  "Ginny",
  "Gladius",
  "Going Merry",
  "Hachi",
  "Ideo",
  "Igaram",
  "Inazuma",
  "Jango",
  "Kawamatsu",
  "Kaya",
  "Kikunojo",
  "Koala",
  "Kokoro",
  "Koza",
  "Kuina",
  "Lao G",
  "Leo",
  "Lola",
  "Manboshi",
  "Mansherry",
  "Miss Merry Christmas",
  "Miss Valentine",
  "Monet",
  "Mont Blanc Cricket",
  "Mr. 4",
  "Mr. 5",
  "Ohm",
  "Orlumbus",
  "Otama",
  "Pappag",
  "Pell",
  "Raizo",
  "Rebecca",
  "Ryuboshi",
  "Sai",
  "Satori",
  "Shura",
  "Shutenmaru",
  "Tamago",
  "Thousand Sunny",
  "Vinsmoke Ichiji",
  "Vinsmoke Niji",
  "Vinsmoke Yonji",
  "Viola",
  "Wanda",
  "Wapol",
  "Wyper"
]);
// 1 = Commun : ultra connus et/ou très précoces dans l'histoire
const RARITY_COMMON = new Set([
  "Alvida",
  "Arlong",
  "Axe Man Morgan",
  "Belle-mère",
  "Brook",
  "Cabaji",
  "Coby",
  "Don Krieg",
  "Franky",
  "Gaimon",
  "Genzo",
  "Gin",
  "Helmeppo",
  "Jinbe",
  "Karoo",
  "Kuro",
  "Mohji",
  "Monkey D. Luffy",
  "Nami",
  "Nefertari Vivi",
  "Nico Robin",
  "Nojiko",
  "Portgas D. Ace",
  "Richie",
  "Roronoa Zoro",
  "Tashigi",
  "Tony Tony Chopper",
  "Usopp",
  "Vinsmoke Sanji"
]);

function applyRarityToCharacters(list) {
  if (!list) return;
  list.forEach(c => {
    if (RARITY_LEGENDARY.has(c.name)) c.rarity = 6;
    else if (RARITY_MYTHIC.has(c.name)) c.rarity = 5;
    else if (RARITY_EPIC.has(c.name)) c.rarity = 4;
    else if (RARITY_RARE.has(c.name)) c.rarity = 3;
    else if (RARITY_UNCOMMON.has(c.name)) c.rarity = 2;
    else if (RARITY_COMMON.has(c.name)) c.rarity = 1;
    else if (c.rarity == null) c.rarity = 2;
  });
}

/**
 * Notoriété CACHÉE (jamais affichée) : à quel point le personnage est
 * reconnaissable — 1 = icône (boosté en facile), 6 = ultra niche (pénalisé
 * sauf en extrême). Défaut = 3 (neutre). Ne change PAS la rareté visible
 * (album) : c'est un multiplicateur du poids de tirage, qui se resserre
 * quand la difficulté monte (en extrême, niche et cool sortent plus).
 */
const HIDDEN_NICHE = {
  1: [
    "Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Vinsmoke Sanji",
    "Tony Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe",
    "Portgas D. Ace", "Sabo", "Shanks", "Buggy", "Nefertari Vivi", "Coby"
  ],
  2: [
    "Trafalgar D. Water Law", "Eustass Kid", "Boa Hancock",
    "Donquixote Doflamingo", "Dracule Mihawk", "Crocodile",
    "Charlotte Katakuri", "Marco", "Rob Lucci", "Monkey D. Garp", "Sengoku",
    "Sakazuki", "Borsalino", "Kuzan", "Issho", "Monkey D. Dragon",
    "Silvers Rayleigh", "Gol D. Roger", "Edward Newgate", "Kaido", "Big Mom",
    "Marshall D. Teach", "Kozuki Oden", "Yamato", "Emporio Ivankov",
    "Gecko Moria", "Enel", "Bartholomew Kuma", "Smoker", "Tashigi", "Perona",
    "Jewelry Bonney", "Capone Bege", "Basil Hawkins", "Scratchmen Apoo",
    "X Drake", "Killer", "Urouge", "Caesar Clown", "Carrot", "Pedro",
    "Magellan", "Arlong", "Kuro", "Zeff", "Spandam", "Senor Pink",
    "Donquixote Rosinante", "Bartolomeo", "Morgans", "Uta", "Scopper Gaban",
    "Rocks D. Xebec", "Ryuma", "Galdino (Mr. 3)",
    "Bentham (Mr. 2)", "Vinsmoke Reiju", "Vista", "Jozu"
  ],
  4: [
    "Bellamy", "Leo", "Hachi", "Camie", "Pappag", "Kaya", "Jango", "Dalton",
    "Mansherry",
    "Wapol", "Viola", "Baby 5", "Dellinger", "Koala", "Bepo", "Igaram",
    "Pell", "Karoo", "Mont Blanc Cricket", "Conis", "Gan Fall", "Paulie",
    "Kokoro", "Absalom", "Lola", "Cavendish", "Pekoms", "Tamago",
    "Charlotte Chiffon", "Charlotte Brûlée", "Gin", "Axe Man Morgan",
    "Nojiko", "Genzo", "Belle-mère", "Denjiro", "Kawamatsu", "Shutenmaru",
    "Caribou", "Sentomaru", "Shaka", "Lilith", "Edison", "Pythagoras",
    "Atlas", "York", "Ginny", "Karasu", "Hack", "Inazuma", "Belo Betty",
    "Morley", "Tsuru", "Shiryu", "Lafitte", "Doc Q", "Van Augur",
    "Catarina Devon", "Curly Dadan", "Diamante", "Trebol", "Vergo", "Monet",
    "Crocus", "Oars", "Vander Decken IX", "Kalifa", "Blueno", "Jabra",
    "Kumadori", "Fukurou", "Mr. 5", "Miss Valentine", "Wanda",
    "Vinsmoke Ichiji", "Vinsmoke Niji", "Vinsmoke Yonji",
    "Charlotte Smoothie", "Raizo", "Lao G", "Riku Doldo III", "Hajrudin",
    "Richie", "Mohji", "Cabaji", "Saint Marcus Mars",
    "Saint Topman Warcury", "Saint Ethanbaron V. Nusjuro",
    "Saint Shepherd Ju Peter", "Douglas Bullet", "Ideo"
  ],
  5: [
    "Ohm", "Shura", "Satori", "Gedatsu", "Koza", "Fukaboshi", "Gladius"
  ],
  6: [
    "Ryuboshi", "Manboshi", "Miss Merry Christmas", "Mr. 4",
    "Boa Sandersonia", "Boa Marigold", "Lindbergh", "Dr. Hogback",
    "Charlotte Oven", "Charlotte Mont-d'Or",
    "Imu", "Joy Boy", "Loki"
  ]
};

function applyNicheToCharacters(list) {
  if (!list) return;
  const byName = {};
  for (const lvl of Object.keys(HIDDEN_NICHE)) {
    for (const n of HIDDEN_NICHE[lvl]) byName[n] = Number(lvl);
  }
  list.forEach(c => {
    c.niche = byName[c.name] || 3;
  });
}
