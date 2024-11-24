import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  bullgrynSquad3: { name: 'Bullgryn Squad', points: [110], models: [3] },
  commissar: { name: 'Commissar', points: [30], models: [1] },
  militarumTempestusCommandSquad: { name: 'Militarum Tempestus Command Squad', points: [70], models: [5] },
  ogrynBodyguard: { name: 'Ogryn Bodyguard', points: [40], models: [1] },
  primarisPsyker: { name: 'Primaris Psyker', points: [60], models: [1] },
  regimentalEnginseer: { name: 'Regimental Enginseer', points: [45], models: [1] },
  regimentalPreacher: { name: 'Regimental Preacher', points: [35], models: [1] },
  tempestusScions: { name: 'Tempestus Scions', points: [50,100], models: [5,10] },
}

export const tempestusBoardingRegimentUnits: Record<string, UnitData>[] = [
  {
    mTCS: units.militarumTempestusCommandSquad
  },
  {
    c: units.commissar,
    oB: units.ogrynBodyguard,
    pP: units.primarisPsyker,
    rE: units.regimentalEnginseer,
    rP: units.regimentalPreacher
  },
  {
tS1: units.tempestusScions,
tS2: units.tempestusScions,
tS3: units.tempestusScions,
  },
  {
    bS: units.bullgrynSquad3
  }
]