import { Link } from 'react-router-dom'

export default function AdeptusMechanicusMenu() {
  return (
    <ul>
      <li>
        <Link to="electromartyrs">Electromartyrs</Link>
      </li>
      <li>
        <Link to="machine-cult">Machine Cult</Link>
      </li>
      <li>
        <Link to="response-clade">Response Clade</Link>
      </li>
    </ul>
  )
}
