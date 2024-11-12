import { Link } from 'react-router-dom'

export default function TyranidsMenu() {
  return (
    <ul>
      <li>
        <Link to="biotide">Biotide</Link>
      </li>
      <li>
        <Link to="boarding-swarm">Boarding Swarm</Link>
      </li>
      <li>
        <Link to="infestation-swarm">Infestation Swarm</Link>
      </li>
    </ul>
  )
}
