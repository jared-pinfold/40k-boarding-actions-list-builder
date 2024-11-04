import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout'
import Factions from './pages/Factions'
import AdeptusAstartes from './pages/adeptusAstartes/AdeptusAstartes'
import AdeptusAstartesMenu from './pages/adeptusAstartes/AdeptusAstartesMenu'
import TerminatorAssault from './pages/adeptusAstartes/TerminatorAssault'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Factions />} />
      <Route path="adeptus-astartes/" element={<AdeptusAstartes />}>
        <Route index element={<AdeptusAstartesMenu />} />
        <Route path="terminator-assault" element={<TerminatorAssault />} />
      </Route>
      {/* <Route path="aeldari/" element={<Continent />}>
        <Route index element={<Home />} />
      </Route> */}
    </Route>,
  ),
)

export default router
