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
import PilumStrike from './pages/adeptusAstartes/PilumStrike'
import BoardingStrike from './pages/adeptusAstartes/BoardingStrike'

import LegionesDaemonica from './pages/legionesDaemonica/LegionesDaemonica'
import LegionesDaemonicaMenu from './pages/legionesDaemonica/LegionesDaemonicaMenu'
import DreadCarnival from './pages/legionesDaemonica/DreadCarnival'
import DaemonicIncursion from './pages/legionesDaemonica/DaemonicIncursion'

import Aeldari from './pages/aeldari/Aeldari'
import AeldariMenu from './pages/aeldari/AeldariMenu'
import WraithsOfTheVoid from './pages/aeldari/WraithsOfTheVoid'
import StarDancerMasque from './pages/aeldari/StarDancerMasque'
import KhainesArrow from './pages/aeldari/KhainesArrow'
import ProtectorHost from './pages/aeldari/ProtectorHost'

import HereticAstartes from './pages/hereticAstartes/HereticAstartes'
import HereticAstartesMenu from './pages/hereticAstartes/HereticAstartesMenu'
import ChampionsOfChaos from './pages/hereticAstartes/ChampionsOfChaos'
import InfernalReavers from './pages/hereticAstartes/InfernalReavers'
import UnderdeckUprising from './pages/hereticAstartes/UnderdeckUprising'

import AdeptaSororitas from './pages/adeptaSororitas/AdeptaSororitas'
import AdeptaSororitasMenu from './pages/adeptaSororitas/AdeptaSororitasMenu'
import PiousProtectors from './pages/adeptaSororitas/PiousProtectors'

import AdeptusMechanicusMenu from './pages/adeptusMechanicus/AdeptusMechanicusMenu'
import AdeptusMechanicus from './pages/adeptusMechanicus/AdeptusMechanicus'
import MachineCult from './pages/adeptusMechanicus/MachineCult'
import ResponseClade from './pages/adeptusMechanicus/ResponseClade'
import Electromartyrs from './pages/adeptusMechanicus/Electromartyrs'

import AdeptusCustodes from './pages/adeptusCustodes/AdeptusCustodes'
import AdeptusCustodesMenu from './pages/adeptusCustodes/AdeptusCustodesMenu'
import BlackShipGuardians from './pages/adeptusCustodes/BlackShipGuardians'

import GenestealerCults from './pages/genestealerCults/GenestealerCults'
import GenestealerCultsMenu from './pages/genestealerCults/GenestealerCultsMenu'

import InfestationSwarm from './pages/greatDevourer/InfestationSwarm'
import Tyranids from './pages/tyranids/Tyranids'
import TyranidsMenu from './pages/tyranids/TyranidsMenu'

import WorldEaters from './pages/worldEaters/WorldEaters'
import WorldEatersMenu from './pages/worldEaters/WorldEatersMenu'
import Skullsworn from './pages/worldEaters/Skullsworn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="updates" element={<Updates />} />
      <Route path="adepta-sororitas/" element={<AdeptaSororitas />}>
        <Route index element={<AdeptaSororitasMenu />} />
        <Route path="pious-protectors" element={<PiousProtectors />} />
      </Route>
      <Route path="adeptus-astartes/" element={<AdeptusAstartes />}>
        <Route index element={<AdeptusAstartesMenu />} />
        <Route path="boarding-strike" element={<BoardingStrike />} />
        <Route path="pilum-strike" element={<PilumStrike />} />
        <Route path="terminator-assault" element={<TerminatorAssault />} />
      </Route>
      <Route path="adeptus-custodes/" element={<AdeptusCustodes />}>
        <Route index element={<AdeptusCustodesMenu />} />
        <Route path="black-ship-guardians" element={<BlackShipGuardians />} />
      </Route>
      <Route path="adeptus-mechanicus/" element={<AdeptusMechanicus />}>
        <Route index element={<AdeptusMechanicusMenu />} />
        <Route path="electromartyrs" element={<Electromartyrs />} />
        <Route path="machine-cult" element={<MachineCult />} />
        <Route path="response-clade" element={<ResponseClade />} />
      </Route>
      <Route path="aeldari/" element={<Aeldari />}>
        <Route index element={<AeldariMenu />} />
        <Route path="khaines-arrow" element={<KhainesArrow />} />
        <Route path="protector-host" element={<ProtectorHost />} />
        <Route path="wraiths-of-the-void" element={<WraithsOfTheVoid />} />
        <Route path="star-dancer-masque" element={<StarDancerMasque />} />
      </Route>
      <Route path="genestealer-cults/" element={<GenestealerCults />}>
        <Route index element={<GenestealerCultsMenu />} />
        <Route path="infestation-swarm" element={<InfestationSwarm />} />
      </Route>
      <Route path="heretic-astartes/" element={<HereticAstartes />}>
        <Route index element={<HereticAstartesMenu />} />
        <Route path="champions-of-chaos" element={<ChampionsOfChaos />} />
        <Route path="infernal-reavers" element={<InfernalReavers />} />
        <Route path="underdeck-uprising" element={<UnderdeckUprising />} />
      </Route>
      <Route path="legiones-daemonica/" element={<LegionesDaemonica />}>
        <Route index element={<LegionesDaemonicaMenu />} />
        <Route path="daemonic-incursion" element={<DaemonicIncursion />} />
        <Route path="dread-carnival" element={<DreadCarnival />} />
      </Route>
      <Route path="tyranids/" element={<Tyranids />}>
        <Route index element={<TyranidsMenu />} />
        <Route path="infestation-swarm" element={<InfestationSwarm />} />
      </Route>
      <Route path="world-eaters/" element={<WorldEaters />}>
        <Route index element={<WorldEatersMenu />} />
        <Route path="skullsworn" element={<Skullsworn />} />
      </Route>
    </Route>,
  ),
)

export default router
