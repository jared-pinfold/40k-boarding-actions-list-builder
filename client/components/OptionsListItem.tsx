import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'

interface Props {
  unit: UnitData
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  selected: string[]
  points: number
  max2: boolean
  list1?: ItemInList[]
}

export default function OptionsListItem(props: Props) {
  const { unit, setList, option: key, selected, points, list1, max2 } = props

  function isDisabled(i: number) {
    if (selected.includes(key)) return true
    if (i === 0 && points + unit.points > 500) return true
    if (i === 1 && points + unit.points * 2 > 500) return true
    if (max2 && (list1 as ItemInList[]).length === 2) return true
    return false
  }

  return (
    <>
      <li>
        <span>
          {unit.name} (
          {unit.models.length === 1
            ? unit.points
            : `${unit.points}/${unit.points * 2}`}
          )
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
                    points: i === 0 ? unit.points : unit.points * 2,
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
