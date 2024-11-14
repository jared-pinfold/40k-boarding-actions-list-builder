import { UnitData } from '../../models/models'

const units = {
  einhyrChampion: { name: 'Einhyr Champion', points: [60], models: [1] },
  einhyrHearthguard: {
    name: 'Einhyr Hearthguard',
    points: [150, 320],
    models: [5, 10],
  },
}

export const hearthfireStrikeUnits: Record<string, UnitData>[] = [
  {
    eC1: units.einhyrChampion,
    eC2: units.einhyrChampion,
  },
  {
    eH1: units.einhyrHearthguard,
    eH2: units.einhyrHearthguard,
  },
]
