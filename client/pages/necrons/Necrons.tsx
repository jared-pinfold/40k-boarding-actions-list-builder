import { Outlet, useLocation } from 'react-router-dom'

export default function Necrons() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  return (
    <section className="faction">
      <h2>
        Necrons
        {listType === 'Necrons' ? '' : `: ${listType}`}
      </h2>
      <Outlet />
    </section>
  )
}