import { Dispatch } from 'react'
import { ItemInList, UnitData } from '../../models/models'

interface Props {
  unit: UnitData
  points: number
  setList: Dispatch<React.SetStateAction<ItemInList[]>>
  option: string
  models: number
}

export default function SelectedListItem(props: Props) {
  const { unit, points, models, setList, option } = props
  return (
    <>
      <li>
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
