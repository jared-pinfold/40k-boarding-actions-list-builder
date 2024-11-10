import { updates } from '../data/updates'

export default function Updates() {
  return (
    <>
      <p>Points per Munitorum Field Manual 1.13</p>
      <p>Errata per Boarding Actions Companion 1.0</p>
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
    </>
  )
}
