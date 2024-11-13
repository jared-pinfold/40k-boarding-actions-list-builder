import { Link } from 'react-router-dom'

export default function ThousandSonsMenu() {
  return (
    <ul>
      <li>
        <Link to="devoted-thralls">Devoted Thralls</Link>
      </li>
      <li>
        <Link to="fateseekers">Fateseekers</Link>
      </li>
    </ul>
  )
}
