import { UnitData } from '../../models/models'

const blackTemplars: Record<string, UnitData> = {
  castellan: { name: 'Castellan', points: [60], models: [1] },
  ChaplainGrimaldus: { name: 'Chaplain Grimaldus', points: [130], models: [4] },
  crusaderSquad: { name: 'Crusader Squad', points: [85, 150], models: [5, 10] },
  highMarshalHelbrecht: {
    name: 'High Marshal Helbrecht',
    points: [130],
    models: [1],
  },
  marshal: { name: 'Marshal', points: [75], models: [1] },
  primarisCrusaderSquad: {
    name: 'Primaris Crusader Squad',
    points: [150],
    models: [10],
  },
  primarisSwordBretheren: {
    name: 'Primaris Sword Bretheren',
    points: [150, 300],
    models: [5, 10],
  },
  theEmperorsChampion: {
    name: "The Emperor's Champion",
    points: [75],
    models: [1],
  },
}

const bloodAngels: Record<string, UnitData> = {
  astorath: { name: 'Astorath', points: [105], models: [1] },
  bloodAngelsCaptain: {
    name: 'Blood Angels Captain',
    points: [80],
    models: [1],
  },
  chiefLibrarianMephiston: {
    name: 'Chief Librarian Mephiston',
    points: [135],
    models: [1],
  },
  commanderDante: { name: 'Commander Dante', points: [130], models: [1] },
  deathCompanyCaptain: {
    name: 'Death Company Captain',
    points: [70],
    models: [1],
  },
  deathCompanyCaptainWithJumpPack: {
    name: 'Death Company Captain with Jump Pack',
    points: [75],
    models: [1],
  },
  deathCompanyIntercessors: {
    name: 'Death Company Intercessors',
    points: [85, 160],
    models: [5, 10],
  },
  deathCompanyMarines: {
    name: 'Death Company Marines',
    points: [85, 160],
    models: [5, 10],
  },
  deathCompanyMarinesWithJumpPacks: {
    name: 'Death Company Marines with Jump Packs',
    points: [130, 240],
    models: [5, 10],
  },
  lemartes: { name: 'Lemartes', points: [110], models: [1] },
  sanguinaryGuard: {
    name: 'Sanguinary Guard',
    points: [130, 260],
    models: [3, 6],
  },
  sanguinaryPriest: { name: 'Sanguinary Priest', points: [90], models: [1] },
  theSanguinor: { name: 'The Sanguinor', points: [140], models: [1] },
}

const darkAngels: Record<string, UnitData> = {
  asmodai: { name: 'Asmodai', points: [70], models: [1] },
  azrael: { name: 'Azrael', points: [115], models: [1] },
  belial: { name: 'Belial', points: [85], models: [1] },
  deathwingKnights: {
    name: 'Deathwing Knights',
    points: [250],
    models: [5],
  },
  deathwingTerminators: {
    name: 'Deathwing Terminators',
    points: [180, 360],
    models: [5, 10],
  },
  ezekiel: { name: 'Ezekiel', points: [75], models: [1] },
  innerCircleCompanions: {
    name: 'Inner Circle Companions',
    points: [90],
    models: [3],
  },
  lazarus: { name: 'Lazarus', points: [70], models: [1] },
  lionEljohnson: { name: "Lion El'Johnson", points: [315], models: [1] },
}

const deathwatch: Record<string, UnitData> = {
  deathwatchTerminators: {
    name: 'Deathwatch Terminators',
    points: [190],
    models: [5],
  },
  deathwatchVeterans: {
    name: 'Deathwatch Veterans',
    points: [100, 200],
    models: [5, 10],
  },
}

