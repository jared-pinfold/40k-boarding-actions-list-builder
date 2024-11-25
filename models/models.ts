export interface UnitData {
  name: string
  points: number[]
  models: number[]
  needsDireAvengers?: boolean
  needsSwoopingHawks?: boolean
  needsFireDragons?: boolean
  needsHowlingBanshees?: boolean
  needsStrikingScorpions?: boolean
  needsDarkReapers?: boolean
  noKhorne?: boolean
  noSlaanesh?: boolean
  noNurgle?: boolean
  noTzeentch?: boolean
  asterisk?: boolean
  notMoreThanLegionaries?: boolean
  only1OtherCharacter?: boolean
  notMoreThanKhorneBerzerkers?: boolean
  notMoreThanRubricMarines?: boolean
  notMoreThanKrootCarnivores?: boolean
  needsKabaliteWarriors?: boolean
  needsWracks?: boolean
  needsWytches?: boolean
  notMoreThanPlagueMarines?: boolean
  needsInquisitor?: boolean
}

export type UnitGroup = Record<string, UnitData>[]

export interface ItemInList {
  key: string
  points: number
  models: number
}
