/**
 * data/collection.js
 * Pages de l'album de collection.
 */
const COLLECTION_CATEGORIES = [
  {
    id: "strawhat",
    order: 10,
    fr: "Chapeau de paille",
    en: "Straw Hat Pirates",
    members: [ "Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Vinsmoke Sanji", "Tony Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe" ]
  },
  {
    id: "ships",
    order: 13,
    fr: "Navires",
    en: "Ships",
    members: [ "Going Merry", "Thousand Sunny", "Thriller Bark", "Queen Mama Chanter" ]
  },
  {
    id: "warlords",
    order: 20,
    fr: "Corsaires",
    en: "Warlords",
    members: [ "Dracule Mihawk", "Crocodile", "Donquixote Doflamingo", "Bartholomew Kuma", "Gecko Moria", "Boa Hancock", "Jinbe", "Trafalgar D. Water Law", "Buggy", "Edward Weevil" ]
  },
  {
    id: "emperors",
    order: 30,
    fr: "Empereurs",
    en: "Emperors",
    members: [ "Shanks", "Edward Newgate", "Kaido", "Big Mom", "Marshall D. Teach", "luffy_gear5", "Buggy" ]
  },
  {
    id: "supernovas",
    order: 40,
    fr: "Supernovas",
    en: "Supernovas",
    members: [ "Monkey D. Luffy", "Roronoa Zoro", "Trafalgar D. Water Law", "Eustass Kid", "Killer", "Jewelry Bonney", "Capone Bege", "Basil Hawkins", "Scratchmen Apoo", "X Drake", "Urouge" ]
  },
  {
    id: "rocks",
    order: 55,
    fr: "Pirates de Rocks",
    en: "Rocks Pirates",
    members: [ "Rocks D. Xebec", "Edward Newgate", "Kaido", "Shiki" ]
  },
  {
    id: "crossguild",
    order: 50,
    fr: "Cross Guild",
    en: "Cross Guild",
    members: [ "Buggy", "Dracule Mihawk", "Crocodile", "Alvida", "Daz Bonez (Mr. 1)", "Galdino (Mr. 3)", "Richie", "Mohji", "Cabaji"]
  },
  {
    id: "redhair",
    order: 60,
    fr: "Pirates du Roux",
    en: "Red Hair Pirates",
    members: [ "Shanks", "Benn Beckman", "Lucky Roux", "Yasopp", "Uta" ]
  },
  {
    id: "whitebeard",
    order: 70,
    fr: "Pirates de Barbe Blanche",
    en: "Whitebeard Pirates",
    members: [ "Edward Newgate", "Portgas D. Ace", "Marco", "Kozuki Oden", "Izo", "Thatch", "Vista", "Jozu", "Little Oars Jr." ]
  },
  {
    id: "beasts",
    order: 80,
    fr: "Pirates aux Cents Bêtes",
    en: "Beast Pirates",
    members: [ "Kaido", "King", "Queen", "Jack", "Yamato", "Ulti", "Who's-Who", "Black Maria", "Page One"]
  },
  {
    id: "bigmom",
    order: 90,
    fr: "Famille Charlotte",
    en: "Charlotte Family",
    members: [ "Big Mom", "Charlotte Katakuri", "Charlotte Smoothie", "Charlotte Cracker", "Charlotte Perospero", "Charlotte Pudding", "Pekoms", "Lola", "Charlotte Brûlée", "Charlotte Oven", "Charlotte Mont-d'Or", "Charlotte Chiffon", "Tamago"]
  },
  {
    id: "blackbeard",
    order: 100,
    fr: "Pirates de Barbe Noire",
    en: "Blackbeard Pirates",
    members: [ "Marshall D. Teach", "Jesus Burgess", "Shiryu", "Lafitte", "Kuzan", "Doc Q", "Catarina Devon", "Van Augur"]
  },
  {
    id: "donquixote",
    order: 110,
    fr: "Pirates de Don Quichotte",
    en: "Donquixote Pirates",
    members: [ "Donquixote Doflamingo", "Donquixote Rosinante", "law_young", "Trebol", "Diamante", "Pica", "Senor Pink", "Vergo", "Monet", "Sugar", "Baby 5", "Dellinger", "Lao G", "Gladius", "Bellamy"]
  },
  {
    id: "marines",
    order: 120,
    fr: "Marine",
    en: "Marines",
    members: [ "Monkey D. Garp", "Sengoku", "Sakazuki", "Borsalino", "Kuzan", "Issho", "Aramaki", "Smoker", "Tashigi", "Coby", "Helmeppo", "X Drake", "Jaguar D. Saul", "Tsuru", "Sentomaru"]
  },
  {
    id: "worldgov",
    order: 130,
    fr: "Gouvernement Mondial",
    en: "World Government",
    members: [ "Imu", "Saint Figarland Garling", "Saint Marcus Mars", "Saint Topman Warcury", "Saint Ethanbaron V. Nusjuro", "Saint Shepherd Ju Peter", "Saint Jaygarcia Saturn", "Rob Lucci", "Kaku", "Spandam", "Magellan", "Stussy", "Shamrock", "Gunko" ]
  },
  {
    id: "revolutionaries",
    order: 140,
    fr: "Armée Révolutionnaire",
    en: "Revolutionary Army",
    members: [ "Monkey D. Dragon", "Sabo", "Emporio Ivankov", "Bartholomew Kuma", "Koala", "Karasu", "Belo Betty", "Morley", "Lindbergh", "Ginny", "Hack", "Inazuma"]
  },
  {
    id: "roger",
    order: 150,
    fr: "Pirates de Roger",
    en: "Roger Pirates",
    // Barbe Blanche n'a PAS fait partie de l'équipage de Roger : il était son
    // RIVAL. Sa version prime est en « Légendes & Anciens ».
    members: [ "roger_shiny", "rayleigh_young", "gaban_young", "Douglas Bullet", "shanks_young", "buggy_young", "Crocus" ]
  },
  {
    id: "germa",
    order: 160,
    fr: "Germa 66",
    en: "Germa 66",
    members: [ "Vinsmoke Judge", "Vinsmoke Reiju", "Vinsmoke Ichiji", "Vinsmoke Niji", "Vinsmoke Yonji", "sanji_germa" ]
  },
  {
    id: "baroque",
    order: 170,
    fr: "Baroque Works",
    en: "Baroque Works",
    members: [ "Crocodile", "robin_pre", "vivi_miss_wednesday", "Bentham (Mr. 2)", "Daz Bonez (Mr. 1)", "Galdino (Mr. 3)", "Mr. 5", "Miss Valentine", "Mr. 4", "Miss Merry Christmas" ]
  },
  {
    id: "alabasta",
    order: 180,
    fr: "Royaume d'Alabasta",
    en: "Arabasta Kingdom",
    members: [ "Nefertari Vivi", "Nefertari Cobra", "Igaram", "Pell", "Karoo", "Koza" ]
  },
  {
    id: "fishman",
    order: 190,
    fr: "Île des Hommes-Poissons",
    en: "Fish-Man Island",
    members: [ "Jinbe", "Shirahoshi", "Neptune", "Otohime", "Fisher Tiger", "Hody Jones", "Vander Decken IX", "Hachi", "Camie", "Pappag", "Arlong", "Caribou", "Fukaboshi", "Ryuboshi", "Manboshi"]
  },
  {
    id: "skypiea",
    order: 200,
    fr: "Skypiea",
    en: "Skypiea",
    members: [ "Enel", "Gan Fall", "Wyper", "Conis", "Mont Blanc Noland", "Mont Blanc Cricket", "Ohm", "Shura", "Satori", "Gedatsu" ]
  },
  
  {
    id: "wano",
    order: 210,
    fr: "Pays de Wano",
    en: "Wano Country",
    members: [ "Kozuki Oden", "Kozuki Momonosuke", "Kin'emon", "Kanjuro", "Raizo", "Inuarashi", "Nekomamushi", "Yamato", "Otama", "Denjiro", "Kawamatsu", "Izo", "Shutenmaru", "Kikunojo", "Kozuki Hiyori", "Kurozumi Orochi" ]
  },
  {
    id: "eastblue",
    order: 220,
    fr: "East Blue",
    en: "East Blue",
    members: [ "buggy_eastblue", "Alvida", "Kuro", "Don Krieg", "Gin", "Axe Man Morgan", "Arlong", "Hachi", "Zeff", "Kaya", "Jango", "Curly Dadan", "helmeppo_pre", "coby_young", "Richie", "Mohji", "Cabaji", "Nojiko", "Genzo", "Belle-mère", "Kuina", "Gaimon"]
  },
  {
    id: "supernatural",
    order: 230,
    fr: "Légendes & Anciens",
    en: "Legends & Ancients",
    // Barbe Blanche affiché en version PRIME (apogée) : c'est une légende.
    members: [ "Joy Boy", "Emet", "Rocks D. Xebec", "Loki", "Zunesha", "Gol D. Roger", "whitebeard_prime", "Kozuki Oden" ]
  },
  {
    id: "films",
    order: 240,
    fr: "Films",
    en: "Movies",
    members: [ "Uta", "Douglas Bullet", "Shiki" ]
  },
  {
    id: "zoo",
    order: 215,
    fr: "Zou / Tribus Minks",
    en: "Zou / Mink Tribes",
    members: [ "Inuarashi", "Nekomamushi", "Carrot", "Pedro", "Zunesha", "Wanda", "Bepo", "Pekoms" ]
  },
  {
    id: "allies",
    order: 45,
    fr: "Alliés",
    en: "Allies",
    members: [ "Yamato", "Bartolomeo", "Cavendish", "Kin'emon", "Kozuki Momonosuke", "Inuarashi", "Nekomamushi", "Leo", "Kyros", "Rebecca", "Viola", "Riku Doldo III", "Hajrudin", "Sai", "Elizabello II", "Orlumbus", "Ideo", "Mansherry", "Don Chinjao" ]
  },
  {
    id: "water7",
    order: 175,
    fr: "Water 7",
    en: "Water 7",
    members: [ "Paulie", "Iceburg", "Tom", "franky_pre", "Rob Lucci", "Kaku", "Spandam", "Kalifa", "Blueno", "Jabra", "Kumadori", "Fukurou", "Kokoro" ]
  },
  {
    id: "elbaf",
    order: 225,
    fr: "Elbaf",
    en: "Elbaf",
    members: [ "Loki", "Gunko", "Shamrock", "Dorry", "Broggy", "Saint Figarland Garling" ]
  },
  {
    id: "amazonlily",
    order: 185,
    fr: "Amazon Lily",
    en: "Amazon Lily",
    members: [ "Boa Hancock", "Gloriosa", "Boa Sandersonia", "Boa Marigold" ]
  },
  {
    id: "vegapunk",
    order: 135,
    fr: "Vegapunk",
    en: "Vegapunk",
    members: [ "Dr. Vegapunk", "Shaka", "Lilith", "Edison", "Pythagoras", "Atlas", "York" ]
  },
  {
    id: "moria",
    order: 95,
    fr: "Pirates de Thriller Bark",
    en: "Thriller Bark Pirates",
    members: [ "Gecko Moria", "Oars", "Perona", "Absalom", "Dr. Hogback", "Ryuma" ]
  },
  {
    id: "reverie",
    order: 125,
    fr: "Rêverie",
    en: "Levely",
    members: [
      "Nefertari Vivi",
      "Nefertari Cobra",
      "Shirahoshi",
      "Neptune",
      "Rebecca",
      "Leo",
      "Wapol",
      "Dalton",
      "Imu",
      "Saint Figarland Garling",
      "Saint Marcus Mars",
      "Saint Topman Warcury",
      "Saint Ethanbaron V. Nusjuro",
      "Saint Shepherd Ju Peter",
      "Saint Jaygarcia Saturn",
      "Sabo",
      "Stussy",
      "Rob Lucci",
      "Kaku",
      "Jewelry Bonney",
      "Bartholomew Kuma",
      "Issho"
    ]
  },
  {
    id: "flashback",
    order: 35,
    fr: "Flashback enfance",
    en: "Childhood Flashbacks",
    members: [ "luffy_young", "ace_young", "sabo_young", "shanks_young", "buggy_young", "law_young", "sanji_young", "bonney_young", "zoro_young", "robin_young", "nami_young", "Kuina"]
  },
  {
    // Instants marquants de l'histoire : cartes d'ambiance, pas des alt de personnage.
    id: "iconic",
    order: 42,
    fr: "Moments cultes",
    en: "Iconic Moments",
    members: [ "nami_walk", "robin_live", "shanks_arm", "luffy_shiny", "zoro_nothing", "whitebeard_reveal", "bye_vivi", "luffy_sabo" ]
  },
  {
    id: "others",
    order: 999,
    fr: "Autres",
    en: "Others",
    members: [ "Foxy", "Shakuyaku", "Morgans", "Dr. Kureha", "Dr. Hiriluk", "Caesar Clown" ]
  }
];
