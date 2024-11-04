export interface UnitData {
  name: string
  points: number
  models: number[]
}

export type UnitGroup = Record<string, UnitData>[]

export interface ItemInList {
  key: string
  points: number
  models: number
}