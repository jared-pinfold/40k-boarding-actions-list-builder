import { updates } from '../data/updates'

export default function Updates() {
  return (
    <>
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
