import { Link } from 'react-router-dom'

export default function AdeptusAstartesMenu() {
  return (
    <ul>
      <li>
        <Link to="pilum-strike">Pilum Strike</Link>
      </li>
      <li>
        <Link to="terminator-assault">Terminator Assault</Link>
      </li>
    </ul>
  )
}
