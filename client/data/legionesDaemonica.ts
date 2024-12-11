import { UnitData } from '../../models/models'

const units = {
  beastsOfNurgle: {
    name: 'Beasts of Nurgle',
    points: [65, 130],
    models: [1, 2],
  },
  bloodletters: { name: 'Bloodletters', points: [110], models: [10] },
  bloodmaster: { name: 'Bloodmaster', points: [65], models: [1] },
  blueHorrors: { name: 'Blue Horrors', points: [125], models: [10] },
  changecaster: { name: 'Changecaster', points: [60], models: [1] },
  contortedEpitome: { name: 'Contorted Epitome', points: [80], models: [1] },
  daemonettes: { name: 'Daemonettes', points: [100], models: [10] },
  epidemius: { name: 'Epidemius', points: [80], models: [1] },
  exhaltedFlamer: { name: 'Exhalted Flamer', points: [65], models: [1] },
  fiends: { name: 'Fiends', points: [105], models: [3] },
  flamers: { name: 'Flamers', points: [105], models: [3] },
  fleshHounds: { name: 'Flesh Hounds', points: [70], models: [5] },
  fleshHounds5or10: {
    name: 'Flesh Hounds',
    points: [70, 140],
    models: [5, 10],
  },
  infernalEnrapturess: {
    name: 'Infernal Enrapturess',
    points: [60],
    models: [1],
  },
  karanak: { name: 'Karanak', points: [65], models: [1] },
  nurglings: { name: 'Nurglings', points: [40], models: [3] },
  pinkHorrors: { name: 'Pink Horrors', points: [140], models: [10] },
  plaguebearers: { name: 'Plaguebearers', points: [110], models: [10] },
  poxbringer: { name: 'Poxbringer', points: [55], models: [1] },
  screamers: { name: 'Screamers', points: [85], models: [3] },
  skulltaker: { name: 'Skulltaker', points: [85], models: [1] },
  sloppityBilepiper: { name: 'Sloppity Bilepiper', points: [55], models: [1] },
  spoilpoxScrivener: { name: 'Spoilpox Scrivener', points: [60], models: [1] },
  theChangeling: { name: 'The Changeling', points: [90], models: [1] },
  theMasqueOfSlaanesh: {
    name: 'The Masque of Slaanesh',
    points: [85],
    models: [1],
  },
  tranceweaver: { name: 'Tranceweaver', points: [60], models: [1] },
}

export const dreadCarnivalUnits: Record<string, UnitData>[] = [
  {
    contorted: units.contortedEpitome,
    infernal: units.infernalEnrapturess,
    masque: units.theMasqueOfSlaanesh,
    trance: units.tranceweaver,
  },
  {
    daemonettes1: units.daemonettes,
    daemonettes2: units.daemonettes,
    daemonettes3: units.daemonettes,
    fiends: units.fiends,
  },
]

export const daemonicIncursionUnits: Record<string, UnitData>[] = [
  {
    bloodmaster: { ...units.bloodmaster, noSlaanesh: true },
    karanak: { ...units.karanak, noSlaanesh: true },
    skulltaker: { ...units.skulltaker, noSlaanesh: true },
    changecaster: { ...units.changecaster, noNurgle: true },
    exFlamer: { ...units.exhaltedFlamer, noNurgle: true },
    theChan: { ...units.theChangeling, noNurgle: true },
    epid: { ...units.epidemius, noTzeentch: true },
    poxbri: { ...units.poxbringer, noTzeentch: true },
    sloppi: { ...units.sloppityBilepiper, noTzeentch: true },
    spoilpox: { ...units.spoilpoxScrivener, noTzeentch: true },
    contorted: { ...units.contortedEpitome, noKhorne: true },
    infernalRap: { ...units.infernalEnrapturess, noKhorne: true },
    theMasq: { ...units.theMasqueOfSlaanesh, noKhorne: true },
    trancew: { ...units.tranceweaver, noKhorne: true },
  },
  {
    bloodl1: { ...units.bloodletters, noSlaanesh: true },
    bloodl2: { ...units.bloodletters, noSlaanesh: true },
    bloodl3: { ...units.bloodletters, noSlaanesh: true },
    blueH1: { ...units.blueHorrors, noNurgle: true },
    blueH2: { ...units.blueHorrors, noNurgle: true },
    blueH3: { ...units.blueHorrors, noNurgle: true },
    pinkH1: { ...units.pinkHorrors, noNurgle: true },
    pinkH2: { ...units.pinkHorrors, noNurgle: true },
    pinkH3: { ...units.pinkHorrors, noNurgle: true },
    plague1: { ...units.plaguebearers, noTzeentch: true },
    plague2: { ...units.plaguebearers, noTzeentch: true },
    plague3: { ...units.plaguebearers, noTzeentch: true },
    nurg1: { ...units.nurglings, noTzeentch: true },
    nurg2: { ...units.nurglings, noTzeentch: true },
    nurg3: { ...units.nurglings, noTzeentch: true },
    daem1: { ...units.daemonettes, noKhorne: true },
    daem2: { ...units.daemonettes, noKhorne: true },
    daem3: { ...units.daemonettes, noKhorne: true },
    fleshH: { ...units.fleshHounds, noSlaanesh: true },
    flame: { ...units.flamers, noNurgle: true },
    scream: { ...units.screamers, noNurgle: true },
    beastsON: { ...units.beastsOfNurgle, noTzeentch: true },
    fiends: { ...units.fiends, noKhorne: true },
  },
]

export const padaemoniacInfernoUnits: Record<string, UnitData>[] = [
  { ch: units.changecaster, eF: units.exhaltedFlamer, tC: units.theChangeling },
  {
    bH1: units.blueHorrors,
    bH2: units.blueHorrors,
    bH3: units.blueHorrors,
    ph1: units.pinkHorrors,
    ph2: units.pinkHorrors,
    ph3: units.pinkHorrors,
  },
  {
    f: units.flamers,
    s: units.screamers,
  },
]

export const infernalOnslaughtUnits: Record<string, UnitData>[] = [
  {
    bM: units.bloodmaster,
    k: units.karanak,
    s: units.skulltaker,
  },
  {
    b1: units.bloodletters,
    b2: units.bloodletters,
    b3: units.bloodletters,
  },
  {
    f: units.fleshHounds5or10,
  },
]

export const rottenAndRustedlUnits: Record<string, UnitData>[] = [
  {
    e: units.epidemius,
    pox: units.poxbringer,
    sB: units.sloppityBilepiper,
    SS: units.spoilpoxScrivener,
  },
  {
    p1: units.plaguebearers,
    p2: units.plaguebearers,
    p3: units.plaguebearers,
    n1: units.nurglings,
    n2: units.nurglings,
    n3: units.nurglings,
  },
  { bON: units.beastsOfNurgle },
]

export const khorne = [
  'bloodmaster',
  'karanak',
  'skulltaker',
  'blood1',
  'blood2',
  'blood3',
  'fleshH',
]

export const nurgle = [
  'epid',
  'poxbri',
  'sloppi',
  'spoilpox',
  'nurg1',
  'nurg2',
  'nurg3',
  'plague1',
  'plague2',
  'plague3',
  'beastsON',
]

export const tzeentch = [
  'changecaster',
  'exFlamer',
  'theChan',
  'blueH1',
  'blueH2',
  'blueH3',
  'pinkH1',
  'pinkH2',
  'pinkH3',
  'flame',
  'scream',
]

export const slaanesh = [
  'contorted',
  'infernalRap',
  'theMasq',
  'trancew',
  'daem1',
  'daem2',
  'daem3',
  'fiends',
]
