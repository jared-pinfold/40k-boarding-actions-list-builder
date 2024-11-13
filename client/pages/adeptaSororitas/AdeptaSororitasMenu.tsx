import { Link } from 'react-router-dom'

export default function AdeptaSororitasMenu() {
  return (
    <ul>
      <li>
        <Link to="penitents-and-pilgrims">Penitents and Pilgrims</Link>
      </li>
      <li>
        <Link to="pious-protectors">Pious Protectors</Link>
      </li>
    </ul>
  )
}
