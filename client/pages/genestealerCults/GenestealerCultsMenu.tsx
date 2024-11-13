import { Link } from 'react-router-dom'

export default function GenestealerCultsMenu() {
  return (
    <ul>
            <li>
        <Link to="cult-unveiled">Cult Unveiled</Link>
      </li>
      <li>
        <Link to="genespawn-onslaught">Genespawn Onslaught</Link>
      </li>
      <li>
        <Link to="infestation-swarm">Infestation Swarm</Link>
      </li>
    </ul>
  )
}
