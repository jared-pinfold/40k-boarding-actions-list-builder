import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'

interface Props {
  unit: UnitData
  points: number
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  models: number
  list3?: ItemInList[]
}

export default function SelectedListItem(props: Props) {
  const { unit, points, models, setList, option, list3 } = props
  return (
    <>
      <li
        className={
          unit.notMoreThanLegionaries &&
          (list3 as ItemInList[]).filter((unit) => unit.key.match(/legion/))
            .length <
            (list3 as ItemInList[]).filter((unit) => !unit.key.match(/legion/))
              .length
            ? 'red-unit'
            : ''
        }
      >
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
