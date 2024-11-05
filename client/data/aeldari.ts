import { UnitData } from '../../models/models'
// x: {name: "x", points: 0, models: []},

export const wraithsOfTheVoidUnits: Record<string, UnitData>[] = [
  {
    spirit1: { name: 'Spiritseer', points: [65], models: [1] },
    spirit2: { name: 'Spiritseer', points: [65], models: [1] },
  },
  {
    wBlades1: { name: 'Wraithblades', points: [160, 320], models: [5, 10] },
    wBlades2: { name: 'Wraithblades', points: [160, 320], models: [5, 10] },
    wGuard1: { name: 'Wraithguard', points: [180, 360], models: [5, 10] },
    wGuard2: { name: 'Wraithguard', points: [180, 360], models: [5, 10] },
  },
]

export const starDancerMasqueUnits: Record<string, UnitData>[] = [
  {
    death: { name: 'Death Jester', points: [90], models: [1] },
    shadow: { name: 'Shadowseer', points: [60], models: [1] },
    troupe: { name: 'Troupe Master', points: [55], models: [1] },
  },
  {
    sol: { name: 'Solitaire', points: [115], models: [1] },
  },
  {
    troupe1: { name: 'Troupe', points: [75, 90, 165], models: [5, 6, 11] },
    troupe2: { name: 'Troupe', points: [75, 90, 165], models: [5, 6, 11] },
    troupe3: { name: 'Troupe', points: [75, 90, 165], models: [5, 6, 11] },
  },
]

export const khainesArrowUnits: Record<string, UnitData>[] = [
  {
    asurmen: {
      name: 'Asurmen',
      points: [115],
      models: [1],
      needsDireAvengers: true,
    },
    autarch: { name: 'Autarch', points: [75], models: [1] },
    autarchW: { name: 'Autarch Wayleaper', points: [115], models: [1] },
    baha: {
      name: 'Baharroth',
      points: [125],
      models: [1],
      needsSwoopingHawks: true,
    },
    eldrad: { name: 'Eldrad Ulthran', points: [110], models: [1] },
    far: { name: 'Farseer', points: [80], models: [1] },
    fuegan: {
      name: 'Fuegan',
      points: [130],
      models: [1],
      needsFireDragons: true,
    },
    jain: {
      name: 'Jain Zar',
      points: [90],
      models: [1],
      needsHowlingBanshees: true,
    },
    kar: {
      name: 'Karandras',
      points: [90],
      models: [1],
      needsStrikingScorpions: true,
    },
    maug: {
      name: 'Maugan Ra',
      points: [115],
      models: [1],
      needsDarkReapers: true,
    },
  },
  {
    warlock: { name: 'Warlock', points: [45], models: [1] },
    wConc: { name: 'Warlock Conclave', points: [55, 110], models: [2, 4] },
  },
  {
    dire: { name: 'Dire Avengers', points: [70, 140], models: [5, 10] },
    fire: { name: 'Fire Dragons', points: [90, 180], models: [5, 10] },
    howling: { name: 'Howling Banshees', points: [70, 140], models: [5, 10] },
    strik: { name: 'Striking Scorpions', points: [65, 130], models: [5, 10] },
  },
  {
    swoop: { name: 'Swooping Hawks', points: [85, 170], models: [5, 10] },
    warp: { name: 'Warp Spiders', points: [125], models: [5] },
  },
]
