import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  aleya: { name: 'Aleya', points: [75], models: [1] },
  allarusCustodians: {
    name: 'Allarus Custodians',
    points: [130, 195],
    models: [2, 3],
  },
  bladeChampion: { name: 'Blade Champion', points: [110], models: [1] },
  custodianGuard: {
    name: 'Custodian Guard',
    points: [180, 225],
    models: [4, 5],
  },
  custodianWardens: {
    name: 'Custodian Wardens',
    points: [200, 250],
    models: [4, 5],
  },
  infantryShieldCaptain: {
    name: 'Infantry Shield-Captain',
    points: [140],
    models: [1],
  },
  knightCentura: { name: 'Knight-Centura', points: [70], models: [1] },
  prosecutors: { name: 'Prosecutors', points: [50, 100], models: [5, 10] },
  trajannValoris: { name: 'Trajann Valoris', points: [140], models: [1] },
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
    infShCap: { ...units.infantryShieldCaptain, only1OtherCharacter: true },
    val: { ...units.valerian, only1OtherCharacter: true },
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

export const voyagersInDarknessUnits: Record<string, UnitData>[] = [
  {
    bC: units.bladeChampion,
    iSC: units.infantryShieldCaptain,
    tV: units.trajannValoris,
    v: units.valerian,
  },
  {
    cG1: units.custodianGuard,
    cG2: units.custodianGuard,
    cG3: units.custodianGuard,
  },
  {
    aC: units.allarusCustodians,
    cW: units.custodianWardens,
  },
  {
    p: { ...units.prosecutors, asterisk: true, notMoreThanCustodeans: true },
    vi: { ...units.vigilators, asterisk: true, notMoreThanCustodeans: true },
    w: { ...units.witchseekers, asterisk: true, notMoreThanCustodeans: true },
  },
]

export const custodians = ['cG1', 'cG2', 'cG3', 'aC', 'cW']
