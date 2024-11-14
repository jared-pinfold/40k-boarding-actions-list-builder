import { Link } from 'react-router-dom'

export default function LeaguesOfVotannMenu() {
  return (
    <ul>
      <li>
        <Link to="hearthfire-strike">Hearthfire Strike</Link>
      </li>
      <li>
        <Link to="void-salvagers">Void Salvagers</Link>
      </li>
    </ul>
  )
}
