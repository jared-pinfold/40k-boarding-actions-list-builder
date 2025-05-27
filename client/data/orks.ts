import { UnitData } from '../../models/models'

const units = {
  beastboss: { name: 'Beastboss', points: [80], models: [1] },
  beastSnaggaBoyz: { name: 'Beast Snagga Boyz', points: [95], models: [10] },
  bigMek: { name: 'Big Mek', points: [70], models: [1] },
  bigMekInMegaArmour: {
    name: 'Big Mek in Mega Armour',
    points: [90],
    models: [1],
  },
  bigMekWithShokkAttackGun: {
    name: 'Big Mek with Shokk Attack Gun',
    points: [75],
    models: [1],
  },
  bossSnikrot: { name: 'Boss Snikrot', points: [95], models: [1] },
  boyz: { name: 'Boyz', points: [80], models: [10] },
  burnaBoyz: { name: 'Burna Boyz', points: [60, 120], models: [5, 10] },
  flashGitz: { name: 'Flash Gitz', points: [80, 160], models: [5, 10] },
  gretchin: { name: 'Gretchin', points: [40], models: [11] },
  kommandos: { name: 'Kommandos', points: [120], models: [10] },
  meganobz: { name: 'Meganobz', points: [105], models: [3] },
  mek: { name: 'Mek', points: [45], models: [1] },
  nobz: { name: 'Nobz', points: [105, 210], models: [5, 10] },
  painboss: { name: 'Painboss', points: [70], models: [1] },
  painboy: { name: 'Painboy', points: [80], models: [1] },
  stormboyz: { name: 'Stormboyz', points: [65, 130], models: [5, 10] },
  warboss: { name: 'Warboss', points: [75], models: [1] },
  warbossInMegaArmour: {
    name: 'Warboss in Mega Armour',
    points: [90],
    models: [1],
  },
  weirdboy: { name: 'Weirdboy', points: [65], models: [1] },
  wurrboy: { name: 'Wurrboy', points: [60], models: [1] },
  zodgrodWortsnagga: { name: 'Zodgrod Wortsnagga', points: [80], models: [1] },
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

export const ramshipRaidersUnits: Record<string, UnitData>[] = [
  {
    beastb: units.beastboss,
    bM: units.bigMek,
    bMWSAG: units.bigMekWithShokkAttackGun,
    bS: units.bossSnikrot,
    war: units.warboss,
    mek: units.mek,
    painbos: units.painboss,
    painboy: units.painboy,
    weird: units.weirdboy,
    wurr: units.wurrboy,
    zW: units.zodgrodWortsnagga,
  },
  {
    bSB1: units.beastSnaggaBoyz,
    bSB2: units.beastSnaggaBoyz,
    bSB3: units.beastSnaggaBoyz,
    b1: units.boyz,
    b2: units.boyz,
    b3: units.boyz,
  },
  {
    bB: units.burnaBoyz,
    fG: units.flashGitz,
    g: units.gretchin,
    k: units.kommandos,
    n: units.nobz,
    s: units.stormboyz,
  },
]
