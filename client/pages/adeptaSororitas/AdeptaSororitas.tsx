import { Outlet, useLocation } from 'react-router-dom'

export default function AdeptaSororitas() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')

  const finalListType =
    listType === 'Adepta Sororitas'
      ? ''
      : listType === 'Penitents And Pilgrims'
        ? ': Penitents and Pilgrims'
        : `: ${listType}`

  return (
    <section className="faction">
      <h2>Adepta Sororitas{finalListType}</h2>
      <Outlet />
    </section>
  )
}
