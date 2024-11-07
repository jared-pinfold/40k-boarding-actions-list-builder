import { Link } from 'react-router-dom'

export default function HereticAstartesMenu() {
  return (
    <ul>
      <li>
        <Link to="champions-of-chaos">Champions of Chaos</Link>
      </li>
      <li>
        <Link to="infernal-reavers">Infernal Reavers</Link>
      </li>
      <li>
        <Link to="underdeck-uprising">Underdeck Uprising</Link>
      </li>
    </ul>
  )
}
