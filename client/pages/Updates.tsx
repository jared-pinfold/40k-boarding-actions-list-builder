import { updates } from '../data/updates'

export default function Updates() {
  return (
    <div className="container">
      <div className="column list">
        <p>Points per Munitorum Field Manual 2.5</p>
        <p>Errata per Boarding Actions Companion 1.0</p>
        <p>Includes army lists from White Dwarf issues: 511</p>
      </div>

      <div className="column options">
        <ul>
          {updates.map((update) => (
            <div key={update.date}>
              <p>
                <strong>Date:</strong> {update.date}
              </p>
              <ul>
                {update.update.map((update, i) => (
                  <li key={`update${i}`}>{update}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
