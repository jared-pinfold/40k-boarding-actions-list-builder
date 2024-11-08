import { Link } from 'react-router-dom'

export default function AeldariMenu() {
  return (
    <ul>
      <li>
        <Link to="khaines-arrow">{"Khaine's Arrow"}</Link>
      </li>
      <li>
        <Link to="protector-host">Protector Host</Link>
      </li>
      <li>
        <Link to="star-dancer-masque">Star-Dancer Masque</Link>
      </li>
      <li>
        <Link to="wraiths-of-the-void">Wraiths of the Void</Link>
      </li>
    </ul>
  )
}
