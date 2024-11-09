import { UnitData } from '../../models/models'

const units = {
  broodlord: { name: 'Broodlord', points: [80], models: [1] },
  genestealers: { name: 'Genestealers', points: [75, 150], models: [5, 10] },
}

export const tyranidInfestationSwarmUnits: Record<string, UnitData>[] = [
  {
    b: units.broodlord,
  },
  {
    g1: units.genestealers,
    g2: units.genestealers,
    g3: units.genestealers,
  },
]
