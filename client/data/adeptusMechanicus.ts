import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  corpuscariiElectroPriests: {name: 'Corpuscarii Electro-Priests', points: [65,130], models: [5,10]},
  fulguriteElectroPriests: {name: 'Fulgurite Electro-Priests', points: [70,140], models: [5,10]},
  kataphronBreachers: {name: 'Kataphron Breachers', points: [160], models: [3]},
  kataphronDestroyers: {name: 'Kataphron Destroyers', points: [105], models: [3]},
  techPriestDominus: {name: 'Tech-Priest Dominus', points: [70], models: [1]},
  techPriestEnginseer: {name: 'Tech-Priest Enginseer', points: [55], models: [1]},
  techPriestManipulus: {name: 'Tech-Priest Manipulus', points: [60], models: [1]},
  technoarcheologist: {name: 'Technoarcheologist', points: [45], models: [1]},
}

export const machineCultUnits: Record<string, UnitData>[] = [
  {
    techPD: units.techPriestDominus,
    techPE: units.techPriestEnginseer,
    techPM: units.techPriestManipulus,
    techA: units.technoarcheologist
  },
  {
corp: units.corpuscariiElectroPriests,
ful: units.fulguriteElectroPriests,
katB: units.kataphronBreachers,
katD: units.kataphronDestroyers
  }
]
