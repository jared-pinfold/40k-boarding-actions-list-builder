import { Outlet, useLocation } from 'react-router-dom'

export default function HereticAstartes() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  return (
    <>
      <h2>
        Heretic Astartes{listType === 'Heretic Astartes' ? '' : `: ${listType}`}
      </h2>
      <Outlet />
    </>
  )
}
