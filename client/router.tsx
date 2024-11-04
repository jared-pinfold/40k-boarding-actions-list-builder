import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Updates from './pages/Updates'
import AdeptusAstartes from './pages/adeptusAstartes/AdeptusAstartes'
import AdeptusAstartesMenu from './pages/adeptusAstartes/AdeptusAstartesMenu'
import TerminatorAssault from './pages/adeptusAstartes/TerminatorAssault'
import LegionesDaemonica from './pages/legionesDaemonica/LegionesDaemonica'
import LegionesDaemonicaMenu from './pages/legionesDaemonica/LegionesDaemonicaMenu'
import DreadCarnival from './pages/legionesDaemonica/DreadCarnival'
import Aeldari from './pages/aeldari/Aeldari'
import AeldariMenu from './pages/aeldari/AeldariMenu'
import WraithsOfTheVoid from './pages/aeldari/WraithsOfTheVoid'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="updates" element={<Updates />} />
      <Route path="adeptus-astartes/" element={<AdeptusAstartes />}>
        <Route index element={<AdeptusAstartesMenu />} />
        <Route path="terminator-assault" element={<TerminatorAssault />} />
      </Route>
      <Route path="aeldari/" element={<Aeldari />}>
        <Route index element={<AeldariMenu />} />
        <Route path="wraiths-of-the-void" element={<WraithsOfTheVoid />} />
      </Route>
      <Route path="legiones-daemonica/" element={<LegionesDaemonica />}>
        <Route index element={<LegionesDaemonicaMenu />} />
        <Route path="dread-carnival" element={<DreadCarnival />} />
      </Route>
    </Route>,
  ),
)

export default router
