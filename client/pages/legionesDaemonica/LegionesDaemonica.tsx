import { Outlet, useLocation } from 'react-router-dom'

export default function LegionesDaemonica() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')

  const finalListType =
    listType === 'Legiones Daemonica'
      ? ''
      : listType === 'Rotten And Rusted'
        ? ': Rotten and Rusted'
        : `: ${listType}`

  return (
    <section className="faction">
      <h2>
        Legiones Daemonica
        {finalListType}
      </h2>
      <Outlet />
    </section>
  )
}
