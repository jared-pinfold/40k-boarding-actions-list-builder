import { UnitData } from '../../models/models'

const units = {
  breacherTeam: { name: 'Breacher Team', points: [100], models: [10] },
  cadreFireblade: { name: 'Cadre Fireblade', points: [50], models: [1] },
  crisisFireknifeBattlesuits: {
    name: 'Crisis Fireknife Battlesuits',
    points: [130],
    models: [3],
  },
  crisisStarscytheBattlesuits: {
    name: 'Crisis Starscythe Battlesuits',
    points: [110],
    models: [3],
  },
  crisisSunforgeBattlesuits: {
    name: 'Crisis Sunforge Battlesuits',
    points: [150],
    models: [3],
  },
  darkstrider: { name: 'Darkstrider', points: [60], models: [1] },
  etherial: { name: 'Etherial', points: [50], models: [1] },
  krootCarnivores: { name: 'Kroot Carnivores', points: [65], models: [10] },
  krootFarstalkers: { name: 'Kroot Farstalkers', points: [85], models: [12] },
  krootFleshShaper: { name: 'Kroot Flesh Shaper', points: [45], models: [1] },
  krootHounds: { name: 'Kroot Hounds', points: [40], models: [5] },
  krootoxRiders: { name: 'Krootox Riders', points: [40], models: [1] },
  krootTrailShaper: { name: 'Kroot Trail Shaper', points: [55], models: [1] },
  krootWarShaper: { name: 'Kroot War Shaper', points: [50], models: [1] },
  pathfinderTeam: {
    name: 'Pathfinder Team',
    points: [45, 90],
    models: [5, 10],
  },
  stealthBattlesuits: {
    name: 'Stealth Battlesuits',
    points: [60],
    models: [3],
  },
  strikeTeam: { name: 'Strike Team', points: [75], models: [10] },
  vespidStingwings: { name: 'Vespid Stingwings', points: [65], models: [5] },
}

export const krootRaidingPartyUnits: Record<string, UnitData>[] = [
  {
    kFS: units.krootFleshShaper,
    kTS: units.krootTrailShaper,
    kWS: units.krootWarShaper,
  },
  {
    kCarn1: units.krootCarnivores,
    kCarn2: units.krootCarnivores,
    kCarn3: units.krootCarnivores,
  },
  {
    kF: {
      ...units.krootFarstalkers,
      notMoreThanKrootCarnivores: true,
      asterisk: true,
    },
    kH: {
      ...units.krootHounds,
      notMoreThanKrootCarnivores: true,
      asterisk: true,
    },
    kR: {
      ...units.krootoxRiders,
      notMoreThanKrootCarnivores: true,
      asterisk: true,
    },
  },
]

export const starfireCadreUnits: Record<string, UnitData>[] = [
  {
    cF: units.cadreFireblade,
    d: units.darkstrider,
    e: units.etherial,
  },
  {
    bT1: units.breacherTeam,
    bT2: units.breacherTeam,
    bT3: units.breacherTeam,
    pT1: units.pathfinderTeam,
    pT2: units.pathfinderTeam,
    pT3: units.pathfinderTeam,
    sT1: units.strikeTeam,
    sT2: units.strikeTeam,
    sT3: units.strikeTeam,
  },
  {
    kC: units.krootCarnivores,
    sB: units.stealthBattlesuits,
    vS: units.vespidStingwings,
  },
  {
    cFB: units.crisisFireknifeBattlesuits,
    cSB: units.crisisStarscytheBattlesuits,
    cSuB: units.crisisSunforgeBattlesuits,
  },
]
