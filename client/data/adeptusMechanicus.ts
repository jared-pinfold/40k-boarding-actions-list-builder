import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  corpuscariiElectroPriests: {
    name: 'Corpuscarii Electro-Priests',
    points: [65, 130],
    models: [5, 10],
  },
  fulguriteElectroPriests: {
    name: 'Fulgurite Electro-Priests',
    points: [70, 140],
    models: [5, 10],
  },
  kataphronBreachers: {
    name: 'Kataphron Breachers',
    points: [160],
    models: [3],
  },
  kataphronDestroyers: {
    name: 'Kataphron Destroyers',
    points: [105],
    models: [3],
  },
  sicarianInfiltrators: {
    name: 'Sicarian Infiltrators',
    points: [70, 140],
    models: [5, 10],
  },
  sicarianRuststalkers: {
    name: 'Sicarian Ruststalkers',
    points: [75, 150],
    models: [5, 10],
  },
  skitariiMarshal: { name: 'Skitarii Marshal', points: [35], models: [1] },
  skitariiRangers: {
    name: 'Skitarii Rangers',
    points: [43, 85],
    models: [5, 10],
  },
  skitariiVanguard: {
    name: 'Skitarii Vanguard',
    points: [48, 95],
    models: [5, 10],
  },
  techPriestDominus: { name: 'Tech-Priest Dominus', points: [65], models: [1] },
  techPriestEnginseer: {
    name: 'Tech-Priest Enginseer',
    points: [55],
    models: [1],
  },
  techPriestManipulus: {
    name: 'Tech-Priest Manipulus',
    points: [60],
    models: [1],
  },
  technoarcheologist: { name: 'Technoarcheologist', points: [45], models: [1] },
}

export const machineCultUnits: Record<string, UnitData>[] = [
  {
    techPD: units.techPriestDominus,
    techPE: units.techPriestEnginseer,
    techPM: units.techPriestManipulus,
    techA: units.technoarcheologist,
  },
  {
    corp: units.corpuscariiElectroPriests,
    ful: units.fulguriteElectroPriests,
    katB: units.kataphronBreachers,
    katD: units.kataphronDestroyers,
  },
]

export const responseCladeUnits: Record<string, UnitData>[] = [
  {
    skitM1: units.skitariiMarshal,
    skitM2: units.skitariiMarshal,
  },
  {
    skitR1: units.skitariiRangers,
    skitR2: units.skitariiRangers,
    skitR3: units.skitariiRangers,
    skitV1: units.skitariiVanguard,
    skitV2: units.skitariiVanguard,
    skitV3: units.skitariiVanguard,
  },
  {
    sicI: units.sicarianInfiltrators,
    sicR: units.sicarianRuststalkers,
  },
]

export const electromartyrsUnits: Record<string, UnitData>[] = [
  {
    techPD: units.techPriestDominus,
    techPE: units.techPriestEnginseer,
    techPM: units.techPriestManipulus,
    techno: units.technoarcheologist,
  },
  {
    skitM: units.skitariiMarshal,
  },
  {
    skitR1: units.skitariiRangers,
    skitR2: units.skitariiRangers,
    skitR3: units.skitariiRangers,
    skitV1: units.skitariiVanguard,
    skitV2: units.skitariiVanguard,
    skitV3: units.skitariiVanguard,
  },
  {
    corpus: units.corpuscariiElectroPriests,
    fulg: units.fulguriteElectroPriests,
    katB: units.kataphronBreachers,
    katD: units.kataphronDestroyers,
    sicI: units.sicarianInfiltrators,
    sicR: units.sicarianRuststalkers,
  },
]
