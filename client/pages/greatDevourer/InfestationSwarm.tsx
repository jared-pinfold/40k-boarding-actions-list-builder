import { useState } from 'react'
import { ItemInList } from '../../../models/models'
import OptionsListItem from '../../components/OptionsListItem'
import SelectedListItem from '../../components/SelectedListItem'
import { useLocation } from 'react-router-dom'
import { tyranidInfestationSwarmUnits } from '../../data/tyranids'
import { genestealerCultsInfestationSwarmUnits } from '../../data/genestealerCults'

export default function InfestationSwarm() {
  const location = useLocation().pathname.split('/')
  const [initialOptions1, initialOptions2] = location.includes('tyranids')
    ? tyranidInfestationSwarmUnits
    : genestealerCultsInfestationSwarmUnits
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
                }}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
