import { Link } from 'react-router-dom'

export default function AgentsOfTheImperiumMenu() {
  return (
    <ul>
      <li>
        <Link to="interdiction-team">Interdiction Team</Link>
      </li>
      <li>
        <Link to="voidships-company">{`Voidship's Company`}</Link>
      </li>
    </ul>
  )
}
