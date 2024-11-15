import { UnitData } from '../../models/models'

const units = {
  canoptekScarabSwarms: {
    name: 'Canoptek Scarab Swarms',
    points: [40],
    models: [3],
  },
  canoptekWraiths: { name: 'Canoptek Wraiths', points: [125], models: [3] },
  chronomancer: { name: 'Chronomancer', points: [65], models: [1] },
  deathmarks: { name: 'Deathmarks', points: [65, 130], models: [5, 10] },
  flayedOnes: { name: 'Flayed Ones', points: [60, 120], models: [5, 10] },
  hexmarkDestroyer: { name: 'Hexmark Destroyer', points: [70], models: [1] },
  illuminorSzeras: { name: 'Illuminor Szeras', points: [175], models: [1] },
  immortals: { name: 'Immortals', points: [75, 150], models: [5, 10] },
  imotekhTheStormlord: {
    name: 'Imotekh the Stormlord',
    points: [100],
    models: [1],
  },
  lychguard: { name: 'Lychguard', points: [85, 170], models: [5, 10] },
  necronWarriors: { name: 'Necron Warriors', points: [100], models: [10] },
  ophydianDestroyers: {
    name: 'Ophydian Destroyers',
    points: [90],
    models: [3],
  },
  orikanTheDiviner: { name: 'Orikan the Diviner', points: [80], models: [1] },
  overlord: { name: 'Overlord', points: [85], models: [1] },
  plasmancer: { name: 'Plasmancer', points: [65], models: [1] },
  psychomancer: { name: 'Psychomancer', points: [55], models: [1] },
  royalWarden: { name: 'Royal Warden', points: [40], models: [1] },
  skorpekhDestroyers: {
    name: 'Skorpekh Destroyers',
    points: [90],
    models: [3],
  },
  skorpekhLord: { name: 'Skorpekh Lord', points: [80], models: [1] },
  technomancer: { name: 'Technomancer', points: [85], models: [1] },
  trazynTheInfinite: { name: 'Trazyn the Infinite', points: [75], models: [1] },
  triarchPraetorians: {
    name: 'Trazyn the Infinite',
    points: [100, 200],
    models: [5, 10],
  },
}

export const canoptekHarvestersUnits: Record<string, UnitData>[] = [
  {
    c: units.chronomancer,
    iS: units.illuminorSzeras,
    oTD: units.orikanTheDiviner,
    p: units.plasmancer,
    ps: units.psychomancer,
    t: units.technomancer,
  },
  {
    cW1: units.canoptekWraiths,
    cW2: units.canoptekWraiths,
    cW3: units.canoptekWraiths,
    cSS1: units.canoptekScarabSwarms,
    cSS2: units.canoptekScarabSwarms,
    cSS3: units.canoptekScarabSwarms,
    nW1: units.necronWarriors,
    nW2: units.necronWarriors,
    nW3: units.necronWarriors,
  },
]

export const derangedOutcastsUnits: Record<string, UnitData>[] = [
  {
    hD: units.hexmarkDestroyer,
    sL: units.skorpekhLord,
  },
  {
    f1: units.flayedOnes,
    f2: units.flayedOnes,
    oD1: units.ophydianDestroyers,
    oD2: units.ophydianDestroyers,
    sD1: units.skorpekhDestroyers,
    sD2: units.skorpekhDestroyers,
  },
]

export const tombShipComplimentUnits: Record<string, UnitData>[] = [
  {
    hD: units.hexmarkDestroyer,
    iTS: units.imotekhTheStormlord,
    o: units.overlord,
    rW: units.royalWarden,
    sL: units.skorpekhLord,
    tTI: units.trazynTheInfinite,
  },
  {
    c: units.chronomancer,
    iS: units.illuminorSzeras,
    oTD: units.orikanTheDiviner,
    pl: units.plasmancer,
    ps: units.psychomancer,
    te: units.technomancer,
  },
  {
    i1: units.immortals,
    i2: units.immortals,
    i3: units.immortals,
    nW1: units.necronWarriors,
    nW2: units.necronWarriors,
    nW3: units.necronWarriors,
  },
  {
    d: units.deathmarks,
    fO: units.flayedOnes,
    l: units.lychguard,
    sD: units.skorpekhDestroyers,
  },
  {
    cSS: units.canoptekScarabSwarms,
    oD: units.ophydianDestroyers,
    tP: units.triarchPraetorians,
  },
]
