import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  aestredThurga: { name: 'Aestred Thurga', points: [85], models: [2] },
  arcoFlagellants: {
    name: 'Arco-Flagellants',
    points: [75, 150],
    models: [5, 10],
  },
  battleSistersSquad: {
    name: 'Battle Sisters Squad',
    points: [105],
    models: [10],
  },
  canoness: { name: 'Canoness', points: [50], models: [1] },
  celestianSacresancts: {
    name: 'Celestian Sacresancts',
    points: [75, 150],
    models: [5, 10],
  },
  daemonifuge: { name: 'Demonifuge', points: [85], models: [2] },
  dialogus: { name: 'Dialogus', points: [40], models: [1] },
  dominionSquad: { name: 'Dominion Squad', points: [63, 125], models: [5, 10] },
  dogmata: { name: 'Dogmata', points: [45], models: [1] },
  hospitalier: { name: 'Hospitalier', points: [50], models: [1] },
  imagifier: { name: 'Imagifier', points: [65], models: [1] },
  ministorumPriest: { name: 'Ministorum Priest', points: [50], models: [1] },
  palatine: { name: 'Palatine', points: [50], models: [1] },
  repentiaSquad: { name: 'Repentia Squad', points: [90, 180], models: [5, 10] },
  seraphimSquad: { name: 'Seraphim Squad', points: [90], models: [5] },
  sistersNovitiateSquad: {
    name: 'Sisters Novitiate Squad',
    points: [100],
    models: [10],
  },
  zephyrimSquad: { name: 'Zephyrim Squad', points: [85], models: [5] },
}

export const piousProtectorsUnits: Record<string, UnitData>[] = [
  {
    canoness: units.canoness,
    daemonif: units.daemonifuge,
    palat: units.palatine,
  },
  {
    aestred: units.aestredThurga,
    dialogus: units.dialogus,
    dogma: units.dogmata,
    hosp: units.hospitalier,
    imagi: units.imagifier,
    minist: units.ministorumPriest,
  },
  {
    battleSis1: units.battleSistersSquad,
    battleSis2: units.battleSistersSquad,
    battleSis3: units.battleSistersSquad,
    domSq1: units.dominionSquad,
    domSq2: units.dominionSquad,
    domSq3: units.dominionSquad,
    sisNov1: units.sistersNovitiateSquad,
    sisNov2: units.sistersNovitiateSquad,
    sisNov3: units.sistersNovitiateSquad,
  },
  {
    arco: units.arcoFlagellants,
    celestianS: units.celestianSacresancts,
    repent: units.repentiaSquad,
  },
  {
    seraphim: units.seraphimSquad,
    zeph: units.zephyrimSquad,
  },
]

export const penitentsAndPilgrimsUnits: Record<string, UnitData>[] = [
  {
    miniP1: units.ministorumPriest,
    miniP2: units.ministorumPriest,
  },
  {
    arc1: units.arcoFlagellants,
    arc2: units.arcoFlagellants,
    arc3: units.arcoFlagellants,
    rep1: units.repentiaSquad,
    rep2: units.repentiaSquad,
    rep3: units.repentiaSquad,
  },
]
