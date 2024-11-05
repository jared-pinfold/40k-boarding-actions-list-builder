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
}

export type UnitGroup = Record<string, UnitData>[]

export interface ItemInList {
  key: string
  points: number
  models: number
}
