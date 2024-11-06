import { UnitData } from '../../models/models'

export const terminatorAssaultUnits: Record<string, UnitData>[] = [
  {
    arjac: { name: 'Arjac Rockfist', points: [95], models: [1] },
    belial: { name: 'Belial', points: [85], models: [1] },
    darnath: { name: 'Darnath Lysander', points: [100], models: [1] },
    logan: { name: 'Logan Grimnar', points: [115], models: [1] },
    njal: { name: 'Njal Stormcaller', points: [85], models: [1] },
    tAncient: { name: 'Terminator Ancient', points: [75], models: [1] },
    tCaptain: { name: 'Terminator Captain', points: [125], models: [1] },
    tChaplain: { name: 'Terminator Chaplain', points: [75], models: [1] },
    tLibrarian: { name: 'Terminator Librarian', points: [75], models: [1] },
    wgBattleLeader: {
      name: 'Wolf Guard Battle Leader in Terminator Armour',
      points: [75],
      models: [1],
    },
    wgPackLeader: {
      name: 'Wolf Guard Pack Leader in Terminator Armour',
      points: [40],
      models: [1],
    },
  },
  {
    deathwingKnights1: {
      name: 'Deathwing Knights',
      points: [250],
      models: [5],
    },
    deathwingKnights2: {
      name: 'Deathwing Knights',
      points: [250],
      models: [5],
    },
    deathwingTerminators1: {
      name: 'Deathwing Terminators',
      points: [180, 360],
      models: [5, 10],
    },
    deathwingTerminators2: {
      name: 'Deathwing Terminators',
      points: [180, 360],
      models: [5, 10],
    },
    deathwatchTerminators1: {
      name: 'Deathwatch Terminators',
      points: [210],
      models: [5],
    },
    deathwatchTerminators2: {
      name: 'Deathwatch Terminators',
      points: [210],
      models: [5],
    },
    tAssault1: {
      name: 'Terminator Assault Squad',
      points: [180, 360],
      models: [5, 10],
    },
    tAssault2: {
      name: 'Terminator Assault Squad',
      points: [180, 360],
      models: [5, 10],
    },
    terminators1: {
      name: 'Terminator Squad',
      points: [170, 340],
      models: [5, 10],
    },
    terminators2: {
      name: 'Terminator Squad',
      points: [170, 340],
      models: [5, 10],
    },
  },
]

export const pilumStrikeUnits: Record<string, UnitData>[] = [
  {
    kayvaan: { name: 'Kayvaan Shrike', points: [100], models: [1] },
    ltReiver: { name: 'Lt. in Reiver Armour', points: [55], models: [1] },
    ltCombi: { name: 'Lt. with Combi-weapon', points: [70], models: [1] },
    captainPh: { name: 'Captain in Phobos Armour', points: [70], models: [1] },
    librarianPh: {
      name: 'Librarian in Phobos Armour',
      points: [75],
      models: [1],
    },
    ltPh: { name: 'Lt. in Phobos Armour', points: [75], models: [1] },
  },
  {
    inc1: {
      name: 'Incursor Squad',
      points: [80, 160],
      models: [5, 10],
    },
    inc2: {
      name: 'Incursor Squad',
      points: [80, 160],
      models: [5, 10],
    },
    inc3: {
      name: 'Incursor Squad',
      points: [80, 160],
      models: [5, 10],
    },
    inf1: {
      name: 'Infiltrators Squad',
      points: [100, 200],
      models: [5, 10],
    },
    inf2: {
      name: 'Infiltrators Squad',
      points: [100, 200],
      models: [5, 10],
    },
    inf3: {
      name: 'Infiltrators Squad',
      points: [100, 200],
      models: [5, 10],
    },
    r1: {
      name: 'Reivers Squad',
      points: [75, 150],
      models: [5, 10],
    },
    r2: {
      name: 'Reivers Squad',
      points: [75, 150],
      models: [5, 10],
    },
    r3: {
      name: 'Reivers Squad',
      points: [75, 150],
      models: [5, 10],
    },
  },
  {
    hounds: {
      name: 'Hounds of Morcai',
      points: [80, 160],
      models: [5, 10],
    },
  },
]

