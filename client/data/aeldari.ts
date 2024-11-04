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
