import { UnitData } from '../../models/models'

const units = {
  abaddonTheDespoiler: {
    name: 'Abaddon the Despoiler',
    points: [280],
    models: [1],
  },
  accursedCultists: { name: 'Accursed Cultists', points: [90], models: [8] },
  chaosLord: { name: 'Chaos Lord', points: [90], models: [1] },
  chaosLordInTerminatorArmour: {
    name: 'Chaos Lord in Terminator Armour',
    points: [95],
    models: [1],
  },
  chaosLordWithJumpPack: {
    name: 'Chaos Lord with Jump Pack',
    points: [90],
    models: [1],
  },
  chaosSpawn: { name: 'Chaos Spawn', points: [70], models: [2] },
  chaosTerminatorSquad: {
    name: 'Chaos Terminator Squad',
    points: [180, 360],
    models: [5, 10],
  },
  chosen: { name: 'Chosen', points: [125], models: [5] },
  cultistFirebrand: { name: 'Cultist Firebrand', points: [45], models: [1] },
  cultistMob: { name: 'Cultist Mob', points: [50], models: [10] },
  cypher: { name: 'Cypher', points: [90], models: [1] },
  darkApostle: { name: 'Dark Apostle', points: [75], models: [3] },
  darkCommune: { name: 'Dark Commune', points: [80], models: [4] },
  fabiusBile: { name: 'Fabius Bile', points: [85], models: [2] },
  fellgorBeastmen: { name: 'Fellgor Beastmen', points: [85], models: [10] },
  haarkenWorldclaimer: {
    name: 'Haarken Worldclaimer',
    points: [90],
    models: [1],
  },
  huronBlackheart: { name: 'Huron Blackheart', points: [80], models: [1] },
  legionaries: { name: 'Legionaries', points: [90, 170], models: [5, 10] },
  masterofExecutions: {
    name: 'Master of Executions',
    points: [80],
    models: [1],
  },
  masterofPossession: {
    name: 'Master of Possession',
    points: [70],
    models: [1],
  },
  possessed: { name: 'Possessed', points: [120], models: [5] },
  raptors: { name: 'Raptors', points: [90, 170], models: [5, 10] },
  sorcerer: { name: 'Sorcerer', points: [60], models: [1] },
  sorcererInTerminatorArmour: {
    name: 'Sorcerer in Terminator Armour',
    points: [80],
    models: [1],
  },
  traitorEnforcer: { name: 'Traitor Enforcer', points: [65], models: [2] },
  traitorGuardsmenSquad: {
    name: 'Traitor Guardsmen Squad',
    points: [70],
    models: [10],
  },
  warpTalons: { name: 'Warp Talons', points: [125, 270], models: [5, 10] },
}

export const championsOfChaosUnits: Record<string, UnitData>[] = [
  {
    abaddon: units.abaddonTheDespoiler,
    cLord: units.chaosLordInTerminatorArmour,
    sorcerer: units.sorcererInTerminatorArmour,
  },
  {
    cTerm1: units.chaosTerminatorSquad,
    cTerm2: units.chaosTerminatorSquad,
    chosen1: units.chosen,
    chosen2: units.chosen,
  },
  {
    spawn: units.chaosSpawn,
  },
]

export const infernalReaversUnits: Record<string, UnitData>[] = [
  {
    abbadon: units.abaddonTheDespoiler,
    chaosLord: units.chaosLord,
    chaosLordT: units.chaosLordInTerminatorArmour,
    chaosLordJP: units.chaosLordWithJumpPack,
    cypher: units.cypher,
    darkA: units.darkApostle,
    fabius: units.fabiusBile,
    haarken: units.haarkenWorldclaimer,
    huron: units.huronBlackheart,
    masterE: units.masterofExecutions,
    masterP: units.masterofPossession,
    sorcerer: units.sorcerer,
    sorcererT: units.sorcererInTerminatorArmour,
  },
  {
    cultistF: units.cultistFirebrand,
    darkCom: units.darkCommune,
    traitorEnf: units.traitorEnforcer,
  },
  {
    accursed1: {
      ...units.accursedCultists,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    accursed2: {
      ...units.accursedCultists,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    accursed3: {
      ...units.accursedCultists,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    cultistM1: {
      ...units.cultistMob,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    cultistM2: {
      ...units.cultistMob,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    cultistM3: {
      ...units.cultistMob,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    fellgor1: {
      ...units.fellgorBeastmen,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    fellgor2: {
      ...units.fellgorBeastmen,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    fellgor3: {
      ...units.fellgorBeastmen,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    legion1: units.legionaries,
    legion2: units.legionaries,
    legion3: units.legionaries,
    traitorG1: {
      ...units.traitorGuardsmenSquad,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    traitorG2: {
      ...units.traitorGuardsmenSquad,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
    traitorG3: {
      ...units.traitorGuardsmenSquad,
      asterisk: true,
      notMoreThanLegionaries: true,
    },
  },
  {
    chaosTerm: units.chaosTerminatorSquad,
    chosen: units.chosen,
  },
  {
    chaosSp: units.chaosSpawn,
    poss: units.possessed,
    rapt: units.raptors,
    warpT: units.warpTalons,
  },
]
