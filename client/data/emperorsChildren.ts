import { UnitData } from '../../models/models'

const units = {
  lordKakophonist: { name: 'Lord Kakophonist', points: [70], models: [1] },
  luciusTheEternal: { name: 'Lucius the Eternal', points: [150], models: [1] },
  flawlessBlades: {
    name: 'Flawless Blades',
    points: [110, 220],
    models: [3, 6],
  },
  terminatorSquad: { name: 'Terminator Squad', points: [155], models: [5] },
}

export const sublimeStrikeUnits: Record<string, UnitData>[] = [
  {
    lK: units.lordKakophonist,
    lTE: units.luciusTheEternal,
  },
  {
    fB1: units.flawlessBlades,
    fB2: units.flawlessBlades,
    t1: units.terminatorSquad,
    t2: units.terminatorSquad,
  },
]
