/**
 * data/variants.js
 * Formes alternatives, enfants, shinies, gears.
 */
const CHARACTER_VARIANTS = [
  {
    id: "law_young",
    baseName: "Trafalgar D. Water Law",
    displayName: {
      fr: "Trafalgar D. Water Law",
      en: "Trafalgar D. Water Law"
    },
    aliases: [ "LAW ENFANT", "YOUNG LAW", "LAW KID", "LAW CHILD" ],
    image: "img/alt/Law_young.webp",
    stories: [ "dressrosa" ],
    rarity: 4,
    isShiny: false,
    // Alt normal tirable (quête « Corazon » retirée de la liste officielle)
    overrides: {}
  },
  {
    id: "sabo_young",
    baseName: "Sabo",
    displayName: {
      fr: "Sabo",
      en: "Sabo"
    },
    aliases: [ "SABO", "SABO ENFANT", "YOUNG SABO", "SABO KID" ],
    image: "img/alt/Sabo_young.webp",
    stories: [ "marineford", "fishman" ],
    forceInPool: true,
    onlyAsVariant: true,
    rarity: 4,
    isShiny: false,
    // EXCEPTION assumée : Sabo enfant garde ses stats d'enfant (à sa
    // découverte le lecteur ignore qu'il est vivant — prime/titre inconnus).
    overrides: {
      age: 10,
      height: 140,
      prime: null, // prime jamais révélée (0 = « pas de prime », pas « inconnue »)
      titre: {
        fr: "Aucun",
        en: "None"
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
      arc: "Post-Marineford"
    }
  },
  {
    id: "ace_young",
    baseName: "Portgas D. Ace",
    displayName: {
      fr: "Portgas D. Ace",
      en: "Portgas D. Ace"
    },
    aliases: [ "ACE ENFANT", "YOUNG ACE", "ACE KID" ],
    image: "img/alt/Ace_young.webp",
    stories: [ "marineford" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    id: "zeff_pirate",
    baseName: "Zeff",
    displayName: {
      fr: "Zeff",
      en: "Zeff"
    },
    aliases: [ "ZEFF PIRATE", "PIRATE ZEFF", "RED FOOT PIRATE" ],
    image: "img/alt/Zeff_pirate.webp",
    stories: [ "eastblue" ],
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "luffy_young",
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Monkey D. Luffy",
      en: "Monkey D. Luffy"
    },
    aliases: [ "LUFFY ENFANT", "YOUNG LUFFY", "LUFFY KID" ],
    image: "img/alt/luffy_young.webp",
    stories: [ "eastblue", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "luffy_gear2",
    collectionOnly: true,
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Luffy Gear 2",
      en: "Luffy Gear 2"
    },
    aliases: [ "GEAR 2", "GEAR2", "LUFFY GEAR 2" ],
    image: "img/alt/Gear2.webp",
    minStory: "water7",
    rarity: 3,
    isShiny: false,
    unlock: {
      winsW7mhe: 10
    },
    questName: {
      fr: "Gear 2 en action",
      en: "2nd Gear in action"
    },
    overrides: {
      titre: {
        fr: "Capitaine, Gear 2",
        en: "Captain, Gear 2"
      }
    }
  },
  {
    id: "luffy_gear3",
    collectionOnly: true,
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Luffy Gear 3",
      en: "Luffy Gear 3"
    },
    aliases: [ "GEAR 3", "GEAR3", "LUFFY GEAR 3" ],
    image: "img/alt/Gear3.webp",
    minStory: "water7",
    rarity: 3,
    isShiny: false,
    unlock: {
      winsW7mhe: 20
    },
    questName: {
      fr: "Le poing d'un géant",
      en: "the fist of a giant"
    },
    overrides: {
      titre: {
        fr: "Capitaine, Gear 3",
        en: "Captain, Gear 3"
      }
    }
  },
  {
    id: "luffy_gear4_bounceman",
    collectionOnly: true,
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Luffy Gear 4 Bounceman",
      en: "Luffy Gear 4 Bounceman"
    },
    aliases: [ "GEAR 4", "GEAR4", "LUFFY GEAR 4", "BOUNCEMAN" ],
    image: "img/alt/Gear4.webp",
    minStory: "dressrosa",
    rarity: 4,
    isShiny: false,
    unlock: {
      winsDRhe: 30
    },
    questName: {
      fr: "L'homme rebondissant",
      en: "The Bouncing Man"
    },
    overrides: {
      titre: {
        fr: "Capitaine, Gear 4",
        en: "Captain, Gear 4"
      }
    }
  },
  {
    id: "luffy_gear4_snakeman",
    collectionOnly: true,
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Luffy Gear 4 Snakeman",
      en: "Luffy Gear 4 Snakeman"
    },
    aliases: [ "GEAR 4", "GEAR4", "LUFFY GEAR 4", "SNAKEMAN" ],
    image: "img/alt/Gear4B.webp",
    minStory: "wholecake",
    rarity: 4,
    isShiny: false,
    unlock: {
      winsWChec: 40
    },
    questName: {
      fr: "L'homme serpent",
      en: "The Snakeman"
    },
    overrides: {
      titre: {
        fr: "Capitaine, Gear 4",
        en: "Captain, Gear 4"
      }
    }
  },
  {
    id: "luffy_gear5",
    collectionOnly: true,
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Monkey D. Luffy",
      en: "Monkey D. Luffy"
    },
    aliases: [ "GEAR 5", "GEAR5", "LUFFY GEAR 5", "NIKA", "JOYBOY" ],
    image: "img/alt/Gear5.webp",
    minStory: "wano",
    rarity: 5,
    isShiny: true,
    unlock: {
      winsWanoEx: 50
    },
    questName: {
      fr: "Le dieu du soleil",
      en: "The Sun God"
    },
    overrides: {
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      titre: {
        fr: "Capitaine, Empereur, Gear 5",
        en: "Captain, Emperor, Gear 5"
      }
    }
  },
  {
    id: "luffy_shiny",
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Le futur Roi des Pirates",
      en: "The Future Pirate King"
    },
    aliases: [ "LUFFY SHINY", "SHINY LUFFY" ],
    image: "img/shiny/luffy_shiny.webp",
    stories: [ "wano" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    id: "zoro_shiny",
    baseName: "Roronoa Zoro",
    displayName: {
      fr: "Zoro ✦ Shiny",
      en: "Zoro ✦ Shiny"
    },
    aliases: [ "ZORO SHINY", "SHINY ZORO" ],
    image: "img/shiny/Zoro_shiny.webp",
    stories: [ "wano" ],
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "garp_shiny",
    baseName: "Monkey D. Garp",
    displayName: {
      fr: "Garp ✦ Shiny",
      en: "Garp ✦ Shiny"
    },
    aliases: [ "GARP SHINY", "SHINY GARP" ],
    image: "img/shiny/Garp_shiny.webp",
    // Le shiny s'empile sur la forme forcée (voir pickRandomCharacter) :
    // aucune borne de story point, il suit la disponibilité de la carte de base.
    stories: [ "eastblue", "alabasta", "skypiea" ],
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "roger_shiny",
    baseName: "Gol D. Roger",
    displayName: {
      fr: "Roger ✦ Shiny",
      en: "Roger ✦ Shiny"
    },
    aliases: [ "ROGER SHINY", "SHINY ROGER", "GOL D ROGER SHINY" ],
    image: "img/shiny/Roger_shiny.webp",
    stories: [ "wano" ],
    rarity: 6,
    isShiny: true,
    collectionOnly: true,
    unlock: { wins: 300 },
    questSubject: {
      fr: "The Pirate King",
      en: "The Pirate King"
    },
    questName: {
      fr: "Le rire de Laugh Tale",
      en: "The Laugh at Laugh Tale"
    },
    overrides: {}
  },
  {
    id: "rayleigh_shiny",
    baseName: "Silvers Rayleigh",
    displayName: {
      fr: "Rayleigh ✦ Shiny",
      en: "Rayleigh ✦ Shiny"
    },
    aliases: [ "RAYLEIGH SHINY", "SHINY RAYLEIGH" ],
    image: "img/shiny/Rayleigh_shiny.webp",
    stories: [ "marineford", "fishman" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    // Buggy East Blue : il s'infiltre en costume de bug pour entrer à Loguetown
    // (ch. 10-11). À East Blue il remplace la forme normale (excludesBase) mais
    // coexiste avec l'enfant — qui, lui, est un alt probabiliste.
    id: "buggy_eastblue",
    baseName: "Buggy",
    displayName: {
      fr: "Buggy",
      en: "Buggy"
    },
    aliases: [ "BUGGY EAST BLUE", "BUGGY LOGUETOWN", "BUGGY CAMOUFLE", "BUGGY COSTUME BUG", "BUGGY DISGUISED" ],
    image: "img/alt/Buggy_eastblue.webp",
    stories: [ "eastblue" ],
    // Tant que cet alt est dispo, la forme normale de Buggy ne sort plus :
    // la place libre revient aux autres alts du perso (l'enfant).
    excludesBase: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "imu_shiny",
    baseName: "Imu",
    displayName: {
      fr: "Imu ✦ Shiny",
      en: "Imu ✦ Shiny"
    },
    aliases: [ "IMU SHINY", "SHINY IMU" ],
    image: "img/shiny/Imu_shiny.webp",
    stories: [ "all" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    id: "shanks_young",
    baseName: "Shanks",
    displayName: {
      fr: "Shanks",
      en: "Shanks"
    },
    aliases: [ "SHANKS ENFANT", "YOUNG SHANKS", "SHANKS KID", "SHANKS CHILD" ],
    image: "img/alt/Shanks_young.webp",
    stories: [ "eastblue", "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    id: "buggy_young",
    baseName: "Buggy",
    displayName: {
      fr: "Buggy",
      en: "Buggy"
    },
    aliases: [ "BUGGY ENFANT", "BAGGY ENFANT", "YOUNG BUGGY", "BUGGY KID", "BUGGY CHILD" ],
    image: "img/alt/Buggy_young.webp",
    stories: [ "eastblue", "wano" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "sanji_germa",
    baseName: "Vinsmoke Sanji",
    displayName: {
      fr: "Vinsmoke Sanji",
      en: "Vinsmoke Sanji"
    },
    aliases: [ "SANJI GERMA", "GERMA SANJI", "RAID SUIT SANJI", "SANJI RAID SUIT" ],
    image: "img/alt/Sanji_germa.webp",
    stories: [ "wano" ],
    rarity: 5,
    isShiny: false,
    overrides: {}
  },
  {
    id: "coby_young",
    baseName: "Coby",
    displayName: {
      fr: "Coby",
      en: "Coby"
    },
    aliases: [ "KOBY ENFANT", "COBY ENFANT", "YOUNG KOBY", "YOUNG COBY", "KOBY KID" ],
    image: "img/alt/Coby_young.webp",
    // Mousse jusqu'à Skypiea : à Water 7 le lecteur voit Koby et Helmeppo
    // entraînés par Garp (ch. 432) et découvre leur nouveau look.
    stories: [ "eastblue", "alabasta", "skypiea" ],
    forceInPool: true,
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "kaido_shiny",
    baseName: "Kaido",
    displayName: {
      fr: "Kaido ✦ Shiny",
      en: "Kaido ✦ Shiny"
    },
    aliases: [ "KAIDO SHINY", "SHINY KAIDO" ],
    image: "img/shiny/Kaido_shiny.webp",
    stories: [ "wano" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    id: "shanks_shiny",
    baseName: "Shanks",
    displayName: {
      fr: "Shanks ✦ Shiny",
      en: "Shanks ✦ Shiny"
    },
    aliases: [ "SHANKS SHINY", "SHINY SHANKS" ],
    image: "img/shiny/Shanks_shiny.webp",
    stories: [ "marineford", "wano" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    id: "sanji_shiny",
    baseName: "Vinsmoke Sanji",
    displayName: {
      fr: "Sanji ✦ Shiny",
      en: "Sanji ✦ Shiny"
    },
    aliases: [ "SANJI SHINY", "SHINY SANJI" ],
    image: "img/shiny/Sanji_shiny.webp",
    stories: [ "wholecake", "wano" ],
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "lucci_shiny",
    baseName: "Rob Lucci",
    displayName: {
      fr: "Lucci ✦ Shiny",
      en: "Lucci ✦ Shiny"
    },
    aliases: [ "LUCCI SHINY", "SHINY LUCCI", "ROB LUCCI SHINY" ],
    image: "img/shiny/Lucci_shiny.webp",
    stories: [ "water7" ],
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "law_shiny",
    baseName: "Trafalgar D. Water Law",
    displayName: {
      fr: "Law ✦ Shiny",
      en: "Law ✦ Shiny"
    },
    aliases: [ "LAW SHINY", "SHINY LAW", "TRAFALGAR SHINY" ],
    image: "img/shiny/Law_shiny.webp",
    stories: [ "dressrosa", "wano" ],
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "bigmom_rocks",
    // Passée en alt tirable (au lieu d'être la récompense de la page Rocks)
    baseName: "Big Mom",
    displayName: { fr: "Big Mom (Rocks)", en: "Big Mom (Rocks)" },
    aliases: ["BIG MOM ROCKS", "LINLIN ROCKS", "YOUNG BIG MOM", "CHARLOTTE LINLIN ROCKS"],
    image: "img/alt/BigMom_Rocks.webp",
    minStory: "wano",
    rarity: 5,
    isShiny: false,
    albumCategories: ["rocks"],
    overrides: {
      age: 26,
      prime: null, // prime jamais révélée à l'époque de Rocks (0 = « pas de prime »)
      titre: { fr: "Pirates de Rocks", en: "Rocks Pirates" },
      affiliation: { fr: "Pirates de Rocks", en: "Rocks Pirates" },
      haki: { fr: "Inconnu", en: "Unknown" }
    }
  },
  {
    // Shiny de Big Mom : tirable à Whole Cake et Wano (où Linlin est au centre)
    id: "bigmom_shiny",
    baseName: "Big Mom",
    displayName: {
      fr: "Big Mom ✦ Shiny",
      en: "Big Mom ✦ Shiny"
    },
    aliases: [ "BIG MOM SHINY", "SHINY BIG MOM", "LINLIN SHINY", "SHINY LINLIN" ],
    image: "img/shiny/BigmomShiny.jpeg",
    stories: [ "wholecake", "wano" ],
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    id: "robin_pre",
    baseName: "Nico Robin",
    displayName: {
      fr: "Nico Robin",
      en: "Nico Robin"
    },
    aliases: [ "ROBIN PRE ELLIPSE", "PRE ELLIPSE ROBIN", "ROBIN AVANT ELLIPSE", "ROBIN PRE SKIP", "PRE TIMESKIP ROBIN", "MISS ALL SUNDAY" ],
    image: "img/alt/Robin_pre.webp",
    stories: [ "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    forceInPool: true,
    // Repassée en alt normal tirable : sans ça, une variante onlyAsVariant
    // serait forcée à 100 % à chaque tirage de Robin.
    onlyAsVariant: false,
    rarity: 2,
    isShiny: false,
    // Alt normal tirable (la quête « Je veux vivre ! » porte sur robin_live)
    overrides: {}
  },
  {
    // Forme démoniaque (Demonio Fleur) : les bras de Robin se transforment en
    // démons — révélée à Thriller Bark, réutilisée à Wano contre Black Maria.
    id: "robin_demon",
    baseName: "Nico Robin",
    displayName: {
      fr: "Nico Robin",
      en: "Nico Robin"
    },
    aliases: [ "ROBIN DEMON", "DEMON ROBIN", "DEMONIO FLEUR", "ROBIN DEMONIAQUE", "ROBIN ONI" ],
    image: "img/shiny/RobinDemon.png",
    stories: [ "thriller", "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Masque de chien + nom court, jusqu'à Skypiea. À Water 7 le lecteur a vu
    // le lien avec Luffy : la carte normale (vrai visage, nom complet) revient.
    id: "garp_chien",
    baseName: "Monkey D. Garp",
    // Nom volontairement court : avant Enies Lobby le lecteur ne connaît pas
    // encore le "Monkey D." — c'est une exception anti-spoiler à la règle
    // "un alt garde le nom de sa carte de base".
    displayName: {
      fr: "Garp",
      en: "Garp"
    },
    aliases: [ "GARP CHIEN", "CHIEN", "GARP MASQUE", "GARPMASK", "DOG GARP", "GARP PRE ELLIPSE", "MONKEY D GARP MASQUE" ],
    image: "img/alt/Garp_mask.webp",
    stories: [ "eastblue", "alabasta", "skypiea" ],
    forceInPool: true,
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Nom court avant la révélation du lien avec Luffy (fin Enies Lobby)
    id: "dragon_nom_court",
    baseName: "Monkey D. Dragon",
    // Exception anti-spoiler : idem Garp, le "Monkey D." n'est pas encore connu.
    displayName: {
      fr: "Dragon",
      en: "Dragon"
    },
    aliases: [ "DRAGON SANS NOM", "DRAGON NOM COURT", "DRAGON AVANT ENIES LOBBY" ],
    image: "img/alt/Dragon_Loguetown.webp",
    stories: [ "eastblue", "alabasta", "skypiea" ],
    forceInPool: true,
    onlyAsVariant: true,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Usopp se fait connaître sous le nom de Sogeking à Water 7 :
    // version RARE à cet endroit précis, coexistante avec la carte normale.
    id: "usopp_sogeking",
    baseName: "Usopp",
    displayName: {
      fr: "Usopp",
      en: "Usopp"
    },
    aliases: [ "SOGE KING", "SOGEKING", "CAPITAINE SOGE KING", "USOPP SOGE KING", "LUSCEP" ],
    image: "img/alt/Usopp_Sogeking.webp",
    stories: [ "water7" ],
    forceInPool: true,
    // alt "rare à un endroit précis" : peut apparaître EN MÊME TEMPS que la
    // carte normale (contrairement aux formes d'apparence type garp_chien)
    rarity: 3,
    isShiny: false,
    // Le Roi des Snipers ne se montre qu'à ceux qui snipent du 1er coup (plus tirable avant)
    unlock: { firstTryW7: 1 },
    collectionOnly: true,
    questName: {
      fr: "Le roi des snipers",
      en: "King of Snipers"
    },
    overrides: {}
  },
  {
    // Alvida est GRASSE au debut (Romance Dawn) ; elle devient mince apres la Sube Sube no Mi
    id: "alvida_grosse",
    baseName: "Alvida",
    displayName: {
      fr: "Alvida",
      en: "Alvida"
    },
    aliases: [ "ALVIDA GROSSE", "FAT ALVIDA", "ALVIDA GRASSE", "ALVIDA D ORIGINE" ],
    image: "img/alt/Alvida_grosse.webp",
    stories: [ "eastblue" ],
    onlyAsVariant: false,
    rarity: 2,
    isShiny: false,
    overrides: {}
  },
  {
    // Helmeppo pre-ellipse : encore le fils de Morgan, look "flamboyant" de
    // Romance Dawn. Jusqu'à Skypiea : à Water 7 il est entraîné par Garp (ch. 432).
    id: "helmeppo_pre",
    baseName: "Helmeppo",
    displayName: {
      fr: "Helmeppo",
      en: "Helmeppo"
    },
    aliases: [ "HELMEPPO PRE ELLIPSE", "PRE ELLIPSE HELMEPPO", "HELMEPPO ENFANT", "YOUNG HELMEPPO", "MORGAN FILS" ],
    image: "img/alt/Helmeppo_pre.webp",
    stories: [ "eastblue", "alabasta", "skypiea" ],
    forceInPool: true,
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Chopper n'a pas encore le bandeau bleu de l'erebre post-ellipse
    id: "chopper_pre",
    baseName: "Tony Tony Chopper",
    displayName: {
      fr: "Tony Tony Chopper",
      en: "Tony Tony Chopper"
    },
    aliases: [ "CHOPPER PRE ELLIPSE", "PRE ELLIPSE CHOPPER", "CHOPPER AVANT ELLIPSE", "CHOPPER PETIT" ],
    image: "img/alt/Chopper_pre.webp",
    // Chopper entre dans l'histoire à Alabasta (Royaume de Drum) : pas de
    // forceInPool, son arc le place déjà dans le pool dès alabasta.
    stories: [ "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 2,
    isShiny: false,
    overrides: {}
  },
  {
    // Franky n'est pas encore "Super" (pas les epaules de cyborg)
    id: "franky_pre",
    baseName: "Franky",
    displayName: {
      fr: "Franky",
      en: "Franky"
    },
    aliases: [ "FRANKY PRE ELLIPSE", "PRE ELLIPSE FRANKY", "FRANKY AVANT ELLIPSE", "FRANKY SANS SUPER" ],
    image: "img/alt/Franky_pre.webp",
    // Franky n'apparaît qu'à Water 7 (son arc) : avant, il n'existe pas.
    // Pas de forceInPool — il entre dans le pool naturellement à water7.
    stories: [ "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    id: "chopper_shiny",
    baseName: "Tony Tony Chopper",
    displayName: {
      fr: "Chopper ✦ Shiny",
      en: "Chopper ✦ Shiny"
    },
    aliases: [ "CHOPPER SHINY", "SHINY CHOPPER" ],
    image: "img/shiny/Chopper_shiny.webp",
    // s'empile sur chopper_pre (forme forcée) quand celui-ci est actif
    stories: [ "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sanji enfant (Germa) : coexiste avec la forme normale à Whole Cake
    id: "sanji_young",
    baseName: "Vinsmoke Sanji",
    displayName: {
      fr: "Vinsmoke Sanji",
      en: "Vinsmoke Sanji"
    },
    aliases: [ "SANJI ENFANT", "YOUNG SANJI", "SANJI KID", "SANJI CHILD" ],
    image: "img/alt/SanjiYoung.webp",
    stories: [ "wholecake" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Robin "I want to live" (Enies Lobby) : carte de quête, pas un alt de Robin.
    // Affichée dans « Moments cultes ».
    id: "robin_live",
    baseName: "Nico Robin",
    displayName: {
      fr: "Je veux vivre !",
      en: "I Want to Live!"
    },
    aliases: [ "ROBIN I WANT TO LIVE", "ROBIN ENIES LOBBY", "ROBIN CRY", "ROBIN VIVRE" ],
    image: "img/alt/RobinLive.webp",
    stories: [ "water7" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    // « Je veux vivre ! » (Enies Lobby) : 5 victoires d'affilée à Water 7 en Difficile/Extrême
    unlock: { streakW7he: 5 },
    collectionOnly: true,
    questName: {
      fr: "Je veux vivre !",
      en: "I want to live !"
    },
    overrides: {
      titre: { fr: "Je veux vivre !", en: "I Want to Live!" }
    }
  },
  {
    // Barbe Blanche à son apogée : coexiste à Wano (flashback Oden)
    id: "whitebeard_prime",
    baseName: "Edward Newgate",
    displayName: {
      fr: "Edward Newgate",
      en: "Edward Newgate"
    },
    aliases: [ "WHITEBEARD PRIME", "YOUNG WHITEBEARD", "PRIMEBEARD", "NEWGATE PRIME" ],
    image: "img/alt/WhitebeardPrime.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: false,
    overrides: {}
  },
  {
    // Zoro pré-ellipse (sans cicatrice) : remplace jusqu'à Marineford inclus
    id: "zoro_pre",
    baseName: "Roronoa Zoro",
    displayName: {
      fr: "Roronoa Zoro",
      en: "Roronoa Zoro"
    },
    aliases: [ "ZORO PRE ELLIPSE", "PRE ELLIPSE ZORO", "ZORO AVANT ELLIPSE" ],
    image: "img/alt/ZoroPre.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Sanji pré-ellipse : remplace jusqu'à Marineford inclus
    id: "sanji_pre",
    baseName: "Vinsmoke Sanji",
    displayName: {
      fr: "Vinsmoke Sanji",
      en: "Vinsmoke Sanji"
    },
    aliases: [ "SANJI PRE ELLIPSE", "PRE ELLIPSE SANJI", "SANJI AVANT ELLIPSE" ],
    image: "img/alt/SanjiPre.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Nami pré-ellipse (cheveux courts) : remplace jusqu'à Marineford inclus
    id: "nami_pre",
    baseName: "Nami",
    displayName: {
      fr: "Nami",
      en: "Nami"
    },
    aliases: [ "NAMI PRE ELLIPSE", "PRE ELLIPSE NAMI", "NAMI CHEVEUX COURTS" ],
    image: "img/alt/NamiPre.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Cracker dans son armure biscuit (son vrai corps est la carte normale)
    id: "cracker_armor",
    baseName: "Charlotte Cracker",
    displayName: {
      fr: "Charlotte Cracker",
      en: "Charlotte Cracker"
    },
    aliases: [ "CRACKER ARMOR", "CRACKER BISCUIT", "CRACKER SOLDIER", "CRACKER ARMURE" ],
    image: "img/alt/CrackerArmor.webp",
    stories: [ "wholecake" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Katakuri visage découvert : coexiste à Whole Cake
    id: "katakuri_unmasked",
    baseName: "Charlotte Katakuri",
    displayName: {
      fr: "Charlotte Katakuri",
      en: "Charlotte Katakuri"
    },
    aliases: [ "KATAKURI UNMASKED", "KATAKURI MOUTH", "KATAKURI FACE", "KATAKURI DEMASQUE" ],
    image: "img/alt/KatakuriUnmasked.webp",
    stories: [ "wholecake" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: false,
    // Alt normal tirable (quête « Bouche cousue » retirée de la liste officielle)
    overrides: {}
  },
  {
    // Rayleigh jeune (époque Roger) : coexiste à Wano (flashback Oden)
    id: "rayleigh_young",
    baseName: "Silvers Rayleigh",
    displayName: {
      fr: "Silvers Rayleigh",
      en: "Silvers Rayleigh"
    },
    aliases: [ "YOUNG RAYLEIGH", "RAYLEIGH YOUNG", "RAYLEIGH JEUNE" ],
    image: "img/alt/RayleighYoung.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Pudding troisième œil révélé : coexiste à Whole Cake
    id: "pudding_eye",
    baseName: "Charlotte Pudding",
    displayName: {
      fr: "Charlotte Pudding",
      en: "Charlotte Pudding"
    },
    aliases: [ "PUDDING EYE", "PUDDING THREE EYES", "PUDDING TROISIEME OEIL" ],
    image: "img/alt/PuddingEye.webp",
    stories: [ "wholecake" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Enel stupéfait (face à Luffy) : coexiste à Skypiea
    id: "enel_shocked",
    baseName: "Enel",
    displayName: {
      fr: "Enel",
      en: "Enel"
    },
    aliases: [ "ENEL SHOCKED", "ENEL SURPRISED", "ENEL STUPEFAIT" ],
    image: "img/alt/EnelShocked.webp",
    stories: [ "skypiea" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Sulong Carrot : transformation, coexiste à Whole Cake et Wano
    id: "carrot_sulong",
    baseName: "Carrot",
    displayName: {
      fr: "Carrot",
      en: "Carrot"
    },
    aliases: [ "CARROT SULONG", "SULONG CARROT" ],
    image: "img/alt/CarrotSulong.webp",
    stories: [ "wholecake", "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sulong de Pekoms : la transformation sous la lune, visible à Whole Cake
    id: "pekoms_sulong",
    baseName: "Pekoms",
    displayName: {
      fr: "Pekoms",
      en: "Pekoms"
    },
    aliases: [ "PEKOMS SULONG", "SULONG PEKOMS", "PEKOMS ZULONG", "ZULONG PEKOMS" ],
    image: "img/shiny/PekomsZulong.png",
    stories: [ "wholecake" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sulong Wanda : transformation, coexiste à Wano
    id: "wanda_sulong",
    baseName: "Wanda",
    displayName: {
      fr: "Wanda",
      en: "Wanda"
    },
    aliases: [ "WANDA SULONG", "SULONG WANDA" ],
    image: "img/alt/WandaSulong.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sulong Inuarashi : transformation, coexiste à Wano
    id: "inu_sulong",
    baseName: "Inuarashi",
    displayName: {
      fr: "Inuarashi",
      en: "Inuarashi"
    },
    aliases: [ "INUARASHI SULONG", "SULONG INUARASHI", "CHIEN SULONG" ],
    image: "img/alt/InuSulong.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sulong Nekomamushi : transformation, coexiste à Wano
    id: "neko_sulong",
    baseName: "Nekomamushi",
    displayName: {
      fr: "Nekomamushi",
      en: "Nekomamushi"
    },
    aliases: [ "NEKOMAMUSHI SULONG", "SULONG NEKOMAMUSHI", "CHAT SULONG" ],
    image: "img/alt/NekoSulong.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Marco phénix intégral : coexiste à Marineford et Wano
    id: "marco_phoenix",
    baseName: "Marco",
    displayName: {
      fr: "Marco",
      en: "Marco"
    },
    aliases: [ "MARCO PHOENIX", "PHOENIX MARCO", "MARCO PHENIX" ],
    image: "img/alt/MarcoPhoenix.webp",
    stories: [ "marineford", "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    // Alt normal tirable (quête « Renaissance » retirée de la liste officielle)
    overrides: {}
  },
  {
    // Kaku hybride girafe : coexiste à Water 7
    id: "kaku_giraffe",
    baseName: "Kaku",
    displayName: {
      fr: "Kaku",
      en: "Kaku"
    },
    aliases: [ "KAKU GIRAFFE", "KAKU HYBRID", "KAKU GIRAFE" ],
    image: "img/alt/KakuGiraffe.webp",
    stories: [ "water7" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Bonney forme Nika (Distorted Future) : coexiste à Actuel
    id: "bonney_nika",
    baseName: "Jewelry Bonney",
    displayName: {
      fr: "Jewelry Bonney",
      en: "Jewelry Bonney"
    },
    aliases: [ "BONNEY NIKA", "NIKA BONNEY", "BONNEY DISTORTED FUTURE" ],
    image: "img/alt/BonneyNika.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Kaido hybride : coexiste à Wano
    id: "kaido_hybrid",
    baseName: "Kaido",
    displayName: {
      fr: "Kaido",
      en: "Kaido"
    },
    aliases: [ "KAIDO HYBRID", "HYBRID KAIDO", "KAIDO HYBRIDE" ],
    image: "img/alt/KaidoHybrid.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    // Mi-dragon : l'équipage aux Cents Bêtes au complet dans l'album
    unlock: { collectionComplete: "beasts" },
    collectionOnly: true,
    questName: {
      fr: "En 1 contre 1, parie toujours sur Kaido",
      en: "1 on 1 Always bet on Kaido"
    },
    overrides: {}
  },
  {
    // Saturn forme démoniaque : coexiste à Actuel
    id: "saturn_demon",
    baseName: "Saint Jaygarcia Saturn",
    displayName: {
      fr: "Saint Jaygarcia Saturn",
      en: "Saint Jaygarcia Saturn"
    },
    aliases: [ "SATURN DEMON", "SATURN DEMON FORME" ],
    image: "img/alt/SaturnDemon.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    // Mars forme démoniaque : coexiste à Actuel
    id: "mars_demon",
    baseName: "Saint Marcus Mars",
    displayName: {
      fr: "Saint Marcus Mars",
      en: "Saint Marcus Mars"
    },
    aliases: [ "MARS DEMON", "MARS DEMON FORME" ],
    image: "img/alt/MarsDemon.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    // Warcury forme démoniaque : coexiste à Actuel
    id: "warcury_demon",
    baseName: "Saint Topman Warcury",
    displayName: {
      fr: "Saint Topman Warcury",
      en: "Saint Topman Warcury"
    },
    aliases: [ "WARCURY DEMON", "WARCURY DEMON FORME" ],
    image: "img/alt/WarcuryDemon.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    // Peter forme démoniaque : coexiste à Actuel
    id: "peter_demon",
    baseName: "Saint Shepherd Ju Peter",
    displayName: {
      fr: "Saint Shepherd Ju Peter",
      en: "Saint Shepherd Ju Peter"
    },
    aliases: [ "PETER DEMON", "PETER DEMON FORME" ],
    image: "img/alt/PeterDemon.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    // Nusjuro forme démoniaque : coexiste à Actuel
    id: "nusjuro_demon",
    baseName: "Saint Ethanbaron V. Nusjuro",
    displayName: {
      fr: "Saint Ethanbaron V. Nusjuro",
      en: "Saint Ethanbaron V. Nusjuro"
    },
    aliases: [ "NUSJURO DEMON", "NUSJURO DEMON FORME" ],
    image: "img/alt/NusjuroDemon.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    // Bonney enfant (récapitulatif Egghead) : coexiste, révélée seulement en infos actuelles
    id: "bonney_young",
    baseName: "Jewelry Bonney",
    displayName: {
      fr: "Jewelry Bonney",
      en: "Jewelry Bonney"
    },
    aliases: [ "BONNEY ENFANT", "YOUNG BONNEY", "BONNEY KID", "BONNEY CHILD", "BONNEY JEUNE" ],
    image: "img/alt/Bonney_young.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Teach shiny (anneaux du Démon) : version rare, infos actuelles
    id: "blackbeard_shiny",
    baseName: "Marshall D. Teach",
    displayName: {
      fr: "Marshall D. Teach",
      en: "Marshall D. Teach"
    },
    aliases: [ "TEACH SHINY", "SHINY TEACH", "BLACKBEARD SHINY", "BARBE NOIRE SHINY" ],
    image: "img/shiny/BlackbeardShiny.webp",
    stories: [ "all" ],
    onlyAsVariant: false,
    rarity: 6,
    isShiny: true,
    overrides: {}
  },
  {
    // Zoro enfant (village de Shimotsuki) : coexiste à East Blue
    id: "zoro_young",
    baseName: "Roronoa Zoro",
    displayName: {
      fr: "Roronoa Zoro",
      en: "Roronoa Zoro"
    },
    aliases: [ "ZORO ENFANT", "YOUNG ZORO", "ZORO KID", "ZORO CHILD" ],
    image: "img/alt/ZoroYoung.webp",
    stories: [ "eastblue" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Robin enfant (Ohara, révélée à Enies Lobby) : coexiste à Water 7
    id: "robin_young",
    baseName: "Nico Robin",
    displayName: {
      fr: "Nico Robin",
      en: "Nico Robin"
    },
    aliases: [ "ROBIN ENFANT", "YOUNG ROBIN", "ROBIN KID", "ROBIN CHILD", "ROBIN OHARA" ],
    image: "img/alt/RobinYoung.webp",
    stories: [ "water7" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Momonosuke adulte (fin de Wano) : coexiste à Wano
    id: "momonosuke_adult",
    baseName: "Kozuki Momonosuke",
    displayName: {
      fr: "Kozuki Momonosuke",
      en: "Kozuki Momonosuke"
    },
    aliases: [ "MOMONOSUKE ADULT", "ADULT MOMONOSUKE", "MOMONOSUKE GRAND", "SHOGUN MOMONOSUKE" ],
    image: "img/alt/MomoAdult.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: false,
    overrides: {}
  },
  {
    // Momonosuke dragon rose (forme adulte) : coexiste à Wano
    id: "momonosuke_dragon",
    baseName: "Kozuki Momonosuke",
    displayName: {
      fr: "Kozuki Momonosuke",
      en: "Kozuki Momonosuke"
    },
    aliases: [ "MOMONOSUKE DRAGON", "DRAGON MOMONOSUKE", "PINK DRAGON", "DRAGON ROSE" ],
    image: "img/alt/MomoDragon.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Sulong Bepo : transformation, coexiste à Wano
    id: "bepo_sulong",
    baseName: "Bepo",
    displayName: {
      fr: "Bepo",
      en: "Bepo"
    },
    aliases: [ "BEPO SULONG", "SULONG BEPO", "BEPO SULU" ],
    image: "img/alt/BepoSulong.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Nami enfant (Cocoyashi) : coexiste à East Blue
    id: "nami_young",
    baseName: "Nami",
    displayName: {
      fr: "Nami",
      en: "Nami"
    },
    aliases: [ "NAMI ENFANT", "YOUNG NAMI", "NAMI KID", "NAMI CHILD" ],
    image: "img/alt/NamiYoung.webp",
    stories: [ "eastblue" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Brook vivant (époque Rumbar) : coexiste à Thriller Bark (flashback Laboon)
    id: "brook_young",
    baseName: "Brook",
    displayName: {
      fr: "Brook",
      en: "Brook"
    },
    aliases: [ "BROOK JEUNE", "YOUNG BROOK", "BROOK VIVANT", "BROOK RUMBAR" ],
    image: "img/alt/BrookYoung.webp",
    stories: [ "thriller" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Garp à son apogée (ère Roger) : coexiste à Wano (flashback God Valley)
    id: "garp_prime",
    baseName: "Monkey D. Garp",
    displayName: {
      fr: "Monkey D. Garp",
      en: "Monkey D. Garp"
    },
    aliases: [ "GARP PRIME", "PRIME GARP", "YOUNG GARP", "GARP JEUNE" ],
    image: "img/alt/GarpPrime.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: false,
    overrides: {}
  },
  {
    // Killer visage découvert (masque retiré à Wano) : coexiste à Wano
    id: "killer_unmasked",
    baseName: "Killer",
    displayName: {
      fr: "Killer",
      en: "Killer"
    },
    aliases: [ "KILLER DEMASQUE", "UNMASKED KILLER", "KILLER VISAGE" ],
    image: "img/alt/KillerUnmasked.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Brook pré-ellipse (Thriller Bark → Guerre au Sommet, violon, pas de lunettes)
    // : coexiste à Thriller Bark et Marineford (avec la forme actuelle et Rumbar)
    id: "brook_pre",
    baseName: "Brook",
    displayName: {
      fr: "Brook",
      en: "Brook"
    },
    aliases: [ "BROOK PRE ELLIPSE", "PRE TIMESKIP BROOK", "BROOK AVANT", "BROOK THRILLER BARK" ],
    image: "img/alt/BrookPre.webp",
    stories: [ "thriller", "marineford" ],
    onlyAsVariant: false,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Nojiko ancien design (cheveux courts, Arlong Park → Guerre au Sommet) :
    // remplace le nouveau design (ch. 629 / ép. 1149, saga Hommes-Poissons) avant Fishman
    id: "nojiko_old",
    baseName: "Nojiko",
    displayName: {
      fr: "Nojiko",
      en: "Nojiko"
    },
    aliases: [ "NOJIKO PRE ELLIPSE", "OLD NOJIKO", "NOJIKO ARLONG PARK", "ANCIENNE NOJIKO" ],
    image: "img/alt/NojikoOld.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    excludesBase: true,
    onlyAsVariant: false,
    rarity: 2,
    isShiny: false,
    overrides: {}
  },
  {
    // Gaban jeune (ère Roger, God Valley) : la base montre désormais le vieux Gaban (Elbaf),
    // l'image jeune d'origine est réutilisée ici — coexiste à Wano (flashback God Valley)
    id: "gaban_young",
    baseName: "Scopper Gaban",
    displayName: {
      fr: "Scopper Gaban",
      en: "Scopper Gaban"
    },
    aliases: [ "YOUNG GABAN", "GABAN JEUNE", "GABAN GOD VALLEY", "GABAN PRIME" ],
    image: "img/alt/GabanYoung.webp",
    stories: [ "wano" ],
    // Flashback God Valley raconté à Wano (Oden) : fait entrer Gaban (arc Elbaf) dans le pool
    forceInPool: true,
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {}
  },
  {
    // Équipage de Kaido en forme Zoan complète (Onigashima) : shinies R5 comme Sulong
    id: "king_zoan",
    baseName: "King",
    displayName: { fr: "King", en: "King" },
    aliases: [ "KING ZOAN", "KING PTERANODON", "ROI PTERANODON" ],
    image: "img/alt/KingZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "queen_zoan",
    baseName: "Queen",
    displayName: { fr: "Queen", en: "Queen" },
    aliases: [ "QUEEN ZOAN", "QUEEN BRACHIOSAURUS", "QUEEN BRACHIOSAURE" ],
    image: "img/alt/QueenZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "jack_zoan",
    baseName: "Jack",
    displayName: { fr: "Jack", en: "Jack" },
    aliases: [ "JACK ZOAN", "JACK MAMMOTH", "JACK MAMMOUTH" ],
    image: "img/alt/JackZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    id: "drake_zoan",
    baseName: "X Drake",
    displayName: { fr: "X Drake", en: "X Drake" },
    aliases: [ "DRAKE ZOAN", "DRAKE ALLOSAURUS", "DRAKE ALLOSAURE" ],
    image: "img/alt/DrakeZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    id: "pageone_zoan",
    baseName: "Page One",
    displayName: { fr: "Page One", en: "Page One" },
    aliases: [ "PAGE ONE ZOAN", "PAGE ONE SPINOSAURUS", "PAGE ONE SPINOSAURE" ],
    image: "img/alt/PageOneZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    id: "whoswho_zoan",
    baseName: "Who's-Who",
    displayName: { fr: "Who's-Who", en: "Who's-Who" },
    aliases: [ "WHOSWHO ZOAN", "WHOSWHO SABERTOOTH", "WHOSWHO TIGRE" ],
    image: "img/alt/WhosWhoZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Luffy pré-ellipse (Sabaody, visage plus jeune) : remplace jusqu'à Marineford inclus
    id: "luffy_pre",
    baseName: "Monkey D. Luffy",
    displayName: {
      fr: "Monkey D. Luffy",
      en: "Monkey D. Luffy"
    },
    aliases: [ "LUFFY PRE ELLIPSE", "PRE TIMESKIP LUFFY", "LUFFY AVANT ELLIPSE" ],
    image: "img/alt/LuffyPre.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Usopp pré-ellipse (sans muscles, short de Skypiea) : remplace jusqu'à Marineford inclus
    id: "usopp_pre",
    baseName: "Usopp",
    displayName: {
      fr: "Usopp",
      en: "Usopp"
    },
    aliases: [ "USOPP PRE ELLIPSE", "PRE TIMESKIP USOPP", "USOPP AVANT ELLIPSE" ],
    image: "img/alt/UsoppPre.webp",
    stories: [ "eastblue", "alabasta", "skypiea", "water7", "thriller", "marineford" ],
    onlyAsVariant: true,
    rarity: 3,
    isShiny: false,
    overrides: {}
  },
  {
    // Shanks AVEC son bras (Romance Dawn, sacrifice pour Luffy) : remplace à East Blue,
    // débloqué par 10 victoires en East Blue en Extrême (« Parié sur la nouvelle ère »)
    id: "shanks_arm",
    baseName: "Shanks",
    displayName: {
      fr: "Parié sur la nouvelle ère",
      en: "Bet on a New Era"
    },
    aliases: [ "SHANKS BRAS", "SHANKS ARM", "SHANKS DEUX BRAS", "SHANKS ROMANCE DAWN" ],
    image: "img/alt/Shanks_arm.webp",
    stories: [ "eastblue" ],
    excludesBase: true,
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    unlock: { collectionComplete: "eastblue" },
    collectionOnly: true,
    questName: {
      fr: "Parié sur la nouvelle ère",
      en: "Bet on a New Era"
    },
    overrides: {}
  },
  {
    // La Marche vers Arlong Park (ch. 95) : récompense de la quête des 10 tirés d'East Blue
    // Instinct de Nami (lorsqu'elle veut protéger ses amis), pas un alt de Nami.
    id: "nami_walk",
    baseName: "Nami",
    collectionOnly: true,
    displayName: {
      fr: "Marche vers Arlong Park",
      en: "Walk to Arlong Park"
    },
    aliases: [ "MARCHE ARLONG PARK", "WALK TO ARLONG PARK", "MARCHE VERS ARLONG PARK" ],
    image: "img/alt/NamiWalk.webp",
    minStory: "eastblue",
    rarity: 3,
    isShiny: false,
    unlock: { drawn: [ "luffy_pre", "nami_pre", "nami_young", "nojiko_old", "Belle-mère", "Genzo", "zoro_pre", "sanji_pre", "usopp_pre", "Arlong" ] },
    questName: {
      fr: "Marche vers Arlong Park",
      en: "Walk to Arlong Park"
    },
    overrides: {
      titre: { fr: "Marche vers Arlong Park", en: "Walk to Arlong Park" }
    }
  },
  {
    // Ulti en forme Zoan (Wano) : comme les autres Tobiroppo (king_zoan, etc.),
    // la transformation est classée shiny (rare) plutôt qu'alt.
    id: "ulti_zoan",
    baseName: "Ulti",
    displayName: {
      fr: "Ulti",
      en: "Ulti"
    },
    aliases: [ "ULTI ZOAN", "ULTI PTÉRANODON", "ULTI PTERANODON", "ULTI FORME ZOAN" ],
    image: "img/alt/UltiZoan.webp",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Black Maria en forme Zoan (Wano) : idem famille Tobiroppo.
    // NOTE : le fichier source s'appelle « BlackMariaZoan .png » (espace avant
    // l'extension + PNG au lieu de webp) — référencé tel quel pour ne pas casser
    // l'image de l'utilisateur. Voir remontée à l'utilisateur.
    id: "blackmaria_zoan",
    baseName: "Black Maria",
    displayName: {
      fr: "Black Maria",
      en: "Black Maria"
    },
    aliases: [ "BLACK MARIA ZOAN", "MARIA ZOAN", "BLACK MARIA FORME ZOAN", "BLACK MARIA ARAIGNÉE" ],
    image: "img/alt/BlackMariaZoan .png",
    stories: [ "wano" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    // Kyros transformé en Soldat de Jouet (Dressrosa) : transformation
    // corporelle, classée shiny comme les autres formes (kaku_giraffe, etc.).
    id: "kyros_toy",
    baseName: "Kyros",
    displayName: {
      fr: "Kyros",
      en: "Kyros"
    },
    aliases: [ "KYROS TOY", "SOLDAT DE JOUET", "TOY SOLDIER KYROS", "KYROS JOUET" ],
    image: "img/alt/KyrosToy.webp",
    stories: [ "dressrosa" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: true,
    overrides: {}
  },
  {
    id: "zoro_nothing",
    collectionOnly: true,
    baseName: "Roronoa Zoro",
    displayName: { fr: "Rien ne s'est passé !", en: "Nothing Happened" },
    aliases: ["RIEN NE S EST PASSE","NOTHING HAPPENED","ZORO KUMA","RIEN NE S EST PASSE ZORO"],
    image: "img/alt/ZoroNothingHappened.jpg",
    minStory: "thriller",
    rarity: 5,
    isShiny: false,
    unlock: { hasCharacters: ["Gol D. Roger","Portgas D. Ace","Edward Newgate","Kuina","Belle-mère","Tom","Fisher Tiger","Pedro","Kozuki Oden","Thatch","Mont Blanc Noland","Ryuma","Oars","Nefertari Cobra","Absalom","Vergo","Monet","Pica","Saint Jaygarcia Saturn","Donquixote Rosinante","Dr. Vegapunk","Otohime","Dr. Hiriluk","Izo","Shutenmaru","Joy Boy","Rocks D. Xebec"] },
    questName: { fr: "Rien ne s'est passé !", en: "Nothing Happened" },
    overrides: {}
  },
  {
    id: "whitebeard_reveal",
    collectionOnly: true,
    baseName: "Edward Newgate",
    displayName: { fr: "One Piece existe !", en: "The One Piece is Real" },
    aliases: ["ONE PIECE EXISTE","ONE PIECE IS REAL","L ONE PIECE EXISTE","LE DERNIER MOT DE BARBE BLANCHE"],
    image: "img/alt/BarbeBlancheOnepieceisReal.webp",
    minStory: "marineford",
    rarity: 5,
    isShiny: false,
    unlock: { wins: 100 },
    questName: { fr: "One Piece existe !", en: "The One Piece is Real" },
    overrides: {}
  },
  {
    // Vivi sous couverture : Miss Wednesday, l'espionne de Baroque Works
    // démasquée à Whiskey Peak, juste avant l'arc Alabasta.
    id: "vivi_miss_wednesday",
    baseName: "Nefertari Vivi",
    displayName: {
      fr: "Nefertari Vivi",
      en: "Nefertari Vivi"
    },
    aliases: [ "MISS WEDNESDAY", "VIVI MISS WEDNESDAY", "WEDNESDAY", "VIVI ESPIONNE" ],
    image: "img/alt/MissWednesay.webp",
    stories: [ "alabasta" ],
    onlyAsVariant: false,
    rarity: 4,
    isShiny: false,
    overrides: {
      titre: { fr: "Miss Wednesday", en: "Miss Wednesday" },
      affiliation: { fr: "Baroque Works", en: "Baroque Works" }
    }
  },
  {
    id: "bye_vivi",
    collectionOnly: true,
    baseName: "Nefertari Vivi",
    displayName: { fr: "Au revoir Vivi", en: "Bye Vivi" },
    aliases: ["BYE VIVI","A BIENTOT VIVI","ADIEU VIVI","LA CROIX D ALABASTA"],
    image: "img/alt/ByeVivi.png",
    minStory: "alabasta",
    rarity: 4,
    isShiny: false,
    unlock: { collectionComplete: "baroque" },
    questName: { fr: "Au revoir Vivi", en: "Bye Vivi" },
    overrides: {}
  },
  {
    id: "luffy_sabo",
    collectionOnly: true,
    baseName: "Sabo",
    displayName: { fr: "Les frères à nouveau réunis", en: "Brothers Once Again" },
    aliases: ["COLISEE","CORRIDA COLOSSEUM","LUFFY MEETS SABO","TOUT LE COLISEE"],
    image: "img/alt/LuffyMeetsSabo.webp",
    minStory: "dressrosa",
    rarity: 4,
    isShiny: false,
    unlock: { hasCharacters: ["Monkey D. Luffy","Sabo","Franky","Cavendish","Don Chinjao","Jesus Burgess","Rebecca","Diamante","Bellamy","Kyros","Bartolomeo","Hajrudin","Sai","Ideo","Orlumbus","Elizabello II","Gladius","Baby 5"] },
    questName: { fr: "Les frères à nouveau réunis", en: "Brothers Once Again" },
    overrides: {}
  },
  {
    id: "sengoku_shiny",
    baseName: "Sengoku",
    displayName: { fr: "Sengoku ✦ Shiny", en: "Sengoku ✦ Shiny" },
    aliases: ["SENGOKU SHINY","SHINY SENGOKU","LE BOUDDHA SHINY","SENGOKU BOUDDHA"],
    image: "img/alt/SengokuBuddha.jpeg",
    minStory: "marineford",
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
  {
    id: "yamato_shiny",
    baseName: "Yamato",
    displayName: { fr: "Yamato ✦ Shiny", en: "Yamato ✦ Shiny" },
    aliases: ["YAMATO SHINY","SHINY YAMATO","YAMATO ZOAN","YAMATO FORME ZOAN"],
    image: "img/alt/YamatoZoan.jpg",
    minStory: "wano",
    rarity: 5,
    isShiny: true,
    overrides: {}
  },
];
