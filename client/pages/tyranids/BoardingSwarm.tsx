import { useState } from 'react'
import { ItemInList } from '../../../models/models'
import OptionsListItem from '../../components/OptionsListItem'
import SelectedListItem from '../../components/SelectedListItem'
import { boardingSwarmUnits } from '../../data/tyranids'

export default function BoardingSwarm() {
  const [initialOptions1, initialOptions2] = boardingSwarmUnits
  const initialList: ItemInList[] = []

  const options1 = Object.keys(initialOptions1)
  const options2 = Object.keys(initialOptions2)
  const [list1, setList1] = useState(initialList)
  const [list2, setList2] = useState(initialList)

  const selected = [...list1, ...list2].map((unit) => unit.key)
  const points = [...list1, ...list2].reduce(
    (a: number, c: ItemInList) => a + c.points,
    0,
  )

  return (
    <div className="container">
      <div className="column list">
        <p>Points: {points}/500</p>
        <ul>
          {list1.map((selectedUnit) => {
            const unit = initialOptions1[selectedUnit.key]
            return (
              <SelectedListItem
                key={unit.name}
                {...{
                  unit,
                  points: selectedUnit.points,
                  setList: setList1,
                  option: selectedUnit.key,
                  models: selectedUnit.models,
                }}
              />
            )
          })}
        </ul>
        <ul>
          {list2.map((selectedUnit) => {
            const unit = initialOptions2[selectedUnit.key]
            return (
              <SelectedListItem
                key={selectedUnit.key}
                {...{
                  unit,
                  points: selectedUnit.points,
                  setList: setList2,
                  option: selectedUnit.key,
                  models: selectedUnit.models,
                }}
              />
            )
          })}
        </ul>
      </div>

      <div className="column options">
        <p>Any of the following:</p>
        <ul>
          {options1.map((option) => {
            const unit = initialOptions1[option]
            return (
              <OptionsListItem
                key={option}
                {...{
                  unit,
                  setList: setList1,
                  option,
                  selected,
                  points,
                  max2: true,
                  list1,
                }}
              />
            )
          })}
        </ul>
        <p>Any of the following:</p>
        <ul>
          {options2.map((option) => {
            const unit = initialOptions2[option]
            return (
              <OptionsListItem
                key={option}
                {...{
                  unit,
                  setList: setList2,
                  option,
                  selected,
                  points,
                }}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
