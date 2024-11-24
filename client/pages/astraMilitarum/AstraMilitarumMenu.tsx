import { Link } from 'react-router-dom'

export default function AstraMilitarumMenu() {
  return (
    <ul>
      <li>
        <Link to="embarked-regiment">Embarked Regiment</Link>
      </li>
      <li>
        <Link to="tempestus-boarding-regiment">
          Tempestus Boarding Regiment
        </Link>
      </li>
    </ul>
  )
}
