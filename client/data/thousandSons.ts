import { UnitData } from '../../models/models'

const units = {
  ahriman: { name: 'Ahriman', points: [140], models: [1] },
  exaltedSorcerer: { name: 'Exalted Sorcerer', points: [110], models: [1] },
  infernalMaster: { name: 'Infernal Master', points: [105], models: [1] },
  scarabOccultTerminators: {
    name: 'Scarab Occult terminators',
    points: [190, 380],
    models: [5, 10],
  },
  thousandSonsChaosSpawn: {
    name: 'Thousand Sons Chaos Spawn',
    points: [65],
    models: [2],
  },
  thousandSonsCultists: {
    name: 'Thousand Sons Cultists',
    points: [55],
    models: [10],
  },
  thousandSonsSorcerer: {
    name: 'Thousand Sons Sorcerer',
    points: [105],
    models: [1],
  },
  thousandSonsTerminatorSorcerer: {
    name: 'Thousand Sons Terminator Sorcerer',
    points: [115],
    models: [1],
  },
  tzaangors: { name: 'Tzaangors', points: [65], models: [10] },
}

export const fateseekersUnits: Record<string, UnitData>[] = [
  {
    ahriman: units.ahriman,
    exSorc: units.exaltedSorcerer,
    infMas: units.infernalMaster,
    tSTS: units.thousandSonsTerminatorSorcerer,
  },
  {
    sOT1: units.scarabOccultTerminators,
    sOT2: units.scarabOccultTerminators,
    tSCS1: units.thousandSonsChaosSpawn,
    tSCS2: units.thousandSonsChaosSpawn,
  },
]

export const devotedThrallsUnits: Record<string, UnitData>[] = [
  {
    exSo: units.exaltedSorcerer,
    inMa: units.infernalMaster,
    tSS: units.thousandSonsSorcerer,
  },
  {
    tSC1: units.thousandSonsCultists,
    tSC2: units.thousandSonsCultists,
    tSC3: units.thousandSonsCultists,
    tz1: units.tzaangors,
    tz2: units.tzaangors,
    tz3: units.tzaangors,
  },
  {
    tSCS: units.thousandSonsChaosSpawn,
  },
]
