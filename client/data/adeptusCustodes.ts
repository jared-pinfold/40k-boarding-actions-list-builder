import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  aleya: { name: 'Aleya', points: [75], models: [1] },
  infantryShieldCaptain: {
    name: 'Infantry Shield-Captain',
    points: [140],
    models: [1],
  },
  knightCentura: { name: 'Knight-Centura', points: [70], models: [1] },
  prosecutors: { name: 'Prosecutors', points: [50, 100], models: [5, 10] },
  valerian: { name: 'Valerian', points: [110], models: [1] },
  vigilators: { name: 'Vigilators', points: [65, 125], models: [5, 10] },
  witchseekers: { name: 'Witchseekers', points: [65, 125], models: [5, 10] },
}

export const blackShipGuardiansUnits: Record<string, UnitData>[] = [
  {
    aleya: units.aleya,
    knightCent: units.knightCentura,
  },
  {
    infShCap: {...units.infantryShieldCaptain, only1OtherCharacter: true},
    val: {...units.valerian, only1OtherCharacter: true}
  },
  {
    pros1: units.prosecutors,
    pros2: units.prosecutors,
    pros3: units.prosecutors,
    vig1: units.vigilators,
    vig2: units.vigilators,
    vig3: units.vigilators,
  },
  {
    witch: units.witchseekers,
  },
]
