import { UnitData } from '../../models/models'

const units = {
  patriarch: { name: 'Patriarch', points: [75], models: [1] },
  purestrainGenestealers: {
    name: 'Purestrain Genestealers',
    points: [75, 150],
    models: [5, 10],
  },
}

export const genestealerCultsInfestationSwarmUnits: Record<string, UnitData>[] =
  [
    {
      pat: units.patriarch,
    },
    {
      pg1: units.purestrainGenestealers,
      pg2: units.purestrainGenestealers,
      pg3: units.purestrainGenestealers,
    },
  ]
