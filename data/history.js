/**
 * data/history.js
 * Évolution temporelle (prime, fruit, haki, age, titre, affiliation…).
 * null = inconnu pour le lecteur. Valider: node validate-history.js
 */
const CHARACTER_HISTORY = {
  "Monkey D. Luffy": {
    eastblue: {
      height: 172,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 30000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      height: 172,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 100000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      height: 172,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 100000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      height: 172,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 300000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 172,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 300000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 172,
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 400000000,
      age: 17,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Roi",
        en: "Conqueror's"
      }
    },
    fishman: {
      height: 174,
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 400000000,
      age: 19,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    dressrosa: {
      height: 174,
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 500000000,
      age: 19,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wholecake: {
      height: 174,
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 1500000000,
      age: 19,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      height: 174,
      titre: {
        fr: "Capitaine, Supernova, Empereur",
        en: "Captain, Supernova, Emperor"
      },
      prime: 3000000000,
      age: 19,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      height: 174,
      prime: 3000000000,
      age: 19,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Roronoa Zoro": {
    eastblue: {
      height: 178,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 0,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      height: 178,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 60000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      height: 178,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 60000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      height: 178,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 120000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 178,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 120000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 178,
      titre: {
        fr: "Supernova",
        en: "Supernova"
      },
      prime: 120000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 181,
      titre: {
        fr: "Supernova",
        en: "Supernova"
      },
      prime: 120000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      height: 181,
      titre: {
        fr: "Supernova",
        en: "Supernova"
      },
      prime: 320000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      height: 181,
      titre: {
        fr: "Supernova",
        en: "Supernova"
      },
      prime: 320000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      height: 181,
      titre: {
        fr: "Supernova, Equipage d'empereur",
        en: "Supernova, Emperor's Crew"
      },
      prime: 1111000000,
      age: 21,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      height: 181,
      prime: 1111000000,
      age: 21,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Nami": {
    eastblue: {
      height: 169,
      prime: 0,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      height: 169,
      prime: 0,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      height: 169,
      prime: 0,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      height: 169,
      prime: 16000000,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 169,
      prime: 16000000,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 169,
      prime: 16000000,
      age: 18,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 170,
      prime: 16000000,
      age: 20,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      height: 170,
      prime: 66000000,
      age: 20,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      height: 170,
      prime: 66000000,
      age: 20,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      height: 170,
      prime: 366000000,
      age: 20,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      height: 170,
      prime: 366000000,
      age: 20,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Usopp": {
    eastblue: {
      height: 174,
      prime: 0,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      height: 174,
      prime: 0,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      height: 174,
      prime: 0,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      height: 174,
      prime: 30000000,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 174,
      prime: 30000000,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 174,
      prime: 30000000,
      age: 17,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 176,
      prime: 30000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      height: 176,
      prime: 200000000,
      age: 19,
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      height: 176,
      prime: 200000000,
      age: 19,
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      height: 176,
      prime: 500000000,
      age: 19,
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    all: {
      height: 176,
      prime: 500000000,
      age: 19,
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    }
  },
  "Vinsmoke Sanji": {
    eastblue: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 0,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 0,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 0,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 77000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 77000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 77000000,
      age: 19,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 180,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 77000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      height: 180,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 177000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      height: 180,
      titre: {
        fr: "Aucun, Famille Royale",
        en: "None, Royal Family"
      },
      prime: 330000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      height: 180,
      titre: {
        fr: "Equipage d'empereur, Famille Royale",
        en: "Emperor's Crew, Royal Family"
      },
      prime: 1032000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      height: 180,
      prime: 1032000000,
      age: 21,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Tony Tony Chopper": {
    // Chopper entre dans l'histoire à Alabasta (Royaume de Drum) : pas avant.
    alabasta: {
      prime: 0,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: 0,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: 50,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: 50,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 50,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: 50,
      age: 17,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: 100,
      age: 17,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      prime: 100,
      age: 17,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: 1000,
      age: 17,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 1000,
      age: 17,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Nico Robin": {
    eastblue: {
      prime: 0,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 79000000,
      age: 28,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 79000000,
      age: 28,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 80000000,
      age: 28,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 80000000,
      age: 28,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 80000000,
      age: 28,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 80000000,
      age: 30,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 130000000,
      age: 30,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 130000000,
      age: 30,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      prime: 930000000,
      age: 30,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 930000000,
      age: 30,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Franky": {
    // Franky entre dans l'histoire à Water 7 : pas d'historique avant.
    water7: {
      height: 225,
      prime: 44000000,
      age: 34,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 225,
      prime: 44000000,
      age: 34,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 225,
      prime: 44000000,
      age: 34,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 240,
      prime: 44000000,
      age: 36,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      height: 240,
      prime: 94000000,
      age: 36,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      height: 240,
      prime: 94000000,
      age: 36,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      height: 240,
      prime: 394000000,
      age: 36,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      height: 240,
      prime: 394000000,
      age: 36,
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Brook": {
    eastblue: {
      prime: 0,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: 0,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: 0,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: 0,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      height: 266,
      prime: null,
      age: 88,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      height: 266,
      prime: 33000000,
      age: 88,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      height: 277,
      prime: 33000000,
      age: 90,
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      height: 277,
      prime: 83000000,
      age: 90,
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      height: 277,
      prime: 83000000,
      age: 90,
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      height: 277,
      prime: 383000000,
      age: 90,
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      height: 277,
      prime: 383000000,
      age: 90,
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Jinbe": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 250000000,
      age: 44,
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      prime: 438000000,
      age: 46,
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      prime: 438000000,
      age: 46,
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      prime: 438000000,
      age: 46,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 1100000000,
      age: 46,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire, Equipage d'empereur",
        en: "Captain, Warlord, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 1100000000,
      age: 46,
      affiliation: {
        fr: "Chapeau de paille",
        en: "Straw Hat Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire, Equipage d'empereur",
        en: "Captain, Warlord, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Portgas D. Ace": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Capitaine, Commandant",
        en: "Captain, Commander"
      },
      prime: null,
      age: 20,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      titre: {
        fr: "Capitaine, Commandant",
        en: "Captain, Commander"
      },
      prime: null,
      age: 20,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      titre: {
        fr: "Capitaine, Commandant, Equipage d'empereur",
        en: "Captain, Commander, Emperor's Crew"
      },
      prime: null,
      age: 20,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      titre: {
        fr: "Capitaine, Commandant, Equipage d'empereur",
        en: "Captain, Commander, Emperor's Crew"
      },
      prime: null,
      age: 20,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Capitaine, Commandant, Equipage d'empereur",
        en: "Captain, Commander, Emperor's Crew"
      },
      prime: 550000000,
      age: 20,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    fishman: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      prime: 550000000
    },
    dressrosa: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      prime: 550000000
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      prime: 550000000
    },
    wano: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      prime: 550000000
    },
    all: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      prime: 550000000
    }
  },
  "Sabo": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: null,
      age: 22,
      height: 187,
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: null,
      age: 22,
      height: 187,
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: null,
      age: 22,
      height: 187,
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
      titre: {
        fr: "Commandant, Révolutionnaire",
        en: "Commander, Revolutionary"
      }
    },
    wholecake: {
      prime: null,
      age: 22,
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
      titre: {
        fr: "Commandant, Révolutionnaire",
        en: "Commander, Revolutionary"
      }
    },
    wano: {
      prime: 602000000,
      age: 22,
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
      titre: {
        fr: "Commandant, Révolutionnaire",
        en: "Commander, Revolutionary"
      }
    },
    all: {
      prime: 602000000,
      age: 22,
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
      }
    }
  },
  "Trafalgar D. Water Law": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 200000000,
      age: 24,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 440000000,
      age: 26,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine, Corsaire, Supernova",
        en: "Captain, Warlord, Supernova"
      },
      prime: 500000000,
      age: 26,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Corsaire, Supernova",
        en: "Captain, Warlord, Supernova"
      },
      prime: 500000000,
      age: 26,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      titre: {
        fr: "Capitaine, Corsaire, Supernova",
        en: "Captain, Warlord, Supernova"
      },
      prime: 3000000000,
      age: 26,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 3000000000,
      age: 26,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Eustass Kid": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      prime: 315000000,
      age: 21,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: 470000000,
      age: 23,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      prime: 470000000,
      age: 23,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      prime: 470000000,
      age: 23,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      prime: 3000000000,
      age: 23,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 3000000000,
      age: 23,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Crocodile": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: 81000000,
      age: 44,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    skypiea: {
      prime: 81000000,
      age: 44,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    water7: {
      prime: 81000000,
      age: 44,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    thriller: {
      prime: 81000000,
      age: 44,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    marineford: {
      prime: 81000000,
      age: 44,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    fishman: {
      prime: 81000000,
      age: 46,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    dressrosa: {
      prime: 81000000,
      age: 46,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    wholecake: {
      prime: 81000000,
      age: 46,
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Corsaire, Agent",
        en: "Captain, Warlord, Agent"
      }
    },
    wano: {
      prime: 1965000000,
      age: 46,
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
      titre: {
        fr: "Capitaine, Corsaire, Agent, Equipage d'empereur",
        en: "Captain, Warlord, Agent, Emperor's Crew"
      }
    },
    all: {
      prime: 1965000000,
      age: 46,
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
      }
    }
  },
  "Dracule Mihawk": {
    eastblue: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 41,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 43,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 43,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      affiliation: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 43,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      prime: 3590000000,
      age: 43,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      }
    },
    all: {
      prime: 3590000000,
      age: 43,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      }
    }
  },
  "Donquixote Doflamingo": {
    eastblue: {
      prime: null
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      titre: {
        fr: "Capitaine, Corsaire, Famille Royale",
        en: "Captain, Warlord, Royal Family"
      },
      prime: 340000000,
      age: 39,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: 340000000,
      age: 39,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: 340000000,
      age: 39,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: 340000000,
      age: 39,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      prime: 340000000,
      age: 41,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      prime: 340000000,
      age: 41,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wholecake: {
      prime: 340000000,
      age: 41,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      prime: 340000000,
      age: 41,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 340000000,
      age: 41,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Boa Hancock": {
    eastblue: {
      prime: null
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Corsaire, Famille Royale",
        en: "Captain, Warlord, Royal Family"
      },
      prime: 80000000,
      age: 29,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    fishman: {
      prime: 80000000,
      age: 31,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    dressrosa: {
      prime: 80000000,
      age: 31,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wholecake: {
      prime: 80000000,
      age: 31,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wano: {
      prime: 1659000000,
      age: 31,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    all: {
      prime: 1659000000,
      age: 31,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    }
  },
  "Buggy": {
    eastblue: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 15000000,
      age: 37,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: 15000000,
      age: 39,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: 15000000,
      age: 39,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      prime: 15000000,
      age: 39,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: 3189000000,
      age: 39,
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 3189000000,
      age: 39,
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Marshall D. Teach": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: null,
      age: 38,
      height: 344,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: null,
      age: 38,
      height: 344,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: null,
      age: 38,
      height: 344,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      prime: null,
      age: 38,
      height: 344,
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
      }
    },
    fishman: {
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      prime: null,
      age: 40,
      height: 344,
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
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      prime: null,
      age: 40,
      height: 344,
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
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      prime: null,
      age: 40,
      height: 344,
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
      }
    },
    wano: {
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      prime: 3996000000,
      age: 40,
      height: 344,
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
      }
    },
    all: {
      titre: {
        fr: "Capitaine, Corsaire, Empereur",
        en: "Captain, Warlord, Emperor"
      },
      prime: 3996000000,
      age: 40,
      height: 344,
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
      }
    }
  },
  "Shanks": {
    eastblue: {
      prime: null,
      age: 27,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null,
      age: 37,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    skypiea: {
      prime: null,
      age: 37,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    water7: {
      prime: null,
      age: 37,
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    thriller: {
      prime: null,
      age: 37,
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    marineford: {
      prime: null,
      age: 37,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    fishman: {
      prime: null,
      age: 39,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    dressrosa: {
      prime: null,
      age: 39,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    wholecake: {
      prime: null,
      age: 39,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    wano: {
      prime: 4048900000,
      age: 39,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    all: {
      prime: 4048900000,
      age: 39,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Edward Newgate": {
    eastblue: {
      age: 70,
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      age: 70,
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 70,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 70,
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 70,
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    fishman: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    wano: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: 5046000000,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    all: {
      prime: 5046000000,
      age: 72,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    }
  },
  "Kaido": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: null,
      age: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    wholecake: {
      prime: null,
      age: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    wano: {
      prime: 4611100000,
      age: 59,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      }
    },
    all: {
      prime: 4611100000,
      age: 59,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Big Mom": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: null,
      age: 68,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      titre: {
        fr: "Capitaine, Empereur",
        en: "Captain, Emperor"
      },
      prime: 4388000000,
      age: 68,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 4388000000,
      age: 68,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Charlotte Katakuri": {
    wholecake: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: 1057000000,
      age: 48,
      height: 509,
      fruit: {
        fr: "Paramecia",
        en: "Special Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      prime: 1057000000,
      age: 48,
      height: 509,
      fruit: {
        fr: "Paramecia",
        en: "Special Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 1057000000,
      age: 48,
      height: 509,
      fruit: {
        fr: "Paramecia",
        en: "Special Paramecia"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Marco": {
    skypiea: {
      prime: null,
      age: null,
      height: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: null,
      age: null,
      height: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: null,
      age: null,
      height: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: null,
      age: 43,
      height: 203,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      age: 45,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      prime: null,
      age: 45,
      height: 203,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: null,
      age: 45,
      height: 203,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 1374000000,
      age: 45,
      height: 203,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Gecko Moria": {
    eastblue: {
      prime: null
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      titre: {
        fr: "Capitaine, Corsaire",
        en: "Captain, Warlord"
      },
      prime: 320000000,
      age: 48,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    marineford: {
      prime: 320000000,
      age: 48,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    fishman: {
      prime: 320000000,
      age: 50,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    dressrosa: {
      prime: 320000000,
      age: 50,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    wholecake: {
      prime: 320000000,
      age: 50,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    wano: {
      prime: 320000000,
      age: 50,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    all: {
      prime: 320000000,
      age: 50,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    }
  },
  "Smoker": {
    eastblue: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: 0,
      age: 34,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      prime: 0,
      age: 36,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      prime: 0,
      age: 36,
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      prime: 0,
      age: 36,
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 500000000,
      age: 36,
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 500000000,
      age: 36,
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Yamato": {
    wano: {
      prime: 0,
      age: 28,
      height: 263,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      },
      titre: {
        fr: "Allié",
        en: "Ally"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 0,
      age: 28,
      height: 263,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      },
      titre: {
        fr: "Allié",
        en: "Ally"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "King": {
    wano: {
      prime: 1390000000,
      age: 47,
      height: 613,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 1390000000,
      age: 47,
      height: 613,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Queen": {
    wano: {
      prime: 1320000000,
      age: 56,
      height: 612,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Scientifique, Equipage d'empereur",
        en: "Commander, Scientist, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 1320000000,
      age: 56,
      height: 612,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Scientifique, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Jack": {
    dressrosa: {
      prime: 1000000000,
      age: null,
      height: null,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wano: {
      prime: 1000000000,
      age: 28,
      height: 830,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 1000000000,
      age: 28,
      height: 830,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Gol D. Roger": {
    eastblue: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      prime: null,
      age: 53,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      prime: 5564800000,
      age: 53,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 5564800000,
      age: 53,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Silvers Rayleigh": {
    marineford: {
      prime: null,
      age: 76,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: null,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: null,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      prime: null,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: null,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Arlong": {
    eastblue: {
      prime: 20000000,
      age: 39,
      height: 263,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 41,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 20000000,
      age: 41,
      height: 263,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Enel": {
    skypiea: {
      prime: 0,
      age: 37,
      height: 266,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    water7: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    thriller: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    fishman: {
      age: 39,
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    dressrosa: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    all: {
      prime: 0,
      age: 39,
      height: 266,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Rob Lucci": {
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Borsalino": {
    marineford: {
      prime: 0,
      age: 56,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    fishman: {
      prime: 0,
      age: 58,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    dressrosa: {
      prime: 0,
      age: 58,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    wholecake: {
      prime: 0,
      age: 58,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    wano: {
      prime: 3000000000,
      age: 58,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    all: {
      prime: 3000000000,
      age: 58,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    }
  },
  "Sakazuki": {
    // Water 7 (flashback Enies Lobby) : on le voit sans rien savoir de lui -> inconnu
    water7: {
      prime: null,
      age: null,
      titre: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: 0,
      age: 53,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: 0,
      age: 53,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      age: 55,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    dressrosa: {
      prime: 0,
      age: 55,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    wano: {
      prime: 5000000000,
      age: 55,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 5000000000,
      age: 55,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Kuzan": {
    eastblue: {
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    alabasta: {
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    skypiea: {
      prime: 0,
      age: 47,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    water7: {
      prime: 0,
      age: 47,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    thriller: {
      prime: 0,
      age: 47,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    marineford: {
      prime: 0,
      age: 47,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    fishman: {
      prime: 0,
      age: 49,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Amiral",
        en: "Admiral"
      }
    },
    dressrosa: {
      prime: null,
      age: 49,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Marine, Amiral, Equipage d'empereur",
        en: "Marine, Admiral, Emperor's Crew"
      }
    },
    wholecake: {
      prime: null,
      age: 49,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Marine, Amiral, Equipage d'empereur",
        en: "Marine, Admiral, Emperor's Crew"
      }
    },
    wano: {
      prime: null,
      age: 49,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Marine, Amiral, Equipage d'empereur",
        en: "Marine, Admiral, Emperor's Crew"
      }
    },
    all: {
      prime: null,
      age: 49,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Issho": {
    dressrosa: {
      prime: 0,
      age: 54,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 3000000000,
      age: 54,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 3000000000,
      age: 54,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Aramaki": {
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 3000000000,
      age: 41,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 3000000000,
      age: 41,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Monkey D. Garp": {
    eastblue: {
      prime: 0,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      }
    },
    alabasta: {
      prime: 0,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      prime: 0,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: 0,
      age: 76,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    thriller: {
      prime: 0,
      age: 76,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    marineford: {
      prime: 0,
      age: 76,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    fishman: {
      prime: 0,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    dressrosa: {
      prime: 0,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    wholecake: {
      prime: 0,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    wano: {
      prime: 3000000000,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    all: {
      prime: 3000000000,
      age: 78,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    }
  },
  "Sengoku": {
    skypiea: {
      prime: 0,
      age: 77,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: 0,
      age: 77,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    fishman: {
      age: 79,
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    dressrosa: {
      prime: 0,
      age: 79,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 0,
      age: 79,
      titre: {
        fr: "Amiral",
        en: "Admiral"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Bartholomew Kuma": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    skypiea: {
      prime: null,
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    water7: {
      prime: null,
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    thriller: {
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      prime: null,
      age: 45,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    marineford: {
      titre: {
        fr: "Corsaire",
        en: "Warlord"
      },
      prime: 296000000,
      age: 45,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    fishman: {
      titre: {
        fr: "Corsaire, Révolutionnaire, Famille Royale",
        en: "Warlord, Revolutionary, Royal Family"
      },
      prime: 296000000,
      age: 47,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    dressrosa: {
      titre: {
        fr: "Corsaire, Révolutionnaire, Famille Royale",
        en: "Warlord, Revolutionary, Royal Family"
      },
      prime: 296000000,
      age: 47,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    wholecake: {
      titre: {
        fr: "Corsaire, Révolutionnaire, Famille Royale",
        en: "Warlord, Revolutionary, Royal Family"
      },
      prime: 296000000,
      age: 47,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    wano: {
      titre: {
        fr: "Corsaire, Révolutionnaire, Famille Royale",
        en: "Warlord, Revolutionary, Royal Family"
      },
      prime: 296000000,
      age: 47,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    all: {
      prime: 296000000,
      age: 47,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Corsaire, Révolutionnaire, Famille Royale",
        en: "Warlord, Revolutionary, Royal Family"
      }
    }
  },
  "Jewelry Bonney": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 140000000
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 140000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 140000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 140000000
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 140000000
    },
    all: {
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      prime: 320000000
    }
  },
  "Basil Hawkins": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 249000000
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 320000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 320000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 320000000
    },
    wano: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 320000000
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 320000000
    }
  },
  "Scratchmen Apoo": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 198000000
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 350000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 350000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 350000000
    },
    wano: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 350000000
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 350000000
    }
  },
  "X Drake": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 222000000
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 222000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 222000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 222000000
    },
    wano: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 222000000
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 222000000
    }
  },
  "Killer": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      age: 25,
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 162000000,
      titre: {
        fr: "Supernova",
        en: "Supernova"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 200000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 200000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 200000000
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 200000000
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 200000000
    }
  },
  "Capone Bege": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      prime: 138000000
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 300000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 300000000
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 300000000
    },
    wano: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 350000000
    },
    all: {
      titre: {
        fr: "Capitaine, Supernova, Equipage d'empereur",
        en: "Captain, Supernova, Emperor's Crew"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 350000000
    }
  },
  "Urouge": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    alabasta: {
      prime: null
    },
    skypiea: {
      prime: null
    },
    water7: {
      prime: null
    },
    thriller: {
      prime: null
    },
    marineford: {
      age: 45,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000,
      titre: {
        fr: "Capitaine, Supernova",
        en: "Captain, Supernova"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000
    },
    all: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 108000000
    }
  },
  "Charlotte Perospero": {
    wholecake: {
      prime: 700000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    wano: {
      prime: 700000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    all: {
      prime: 700000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    }
  },
  "Charlotte Cracker": {
    wholecake: {
      prime: 860000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    wano: {
      prime: 860000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    all: {
      prime: 860000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    }
  },
  "Charlotte Smoothie": {
    wholecake: {
      prime: 932000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    wano: {
      prime: 932000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    all: {
      prime: 932000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    }
  },
  "Edward Weevil": {
    dressrosa: {
      prime: 480000000,
      age: 35,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      prime: 480000000,
      age: 35,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      prime: 480000000,
      age: 35,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 480000000,
      age: 35,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Alvida": {
    eastblue: {
      prime: 5000000,
      age: 25,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates d'Alvida",
        en: "Alvida Pirates"
      }
    },
    alabasta: {
      prime: 5000000,
      age: 25,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Buggy's Delivery",
        en: "Buggy's Delivery"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 27,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: 5000000,
      age: 27,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 5000000,
      age: 27,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Capitaine, Equipage d'empereur",
        en: "Captain, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Axe Man Morgan": {
    eastblue: {
      prime: 0,
      age: 42,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    fishman: {
      age: 44
    }
  },
  "Gin": {
    eastblue: {
      prime: 12000000,
      age: 25,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armada de Krieg",
        en: "Krieg Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 27
    }
  },
  "Don Krieg": {
    eastblue: {
      prime: 17000000,
      age: 42,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 44,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 17000000,
      age: 44,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Kuro": {
    eastblue: {
      prime: 16000000,
      age: 33,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 35,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 16000000,
      age: 35,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Dorry": {
    eastblue: {
      prime: null
    },
    alabasta: {
      prime: 100000000,
      age: 158,
      height: 2260,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    fishman: {
      age: 160,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    all: {
      prime: 1800000000,
      age: 160,
      height: 2260,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Broggy": {
    eastblue: {
      prime: null
    },
    alabasta: {
      prime: 100000000,
      age: 158,
      height: 2130,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    fishman: {
      age: 160,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 100000000
    },
    all: {
      prime: 1800000000,
      age: 160,
      height: 2130,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Fisher Tiger": {
    fishman: {
      prime: 230000000,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      }
    },
    dressrosa: {
      prime: 230000000,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      }
    },
    wholecake: {
      prime: 230000000,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      }
    },
    wano: {
      prime: 230000000,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      }
    },
    all: {
      prime: 230000000,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates du Soleil",
        en: "Sun Pirates"
      }
    }
  },
  "Kozuki Oden": {
    wano: {
      prime: null,
      age: 39,
      height: 382,
      titre: {
        fr: "Samouraï, Equipage d'empereur",
        en: "Samurai, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: null,
      age: 39,
      height: 382,
      titre: {
        fr: "Samouraï, Equipage d'empereur",
        en: "Samurai, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Coby": {
    eastblue: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: 0,
      age: 16,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      prime: 0,
      age: 18,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      prime: 0,
      age: 18,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      prime: 0,
      age: 18,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 500000000,
      age: 18,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 500000000,
      age: 18,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Caesar Clown": {
    dressrosa: {
      prime: 300000000,
      age: 55,
      height: 309,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 300000000,
      age: 55,
      height: 309,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Caribou": {
    marineford: {
      prime: 210000000,
      age: 32,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 210000000,
      age: 32,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Bartolomeo": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: 200000000,
      age: 24,
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    all: {
      prime: 200000000,
      age: 24,
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Cavendish": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      prime: 330000000,
      age: 26,
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    all: {
      prime: 330000000,
      age: 26,
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Don Chinjao": {
    dressrosa: {
      prime: 542000000,
      age: 78,
      height: 520,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    },
    all: {
      prime: 542000000,
      age: 78,
      height: 520,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Pedro": {
    dressrosa: {
      prime: null,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 382000000,
      age: 32,
      height: 233,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 382000000,
      age: 32,
      height: 233,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    }
  },
  "Morgans": {
    wholecake: {
      prime: 0,
      age: 53,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "World Economy News Paper",
        en: "World Economy News Paper"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Karasu": {
    marineford: {
      prime: 400000000,
      age: 45,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    fishman: {
      age: 47
    }
  },
  "Hack": {
    fishman: {
      prime: null,
      age: 38,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Révolutionnaire",
        en: "Revolutionary"
      }
    }
  },
  "Inazuma": {
    marineford: {
      prime: 100000000,
      age: 27,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Impel Down",
        en: "Impel Down"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant, Révolutionnaire",
        en: "Commander, Revolutionary"
      }
    },
    fishman: {
      age: 29
    }
  },
  "Belo Betty": {
    wholecake: {
      prime: 457000000,
      age: 34,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    }
  },
  "Morley": {
    wholecake: {
      prime: 293000000,
      age: 160,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    }
  },
  "Lindbergh": {
    wholecake: {
      prime: 316000000,
      age: 37,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    }
  },
  "Ginny": {
    all: {
      prime: 190000000,
      age: 39,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    }
  },
  "Pekoms": {
    fishman: {
      prime: 330000000,
      age: 27,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: { fr: "Inconnu", en: "Unknown" }
    },
    dressrosa: {
      prime: 330000000,
      age: 27,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: { fr: "Inconnu", en: "Unknown" }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      prime: 330000000,
      age: 27,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 330000000,
      age: 27,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Jesus Burgess": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 20000000,
      age: null,
      height: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 20000000,
      age: null,
      height: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 20000000,
      age: null,
      height: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: 20000000,
      age: 27,
      height: 355,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    fishman: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: 20000000,
      age: 29,
      height: 355,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    dressrosa: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: 20000000,
      age: 29,
      height: 355,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      prime: 20000000,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: 20000000,
      age: 29,
      height: 355,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 20000000,
      age: 29,
      height: 355,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Bentham (Mr. 2)": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 32000000,
      age: 30,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 32,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 32000000,
      age: 32,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Daz Bonez (Mr. 1)": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 75000000,
      age: 29,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 31,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 75000000,
      age: 31,
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Galdino (Mr. 3)": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 24000000,
      age: 35,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 37,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 24000000,
      age: 37,
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      },
      titre: {
        fr: "Agent, Equipage d'empereur",
        en: "Agent, Emperor's Crew"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Magellan": {
    marineford: {
      prime: 0,
      age: 45,
      height: 491,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 47,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      age: 47,
      height: 491,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Shiryu": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: null,
      age: 42,
      height: 340,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    fishman: {
      prime: null,
      age: 44,
      height: 340,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    dressrosa: {
      prime: null,
      age: 44,
      height: 340,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wano: {
      prime: null,
      age: 44,
      height: 340,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    all: {
      prime: null,
      age: 44,
      height: 340,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    }
  },
  "Monkey D. Dragon": {
    eastblue: {
      age: 53,
      titre: {
        fr: "Révolutionnaire",
        en: "Revolutionary"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    fishman: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    dressrosa: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    wholecake: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    wano: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    },
    all: {
      prime: null,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      }
    }
  },
  "Imu": {
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      age: null,
      height: null,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Observation, Roi",
        en: "Observation, Conqueror's"
      }
    }
  },
  "Otohime": {
    fishman: {
      prime: 0,
      age: 36,
      height: 224,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    dressrosa: {
      prime: 0,
      age: 36,
      height: 224,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      prime: 0,
      age: 36,
      height: 224,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    all: {
      prime: 0,
      age: 36,
      height: 224,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Shirahoshi": {
    fishman: {
      prime: 0,
      age: 16,
      height: 1187,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    dressrosa: {
      prime: 0,
      age: 16,
      height: 1187,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    all: {
      prime: 0,
      age: 16,
      height: 1187,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Neptune": {
    fishman: {
      prime: 0,
      age: 70,
      height: 1220,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      age: 70,
      height: 1220,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Hody Jones": {
    fishman: {
      prime: null,
      age: 30,
      height: 331,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: null,
      age: 30,
      height: 331,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Vander Decken IX": {
    fishman: {
      prime: null,
      age: 35,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      age: 35,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Perona": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: null,
      age: 23,
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: null,
      age: 23,
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 25,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    all: {
      prime: null,
      age: 25,
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Nefertari Vivi": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      prime: 0,
      age: 16,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Alabasta Kingdom"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 18,
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      age: 18,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Alabasta Kingdom"
      },
      titre: {
        fr: "Famille Royale, Agent",
        en: "Royal Family, Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Tashigi": {
    eastblue: {
      prime: 0,
      age: 21,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Marine",
        en: "Marine"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Marine",
        en: "Marine"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Marine",
        en: "Marine"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Marine",
        en: "Marine"
      }
    },
    marineford: {
      prime: 0,
      age: 21,
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 23,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    dressrosa: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    wano: {
      prime: 100000000,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    all: {
      prime: 100000000,
      age: 23,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Emporio Ivankov": {
    eastblue: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      prime: 100000000,
      age: 51,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      prime: 100000000,
      age: 53,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      prime: 100000000,
      age: 53,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      prime: 100000000,
      age: 53,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      prime: 100000000,
      age: 53,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 100000000,
      age: 53,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      affiliation: {
        fr: "Armée Révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Commandant",
        en: "Commander"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Dr. Vegapunk": {
    dressrosa: {
      prime: 0,
      age: 65,
      titre: {
        fr: "Scientifique",
        en: "Scientist"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: 0,
      age: 65,
      titre: {
        fr: "Scientifique",
        en: "Scientist"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      age: 65,
      titre: {
        fr: "Scientifique",
        en: "Scientist"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Kozuki Momonosuke": {
    dressrosa: {
      height: 110,
      prime: 0,
      age: 8,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Pays des Wa",
        en: "Wano Country"
      }
    },
    wholecake: {
      height: 110,
      prime: 0,
      age: 8,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Pays des Wa",
        en: "Wano Country"
      }
    },
    wano: {
      prime: 0,
      age: 28,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Pays des Wa",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      age: 28,
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Pays des Wa",
        en: "Wano Country"
      }
    }
  },
  "Kin'emon": {
    dressrosa: {
      prime: 0,
      age: 36,
      titre: {
        fr: "Samouraï",
        en: "Samurai"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 0,
      age: 36,
      titre: {
        fr: "Samouraï",
        en: "Samurai"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    }
  },
  "Inuarashi": {
    dressrosa: {
      prime: 0,
      age: 40,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 0,
      age: 40,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    }
  },
  "Nekomamushi": {
    dressrosa: {
      prime: 0,
      age: 40,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    all: {
      prime: 0,
      age: 40,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    }
  },
  "Carrot": {
    dressrosa: {
      prime: 0,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      age: 15,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    }
  },
  "Benn Beckman": {
    eastblue: {
      prime: null,
      age: null,
      height: null,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      prime: null,
      age: 48,
      height: 206,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    fishman: {
      prime: null,
      age: 50,
      height: 206,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    dressrosa: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wano: {
      prime: null,
      age: 50,
      height: 206,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    all: {
      prime: null,
      age: 50,
      height: 206,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    }
  },
  "Lucky Roux": {
    eastblue: {
      prime: null,
      age: null,
      height: null,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    fishman: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    dressrosa: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wano: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    all: {
      prime: null,
      age: 35,
      height: 241,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    }
  },
  "Yasopp": {
    eastblue: {
      prime: null,
      age: null,
      height: null,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    fishman: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    dressrosa: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    all: {
      prime: null,
      age: 47,
      height: 183,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Zeff": {
    eastblue: {
      prime: null,
      age: 65,
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 67,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: null,
      age: 67,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    }
  },
  "Hachi": {
    eastblue: {
      prime: 8000000,
      age: 36,
      affiliation: {
        fr: "Pirates d'Arlong",
        en: "Arlong Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      prime: 8000000,
      age: 38,
      affiliation: {
        fr: "Takoyaki 8",
        en: "Takoyaki 8"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 8000000,
      age: 38,
      affiliation: {
        fr: "Takoyaki 8",
        en: "Takoyaki 8"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Kaku": {
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Trebol": {
    dressrosa: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 49,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 49,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wano: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 49,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    all: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 49,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Saint Figarland Garling": {
    all: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Saint Marcus Mars": {
    all: {
      haki: {
        fr: "Observation, Roi",
        en: "Observation, Conqueror's"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Saint Topman Warcury": {
    all: {
      haki: {
        fr: "Observation, Roi",
        en: "Observation, Conqueror's"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Saint Ethanbaron V. Nusjuro": {
    all: {
      haki: {
        fr: "Armement, Roi",
        en: "Armament, Conqueror's"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Saint Shepherd Ju Peter": {
    all: {
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Loki": {
    all: {
      prime: 2600000000,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Observation, Roi",
        en: "Observation, Conqueror's"
      },
      age: 63,
      affiliation: {
        fr: "Elbaf",
        en: "Elbaf"
      }
    }
  },
  "Shamrock": {
    all: {
      prime: 0,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 0,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Spandam": {
    water7: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 41,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 41,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Iceburg": {
    water7: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 40,
      affiliation: {
        fr: "Water 7",
        en: "Water 7"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 40,
      affiliation: {
        fr: "Water 7",
        en: "Water 7"
      }
    }
  },
  "Tom": {
    water7: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 67,
      height: 296,
      affiliation: {
        fr: "Tom's Workers",
        en: "Tom's Workers"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 67,
      height: 296,
      affiliation: {
        fr: "Tom's Workers",
        en: "Tom's Workers"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Vinsmoke Reiju": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 24,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 24,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    }
  },
  "Vinsmoke Ichiji": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    }
  },
  "Vinsmoke Niji": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    }
  },
  "Vinsmoke Yonji": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 21,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    }
  },
  "Vinsmoke Judge": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 56,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 56,
      affiliation: {
        fr: "Germa 66",
        en: "Germa 66"
      }
    }
  },
  "Donquixote Rosinante": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 26,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 26,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    }
  },
  "Stussy": {
    wholecake: {
      prime: 0,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 36,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    },
    wano: {
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 36,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Saint Jaygarcia Saturn": {
    all: {
      haki: {
        fr: "Observation, Roi",
        en: "Observation, Conqueror's"
      },
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Shiki": {
    wano: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 73,
      affiliation: {
        fr: "Pirates de Shiki",
        en: "Golden Lion Pirates"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 73,
      affiliation: {
        fr: "Pirates de Shiki",
        en: "Golden Lion Pirates"
      }
    }
  },
  "Charlotte Pudding": {
    wholecake: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 16,
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 16,
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    }
  },
  "Lola": {
    thriller: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 24000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Pirates de Big Mom (anciennement)",
        en: "Big Mom Pirates (former)"
      }
    }
  },
  "Helmeppo": {
    eastblue: {
      titre: { fr: "Marine", en: "Marine" },
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 20,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    alabasta: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    fishman: {
      age: 22,
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    dressrosa: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wholecake: {
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wano: {
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      prime: 100000000
    },
    all: {
      titre: {
        fr: "Marine",
        en: "Marine"
      },
      prime: 100000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      age: 22,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    }
  },
  "Foxy": {
    skypiea: {
      prime: 24000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 36,
      affiliation: {
        fr: "Pirates de Foxy",
        en: "Foxy Pirates"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 38,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 24000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 38,
      affiliation: {
        fr: "Pirates de Foxy",
        en: "Foxy Pirates"
      }
    }
  },
  "Nefertari Cobra": {
    alabasta: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 50,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 50,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      }
    }
  },
  "Rebecca": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      age: 16,
      affiliation: {
        fr: "Dressrosa",
        en: "Dressrosa"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      age: 16,
      affiliation: {
        fr: "Dressrosa",
        en: "Dressrosa"
      }
    }
  },
  "Kyros": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 44,
      affiliation: {
        fr: "Dressrosa",
        en: "Dressrosa"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 44,
      affiliation: {
        fr: "Dressrosa",
        en: "Dressrosa"
      }
    }
  },
  "Diamante": {
    dressrosa: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 99000000
    },
    all: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Senor Pink": {
    dressrosa: {
      prime: 58000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 46,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 58000000
    },
    all: {
      prime: 58000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 46,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Leo": {
    eastblue: {
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 25,
      affiliation: {
        fr: "Tontatta",
        en: "Tontatta"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 25,
      affiliation: {
        fr: "Tontatta",
        en: "Tontatta"
      }
    }
  },
  "Baby 5": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 24,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 24,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Dellinger": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 16,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    all: {
      prime: 15000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 16,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Pica": {
    dressrosa: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 40,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 99000000
    },
    all: {
      prime: 99000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 40,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Monet": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 30,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    all: {
      prime: null,
      fruit: {
        fr: "Logia",
        en: "Logia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 30,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Vergo": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 41,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: null
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 41,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Scopper Gaban": {
    all: {
      haki: {
        fr: "Observation, Armement, Roi",
        en: "Observation, Armament, Conqueror's"
      }
    }
  },
  "Bepo": {
    marineford: {
      prime: 500,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 22,
      affiliation: {
        fr: "Pirates du Heart",
        en: "Heart Pirates"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 500
    },
    all: {
      prime: 1500,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 22,
      affiliation: {
        fr: "Pirates du Heart",
        en: "Heart Pirates"
      }
    }
  },
  "Kanjuro": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 54,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 54,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Raizo": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 35,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      }
    },
    wano: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 35,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Zunesha": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 1000,
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 1000,
      affiliation: {
        fr: "Zou/Tribus Minks",
        en: "Zou/Mink Tribes"
      }
    }
  },
  "Joy Boy": {
    wano: {
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      }
    },
    all: {
      haki: {
        fr: "Famille Royale",
        en: "Conqueror's"
      }
    }
  },
  "Lao G": {
    dressrosa: {
      prime: 61000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 70,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: 61000000
    },
    all: {
      prime: 61000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 70,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Sugar": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 10,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 10,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      }
    }
  },
  "Emet": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 900,
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Kaya": {
    eastblue: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 19,
      affiliation: {
        fr: "Syrup",
        en: "Syrup Village"
      }
    },
    alabasta: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 19,
      affiliation: {
        fr: "Syrup",
        en: "Syrup Village"
      }
    }
  },
  "Jango": {
    eastblue: {
      prime: 9000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 27,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    },
    alabasta: {
      prime: 0,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 29,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 29,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      }
    }
  },
  "Mr. 5": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 10000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 10000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    }
  },
  "Miss Valentine": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 7500000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 22,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 24,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 7500000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 24,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    }
  },
  "Mr. 4": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 3200000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 28,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 30,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 3200000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 30,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    }
  },
  "Miss Merry Christmas": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      prime: 14000000,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 49,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    },
    skypiea: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 51,
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Agent",
        en: "Agent"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 14000000,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 51,
      affiliation: {
        fr: "Baroque Works",
        en: "Baroque Works"
      }
    }
  },
  "Igaram": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 50,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      },
      titre: {
        fr: "Agent",
        en: "Agent"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 50,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      }
    }
  },
  "Camie": {
    marineford: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 16,
      affiliation: {
        fr: "Île des Hommes-Poissons",
        en: "Fish-Man Island"
      }
    },
    fishman: {
      age: 18,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 18,
      affiliation: {
        fr: "Île des Hommes-Poissons",
        en: "Fish-Man Island"
      }
    }
  },
  "Pappag": {
    marineford: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 31,
      affiliation: {
        fr: "Île des Hommes-Poissons",
        en: "Fish-Man Island"
      }
    },
    fishman: {
      age: 33,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 33,
      affiliation: {
        fr: "Île des Hommes-Poissons",
        en: "Fish-Man Island"
      }
    }
  },
  "Mont Blanc Cricket": {
    skypiea: {
      prime: 25000000,
      age: 41,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      affiliation: {
        fr: "Alliance Saruyama",
        en: "Saruyama Alliance"
      },
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    fishman: {
      age: 43
    }
  },
  "Gan Fall": {
    skypiea: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 66,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 68,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 68,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    }
  },
  "Wyper": {
    skypiea: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 22,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 24,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 24,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    }
  },
  "Mont Blanc Noland": {
    skypiea: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 39,
      affiliation: {
        fr: "Royaume de Lvneel",
        en: "Lvneel Kingdom"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 39,
      affiliation: {
        fr: "Royaume de Lvneel",
        en: "Lvneel Kingdom"
      }
    }
  },
  "Conis": {
    skypiea: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 19,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 21,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 21,
      affiliation: {
        fr: "Skypiea",
        en: "Skypiea"
      }
    }
  },
  "Gloriosa": {
    marineford: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 77,
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      prime: null
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 77,
      affiliation: {
        fr: "Pirates Kuja, Pirates de Rocks",
        en: "Kuja Pirates, Rocks Pirates"
      }
    }
  },
  "Pell": {
    alabasta: {
      prime: 0,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 35,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 35,
      affiliation: {
        fr: "Royaume d'Alabasta",
        en: "Arabasta Kingdom"
      }
    }
  },
  "Paulie": {
    water7: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Galley-La Company",
        en: "Galley-La Company"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 26,
      affiliation: {
        fr: "Galley-La Company",
        en: "Galley-La Company"
      }
    }
  },
  "Jaguar D. Saul": {
    water7: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 105,
      affiliation: {
        fr: "Marine (déserteur)",
        en: "Marines (defected)"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 127,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      age: 127,
      affiliation: {
        fr: "Marine (déserteur)",
        en: "Marines (defected)"
      }
    }
  },
  "Rocks D. Xebec": {
    all: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: null,
      affiliation: {
        fr: "Pirates de Rocks",
        en: "Rocks Pirates"
      }
    },
    wano: {
      prime: null,
      age: null,
      height: 435,
      fruit: { fr: "Inconnu", en: "Unknown" },
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: { fr: "Capitaine", en: "Captain" },
      affiliation: { fr: "Pirates de Rocks", en: "Rocks Pirates" }
    }
  },
  "Lafitte": {
    skypiea: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 39,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      }
    },
    water7: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 39,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      age: 41,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 41,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      }
    },
    all: {
      prime: 42200000,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 41,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      }
    }
  },
  "Curly Dadan": {
    marineford: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 53,
      affiliation: {
        fr: "Famille Dadan (Bandits du Mont Colubo)",
        en: "Dadan Family (Mt. Colubo Bandits)"
      }
    },
    fishman: {
      age: 55,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 7800000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 55,
      affiliation: {
        fr: "Famille Dadan (Bandits du Mont Colubo)",
        en: "Dadan Family (Mt. Colubo Bandits)"
      }
    },
    water7: {
      age: 53,
      prime: 0,
      fruit: { fr: "Aucun", en: "None" },
      haki: { fr: "Aucun", en: "None" },
      titre: { fr: "Aucun", en: "None" },
      affiliation: { fr: "Famille Dadan (Bandits du Mont Colubo)", en: "Dadan Family (Mt. Colubo Bandits)" }
    }
  },
  "Douglas Bullet": {
    wano: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Armement, Roi",
        en: "Armament, Conqueror's"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Roger",
        en: "Roger Pirates"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Armement, Roi",
        en: "Armament, Conqueror's"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Roger",
        en: "Roger Pirates"
      }
    }
  },
  "Gunko": {
    all: {
      prime: 0,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 77,
      affiliation: {
        fr: "Gouvernement Mondial",
        en: "World Government"
      }
    }
  },
  "Uta": {
    wano: {
      prime: null,
      fruit: {
        fr: "Inconnu",
        en: "Unknown"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 21,
      affiliation: {
        fr: "Pirates de Shanks (anciennement)",
        en: "Red Hair Pirates (former)"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 21,
      affiliation: {
        fr: "Pirates de Shanks (anciennement)",
        en: "Red Hair Pirates (former)"
      }
    }
  },
  "Ulti": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      prime: 400000000,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 22,
      affiliation: {
        fr: "Pirates aux Cents Bêtes",
        en: "Beast Pirates"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    all: {
      prime: 400000000,
      fruit: {
        fr: "Ancien Zoan",
        en: "Ancient Zoan"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 22,
      affiliation: {
        fr: "Pirates aux Cents Bêtes",
        en: "Beast Pirates"
      }
    }
  },
  "Dalton": {
    alabasta: {
      prime: 0,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 33,
      affiliation: {
        fr: "Royaume de Sakura",
        en: "Sakura Kingdom"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 35,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Zoan",
        en: "Zoan"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 35,
      affiliation: {
        fr: "Royaume de Sakura",
        en: "Sakura Kingdom"
      }
    }
  },
  "Sentomaru": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 0,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      titre: { fr: "Marine", en: "Marine" }
    },
    fishman: {
      prime: 0,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      titre: { fr: "Marine", en: "Marine" }
    },
    dressrosa: {
      prime: 0,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      titre: { fr: "Marine", en: "Marine" }
    },
    wholecake: {
      prime: 0,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      titre: { fr: "Marine", en: "Marine" }
    },
    wano: {
      prime: 500000000,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      titre: { fr: "Marine", en: "Marine" }
    },
    all: {
      prime: 500000000,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Shaka": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "Lilith": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "Edison": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "Pythagoras": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "Atlas": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "York": {
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "SSG / Vegapunk",
        en: "SSG / Vegapunk"
      }
    }
  },
  "Otama": {
    wano: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 8,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 8,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Viola": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 29,
      affiliation: {
        fr: "Royaume de Dressrosa",
        en: "Dressrosa Kingdom"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 29,
      affiliation: {
        fr: "Royaume de Dressrosa",
        en: "Dressrosa Kingdom"
      }
    }
  },
  "Wapol": {
    alabasta: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 29,
      affiliation: {
        fr: "Royaume de Drum (anciennement) / Black Drum",
        en: "Drum Kingdom (former) / Black Drum"
      }
    },
    skypiea: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 29,
      affiliation: {
        fr: "Royaume de Drum (anciennement) / Black Drum",
        en: "Drum Kingdom (former) / Black Drum"
      }
    }
  },
  "Kalifa": {
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Blueno": {
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Jabra": {
    water7: {
      age: 35,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Kumadori": {
    water7: {
      age: 34,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Fukurou": {
    water7: {
      age: 29,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    fishman: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 0
    }
  },
  "Boa Sandersonia": {
    marineford: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    fishman: {
      prime: 40000000,
      age: 30,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    dressrosa: {
      prime: 40000000,
      age: 30,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wholecake: {
      prime: 40000000,
      age: 30,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wano: {
      prime: 40000000,
      age: 30,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    all: {
      prime: 40000000,
      age: 30,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    }
  },
  "Boa Marigold": {
    marineford: {
      prime: 40000000,
      age: 26,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    fishman: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    dressrosa: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wholecake: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    wano: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    },
    all: {
      prime: 40000000,
      age: 28,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pirates Kuja",
        en: "Kuja Pirates"
      }
    }
  },
  "Shakuyaku": {
    marineford: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 62,
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 64,
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    dressrosa: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wholecake: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    wano: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 64,
      affiliation: {
        fr: "Aucun",
        en: "None"
      }
    }
  },
  "Crocus": {
    alabasta: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      age: 71,
      affiliation: {
        fr: "Pirates de Roger",
        en: "Roger Pirates"
      }
    },
    skypiea: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    water7: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    thriller: {
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      }
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    fishman: {
      age: 73,
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    dressrosa: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    wano: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation",
        en: "Observation"
      },
      age: 73,
      affiliation: {
        fr: "Pirates de Roger",
        en: "Roger Pirates"
      }
    }
  },
  "Absalom": {
    thriller: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 34,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 36,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 36,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    }
  },
  "Dr. Hogback": {
    thriller: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 47,
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 47,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    }
  },
  "Oars": {
    thriller: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 159,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    },
    marineford: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 159,
      affiliation: {
        fr: "Pirates de Thriller Bark",
        en: "Thriller Bark Pirates"
      }
    }
  },
  "Denjiro": {
    wano: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 47,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 47,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Kawamatsu": {
    wano: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 41,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 41,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Izo": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 510000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 43,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    fishman: {
      age: 45,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    dressrosa: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      }
    },
    wano: {
      age: 45,
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 510000000,
      titre: {
        fr: "Samouraï, Equipage d'empereur",
        en: "Samurai, Emperor's Crew"
      }
    },
    all: {
      prime: 510000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 45,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      }
    }
  },
  "Shutenmaru": {
    wano: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Kikunojo": {
    wano: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 22,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      age: 22,
      affiliation: {
        fr: "Pays de Wano",
        en: "Wano Country"
      }
    }
  },
  "Riku Doldo III": {
    dressrosa: {
      prime: 0,
      age: 60,
      height: 261,
      affiliation: {
        fr: "Dressrosa",
        en: "Dressrosa"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Hajrudin": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      },
      prime: null,
      age: 81,
      height: 2200,
      affiliation: {
        fr: "Nouveaux Pirates Géants",
        en: "New Giant Warrior Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wano: {
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    }
  },
  "Richie": {
    eastblue: {
      prime: null,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      }
    }
  },
  "Mohji": {
    eastblue: {
      age: 27,
      prime: null,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      }
    }
  },
  "Cabaji": {
    eastblue: {
      age: 32,
      prime: null,
      affiliation: {
        fr: "Pirates de Buggy",
        en: "Buggy Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      affiliation: {
        fr: "Cross Guild",
        en: "Cross Guild"
      }
    }
  },
  "Dr. Kureha": {
    alabasta: {
      prime: 0,
      age: 139,
      height: 188,
      affiliation: {
        fr: "Royaume de Drum",
        en: "Drum Kingdom"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 141
    },
    all: {
      prime: 0
    }
  },
  "Nojiko": {
    eastblue: {
      prime: 0,
      age: 20,
      height: 170,
      affiliation: {
        fr: "Cocoyashi",
        en: "Cocoyashi"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 22
    },
    all: {
      age: 22,
      prime: 0
    }
  },
  "Kuina": {
    eastblue: {
      prime: 0,
      age: 11,
      height: 150,
      affiliation: {
        fr: "Aucune",
        en: "None"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Genzo": {
    eastblue: {
      prime: 0,
      age: 46,
      height: 173,
      affiliation: {
        fr: "Cocoyashi",
        en: "Cocoyashi"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 48
    },
    all: {
      prime: 0
    }
  },
  "Belle-mère": {
    eastblue: {
      prime: 0,
      age: 30,
      height: null,
      affiliation: {
        fr: "Cocoyashi",
        en: "Cocoyashi"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Charlotte Brûlée": {
    wholecake: {
      prime: null,
      age: 43,
      height: 350,
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    }
  },
  "Bellamy": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 55000000,
      age: 25,
      height: 240,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    water7: {
      prime: 55000000,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    thriller: {
      prime: 55000000,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    marineford: {
      prime: 55000000,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    fishman: {
      age: 27,
      prime: 195000000,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    dressrosa: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      prime: 195000000,
      age: 27,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wholecake: {
      titre: {
        fr: "Capitaine",
        en: "Captain"
      },
      affiliation: {
        fr: "Aucune",
        en: "None"
      },
      prime: 195000000,
      age: 27,
      haki: {
        fr: "Armement",
        en: "Armament"
      }
    },
    wano: {
      prime: 195000000,
      titre: {
        fr: "Capitaine",
        en: "Captain"
      }
    },
    all: {
      prime: 195000000
    }
  },
  "Koala": {
    dressrosa: {
      prime: null,
      age: 23,
      height: 160,
      affiliation: {
        fr: "Armée révolutionnaire",
        en: "Revolutionary Army"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      age: 11,
      height: null,
      prime: null,
      fruit: { fr: "Aucun", en: "None" },
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: { fr: "Aucun", en: "None" },
      affiliation: { fr: "Esclave", en: "Slave" }
    }
  },
  "Charlotte Oven": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    fishman: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 300000000,
      age: 48,
      height: 492,
      affiliation: {
        fr: "Pirates de Big Mom",
        en: "Big Mom Pirates"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    wano: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 300000000
    }
  },
  "Who's-Who": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      prime: 546000000,
      age: 38,
      height: 336,
      affiliation: {
        fr: "Pirates aux Cents Bêtes",
        en: "Beast Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Ancient Zoan",
        en: "Ancient Zoan"
      }
    },
    all: {
      prime: 546000000
    }
  },
  "Black Maria": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      prime: 480000000,
      age: 29,
      height: 820,
      affiliation: {
        fr: "Pirates aux Cents Bêtes",
        en: "Beast Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Ancient Zoan",
        en: "Ancient Zoan"
      }
    },
    all: {
      prime: 480000000
    }
  },
  "Page One": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      titre: {
        fr: "Equipage d'empereur",
        en: "Emperor's Crew"
      },
      prime: 290000000,
      age: 20,
      height: 171,
      affiliation: {
        fr: "Pirates aux Cents Bêtes",
        en: "Beast Pirates"
      },
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      fruit: {
        fr: "Ancient Zoan",
        en: "Ancient Zoan"
      }
    },
    all: {
      prime: 290000000
    }
  },
  "Doc Q": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: null,
      age: 26,
      height: 342,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    fishman: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      age: 28
    },
    dressrosa: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wholecake: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wano: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    all: {
      prime: 72000000
    }
  },
  "Catarina Devon": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      prime: null,
      age: 34,
      height: 361,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Mythique Zoan",
        en: "Mythical Zoan"
      }
    },
    fishman: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      age: 36
    },
    dressrosa: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wholecake: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wano: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    }
  },
  "Van Augur": {
    eastblue: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      prime: null,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      },
      prime: 64000000,
      age: 25,
      height: 340,
      affiliation: {
        fr: "Pirates de Barbe Noire",
        en: "Blackbeard Pirates"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      prime: 64000000,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      prime: 64000000,
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      prime: 64000000,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    fishman: {
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      },
      age: 27,
      prime: 64000000,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    dressrosa: {
      prime: 64000000,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wholecake: {
      prime: 64000000,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    wano: {
      prime: 64000000,
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    all: {
      prime: 64000000
    }
  },
  "Tsuru": {
    eastblue: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    alabasta: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    skypiea: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    water7: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    thriller: {
      titre: {
        fr: "Aucun",
        en: "None"
      }
    },
    marineford: {
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      prime: 0,
      age: 74,
      height: 204,
      affiliation: {
        fr: "Marine",
        en: "Marines"
      },
      haki: {
        fr: "Armement",
        en: "Armament"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    fishman: {
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      },
      age: 76
    },
    dressrosa: {
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      }
    },
    wholecake: {
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      }
    },
    wano: {
      prime: 500000000,
      titre: {
        fr: "Vice-Amiral",
        en: "Vice Admiral"
      }
    },
    all: {
      prime: 500000000
    },
    skypiea: {
      age: 74,
      prime: 0,
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: { fr: "Vice-Amiral", en: "Vice Admiral" },
      affiliation: { fr: "Marine", en: "Marines" }
    }
  },
  "Fukaboshi": {
    fishman: {
      prime: 0,
      age: 24,
      height: 604,
      affiliation: {
        fr: "Royaume Ryugu",
        en: "Ryugu Kingdom"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Ryuboshi": {
    fishman: {
      prime: 0,
      age: 23,
      height: 544,
      affiliation: {
        fr: "Royaume Ryugu",
        en: "Ryugu Kingdom"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Manboshi": {
    fishman: {
      prime: 0,
      age: 20,
      height: 473,
      affiliation: {
        fr: "Royaume Ryugu",
        en: "Ryugu Kingdom"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      fruit: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0
    }
  },
  "Gladius": {
    dressrosa: {
      prime: null,
      age: 33,
      height: 260,
      affiliation: {
        fr: "Pirates de Don Quichotte",
        en: "Donquixote Pirates"
      },
      titre: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Inconnu",
        en: "Unknown"
      },
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      }
    },
    all: {
      prime: 31000000
    }
  },
  "Kokoro": {
    water7: {
      prime: 0,
      age: 72,
      height: 168,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    }
  },
  "Gaimon": {
    eastblue: {
      prime: 0,
      age: 45,
      height: 130,
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
      }
    }
  },
  "Charlotte Mont-d'Or": {
    wholecake: {
      prime: 120000000,
      age: 38,
      height: 260,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    }
  },
  "Ryuma": {
    thriller: {
      prime: 0,
      age: 47,
      height: 179,
      titre: {
        fr: "Samouraï",
        en: "Samurai"
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
      }
    }
  },
  "Dr. Hiriluk": {
    alabasta: {
      prime: 0,
      age: 68,
      height: 213,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    }
  },
  "Kozuki Hiyori": {
    wano: {
      prime: 0,
      age: 26,
      height: 170,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
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
      }
    }
  },
  "Wanda": {
    dressrosa: {
      prime: 0,
      age: 28,
      height: 181,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    }
  },
  "Charlotte Chiffon": {
    wholecake: {
      prime: null,
      age: 26,
      height: 215,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    }
  },
  "Kurozumi Orochi": {
    wano: {
      prime: 0,
      age: 54,
      height: 350,
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
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
      }
    }
  },
  "Tamago": {
    fishman: {
      prime: null,
      age: 46,
      height: 301,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    wholecake: {
      haki: {
        fr: "Observation, Armement",
        en: "Observation, Armament"
      },
      prime: 429000000
    }
  },
  "Ohm": {
    skypiea: {
      prime: 0,
      age: 27,
      height: 189,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 29
    },
    all: {
      age: 29
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Shura": {
    skypiea: {
      prime: 0,
      age: 31,
      height: 191,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 33
    },
    all: {
      age: 33
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Satori": {
    skypiea: {
      prime: 0,
      age: 25,
      height: 179,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 27
    },
    all: {
      age: 27
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Gedatsu": {
    skypiea: {
      prime: 0,
      age: 29,
      height: 220,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 31
    },
    all: {
      age: 31
    },
    marineford: {
      haki: {
        fr: "Observation",
        en: "Observation"
      }
    }
  },
  "Karoo": {
    alabasta: {
      prime: 0,
      age: 14,
      height: 150,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 16
    },
    all: {
      age: 16
    }
  },
  "Koza": {
    alabasta: {
      prime: 0,
      age: 20,
      height: 177,
      titre: {
        fr: "Aucun",
        en: "None"
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
      }
    },
    fishman: {
      age: 22
    },
    all: {
      age: 22
    }
  },
  "Elizabello II": {
    dressrosa: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 57,
      height: 436,
      affiliation: {
        fr: "Royaume de Prodence",
        en: "Prodence Kingdom"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 0,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 57,
      height: 436,
      affiliation: {
        fr: "Royaume de Prodence",
        en: "Prodence Kingdom"
      },
      titre: {
        fr: "Famille Royale",
        en: "Royal Family"
      }
    }
  },
  "Orlumbus": {
    dressrosa: {
      prime: 148000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 42,
      height: 480,
      affiliation: {
        fr: "Pirates Yonta Maria",
        en: "Yonta Maria Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 148000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 42,
      height: 480,
      affiliation: {
        fr: "Pirates Yonta Maria",
        en: "Yonta Maria Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    }
  },
  "Sai": {
    dressrosa: {
      prime: 210000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 28,
      height: 242,
      affiliation: {
        fr: "Happo Navy",
        en: "Happo Navy"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wholecake: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    wano: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    all: {
      prime: 210000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 28,
      height: 242,
      affiliation: {
        fr: "Happo Navy",
        en: "Happo Navy"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    }
  },
  "Ideo": {
    dressrosa: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 22,
      height: 225,
      affiliation: {
        fr: "Pirates d'Ideo",
        en: "Ideo Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 22,
      height: 225,
      affiliation: {
        fr: "Pirates d'Ideo",
        en: "Ideo Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    }
  },
  "Little Oars Jr.": {
    marineford: {
      prime: 550000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 72,
      height: 6000,
      affiliation: {
        fr: "Petits Pirates",
        en: "Little Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: 550000000,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      age: 72,
      height: 6000,
      affiliation: {
        fr: "Petits Pirates",
        en: "Little Pirates"
      },
      titre: {
        fr: "Capitaine, Allié",
        en: "Captain, Ally"
      }
    }
  },
  "Thatch": {
    marineford: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    fishman: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    dressrosa: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wholecake: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    wano: {
      haki: {
        fr: "Aucun",
        en: "None"
      }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: {
        fr: "Aucun",
        en: "None"
      },
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    water7: {
      prime: null,
      fruit: { fr: "Aucun", en: "None" },
      haki: { fr: "Aucun", en: "None" },
      titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
      affiliation: { fr: "Pirates de Barbe Blanche", en: "Whitebeard Pirates" }
    }
  },
  "Vista": {
    marineford: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 47,
      height: 328,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    fishman: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    dressrosa: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    wholecake: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    wano: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Aucun",
        en: "None"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 47,
      height: 328,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    }
  },
  "Jozu": {
    marineford: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 42,
      height: 503,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    fishman: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    dressrosa: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    wholecake: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    wano: {
      haki: { fr: "Observation, Armement", en: "Observation, Armament" }
    },
    all: {
      prime: null,
      fruit: {
        fr: "Paramecia",
        en: "Paramecia"
      },
      haki: { fr: "Observation, Armement", en: "Observation, Armament" },
      age: 42,
      height: 503,
      affiliation: {
        fr: "Pirates de Barbe Blanche",
        en: "Whitebeard Pirates"
      },
      titre: {
        fr: "Commandant, Equipage d'empereur",
        en: "Commander, Emperor's Crew"
      }
    },
    skypiea: {
      age: 42,
      height: 503,
      prime: null,
      fruit: { fr: "Inconnu", en: "Unknown" },
      haki: { fr: "Inconnu", en: "Unknown" },
      titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" },
      affiliation: { fr: "Pirates de Barbe Blanche", en: "Whitebeard Pirates" }
    }
  },
  "Makino": {
    eastblue: { age: 19 },
    fishman: { age: 31 }
  },
  "Laboon": {
    eastblue: { age: 51 },
    fishman: { age: 53 }
  },
  "Sanjuan Wolf": {
    marineford: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" }, height: 18000 },
    all: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" }, height: 18000 }
  },
  "Vasco Shot": {
    marineford: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" } },
    all: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" } }
  },
  "Avalo Pizarro": {
    marineford: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" } },
    all: { prime: null, affiliation: { fr: "Pirates de Barbe Noire", en: "Blackbeard Pirates" }, titre: { fr: "Commandant, Equipage d'empereur", en: "Commander, Emperor's Crew" }, haki: { fr: "Inconnu", en: "Unknown" }, fruit: { fr: "Aucun", en: "None" } }
  }
};
