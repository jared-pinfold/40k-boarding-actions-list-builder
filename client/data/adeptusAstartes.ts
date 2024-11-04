import { UnitData } from '../../models/models'
// x: {name: "x", points: 0, models: []},

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
