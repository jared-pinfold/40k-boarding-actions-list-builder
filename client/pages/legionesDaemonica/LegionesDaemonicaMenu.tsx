import { Link } from 'react-router-dom'

export default function LegionesDaemonicaMenu() {
  return (
    <ul>
      <li>
        <Link to="daemonic-incursion">Daemonic Incursion</Link>
      </li>
      <li>
        <Link to="dread-carnival">Dread Carnival</Link>
      </li>
      <li>
        <Link to="infernal-onslaught">Infernal Onslaught</Link>
      </li>
      <li>
        <Link to="pandaemoniac-inferno">Pandaemoniac Inferno</Link>
      </li>
      <li>
        <Link to="rotten-and-rusted">Rotten and Rusted</Link>
      </li>
    </ul>
  )
}
