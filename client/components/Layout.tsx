import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <h1>
        <Link to="/">40k Boarding Actions</Link>
      </h1>
      <Outlet />
    </>
  )
}
