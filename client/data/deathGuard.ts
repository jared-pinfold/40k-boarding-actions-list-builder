import { UnitData } from '../../models/models'

const units = {
  blightlordTerminators: {
    name: 'Blightlord Terminators',
    points: [155],
    models: [5],
  },
  deathGuardChaosSpawn: {
    name: 'Death Guard Chaos Spawn',
    points: [70],
    models: [2],
  },
  deathGuardTerminatorSorcerer: {
    name: 'Death Guard Terminator Sorcerer',
    points: [70],
    models: [1],
  },
  deathshroudTerminators: {
    name: 'Deathshroud Terminators',
    points: [110],
    models: [3],
  },
  lordOfContagion: { name: 'Lord of Contagion', points: [80], models: [1] },
  lordOfVirulence: { name: 'Lord of Virulence', points: [80], models: [1] },
  typhus: { name: 'Typhus', points: [80], models: [1] },
}

export const archContaminatorsUnits: Record<string, UnitData>[] = [
  {
    dGTS: units.deathGuardTerminatorSorcerer,
    lOC: units.lordOfContagion,
    lOV: units.lordOfVirulence,
  },
  {
    bT: units.blightlordTerminators,
    dGCS: units.deathGuardChaosSpawn,
    dT: units.deathshroudTerminators,
  },
]
