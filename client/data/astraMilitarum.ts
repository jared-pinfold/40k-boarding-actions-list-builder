import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  bullgrynSquad3: { name: 'Bullgryn Squad', points: [110], models: [3] },
  cadianCastellan: { name: 'Cadian Castellan', points: [45], models: [1] },
  cadianCommandSquad: {
    name: 'Cadian Command Squad',
    points: [65],
    models: [5],
  },
  cadianShockTroops10: {
    name: 'Cadian Shock Troops',
    points: [60],
    models: [10],
  },
  catachanJungleFighters10: {
    name: 'Catachan Jungle Fighters',
    points: [55],
    models: [10],
  },
  commissar: { name: 'Commissar', points: [30], models: [1] },
  deathKorpsOfKrieg10: {
    name: 'Death Korps of Krieg',
    points: [65],
    models: [10],
  },
  gauntsGhosts: { name: "Gaunt's Ghosts", points: [100], models: [6] },
  infantrySquad10: {
    name: 'Infantry Squad',
    points: [60],
    models: [10],
  },
  ironHandStraken: { name: '"Iron Hand" Straken', points: [55], models: [1] },
  kasrkin: { name: 'Kasrkin', points: [55,110], models: [5,10] },
  militarumTempestusCommandSquad: {
    name: 'Militarum Tempestus Command Squad',
    points: [70],
    models: [5],
  },
  norkDeddog: { name: 'Nork Deddog', points: [60], models: [1] },
  ogrynBodyguard: { name: 'Ogryn Bodyguard', points: [40], models: [1] },
  ogrynSquad3: { name: 'Ogryn Squad', points: [60], models: [3] },
  platoonCommandSquad: {
    name: 'Platoon Command Squad',
    points: [60],
    models: [5],
  },
  primarisPsyker: { name: 'Primaris Psyker', points: [60], models: [1] },
  ratlingSnipers: { name: 'Ratling Snipers', points: [60], models: [5] },
  regimentalEnginseer: {
    name: 'Regimental Enginseer',
    points: [45],
    models: [1],
  },
  regimentalPreacher: {
    name: 'Regimental Preacher',
    points: [35],
    models: [1],
  },
  sergeantHarker: { name: 'Sgt. Harker', points: [40], models: [1] },
  slyMarbo: { name: 'Sly Marbo', points: [65], models: [1] },
  tempestusScions: {
    name: 'Tempestus Scions',
    points: [50, 100],
    models: [5, 10],
  },
  ursulaCreed: { name: 'Ursula Creed', points: [55], models: [1] },
}

export const tempestusBoardingRegimentUnits: Record<string, UnitData>[] = [
  {
    mTCS: units.militarumTempestusCommandSquad,
  },
  {
    c: units.commissar,
    oB: units.ogrynBodyguard,
    pP: units.primarisPsyker,
    rE: units.regimentalEnginseer,
    rP: units.regimentalPreacher,
  },
  {
    tS1: units.tempestusScions,
    tS2: units.tempestusScions,
    tS3: units.tempestusScions,
  },
  {
    bS: units.bullgrynSquad3,
  },
]

export const embarkedRegimentUnits: Record<string, UnitData>[] = [
  {
    cC: units.cadianCastellan,
    cCS: units.cadianCommandSquad,
    gG: units.gauntsGhosts,
    iHS: units.ironHandStraken,
    pCS: units.platoonCommandSquad,
    sM: units.slyMarbo,
    uC: units.ursulaCreed,
  },
  {
    c: units.commissar,
    oB: units.ogrynBodyguard,
    nD: units.norkDeddog,
    pP: units.primarisPsyker,
    rE: units.regimentalEnginseer,
    rP: units.regimentalPreacher,
    sH: units.sergeantHarker
  },
  {
    cST1: units.cadianShockTroops10,
    cST2: units.cadianShockTroops10,
    cST3: units.cadianShockTroops10,
    cJF1: units.catachanJungleFighters10,
    cJF2: units.catachanJungleFighters10,
    cJF3: units.catachanJungleFighters10,
    dKOK1: units.deathKorpsOfKrieg10,
    dKOK2: units.deathKorpsOfKrieg10,
    dKOK3: units.deathKorpsOfKrieg10,
    iS1: units.infantrySquad10,
    iS2: units.infantrySquad10,
    iS3: units.infantrySquad10,
  },
  {
    bS: units.bullgrynSquad3,
    k: units.kasrkin,
    rS: units.ratlingSnipers,
    oS: units.ogrynSquad3
  }
]
