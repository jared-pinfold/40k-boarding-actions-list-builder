import { Link } from 'react-router-dom'

export default function DeathGuardMenu() {
  return (
    <ul>
      <li>
        <Link to="arch-contaminators">Arch-Contaminators</Link>
      </li>
      <li>
        <Link to="unclean-uprising">Unclean Uprising</Link>
      </li>
    </ul>
  )
}