const spaceWolves: Record<string, UnitData> = {
  arjacRockfist: { name: 'Arjac Rockfist', points: [95], models: [1] },
  bloodClaws: { name: 'Blood Claws', points: [70, 140], models: [5, 10] },
  fenrisianWolves: { name: 'Fenrisian Wolves', points: [30], models: [5] },
  greyHunters: { name: 'Grey Hunters', points: [85, 170], models: [5, 10] },
  houndsOfMorcai: {
    name: 'Hounds of Morcai',
    points: [80, 160],
    models: [5, 10],
  },
  ironPriest: { name: 'Iron Priest', points: [60], models: [1] },
  kromDragongaze: { name: 'Krom Dragongaze', points: [65], models: [1] },
  loganGrimnar: { name: 'Logan Grimnar', points: [115], models: [1] },
  lukasTheTrickster: { name: 'Lukas the Trickster', points: [50], models: [1] },
  njalStormcaller: { name: 'Njal Stormcaller', points: [85], models: [1] },
  ragnarBlackmane: { name: 'Ragnar Blackmane', points: [90], models: [1] },
  skyclaws: { name: 'Skyclaws', points: [90, 165], models: [5, 10] },
  ulrikTheSlayer: { name: 'Ulrik the Slayer', points: [70], models: [1] },
  wolfGuard: { name: 'Wolf Guard', points: [85, 170], models: [5, 10] },
  wolfGuardBattleLeaderInTerminatorArmour: {
    name: 'Wolf Guard Battle Leader in Terminator Armour',
    points: [75],
    models: [1],
  },
  wolfGuardPackLeader: {
    name: 'Wolf Guard Pack Leader',
    points: [30],
    models: [1],
  },
  wolfGuardPackLeaderInTerminatorArmour: {
    name: 'Wolf Guard Pack Leader in Terminator Armour',
    points: [40],
    models: [1],
  },
  wolfGuardPackLeaderWithJumpPack: {
    name: 'Wolf Guard Pack Leader with Jump Pack',
    points: [35],
    models: [1],
  },
  wulfen: { name: 'Wulfen', points: [95, 190], models: [5, 10] },
}

const units: Record<string, UnitData> = {
  ...blackTemplars,
  ...bloodAngels,
  ...darkAngels,
  ...deathwatch,
  ...spaceWolves,
  adraxAgatone: { name: 'Adrax Agatone', points: [85], models: [1] },
  aggressorSquad: { name: 'Aggressor Squad', points: [120], models: [3] },
  ancient: { name: 'Ancient', points: [50], models: [1] },
  apothecary: { name: 'Apothecary', points: [50], models: [1] },
  apothecaryBiologis: {
    name: 'Apothecary Biologis',
    points: [70],
    models: [1],
  },
  assaultIntercessorSquad: {
    name: 'Assault Intercessor Squad',
    points: [75, 150],
    models: [5, 10],
  },
  assaultIntercessorsWithJumpPacks: {
    name: 'Assault Intercessors with Jump Packs',
    points: [90, 160],
    models: [5, 10],
  },
  bladeguardAncient: { name: 'Bladeguard Ancient', points: [45], models: [1] },
  bladeguardVeteranSquad: {
    name: 'Bladeguard Veteran Squad',
    points: [80],
    models: [3],
  }, //
  captain: { name: 'Captain', points: [80], models: [1] },
  captainInGravisArmour: {
    name: 'Captain in Gravis Armour',
    points: [80],
    models: [1],
  },
  captainInPhobosArmour: {
    name: 'Captain in Phobos Armour',
    points: [70],
    models: [1],
  },
  captainSicarius: { name: 'Captain Sicarius', points: [85], models: [1] },
  captainWithJumpPack: {
    name: 'Captain with Jump Pack',
    points: [85],
    models: [1],
  },
  chaplain: { name: 'Chaplain', points: [60], models: [1] },
  chaplainWithJumpPack: {
    name: 'Chaplain with Jump Pack',
    points: [75],
    models: [1],
  },
  chiefLibrarianTigurius: {
    name: 'Chief Librarian Tigurius',
    points: [75],
    models: [1],
  },
  companyHeroes: { name: 'Company Heroes', points: [105], models: [4] },
  darnathLysander: { name: 'Darnath Lysander', points: [100], models: [1] },
  eradicatorSquad: { name: 'Eradicator Squad', points: [100], models: [3] },
  heavyIntercessorSquad: {
    name: 'Heavy Intercessor Squad',
    points: [110, 220],
    models: [5, 10],
  },
  hellblasterSquad: { name: 'Hellblaster Squad', points: [115], models: [5] },
  incursorSquad: { name: 'Incursor Squad', points: [80, 160], models: [5, 10] },
  infernusSquad: { name: 'Infernus Squad', points: [90, 180], models: [5, 10] },
  infiltratorsSquad: {
    name: 'Infiltrators Squad',
    points: [100, 200],
    models: [5, 10],
  },
  intercessorSquad: {
    name: 'Intercessor Squad',
    points: [80, 160],
    models: [5, 10],
  },
  ironFatherFerrios: { name: 'Iron Father Ferrios', points: [95], models: [1] },
  judiciar: { name: 'Judiciar', points: [70], models: [1] },
  kayvaanShrike: { name: 'Kayvaan Shrike', points: [100], models: [1] },
  korsarroKhan: { name: "Kor'sarro Khan", points: [70], models: [1] },
  librarian: { name: 'Librarian', points: [65], models: [1] },
  librarianInPhobosArmour: {
    name: 'Librarian in Phobos Armour',
    points: [70],
    models: [1],
  },
  lieutenant: { name: 'Lieutenant', points: [65], models: [1] },
  lieutenantInPhobosArmour: {
    name: 'Lieutenant in Phobos Armour',
    points: [55],
    models: [1],
  },
  lieutenantInReiverArmour: {
    name: 'Lieutenant in Reiver Armour',
    points: [55],
    models: [1],
  },
  lieutenantWithCombiWeapon: {
    name: 'Lieutenant with Combi-weapon',
    points: [70],
    models: [1],
  },
  marneusCalgar: { name: 'Marneus Calgar', points: [210], models: [1] },
  pedroKantor: { name: 'Pedro Kantor', points: [90], models: [1] },
  reiversSquad: { name: 'Reivers Squad', points: [80, 160], models: [5, 10] },
  robouteGuilliman: { name: 'Roboute Guilliman', points: [345], models: [1] },
  sternguardVeteranSquad: {
    name: 'Sternguard Veteran Squad',
    points: [100, 200],
    models: [5, 10],
  },
  tacticalSquad: { name: 'Tactical Squad', points: [140], models: [10] },
  techmarine: { name: 'Techmarine', points: [55], models: [1] },
  terminatorAncient: { name: 'Terminator Ancient', points: [75], models: [1] },
  terminatorAssaultSquad: {
    name: 'Terminator Assault Squad',
    points: [180, 360],
    models: [5, 10],
  },
  terminatorCaptain: { name: 'Terminator Captain', points: [95], models: [1] },
  terminatorChaplain: {
    name: 'Terminator Chaplain',
    points: [75],
    models: [1],
  },
  terminatorLibrarian: {
    name: 'Terminator Librarian',
    points: [75],
    models: [1],
  },
  terminatorSquad: {
    name: 'Terminator Squad',
    points: [170, 340],
    models: [5, 10],
  },
  torGaradon: { name: 'Tor Garadon', points: [90], models: [1] },
  urielVentris: { name: 'Uriel Ventris', points: [95], models: [1] },
  vanguardVeteransWithJumpPacks: {
    name: 'Vanguard Veterans with Jump Packs',
    points: [110, 220],
    models: [5, 10],
  },
  vulcanHestan: { name: "Vulcan He'stan", points: [100], models: [1] },
}

