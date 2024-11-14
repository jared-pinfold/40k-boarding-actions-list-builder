import { UnitData } from '../../models/models'

const units = {
  bigMekInMegaArmour: {
    name: 'Big Mek in Mega Armour',
    points: [90],
    models: [1],
  },
  meganobz: { name: 'Meganobz', points: [105], models: [3] },
  nobz: { name: 'Nobz', points: [105, 210], models: [5, 10] },
  warboss: { name: 'Warboss', points: [65], models: [1] },
  warbossInMegaArmour: {
    name: 'Warboss in Mega Armour',
    points: [80],
    models: [1],
  },
}

export const kaptinKillersUnits: Record<string, UnitData>[] = [
  {
    bMIMA: units.bigMekInMegaArmour,
    w: units.warboss,
    wIMA: units.warbossInMegaArmour,
  },
  {
    m1: units.meganobz,
    m2: units.meganobz,
    n1: units.nobz,
    n2: units.nobz,
  },
]
