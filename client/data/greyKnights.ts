import { UnitData } from '../../models/models'

const units: Record<string, UnitData> = {
  brotherCaptain: { name: 'Brother-Captain', points: [90], models: [1] },
  brotherCaptainStern: {
    name: 'Brother-Captain Stern',
    points: [90],
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
  brotherhoodTerminatorSquad: {
    name: 'Brotherhood Terminator Squad',
    points: [200, 420],
    models: [5, 10],
  },
  grandMaster: { name: 'Grand Master', points: [95], models: [1] },
  grandMasterVoldus: { name: 'Grand Master Voldus', points: [95], models: [1] },
  kaldorDraigo: { name: 'Kaldor Draigo', points: [125], models: [1] },
  paladinSquad: { name: 'Paladin Squad', points: [215, 450], models: [5, 10] },
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
