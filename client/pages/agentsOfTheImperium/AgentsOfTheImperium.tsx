import { Outlet, useLocation } from 'react-router-dom'

export default function AgentsOfTheImperium() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  const finalListType =
    listType === 'Agents Of The Imperium'
      ? ''
      : listType === 'Voidships Company'
        ? ": Voidship's Company"
        : `: ${listType}`
  return (
    <section className="faction">
      <h2>Agents of the Imperium{finalListType}</h2>
      <Outlet />
    </section>
  )
}
