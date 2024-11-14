import { Link } from 'react-router-dom'

export default function OrksMenu() {
  return (
    <ul>
      <li>
        <Link to="kaptin-killers">Kaptin Killers</Link>
      </li>
      <li>
        <Link to="ramship-raiders">Ramship Raiders</Link>
      </li>
    </ul>
  )
}
