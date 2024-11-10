import { UnitData } from '../../models/models'

const units = {
  broodlord: { name: 'Broodlord', points: [80], models: [1] },
  genestealers: { name: 'Genestealers', points: [75, 150], models: [5, 10] },
  hormagaunts: { name: 'Hormagaunts', points: [65], models: [10] },
  neurogaunts: { name: 'Neurogaunts', points: [45], models: [10] },
  ripperSwarms: { name: 'Ripper Swarms', points: [50], models: [3] },
  termagants: { name: 'Termagants', points: [60], models: [10] },
  wingedTyranidPrime: {
    name: 'Winged Tyranid Prime',
    points: [65],
    models: [1],
  },
}

export const tyranidInfestationSwarmUnits: Record<string, UnitData>[] = [
  {
    b: units.broodlord,
  },
  {
    g1: units.genestealers,
    g2: units.genestealers,
    g3: units.genestealers,
  },
]

export const biotideUnits: Record<string, UnitData>[] = [
  { winged: units.wingedTyranidPrime },
  {
    h1: units.hormagaunts,
    h2: units.hormagaunts,
    h3: units.hormagaunts,
    n1: units.neurogaunts,
    n2: units.neurogaunts,
    n3: units.neurogaunts,
    rS1: units.ripperSwarms,
    rS2: units.ripperSwarms,
    rS3: units.ripperSwarms,
    t1: units.termagants,
    t2: units.termagants,
    t3: units.termagants,
  },
]
