import { UnitData } from '../../models/models'

const units = {
  aberrants: { name: 'Aberrants', points: [135, 300], models: [5, 10] },
  abominant: { name: 'Abominant', points: [75], models: [1] },
  benefictus: { name: 'Benefictus', points: [70], models: [1] },
  biophagus: { name: 'Biophagus', points: [50], models: [1] },
  hybridMetamorphs: {
    name: 'Hybrid Metamorphs',
    points: [80, 160],
    models: [5, 10],
  },
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

export const genespawnOnslaughtUnits: Record<string, UnitData>[] = [
  {
    abo: units.abominant,
    ben: units.benefictus,
    bio: units.biophagus,
  },
  {
    abe1: units.aberrants,
    abe2: units.aberrants,
  },
  {
    hM: units.hybridMetamorphs,
  },
]
