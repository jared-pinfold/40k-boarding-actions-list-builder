import { useState } from 'react'
import { ItemInList } from '../../../models/models'
import OptionsListItem from '../../components/OptionsListItem'
import SelectedListItem from '../../components/SelectedListItem'
import { boardingButchersUnits } from '../../data/worldEaters'

export default function BoardingButchers() {
  const [initialOptions1, initialOptions2, initialOptions3, initialOptions4] =
    boardingButchersUnits
  const initialList: ItemInList[] = []

  const options1 = Object.keys(initialOptions1)
  const options2 = Object.keys(initialOptions2)
  const options3 = Object.keys(initialOptions3)
  const options4 = Object.keys(initialOptions4)
  const [list1, setList1] = useState(initialList)
  const [list2, setList2] = useState(initialList)
  const [list3, setList3] = useState(initialList)
  const [list4, setList4] = useState(initialList)

  const selected = [...list1, ...list2, ...list3, ...list4].map(
    (unit) => unit.key,
  )
  const points = [...list1, ...list2, ...list3, ...list4].reduce(
    (a: number, c: ItemInList) => a + c.points,
    0,
  )

  return (
    <div className="container">
      <div className="column">
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
                }}
              />
            )
          })}
        </ul>
        <p>Any of the following:</p>
        <p>
          The combined number of * units cannot exceed the total number of{' '}
          <strong>Khorne Berzerkers</strong> units.
        </p>
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
                  list2
                }}
              />
            )
          })}
        </ul>
        <p>Up to one of the following:</p>
        <ul>
          {options3.map((option) => {
            const unit = initialOptions3[option]
            return (
              <OptionsListItem
                key={option}
                {...{
                  unit,
                  setList: setList3,
                  option,
                  selected,
                  points,
                  max1l3: true,
                  list3
                }}
              />
            )
          })}
        </ul>
        <p>Any of the following:</p>
        <ul>
          {options4.map((option) => {
            const unit = initialOptions4[option]
            return (
              <OptionsListItem
                key={option}
                {...{
                  unit,
                  setList: setList4,
                  option,
                  selected,
                  points,
                }}
              />
            )
          })}
        </ul>
      </div>

      <div className="column">
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
                  list2
                }}
              />
            )
          })}
        </ul>
        <ul>
          {list3.map((selectedUnit) => {
            const unit = initialOptions3[selectedUnit.key]
            return (
              <SelectedListItem
                key={selectedUnit.key}
                {...{
                  unit,
                  points: selectedUnit.points,
                  setList: setList3,
                  option: selectedUnit.key,
                  models: selectedUnit.models,
                  list3,
                }}
              />
            )
          })}
        </ul>
        <ul>
          {list4.map((selectedUnit) => {
            const unit = initialOptions4[selectedUnit.key]
            return (
              <SelectedListItem
                key={selectedUnit.key}
                {...{
                  unit,
                  points: selectedUnit.points,
                  setList: setList4,
                  option: selectedUnit.key,
                  models: selectedUnit.models,
                }}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
