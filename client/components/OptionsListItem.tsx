import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'

interface Props {
  unit: UnitData
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  selected: string[]
  points: number
  max2?: boolean
  noCharacters?: boolean
  noSolitaire?: boolean
  list1?: ItemInList[]
  list2?: ItemInList[]
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
    max2,
    noCharacters,
    noSolitaire,
  } = props

  function isDisabled(i: number) {
    if (selected.includes(key)) return true
    if (points + unit.points[i] > 500) return true
    if (max2 && (list1 as ItemInList[]).length === 2) return true
    if (noCharacters && (list1 as ItemInList[]).length > 0) return true
    if (noSolitaire && (list2 as ItemInList[]).length > 0) return true
    return false
  }

  return (
    <>
      <li>
        <span>
          {unit.name} (
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
