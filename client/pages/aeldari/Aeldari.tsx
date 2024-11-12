import { Outlet, useLocation } from 'react-router-dom'

export default function Aeldari() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  const finalListType =
    listType === 'Aeldari'
      ? ''
      : listType === 'Star Dancer Masque'
        ? ': Star-Dancer Masque'
        : listType === 'Khaines Arrow'
          ? ": Khaine's Arrow"
          : `: ${listType}`

  return (
    <section className="faction">
      <h2>Aeldari{finalListType}</h2>
      <Outlet />
    </section>
  )
}
