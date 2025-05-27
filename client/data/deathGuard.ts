import { UnitData } from '../../models/models'

const units = {
  blightlordTerminators: {
    name: 'Blightlord Terminators',
    points: [185],
    models: [5],
  },
  biologusPutrifier: {
    name: 'BiologusPutrifier',
    points: [45],
    models: [1],
  },
  // deathGuardChaosLord: { ** Not available in current codex
  //   name: 'Death Guard Chaos Lord',
  //   points: [65],
  //   models: [1],
  // },
  deathGuardChaosSpawn: {
    name: 'Death Guard Chaos Spawn',
    points: [80],
    models: [2],
  },
  // deathGuardCultists: { ** Not available in current codex
  //   name: 'Death Guard Cultists',
  //   points: [50],
  //   models: [10],
  // },
  deathGuardIconBearer: {
    name: 'Death Guard Icon Bearer',
    points: [45],
    models: [1],
  },
  // deathGuardTerminatorSorcerer: { ** Not available in current codex
  //   name: 'Death Guard Terminator Sorcerer',
  //   points: [70],
  //   models: [1],
  // },
  deathshroudTerminators: {
    name: 'Deathshroud Terminators',
    points: [140],
    models: [3],
  },
  foulBlightspawn: { name: 'Foul Blightspawn', points: [60], models: [1] },
  lordOfContagion: { name: 'Lord of Contagion', points: [110], models: [1] },
  lordOfVirulence: { name: 'Lord of Virulence', points: [90], models: [1] },
  malignantPlaguecaster: {
    name: 'Malignant Plaguecaster',
    points: [60],
    models: [1],
  },
  noxiousBlightbringer: {
    name: 'Noxious Blightbringer',
    points: [50],
    models: [1],
  },
  plagueMarines: {
    name: 'Plague Marines',
    points: [95, 130, 190],
    models: [5, 7, 10],
  },
  plagueSurgeon: { name: 'Plague Surgeon', points: [50], models: [1] },
  poxwalkers: { name: 'Poxwalkers', points: [60], models: [10] },
  tallyman: { name: 'Tallyman', points: [40], models: [1] },
  typhus: { name: 'Typhus', points: [90], models: [1] },
}

export const archContaminatorsUnits: Record<string, UnitData>[] = [
  {
    // dGTS: units.deathGuardTerminatorSorcerer,
    lOC: units.lordOfContagion,
    lOV: units.lordOfVirulence,
    t: units.typhus,
  },
  {
    bT: units.blightlordTerminators,
    dGCS: units.deathGuardChaosSpawn,
    dT: units.deathshroudTerminators,
  },
]

export const uncleanUprisingUnits: Record<string, UnitData>[] = [
  {
    // dGCL: units.deathGuardChaosLord,
    // dGTS: units.deathGuardTerminatorSorcerer,
    lOC: units.lordOfContagion,
    lOV: units.lordOfVirulence,
    mP: units.malignantPlaguecaster,
    t: units.typhus,
  },
  {
    bP: units.biologusPutrifier,
    dGIB: units.deathGuardIconBearer,
    fB: units.foulBlightspawn,
    nB: units.noxiousBlightbringer,
    pS: units.plagueSurgeon,
    ta: units.tallyman,
  },
  {
    // dGC1: units.deathGuardCultists,
    // dGC2: units.deathGuardCultists,
    // dGC3: units.deathGuardCultists,
    p1: units.poxwalkers,
    p2: units.poxwalkers,
    p3: units.poxwalkers,
  },
  {
    dGCS: units.deathGuardChaosSpawn,
  },
]

export const vectorsOfDecayUnits: Record<string, UnitData>[] = [
  {
    // dGCL: units.deathGuardChaosLord,
    // dGTS: units.deathGuardTerminatorSorcerer,
    lOC: units.lordOfContagion,
    lOV: units.lordOfVirulence,
    mP: units.malignantPlaguecaster,
    ty: units.typhus,
  },
  {
    bP: units.biologusPutrifier,
    dGIB: units.deathGuardIconBearer,
    fB: units.foulBlightspawn,
    nB: units.noxiousBlightbringer,
    pS: units.plagueSurgeon,
    ta: units.tallyman,
  },
  {
    // dGC1: {
    //   ...units.deathGuardCultists,
    //   asterisk: true,
    //   notMoreThanPlagueMarines: true,
    // },
    // dGC2: {
    //   ...units.deathGuardCultists,
    //   asterisk: true,
    //   notMoreThanPlagueMarines: true,
    // },
    // dGC3: {
    //   ...units.deathGuardCultists,
    //   asterisk: true,
    //   notMoreThanPlagueMarines: true,
    // },
    plague1: units.plagueMarines,
    plague2: units.plagueMarines,
    plague3: units.plagueMarines,
    p1: { ...units.poxwalkers, asterisk: true, notMoreThanPlagueMarines: true },
    p2: { ...units.poxwalkers, asterisk: true, notMoreThanPlagueMarines: true },
    p3: { ...units.poxwalkers, asterisk: true, notMoreThanPlagueMarines: true },
  },
  {
    bT: units.blightlordTerminators,
    dgCS: units.deathGuardChaosSpawn,
    dT: units.deathshroudTerminators,
  },
]
