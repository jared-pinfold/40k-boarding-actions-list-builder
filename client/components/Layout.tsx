import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()
    .pathname.split('/')
    .map((str) =>
      str
        .split('-')
        .map((word) => word.replace(word[0], word[0]?.toUpperCase()))
        .join(' '),
    )
  console.log(location)
  return (
    <div className="backgroundContainer">
      <header>
        <h1>
          <Link to="/">40k Boarding Actions</Link>
        </h1>
        {location[1] ? ( //if it's a faction route
          <h2>
            {factionName(location[1])}
            {`${location[2] ? `: ${listName(location[2])}` : ''}`}
          </h2>
        ) : (
          <h2>Select your faction</h2> //if it's the root route
        )}
      </header>
      <Outlet />
    </div>
  )
}

function listName(name: string): string {
  switch (name) {
    case 'Penitents And Pilgrims':
      return 'Penitents and Pilgrims'
    case 'Star Dancer Masque':
      return 'Star-Dancer Masque'
    case 'Khaines Arrow':
      return "Khaine's Arrow"
    case 'Voidships Company':
      return "Voidship's Company"
    case 'Arch Contaminators':
      return 'Arch-Contaminators'
    case 'Ship Killer Cult':
      return 'Ship-Killer Cult'
    case 'Rotten And Rusted':
      return 'Rotten and Rusted'
    case 'Voyagers In Darkness':
      return 'Voyagers in Darkness'
    default:
      return name
  }
}

function factionName(name: string): string {
  if (name === 'Tau') return "T'au"
  if (name === 'Emperors Children') return "Emperor's Children"
  return name
}
