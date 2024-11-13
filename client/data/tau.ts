import { UnitData } from '../../models/models'

const units = {
  krootCarnivores: { name: 'Kroot Carnivores', points: [65], models: [10] },
  krootFarstalkers: { name: 'Kroot Farstalkers', points: [85], models: [12] },
  krootFleshShaper: { name: 'Kroot Flesh Shaper', points: [45], models: [1] },
  krootHounds: { name: 'Kroot Hounds', points: [40], models: [5] },
  krootoxRiders: { name: 'Krootox Riders', points: [40], models: [1] },
  krootTrailShaper: { name: 'Kroot Trail Shaper', points: [55], models: [1] },
  krootWarShaper: { name: 'Kroot War Shaper', points: [50], models: [1] },
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
