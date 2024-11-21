import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'

interface Props {
  unit: UnitData
  points: number
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  models: number
  list1?: ItemInList[]
  list2?: ItemInList[]
  list3?: ItemInList[]
  list4?: ItemInList[]
}

export default function SelectedListItem(props: Props) {
  const { unit, points, models, setList, option, list1, list2, list3 } = props

  function isRed(): boolean {
    const lists1and2 =
      list1 && list2
        ? [...(list1 as ItemInList[]), ...(list2 as ItemInList[])]
        : []

    if (
      unit.notMoreThanLegionaries &&
      (list3 as ItemInList[]).filter((unit) => unit.key.match(/legion/))
        .length <
        (list3 as ItemInList[]).filter((unit) => !unit.key.match(/legion/))
          .length
    )
      return true

    if (
      unit.notMoreThanKhorneBerzerkers &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/Berz/)).length <
        (list2 as ItemInList[]).filter((unit) => !unit.key.match(/Berz/)).length
    )
      return true
    if (
      unit.notMoreThanRubricMArines &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/rub/)).length <
        (list2 as ItemInList[]).filter((unit) => !unit.key.match(/rub/)).length
    )
      return true
    if (
      unit.notMoreThanKrootCarnivores &&
      (list2 as ItemInList[]).filter((unit) => unit.key.match(/Carn/)).length <
        (list3 as ItemInList[]).length
    )
      return true

    if (unit.only1OtherCharacter && lists1and2.length > 2) return true
    return false
  }

  return (
    <>
      <li className={isRed() ? 'red-unit' : ''}>
        {`${unit.name}${models === 1 ? '' : ` - ${models} models`}`} ({points}){' '}
        <button
          onClick={() =>
            setList((list) => list.filter((unit) => unit.key !== option))
          }
        >
          Remove
        </button>
      </li>
    </>
  )
}
