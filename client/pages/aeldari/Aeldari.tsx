import { Outlet, useLocation } from 'react-router-dom'

export default function Aeldari() {
  const location = useLocation().pathname.split('/')
  const listType = location[location.length - 1]
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
  return (
    <>
      <h2>Aeldari{listType === 'Aeldari' ? '' : `: ${listType}`}</h2>
      <Outlet />
    </>
  )
}