export const terminatorAssaultUnits: Record<string, UnitData>[] = [
  {
    arjac: units.arjacRockfist,
    belial: units.belial,
    darnath: units.darnathLysander,
    logan: units.loganGrimnar,
    njal: units.njalStormcaller,
    tAncient: units.terminatorAncient,
    tCaptain: units.terminatorCaptain,
    tChaplain: units.terminatorChaplain,
    tLibrarian: units.terminatorLibrarian,
    wgBattleLeader: units.wolfGuardBattleLeaderInTerminatorArmour,
    wgPackLeader: units.wolfGuardPackLeaderInTerminatorArmour,
  },
  {
    deathwingKnights1: units.deathwingKnights,
    deathwingKnights2: units.deathwingKnights,
    deathwingTerminators1: units.deathwingTerminators,
    deathwingTerminators2: units.deathwingTerminators,
    deathwatchTerminators1: units.deathwatchTerminators,
    deathwatchTerminators2: units.deathwatchTerminators,
    tAssault1: units.terminatorAssaultSquad,
    tAssault2: units.terminatorAssaultSquad,
    terminators1: units.terminatorSquad,
    terminators2: units.terminatorSquad,
  },
]

export const pilumStrikeUnits: Record<string, UnitData>[] = [
  {
    kayvaan: units.kayvaanShrike,
    ltReiver: units.lieutenantInReiverArmour,
    ltCombi: units.lieutenantWithCombiWeapon,
    captainPh: units.captainInPhobosArmour,
    librarianPh: units.librarianInPhobosArmour,
    ltPh: units.lieutenantInPhobosArmour,
  },
  {
    inc1: units.incursorSquad,
    inc2: units.incursorSquad,
    inc3: units.incursorSquad,
    inf1: units.infiltratorsSquad,
    inf2: units.infiltratorsSquad,
    inf3: units.infiltratorsSquad,
    r1: units.reiversSquad,
    r2: units.reiversSquad,
    r3: units.reiversSquad,
  },
  {
    hounds: units.houndsOfMorcai,
  },
]

