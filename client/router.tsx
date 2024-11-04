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
import LegionesDaemonica from './pages/legionesDaemonica/LegionesDaemonica'
import LegionesDaemonicaMenu from './pages/legionesDaemonica/LegionesDaemonicaMenu'
import DreadCarnival from './pages/legionesDaemonica/DreadCarnival'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Factions />} />
      <Route path="adeptus-astartes/" element={<AdeptusAstartes />}>
        <Route index element={<AdeptusAstartesMenu />} />
        <Route path="terminator-assault" element={<TerminatorAssault />} />
      </Route>
      <Route path="legiones-daemonica/" element={<LegionesDaemonica />}>
        <Route index element={<LegionesDaemonicaMenu />} />
        <Route path="dread-carnival" element={<DreadCarnival />} />
      </Route>
    </Route>,
  ),
)

export default router
