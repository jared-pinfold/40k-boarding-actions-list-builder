import { Link } from 'react-router-dom'

export default function GreyKnightsMenu() {
  return (
    <ul>
      <li>
        <Link to="baneslayer-strike">Baneslayer Strike</Link>
      </li>
      <li>
        <Link to="void-purge-force">Void Purge Force</Link>
      </li>
    </ul>
  )
}
