import { UnitData } from '../../models/models'

const units = {
  brokhyrIronMaster: { name: 'Brôkhyr Iron-Master', points: [65], models: [1] },
  brokhyrThunderkyn: { name: 'Brôkhyr Thunderkyn', points: [85], models: [3] },
  cthonianBeserks: { name: 'Cthuonian Beserks', points: [100,200], models: [5, 10] },
  einhyrChampion: { name: 'Einhyr Champion', points: [60], models: [1] },
  einhyrHearthguard: {
    name: 'Einhyr Hearthguard',
    points: [150, 320],
    models: [5, 10],
  },
  einhyrHearthguard5: {
    name: 'Einhyr Hearthguard',
    points: [150],
    models: [5],
  },
  grimnyr: { name: 'Grimnyr', points: [65], models: [3] },
  hearthkynWarriors: { name: 'Hearthkyn Warriors', points: [100], models: [10] },
  kahl: { name: 'Kâhl', points: [70], models: [1] },
  utharTheDestined: { name: 'U%thar the Destined', points: [80], models: [1] },
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

export const voidSalvagersUnits: Record<string, UnitData>[] = [
  {
    bI: units.brokhyrIronMaster,
    eC: units.einhyrChampion,
    g: units.grimnyr,
    k: units.kahl,
    uTD: units.utharTheDestined,
  },
  {
hW1: units.hearthkynWarriors,
hW2: units.hearthkynWarriors,
hW3: units.hearthkynWarriors,
  },
  {
bT: units.brokhyrThunderkyn,
cB: units.cthonianBeserks,
eH: units.einhyrHearthguard5
  }
]