export const boardingStrikeUnits: Record<string, UnitData>[] = [
  {
    adrax: units.adraxAgatone,
    ancient: units.ancient,
    apothecary: units.apothecary,
    apothecaryBio: units.apothecaryBiologis,
    asmo: units.asmodai,
    astorath: units.astorath,
    azrael: units.azrael,
    bgAncient: units.bladeguardAncient,
    capBA: units.bloodAngelsCaptain,
    captain: units.captain,
    captainG: units.captainInGravisArmour,
    captainP: units.captainInPhobosArmour,
    sicarius: units.captainSicarius,
    captainJ: units.captainWithJumpPack,
    castellan: units.castellan,
    chap: units.chaplain,
    gimald: units.ChaplainGrimaldus,
    chapJ: units.chaplainWithJumpPack,
    mephiston: units.chiefLibrarianMephiston,
    tig: units.chiefLibrarianTigurius,
    dante: units.commanderDante,
    capDC: units.deathCompanyCaptain,
    capDCJ: units.deathCompanyCaptainWithJumpPack,
    ezek: units.ezekiel,
    helb: units.highMarshalHelbrecht,
    iron: units.ironFatherFerrios,
    ironP: units.ironPriest,
    judiciar: units.judiciar,
    kayv: units.kayvaanShrike,
    kors: units.korsarroKhan,
    krom: units.kromDragongaze,
    laz: units.lazarus,
    lem: units.lemartes,
    lib: units.librarian,
    libP: units.librarianInPhobosArmour,
    lt: units.lieutenant,
    ltPh: units.lieutenantInPhobosArmour,
    ltR: units.lieutenantInReiverArmour,
    ltC: units.lieutenantWithCombiWeapon,
    lion: units.lionEljohnson,
    lukas: units.lukasTheTrickster,
    marn: units.marneusCalgar,
    marsh: units.marshal,
    pedro: units.pedroKantor,
    ragnar: units.ragnarBlackmane,
    roboute: units.robouteGuilliman,
    sangP: units.sanguinaryPriest,
    tech: units.techmarine,
    empChamp: units.theEmperorsChampion,
    sanguinor: units.theSanguinor,
    tor: units.torGaradon,
    ulrik: units.ulrikTheSlayer,
    uriel: units.urielVentris,
    vulcan: units.vulcanHestan,
    wolfG: units.wolfGuardPackLeader,
    wolfGJP: units.wolfGuardPackLeaderWithJumpPack,
  },
  {
    assInt1: units.assaultIntercessorSquad,
    assInt2: units.assaultIntercessorSquad,
    assInt3: units.assaultIntercessorSquad,
    bloodC1: units.bloodClaws,
    bloodC2: units.bloodClaws,
    bloodC3: units.bloodClaws,
    cru1: units.crusaderSquad,
    cru2: units.crusaderSquad,
    cru3: units.crusaderSquad,
    deathW1: units.deathwatchVeterans,
    deathW2: units.deathwatchVeterans,
    deathW3: units.deathwatchVeterans,
    grey1: units.greyHunters,
    grey2: units.greyHunters,
    grey3: units.greyHunters,
    hInt1: units.heavyIntercessorSquad,
    hInt2: units.heavyIntercessorSquad,
    hInt3: units.heavyIntercessorSquad,
    int1: units.intercessorSquad,
    int2: units.intercessorSquad,
    int3: units.intercessorSquad,
    primCru1: units.primarisCrusaderSquad,
    primCru2: units.primarisCrusaderSquad,
    primCru3: units.primarisCrusaderSquad,
    tac1: units.tacticalSquad,
    tac2: units.tacticalSquad,
    tac3: units.tacticalSquad,
  },
  {
    agg: units.aggressorSquad,
    bla: units.bladeguardVeteranSquad,
    comHer: units.companyHeroes,
    deathCI: units.deathCompanyIntercessors,
    deathCM: units.deathCompanyMarines,
    inf: units.infernusSquad,
    inner: units.innerCircleCompanions,
    primSword: units.primarisSwordBretheren,
    stern: units.sternguardVeteranSquad,
    wolfGuard: units.wolfGuard,
    wulfen: units.wulfen,
  },
  {
    erad: units.eradicatorSquad,
    hellb: units.hellblasterSquad,
  },
  {
    assIntJP: units.assaultIntercessorsWithJumpPacks,
    deathCJP: units.deathCompanyMarinesWithJumpPacks,
    fenW: units.fenrisianWolves,
    sanGu: units.sanguinaryGuard,
    skyc: units.skyclaws,
    vangJP: units.vanguardVeteransWithJumpPacks,
  },
]
