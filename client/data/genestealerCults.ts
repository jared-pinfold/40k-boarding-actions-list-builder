import { UnitData } from '../../models/models'

const units = {
  aberrants: { name: 'Aberrants', points: [135, 300], models: [5, 10] },
  abominant: { name: 'Abominant', points: [75], models: [1] },
  acolyteHybridsWithAutopistols: {
    name: 'Acolyte Hybrids with Autopistols',
    points: [65, 130],
    models: [5, 10],
  },
  acolyteHybridsWithHandFlamers: {
    name: 'Acolyte Hybrids with Hand Flamers',
    points: [70, 140],
    models: [5, 10],
  },
  acolyteIconward: { name: 'Acolyte Iconward', points: [50], models: [1] },
  benefictus: { name: 'Benefictus', points: [70], models: [1] },
  biophagus: { name: 'Biophagus', points: [50], models: [1] },
  clamavus: { name: 'Clamavus', points: [50], models: [1] },
  hybridMetamorphs: {
    name: 'Hybrid Metamorphs',
    points: [80, 160],
    models: [5, 10],
  },
  kelermorph: { name: 'Kelermorph', points: [60], models: [1] },
  locus: { name: 'Locus', points: [45], models: [1] },
  magus: { name: 'Magus', points: [50], models: [1] },
  neophyteHybrids: { name: 'Neophyte Hybrids', points: [65], models: [10] },
  patriarch: { name: 'Patriarch', points: [75], models: [1] },
  primus: { name: 'Primus', points: [80], models: [1] },
  purestrainGenestealers: {
    name: 'Purestrain Genestealers',
    points: [75, 150],
    models: [5, 10],
  },
  sanctus: { name: 'Sanctus', points: [50], models: [1] },
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

export const cultUnveiledUnits: Record<string, UnitData>[] = [
  {
    m: units.magus,
    p: units.primus,
  },
  {
    aI: units.acolyteIconward,
    c: units.clamavus,
    k: units.kelermorph,
    l: units.locus,
    s: units.sanctus,
  },
  {
    aHA1: units.acolyteHybridsWithAutopistols,
    aHA2: units.acolyteHybridsWithAutopistols,
    aHA3: units.acolyteHybridsWithAutopistols,
    nH1: units.neophyteHybrids,
    nH2: units.neophyteHybrids,
    nH3: units.neophyteHybrids,
  },
  {
    aHHF: units.acolyteHybridsWithHandFlamers,
  },
]