export const boardingStrikeUnits: Record<string, UnitData>[] = [
  {
    ancient: { name: 'Ancient', points: [50], models: [1] },
    apothecary: { name: 'Apothecary', points: [50], models: [1] },
    apothecaryBio: { name: 'Apothecary Biologis', points: [70], models: [1] },
    bgAncient: { name: 'Bladeguard Ancient', points: [45], models: [1] },
    captain: { name: 'Captain', points: [80], models: [1] },
    captainG: { name: 'Captain in Gravis Armour', points: [80], models: [1] },
    captainP: { name: 'Captain in Phobos Armour', points: [70], models: [1] },
    captainJ: { name: 'Captain with Jump Pack', points: [85], models: [1] },
    chap: { name: 'Chaplain', points: [60], models: [1] },
    chapJ: { name: 'Chaplain with Jump Pack', points: [75], models: [1] },
    judiciar: { name: 'Judiciar', points: [70], models: [1] },
    lib: { name: 'Librarian', points: [65], models: [1] },
    libP: { name: 'Librarian in Phobos Armour', points: [70], models: [1] },
    lt: { name: 'Lieutenant', points: [65], models: [1] },
    ltPh: { name: 'Lt. in Phobos Armour', points: [55], models: [1] },
    ltR: { name: 'Lt. in Reiver Armour', points: [55], models: [1] },
    ltC: { name: 'Lt. with Combi-weapon', points: [70], models: [1] },
    tech: { name: 'Techmarine', points: [55], models: [1] },
    imp: { name: 'Imperial Space Marine (Legends)', points: [40], models: [1] },
    libJ: { name: 'Librarian with Jump Pack (Legends)', points: [70], models: [1] },
    pCC: { name: 'Primaris Company Champion (Legends)', points: [55], models: [1] },
    gimald: { name: 'Chaplain Grimaldus', points: [130], models: [4] },
    helb: { name: 'High Marshal Helbrecht', points: [130], models: [1] },
    empChamp: { name: "the Emperor's Champion", points: [75], models: [1] },
    castellan: { name: 'Castellan', points: [60], models: [1] },
    marsh: { name: 'Marshall', points: [75], models: [1] },
    astorath: { name: 'Astorath', points: [105], models: [1] },
    corb: { name: 'Brother Corbulo (Legends)', points: [75], models: [1] },
    tycho: { name: 'Captain Tycho (Legends)', points: [75], models: [1] },
    mephiston: { name: 'Chief Librarian Mephiston', points: [125], models: [1] },
    dante: { name: 'Commander Dante', points: [130], models: [1] },
    lem: { name: 'Lemartes', points: [110], models: [1] },
    sanguinor: { name: 'The Sanguinor', points: [140], models: [1] },
    capBA: { name: 'Blood Angels Captain', points: [80], models: [1] },
    capDC: { name: 'Death Company Captain', points: [70], models: [1] },
    capDCJ: { name: 'Death Company Captain with Jump Pack', points: [85], models: [1] },
    sangP: { name: 'Sanguinary Priest', points: [90], models: [1] },
    sangPJ: { name: 'Sanguinary Priest with Jump Pack (Legends)', points: [100], models: [1] },
    asmo: { name: 'Asmodai', points: [70], models: [1] },
    azrael: { name: 'Azrael', points: [115], models: [1] },
    ezek: { name: 'Ezekiel', points: [75], models: [1] },
    laz: { name: 'Lazarus', points: [70], models: [1] },
    tor: { name: "Tor Garadon", points: [90], models: [1] },
    iron: { name: 'Iron Father Ferrios', points: [95], models: [1] },
    kayv: { name: 'Kayvaan Shrike', points: [100], models: [1] },
    adrax: { name: 'Adrax Agatone', points: [85], models: [1] },
    vulcan: { name: "Vulcan He'stan", points: [100], models: [1] },
    krom: { name: "Krom Dragongaze", points: [65], models: [1] },
    lukas: { name: "Lukas the Trickster", points: [50], models: [1] },
    ragnar: { name: "Ragnar Blackmane", points: [90], models: [1] },
    ulrik: { name: "Ulrik the Slayer", points: [70], models: [1] },
    ironP: { name: "Iron Priest", points: [60], models: [1] },
    wolfG: { name: "Wolf Guard Pack Leader", points: [30], models: [1] },
    wolfGJP: { name: "Wolf Guard Pack Leader with Jump Pack", points: [35], models: [1] },
    sicarius: { name: "Captain Sicarius", points: [85], models: [1] },
    cassius: { name: "Captain Cassius (Legends)", points: [80], models: [1] },
    tig: { name: "Chief Librarian Tigurius", points: [75], models: [1] },
    marn: { name: "Marneus Calgar", points: [185], models: [1] },
    sgtCh: { name: "Sergeant Chronus (Legends)", points: [75], models: [1] },
    sgtTe: { name: "Sergeant Telion (Legends)", points: [70], models: [1] },
    uriel: { name: "Uriel Ventris", points: [75], models: [1] },
    kors: { name: "Kor'sarro Khan", points: [70], models: [1] },
    pedro: { name: "Pedro Kantor", points: [90], models: [1] },
    lion: { name: "Lion El'Johnson", points: [285], models: [1] },
    roboute: { name: "Roboute Guilliman", points: [285], models: [1] },
  },
  {
    assInt: { name: "Assault Intercessor Squad", points: [75, 150], models: [5, 10] },
    assInt2: { name: "Assault Intercessor Squad", points: [75, 150], models: [5, 10] },
    assInt3: { name: "Assault Intercessor Squad", points: [75, 150], models: [5, 10] },
    bloodC: { name: "Blood Claws", points: [70, 140], models: [5, 10] },
    bloodC2: { name: "Blood Claws", points: [70, 140], models: [5, 10] },
    bloodC3: { name: "Blood Claws", points: [70, 140], models: [5, 10] },
    cru: { name: "Crusader Squad", points: [85, 150], models: [5, 10] },
    cru2: { name: "Crusader Squad", points: [85, 150], models: [5, 10] },
    cru3: { name: "Crusader Squad", points: [85, 150], models: [5, 10] },
    deathW: { name: "Deathwatch Veterans", points: [100, 200], models: [5, 10] },
    deathW2: { name: "Deathwatch Veterans", points: [100, 200], models: [5, 10] },
    deathW3: { name: "Deathwatch Veterans", points: [100, 200], models: [5, 10] },
    grey: { name: "Grey Hunters", points: [85, 170], models: [5, 10] },
    grey2: { name: "Grey Hunters", points: [85, 170], models: [5, 10] },
    grey3: { name: "Grey Hunters", points: [85, 170], models: [5, 10] },
    hInt: { name: "Heavy Intercessor Squad", points: [95, 190], models: [5, 10] },
    hInt2: { name: "Heavy Intercessor Squad", points: [95, 190], models: [5, 10] },
    hInt3: { name: "Heavy Intercessor Squad", points: [95, 190], models: [5, 10] },
    int: { name: "Intercessor Squad", points: [80, 160], models: [5, 10] },
    int2: { name: "Intercessor Squad", points: [80, 160], models: [5, 10] },
    int3: { name: "Intercessor Squad", points: [80, 160], models: [5, 10] },
    primCru: { name: "Primaris Crusader Squad", points: [150], models: [10] },
    primCru2: { name: "Primaris Crusader Squad", points: [150], models: [10] },
    primCru3: { name: "Primaris Crusader Squad", points: [150], models: [10] },
    tac: { name: "Tactical Squad", points: [140], models: [10] },
    tac2: { name: "Tactical Squad", points: [140], models: [10] },
    tac3: { name: "Tactical Squad", points: [140], models: [10] },
  },
  {
    agg: { name: "Aggressor Squad", points: [120], models: [3] }, //
    bla: { name: "Bladeguard Veteran Squad", points: [90], models: [3] },//
    comHer: { name: "Company Heroes", points: [95], models: [4] }, //
    deathCI: { name: "Death Company Intercessors", points: [90, 180], models: [5, 10] }, //
    deathCM: { name: "Death Company Marines", points: [90, 180], models: [5, 10] }, //
    inf: { name: "Infernus Squad", points: [80, 160], models: [5, 10] }, //
    inner: { name: "Inner Circle Companions", points: [190], models: [3] }, //
    primSword: { name: "Primaris Sword Bretheren", points: [150, 300], models: [5, 10] }, //
    stern: { name: "Sternguard Veteran Squad", points: [90, 180], models: [5, 10] }, //
    wolfGuard: { name: "Wolf Guard", points: [85, 170], models: [5, 10] },
    wulfen: { name: "Wulfen", points: [90, 180], models: [5, 10] },
  },
  {
    erad: { name: "Eradicator Squad", points: [100], models: [3] },
    hellb: { name: "Hellblaster Squad", points: [115], models: [5] },
  },
  {
    assIntJP: { name: "Assault Intercessors with Jump Packs", points: [90, 160], models: [5, 10] }, //
    deathCJP: { name: "Death Company Marines with Jump Packs", points: [130, 240], models: [5, 10] }, //
    fenW: { name: "Fenrisian Wolves", points: [30], models: [5] }, //
    sanGu: { name: "Sanguinary Guard", points: [135, 270], models: [3, 6] }, //
    skyc: { name: "Skyclaws", points: [90, 165], models: [5, 10] }, //
    vangJP: { name: "Vanguard Veterans with Jump Packs", points: [110, 220], models: [5, 10] }, //
  },
]
