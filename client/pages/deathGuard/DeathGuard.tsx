import { Outlet, useLocation } from 'react-router-dom'

export default function DeathGuard() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  const finalListType =
    listType === 'Death Guard'
      ? ''
      : listType === 'Arch Contaminators'
        ? ': Arch-Contaminators'
        : `: ${listType}`
  return (
    <section className="faction">
      <h2>
        Death Guard
        {finalListType}
      </h2>
      <Outlet />
    </section>
  )
}
