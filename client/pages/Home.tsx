import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h2>Choose your faction</h2>
      <ul>
        <li>
          <Link to="adeptus-astartes">Adeptus Astartes</Link>
        </li>
        <li>
          <Link to="aeldari">Aeldari</Link>
        </li>
        <li>
          <Link to="legiones-daemonica">Legiones Daemonica</Link>
        </li>
      </ul>
      <Link to="/updates">Updates log</Link>
    </>
  )
}