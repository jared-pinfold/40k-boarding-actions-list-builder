import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  brotherCaptain: { name: 'Brother-Captain', points: [90], models: [1] },
  brotherCaptainStern: {
    name: 'Brother-Captain Stern',
    points: [90],
    models: [1],
  },
  brotherhoodChampion: {
    name: 'Brotherhood Champion',
    points: [80],
    models: [1],
  },
  brotherhoodChaplain: {
    name: 'Brotherhood Chaplain',
    points: [75],
    models: [1],
  },
  brotherhoodLibrarian: {
    name: 'Brotherhood Librarian',
    points: [120],
    models: [1],
  },
  brotherhoodTechmarine: {
    name: 'Brotherhood Techmarine',
    points: [70],
    models: [1],
  },
  brotherhoodTerminatorSquad: {
    name: 'Brotherhood Terminator Squad',
    points: [200, 420],
    models: [5, 10],
  },
  brotherhoodTerminatorSquad5: {
    name: 'Brotherhood Terminator Squad',
    points: [200],
    models: [5],
  },
  castellanCrowe: { name: 'Castellan Crowe', points: [90], models: [1] },
  grandMaster: { name: 'Grand Master', points: [95], models: [1] },
  grandMasterVoldus: { name: 'Grand Master Voldus', points: [95], models: [1] },
  interceptorSquad: {
    name: 'Interceptor Squad',
    points: [125, 250],
    models: [5, 10],
  },
  kaldorDraigo: { name: 'Kaldor Draigo', points: [125], models: [1] },
  paladinSquad: { name: 'Paladin Squad', points: [215], models: [5] },
  purifierSquad: {
    name: 'Purifier Squad',
    points: [125, 250],
    models: [5, 10],
  },
  strikeSquad: { name: 'Strike Squad', points: [120, 240], models: [5, 10] },
}

export const baneslayerStrikeUnits: Record<string, UnitData>[] = [
  {
    bC: units.brotherCaptain,
    bCS: units.brotherCaptainStern,
    bChap: units.brotherhoodChaplain,
    bL: units.brotherhoodLibrarian,
    gM: units.grandMaster,
    gMV: units.grandMasterVoldus,
    kd: units.kaldorDraigo,
  },
  {
    bTS1: units.brotherhoodTerminatorSquad,
    bTS2: units.brotherhoodTerminatorSquad,
    pS1: units.paladinSquad,
    pS2: units.paladinSquad,
  },
]

export const voidPurgeForceUnits: Record<string, UnitData>[] = [
  {
    bCap: units.brotherCaptain,
    bCapS: units.brotherCaptainStern,
    bChamp: units.brotherhoodChampion,
    bChap: units.brotherhoodChaplain,
    bLib: units.brotherhoodLibrarian,
    bTech: units.brotherhoodTechmarine,
    cC: units.castellanCrowe,
    gM: units.grandMaster,
    gMV: units.grandMasterVoldus,
    kD: units.kaldorDraigo,
  },
  {
    sS1: units.strikeSquad,
    sS2: units.strikeSquad,
    sS3: units.strikeSquad,
  },
  {
    iS: units.interceptorSquad,
    pS: units.purifierSquad,
  },
  {
    bTS: units.brotherhoodTerminatorSquad5,
    pS: units.paladinSquad,
  },
]
