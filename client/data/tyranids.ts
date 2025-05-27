import { UnitData } from '../../models/models'

const units = {
  broodlord: { name: 'Broodlord', points: [80], models: [1] },
  deathleaper: { name: 'Deathleaper', points: [80], models: [1] },
  genestealers: { name: 'Genestealers', points: [75, 150], models: [5, 10] },
  hormagaunts: { name: 'Hormagaunts', points: [65], models: [10] },
  lictor: { name: 'Lictor', points: [60], models: [1] },
  neurogaunts: { name: 'Neurogaunts', points: [45], models: [10] },
  neuroLictor: { name: 'NeuroLictor', points: [80], models: [1] },
  raveners: { name: 'Raveners', points: [75], models: [3] },
  ripperSwarms: { name: 'Ripper Swarms', points: [50], models: [3] },
  termagants: { name: 'Termagants', points: [60], models: [10] },
  tyranidWarriorsWithMeleeBioWeapons: {
    name: 'Tyranid Warriors with Melee Bio-weapons',
    points: [75],
    models: [3],
  },
  tyranidWarriorsWithRangedBioWeapons: {
    name: 'Tyranid Warriors with Ranged Bio-weapons',
    points: [65],
    models: [3],
  },
  vonRyansLeapers: { name: "Von Ryan's Leapers", points: [70], models: [3] },
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

export const boardingSwarmUnits: Record<string, UnitData>[] = [
  {
    death: units.deathleaper,
    lict: units.lictor,
    neuroL: units.neuroLictor,
  },
  {
    ho1: units.hormagaunts,
    ho2: units.hormagaunts,
    rav1: units.raveners,
    rav2: units.raveners,
    von1: units.vonRyansLeapers,
    von2: units.vonRyansLeapers,
  },
]

export const tyranidattackUnits: Record<string, UnitData>[] = [
  {
    wingedTP1: units.wingedTyranidPrime,
    wingedTP2: units.wingedTyranidPrime,
  },
  {
    tWM1: units.tyranidWarriorsWithMeleeBioWeapons,
    tWM2: units.tyranidWarriorsWithMeleeBioWeapons,
    tWR1: units.tyranidWarriorsWithRangedBioWeapons,
    tWR2: units.tyranidWarriorsWithRangedBioWeapons,
  },
  {
    ho: units.hormagaunts,
    ne: units.neurogaunts,
    rS: units.ripperSwarms,
    te: units.termagants,
  },
]
