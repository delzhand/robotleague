
const updates = [
  {type: 'playerStat', player: 'Pyroclastic Flower', stat: 'stability', value: 1},
  {type: 'playerStat', player: 'Pyroclastic Flower', stat: 'jump', value: -2}
  // 2
];

const league = {
  "Wayfarers":{
     "name":"Western Deluge Wayfarers",
     "shortName":"Wayfarers",
     "players":[
        {
           "stability":5,
           "accuracy":3,
           "speed":5,
           "jump":2,
           "initials":"GHM",
           "name":"Glasgow Hammer"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":3,
           "jump":1,
           "initials":"CAL",
           "name":"Calamity Rescue"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":5,
           "initials":"HAN",
           "name":"Leuchtturm Hans"
        },
        {
           "stability":5,
           "accuracy":1,
           "speed":4,
           "jump":5,
           "initials":"HAZ",
           "name":"Hazard Kraken"
        },
        {
           "stability":2,
           "accuracy":1,
           "speed":4,
           "jump":4,
           "initials":"DC",
           "name":"Duster Catapult"
        }
     ]
  },
  "Takins":{
     "name":"Himalayan Convergent Takins",
     "shortName":"Takins",
     "players":[
        {
           "stability":4,
           "accuracy":4,
           "speed":3,
           "jump":1,
           "initials":"SG1",
           "name":"Sagarmāthā 1"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":1,
           "jump":3,
           "initials":"SK",
           "name":"Sword of Kathmandu"
        },
        {
           "stability":2,
           "accuracy":5,
           "speed":1,
           "jump":4,
           "initials":"DUK",
           "name":"Chinde Duk"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":3,
           "jump":4,
           "initials":"ASC",
           "name":"Celestial Ascendant"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":4,
           "jump":3,
           "initials":"BUZ",
           "name":"Buzkashi Mare"
        }
     ]
  },
  "Wavelengths":{
     "name":"Adaptive Prototype Wavelengths",
     "shortName":"Wavelengths",
     "players":[
        {
           "stability":2,
           "accuracy":2,
           "speed":3,
           "jump":1,
           "initials":"UWT",
           "name":"U-wetatso"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":3,
           "jump":4,
           "initials":"TSA",
           "name":"Tsa-huro"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":1,
           "jump":5,
           "initials":"MOS",
           "name":"Mosadatsi"
        },
        {
           "stability":5,
           "accuracy":3,
           "speed":3,
           "jump":1,
           "initials":"SHA",
           "name":"Sha-ea"
        },
        {
           "stability":3,
           "accuracy":2,
           "speed":2,
           "jump":2,
           "initials":"DIS",
           "name":"Disintu"
        }
     ]
  },
  "Rovers":{
     "name":"Jezero Crater Rovers",
     "shortName":"Rovers",
     "players":[
        {
           "stability":3,
           "accuracy":3,
           "speed":3,
           "jump":3,
           "initials":"RED",
           "name":"Legion Red"
        },
        {
           "stability":1,
           "accuracy":1,
           "speed":3,
           "jump":5,
           "initials":"VW",
           "name":"Vicious Whisper"
        },
        {
           "stability":5,
           "accuracy":2,
           "speed":1,
           "jump":1,
           "initials":"BUL",
           "name":"King Bull"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":4,
           "jump":3,
           "initials":"GUN",
           "name":"Ultimate Gun-Head"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":5,
           "jump":4,
           "initials":"NRG",
           "name":"Astro Nergal"
        }
     ]
  },
  "Lovers":{
     "name":"Lakshmi Planum Lovers",
     "shortName":"Lovers",
     "players":[
        {
           "stability":1,
           "accuracy":5,
           "speed":5,
           "jump":3,
           "initials":"GRD",
           "name":"Guardian Preserver"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":3,
           "jump":4,
           "initials":"EB",
           "name":"Electro Blossom"
        },
        {
           "stability":3,
           "accuracy":2,
           "speed":2,
           "jump":4,
           "initials":"AMA",
           "name":"Beautiful Amavasya"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":4,
           "jump":1,
           "initials":"SV",
           "name":"Shadow Virago"
        },
        {
           "stability":2,
           "accuracy":1,
           "speed":2,
           "jump":5,
           "initials":"LD",
           "name":"Lotus of Delight"
        }
     ]
  },
  "Jazz Magnets":{
     "name":"Neptune Jazz Magnets",
     "shortName":"Jazz Magnets",
     "players":[
        {
           "stability":3,
           "accuracy":3,
           "speed":4,
           "jump":2,
           "initials":"SAX",
           "name":"Saxophone Blue"
        },
        {
           "stability":2,
           "accuracy":5,
           "speed":3,
           "jump":5,
           "initials":"MM",
           "name":"Melodious Mistake"
        },
        {
           "stability":1,
           "accuracy":3,
           "speed":2,
           "jump":3,
           "initials":"QG",
           "name":"Queen's Gambit"
        },
        {
           "stability":5,
           "accuracy":3,
           "speed":5,
           "jump":3,
           "initials":"WW",
           "name":"Weeping Willow"
        },
        {
           "stability":3,
           "accuracy":5,
           "speed":5,
           "jump":1,
           "initials":"RM",
           "name":"Radiant Memento"
        }
     ]
  },
  "Lasers":{
     "name":"Witch Heartbreak Lasers",
     "shortName":"Lasers",
     "players":[
        {
           "stability":5,
           "accuracy":1,
           "speed":1,
           "jump":1,
           "initials":"SE",
           "name":"Self Entitled"
        },
        {
           "stability":1,
           "accuracy":3,
           "speed":2,
           "jump":4,
           "initials":"LHU",
           "name":"Listen Here You"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":5,
           "jump":1,
           "initials":"CRY",
           "name":"Cry Power"
        },
        {
           "stability":5,
           "accuracy":5,
           "speed":4,
           "jump":2,
           "initials":"BH",
           "name":"Beyond the Hour"
        },
        {
           "stability":3,
           "accuracy":3,
           "speed":5,
           "jump":4,
           "initials":"LC",
           "name":"Lacking in Culture if Not Grace"
        }
     ]
  },
  "Kangaroos":{
     "name":"Lunar Jump-Point Kangaroos",
     "shortName":"Kangaroos",
     "players":[
        {
           "stability":5,
           "accuracy":4,
           "speed":3,
           "jump":5,
           "initials":"WD",
           "name":"White Dwarf"
        },
        {
           "stability":3,
           "accuracy":3,
           "speed":4,
           "jump":5,
           "initials":"DS",
           "name":"Dream Spirit"
        },
        {
           "stability":3,
           "accuracy":2,
           "speed":4,
           "jump":3,
           "initials":"TV",
           "name":"Tactic Vulcan"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":3,
           "jump":5,
           "initials":"GM",
           "name":"Gorgon Manticore"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":1,
           "jump":2,
           "initials":"SNM",
           "name":"Super Noise-Man"
        }
     ]
  },
  "Machines":{
     "name":"Pan-Void Extranational Machines",
     "shortName":"Machines",
     "players":[
        {
           "stability":4,
           "accuracy":2,
           "speed":1,
           "jump":5,
           "initials":"AM",
           "name":"Alpha Mobile"
        },
        {
           "stability":3,
           "accuracy":5,
           "speed":1,
           "jump":3,
           "initials":"SB",
           "name":"Striker Blitz"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":2,
           "jump":3,
           "initials":"WNG",
           "name":"Wing Harrier"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":1,
           "jump":5,
           "initials":"E27",
           "name":"Echo 27A"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":4,
           "jump":4,
           "initials":"E28",
           "name":"Echo 28A"
        }
     ]
  },
  "Fireballs":{
     "name":"Big Hawaii Fireballs",
     "shortName":"Fireballs",
     "players":[
        {
           "stability":3,
           "accuracy":2,
           "speed":5,
           "jump":4,
           "initials":"IK",
           "name":"Immortal Kamehameha"
        },
        {
           "stability":4,
           "accuracy":1,
           "speed":3,
           "jump":3,
           "initials":"TB1",
           "name":"The Big One"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":4,
           "jump":3,
           "initials":"PYR",
           "name":"Pyroclastic Flower"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":1,
           "jump":3,
           "initials":"TH",
           "name":"Turquoise Horizon"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":5,
           "initials":"RAD",
           "name":"Raddon the Destroyer"
        }
     ]
  },
  "Humpbacks":{
     "name":"Wild Greenland Humpbacks",
     "shortName":"Humpbacks",
     "players":[
        {
           "stability":2,
           "accuracy":5,
           "speed":3,
           "jump":1,
           "initials":"ULV",
           "name":"Ulvetand"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":2,
           "jump":4,
           "initials":"CB",
           "name":"Chariot Bandido"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":4,
           "jump":3,
           "initials":"BAC",
           "name":"Bacchanalia"
        },
        {
           "stability":5,
           "accuracy":1,
           "speed":3,
           "jump":4,
           "initials":"BFD",
           "name":"Blunt Force Drama"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":4,
           "jump":4,
           "initials":"MLP",
           "name":"Melpomene's Revenge"
        }
     ]
  },
  "Cosmic Violets":{
     "name":"Al-Muštarī Cosmic Violets",
     "shortName":"Cosmic Violets",
     "players":[
        {
           "stability":3,
           "accuracy":5,
           "speed":5,
           "jump":2,
           "initials":"SSG",
           "name":"Summer Spent on the Grass"
        },
        {
           "stability":5,
           "accuracy":5,
           "speed":4,
           "jump":4,
           "initials":"FF",
           "name":"February Fairchild"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":3,
           "initials":"DD",
           "name":"Doctor Divinity"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":1,
           "jump":3,
           "initials":"HAB",
           "name":"A-Frame Habib"
        },
        {
           "stability":5,
           "accuracy":1,
           "speed":3,
           "jump":4,
           "initials":"CA",
           "name":"Corona Amethyst"
        }
     ]
  },
  "Tigers":{
     "name":"Renewed Korea Tigers",
     "shortName":"Tigers",
     "players":[
        {
           "stability":5,
           "accuracy":2,
           "speed":1,
           "jump":4,
           "initials":"AMR",
           "name":"Amur Sunrise"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":1,
           "jump":2,
           "initials":"ION",
           "name":"Lithium Ion Cannon"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":5,
           "jump":2,
           "initials":"GW",
           "name":"Green Wind"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":3,
           "jump":1,
           "initials":"ZDN",
           "name":"Z-DON"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":2,
           "jump":3,
           "initials":"VTN",
           "name":"V-TON"
        }
     ]
  },
  "Vampires":{
     "name":"Brass Knuckle Vampires",
     "shortName":"Vampires",
     "players":[
        {
           "stability":3,
           "accuracy":4,
           "speed":4,
           "jump":2,
           "initials":"MZ",
           "name":"Mephist Zero"
        },
        {
           "stability":3,
           "accuracy":2,
           "speed":1,
           "jump":3,
           "initials":"FNG",
           "name":"Fang Favorite"
        },
        {
           "stability":3,
           "accuracy":2,
           "speed":5,
           "jump":1,
           "initials":"GS",
           "name":"Godfather of Souls"
        },
        {
           "stability":3,
           "accuracy":3,
           "speed":4,
           "jump":3,
           "initials":"DL",
           "name":"Dusky Leathers"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":4,
           "jump":1,
           "initials":"BR",
           "name":"Belfast Rock"
        }
     ]
  },
  "Imps":{
     "name":"Devil's Corkscrew Imps",
     "shortName":"Imps",
     "players":[
        {
           "stability":2,
           "accuracy":4,
           "speed":3,
           "jump":2,
           "initials":"BB",
           "name":"Ba'al Buster"
        },
        {
           "stability":5,
           "accuracy":1,
           "speed":2,
           "jump":1,
           "initials":"CT",
           "name":"Cocytus Tributary"
        },
        {
           "stability":4,
           "accuracy":4,
           "speed":3,
           "jump":2,
           "initials":"SCL",
           "name":"Scylla's Snacktime"
        },
        {
           "stability":5,
           "accuracy":4,
           "speed":2,
           "jump":2,
           "initials":"SIN",
           "name":"Sinwave"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":2,
           "jump":3,
           "initials":"ARG",
           "name":"Circuitous Argument"
        }
     ]
  },
  "Irregulars":{
     "name":"Hyperion Meridian Irregulars",
     "shortName":"Irregulars",
     "players":[
        {
           "stability":3,
           "accuracy":2,
           "speed":4,
           "jump":4,
           "initials":"DZ",
           "name":"Divide By Zero"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":1,
           "jump":4,
           "initials":"EX",
           "name":"Exception Occurred"
        },
        {
           "stability":5,
           "accuracy":3,
           "speed":1,
           "jump":3,
           "initials":"LG",
           "name":"Landing Gear"
        },
        {
           "stability":2,
           "accuracy":5,
           "speed":1,
           "jump":2,
           "initials":"IDC",
           "name":"Input Disconnected"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":5,
           "jump":3,
           "initials":"CD",
           "name":"Core Dump"
        }
     ]
  },
  "Giants":{
     "name":"Orion's Belt Giants",
     "shortName":"Giants",
     "players":[
        {
           "stability":5,
           "accuracy":1,
           "speed":4,
           "jump":1,
           "initials":"IKA",
           "name":"Ikaruga Tribute"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":5,
           "jump":1,
           "initials":"DD",
           "name":"Dueling Drum"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":4,
           "jump":2,
           "initials":"SGE",
           "name":"Siege"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":5,
           "jump":2,
           "initials":"KFU",
           "name":"Kurofuyu"
        },
        {
           "stability":5,
           "accuracy":1,
           "speed":4,
           "jump":5,
           "initials":"OGX",
           "name":"Organix"
        }
     ]
  },
  "Pirates":{
     "name":"Republic of Kerberos Pirates",
     "shortName":"Pirates",
     "players":[
        {
           "stability":4,
           "accuracy":2,
           "speed":2,
           "jump":2,
           "initials":"DRS",
           "name":"Drissilith"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":2,
           "jump":2,
           "initials":"TAC",
           "name":"Titan Ant Cordyceps"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":5,
           "jump":2,
           "initials":"MT",
           "name":"Mighty Tortuga"
        },
        {
           "stability":5,
           "accuracy":3,
           "speed":4,
           "jump":5,
           "initials":"SRC",
           "name":"Atomic Sarcosuchus"
        },
        {
           "stability":2,
           "accuracy":5,
           "speed":1,
           "jump":3,
           "initials":"ANM",
           "name":"Mother Anemone"
        }
     ]
  },
  "Falcons":{
     "name":"Freelance Fold-Space Falcons",
     "shortName":"Falcons",
     "players":[
        {
           "stability":3,
           "accuracy":2,
           "speed":1,
           "jump":2,
           "initials":"RB",
           "name":"Rustbucket"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":1,
           "jump":2,
           "initials":"LH",
           "name":"Longhaul"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":4,
           "jump":4,
           "initials":"RC",
           "name":"Rollcage"
        },
        {
           "stability":2,
           "accuracy":1,
           "speed":4,
           "jump":4,
           "initials":"JHT",
           "name":"Juno Hat Trick"
        },
        {
           "stability":1,
           "accuracy":2,
           "speed":3,
           "jump":5,
           "initials":"CHR",
           "name":"Christine"
        }
     ]
  },
  "Tornadoes":{
     "name":"Olympus Mons Tornadoes",
     "shortName":"Tornadoes",
     "players":[
        {
           "stability":1,
           "accuracy":1,
           "speed":4,
           "jump":2,
           "initials":"OCT",
           "name":"Octoplasm V"
        },
        {
           "stability":1,
           "accuracy":2,
           "speed":3,
           "jump":1,
           "initials":"TP",
           "name":"Typhoon Pioneer"
        },
        {
           "stability":5,
           "accuracy":4,
           "speed":4,
           "jump":5,
           "initials":"CD",
           "name":"Caesar Dragoon"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":2,
           "jump":4,
           "initials":"18K",
           "name":"18 Karat Simurgh"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":4,
           "jump":5,
           "initials":"ZDX",
           "name":"Zeruel DX"
        }
     ]
  },
  "Bonfires":{
     "name":"Akaheru Bonfires",
     "shortName":"Bonfires",
     "players":[
        {
           "stability":2,
           "accuracy":4,
           "speed":1,
           "jump":3,
           "initials":"U69",
           "name":"Unit-069"
        },
        {
           "stability":5,
           "accuracy":3,
           "speed":2,
           "jump":4,
           "initials":"DFZ",
           "name":"Drift Fighter Z"
        },
        {
           "stability":1,
           "accuracy":3,
           "speed":3,
           "jump":5,
           "initials":"GH",
           "name":"Golden Heel"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":2,
           "jump":1,
           "initials":"JHM",
           "name":"Jade Hornet Master"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":4,
           "jump":5,
           "initials":"SGA",
           "name":"Super God Apex"
        }
     ]
  },
  "Avatars":{
     "name":"Ancient Avalon Avatars",
     "shortName":"Avatars",
     "players":[
        {
           "stability":4,
           "accuracy":1,
           "speed":4,
           "jump":5,
           "initials":"HGD",
           "name":"Hansel/Gretel Duo-Type"
        },
        {
           "stability":1,
           "accuracy":3,
           "speed":4,
           "jump":2,
           "initials":"PBB",
           "name":"Panzer Bluebeard"
        },
        {
           "stability":5,
           "accuracy":5,
           "speed":4,
           "jump":1,
           "initials":"BAN",
           "name":"Frost Banshee"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":3,
           "jump":5,
           "initials":"MPS",
           "name":"Midnight Princess"
        },
        {
           "stability":2,
           "accuracy":5,
           "speed":3,
           "jump":4,
           "initials":"EXC",
           "name":"Platform Excalibur"
        }
     ]
  },
  "Chimeras":{
     "name":"Sirius Delta Outpost Chimeras",
     "shortName":"Chimeras",
     "players":[
        {
           "stability":4,
           "accuracy":2,
           "speed":1,
           "jump":1,
           "initials":"SS",
           "name":"Strain Sigma"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":1,
           "initials":"DNA",
           "name":"DNA Fistfight"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":5,
           "jump":1,
           "initials":"X51",
           "name":"Hybrid X51"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":3,
           "jump":1,
           "initials":"EVO",
           "name":"Evolution Terminus"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":3,
           "jump":5,
           "initials":"HN",
           "name":"Homo Navis"
        }
     ]
  },
  "Functions":{
     "name":"Crab Nebula Functions",
     "shortName":"Functions",
     "players":[
        {
           "stability":5,
           "accuracy":3,
           "speed":1,
           "jump":3,
           "initials":"QTR",
           "name":"Quaternion Headache"
        },
        {
           "stability":3,
           "accuracy":3,
           "speed":4,
           "jump":1,
           "initials":"IPO",
           "name":"Inflection Pointer"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":1,
           "jump":2,
           "initials":"RAD",
           "name":"Radical Negative"
        },
        {
           "stability":1,
           "accuracy":3,
           "speed":5,
           "jump":2,
           "initials":"INF",
           "name":"Approaching Infinity"
        },
        {
           "stability":4,
           "accuracy":1,
           "speed":3,
           "jump":3,
           "initials":"GG",
           "name":"Graphpaper Graffito"
        }
     ]
  },
  "Albatrosses":{
     "name":"Lib-Com Transient Albatrosses",
     "shortName":"Albatrosses",
     "players":[
        {
           "stability":3,
           "accuracy":4,
           "speed":4,
           "jump":5,
           "initials":"GER",
           "name":"Geroy Zamka"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":1,
           "jump":5,
           "initials":"DIS",
           "name":"Disco Cabinet"
        },
        {
           "stability":5,
           "accuracy":2,
           "speed":3,
           "jump":3,
           "initials":"BOG",
           "name":"Fearless Bogatyr"
        },
        {
           "stability":2,
           "accuracy":2,
           "speed":3,
           "jump":5,
           "initials":"OUT",
           "name":"Out and About"
        },
        {
           "stability":4,
           "accuracy":5,
           "speed":5,
           "jump":2,
           "initials":"FSJ",
           "name":"Full Spectrum Jacket"
        }
     ]
  },
  "Dragons":{
     "name":"Zhong-Rossíyskoy Compact Dragons",
     "shortName":"Dragons",
     "players":[
        {
           "stability":1,
           "accuracy":5,
           "speed":5,
           "jump":2,
           "initials":"SUN",
           "name":"Sun Wu Tonne"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":2,
           "jump":1,
           "initials":"TSO",
           "name":"Pride of Tsou"
        },
        {
           "stability":3,
           "accuracy":4,
           "speed":5,
           "jump":1,
           "initials":"OXZ",
           "name":"OX-Zodiac"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":3,
           "jump":4,
           "initials":"APT",
           "name":"APT//HAX"
        },
        {
           "stability":4,
           "accuracy":1,
           "speed":2,
           "jump":3,
           "initials":"POL",
           "name":"Polaris Pointer"
        }
     ]
  },
  "Ice Creams":{
     "name":"Exodian Ice Creams",
     "shortName":"Ice Creams",
     "players":[
        {
           "stability":3,
           "accuracy":1,
           "speed":5,
           "jump":5,
           "initials":"ORB",
           "name":"ORB-Dhullaghan"
        },
        {
           "stability":5,
           "accuracy":2,
           "speed":5,
           "jump":3,
           "initials":"MAV",
           "name":"Maverick Punter"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":5,
           "jump":4,
           "initials":"AIM",
           "name":"Alloy Item Mutable"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":3,
           "jump":1,
           "initials":"SHV",
           "name":"Ruby Shivalik"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":1,
           "jump":4,
           "initials":"HDO",
           "name":"Hunky Dory"
        }
     ]
  },
  "Lobsters":{
     "name":"Habitat Scouting Lobsters",
     "shortName":"Lobsters",
     "players":[
        {
           "stability":2,
           "accuracy":1,
           "speed":4,
           "jump":4,
           "initials":"IFA",
           "name":"Ifandor"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":2,
           "jump":1,
           "initials":"AMS",
           "name":"Amsterdam Reach"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":5,
           "jump":2,
           "initials":"BAT",
           "name":"Le Batteur"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":3,
           "initials":"JET",
           "name":"Jet Vintage"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":4,
           "jump":2,
           "initials":"KEP",
           "name":"Kepler Golem"
        }
     ]
  },
  "Spirals":{
     "name":"New Zion Spirals",
     "shortName":"Spirals",
     "players":[
        {
           "stability":5,
           "accuracy":3,
           "speed":3,
           "jump":2,
           "initials":"SL",
           "name":"Strek Ledemate"
        },
        {
           "stability":1,
           "accuracy":4,
           "speed":5,
           "jump":5,
           "initials":"AN7",
           "name":"Anansi 7"
        },
        {
           "stability":2,
           "accuracy":4,
           "speed":2,
           "jump":3,
           "initials":"EQB",
           "name":"Equatorial Bolt"
        },
        {
           "stability":1,
           "accuracy":5,
           "speed":1,
           "jump":5,
           "initials":"AFR",
           "name":"AFR0-Drilla"
        },
        {
           "stability":1,
           "accuracy":2,
           "speed":4,
           "jump":4,
           "initials":"PLT",
           "name":"Platinum Lioness"
        }
     ]
  },
  "Quanqos":{
     "name":"Pthasperang Senior Quanqos",
     "shortName":"Quanqos",
     "players":[
        {
           "stability":2,
           "accuracy":2,
           "speed":3,
           "jump":1,
           "initials":"M44",
           "name":"Mrnhyvr-44"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":1,
           "jump":3,
           "initials":"MRA",
           "name":"Make a Right Angle"
        },
        {
           "stability":4,
           "accuracy":2,
           "speed":1,
           "jump":3,
           "initials":"ULL",
           "name":"Ulluad Rijay"
        },
        {
           "stability":4,
           "accuracy":3,
           "speed":3,
           "jump":3,
           "initials":"WW",
           "name":"Wight Wail"
        },
        {
           "stability":2,
           "accuracy":3,
           "speed":1,
           "jump":4,
           "initials":"ACP",
           "name":"Aura Conduit Parthi"
        }
     ]
  }
}