import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  exactionSquad: { name: 'Exaction Squad', points: [90], models: [11] },
  imperialNavyBreachers: {
    name: 'Imperial Navy Breachers',
    points: [90],
    models: [10],
  },
  inquisitor: { name: 'Inquisitor', points: [55], models: [1] },
  inquisitorCoteaz: { name: 'Inquisitor Coteaz', points: [75], models: [1] },
  inquisitorDraxus: { name: 'Inquisitor Draxus', points: [75], models: [1] },
  inquisitorialAgents: {
    name: 'Inquisitorial Agents',
    points: [50, 100],
    models: [6, 12],
  },
  inquisitorGreyfax: { name: 'Inquisitor Greyfax', points: [65], models: [1] },
  rogueTraderEntourage: {
    name: 'Rogue Trader Entourage',
    points: [75],
    models: [4],
  },
  subductorSquad: { name: 'Subductor Squad', points: [85], models: [11] },
  vigilantSquad: { name: 'Vigilant Squad', points: [85], models: [11] },
  voidsmenAtArms: { name: 'Voidsmen-at-Arms', points: [50], models: [6] },
}

export const interdictionTeamUnits: Record<string, UnitData>[] = [
  {
    eS1: units.exactionSquad,
    eS2: units.exactionSquad,
  },
  {
    sS1: units.subductorSquad,
    sS2: units.subductorSquad,
    sS3: units.subductorSquad,
    vS1: units.vigilantSquad,
    vS2: units.vigilantSquad,
    vS3: units.vigilantSquad,
  },
  {
    inq: units.inquisitor,
    inqC: units.inquisitorCoteaz,
    inqD: units.inquisitorDraxus,
    inqG: units.inquisitorGreyfax,
  },
  {
    iA: { ...units.inquisitorialAgents, needsInquisitor: true },
  },
]

export const voidshipsCompanyUnits: Record<string, UnitData>[] = [
  {
    rTE1: units.rogueTraderEntourage,
    rTE2: units.rogueTraderEntourage,
  },
  {
    iNB1: units.imperialNavyBreachers,
    iNB2: units.imperialNavyBreachers,
    iNB3: units.imperialNavyBreachers,
    v1: units.voidsmenAtArms,
    v2: units.voidsmenAtArms,
    v3: units.voidsmenAtArms,
    v4: units.voidsmenAtArms,
    v5: units.voidsmenAtArms,
    v6: units.voidsmenAtArms,
  },
  {
    inq: units.inquisitor,
    inqC: units.inquisitorCoteaz,
    inqD: units.inquisitorDraxus,
    inqG: units.inquisitorGreyfax,
  },
  {
    iA: { ...units.inquisitorialAgents, needsInquisitor: true },
  },
]
