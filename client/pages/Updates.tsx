import { updates } from '../data/updates'

export default function Updates() {
  return (
    <div className="faction">
      <section className="updates">
        <p>Points per Munitorum Field Manual 1.13</p>
        <p>Errata per Boarding Actions Companion 1.0</p>
        <hr/>
        {updates.map((update) => (
          <>
            <p>
              <strong>Date:</strong> {update.date}
            </p>
            <ul>
              {update.update.map((update, i) => (
                <li key={`update${i}`}>{update}</li>
              ))}
            </ul>
          </>
        ))}
      </section>
    </div>
  )
}
