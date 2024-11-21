import { UnitData } from '../../models/models'

const units = {
  archon: { name: 'Archon', points: [85], models: [1] },
  courtOfTheArchon: { name: 'Court of the Archon', points: [95], models: [4] },
  drazhar: { name: 'Drazhar', points: [85], models: [1] },
  grotesques: { name: 'Grotesques', points: [80, 160], models: [3, 6] },
  haemonculus: { name: 'Haemonculus', points: [60], models: [1] },
  incubi: { name: 'Incubi', points: [85, 170], models: [5, 10] },
  kabaliteWarriors: { name: 'Kabalite Warriors', points: [110], models: [10] },
  lelithHesperax: { name: 'Lelith Hesperax', points: [95], models: [1] },
  mandrakes: { name: 'Mandrakes', points: [70, 130], models: [5, 10] },
  succubus: { name: 'Succubus', points: [45], models: [1] },
  urienRakarth: { name: 'Urien Rakarth', points: [80], models: [1] },
  wracks: { name: 'Wracks', points: [60, 120], models: [5, 10] },
  wytches: { name: 'Wytches', points: [90], models: [10] },
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

export const shipKillerCultUnits: Record<string, UnitData>[] = [
  {
    lH: units.lelithHesperax,
    s: units.succubus,
  },
  {
    w1: units.wytches,
    w2: units.wytches,
    w3: units.wytches,
  },
  {
    i: units.incubi,
    m: units.mandrakes,
  },
]

export const kabaliteCorsairsUnits: Record<string, UnitData>[] = [
  {
    a: units.archon,
    d: units.drazhar,
  },
  {
    kW1: units.kabaliteWarriors,
    kW2: units.kabaliteWarriors,
    kW3: units.kabaliteWarriors,
  },
  {
    c: units.courtOfTheArchon,
    i: units.incubi,
    m: units.mandrakes,
  },
]

export const spaceLaneRaidersUnits: Record<string, UnitData>[] = [
  {
    a: { ...units.archon, needsKabaliteWarriors: true },
  },
  {
    h: { ...units.haemonculus, needsWracks: true },
    uR: { ...units.urienRakarth, needsWracks: true },
  },
  {
    lH: { ...units.lelithHesperax, needsWytches: true },
    s: { ...units.succubus, needsWytches: true },
  },
  {
    kabaliteW1: units.kabaliteWarriors,
    kabaliteW2: units.kabaliteWarriors,
    kabaliteW3: units.kabaliteWarriors,
    wracks1: units.wracks,
    wracks2: units.wracks,
    wracks3: units.wracks,
    wytches1: units.wytches,
    wytches2: units.wytches,
    wytches3: units.wytches,
  },
  {
    i: units.incubi,
    m: units.mandrakes,
  },
]
