// for(let i = 0; i < p.length; i++) {
//   const x = `'${p[i][0].replace('\'', '\\\'')}': {stability: ${getRandomInt(5)+1}, accuracy: ${getRandomInt(5)+1}, speed: ${getRandomInt(5)+1}, jump: ${getRandomInt(5)+1}, team: '${p[i][1].replace('\'', '\\\'')}'},<br/>`;
//   $('#p').append(x);
// }


const p = [
['Glasgow Hammer', 'Western Deluge Wayfarers'],
['Calamity Rescue', 'Western Deluge Wayfarers'],
['Leuchtturm Hans', 'Western Deluge Wayfarers'],
['Hazard Kraken', 'Western Deluge Wayfarers'],
['Duster Catapult', 'Western Deluge Wayfarers'],
['Sagarmāthā 1 ', 'Himalayan Convergent Takins'],
['Sword of Kathmandu', 'Himalayan Convergent Takins'],
['Chinde Duk', 'Himalayan Convergent Takins'],
['Celestial Ascendant ', 'Himalayan Convergent Takins'],
['Buzkashi Mare', 'Himalayan Convergent Takins'],
['U-wetatso ', 'Adaptive Prototype Wavelengths'],
['Tsa-huro', 'Adaptive Prototype Wavelengths'],
['Mosadatsi', 'Adaptive Prototype Wavelengths'],
['Sha-ea', 'Adaptive Prototype Wavelengths'],
['Disintu', 'Adaptive Prototype Wavelengths'],
['Legion Red', 'Jezero Crater Rovers'],
['Vicious Whisper', 'Jezero Crater Rovers'],
['King Bull', 'Jezero Crater Rovers'],
['Ultimate Gun-Head', 'Jezero Crater Rovers'],
['Astro Nergal', 'Jezero Crater Rovers'],
['Guardian Preserver', 'Lakshmi Planum Lovers'],
['Electro Blossom', 'Lakshmi Planum Lovers'],
['Beautiful Amavasya', 'Lakshmi Planum Lovers'],
['Shadow Virago', 'Lakshmi Planum Lovers'],
['Lotus of Delight', 'Lakshmi Planum Lovers'],
['Saxophone Blue', 'Neptune Jazz Magnets'],
['Melodious Mistake', 'Neptune Jazz Magnets'],
['Queen\'s Gambit', 'Neptune Jazz Magnets'],
['Weeping Willow', 'Neptune Jazz Magnets'],
['Radiant Memento', 'Neptune Jazz Magnets'],
['Self Entitled', 'Witch Heartbreak Lasers'],
['Listen Here You', 'Witch Heartbreak Lasers'],
['Cry Power', 'Witch Heartbreak Lasers'],
['Beyond the Hour', 'Witch Heartbreak Lasers'],
['Lacking in Culture if Not Grace', 'Witch Heartbreak Lasers'],
['White Dwarf', 'Lunar Jump-Point Kangaroos'],
['Dream Spirit', 'Lunar Jump-Point Kangaroos'],
['Tactic Vulcan', 'Lunar Jump-Point Kangaroos'],
['Gorgon Manticore', 'Lunar Jump-Point Kangaroos'],
['Super Noise-Man', 'Lunar Jump-Point Kangaroos'],
['Alpha Mobile', 'Pan-Void Extranational Machines'],
['Striker Blitz', 'Pan-Void Extranational Machines'],
['Wing Harrier', 'Pan-Void Extranational Machines'],
['Echo 27A', 'Pan-Void Extranational Machines'],
['Echo 28A', 'Pan-Void Extranational Machines'],
['Immortal Kamehameha', 'Big Hawaii Fireballs '],
['The Big One', 'Big Hawaii Fireballs '],
['Pyroclastic Flower', 'Big Hawaii Fireballs '],
['Turquoise Horizon', 'Big Hawaii Fireballs '],
['Raddon the Destroyer', 'Big Hawaii Fireballs '],
['Ulvetand', 'Wild Greenland Humpbacks'],
['Chariot Bandido', 'Wild Greenland Humpbacks'],
['Bacchanalia', 'Wild Greenland Humpbacks'],
['Blunt Force Drama', 'Wild Greenland Humpbacks'],
['Melpomene\'s Revenge', 'Wild Greenland Humpbacks'],
['Summer Spent on the Grass', 'Al-Muštarī Cosmic Violets'],
['February Fairchild', 'Al-Muštarī Cosmic Violets'],
['Doctor Divinity', 'Al-Muštarī Cosmic Violets'],
['A-Frame Habib', 'Al-Muštarī Cosmic Violets'],
['Corona Amethyst', 'Al-Muštarī Cosmic Violets'],
['Amur Sunrise', 'Renewed Korea Tigers'],
['Lithium Ion Cannon', 'Renewed Korea Tigers'],
['Green Wind', 'Renewed Korea Tigers'],
['Z-DON', 'Renewed Korea Tigers'],
['V-TON', 'Renewed Korea Tigers'],
['Mephist Zero', 'Brass Knuckle Vampires'],
['Fang Favorite', 'Brass Knuckle Vampires'],
['Godfather of Souls', 'Brass Knuckle Vampires'],
['Dusky Leathers', 'Brass Knuckle Vampires'],
['Belfast Rock', 'Brass Knuckle Vampires'],
['Ba\'al Buster', 'Devil\'s Corkscrew Imps'],
['Cocytus Tributary', 'Devil\'s Corkscrew Imps'],
['Scylla\'s Snacktime', 'Devil\'s Corkscrew Imps'],
['Sinwave', 'Devil\'s Corkscrew Imps'],
['Circuitous Argument', 'Devil\'s Corkscrew Imps'],
['Divide By Zero', 'Hyperion Meridian Irregulars'],
['Exception Occurred', 'Hyperion Meridian Irregulars'],
['Landing Gear', 'Hyperion Meridian Irregulars'],
['Input Disconnected', 'Hyperion Meridian Irregulars'],
['Core Dump', 'Hyperion Meridian Irregulars'],
['Ikaruga Tribute', 'Orion\'s Belt Giants'],
['Dueling Drum', 'Orion\'s Belt Giants'],
['Siege ', 'Orion\'s Belt Giants'],
['Kurofuyu', 'Orion\'s Belt Giants'],
['Organix', 'Orion\'s Belt Giants'],
['Drissilith', 'Republic of Kerberos Pirates'],
['Titan Ant Cordyceps', 'Republic of Kerberos Pirates'],
['Mighty Tortuga', 'Republic of Kerberos Pirates'],
['Atomic Sarcosuchus', 'Republic of Kerberos Pirates'],
['Mother Anemone ', 'Republic of Kerberos Pirates'],
['Rustbucket', 'Freelance Fold-Space Falcons'],
['Longhaul', 'Freelance Fold-Space Falcons'],
['Rollcage', 'Freelance Fold-Space Falcons'],
['Juno Hat Trick', 'Freelance Fold-Space Falcons'],
['Christine', 'Freelance Fold-Space Falcons'],
['Octoplasm V', 'Olympus Mons Tornadoes'],
['Typhoon Pioneer', 'Olympus Mons Tornadoes'],
['Caesar Dragoon', 'Olympus Mons Tornadoes'],
['18 Karat Simurgh', 'Olympus Mons Tornadoes'],
['Zeruel DX', 'Olympus Mons Tornadoes'],
['Unit-069', 'Akaheru Bonfires'],
['Drift Fighter Z', 'Akaheru Bonfires'],
['Golden Heel', 'Akaheru Bonfires'],
['Jade Hornet Master', 'Akaheru Bonfires'],
['Super God Apex', 'Akaheru Bonfires'],
['Hansel/Gretel Duo-Type', 'Ancient Avalon Avatars'],
['Panzer Bluebeard', 'Ancient Avalon Avatars'],
['Frost Banshee', 'Ancient Avalon Avatars'],
['Midnight Princess', 'Ancient Avalon Avatars'],
['Platform Excalibur', 'Ancient Avalon Avatars'],
['Strain Sigma', 'Sirius Delta Outpost Chimeras'],
['DNA Fistfight', 'Sirius Delta Outpost Chimeras'],
['Hybrid X51', 'Sirius Delta Outpost Chimeras'],
['Evolution Terminus', 'Sirius Delta Outpost Chimeras'],
['Homo Navis', 'Sirius Delta Outpost Chimeras'],
['Quaternion Headache', 'Crab Nebula Functions'],
['Inflection Pointer', 'Crab Nebula Functions'],
['Radical Negative', 'Crab Nebula Functions'],
['Approaching Infinity', 'Crab Nebula Functions'],
['Graphpaper Graffito', 'Crab Nebula Functions'],
];
const players = {
  'Glasgow Hammer': {stability: 5, accuracy: 3, speed: 5, jump: 2, team: 'Western Deluge Wayfarers', initials: 'GHM'},
  'Calamity Rescue': {stability: 2, accuracy: 2, speed: 3, jump: 1, team: 'Western Deluge Wayfarers', initials: 'CAL'},
  'Leuchtturm Hans': {stability: 4, accuracy: 3, speed: 3, jump: 5, team: 'Western Deluge Wayfarers', initials: 'HAN'},
  'Hazard Kraken': {stability: 5, accuracy: 1, speed: 4, jump: 5, team: 'Western Deluge Wayfarers', initials: 'HAZ'},
  'Duster Catapult': {stability: 2, accuracy: 1, speed: 4, jump: 4, team: 'Western Deluge Wayfarers', initials: 'DC'},
  'Sagarmāthā 1 ': {stability: 4, accuracy: 4, speed: 3, jump: 1, team: 'Himalayan Convergent Takins', initials: 'SG1'},
  'Sword of Kathmandu': {stability: 3, accuracy: 4, speed: 1, jump: 3, team: 'Himalayan Convergent Takins', initials: 'SK'},
  'Chinde Duk': {stability: 2, accuracy: 5, speed: 1, jump: 4, team: 'Himalayan Convergent Takins', initials: 'DUK'},
  'Celestial Ascendant ': {stability: 4, accuracy: 5, speed: 3, jump: 4, team: 'Himalayan Convergent Takins', initials: 'ASC'},
  'Buzkashi Mare': {stability: 2, accuracy: 3, speed: 4, jump: 3, team: 'Himalayan Convergent Takins', initials: 'BUZ'},
  'U-wetatso ': {stability: 2, accuracy: 2, speed: 3, jump: 1, team: 'Adaptive Prototype Wavelengths', initials: 'UWT'},
  'Tsa-huro': {stability: 2, accuracy: 3, speed: 3, jump: 4, team: 'Adaptive Prototype Wavelengths', initials: 'TSA'},
  'Mosadatsi': {stability: 4, accuracy: 5, speed: 1, jump: 5, team: 'Adaptive Prototype Wavelengths', initials: 'MOS'},
  'Sha-ea': {stability: 5, accuracy: 3, speed: 3, jump: 1, team: 'Adaptive Prototype Wavelengths', initials: 'SHA'},
  'Disintu': {stability: 3, accuracy: 2, speed: 2, jump: 2, team: 'Adaptive Prototype Wavelengths', initials: 'DIS'},
  'Legion Red': {stability: 3, accuracy: 3, speed: 3, jump: 3, team: 'Jezero Crater Rovers', initials: 'RED'},
  'Vicious Whisper': {stability: 1, accuracy: 1, speed: 3, jump: 5, team: 'Jezero Crater Rovers', initials: 'VW'},
  'King Bull': {stability: 5, accuracy: 2, speed: 1, jump: 1, team: 'Jezero Crater Rovers', initials: 'BUL'},
  'Ultimate Gun-Head': {stability: 2, accuracy: 2, speed: 4, jump: 3, team: 'Jezero Crater Rovers', initials: 'GUN'},
  'Astro Nergal': {stability: 4, accuracy: 3, speed: 5, jump: 4, team: 'Jezero Crater Rovers', initials: 'NRG'},
  'Guardian Preserver': {stability: 1, accuracy: 5, speed: 5, jump: 3, team: 'Lakshmi Planum Lovers', initials: 'GRD'},
  'Electro Blossom': {stability: 2, accuracy: 4, speed: 3, jump: 4, team: 'Lakshmi Planum Lovers', initials: 'EB'},
  'Beautiful Amavasya': {stability: 3, accuracy: 2, speed: 2, jump: 4, team: 'Lakshmi Planum Lovers', initials: 'AMA'},
  'Shadow Virago': {stability: 2, accuracy: 2, speed: 4, jump: 1, team: 'Lakshmi Planum Lovers', initials: 'SV'},
  'Lotus of Delight': {stability: 2, accuracy: 1, speed: 2, jump: 5, team: 'Lakshmi Planum Lovers', initials: 'LD'},
  'Saxophone Blue': {stability: 3, accuracy: 3, speed: 4, jump: 2, team: 'Neptune Jazz Magnets', initials: 'SAX'},
  'Melodious Mistake': {stability: 2, accuracy: 5, speed: 3, jump: 5, team: 'Neptune Jazz Magnets', initials: 'MM'},
  'Queen\'s Gambit': {stability: 1, accuracy: 3, speed: 2, jump: 3, team: 'Neptune Jazz Magnets', initials: 'QG'},
  'Weeping Willow': {stability: 5, accuracy: 3, speed: 5, jump: 3, team: 'Neptune Jazz Magnets', initials: 'WW'},
  'Radiant Memento': {stability: 3, accuracy: 5, speed: 5, jump: 1, team: 'Neptune Jazz Magnets', initials: 'RM'},
  'Self Entitled': {stability: 5, accuracy: 1, speed: 1, jump: 1, team: 'Witch Heartbreak Lasers', initials: 'SE'},
  'Listen Here You': {stability: 1, accuracy: 3, speed: 2, jump: 4, team: 'Witch Heartbreak Lasers', initials: 'LHU'},
  'Cry Power': {stability: 1, accuracy: 4, speed: 5, jump: 1, team: 'Witch Heartbreak Lasers', initials: 'CRY'},
  'Beyond the Hour': {stability: 5, accuracy: 5, speed: 4, jump: 2, team: 'Witch Heartbreak Lasers', initials: 'BH'},
  'Lacking in Culture if Not Grace': {stability: 3, accuracy: 3, speed: 5, jump: 4, team: 'Witch Heartbreak Lasers', initials: 'LC'},
  'White Dwarf': {stability: 5, accuracy: 4, speed: 3, jump: 5, team: 'Lunar Jump-Point Kangaroos', initials: 'WD'},
  'Dream Spirit': {stability: 3, accuracy: 3, speed: 4, jump: 5, team: 'Lunar Jump-Point Kangaroos', initials: 'DS'},
  'Tactic Vulcan': {stability: 3, accuracy: 2, speed: 4, jump: 3, team: 'Lunar Jump-Point Kangaroos', initials: 'TV'},
  'Gorgon Manticore': {stability: 4, accuracy: 2, speed: 3, jump: 5, team: 'Lunar Jump-Point Kangaroos', initials: 'GM'},
  'Super Noise-Man': {stability: 2, accuracy: 4, speed: 1, jump: 2, team: 'Lunar Jump-Point Kangaroos', initials: 'SNM'},
  'Alpha Mobile': {stability: 4, accuracy: 2, speed: 1, jump: 5, team: 'Pan-Void Extranational Machines', initials: 'AM'},
  'Striker Blitz': {stability: 3, accuracy: 5, speed: 1, jump: 3, team: 'Pan-Void Extranational Machines', initials: 'SB'},
  'Wing Harrier': {stability: 2, accuracy: 2, speed: 2, jump: 3, team: 'Pan-Void Extranational Machines', initials: 'WNG'},
  'Echo 27A': {stability: 2, accuracy: 3, speed: 1, jump: 5, team: 'Pan-Void Extranational Machines', initials: 'E27'},
  'Echo 28A': {stability: 2, accuracy: 4, speed: 4, jump: 4, team: 'Pan-Void Extranational Machines', initials: 'E28'},
  'Immortal Kamehameha': {stability: 3, accuracy: 2, speed: 5, jump: 4, team: 'Big Hawaii Fireballs', initials: 'IK'},
  'The Big One': {stability: 4, accuracy: 1, speed: 3, jump: 3, team: 'Big Hawaii Fireballs', initials: 'TB1'},
  'Pyroclastic Flower': {stability: 2, accuracy: 4, speed: 4, jump: 3, team: 'Big Hawaii Fireballs', initials: 'PYR'},
  'Turquoise Horizon': {stability: 4, accuracy: 2, speed: 1, jump: 3, team: 'Big Hawaii Fireballs', initials: 'TH'},
  'Raddon the Destroyer': {stability: 4, accuracy: 3, speed: 3, jump: 5, team: 'Big Hawaii Fireballs', initials: 'RAD'},
  'Ulvetand': {stability: 2, accuracy: 5, speed: 3, jump: 1, team: 'Wild Greenland Humpbacks', initials: 'ULV'},
  'Chariot Bandido': {stability: 3, accuracy: 4, speed: 2, jump: 4, team: 'Wild Greenland Humpbacks', initials: 'CB'},
  'Bacchanalia': {stability: 2, accuracy: 3, speed: 4, jump: 3, team: 'Wild Greenland Humpbacks', initials: 'BAC'},
  'Blunt Force Drama': {stability: 5, accuracy: 1, speed: 3, jump: 4, team: 'Wild Greenland Humpbacks', initials: 'BFD'},
  'Melpomene\'s Revenge': {stability: 2, accuracy: 2, speed: 4, jump: 4, team: 'Wild Greenland Humpbacks', initials: 'MLP'},
  'Summer Spent on the Grass': {stability: 3, accuracy: 5, speed: 5, jump: 2, team: 'Al-Muštarī Cosmic Violets', initials: 'SSG'},
  'February Fairchild': {stability: 5, accuracy: 5, speed: 4, jump: 4, team: 'Al-Muštarī Cosmic Violets', initials: 'FF'},
  'Doctor Divinity': {stability: 4, accuracy: 3, speed: 3, jump: 3, team: 'Al-Muštarī Cosmic Violets', initials: 'DD'},
  'A-Frame Habib': {stability: 3, accuracy: 4, speed: 1, jump: 3, team: 'Al-Muštarī Cosmic Violets', initials: 'HAB'},
  'Corona Amethyst': {stability: 5, accuracy: 1, speed: 3, jump: 4, team: 'Al-Muštarī Cosmic Violets', initials: 'CA'},
  'Amur Sunrise': {stability: 5, accuracy: 2, speed: 1, jump: 4, team: 'Renewed Korea Tigers', initials: 'AMR'},
  'Lithium Ion Cannon': {stability: 4, accuracy: 3, speed: 1, jump: 2, team: 'Renewed Korea Tigers', initials: 'ION'},
  'Green Wind': {stability: 3, accuracy: 4, speed: 5, jump: 2, team: 'Renewed Korea Tigers', initials: 'GW'},
  'Z-DON': {stability: 1, accuracy: 5, speed: 3, jump: 1, team: 'Renewed Korea Tigers', initials: 'ZDN'},
  'V-TON': {stability: 1, accuracy: 5, speed: 2, jump: 3, team: 'Renewed Korea Tigers', initials: 'VTN'},
  'Mephist Zero': {stability: 3, accuracy: 4, speed: 4, jump: 2, team: 'Brass Knuckle Vampires', initials: 'MZ'},
  'Fang Favorite': {stability: 3, accuracy: 2, speed: 1, jump: 3, team: 'Brass Knuckle Vampires', initials: 'FNG'},
  'Godfather of Souls': {stability: 3, accuracy: 2, speed: 5, jump: 1, team: 'Brass Knuckle Vampires', initials: 'GS'},
  'Dusky Leathers': {stability: 3, accuracy: 3, speed: 4, jump: 3, team: 'Brass Knuckle Vampires', initials: 'DL'},
  'Belfast Rock': {stability: 1, accuracy: 4, speed: 4, jump: 1, team: 'Brass Knuckle Vampires', initials: 'BR'},
  'Ba\'al Buster': {stability: 2, accuracy: 4, speed: 3, jump: 2, team: 'Devil\'s Corkscrew Imps', initials: 'BB'},
  'Cocytus Tributary': {stability: 5, accuracy: 1, speed: 2, jump: 1, team: 'Devil\'s Corkscrew Imps', initials: 'CT'},
  'Scylla\'s Snacktime': {stability: 4, accuracy: 4, speed: 3, jump: 2, team: 'Devil\'s Corkscrew Imps', initials: 'SCL'},
  'Sinwave': {stability: 5, accuracy: 4, speed: 2, jump: 2, team: 'Devil\'s Corkscrew Imps', initials: 'SIN'},
  'Circuitous Argument': {stability: 2, accuracy: 2, speed: 2, jump: 3, team: 'Devil\'s Corkscrew Imps', initials: 'ARG'},
  'Divide By Zero': {stability: 3, accuracy: 2, speed: 4, jump: 4, team: 'Hyperion Meridian Irregulars', initials: 'DZ'},
  'Exception Occurred': {stability: 2, accuracy: 3, speed: 1, jump: 4, team: 'Hyperion Meridian Irregulars', initials: 'EX'},
  'Landing Gear': {stability: 5, accuracy: 3, speed: 1, jump: 3, team: 'Hyperion Meridian Irregulars', initials: 'LG'},
  'Input Disconnected': {stability: 2, accuracy: 5, speed: 1, jump: 2, team: 'Hyperion Meridian Irregulars', initials: 'IDC'},
  'Core Dump': {stability: 2, accuracy: 4, speed: 5, jump: 3, team: 'Hyperion Meridian Irregulars', initials: 'CD'},
  'Ikaruga Tribute': {stability: 5, accuracy: 1, speed: 4, jump: 1, team: 'Orion\'s Belt Giants', initials: 'IKA'},
  'Dueling Drum': {stability: 1, accuracy: 4, speed: 5, jump: 1, team: 'Orion\'s Belt Giants', initials: 'DD'},
  'Siege ': {stability: 2, accuracy: 4, speed: 4, jump: 2, team: 'Orion\'s Belt Giants', initials: 'SGE'},
  'Kurofuyu': {stability: 4, accuracy: 2, speed: 5, jump: 2, team: 'Orion\'s Belt Giants', initials: 'KFU'},
  'Organix': {stability: 5, accuracy: 1, speed: 4, jump: 5, team: 'Orion\'s Belt Giants', initials: 'OGX'},
  'Drissilith': {stability: 4, accuracy: 2, speed: 2, jump: 2, team: 'Republic of Kerberos Pirates', initials: 'DRS'},
  'Titan Ant Cordyceps': {stability: 2, accuracy: 2, speed: 2, jump: 2, team: 'Republic of Kerberos Pirates', initials: 'TAC'},
  'Mighty Tortuga': {stability: 3, accuracy: 4, speed: 5, jump: 2, team: 'Republic of Kerberos Pirates', initials: 'MT'},
  'Atomic Sarcosuchus': {stability: 5, accuracy: 3, speed: 4, jump: 5, team: 'Republic of Kerberos Pirates', initials: 'SRC'},
  'Mother Anemone ': {stability: 2, accuracy: 5, speed: 1, jump: 3, team: 'Republic of Kerberos Pirates', initials: 'ANM'},
  'Rustbucket': {stability: 3, accuracy: 2, speed: 1, jump: 2, team: 'Freelance Fold-Space Falcons', initials: 'RB'},
  'Longhaul': {stability: 2, accuracy: 3, speed: 1, jump: 2, team: 'Freelance Fold-Space Falcons', initials: 'LH'},
  'Rollcage': {stability: 4, accuracy: 5, speed: 4, jump: 4, team: 'Freelance Fold-Space Falcons', initials: 'RC'},
  'Juno Hat Trick': {stability: 2, accuracy: 1, speed: 4, jump: 4, team: 'Freelance Fold-Space Falcons', initials: 'JHT'},
  'Christine': {stability: 1, accuracy: 2, speed: 3, jump: 5, team: 'Freelance Fold-Space Falcons', initials: 'CHR'},
  'Octoplasm V': {stability: 1, accuracy: 1, speed: 4, jump: 2, team: 'Olympus Mons Tornadoes', initials: 'OCT'},
  'Typhoon Pioneer': {stability: 1, accuracy: 2, speed: 3, jump: 1, team: 'Olympus Mons Tornadoes', initials: 'TP'},
  'Caesar Dragoon': {stability: 5, accuracy: 4, speed: 4, jump: 5, team: 'Olympus Mons Tornadoes', initials: 'CD'},
  '18 Karat Simurgh': {stability: 3, accuracy: 4, speed: 2, jump: 4, team: 'Olympus Mons Tornadoes', initials: '18K'},
  'Zeruel DX': {stability: 4, accuracy: 5, speed: 4, jump: 5, team: 'Olympus Mons Tornadoes', initials: 'ZDX'},
  'Unit-069': {stability: 2, accuracy: 4, speed: 1, jump: 3, team: 'Akaheru Bonfires', initials: 'U69'},
  'Drift Fighter Z': {stability: 5, accuracy: 3, speed: 2, jump: 4, team: 'Akaheru Bonfires', initials: 'DFZ'},
  'Golden Heel': {stability: 1, accuracy: 3, speed: 3, jump: 5, team: 'Akaheru Bonfires', initials: 'GH'},
  'Jade Hornet Master': {stability: 1, accuracy: 4, speed: 2, jump: 1, team: 'Akaheru Bonfires', initials: 'JHM'},
  'Super God Apex': {stability: 3, accuracy: 4, speed: 4, jump: 5, team: 'Akaheru Bonfires', initials: 'SGA'},
  'Hansel/Gretel Duo-Type': {stability: 4, accuracy: 1, speed: 4, jump: 5, team: 'Ancient Avalon Avatars', initials: 'HGD'},
  'Panzer Bluebeard': {stability: 1, accuracy: 3, speed: 4, jump: 2, team: 'Ancient Avalon Avatars', initials: 'PBB'},
  'Frost Banshee': {stability: 5, accuracy: 5, speed: 4, jump: 1, team: 'Ancient Avalon Avatars', initials: 'BAN'},
  'Midnight Princess': {stability: 2, accuracy: 4, speed: 3, jump: 5, team: 'Ancient Avalon Avatars', initials: 'MPS'},
  'Platform Excalibur': {stability: 2, accuracy: 5, speed: 3, jump: 4, team: 'Ancient Avalon Avatars', initials: 'EXC'},
  'Strain Sigma': {stability: 4, accuracy: 2, speed: 1, jump: 1, team: 'Sirius Delta Outpost Chimeras', initials: 'SS'},
  'DNA Fistfight': {stability: 4, accuracy: 3, speed: 3, jump: 1, team: 'Sirius Delta Outpost Chimeras', initials: 'DNA'},
  'Hybrid X51': {stability: 4, accuracy: 5, speed: 5, jump: 1, team: 'Sirius Delta Outpost Chimeras', initials: 'X51'},
  'Evolution Terminus': {stability: 1, accuracy: 5, speed: 3, jump: 1, team: 'Sirius Delta Outpost Chimeras', initials: 'EVO'},
  'Homo Navis': {stability: 1, accuracy: 4, speed: 3, jump: 5, team: 'Sirius Delta Outpost Chimeras', initials: 'HN'},
  'Quaternion Headache': {stability: 5, accuracy: 3, speed: 1, jump: 3, team: 'Crab Nebula Functions', initials: 'QTR'},
  'Inflection Pointer': {stability: 3, accuracy: 3, speed: 4, jump: 1, team: 'Crab Nebula Functions', initials: 'IPO'},
  'Radical Negative': {stability: 2, accuracy: 4, speed: 1, jump: 2, team: 'Crab Nebula Functions', initials: 'RAD'},
  'Approaching Infinity': {stability: 1, accuracy: 3, speed: 5, jump: 2, team: 'Crab Nebula Functions', initials: 'INF'},
  'Graphpaper Graffito': {stability: 4, accuracy: 1, speed: 3, jump: 3, team: 'Crab Nebula Functions', initials: 'GG'},
};

