/**
 * data/characters.js
 * Stats ACTUELLES (filtre « Actuel »).
 */
const CHARACTERS = [
  {
    name: "Monkey D. Luffy",
    image: "img/Luffy.webp",
    aliases: [
  "LUFFY",
  "MUGIWARA",
  "CHAPEAU DE PAILLE",
  "MONKEY",
  "STRAW HAT",
  "EQUIPAGE DE LUFFY",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "CAPITAINE",
  "L HOMME QUI DEVIENDRA ROI DES PIRATES",
  "GEAR 5"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 3000000000,
    arc: "Romance Dawn",
    titre: { fr: "Capitaine, Supernova, Empereur", en: "Captain, Supernova, Emperor" },
    age: 19,
    height: 174,
    rarity: 1
  },
  {
    name: "Roronoa Zoro",
    image: "img/Zoro.webp",
    aliases: [
  "ZORO",
  "CHASSEUR DE PIRATES",
  "RORONOA",
  "PIRATE HUNTER",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "EPEISTE",
  "SABREUR",
  "TROIS EPEE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 1111000000,
    arc: "Romance Dawn",
    titre: { fr: "Supernova, Equipage d'empereur", en: "Supernova, Emperor's Crew" },
    age: 21,
    height: 181,
    rarity: 1
  },
  {
    name: "Nami",
    image: "img/Nami.webp",
    aliases: [
  "NAMI",
  "CAT BURGLAR",
  "VOLEUSE",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "NAVIGATRICE",
  "LA BELLE VOLEUSE",
  "CHAT"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 366000000,
    arc: "Orange",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 20,
    height: 170,
    rarity: 1
  },
  {
    name: "Usopp",
    image: "img/Usopp.webp",
    aliases: [
  "USOPP",
  "SOGEKING",
  "GOD USOPP",
  "PIPO",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "TIR EMBUSQUE",
  "SNIPER",
  "LONG NEZ",
  "ROI DES SNIPERS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 500000000,
    arc: "Syrup",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 19,
    height: 176,
    rarity: 1
  },
  {
    name: "Vinsmoke Sanji",
    image: "img/Sanji.webp",
    aliases: [
  "SANJI",
  "PIED NOIR",
  "BLACK LEG",
  "VINSMOKE",
  "SOBA MASK",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "CUISINIER",
  "JAMBE NOIRE",
  "JAMBES NOIRES",
  "LES JAMBES NOIRES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1032000000,
    arc: "Baratie",
    titre: { fr: "Equipage d'empereur, Famille Royale", en: "Emperor's Crew, Royal Family" },
    age: 21,
    height: 180,
    rarity: 1
  },
  {
    name: "Tony Tony Chopper",
    image: "img/Chopper.webp",
    aliases: [
  "CHOPPER",
  "TONY TONY",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "RENNE",
  "MEDECIN",
  "NEZ BLEU",
  "DOCTEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 1000,
    arc: "Royaume de Drum",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 17,
    height: 90,
    rarity: 1
  },
  {
    name: "Nico Robin",
    image: "img/Robin.webp",
    aliases: [
  "ROBIN",
  "DEMON CHILD",
  "NICO",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "ARCHEOLOGUE",
  "DEMON",
  "MISS ALL SUNDAY"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 930000000,
    arc: "Whiskey Peak",
    titre: { fr: "Agent, Equipage d'empereur", en: "Agent, Emperor's Crew" },
    age: 30,
    height: 188,
    rarity: 1
  },
  {
    name: "Franky",
    image: "img/Franky.webp",
    aliases: [
  "FRANKY",
  "CUTTY FLAM",
  "CYBORG",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "CHARBON",
  "MENUISIER"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 394000000,
    arc: "Water 7",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 36,
    height: 240,
    rarity: 1
  },
  {
    name: "Brook",
    image: "img/Brook.webp",
    aliases: [
  "BROOK",
  "SOUL KING",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "SQUELETTE",
  "MUSICIEN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 383000000,
    arc: "Thriller Bark",
    titre: { fr: "Capitaine, Equipage d'empereur", en: "Captain, Emperor's Crew" },
    age: 90,
    height: 277,
    rarity: 1
  },
  {
    name: "Jinbe",
    image: "img/Jinbe.webp",
    aliases: [
  "JINBE",
  "JINBEI",
  "PALADIN DES MERS",
  "FIRST SON OF THE SEA",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "TIMONIER",
  "CHEVALIER DE LA MER",
  "PREMIER FILS DE LA MER"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Chapeau de paille",
      en: "Straw Hat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1100000000,
    arc: "Impel Down",
    titre: { fr: "Capitaine, Corsaire, Equipage d'empereur", en: "Captain, Warlord, Emperor's Crew" },
    age: 46,
    height: 301,
    rarity: 1
  },
  {
    name: "Portgas D. Ace",
    image: "img/Ace.webp",
    aliases: [
  "ACE",
  "POINGS ARDENTS",
  "FIRE FIST",
  "PORTGAS",
  "BARBE BLANCHE",
  "EQUIPAGE DE NEWGATE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Armement, Roi",
      en: "Armament, Conqueror's"
    },
    prime: 550000000,
    arc: "Royaume de Drum",
    titre: { fr: "Capitaine, Commandant, Equipage d'empereur", en: "Captain, Commander, Emperor's Crew" },
    age: 20,
    height: 185,
    rarity: 1
  },
  {
    name: "Sabo",
    image: "img/Sabo.webp",
    aliases: [
  "SABO",
  "EMPEREUR DES FLAMMES",
  "FLAME EMPEROR",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "FRERE DE LUFFY",
  "CHEF D ETAT MAJOR",
  "L HOMME QUI BRULE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: null,
    arc: "Post-Marineford",
    titre: { fr: "Commandant, Révolutionnaire", en: "Commander, Revolutionary" },
    age: 22,
    height: 187,
    rarity: 2
  },
  {
    name: "Trafalgar D. Water Law",
    image: "img/Law.webp",
    aliases: [
  "LAW",
  "TRAFALGAR",
  "CHIRURGIEN DE LA MORT",
  "SURGEON OF DEATH",
  "WATER LAW",
  "HEART PIRATES",
  "EQUIPAGE DE LAW",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "CAPITAINE DU HEART"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Heart",
      en: "Heart Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 3000000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Corsaire, Supernova", en: "Captain, Warlord, Supernova" },
    age: 26,
    height: 191,
    rarity: 2
  },
  {
    name: "Eustass Kid",
    image: "img/Kid.webp",
    aliases: [
  "KID",
  "EUSTASS",
  "CAPTAIN KID",
  "KID PIRATES",
  "EQUIPAGE DE KID",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "CAPITAINE DES PIRATES DE KID",
  "AIMANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Kid",
      en: "Kid Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 3000000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova", en: "Captain, Supernova" },
    age: 23,
    height: 205,
    rarity: 2
  },
  {
    name: "Shanks",
    image: "img/Shanks.webp",
    aliases: [
  "SHANKS",
  "LE ROUX",
  "RED HAIR",
  "BARBE ROUGE",
  "EQUIPAGE DE SHANKS",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "CAPITAINE DES PIRATES DU ROUX"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Roux",
      en: "Red Hair Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 4048900000,
    arc: "Romance Dawn",
    titre: { fr: "Capitaine, Empereur", en: "Captain, Emperor" },
    age: 39,
    height: 199,
    rarity: 2
  },
  {
    name: "Buggy",
    image: "img/Buggy.webp",
    aliases: [
  "BUGGY",
  "LE CLOWN",
  "BAGGY",
  "STAR CLOWN",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "LE NEZ ROUGE",
  "CAPITAINE BUGGY"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 3189000000,
    arc: "Orange",
    titre: { fr: "Capitaine, Corsaire, Empereur", en: "Captain, Warlord, Emperor" },
    age: 39,
    height: 192,
    rarity: 1
  },
  {
    name: "Dracule Mihawk",
    image: "img/Mihawk.webp",
    aliases: [
  "MIHAWK",
  "OEIL DE FAUCON",
  "HAWKEYE",
  "DRACULE",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "L OEIL DE FAUCON",
  "LE MEILLEUR EPEEISTE",
  "LE MAITRE EPEEISTE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 3590000000,
    arc: "Baratie",
    titre: { fr: "Corsaire, Equipage d'empereur", en: "Warlord, Emperor's Crew" },
    age: 43,
    height: 198,
    rarity: 2
  },
  {
    name: "Crocodile",
    image: "img/Crocodile.webp",
    aliases: [
  "CROCODILE",
  "SIR CROCODILE",
  "MR. 0",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "LE CROCODILE",
  "LE ROI DU DESERT",
  "MR 0"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
    prime: 1965000000,
    arc: "Little Garden",
    titre: { fr: "Capitaine, Corsaire, Agent, Equipage d'empereur", en: "Captain, Warlord, Agent, Emperor's Crew" },
    age: 46,
    height: 253,
    rarity: 2
  },
  {
    name: "Smoker",
    image: "img/Smoker.webp",
    aliases: [
  "SMOKER",
  "CHASSEUR BLANC",
  "WHITE CHASER",
  "MARINE",
  "LE FUMEUR",
  "L HOMME QUI FUME TOUJOURS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Loguetown",
    titre: { fr: "Vice-Amiral", en: "Vice Admiral" },
    age: 36,
    height: 209,
    rarity: 1
  },
  {
    name: "Donquixote Doflamingo",
    image: "img/Doflamingo.webp",
    aliases: [
  "DOFLAMINGO",
  "JOKER",
  "HEAVENLY YAKSHA",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "JOLLY ROGER",
  "L HOMME EN BLANC",
  "LE POUVOIR DE LA CITE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 340000000,
    arc: "Jaya",
    titre: { fr: "Capitaine, Corsaire, Famille Royale", en: "Captain, Warlord, Royal Family" },
    age: 41,
    height: 305,
    rarity: 2
  },
  {
    name: "Charlotte Katakuri",
    image: "img/Katakuri.webp",
    aliases: [
  "KATAKURI",
  "PIRATES DE BIG MOM",
  "GRAND FRERE",
  "MOCHI",
  "LE SECOND FILS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Special Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 1057000000,
    arc: "Whole Cake Island",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 48,
    height: 509,
    rarity: 3
  },
  {
    name: "Kaido",
    image: "img/Kaido.webp",
    aliases: [
  "KAIDO",
  "CREATURE LA PLUS FORTE",
  "STRONGEST CREATURE",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "LA BETE LA PLUS FORTE DU MONDE",
  "L IMMORTEL",
  "LE ROI DES BETES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates aux Cents Bêtes",
      en: "Beast Pirates"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 4611100000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Empereur", en: "Captain, Emperor" },
    age: 59,
    height: 710,
    rarity: 3
  },
  {
    name: "Big Mom",
    image: "img/Bigmom.webp",
    aliases: [
  "BIG MOM",
  "CHARLOTTE LINLIN",
  "LINLIN",
  "PIRATES DE BIG MOM",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "TOT LAND",
  "LA REINE DE TOUTO LAND"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 4388000000,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Capitaine, Empereur", en: "Captain, Emperor" },
    age: 68,
    height: 880,
    rarity: 3
  },
  {
    name: "Edward Newgate",
    image: "img/Barbeblanche.webp",
    aliases: [
  "BARBE BLANCHE",
  "WHITEBEARD",
  "EDWARD NEWGATE",
  "EQUIPAGE DE NEWGATE",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "L HOMME LE PLUS FORT DU MONDE",
  "CAPITAINE DE BARBE BLANCHE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 5046000000,
    arc: "Jaya",
    titre: { fr: "Capitaine, Empereur", en: "Captain, Emperor" },
    age: 72,
    height: 666,
    rarity: 3
  },
  {
    name: "Marshall D. Teach",
    image: "img/Barbenoire.webp",
    aliases: [
  "BARBE NOIRE",
  "BLACKBEARD",
  "TEACH",
  "EQUIPAGE DE TEACH",
  "EMPEREUR",
  "YONKO",
  "QUATRE EMPEREURS",
  "L HOMME AUX DEUX FRUITS",
  "LE CELIBATAIRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Noire",
      en: "Blackbeard Pirates"
    },
    fruit: {
      fr: "Logia, Paramecia",
      en: "Logia, Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 3996000000,
    arc: "Jaya",
    titre: { fr: "Capitaine, Corsaire, Empereur", en: "Captain, Warlord, Emperor" },
    age: 40,
    height: 344,
    rarity: 3
  },
  {
    name: "Yamato",
    image: "img/Yamato.webp",
    aliases: [
  "YAMATO",
  "FILS DE KAIDO",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "FILS D ODEN",
  "FILLE DE KAIDO",
  "OKAZAKI"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Allié", en: "Ally" },
    age: 28,
    height: 263,
    rarity: 2
  },
  {
    name: "Boa Hancock",
    image: "img/Boa.webp",
    aliases: [
  "HANCOCK",
  "PRINCESSE SERPENT",
  "PIRATE EMPRESS",
  "BOA",
  "KUJA",
  "AMAZON LILY",
  "AMAZONES",
  "REINE DES AMAZONES",
  "IMPERATRICE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates Kuja",
      en: "Kuja Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 1659000000,
    arc: "Amazon Lily",
    titre: { fr: "Capitaine, Corsaire, Famille Royale", en: "Captain, Warlord, Royal Family" },
    age: 31,
    height: 191,
    rarity: 2
  },
  {
    name: "Gol D. Roger",
    image: "img/Roger.webp",
    aliases: [
  "ROGER",
  "GOL D. ROGER",
  "ROI DES PIRATES",
  "PIRATE KING",
  "PIRATES DE ROGER",
  "CAPITAINE ROGER",
  "GOLD ROGER"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Roger",
      en: "Roger Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 5564800000,
    arc: "Romance Dawn",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 53,
    height: 274,
    rarity: 4
  },
  {
    name: "Silvers Rayleigh",
    image: "img/Rayleigh.webp",
    aliases: [
  "RAYLEIGH",
  "SEIGNEUR SOMBRE",
  "DARK KING",
  "SILVERS",
  "PIRATES DE ROGER",
  "ROI SOMBRE",
  "BRAS DROIT DE ROGER",
  "L HOMME SOMBRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Roger",
      en: "Roger Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: null,
    arc: "Archipel de Sabaody",
    titre: { fr: "Aucun", en: "None" },
    age: 78,
    height: 188,
    rarity: 4
  },
  {
    name: "Rob Lucci",
    image: "img/Lucci.webp",
    aliases: [
  "LUCCI",
  "ROB LUCCI",
  "CP0",
  "CP9",
  "AGENT DU CP9",
  "AGENT DU CP0",
  "LEOPARD",
  "PUISSANCE DE NEUF",
  "LE PLUS FORT DU CP9"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Agent", en: "Agent" },
    age: 30,
    height: 212,
    rarity: 2
  },
  {
    name: "Marco",
    image: "img/Marco.webp",
    aliases: [
  "MARCO",
  "MARCO LE PHENIX",
  "MARCO THE PHOENIX",
  "PHENIX",
  "BARBE BLANCHE",
  "EQUIPAGE DE NEWGATE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1374000000,
    arc: "Jaya",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 45,
    height: 203,
    rarity: 2
  },
  {
    name: "Borsalino",
    image: "img/Kizaru.webp",
    aliases: [
  "KIZARU",
  "BORSALINO",
  "MARINE",
  "AMIRAL",
  "AMIRAUX",
  "LE SINGE JAUNE",
  "YELLOW MONKEY"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Archipel de Sabaody",
    titre: { fr: "Amiral", en: "Admiral" },
    age: 58,
    height: 302,
    rarity: 3
  },
  {
    name: "Sakazuki",
    image: "img/Akainu.webp",
    aliases: [
  "AKAINU",
  "SAKAZUKI",
  "MARINE",
  "AMIRAL",
  "AMIRAUX",
  "AMIRAL EN CHEF",
  "LE CHIEN ROUGE",
  "RED DOG"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Enies Lobby",
    titre: { fr: "Amiral", en: "Admiral" },
    age: 55,
    height: 306,
    rarity: 3
  },
  {
    name: "Monkey D. Garp",
    image: "img/Garp.webp",
    aliases: [
  "GARP",
  "LE HEROS DE LA MARINE",
  "GARP THE FIST",
  "GARP LE HEROS",
  "MONKEY D GARP",
  "MARINE",
  "POING D AMOUR",
  "HEROS DE LA MARINE",
  "GRAND PERE DE LUFFY"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 0,
    arc: "Arlong Park",
    titre: { fr: "Vice-Amiral", en: "Vice Admiral" },
    age: 78,
    height: 287,
    rarity: 2
  },
  {
    name: "Sengoku",
    image: "img/Sengoku.webp",
    aliases: [
  "SENGOKU",
  "LE BOUDDHA",
  "SENGOKU THE BUDDHA",
  "SENGOKU LE BOUDDHA",
  "MARINE",
  "L ANCIEN AMIRAL EN CHEF"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 0,
    arc: "Jaya",
    titre: { fr: "Amiral", en: "Admiral" },
    age: 79,
    height: 278,
    rarity: 3
  },
  {
    name: "Kuzan",
    image: "img/Aokiji.webp",
    aliases: [
  "AOKIJI",
  "KUZAN",
  "FAISAN BLEU",
  "AMIRAL",
  "AMIRAUX",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH",
  "LE FAISAN BLEU",
  "BLUE PHEASANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Noire",
      en: "Blackbeard Pirates"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: null,
    arc: "Long Ring Long Land",
    titre: { fr: "Amiral, Equipage d'empereur", en: "Admiral, Emperor's Crew" },
    age: 49,
    height: 298,
    rarity: 3
  },
  {
    name: "Issho",
    image: "img/Fujitora.webp",
    aliases: [
  "FUJITORA",
  "ISSHO",
  "TIGRE VIOLET",
  "MARINE",
  "AMIRAL",
  "AMIRAUX",
  "LE TIGRE POURPRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Amiral", en: "Admiral" },
    age: 54,
    height: 270,
    rarity: 3
  },
  {
    name: "Monkey D. Dragon",
    image: "img/Dragon.webp",
    aliases: [
  "DRAGON",
  "LE PIRE CRIMINEL",
  "WORST CRIMINAL",
  "MONKEY D DRAGON",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "LE PERE DE LUFFY",
  "L HOMME LE PLUS DANGEREUX DU MONDE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Loguetown",
    titre: { fr: "Révolutionnaire", en: "Revolutionary" },
    age: 55,
    height: 256,
    rarity: 4
  },
  {
    name: "Nefertari Vivi",
    image: "img/Vivi.webp",
    aliases: [
  "VIVI",
  "MISS WEDNESDAY",
  "NEFERTARI VIVI",
  "PRINCESSE VIVI",
  "PRINCESSE D ALABASTA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Royaume d'Alabasta",
      en: "Arabasta Kingdom"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Reverse Mountain",
    titre: { fr: "Famille Royale, Agent", en: "Royal Family, Agent" },
    age: 18,
    height: 169,
    rarity: 1
  },
  {
    name: "Coby",
    image: "img/Coby.webp",
    aliases: [
  "COBY",
  "KOBY",
  "HEROS DE HACHINOSU",
  "MARINE",
  "LE MOUSSE",
  "AMI D ENFANCE DE LUFFY"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Romance Dawn",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 18,
    height: 167,
    rarity: 1
  },
  {
    name: "Gecko Moria",
    image: "img/Moria.webp",
    aliases: [
  "MORIA",
  "GECKO MORIA",
  "GEKO",
  "LE SEIGNEUR DE L OMBRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Thriller Bark",
      en: "Thriller Bark Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 320000000,
    arc: "Thriller Bark",
    titre: { fr: "Capitaine, Corsaire", en: "Captain, Warlord" },
    age: 50,
    height: 692,
    rarity: 2
  },
  {
    name: "Emporio Ivankov",
    image: "img/Ivankov.webp",
    aliases: [
  "IVANKOV",
  "IVA",
  "FAISEUR DE MIRACLES",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "REINE OKAMA",
  "MIRACLE",
  "HORMONE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 100000000,
    arc: "Impel Down",
    titre: { fr: "Commandant", en: "Commander" },
    age: 53,
    height: 449,
    rarity: 2
  },
  {
    name: "Kaku",
    image: "img/Kaku.webp",
    aliases: [
  "KAKU",
  "VENT DE MONTAGNE",
  "CP9",
  "AGENT DU CP9",
  "CP0",
  "AGENT DU CP0",
  "GIRAFE",
  "CAPITAINE DES GALLEY LA",
  "ARCHITECTE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Agent", en: "Agent" },
    age: 25,
    height: 193,
    rarity: 2
  },
  {
    name: "Enel",
    image: "img/Enel.webp",
    aliases: [
  "ENEL",
  "ENER",
  "DIEU ENEL",
  "GOD ENEL",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "DIEU",
  "FOUDRE",
  "ELECTRICITE",
  "LE DIEU DE SKYPIEA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Skypiea",
      en: "Skypiea"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 39,
    height: 266,
    rarity: 4
  },
  {
    name: "Arlong",
    image: "img/Arlong.webp",
    aliases: [
  "ARLONG",
  "LE DENT DE SCIE",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "REQUIN SCIE",
  "REQUIN",
  "CAPITAINE DES PIRATES D ARLONG"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates d'Arlong",
      en: "Arlong Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 20000000,
    arc: "Arlong Park",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 41,
    height: 263,
    rarity: 1
  },
  {
    name: "Kozuki Oden",
    image: "img/Oden.webp",
    aliases: [
  "ODEN",
  "KOZUKI ODEN",
  "SEIGNEUR ODEN",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "DAIMYO DE WANO"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: null,
    arc: "Wano Kuni",
    titre: { fr: "Samouraï, Equipage d'empereur", en: "Samurai, Emperor's Crew" },
    age: 39,
    height: 382,
    rarity: 4
  },
  {
    name: "Tashigi",
    image: "img/Tashigi.webp",
    aliases: [
  "TASHIGI",
  "MARINE",
  "FUMEUSE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Loguetown",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 23,
    height: 170,
    rarity: 1
  },
  {
    name: "Kozuki Momonosuke",
    image: "img/Momonosuke.webp",
    aliases: [
  "MOMONOSUKE",
  "MOMO",
  "KOZUKI MOMONOSUKE",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "DAIMYO DE WANO",
  "DRAGON"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
    prime: 0,
    arc: "Punk Hazard",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 28,
    height: 322,
    rarity: 2
  },
  {
    name: "Basil Hawkins",
    image: "img/Hawkins.webp",
    aliases: [
  "HAWKINS",
  "BASIL HAWKINS",
  "LE MAGICIEN",
  "MAGICIAN",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "MAGICIEN",
  "CARTES",
  "LA PAILLE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Hawkins",
      en: "Hawkins Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 320000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova, Equipage d'empereur", en: "Captain, Supernova, Emperor's Crew" },
    age: 31,
    height: 210,
    rarity: 2
  },
  {
    name: "Scratchmen Apoo",
    image: "img/Apoo.webp",
    aliases: [
  "APOO",
  "SCRATCHMEN APOO",
  "ROAR OF THE SEA",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "MUSICIEN",
  "BRUIT",
  "LE RUGISSEMENT DE LA MER"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates On-Air",
      en: "On-Air Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 350000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova, Equipage d'empereur", en: "Captain, Supernova, Emperor's Crew" },
    age: 31,
    height: 256,
    rarity: 2
  },
  {
    name: "X Drake",
    image: "img/Xdrake.webp",
    aliases: [
  "DRAKE",
  "X DRAKE",
  "DRAKE LE PAVILLON ROUGE",
  "RED FLAG",
  "MARINE",
  "TOBIROPPO",
  "OFFICIER DES BEAST PIRATES",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Ancien Zoan",
      en: "Ancient Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 222000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova, Equipage d'empereur", en: "Captain, Supernova, Emperor's Crew" },
    age: 33,
    height: 233,
    rarity: 2
  },
  {
    name: "Killer",
    image: "img/Killer.webp",
    aliases: [
  "KILLER",
  "MASSACRE SOLDIER",
  "KAMAZO",
  "KID PIRATES",
  "EQUIPAGE DE KID",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "BRAS DROIT DE KID",
  "MASQUE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Kid",
      en: "Kid Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 200000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Supernova", en: "Supernova" },
    age: 27,
    height: 195,
    rarity: 2
  },
  {
    name: "Jewelry Bonney",
    image: "img/Bonney.webp",
    aliases: [
  "BONNEY",
  "JEWELRY BONNEY",
  "GLUTTON",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "L AFFAMEE",
  "LA PIRATE QUI MANGE TOUT"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Bonney",
      en: "Bonney Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: 320000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova", en: "Captain, Supernova" },
    age: 12,
    height: 174,
    rarity: 2
  },
  {
    name: "Capone Bege",
    image: "img/Bege.webp",
    aliases: [
  "BEGE",
  "CAPONE BEGE",
  "CAPONE GANG BEGE",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "GANG BEGE",
  "LE FORT",
  "CHATEAU"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Fire Tank",
      en: "Fire Tank Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
    prime: 350000000,
    arc: "Archipel de Sabaody",
    titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
    age: 42,
    height: 166,
    rarity: 2
  },
  {
    name: "Urouge",
    image: "img/Urouge.webp",
    aliases: [
  "UROUGE",
  "MAD MONK",
  "MOINE MOINE",
  "SUPERNOVA",
  "SUPERNOVE",
  "LA PIRE GENERATION",
  "PIRE GENERATION",
  "MOINE FOU",
  "LE MOINE PIRATE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Moine Déchu",
      en: "Fallen Monk Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 108000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine, Supernova", en: "Captain, Supernova" },
    age: 47,
    height: 388,
    rarity: 3
  },
  {
    name: "Caesar Clown",
    image: "img/Caesar.webp",
    aliases: [ "CAESAR", "CAESAR CLOWN", "MUSTER", "GANG BEGE" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "MADS",
      en: "MADS"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 300000000,
    arc: "Punk Hazard",
    titre: { fr: "Aucun", en: "None" },
    age: 55,
    height: 309,
    rarity: 2
  },
  {
    name: "Carrot",
    image: "img/Carrot.webp",
    aliases: [
  "CARROT",
  "LAPIN",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "LAPINE",
  "MINK LAPIN"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Zou/Tribus Minks",
      en: "Zou/Mink Tribes"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 15,
    height: 161,
    rarity: 2
  },
  {
    name: "Charlotte Perospero",
    image: "img/Perospero.webp",
    aliases: [
  "PEROSPERO",
  "CHARLOTTE PEROSPERO",
  "PIRATES DE BIG MOM",
  "FRERE AINE",
  "SUCRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 700000000,
    arc: "Whole Cake Island",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 50,
    height: 333,
    rarity: 3
  },
  {
    name: "Charlotte Cracker",
    image: "img/Cracker.webp",
    aliases: [
  "CRACKER",
  "CHARLOTTE CRACKER",
  "CRACKER AUX MILLE BRAS",
  "PIRATES DE BIG MOM",
  "BISCUIT",
  "ARMURE BISCUIT",
  "GENERAL AUX MILLE BRAS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 860000000,
    arc: "Whole Cake Island",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 45,
    height: 307,
    rarity: 3
  },
  {
    name: "Zeff",
    image: "img/Zeff.webp",
    aliases: [
  "ZEFF",
  "PIED ROUGE",
  "RED FOOT",
  "PIEDS ROUGES",
  "PATRON DU BARATIE",
  "LE VIEIL HOMME"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Baratie",
      en: "Baratie"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Baratie",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 67,
    height: 189,
    rarity: 2
  },
  {
    name: "Axe Man Morgan",
    image: "img/Morgan.webp",
    aliases: [
  "MORGAN",
  "AXE MAN MORGAN",
  "AXE-HAND MORGAN",
  "AXE MAIN MORGAN",
  "MORO",
  "CAPITAINE DE LA 153E BRANCHE",
  "MARINE",
  "HOMME A LA HACHE",
  "CAPITAINE MORGAN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Loguetown",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 44,
    height: 285,
    rarity: 3
  },
  {
    name: "Gin",
    image: "img/Gin.webp",
    aliases: [
  "GIN",
  "HOMME DEMON",
  "GINS HOMME DEMON",
  "KIJIN NO GIN",
  "MAN-DEMON",
  "DIABLO",
  "SECOND DE KRIEG",
  "LANCEUR DE HACHE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armada de Krieg",
      en: "Krieg Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 12000000,
    arc: "Baratie",
    titre: { fr: "Aucun", en: "None" },
    age: 27,
    height: 186,
    rarity: 3
  },
  {
    name: "Don Krieg",
    image: "img/Krieg.webp",
    aliases: [
  "KRIEG",
  "DON KRIEG",
  "LE PIRATE SUPREME",
  "AMIRAL DE LA FLOTTE",
  "FLOTTE DE KRIEG",
  "LE PIRATE AU MANTEAU"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armada de Krieg",
      en: "Krieg Armada"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 17000000,
    arc: "Baratie",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 44,
    height: 243,
    rarity: 1
  },
  {
    name: "Kuro",
    image: "img/Kuro.webp",
    aliases: [
  "KURO",
  "KURAHAODOR",
  "LE STRATEGE",
  "CAPITAINE KURO",
  "CENT HOMMES",
  "LE TUEUR DE CENT HOMMES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Chat Noir",
      en: "Black Cat Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 16000000,
    arc: "Syrup",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 35,
    height: 207,
    rarity: 1
  },
  {
    name: "Alvida",
    image: "img/Alvida.webp",
    aliases: [
  "ALVIDA",
  "MASSUE DE FER",
  "IRON MACE",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "DAME DE FER",
  "MARTEAU",
  "LA PLUS BELLE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 5000000,
    arc: "Romance Dawn",
    titre: { fr: "Capitaine, Equipage d'empereur", en: "Captain, Emperor's Crew" },
    age: 27,
    height: 198,
    rarity: 1
  },
  {
    name: "Dorry",
    image: "img/Dorry.webp",
    aliases: [ "DORRY", "LE DEMON BLEU", "BLUE OGRE" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pirates Guerriers Géants",
        en: "Giant Warrior Pirates"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 1800000000,
    arc: "Little Garden",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 160,
    height: 2260,
    rarity: 3
  },
  {
    name: "Broggy",
    image: "img/Broggy.webp",
    aliases: [ "BROGGY", "LE DEMON ROUGE", "RED OGRE" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pirates Guerriers Géants",
        en: "Giant Warrior Pirates"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 1800000000,
    arc: "Little Garden",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 160,
    height: 2130,
    rarity: 3
  },
  {
    name: "Jesus Burgess",
    image: "img/Burgess.webp",
    aliases: [
  "BURGESS",
  "JESUS BURGESS",
  "CHAMPION",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Noire",
      en: "Blackbeard Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 20000000,
    arc: "Jaya",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 29,
    height: 355,
    rarity: 3
  },
  {
    name: "Trebol",
    image: "img/Trebol.webp",
    aliases: [
  "TREBOL",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "MUCUS",
  "COLLE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 99000000,
    arc: "Dressrosa",
    titre: { fr: "Commandant", en: "Commander" },
    age: 49,
    height: 349,
    rarity: 3
  },
  {
    name: "Bentham (Mr. 2)",
    image: "img/Mr2.webp",
    aliases: [
  "MR 2",
  "MR. 2",
  "BENTHAM",
  "BON CLAY",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "MR2",
  "OKAMA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Baroque Works",
      en: "Baroque Works"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 32000000,
    arc: "Little Garden",
    titre: { fr: "Agent", en: "Agent" },
    age: 32,
    height: 238,
    rarity: 2
  },
  {
    name: "Galdino (Mr. 3)",
    image: "img/Mr3.webp",
    aliases: [
  "MR 3",
  "MR. 3",
  "GALDINO",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "MR3",
  "CIRE",
  "BOUGIE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 24000000,
    arc: "Little Garden",
    titre: { fr: "Agent, Equipage d'empereur", en: "Agent, Emperor's Crew" },
    age: 37,
    height: 179,
    rarity: 2
  },
  {
    name: "Daz Bonez (Mr. 1)",
    image: "img/Mr1.webp",
    aliases: [
  "MR 1",
  "MR. 1",
  "DAZ BONEZ",
  "LE TUEUR",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "MR1",
  "COUPEUR",
  "LAME"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Cross Guild",
      en: "Cross Guild"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 75000000,
    arc: "Alabasta",
    titre: { fr: "Agent, Equipage d'empereur", en: "Agent, Emperor's Crew" },
    age: 31,
    height: 212,
    rarity: 2
  },
  {
    name: "Dr. Vegapunk",
    image: "img/Vegapunk.webp",
    aliases: [
  "VEGAPUNK",
  "STELLA",
  "SATELLITE DE VEGAPUNK",
  "L HOMME QUI SAIT TOUT",
  "LE CERVEAU DU MONDE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Aucun",
      en: "None"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Punk Hazard",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 65,
    height: 314,
    rarity: 4
  },
  {
    name: "Imu",
    image: "img/Imu.webp",
    aliases: [
  "IMU",
  "IM-SAMA",
  "TRONE VACANT",
  "SOUVERAIN SECRET",
  "DIRIGEANT DU MONDE"
],
    gender: {
      fr: "Inconnu",
      en: "Unknown"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation, Roi",
      en: "Observation, Conqueror's"
    },
    prime: 0,
    arc: "Rêverie",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 5
  },
  {
    name: "Saint Figarland Garling",
    image: "img/Garling.webp",
    aliases: [
  "GARLING",
  "FIGARLAND GARLING, GOROSEI",
  "CHEVALIER DU TRONE",
  "PRESIDENT DE LA TABLE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 5
  },
  {
    name: "Saint Marcus Mars",
    image: "img/Mars.webp",
    aliases: [
  "MARS",
  "MARCUS MARS, GOROSEI",
  "GOROSEI",
  "DOYEN",
  "LES CINQ DOYENS",
  "DIRIGEANTS DU MONDE",
  "ITSURUGI",
  "ITSUMADE",
  "OISEAU"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation, Roi",
      en: "Observation, Conqueror's"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Saint Topman Warcury",
    image: "img/Warcury.webp",
    aliases: [
  "WARCURY",
  "TOPMAN WARCURY, GOROSEI",
  "GOROSEI",
  "DOYEN",
  "LES CINQ DOYENS",
  "DIRIGEANTS DU MONDE",
  "HOUKI",
  "SANGRISH",
  "SANGRIT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation, Roi",
      en: "Observation, Conqueror's"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Saint Ethanbaron V. Nusjuro",
    image: "img/Nusjuro.webp",
    aliases: [
  "NUSJURO",
  "ETHANBARON NUSJURO",
  "V. NUSJURO, GOROSEI",
  "GOROSEI",
  "DOYEN",
  "LES CINQ DOYENS",
  "DIRIGEANTS DU MONDE",
  "KITETSU",
  "BAKOTSU",
  "CHEVAL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
        fr: "Armement, Roi",
        en: "Armament, Conqueror's"
      },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Saint Shepherd Ju Peter",
    image: "img/JuPeter.webp",
    aliases: [
  "JU PETER",
  "SHEPHERD JU PETER, JUPITER, JUPETER, GOROSEI",
  "GOROSEI",
  "DOYEN",
  "LES CINQ DOYENS",
  "DIRIGEANTS DU MONDE",
  "HOUI",
  "VER DE SABLE",
  "SANDWORM"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Loki",
    image: "img/Loki.webp",
    aliases: [
  "LOKI",
  "PRINCE LOKI",
  "PRINCE D ELBAF",
  "LE DIEU DU SOLEIL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Elbaf",
      en: "Elbaf"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation, Roi",
      en: "Observation, Conqueror's"
    },
    prime: 2600000000,
    arc: "Elbaf",
    titre: { fr: "Aucun", en: "None" },
    age: 63,
    height: 0,
    rarity: 4
  },
  {
    name: "Shamrock",
    image: "img/Shamrock.webp",
    aliases: [
  "SHAMROCK",
  "FIGARLAND SHAMROCK",
  "CHEVALIER DU TRONE",
  "CAPITAINE DES CHEVALIERS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Elbaf",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Magellan",
    image: "img/Magellan.webp",
    aliases: [
  "MAGELLAN",
  "DIRECTEUR D IMPEL DOWN",
  "POISON",
  "VENIN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Impel Down",
    titre: { fr: "Aucun", en: "None" },
    age: 47,
    height: 491,
    rarity: 3
  },
  {
    name: "Charlotte Smoothie",
    image: "img/Smoothie.webp",
    aliases: [
  "SMOOTHIE",
  "CHARLOTTE SMOOTHIE",
  "PIRATES DE BIG MOM",
  "JUS",
  "COMMANDANT AUX MILLE JUS"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 932000000,
    arc: "Whole Cake Island",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 35,
    height: 464,
    rarity: 3
  },
  {
    name: "Spandam",
    image: "img/Spandam.webp",
    aliases: [
  "SPANDAM",
  "AGENT DE LA JUSTICE",
  "FILS DE SPANDINE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Agent", en: "Agent" },
    age: 41,
    height: 192,
    rarity: 3
  },
  {
    name: "Iceburg",
    image: "img/Iceburg.webp",
    aliases: [
  "ICEBURG",
  "ICEBERG",
  "MAIRE DE WATER 7",
  "CHAR pentier"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Water 7",
      en: "Water 7"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Aucun", en: "None" },
    age: 40,
    height: 199,
    rarity: 2
  },
  {
    name: "Tom",
    image: "img/Tom.webp",
    aliases: [
  "TOM",
  "TOM SAN",
  "MAITRE DE FRANKY",
  "CHARPENTIER LEGENDAIRE",
  "TOM'S WORKERS",
  "POISSON VACHE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Tom's Workers",
      en: "Tom's Workers"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Aucun", en: "None" },
    age: 67,
    height: 296,
    rarity: 3
  },
  {
    name: "Lucky Roux",
    image: "img/LuckyRoux.webp",
    aliases: [
  "LUCKY ROUX",
  "LUCKY ROO",
  "ROUX",
  "BARBE ROUGE",
  "EQUIPAGE DE SHANKS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Roux",
      en: "Red Hair Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: null,
    arc: "Romance Dawn",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 35,
    height: 241,
    rarity: 3
  },
  {
    name: "Benn Beckman",
    image: "img/BennBeckman.webp",
    aliases: [
  "BENN BECKMAN",
  "BEN BECKMAN",
  "BECKMAN",
  "BARBE ROUGE",
  "EQUIPAGE DE SHANKS",
  "BRAS DROIT DE SHANKS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Roux",
      en: "Red Hair Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: null,
    arc: "Romance Dawn",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 50,
    height: 206,
    rarity: 3
  },
  {
    name: "Yasopp",
    image: "img/Yasopp.webp",
    aliases: [
  "YASOPP",
  "YASOP",
  "BARBE ROUGE",
  "EQUIPAGE DE SHANKS",
  "ROI DES SNIPERS DE BARBE ROUGE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Roux",
      en: "Red Hair Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: null,
    arc: "Romance Dawn",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 47,
    height: 183,
    rarity: 3
  },
  {
    name: "Vinsmoke Reiju",
    image: "img/Reiju.webp",
    aliases: [
  "REIJU",
  "POISON PINK",
  "VINSMOKE REIJU",
  "GERMA",
  "GERMA 66",
  "ROYAUME DE GERMA",
  "POISON",
  "FILLE AINEE DE GERMA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Germa 66",
      en: "Germa 66"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 24,
    height: 173,
    rarity: 3
  },
  {
    name: "Vinsmoke Ichiji",
    image: "img/Ichiji.webp",
    aliases: [
  "ICHIJI",
  "SPARKING RED",
  "VINSMOKE ICHIJI",
  "GERMA",
  "GERMA 66",
  "ROYAUME DE GERMA",
  "ETINCELLE",
  "SECOND FILS DE GERMA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Germa 66",
      en: "Germa 66"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 21,
    height: 186,
    rarity: 3
  },
  {
    name: "Vinsmoke Niji",
    image: "img/Niji.webp",
    aliases: [
  "NIJI",
  "ELECTRIC BLUE",
  "VINSMOKE NIJI",
  "GERMA",
  "GERMA 66",
  "ROYAUME DE GERMA",
  "ELECTRICITE",
  "TROISIEME FILS DE GERMA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Germa 66",
      en: "Germa 66"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 21,
    height: 185,
    rarity: 3
  },
  {
    name: "Vinsmoke Yonji",
    image: "img/Yonji.webp",
    aliases: [
  "YONJI",
  "WINCH GREEN",
  "VINSMOKE YONJI",
  "GERMA",
  "GERMA 66",
  "ROYAUME DE GERMA",
  "PERCEUSE",
  "QUATRIEME FILS DE GERMA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Germa 66",
      en: "Germa 66"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 21,
    height: 194,
    rarity: 3
  },
  {
    name: "Vinsmoke Judge",
    image: "img/Judge.webp",
    aliases: [
  "JUDGE",
  "VINSMOKE JUDGE",
  "GARUDA",
  "GERMA",
  "GERMA 66",
  "ROYAUME DE GERMA",
  "ROI DE GERMA",
  "SCIENTIFIQUE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Germa 66",
      en: "Germa 66"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 56,
    height: 272,
    rarity: 3
  },
  {
    name: "Pedro",
    image: "img/Pedro.webp",
    aliases: [
  "PEDRO",
  "PEDRO THE TREE",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "MINK JAGUAR",
  "LE ROI DES MINKS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Zou/Tribus Minks",
      en: "Zou/Mink Tribes"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 382000000,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 32,
    height: 233,
    rarity: 3
  },
  {
    name: "Inuarashi",
    image: "img/Inuarashi.webp",
    aliases: [
  "INUARASHI",
  "DUKE INU",
  "DOGSTORM",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "CHIEN MINK",
  "DUC DES MINKS",
  "ROI DE LA JOURNEE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Zou/Tribus Minks",
      en: "Zou/Mink Tribes"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 40,
    height: 511,
    rarity: 3
  },
  {
    name: "Nekomamushi",
    image: "img/Nekomamushi.webp",
    aliases: [
  "NEKOMAMUSHI",
  "DUKE NEKO",
  "CAT VIPER",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "CHAT MINK",
  "ROI DE LA NUIT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Zou/Tribus Minks",
      en: "Zou/Mink Tribes"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 40,
    height: 522,
    rarity: 3
  },
  {
    name: "Jack",
    image: "img/Jack.webp",
    aliases: [
  "JACK",
  "JACK LA SECHERESSE",
  "DROUGHT JACK",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "LA SECHERESSE",
  "MAMMOTH"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates aux Cents Bêtes",
      en: "Beast Pirates"
    },
    fruit: {
      fr: "Ancien Zoan",
      en: "Ancient Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1000000000,
    arc: "Zou",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 28,
    height: 830,
    rarity: 3
  },
  {
    name: "King",
    image: "img/King.webp",
    aliases: [
  "KING",
  "KING THE CONFLAGRATION",
  "ALBER",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "LUNARIA",
  "PTéRANODON",
  "L INCENDIAIRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates aux Cents Bêtes",
      en: "Beast Pirates"
    },
    fruit: {
      fr: "Ancien Zoan",
      en: "Ancient Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1390000000,
    arc: "Wano Kuni",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 47,
    height: 613,
    rarity: 3
  },
  {
    name: "Queen",
    image: "img/Queen.webp",
    aliases: [
  "QUEEN",
  "QUEEN THE PLAGUE",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "BRACHIOSAURE",
  "LA PESTE",
  "CYBORG"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates aux Cents Bêtes",
      en: "Beast Pirates"
    },
    fruit: {
      fr: "Ancien Zoan",
      en: "Ancient Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 1320000000,
    arc: "Wano Kuni",
    titre: { fr: "Commandant, Scientifique, Equipage d'empereur", en: "Commander, Scientist, Emperor's Crew" },
    age: 56,
    height: 612,
    rarity: 3
  },
  {
    name: "Bartholomew Kuma",
    image: "img/Kuma.webp",
    aliases: [
  "KUMA",
  "BARTHOLOMEW KUMA",
  "TYRANT",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "LE TYRAN",
  "LE ROI DE LA PAIX"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 296000000,
    arc: "Thriller Bark",
    titre: { fr: "Corsaire, Révolutionnaire, Famille Royale", en: "Warlord, Revolutionary, Royal Family" },
    age: 47,
    height: 689,
    rarity: 2
  },
  {
    name: "Donquixote Rosinante",
    image: "img/Rosinante.webp",
    aliases: [
  "ROSINANTE",
  "CORAZON",
  "DONQUIXOTE ROSINANTE",
  "MARINE",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "FRERE DE DOFLAMINGO",
  "LE MARINE SILENCIEUX"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Marine", en: "Marine" },
    age: 26,
    height: 293,
    rarity: 2
  },
  {
    name: "Perona",
    image: "img/Perona.webp",
    aliases: [
  "PERONA",
  "GHOST PRINCESS",
  "PRINCESSE FANTOME",
  "FANTOME"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Thriller Bark",
      en: "Thriller Bark Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Thriller Bark",
    titre: { fr: "Commandant", en: "Commander" },
    age: 25,
    height: 160,
    rarity: 2
  },
  {
    name: "Stussy",
    image: "img/Stussy.webp",
    aliases: [
  "STUSSY",
  "CP0 STUSSY",
  "CP0",
  "AGENT DU CP0",
  "AGENTE DU CP0"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Agent", en: "Agent" },
    age: 36,
    height: 179,
    rarity: 3
  },
  {
    name: "Saint Jaygarcia Saturn",
    image: "img/Saturn.webp",
    aliases: [
  "SATURN",
  "JAYGARCIA SATURN",
  "GOROSEI",
  "DOYEN",
  "LES CINQ DOYENS",
  "DIRIGEANTS DU MONDE",
  "SCIENCE GUERRE",
  "GYUKI",
  "ARAIGNEE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Observation, Roi",
      en: "Observation, Conqueror's"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 4
  },
  {
    name: "Shiki",
    image: "img/Shiki.webp",
    aliases: [
  "SHIKI",
  "GOLDEN LION",
  "KINJISHI",
  "LION DORE",
  "LE PIRATE VOLANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Shiki",
      en: "Golden Lion Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
    prime: null,
    arc: "Stampede",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 73,
    height: 0,
    rarity: 4
  },
  {
    name: "Aramaki",
    image: "img/Greenbull.webp",
    aliases: [
  "GREEN BULL",
  "RYOKUGYU",
  "ARAMAKI",
  "WEVEL GREENBULL",
  "MARINE",
  "LE GROS DE LA MARINE",
  "RIKI"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Rêverie",
    titre: { fr: "Amiral", en: "Admiral" },
    age: 41,
    height: 308,
    rarity: 3
  },
  {
    name: "Charlotte Pudding",
    image: "img/Pudding.webp",
    aliases: [
  "PUDDING",
  "CHARLOTTE PUDDING",
  "PIRATES DE BIG MOM",
  "TROISIEME OEIL",
  "CHOCOLAT"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Whole Cake Island",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 16,
    height: 166,
    rarity: 2
  },
  {
    name: "Lola",
    image: "img/Lola.webp",
    aliases: [
  "LOLA",
  "CHARLOTTE LOLA",
  "PRINCESSE FANTOME",
  "FILLE DE BIG MOM"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Big Mom (anciennement)",
      en: "Big Mom Pirates (former)"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 24000000,
    arc: "Thriller Bark",
    titre: { fr: "Capitaine, Equipage d'empereur", en: "Captain, Emperor's Crew" },
    age: 26,
    height: 215,
    rarity: 3
  },
  {
    name: "Helmeppo",
    image: "img/Helmeppo.webp",
    aliases: [
  "HELMEPPO",
  "MARINE",
  "FILS DU CAPITAINE MORGAN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: 0,
    arc: "Romance Dawn",
    titre: { fr: "Marine", en: "Marine" },
    age: 22,
    height: 179,
    rarity: 1
  },
  {
    name: "Foxy",
    image: "img/Foxy.webp",
    aliases: [ "FOXY", "SILVER FOX" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Foxy",
      en: "Foxy Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 24000000,
    arc: "Long Ring Long Land",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 38,
    height: 180,
    rarity: 3
  },
  {
    name: "Nefertari Cobra",
    image: "img/Cobra.webp",
    aliases: [
  "KING COBRA",
  "NEFERTARI COBRA",
  "COBRA",
  "ROI D ALABASTA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Royaume d'Alabasta",
      en: "Arabasta Kingdom"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Alabasta",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 50,
    height: 182,
    rarity: 3
  },
  {
    name: "Shirahoshi",
    image: "img/Shirahoshi.webp",
    aliases: [
  "SHIRAHOSHI",
  "POSEIDON",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "PRINCESSE SIRENE",
  "PRINCESSE DE L ILE DES HOMMES POISSON"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Île des Hommes-Poissons",
      en: "Fish-Man Island"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 16,
    height: 1187,
    rarity: 3
  },
  {
    name: "Rebecca",
    image: "img/Rebecca.webp",
    aliases: [
  "REBECCA",
  "GUERRIERE SANS EPEE",
  "FILLE DE KYROS"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Dressrosa",
      en: "Dressrosa"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 16,
    height: 171,
    rarity: 2
  },
  {
    name: "Mansherry",
    image: "img/Mansherry.webp",
    aliases: [
  "MANSHERRY",
  "PRINCESSE MANSHERRY",
  "PRINCESSE TONTATTA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Tontatta",
      en: "Tontatta"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 25,
    height: 20,
    rarity: 2
  },
  {
    name: "Kyros",
    image: "img/Kyros.webp",
    aliases: [
  "KYROS",
  "TOY SOLDIER",
  "GLADIATEUR LEGENDAIRE",
  "LE SOLDAT DE DRESSROSA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Dressrosa",
      en: "Dressrosa"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 44,
    height: 298,
    rarity: 3
  },
  {
    name: "Diamante",
    image: "img/Diamante.webp",
    aliases: [
  "DIAMANTE",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "DIAMANT",
  "DRAPEAU"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 99000000,
    arc: "Dressrosa",
    titre: { fr: "Commandant", en: "Commander" },
    age: 45,
    height: 525,
    rarity: 3
  },
  {
    name: "Senor Pink",
    image: "img/SenorPink.webp",
    aliases: [
  "SENIOR PINK",
  "SENOR PINK",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "DANSEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 58000000,
    arc: "Dressrosa",
    titre: { fr: "Commandant", en: "Commander" },
    age: 46,
    height: 244,
    rarity: 3
  },
  {
    name: "Bartolomeo",
    image: "img/Bartolomeo.webp",
    aliases: [
  "BARTOLOMEO",
  "CANNIBAL",
  "LE CANNIBALE",
  "BARTI"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Barto Club",
      en: "Barto Club"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 200000000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 24,
    height: 220,
    rarity: 2
  },
  {
    name: "Leo",
    image: "img/Leo.webp",
    aliases: [
  "LEO",
  "TONTATTA",
  "NAIN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Tontatta",
      en: "Tontatta"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 25,
    height: 23,
    rarity: 3
  },
  {
    name: "Don Chinjao",
    image: "img/Chinjao.webp",
    aliases: [
  "DON CHINJAO",
  "CHINJAO",
  "PERCAGE DE LA TETE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Chinjao",
      en: "Happo Navy"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: 542000000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 78,
    height: 520,
    rarity: 3
  },
  {
    name: "Baby 5",
    image: "img/Baby5.webp",
    aliases: [
  "BABY 5",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "LA FEMME ARMES",
  "ARMES"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
    prime: null,
    arc: "Punk Hazard",
    titre: { fr: "Aucun", en: "None" },
    age: 24,
    height: 181,
    rarity: 3
  },
  {
    name: "Dellinger",
    image: "img/Dellinger.webp",
    aliases: [
  "DELLINGER",
  "DALENGER",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "GARCON A CORNES",
  "CORNES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
    prime: 15000000,
    arc: "Dressrosa",
    titre: { fr: "Aucun", en: "None" },
    age: 16,
    height: 145,
    rarity: 3
  },
  {
    name: "Pica",
    image: "img/Pica.webp",
    aliases: [
  "PICA",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "GROSSE VOIX",
  "PIERRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 99000000,
    arc: "Dressrosa",
    titre: { fr: "Commandant", en: "Commander" },
    age: 40,
    height: 470,
    rarity: 3
  },
  {
    name: "Monet",
    image: "img/Monet.webp",
    aliases: [
  "MONET",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "NEIGE",
  "AILES"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Punk Hazard",
    titre: { fr: "Aucun", en: "None" },
    age: 30,
    height: 227,
    rarity: 3
  },
  {
    name: "Vergo",
    image: "img/Vergo.webp",
    aliases: [
  "VERGO",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "AMIRAL DE LA MARINE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: null,
    arc: "Punk Hazard",
    titre: { fr: "Commandant", en: "Commander" },
    age: 41,
    height: 247,
    rarity: 3
  },
  {
    name: "Scopper Gaban",
    image: "img/Gaban.webp",
    aliases: [
  "GABBAN",
  "SCOPPER GABAN",
  "PIRATES DE ROGER",
  "LE GRAND JARDINIER",
  "MANGueur DE MONTAGNES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Roger",
      en: "Roger Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement, Roi",
      en: "Observation, Armament, Conqueror's"
    },
    prime: null,
    arc: "Elbaf",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 4
  },
  {
    name: "Kin'emon",
    image: "img/Kinemon.webp",
    aliases: [
  "KINEMON",
  "KIN'EMON",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "LES NEUF CISEAUX ROUGES",
  "LE RENARD"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Punk Hazard",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 36,
    height: 295,
    rarity: 2
  },
  {
    name: "Bepo",
    image: "img/Bepo.webp",
    aliases: [
  "BEPO",
  "HEART PIRATES",
  "EQUIPAGE DE LAW",
  "OURSON",
  "NAVIGATEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Heart",
      en: "Heart Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 1500,
    arc: "Archipel de Sabaody",
    titre: { fr: "Aucun", en: "None" },
    age: 22,
    height: 240,
    rarity: 2
  },
  {
    name: "Kanjuro",
    image: "img/Kanjuro.webp",
    aliases: [
  "KANJURO",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "PEINTRE",
  "L ARBRE TREMBLANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 54,
    height: 347,
    rarity: 3
  },
  {
    name: "Raizo",
    image: "img/Raizo.webp",
    aliases: [
  "RAIZO",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "NINJA DE WANO"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 35,
    height: 311,
    rarity: 3
  },
  {
    name: "Zunesha",
    image: "img/Zunesha.webp",
    aliases: [
  "ZUNESHA",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "ELEPHANT MINK",
  "ELEPHANT MILLENAIRE"
],
    gender: {
      fr: "Inconnu",
      en: "Unknown"
    },
    affiliation: {
      fr: "Zou/Tribus Minks",
      en: "Zou/Mink Tribes"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 1000,
    height: 500000,
    rarity: 5
  },
  {
    name: "Joy Boy",
    image: "img/Joyboy.webp",
    aliases: [
  "JOYBOY",
  "JOY BOY",
  "LE GUERRIER DE LA LIBERTE",
  "L HOMME DU SIECLE VIDE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Aucun",
      en: "None"
    },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Roi",
      en: "Conqueror's"
    },
    prime: null,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 0,
    height: 0,
    rarity: 5
  },
  {
    name: "Lao G",
    image: "img/LaoG.webp",
    aliases: [
  "LAO G",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "VIEILLARD",
  "MARTIAL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 61000000,
    arc: "Punk Hazard",
    titre: { fr: "Commandant", en: "Commander" },
    age: 70,
    height: 157,
    rarity: 3
  },
  {
    name: "Sugar",
    image: "img/Sugar.webp",
    aliases: [
  "SUGAR",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "SUCRE",
  "PETITE FILLE",
  "HOBBIHOO"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Don Quichotte",
      en: "Donquixote Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Punk Hazard",
    titre: { fr: "Aucun", en: "None" },
    age: 10,
    height: 110,
    rarity: 3
  },
  {
    name: "Emet",
    image: "img/Emet.webp",
    aliases: [
  "EMET",
  "IRON GIANT",
  "GEANT D OLIVE",
  "LE ROBOT"
],
    gender: {
      fr: "Inconnu",
      en: "Unknown"
    },
    affiliation: {
      fr: "Aucun",
      en: "None"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Aucun", en: "None" },
    age: 900,
    height: 0,
    rarity: 2
  },
  {
    name: "Kaya",
    image: "img/Kaya.webp",
    aliases: [
  "KAYA",
  "KAIA",
  "HERITIERE",
  "SYRUP"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Syrup",
      en: "Syrup Village"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Syrup",
    titre: { fr: "Aucun", en: "None" },
    age: 19,
    height: 169,
    rarity: 3
  },
  {
    name: "Jango",
    image: "img/Jango.webp",
    aliases: [
  "JANGO",
  "JUNGO",
  "MARINE",
  "LE CHAPELIER",
  "CHASSEUR DE PRIMES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine",
      en: "Marines"
    },
    fruit: {
        fr: "Aucun",
        en: "None"
      },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Syrup",
    titre: { fr: "Marine", en: "Marine" },
    age: 29,
    height: 207,
    rarity: 3
  },
  {
    name: "Mr. 5",
    image: "img/Mr5.webp",
    aliases: [
  "MR 5",
  "MR. 5",
  "GEM",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "MR5",
  "PETARD",
  "EXPLOSION"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Baroque Works",
      en: "Baroque Works"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 10000000,
    arc: "Whiskey Peak",
    titre: { fr: "Agent", en: "Agent" },
    age: 26,
    height: 197,
    rarity: 3
  },
  {
    name: "Miss Valentine",
    image: "img/MissValentine.webp",
    aliases: [
  "MISS VALENTINE",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "POIDS",
  "KILO"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Baroque Works",
      en: "Baroque Works"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 7500000,
    arc: "Whiskey Peak",
    titre: { fr: "Agent", en: "Agent" },
    age: 24,
    height: 177,
    rarity: 3
  },
  {
    name: "Mr. 4",
    image: "img/Mr4.webp",
    aliases: [
  "MR 4",
  "MR. 4",
  "LASSOO",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "MR4",
  "CHIEN ET CANARD"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Baroque Works",
      en: "Baroque Works"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 3200000,
    arc: "Alabasta",
    titre: { fr: "Agent", en: "Agent" },
    age: 30,
    height: 218,
    rarity: 3
  },
  {
    name: "Miss Merry Christmas",
    image: "img/MissMerry.webp",
    aliases: [
  "MISS MERRY CHRISTMAS",
  "MISS MERRY CHRISTAMA",
  "BAROQUE WORKS",
  "AGENT SECRET",
  "ORGANISATION SECRETE",
  "TAUPE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Baroque Works",
      en: "Baroque Works"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 14000000,
    arc: "Alabasta",
    titre: { fr: "Agent", en: "Agent" },
    age: 51,
    height: 156,
    rarity: 3
  },
  {
    name: "Igaram",
    image: "img/Igaram.webp",
    aliases: [
  "IGARAM",
  "MR. 8",
  "LE BARBU",
  "GARDE ROYAL D ALABASTA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Royaume d'Alabasta",
      en: "Arabasta Kingdom"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Whiskey Peak",
    titre: { fr: "Agent", en: "Agent" },
    age: 50,
    height: 218,
    rarity: 3
  },
  {
    name: "Neptune",
    image: "img/Neptune.webp",
    aliases: [
  "KING NEPTUNE",
  "NEPTUNE",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "ROI DE L ILE DES HOMMES POISSON"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Île des Hommes-Poissons",
      en: "Fish-Man Island"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 70,
    height: 1220,
    rarity: 3
  },
  {
    name: "Fisher Tiger",
    image: "img/FisherTiger.webp",
    aliases: [
  "FISHER TIGER",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "HEROS DES HOMMES POISSON",
  "CAPITAINE DES PIRATES DU SOLEIL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Soleil",
      en: "Sun Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 230000000,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 48,
    height: 520,
    rarity: 3
  },
  {
    name: "Otohime",
    image: "img/Otohime.webp",
    aliases: [
  "QUEEN OTOHIME",
  "OTOHIME",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "REINE DE L ILE DES HOMMES POISSON"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Île des Hommes-Poissons",
      en: "Fish-Man Island"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 36,
    height: 224,
    rarity: 3
  },
  {
    name: "Hody Jones",
    image: "img/Hody.webp",
    aliases: [
  "HODY JONES",
  "HOWDY JONES",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "GRAND REQUIN BLANC",
  "CAPITAINE DES PIRATES DU NOUVEAU POISSON"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates du Nouveau Poisson-Homme",
      en: "New Fish-Man Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: null,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 30,
    height: 331,
    rarity: 3
  },
  {
    name: "Vander Decken IX",
    image: "img/VanderDecken.webp",
    aliases: [
  "VAN DEKKEN",
  "VANDER DECKEN",
  "HERITIER DES VANDER DECKEN",
  "CAPITAINE DES PIRATES DE VANDER DECKEN"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Vander Decken",
      en: "Flying Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 35,
    height: 352,
    rarity: 3
  },
  {
    name: "Hachi",
    image: "img/Hachi.webp",
    aliases: [
  "HACHAN",
  "HACHI",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "POISSON SCIE",
  "HUIT BRAS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates d'Arlong",
      en: "Arlong Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 8000000,
    arc: "Arlong Park",
    titre: { fr: "Aucun", en: "None" },
    age: 38,
    height: 220,
    rarity: 2
  },
  {
    name: "Camie",
    image: "img/Camie.webp",
    aliases: [
  "CAMIE",
  "KAMY",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "POISSON LAPIN"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Île des Hommes-Poissons",
      en: "Fish-Man Island"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Archipel de Sabaody",
    titre: { fr: "Aucun", en: "None" },
    age: 18,
    height: 197,
    rarity: 3
  },
  {
    name: "Pappag",
    image: "img/Pappag.webp",
    aliases: [
  "PAPAGOO",
  "PAPPAG",
  "ETOILE DE MER",
  "STYLISTE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Île des Hommes-Poissons",
      en: "Fish-Man Island"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Archipel de Sabaody",
    titre: { fr: "Aucun", en: "None" },
    age: 33,
    height: 50,
    rarity: 3
  },
  {
    name: "Mont Blanc Cricket",
    image: "img/Cricket.webp",
    aliases: [
  "CRICKET",
  "MONT BLANC CRICKET",
  "MONTBLANC CRICKET",
  "ALLIANCE SARUYAMA",
  "SARUYAMA",
  "FILS DE NOLAND"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Alliance Saruyama",
      en: "Saruyama Alliance"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 25000000,
    arc: "Jaya",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 43,
    height: 242,
    rarity: 3
  },
  {
    name: "Gan Fall",
    image: "img/GanFall.webp",
    aliases: [
  "GAN FALL",
  "GONFALL",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "CHEVALIER DU CIEL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Skypiea",
      en: "Skypiea"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 68,
    height: 180,
    rarity: 3
  },
  {
    name: "Wyper",
    image: "img/Wyper.webp",
    aliases: [
  "WIPER",
  "WYPER",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "GUERRIER SHANDIA",
  "SHANDIA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Skypiea",
      en: "Skypiea"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 24,
    height: 183,
    rarity: 3
  },
  {
    name: "Mont Blanc Noland",
    image: "img/Noland.webp",
    aliases: [
  "NOLAND",
  "MONT BLANC NOLAND",
  "MENTEUR",
  "LE MENTEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Royaume de Lvneel",
        en: "Lvneel Kingdom"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 39,
    height: 220,
    rarity: 4
  },
  {
    name: "Conis",
    image: "img/Conis.webp",
    aliases: [
  "CONIS",
  "GUI",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "ANGE DE SKYPIEA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Skypiea",
      en: "Skypiea"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 21,
    height: 176,
    rarity: 3
  },
  {
    name: "Gloriosa",
    image: "img/Gloriosa.webp",
    aliases: [
  "GLORIOSA",
  "ELDER NYON",
  "KUJA",
  "AMAZON LILY",
  "AMAZONES",
  "ANCIENNE EMPEREURE KUJA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Pirates Kuja, Pirates de Rocks",
        en: "Kuja Pirates, Rocks Pirates"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    // Pirate : sa prime n'a jamais été révélée -> null (Inconnu),
    // pas 0 (qui signifierait « pas de prime »).
    prime: null,
    arc: "Amazon Lily",
    titre: { fr: "Aucun", en: "None" },
    age: 77,
    height: 160,
    rarity: 4
  },
  {
    name: "Morgans",
    image: "img/Morgans.webp",
    aliases: [
  "MORGANS",
  "BIG NEWS",
  "BIG NEWS SHIPPU",
  "WENP",
  "WORLD ECONOMY NEWS PAPER",
  "EMPEREUR DES ENFERS",
  "GROS PIGEON",
  "JOURNALISTE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "World Economy News Paper",
      en: "World Economy News Paper"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 53,
    height: 305,
    rarity: 3
  },
  {
    name: "Karasu",
    image: "img/Karasu.webp",
    aliases: [
  "KARASU",
  "KARASU DES CORBEAUX",
  "MONSIEUR CORBEAU",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "LA SOURIS QUI PARLE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Logia",
      en: "Logia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 400000000,
    arc: "Impel Down",
    titre: { fr: "Commandant", en: "Commander" },
    age: 47,
    height: 265,
    rarity: 3
  },
  {
    name: "Hack",
    image: "img/Hack.webp",
    aliases: [
  "HACK",
  "CENTIEME DAN HACK",
  "HYAKUDAN HACK",
  "MAITRE DE KARATE HOMME-POISSON",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "LE POISSON COMBATTANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    // Révolutionnaire : prime jamais révélée -> null (Inconnu), pas 0.
    prime: null,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Révolutionnaire", en: "Revolutionary" },
    age: 38,
    height: 280,
    rarity: 3
  },
  {
    name: "Inazuma",
    image: "img/Inazuma.webp",
    aliases: [
  "INAZUMA",
  "HOMME DE NEWKAMA LAND",
  "SHUAR",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "L HOMME QUI COUPE TOUT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 100000000,
    arc: "Impel Down",
    titre: { fr: "Commandant, Révolutionnaire", en: "Commander, Revolutionary" },
    age: 29,
    height: 228,
    rarity: 3
  },
  {
    name: "Belo Betty",
    image: "img/BeloBetty.webp",
    aliases: [
  "BELO BETTY",
  "BELLO BETTY",
  "BETTY",
  "BELLE BETTY",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "L AGENTE A L ETENDARD"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 457000000,
    arc: "Egghead",
    titre: { fr: "Commandant", en: "Commander" },
    age: 34,
    height: 196,
    rarity: 3
  },
  {
    name: "Morley",
    image: "img/Morley.webp",
    aliases: [
  "MORLEY",
  "MORLEY DE FOURRURE",
  "HOMME-FOURRURE",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "LE GEANT PELE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 293000000,
    arc: "Egghead",
    titre: { fr: "Commandant", en: "Commander" },
    age: 160,
    height: 1253,
    rarity: 3
  },
  {
    name: "Lindbergh",
    image: "img/Lindbergh.webp",
    aliases: [
  "LINDBERGH",
  "LIND BERGH",
  "COMMANDANT LINDBERGH",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "L INVENTEUR DE L ARMEE REVOLUTIONNAIRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 316000000,
    arc: "Egghead",
    titre: { fr: "Commandant", en: "Commander" },
    age: 37,
    height: 149,
    rarity: 3
  },
  {
    name: "Ginny",
    image: "img/Ginny.webp",
    aliases: [
  "GINNY",
  "COMMANDANT GINNY",
  "GINNY ANCIEN ESCLAVE",
  "ARMEE REVOLUTIONNAIRE",
  "REVOLUTIONNAIRE",
  "L AMIE DE BELLO BETTY"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Armée Révolutionnaire",
      en: "Revolutionary Army"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 190000000,
    arc: "Egghead",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 39,
    height: 174,
    rarity: 3
  },
  {
    name: "Pekoms",
    image: "img/Pekoms.webp",
    aliases: [
  "PEKOMS",
  "PIRATES DE BIG MOM",
  "LION MINK",
  "MOUSQUETAIRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Big Mom",
      en: "Big Mom Pirates"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 330000000,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 27,
    height: 232,
    rarity: 3
  },
  {
    name: "Cavendish",
    image: "img/Cavendish.webp",
    aliases: [
  "CAVENDISH",
  "WHITE HORSE",
  "PIRATE BELLO",
  "HAKUBA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Cavendish",
      en: "Beautiful Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 330000000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 26,
    height: 208,
    rarity: 2
  },
  {
    name: "Pell",
    image: "img/Pell.webp",
    aliases: [
  "PELL",
  "LE FAUCON",
  "GARDE ROYAL D ALABASTA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Royaume d'Alabasta",
      en: "Arabasta Kingdom"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Alabasta",
    titre: { fr: "Aucun", en: "None" },
    age: 35,
    height: 189,
    rarity: 3
  },
  {
    name: "Paulie",
    image: "img/Paulie.webp",
    aliases: [
  "PAULIE",
  "PAULE",
  "CHARPENTIER",
  "GALLEY LA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Galley-La Company",
      en: "Galley-La Company"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Aucun", en: "None" },
    age: 26,
    height: 195,
    rarity: 2
  },
  {
    name: "Caribou",
    image: "img/Caribou.webp",
    aliases: [ "CARIBOU", "CHEVEUX MOUILLES", "WET-HAIRED CARIBOU" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Caribou",
      en: "Caribou Pirates"
    },
    fruit: {
        fr: "Logia",
        en: "Logia"
      },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 210000000,
    arc: "Archipel de Sabaody",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 32,
    height: 228,
    rarity: 3
  },
  {
    name: "Shiryu",
    image: "img/Shiryu.webp",
    aliases: [
  "SHIRYU",
  "SHIRYU DE LA PLUIE",
  "SHIRYU OF THE RAIN",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH",
  "CAPITAINE DES BARBES NOIRES",
  "EIL AFRAME"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Noire",
      en: "Blackbeard Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: null,
    arc: "Impel Down",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 44,
    height: 340,
    rarity: 3
  },
  {
    name: "Jaguar D. Saul",
    image: "img/Saul.webp",
    aliases: [ "SAUL", "JAGUAR D. SAUL" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine (déserteur)",
      en: "Marines (defected)"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Armement",
      en: "Armament"
    },
    prime: 0,
    arc: "Enies Lobby",
    titre: { fr: "Vice-Amiral", en: "Vice Admiral" },
    age: 127,
    height: 1950,
    rarity: 4
  },
  {
    name: "Rocks D. Xebec",
    image: "img/Xebec.webp",
    aliases: [
  "XEBEC",
  "ROCKS D. XEBEC",
  "ROCKS",
  "LE ROI DES DEMONS"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Rocks",
      en: "Rocks Pirates"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Armement, Roi",
      en: "Armament, Conqueror's"
    },
    prime: null,
    arc: "Elbaf",
    titre: { fr: "Capitaine", en: "Captain" },
    age: null,
    height: 435,
    rarity: 5
  },
  {
    name: "Edward Weevil",
    image: "img/Weevil.webp",
    aliases: [
  "WEEVIL",
  "EDWARD WEEVIL",
  "WHITEBEARD JR",
  "LE FILS DE BARBE BLANCHE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Aucun",
      en: "None"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 480000000,
    arc: "Zou",
    titre: { fr: "Corsaire", en: "Warlord" },
    age: 35,
    height: 680,
    rarity: 4
  },
  {
    name: "Lafitte",
    image: "img/Lafitte.webp",
    aliases: [
  "LAFITTE",
  "LAFFITTE",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Noire",
      en: "Blackbeard Pirates"
    },
    fruit: {
      fr: "Inconnu",
      en: "Unknown"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 42200000,
    arc: "Jaya",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 41,
    height: 340,
    rarity: 3
  },
  {
    name: "Curly Dadan",
    image: "img/Dadan.webp",
    aliases: [ "DADAN", "CURLY DADAN" ],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Famille Dadan (Bandits du Mont Colubo)",
      en: "Dadan Family (Mt. Colubo Bandits)"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 7800000,
    arc: "Post-Marineford",
    titre: { fr: "Aucun", en: "None" },
    age: 55,
    height: 221,
    rarity: 3
  },
  {
    name: "Douglas Bullet",
    image: "img/Bullet.webp",
    aliases: [
  "BULLET",
  "DOUGLAS BULLET",
  "HERITIER DU DEMON",
  "DEMON HEIR",
  "PIRATES DE ROGER",
  "L HERITIER DEMONIAQUE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Roger",
      en: "Roger Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
        fr: "Armement, Roi",
        en: "Armament, Conqueror's"
      },
    prime: null,
    arc: "Stampede",
    titre: { fr: "Aucun", en: "None" },
    age: 45,
    height: 355,
    rarity: 4
  },
  {
    name: "Gunko",
    image: "img/Gunko.webp",
    aliases: [
  "GUNKO",
  "SAINT GUNKO",
  "MANMAYER GUNKO",
  "CHEVALIER DU TRONE",
  "LA FEMME AUX CORBEAUX"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Elbaf",
    titre: { fr: "Aucun", en: "None" },
    age: 77,
    height: 175,
    rarity: 4
  },
  {
    name: "Uta",
    image: "img/Uta.webp",
    aliases: [
  "UTA",
  "DIVA MONDIALE",
  "WORLD DIVA",
  "LA CHANTEUSE",
  "FILLE DE SHANKS"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates de Shanks (anciennement)",
      en: "Red Hair Pirates (former)"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Film Red",
    titre: { fr: "Aucun", en: "None" },
    age: 21,
    height: 169,
    rarity: 4
  },
  {
    name: "Ulti",
    image: "img/Ulti.webp",
    aliases: [
  "ULTI",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "TOBIROPPO",
  "OFFICIER DES BEAST PIRATES",
  "PTéRANODON"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates aux Cents Bêtes",
      en: "Beast Pirates"
    },
    fruit: {
      fr: "Ancien Zoan",
      en: "Ancient Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 400000000,
    arc: "Wano Kuni",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 22,
    height: 173,
    rarity: 3
  },
  {
    name: "Dalton",
    image: "img/Dalton.webp",
    aliases: [
  "DALTON",
  "DORUTON",
  "ROI DE DRUM",
  "LE BOEUF"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Royaume de Sakura",
        en: "Sakura Kingdom"
      },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Royaume de Drum",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 35,
    height: 218,
    rarity: 3
  },
  {
    name: "Sentomaru",
    image: "img/Sentomaru.webp",
    aliases: [ "SENTOMARU", "SANTAMARU", "SANTO" ],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Marine / SSG",
      en: "Marines / SSG"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Archipel de Sabaody",
    titre: {
        fr: "Marine",
        en: "Marines"
      },
    age: 34,
    height: 279,
    rarity: 3
  },
  {
    name: "Shaka",
    image: "img/Shaka.webp",
    aliases: [
  "SHAKA",
  "SHAKY",
  "VEGAPUNK SHAKA",
  "SATELLITE DE VEGAPUNK",
  "LE CERVEAU PRINCIPAL",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "SSG / Vegapunk",
      en: "SSG / Vegapunk"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 30,
    height: 220,
    rarity: 3
  },
  {
    name: "Lilith",
    image: "img/Lilith.webp",
    aliases: [
  "LILITH",
  "VEGAPUNK LILITH",
  "YORK EVIL",
  "SATELLITE DE VEGAPUNK",
  "LA MALVEILLANTE",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "SSG / Vegapunk",
      en: "SSG / Vegapunk"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 24,
    height: 204,
    rarity: 3
  },
  {
    name: "Edison",
    image: "img/Edison.webp",
    aliases: [
  "EDISON",
  "VEGAPUNK EDISON",
  "SATELLITE DE VEGAPUNK",
  "L INVENTEUR",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "SSG / Vegapunk",
      en: "SSG / Vegapunk"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 18,
    height: 100,
    rarity: 3
  },
  {
    name: "Pythagoras",
    image: "img/Pythagoras.webp",
    aliases: [
  "PYTHAGORAS",
  "VEGAPUNK PYTHAGORAS",
  "SATELLITE DE VEGAPUNK",
  "LE MONSTRE",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "SSG / Vegapunk",
      en: "SSG / Vegapunk"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 26,
    height: 341,
    rarity: 3
  },
  {
    name: "Atlas",
    image: "img/Atlas.webp",
    aliases: [
  "ATLAS",
  "VEGAPUNK ATLAS",
  "SATELLITE DE VEGAPUNK",
  "LA GENTILLE",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "SSG / Vegapunk",
      en: "SSG / Vegapunk"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 16,
    height: 729,
    rarity: 3
  },
  {
    name: "York",
    image: "img/York.webp",
    aliases: [
  "YORK",
  "VEGAPUNK YORK",
  "SATELLITE DE VEGAPUNK",
  "LA GOURMANDE",
  "CERVEAU PENSEUR"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Egghead",
    titre: { fr: "Scientifique", en: "Scientist" },
    age: 16,
    height: 482,
    rarity: 3
  },
  {
    name: "Otama",
    image: "img/Otama.webp",
    aliases: [
  "OTAMA",
  "TAMA",
  "O-TAMA",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "PETITE FILLE DE WANO",
  "O TAMA"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Allié", en: "Ally" },
    age: 8,
    height: 108,
    rarity: 3
  },
  {
    name: "Viola",
    image: "img/Viola.webp",
    aliases: [
  "VIOLA",
  "VIOLET",
  "VIOLETTA",
  "PRINCESSE DE DRESSROSA",
  "OEIL QUI VOIT TOUT"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Royaume de Dressrosa",
      en: "Dressrosa Kingdom"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 29,
    height: 178,
    rarity: 3
  },
  {
    name: "Wapol",
    image: "img/Wapol.webp",
    aliases: [
  "WAPOL",
  "WAPPLE",
  "ROI WAPOL",
  "LE ROI GLOUTON",
  "MUNCH MUNCH"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Royaume de Drum (anciennement) / Black Drum",
      en: "Drum Kingdom (former) / Black Drum"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Royaume de Drum",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 29,
    height: 207,
    rarity: 3
  },
  {
    name: "Kalifa",
    image: "img/Kalifa.webp",
    aliases: [
  "KALIFA",
  "CALIFA",
  "CP9",
  "AGENT DU CP9",
  "BULLES",
  "SECRETAIRE DE ICEBURG",
  "FEMME BULLE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Agent", en: "Agent" },
    age: 27,
    height: 185,
    rarity: 3
  },
  {
    name: "Blueno",
    image: "img/Blueno.webp",
    aliases: [
  "BLUENO",
  "CP9",
  "AGENT DU CP9",
  "PORTE",
  "PORTES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Agent", en: "Agent" },
    age: 32,
    height: 258,
    rarity: 3
  },
  {
    name: "Jabra",
    image: "img/Jabra.webp",
    aliases: [
  "JABRA",
  "JABURA",
  "CP9",
  "AGENT DU CP9",
  "LOUP"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Enies Lobby",
    titre: { fr: "Agent", en: "Agent" },
    age: 37,
    height: 212,
    rarity: 3
  },
  {
    name: "Kumadori",
    image: "img/Kumadori.webp",
    aliases: [
  "KUMADORI",
  "CP9",
  "AGENT DU CP9",
  "YOKOZUNA",
  "CHEVEUX"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Enies Lobby",
    titre: { fr: "Agent", en: "Agent" },
    age: 36,
    height: 338,
    rarity: 3
  },
  {
    name: "Fukurou",
    image: "img/Fukurou.webp",
    aliases: [
  "FUKUROU",
  "FUKURO",
  "OWL",
  "CP9",
  "AGENT DU CP9",
  "COQ"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Gouvernement Mondial",
      en: "World Government"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Enies Lobby",
    titre: { fr: "Agent", en: "Agent" },
    age: 31,
    height: 331,
    rarity: 3
  },
  {
    name: "Boa Sandersonia",
    image: "img/Sandersonia.webp",
    aliases: [
  "SANDERSONIA",
  "BOA SANDERSONIA",
  "KUJA",
  "AMAZON LILY",
  "AMAZONES",
  "SOEUR DE HANCOCK"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates Kuja",
      en: "Kuja Pirates"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 40000000,
    arc: "Amazon Lily",
    titre: { fr: "Aucun", en: "None" },
    age: 30,
    height: 453,
    rarity: 3
  },
  {
    name: "Boa Marigold",
    image: "img/Marigold.webp",
    aliases: [
  "MARIGOLD",
  "BOA MARIGOLD",
  "KUJA",
  "AMAZON LILY",
  "AMAZONES",
  "SOEUR DE HANCOCK"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pirates Kuja",
      en: "Kuja Pirates"
    },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 40000000,
    arc: "Amazon Lily",
    titre: { fr: "Aucun", en: "None" },
    age: 28,
    height: 432,
    rarity: 3
  },
  {
    name: "Shakuyaku",
    image: "img/Shakky.webp",
    aliases: [
  "SHANKKY",
  "SHAKUYAKU",
  "SHAKKY",
  "SHAKY",
  "REINE DU BAR",
  "ANCIENNE PIRATE"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Aucun",
      en: "None"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Archipel de Sabaody",
    titre: { fr: "Aucun", en: "None" },
    age: 64,
    height: 186,
    rarity: 3
  },
  {
    name: "Crocus",
    image: "img/Crocus.webp",
    aliases: [
  "CROCUS",
  "PIRATES DE ROGER",
  "MEDECIN DE ROGER",
  "PHARE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Roger",
      en: "Roger Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: null,
    arc: "Reverse Mountain",
    titre: { fr: "Aucun", en: "None" },
    age: 73,
    height: 203,
    rarity: 3
  },
  {
    name: "Absalom",
    image: "img/Absalom.webp",
    aliases: [
  "ABSALOM",
  "ABSALOM THE CLEARCUT",
  "INVISIBLE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Thriller Bark",
      en: "Thriller Bark Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Thriller Bark",
    titre: { fr: "Commandant", en: "Commander" },
    age: 36,
    height: 195,
    rarity: 3
  },
  {
    name: "Dr. Hogback",
    image: "img/Hogback.webp",
    aliases: [
  "HOGBACK",
  "DR HOGBACK",
  "DOCTOR HOGBACK",
  "MEDECIN DE THRILLER BARK"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Thriller Bark",
      en: "Thriller Bark Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Thriller Bark",
    titre: { fr: "Commandant, Scientifique", en: "Commander, Scientist" },
    age: 47,
    height: 223,
    rarity: 3
  },
  {
    name: "Oars",
    image: "img/Oars.webp",
    aliases: [
  "OARS",
  "SPECIAL ZOMBIE",
  "GEANT",
  "SPECIAL"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Thriller Bark",
      en: "Thriller Bark Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Thriller Bark",
    titre: { fr: "Aucun", en: "None" },
    age: 159,
    height: 6700,
    rarity: 3
  },
  {
    name: "Denjiro",
    image: "img/Denjiro.webp",
    aliases: [
  "DENJIRO",
  "KYOUKOU",
  "KYO",
  "KYOSHIRO",
  "SAMURAI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 47,
    height: 306,
    rarity: 3
  },
  {
    name: "Kawamatsu",
    image: "img/Kawamatsu.webp",
    aliases: [
  "KAWAMATSU",
  "KAPPA",
  "SAMURAI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "SAMURAI CARPE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 41,
    height: 271,
    rarity: 3
  },
  {
    name: "Izo",
    image: "img/Izo.webp",
    aliases: [
  "IZO",
  "IZOU",
  "SAMURAI",
  "BARBE BLANCHE",
  "EQUIPAGE DE NEWGATE",
  "COMMANDANT DE LA 16E DIVISION BARBE BLANCHE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 510000000,
    arc: "Marineford",
    titre: { fr: "Samouraï, Equipage d'empereur", en: "Samurai, Emperor's Crew" },
    age: 45,
    height: 192,
    rarity: 3
  },
  {
    name: "Shutenmaru",
    image: "img/Shutenmaru.webp",
    aliases: [
  "SHUTENMARU",
  "ASHURA DOJI",
  "ASHURA",
  "SAMURAI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "BRIGAND DE WANO"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 56,
    height: 544,
    rarity: 3
  },
  {
    name: "Kikunojo",
    image: "img/Kiku.webp",
    aliases: [
  "KIKU",
  "KIKUNOJO",
  "O-KIKU",
  "OKIKU",
  "SAMURAI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "LA DAME DE WANO"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
      fr: "Pays de Wano",
      en: "Wano Country"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation, Armement",
      en: "Observation, Armament"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 22,
    height: 287,
    rarity: 3
  },

  {
    name: "Riku Doldo III",
    image: "img/Riku.webp",
    aliases: [
  "RIKU",
  "KING RIKU",
  "RICKY",
  "DOLDO",
  "ROI DE DRESSROSA",
  "ROI RIKU"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Dressrosa", en: "Dressrosa" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 60,
    height: 261,
    rarity: 3
  },
  {
    name: "Hajrudin",
    image: "img/Hajrudin.webp",
    aliases: ["HAJRUDIN", "HAILUDIN", "GEANT"],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Nouveaux Pirates Géants", en: "New Giant Warrior Pirates" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: null,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 81,
    height: 2200,
    rarity: 3
  },
  {
    name: "Richie",
    image: "img/Richie.webp",
    aliases: [
  "RICHIE",
  "LION BUGGY",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "CHIEN DE KRIEG",
  "LE CHIEN"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Cross Guild", en: "Cross Guild" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: null,
    arc: "Orange",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 1
  },
  {
    name: "Mohji",
    image: "img/Mohji.webp",
    aliases: [
  "MOHJI",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "DOMBEUR DE BETES",
  "LE LION BLANC"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Cross Guild", en: "Cross Guild" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: null,
    arc: "Orange",
    titre: { fr: "Aucun", en: "None" },
    age: 29,
    height: 197,
    rarity: 1
  },
  {
    name: "Cabaji",
    image: "img/Cabaji.webp",
    aliases: [
  "CABAJI",
  "CROSS GUILD",
  "GUILDE CROISEE",
  "CHASSEUR DE PIRATES",
  "CASCADEUR",
  "ACROBATE"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Cross Guild", en: "Cross Guild" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: null,
    arc: "Orange",
    titre: { fr: "Aucun", en: "None" },
    age: 34,
    height: 208,
    rarity: 1
  },
  {
    name: "Dr. Kureha",
    image: "img/Kureha.webp",
    aliases: [
  "KUREHA",
  "DR KUREHA",
  "DOCTOR KUREHA",
  "LA SORCIERE DE LA MONTAGNE"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Royaume de Drum", en: "Drum Kingdom" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Royaume de Drum",
    titre: { fr: "Aucun", en: "None" },
    age: 141,
    height: 188,
    rarity: 2
  },
  {
    name: "Nojiko",
    image: "img/Nojiko.webp",
    aliases: [
  "NOJIKO",
  "SOEUR DE NAMI"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Cocoyashi", en: "Cocoyashi" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Arlong Park",
    titre: { fr: "Aucun", en: "None" },
    age: 22,
    height: 170,
    rarity: 1
  },
  {
    name: "Kuina",
    image: "img/Kuina.webp",
    aliases: [
  "KUINA",
  "EPEISTE",
  "RIVALE DE ZORO"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Aucune", en: "None" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Romance Dawn",
    titre: { fr: "Aucun", en: "None" },
    age: 11,
    height: 150,
    rarity: 2
  },
  {
    name: "Genzo",
    image: "img/Genzo.webp",
    aliases: [
  "GENZO",
  "MAIRE DE COCOYASHI"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Cocoyashi", en: "Cocoyashi" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Arlong Park",
    titre: { fr: "Aucun", en: "None" },
    age: 48,
    height: 173,
    rarity: 1
  },
  {
    name: "Belle-mère",
    image: "img/Bellemere.webp",
    aliases: [
  "BELLEMERE",
  "BELLE MERE",
  "BELLE-MERE",
  "MERE ADOPTIVE DE NAMI"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Cocoyashi", en: "Cocoyashi" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Arlong Park",
    titre: { fr: "Aucun", en: "None" },
    age: 30,
    height: null,
    rarity: 2
  },
  {
    name: "Charlotte Brûlée",
    image: "img/Brulee.webp",
    aliases: [
  "BRULEE",
  "BRÛLÉE",
  "CHARLOTTE BRULEE",
  "PIRATES DE BIG MOM",
  "MIROIR"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Pirates de Big Mom", en: "Big Mom Pirates" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: null,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 43,
    height: 350,
    rarity: 3
  },
  {
    name: "Bellamy",
    image: "img/Bellamy.webp",
    aliases: [
  "BELLAMY",
  "HYENE",
  "HYENA",
  "LE RESSORT",
  "SPRING HOPPER"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Aucune", en: "None" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 195000000,
    arc: "Jaya",
    titre: { fr: "Capitaine", en: "Captain" },
    age: 27,
    height: 240,
    rarity: 2
  },
  {
    name: "Koala",
    image: "img/Koala.webp",
    aliases: [
  "KOALA",
  "JEUNE FEMME POISSON",
  "ANCIENNE ESCLAVE"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Armée Révolutionnaire", en: "Revolutionary Army" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: null,
    arc: "Dressrosa",
    titre: { fr: "Aucun", en: "None" },
    age: 23,
    height: 160,
    rarity: 3
  },
  {
    name: "Charlotte Oven",
    image: "img/Oven.webp",
    aliases: [
  "OVEN",
  "CHARLOTTE OVEN",
  "PIRATES DE BIG MOM",
  "CHALEUR",
  "PAIN"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates de Big Mom", en: "Big Mom Pirates" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 300000000,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 48,
    height: 492,
    rarity: 3
  },
  {
    name: "Who's-Who",
    image: "img/WhosWho.webp",
    aliases: [
  "WHO'S WHO",
  "WHOS WHO",
  "WHO IS WHO",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "TOBIROPPO",
  "OFFICIER DES BEAST PIRATES",
  "TIGRE A DENTS DE SABRE"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates aux Cents Bêtes", en: "Beast Pirates" },
    fruit: { fr: "Ancien Zoan", en: "Ancient Zoan" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 546000000,
    arc: "Wano Kuni",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 38,
    height: 336,
    rarity: 3
  },
  {
    name: "Black Maria",
    image: "img/BlackMaria.webp",
    aliases: [
  "BLACK MARIA",
  "MARIA",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "TOBIROPPO",
  "OFFICIER DES BEAST PIRATES",
  "ARAIGNEE",
  "LA TENANCIERE"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Pirates aux Cents Bêtes", en: "Beast Pirates" },
    fruit: { fr: "Ancien Zoan", en: "Ancient Zoan" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 480000000,
    arc: "Wano Kuni",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 29,
    height: 820,
    rarity: 3
  },
  {
    name: "Page One",
    image: "img/PageOne.webp",
    aliases: [
  "PAGE ONE",
  "PAGEONE",
  "BEAST PIRATES",
  "PIRATES AUX CENT BETES",
  "TOBIROPPO",
  "OFFICIER DES BEAST PIRATES",
  "SPINOSAURE"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates aux Cents Bêtes", en: "Beast Pirates" },
    fruit: { fr: "Ancien Zoan", en: "Ancient Zoan" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 290000000,
    arc: "Wano Kuni",
    titre: { fr: "Equipage d'empereur", en: "Emperor's Crew" },
    age: 20,
    height: 171,
    rarity: 3
  },
  {
    name: "Doc Q",
    image: "img/DocQ.webp",
    aliases: [
  "DOC Q",
  "DOCQ",
  "DEATH GOD",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: 72000000,
    arc: "Jaya",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 28,
    height: 342,
    rarity: 3
  },
  {
    name: "Catarina Devon",
    image: "img/CatarinaDevon.webp",
    aliases: [
  "CATARINA",
  "DEVON",
  "CATARINA DEVON",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH",
  "CHASSEUSE DE BEAUX HOMMES"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" },
    fruit: { fr: "Mythique Zoan", en: "Mythical Zoan" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: null,
    arc: "Marineford",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 36,
    height: 361,
    rarity: 4
  },
  {
    name: "Van Augur",
    image: "img/VanAugur.webp",
    aliases: [
  "VAN AUGUR",
  "AUGUR",
  "VANAUGUR",
  "BARBE NOIRE",
  "EQUIPAGE DE TEACH"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: 64000000,
    arc: "Jaya",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
    age: 27,
    height: 340,
    rarity: 3
  },
  {
    name: "Tsuru",
    image: "img/Tsuru.webp",
    aliases: [
  "TSURU",
  "GREAT STAFF OFFICER",
  "MARINE",
  "GARP FRRIEND",
  "SURU",
  "MONTE CHARGE"
],
    gender: { fr: "Femme", en: "Female" },
    affiliation: { fr: "Marine", en: "Marines" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Observation, Armement", en: "Observation, Armament" },
    prime: 0,
    arc: "Marineford",
    titre: { fr: "Vice-Amiral", en: "Vice Admiral" },
    age: 76,
    height: 204,
    rarity: 3
  },
  {
    name: "Fukaboshi",
    image: "img/Fukaboshi.webp",
    aliases: [
  "FUKABOSHI",
  "PRINCE",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "PRINCE DU ROYAUME RYUGU",
  "REQUIN BLEU"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Royaume Ryugu", en: "Ryugu Kingdom" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 24,
    height: 604,
    rarity: 2
  },
  {
    name: "Ryuboshi",
    image: "img/Ryuboshi.webp",
    aliases: [
  "RYUBOSHI",
  "RYUUBOSHI",
  "PRINCE",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "PRINCE DU ROYAUME RYUGU",
  "POISSON RAME"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Royaume Ryugu", en: "Ryugu Kingdom" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 23,
    height: 544,
    rarity: 2
  },
  {
    name: "Manboshi",
    image: "img/Manboshi.webp",
    aliases: [
  "MANBOSHI",
  "PRINCE",
  "HOMME POISSON",
  "HOMMES POISSON",
  "SIRENE",
  "SIRENES",
  "PRINCE DU ROYAUME RYUGU",
  "POISSON LUNE"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Royaume Ryugu", en: "Ryugu Kingdom" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 20,
    height: 473,
    rarity: 2
  },
  {
    name: "Gladius",
    image: "img/Gladius.webp",
    aliases: [
  "GLADIUS",
  "PIRATES DE DOFLAMINGO",
  "FAMILLE DONQUICHOTE",
  "DONQUICHOTE",
  "EQUIPAGE DE DOFLAMINGO",
  "EXPLOSIF",
  "CASSEUR"
],
    gender: { fr: "Homme", en: "Male" },
    affiliation: { fr: "Pirates de Don Quichotte", en: "Donquixote Pirates" },
    fruit: { fr: "Paramecia", en: "Paramecia" },
    haki: { fr: "Inconnu", en: "Unknown" },
    prime: 31000000,
    arc: "Dressrosa",
    titre: { fr: "Aucun", en: "None" },
    age: 33,
    height: 260,
    rarity: 2
  },

  {
    name: "Going Merry",
    image: "img/Merry.webp",
    aliases: [
  "MERRY",
  "GOING MERRY",
  "VOGUE MERRY",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "NAVIRE",
  "BATEAU"
],
    gender: { fr: "Aucun", en: "None" },
    affiliation: { fr: "Chapeau de paille", en: "Straw Hat Pirates" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Syrup",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 4,
    questName: {
      fr: "Merci Merry",
      en: "Thank you Merry"
    },
    // Récompense de quête : les 8 Mugiwara pré-ellipse possédés (formes pre)
    unlock: { hasVariants: [ "zoro_pre", "nami_pre", "franky_pre", "sanji_pre", "chopper_pre", "brook_pre", "luffy_pre", "usopp_pre" ] },
    notGuessable: true
  },
  {
    name: "Thousand Sunny",
    image: "img/Sunny.webp",
    aliases: [
  "SUNNY",
  "THOUSAND SUNNY",
  "MUGIWARA",
  "STRAW HAT",
  "CHAPEAU DE PAILLE",
  "EQUIPAGE DE LUFFY",
  "NAVIRE",
  "BATEAU",
  "LE LION"
],
    gender: { fr: "Aucun", en: "None" },
    affiliation: { fr: "Chapeau de paille", en: "Straw Hat Pirates" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 4,
    questName: {
      fr: "Le navire des rêves",
      en: "Ship of Dreams"
    },
    // Récompense de quête : la page Mugiwara de l'album complète
    unlock: { collectionComplete: "strawhat" },
    notGuessable: true
  },
  {
    name: "Thriller Bark",
    image: "img/ThrillerBark.webp",
    aliases: [
  "THRILLER BARK",
  "LE PLUS GRAND NAVIRE",
  "THE BIGGEST SHIP",
  "PLUS GRAND NAVIRE DU MONDE"
],
    gender: { fr: "Aucun", en: "None" },
    affiliation: { fr: "Pirates de Thriller Bark", en: "Thriller Bark Pirates" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Thriller Bark",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 4,
    questName: {
      fr: "Le plus grand navire du monde",
      en: "The Biggest Ship in the Whole World"
    },
    // Récompense de quête : la page Pirates de Thriller Bark de l'album complète
    unlock: { collectionComplete: "moria" },
    notGuessable: true
  },
  {
    name: "Queen Mama Chanter",
    image: "img/BigMomShip.webp",
    aliases: [
  "QUEEN MAMA CHANTER",
  "GRANDE MERE CHANTERELLE",
  "LE NAVIRE DE BIG MOM",
  "MAMA CHANTER"
],
    gender: { fr: "Aucun", en: "None" },
    affiliation: { fr: "Pirates de Big Mom", en: "Big Mom Pirates" },
    fruit: { fr: "Aucun", en: "None" },
    haki: { fr: "Aucun", en: "None" },
    prime: 0,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: null,
    height: null,
    rarity: 4,
    questName: {
      fr: "Le navire de Big Mom",
      en: "Big Mom's Ship"
    },
    // Récompense de quête : la page Famille Charlotte de l'album complète
    unlock: { collectionComplete: "bigmom" },
    notGuessable: true
  },
  {
    name: "Kokoro",
    image: "img/Kokoro.webp",
    aliases: [
  "KOKORO",
  "KOKORO WATER 7",
  "ANCIENNE MARINE DE WATER 7"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Water 7",
        en: "Water 7"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Water 7",
    titre: { fr: "Aucun", en: "None" },
    age: 72,
    height: 168,
    rarity: 2
  },
  {
    name: "Gaimon",
    image: "img/Gaimon.webp",
    aliases: [
  "GAIMON",
  "L HOMME COFFRE",
  "HOMME AU COFFRE",
  "LE PIRATE AU COFFRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Aucun",
        en: "None"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Syrup",
    titre: { fr: "Aucun", en: "None" },
    age: 45,
    height: 130,
    rarity: 1
  },
  {
    name: "Charlotte Mont-d'Or",
    image: "img/Montdor.webp",
    aliases: [
  "MONT D'OR",
  "MONT DOR",
  "MONTDOR",
  "PIRATES DE BIG MOM",
  "LIVRE",
  "FROMAGE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 120000000,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 38,
    height: 260,
    rarity: 3
  },
  {
    name: "Ryuma",
    image: "img/Ryuma.webp",
    aliases: [
  "RYUMA",
  "RYUMA ZOMBIE",
  "SHIMOTSUKI RYUMA",
  "ROI DES EPEE",
  "SAMURAI LEGENDAIRE"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Thriller Bark",
    titre: { fr: "Samouraï", en: "Samurai" },
    age: 47,
    height: 179,
    rarity: 4
  },
  {
    name: "Dr. Hiriluk",
    image: "img/Hiriluk.webp",
    aliases: [
  "HIRILUK",
  "DOCTEUR HIRILUK",
  "DR HIRILUK",
  "LE MEDECIN FOU"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Royaume de Drum",
        en: "Drum Kingdom"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Royaume de Drum",
    titre: { fr: "Aucun", en: "None" },
    age: 68,
    height: 213,
    rarity: 2
  },
  {
    name: "Kozuki Hiyori",
    image: "img/Hiyori.webp",
    aliases: [
  "HIYORI",
  "KOMURASAKI",
  "KOZUKI HIYORI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "PRINCESSE DE WANO",
  "FILLE D ODEN"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 26,
    height: 170,
    rarity: 2
  },
  {
    name: "Wanda",
    image: "img/Wanda.webp",
    aliases: [
  "WANDA",
  "WANDA ZOU",
  "MINK",
  "MINKS",
  "TRIBU DES MINKS",
  "MINK LAPIN",
  "GARDE DE WANO"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Zou",
    titre: { fr: "Aucun", en: "None" },
    age: 28,
    height: 181,
    rarity: 2
  },
  {
    name: "Charlotte Chiffon",
    image: "img/Chiffon.webp",
    aliases: [
  "CHIFFON",
  "CHARLOTTE CHIFFON",
  "PIRATES DE BIG MOM",
  "CREME",
  "SOEUR DE SANJI"
],
    gender: {
      fr: "Femme",
      en: "Female"
    },
    affiliation: {
        fr: "Pirates du Fire Tank",
        en: "Fire Tank Pirates"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Whole Cake Island",
    titre: { fr: "Aucun", en: "None" },
    age: 26,
    height: 215,
    rarity: 2
  },
  {
    name: "Kurozumi Orochi",
    image: "img/Orochi.webp",
    aliases: [
  "OROCHI",
  "KUROZUMI OROCHI",
  "SHOGUN OROCHI",
  "WANO",
  "PAYS DE WANO",
  "WANO KUNI",
  "SHOGUN DE WANO",
  "HYDRE A HUIT TETES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      },
    fruit: {
      fr: "Mythique Zoan",
      en: "Mythical Zoan"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 0,
    arc: "Wano Kuni",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 54,
    height: 350,
    rarity: 3
  },
  {
    name: "Tamago",
    image: "img/Tamago.webp",
    aliases: [
  "TAMAGO",
  "BARON TAMAGO",
  "PIRATES DE BIG MOM",
  "GENTILHOMME OEUF"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      },
    fruit: {
      fr: "Zoan",
      en: "Zoan"
    },
    haki: {
      fr: "Inconnu",
      en: "Unknown"
    },
    prime: 429000000,
    arc: "Île des Hommes-Poissons",
    titre: { fr: "Aucun", en: "None" },
    age: 46,
    height: 301,
    rarity: 3
  },
  {
    name: "Ohm",
    image: "img/Ohm.webp",
    aliases: [
  "OHM",
  "OHM SKYBREEDER",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "PRIERE DE FER"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 29,
    height: 189,
    rarity: 3
  },
  {
    name: "Shura",
    image: "img/Shura.webp",
    aliases: [
  "SHURA",
  "SHURA SKY RIDER",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "PRIERE DE LA MORT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 33,
    height: 191,
    rarity: 3
  },
  {
    name: "Satori",
    image: "img/Satori.webp",
    aliases: [
  "SATORI",
  "SATORI FORET",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "PRIERE DES ORBES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 27,
    height: 179,
    rarity: 3
  },
  {
    name: "Gedatsu",
    image: "img/Gedatsu.webp",
    aliases: [
  "GEDATSU",
  "GEDATSU SKY BOSS",
  "SKYPIEA",
  "PRETRE DE SKYPIEA",
  "DIEU DE SKYPIEA",
  "PRIERE DES NUAGES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Observation",
      en: "Observation"
    },
    prime: 0,
    arc: "Skypiea",
    titre: { fr: "Aucun", en: "None" },
    age: 31,
    height: 220,
    rarity: 3
  },
  {
    name: "Karoo",
    image: "img/Karoo.webp",
    aliases: [
  "KAROO",
  "KARU",
  "CANARD",
  "LE CANARD"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Reverse Mountain",
    titre: { fr: "Aucun", en: "None" },
    age: 16,
    height: 150,
    rarity: 1
  },
  {
    name: "Koza",
    image: "img/Koza.webp",
    aliases: [
  "KOZA",
  "KOHZA",
  "MINISTRE KOZA",
  "JEUNE AMI DE VIVI"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Alabasta",
    titre: { fr: "Aucun", en: "None" },
    age: 22,
    height: 177,
    rarity: 2
  },
  {
    name: "Elizabello II",
    image: "img/Elizabello.webp",
    aliases: [
  "ELIZABELLO",
  "ELIZABELLO II",
  "ROI DE PRODENCE",
  "KING PUNCH",
  "POING DU ROI"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Royaume de Prodence",
      en: "Prodence Kingdom"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 0,
    arc: "Dressrosa",
    titre: { fr: "Famille Royale", en: "Royal Family" },
    age: 57,
    height: 436,
    rarity: 2
  },
  {
    name: "Orlumbus",
    image: "img/Orlumbus.webp",
    aliases: [
  "ORLUMBUS",
  "AMIRAL YONTA MARIA",
  "YONTA MARIA"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates Yonta Maria",
      en: "Yonta Maria Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 148000000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 42,
    height: 480,
    rarity: 2
  },
  {
    name: "Sai",
    image: "img/Sai.webp",
    aliases: [
  "SAI",
  "SAI CHINJAO",
  "HAPPO NAVY",
  "13E DIRIGEANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Happo Navy",
      en: "Happo Navy"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 210000000,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 28,
    height: 242,
    rarity: 2
  },
  {
    name: "Ideo",
    image: "img/Ideo.webp",
    aliases: [
  "IDEO",
  "BOXEUR",
  "IDEO PIRATES"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates d'Ideo",
      en: "Ideo Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Dressrosa",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 22,
    height: 225,
    rarity: 2
  },
  {
    name: "Little Oars Jr.",
    image: "img/OarsJr.webp",
    aliases: [
  "OARS JR",
  "LITTLE OARS",
  "LITTLE OARS JR",
  "GEANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Petits Pirates",
      en: "Little Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: 550000000,
    arc: "Marineford",
    titre: { fr: "Capitaine, Allié", en: "Captain, Ally" },
    age: 72,
    height: 6000,
    rarity: 3
  },
  {
    name: "Thatch",
    image: "img/Thatch.webp",
    aliases: [
  "THATCH",
  "CUISINIER DE BARBE BLANCHE",
  "COMMANDANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Marineford",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor crew" },
    age: null,
    height: null,
    rarity: 3
  },
  {
    name: "Vista",
    image: "img/Vista.webp",
    aliases: [
  "VISTA",
  "SABRES FLEURS",
  "COMMANDANT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Aucun",
      en: "None"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Marineford",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor crew" },
    age: 47,
    height: 328,
    rarity: 3
  },
  {
    name: "Jozu",
    image: "img/Jozu.webp",
    aliases: [
  "JOZU",
  "FRUIT DU DIAMANT",
  "DIAMOND FRUIT"
],
    gender: {
      fr: "Homme",
      en: "Male"
    },
    affiliation: {
      fr: "Pirates de Barbe Blanche",
      en: "Whitebeard Pirates"
    },
    fruit: {
      fr: "Paramecia",
      en: "Paramecia"
    },
    haki: {
      fr: "Aucun",
      en: "None"
    },
    prime: null,
    arc: "Marineford",
    titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor crew" },
    age: 42,
    height: 503,
    rarity: 3
  }

];

if (typeof applyRarityToCharacters === "function") applyRarityToCharacters(CHARACTERS);
if (typeof applyNicheToCharacters === "function") applyNicheToCharacters(CHARACTERS);
