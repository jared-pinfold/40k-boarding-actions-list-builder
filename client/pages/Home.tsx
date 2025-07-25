import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <details>
        <summary>Imperium</summary>
        <ul>
          <li>
            <Link to="adepta-sororitas">Adepta Sororitas</Link>
          </li>
          <li>
            <Link to="adeptus-astartes">Adeptus Astartes</Link>
          </li>
          <li>
            <Link to="adeptus-custodes">Adeptus Custodes</Link>
          </li>
          <li>
            <Link to="adeptus-mechanicus">Adeptus Mechanicus</Link>
          </li>
          <li>
            <Link to="agents-of-the-imperium">Agents of the Imperium</Link>
          </li>
          <li>
            <Link to="astra-militarum">Astra Militarum</Link>
          </li>
          <li>
            <Link to="grey-knights">Grey Knights</Link>
          </li>
        </ul>
      </details>

      <details>
        <summary>Chaos</summary>
        <ul>
          <li>
            <Link to="death-guard">Death Guard</Link>
          </li>
          <li>
            <Link to="emperors-Children">{"Emperor's Children"}</Link>
          </li>
          <li>
            <Link to="heretic-astartes">Heretic Astartes</Link>
          </li>
          <li>
            <Link to="legiones-daemonica">Legiones Daemonica</Link>
          </li>
          <li>
            <Link to="thousand-sons">Thousand Sons</Link>
          </li>
          <li>
            <Link to="world-eaters">World Eaters</Link>
          </li>
        </ul>
      </details>

      <details>
        <summary>Xenos</summary>
        <ul>
          <li>
            <Link to="aeldari">Aeldari</Link>
          </li>
          <li>
            <Link to="drukhari">Drukhari</Link>
          </li>
          <li>
            <Link to="genestealer-cults">Genestealer Cults</Link>
          </li>
          <li>
            <Link to="leagues-of-votann">Leagues of Votann</Link>
          </li>
          <li>
            <Link to="necrons">Necrons</Link>
          </li>
          <li>
            <Link to="orks">Orks</Link>
          </li>
          <li>
            <Link to="tau">{`T'au`}</Link>
          </li>
          <li>
            <Link to="tyranids">Tyranids</Link>
          </li>
        </ul>
      </details>
      <Link to="/updates">Updates log</Link>
    </>
  )
}
