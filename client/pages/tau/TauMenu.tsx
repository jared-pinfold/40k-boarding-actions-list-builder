import { Link } from 'react-router-dom'

export default function TauMenu() {
  return (
    <ul>
      <li>
        <Link to="kroot-raiding-party">Kroot Raiding Party</Link>
      </li>
      <li>
        <Link to="starfire-cadre">Starfire Cadre</Link>
      </li>
    </ul>
  )
}
