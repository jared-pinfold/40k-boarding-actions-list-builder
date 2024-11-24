import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'
import { khorne, nurgle, slaanesh, tzeentch } from '../data/legionesDaemonica'

interface Props {
  unit: UnitData
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  selected: string[]
  points: number
  max1?: boolean
  max1l2?: boolean
  max1l3?: boolean
  max1l4?: boolean
  max1l5?: boolean
  max2?: boolean
  max2l2?: boolean
  max3?: boolean
  noCharacters?: boolean
  noSolitaire?: boolean
  list1?: ItemInList[]
  list2?: ItemInList[]
  list3?: ItemInList[]
  list4?: ItemInList[]
  list5?: ItemInList[]
}

export default function OptionsListItem(props: Props) {
  const {
    unit,
    setList,
    option: key,
    selected,
    points,
    list1,
    list2,
    list3,
    list4,
    list5,
    max1,
    max1l2,
    max1l3,
    max1l4,
    max1l5,
    max2,
    max2l2,
    max3,
    noCharacters,
    noSolitaire,
  } = props
  function isDisabled(i: number) {
    const lists1and2 =
      list1 && list2
        ? [...(list1 as ItemInList[]), ...(list2 as ItemInList[])]
        : []
    const lists3and4 =
      list3 && list4
        ? [...(list3 as ItemInList[]), ...(list4 as ItemInList[])]
        : []
    if (selected.includes(key)) return true
    if (points + unit.points[i] > 500) return true
    if (max1 && (list1 as ItemInList[]).length === 1) return true
    if (max1l2 && (list2 as ItemInList[]).length === 1) return true
    if (max1l3 && (list3 as ItemInList[]).length === 1) return true
    if (max1l4 && (list4 as ItemInList[]).length === 1) return true
    if (max1l5 && (list5 as ItemInList[]).length === 1) return true
    if (max2 && (list1 as ItemInList[]).length === 2) return true
    if (max2l2 && (list2 as ItemInList[]).length === 2) return true
    if (max3 && (list1 as ItemInList[]).length === 3) return true
    if (noCharacters && (list1 as ItemInList[]).length > 0) return true
    if (noSolitaire && (list2 as ItemInList[]).length > 0) return true
    if (
      unit.needsDarkReapers &&
      !lists3and4.some((unit) => unit.key === 'dark')
    )
      return true //note: does not currently exist due to error in rules
    if (
      unit.needsDireAvengers &&
      !lists3and4.some((unit) => unit.key === 'dire')
    )
      return true
    if (
      unit.needsFireDragons &&
      !lists3and4.some((unit) => unit.key === 'fire')
    )
      return true
    if (
      unit.needsHowlingBanshees &&
      !lists3and4.some((unit) => unit.key === 'howling')
    )
      return true
    if (
      unit.needsStrikingScorpions &&
      !lists3and4.some((unit) => unit.key === 'strik')
    )
      return true
    if (
      unit.needsSwoopingHawks &&
      !lists3and4.some((unit) => unit.key === 'swoop')
    )
      return true
    if (unit.noKhorne && lists1and2.some((unit) => khorne.includes(unit.key)))
      return true
    if (unit.noNurgle && lists1and2.some((unit) => nurgle.includes(unit.key)))
      return true
    if (
      unit.noSlaanesh &&
      lists1and2.some((unit) => slaanesh.includes(unit.key))
    )
      return true
    if (
      unit.noTzeentch &&
      lists1and2.some((unit) => tzeentch.includes(unit.key))
    )
      return true
    if (
      unit.notMoreThanLegionaries &&
      (list3 as ItemInList[]).filter((unit) => unit.key.match(/legion/))
        .length <=
        (list3 as ItemInList[]).filter((unit) => !unit.key.match(/legion/))
          .length
    )
      return true
    if (unit.only1OtherCharacter && lists1and2.length >= 2) return true
    if (
      unit.notMoreThanKhorneBerzerkers &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/Berz/)).length <=
        (list2 as ItemInList[]).filter((unit) => !unit.key.match(/Berz/)).length
    )
      return true
    if (
      unit.notMoreThanRubricMarines &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/rub/)).length <=
        (list2 as ItemInList[]).filter((unit) => !unit.key.match(/rub/)).length
    )
      return true
    if (
      unit.notMoreThanPlagueMarines &&
      (list3 as ItemInList[]).filter((unit) => unit.key.match(/plague/))
        .length <=
        (list3 as ItemInList[]).filter((unit) => !unit.key.match(/plague/))
          .length
    )
      return true
    if (
      unit.notMoreThanKrootCarnivores &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/Carn/)).length <=
        (list3 as ItemInList[]).length
    )
      return true
    if (
      unit.needsKabaliteWarriors &&
      (list4 as ItemInList[]).filter((unit) => unit.key.match(/kabaliteW/))
        .length < 1
    )
      return true
    if (
      unit.needsWracks &&
      (list4 as ItemInList[]).filter((unit) => unit.key.match(/wracks/))
        .length < 1
    )
      return true
    if (
      unit.needsWytches &&
      (list4 as ItemInList[]).filter((unit) => unit.key.match(/wytches/))
        .length < 1
    )
      return true

    return false
  }

  return (
    <>
      <li>
        <span>
          {unit.name}
          {unit.asterisk && '*'} (
          {unit.models.length === 1 ? unit.points : `${unit.points.join('/')}`})
        </span>
        {unit.models.map((num, i) => {
          return (
            <button
              disabled={isDisabled(i)}
              key={`button${num}`}
              onClick={() =>
                setList((list) => [
                  ...list,
                  {
                    name: unit.name,
                    key,
                    points: unit.points[i],
                    models: num,
                  },
                ])
              }
            >{`${num} ${num === 1 ? 'model' : 'models'}`}</button>
          )
        })}
      </li>
    </>
  )
}
