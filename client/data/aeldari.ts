import { UnitData } from '../../models/models'
// x: {name: "x", points: 0, models: []},

export const wraithsOfTheVoidUnits: Record<string, UnitData>[] = [
  {
    spirit1: { name: 'Spiritseer', points: 65, models: [1] },
    spirit2: { name: 'Spiritseer', points: 65, models: [1] },
  },
  {
    wBlades1: { name: 'Wraithblades', points: 160, models: [5, 10] },
    wBlades2: { name: 'Wraithblades', points: 160, models: [5, 10] },
    wGuard1: { name: 'Wraithguard', points: 180, models: [5, 10] },
    wGuard2: { name: 'Wraithguard', points: 180, models: [5, 10] },
  },
]
