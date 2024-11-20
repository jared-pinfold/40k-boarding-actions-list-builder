import { Outlet, useLocation } from 'react-router-dom'

export default function Drukhari() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  const finalListType =
    listType === 'Drukhari'
      ? ''
      : listType === 'Ship Killer Cult'
        ? ': Ship-Killer Cult'
        : `: ${listType}`
  return (
    <section className="faction">
      <h2>
        Drukhari
        {finalListType}
      </h2>
      <Outlet />
    </section>
  )
}
