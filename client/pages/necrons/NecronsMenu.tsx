import { Link } from 'react-router-dom'

export default function NecronsMenu() {
  return (
    <ul>
      <li>
        <Link to="canoptek-harvesters">Canoptek Harvesters</Link>
      </li>
      <li>
        <Link to="deranged-outcasts">Deranged Outcasts</Link>
      </li>
    </ul>
  )
}
