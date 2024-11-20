import { Link } from 'react-router-dom'

export default function DrukhariMenu() {
  return (
    <ul>
      <li>
        <Link to="kabalite-corsairs">Kabalite Corsairs</Link>
      </li>
      <li>
        <Link to="painbringers">Painbringers</Link>
      </li>
      <li>
        <Link to="ship-killer-cult">Ship-Killer Cult</Link>
      </li>
    </ul>
  )
}
