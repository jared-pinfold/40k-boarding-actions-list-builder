import { UnitData } from '../../models/models'

const units = {
  eightbound: { name: 'Eightbound', points: [140], models: [3] },
  exaltedEightbound: { name: 'Exalted Eightbound', points: [155], models: [3] },
  kharnTheBetrayer: { name: 'Khârn the Betrayer', points: [100], models: [1] },
  worldEatersMasterOfExecutions: {
    name: 'World Eaters Master of Executions',
    points: [110],
    models: [1],
  },
  worldEatersTerminatorSquad: {
    name: 'World Eaters Terminator Squad',
    points: [180, 360],
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
