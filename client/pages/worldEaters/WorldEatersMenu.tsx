import { Link } from 'react-router-dom'

export default function WorldEatersMenu() {
  return (
    <ul>
      <li>
        <Link to="boarding-butchers">Boarding Butchers</Link>
      </li>
      <li>
        <Link to="skullsworn">Skullsworn</Link>
      </li>
    </ul>
  )
}
