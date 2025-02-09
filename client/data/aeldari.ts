import { UnitData } from '../../models/models'

const units = {
  asurmen: {
    name: 'Asurmen',
    points: [135],
    models: [1],
  },
  autarch: { name: 'Autarch', points: [75], models: [1] },
  autarchWayleaper: { name: 'Autarch Wayleaper', points: [80], models: [1] },
  baharroth: { name: 'Baharroth', points: [115], models: [1] },
  deathJester: { name: 'Death Jester', points: [90], models: [1] },
  direAvengers: { name: 'Dire Avengers', points: [75, 150], models: [5, 10] },
  eldradUlthuran: { name: 'Eldrad Ulthran', points: [110], models: [1] },
  farseer: { name: 'Farseer', points: [70], models: [1] },
  fireDragons: { name: 'Fire Dragons', points: [100, 200], models: [5, 10] },
  fuegan: { name: 'Fuegan', points: [120], models: [1] },
  guardianDefenders: {
    name: 'Guardian Defenders',
    points: [100],
    models: [11],
  },
  howlingBanshees: {
    name: 'Howling Banshees',
    points: [90, 180],
    models: [5, 10],
  },
  jainZar: { name: 'Jain Zar', points: [105], models: [1] },
  // karandras: { name: 'Karandras', points: [90], models: [1] }, **not in current codex**
  mauganRa: { name: 'Maugan Ra', points: [100], models: [1] },
  shadowseer: { name: 'Shadowseer', points: [60], models: [1] },
  solitaire: { name: 'Solitaire', points: [115], models: [1] },
  spiritseer: { name: 'Spiritseer', points: [65], models: [1] },
  stormGuardians: { name: 'Storm Guardians', points: [100], models: [11] },
  strikingScorpions: {
    name: 'Striking Scorpions',
    points: [75, 150],
    models: [5, 10],
  },
  swoopingHawks: { name: 'Swooping Hawks', points: [85, 170], models: [5, 10] },
  troupe: { name: 'Troupe', points: [85, 100, 190], models: [5, 6, 11] },
  troupeMaster: { name: 'Troupe Master', points: [75], models: [1] },
  warlock: { name: 'Warlock', points: [45], models: [1] },
  warlockConclave: {
    name: 'Warlock Conclave',
    points: [55, 110],
    models: [2, 4],
  },
  warpSpiders: { name: 'Warp Spiders', points: [95], models: [5] },
  wraithblades: { name: 'Wraithblades', points: [170, 340], models: [5, 10] },
  wraithguard: { name: 'Wraithguard', points: [170, 340], models: [5, 10] },
}

export const wraithsOfTheVoidUnits: Record<string, UnitData>[] = [
  {
    spirit1: units.spiritseer,
    spirit2: units.spiritseer,
  },
  {
    wBlades1: units.wraithblades,
    wBlades2: units.wraithblades,
    wGuard1: units.wraithguard,
    wGuard2: units.wraithguard,
  },
]

export const starDancerMasqueUnits: Record<string, UnitData>[] = [
  {
    death: units.deathJester,
    shadow: units.shadowseer,
    troupe: units.troupeMaster,
  },
  {
    sol: units.solitaire,
  },
  {
    troupe1: units.troupe,
    troupe2: units.troupe,
    troupe3: units.troupe,
  },
]

export const khainesArrowUnits: Record<string, UnitData>[] = [
  {
    asurmen: { ...units.asurmen, needsDireAvengers: true },
    autarch: units.autarch,
    autarchW: units.autarchWayleaper,
    baha: { ...units.baharroth, needsSwoopingHawks: true },
    eldrad: units.eldradUlthuran,
    far: units.farseer,
    fuegan: { ...units.fuegan, needsFireDragons: true },
    jain: { ...units.jainZar, needsHowlingBanshees: true },
    // kar: { ...units.karandras, needsStrikingScorpions: true },
    maug: { ...units.mauganRa, needsDarkReapers: true },
  },
  {
    warlock: units.warlock,
    wConc: units.warlockConclave,
  },
  {
    dire: units.direAvengers,
    fire: units.fireDragons,
    howling: units.howlingBanshees,
    strik: units.strikingScorpions,
  },
  {
    swoop: units.swoopingHawks,
    warp: units.warpSpiders,
  },
]

export const protectorHostUnits: Record<string, UnitData>[] = [
  {
    autarch: units.autarch,
    eldrad: units.eldradUlthuran,
    far: units.farseer,
  },
  {
    warlock: units.warlock,
    wConc: units.warlockConclave,
  },
  {
    gDef1: units.guardianDefenders,
    gDef2: units.guardianDefenders,
    gDef3: units.guardianDefenders,
    storm1: units.stormGuardians,
    storm2: units.stormGuardians,
    storm3: units.stormGuardians,
  },
  {
    dire1: units.direAvengers,
    dire2: units.direAvengers,
  },
]
