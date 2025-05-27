import { UnitData } from '../../models/models'

const units = {
  eightbound: { name: 'Eightbound', points: [150], models: [3] },
  exaltedEightbound: { name: 'Exalted Eightbound', points: [160], models: [3] },
  jackals: { name: 'Jackals', points: [65], models: [10] },
  kharnTheBetrayer: { name: 'Khârn the Betrayer', points: [100], models: [1] },
  khorneBerzerkers: {
    name: 'Khorne Berzerkers',
    points: [90, 180],
    models: [5, 10],
  },
  worldEatersChaosSpawn: {
    name: 'World Eaters Chaos Spawn',
    points: [80],
    models: [2],
  },
  worldEatersMasterOfExecutions: {
    name: 'World Eaters Master of Executions',
    points: [60],
    models: [1],
  },
  worldEatersTerminatorSquad: {
    name: 'World Eaters Terminator Squad',
    points: [185, 370],
    models: [5, 10],
  },
}

export const skullswornUnits: Record<string, UnitData>[] = [
  {
    kharn: units.kharnTheBetrayer,
    worldEMOE: units.worldEatersMasterOfExecutions,
  },
  {
    e1: units.eightbound,
    e2: units.eightbound,
    eE1: units.exaltedEightbound,
    eE2: units.exaltedEightbound,
    wETS1: units.worldEatersTerminatorSquad,
    wETS2: units.worldEatersTerminatorSquad,
  },
]

export const boardingButchersUnits: Record<string, UnitData>[] = [
  {
    kharn: units.kharnTheBetrayer,
    worldEMOE: units.worldEatersMasterOfExecutions,
  },
  {
    kBerz1: units.khorneBerzerkers,
    kBerz2: units.khorneBerzerkers,
    kBerz3: units.khorneBerzerkers,
    jack1: {
      ...units.jackals,
      asterisk: true,
      notMoreThanKhorneBerzerkers: true,
    },
    jack2: {
      ...units.jackals,
      asterisk: true,
      notMoreThanKhorneBerzerkers: true,
    },
    jack3: {
      ...units.jackals,
      asterisk: true,
      notMoreThanKhorneBerzerkers: true,
    },
  },
  {
    e: units.eightbound,
    eE: units.exaltedEightbound,
  },
  {
    wECS: units.worldEatersChaosSpawn,
    wETS: units.worldEatersTerminatorSquad,
  },
]
