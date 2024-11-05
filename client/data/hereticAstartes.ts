import { UnitData } from '../../models/models'
// x: {name: "x", points: 0, models: []},

export const championsOfChaosUnits: Record<string, UnitData>[] = [
  {
    abaddon: { name: 'Abaddon the Despoiler', points: [280], models: [1] },
    cLord: {
      name: 'Chaos Lord in Terminator Armour',
      points: [95],
      models: [1],
    },
    sorcerer: {
      name: 'Sorcerer in Terminator Armour',
      points: [80],
      models: [1],
    },
  },
  {
    cTerm1: {
      name: 'Chaos Terminator Squad',
      points: [180, 360],
      models: [5, 10],
    },
    cTerm2: {
      name: 'Chaos Terminator Squad',
      points: [180, 360],
      models: [5, 10],
    },
    chosen1: {
      name: 'Chosen',
      points: [125],
      models: [5],
    },
    chosen2: {
      name: 'Chosen',
      points: [125],
      models: [5],
    },
  },
  {
    spawn: {
      name: 'Chaos Spawn',
      points: [70],
      models: [2],
    },
  },
]
