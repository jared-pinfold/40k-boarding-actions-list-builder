import { UnitData } from '../../models/models'

const units = {
  grotesques: { name: 'Grotesques', points: [80, 160], models: [3, 6] },
  haemonculus: { name: 'Haemonculus', points: [60], models: [1] },
  incubi: { name: 'Incubi', points: [85, 170], models: [5, 10] },
  mandrakes: { name: 'Mandrakes', points: [70, 130], models: [5, 10] },
  urienRakarth: { name: 'Urien Rakarth', points: [80], models: [1] },
  wracks: { name: 'Wracks', points: [60, 120], models: [5, 10] },
}

export const painbringersUnits: Record<string, UnitData>[] = [
  {
    h: units.haemonculus,
    uR: units.urienRakarth,
  },
  {
    w1: units.wracks,
    w2: units.wracks,
    w3: units.wracks,
  },
  {
    g: units.grotesques,
    i: units.incubi,
    m: units.mandrakes,
  },
]
