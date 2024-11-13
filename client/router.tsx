import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import {
  adeptusAstartes as aa,
  legionesDaemonica as ld,
  hereticAstartes as ha,
  aeldari as a,
  adeptaSororitas as as,
  adeptusMechanicus as am,
  adeptusCustodes as ac,
  genestealerCults as gc,
  greatDevourer as gd,
  tyranids as t,
  worldEaters as we,
  thousandSons as ts,
  tau,
} from './components/FactionImports'

import Layout from './components/Layout'
import Home from './pages/Home'
import Updates from './pages/Updates'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="updates" element={<Updates />} />

      <Route path="adepta-sororitas/" element={<as.AdeptaSororitas />}>
        <Route index element={<as.AdeptaSororitasMenu />} />
        <Route path="pious-protectors" element={<as.PiousProtectors />} />
      </Route>

      <Route path="adeptus-astartes/" element={<aa.AdeptusAstartes />}>
        <Route index element={<aa.AdeptusAstartesMenu />} />
        <Route path="boarding-strike" element={<aa.BoardingStrike />} />
        <Route path="pilum-strike" element={<aa.PilumStrike />} />
        <Route path="terminator-assault" element={<aa.TerminatorAssault />} />
      </Route>

      <Route path="adeptus-custodes/" element={<ac.AdeptusCustodes />}>
        <Route index element={<ac.AdeptusCustodesMenu />} />
        <Route
          path="black-ship-guardians"
          element={<ac.BlackShipGuardians />}
        />
      </Route>

      <Route path="adeptus-mechanicus/" element={<am.AdeptusMechanicus />}>
        <Route index element={<am.AdeptusMechanicusMenu />} />
        <Route path="electromartyrs" element={<am.Electromartyrs />} />
        <Route path="machine-cult" element={<am.MachineCult />} />
        <Route path="response-clade" element={<am.ResponseClade />} />
      </Route>

      <Route path="aeldari/" element={<a.Aeldari />}>
        <Route index element={<a.AeldariMenu />} />
        <Route path="khaines-arrow" element={<a.KhainesArrow />} />
        <Route path="protector-host" element={<a.ProtectorHost />} />
        <Route path="wraiths-of-the-void" element={<a.WraithsOfTheVoid />} />
        <Route path="star-dancer-masque" element={<a.StarDancerMasque />} />
      </Route>

      <Route path="genestealer-cults/" element={<gc.GenestealerCults />}>
        <Route index element={<gc.GenestealerCultsMenu />} />
        <Route path="infestation-swarm" element={<gd.InfestationSwarm />} />
      </Route>

      <Route path="heretic-astartes/" element={<ha.HereticAstartes />}>
        <Route index element={<ha.HereticAstartesMenu />} />
        <Route path="champions-of-chaos" element={<ha.ChampionsOfChaos />} />
        <Route path="infernal-reavers" element={<ha.InfernalReavers />} />
        <Route path="underdeck-uprising" element={<ha.UnderdeckUprising />} />
      </Route>

      <Route path="legiones-daemonica/" element={<ld.LegionesDaemonica />}>
        <Route index element={<ld.LegionesDaemonicaMenu />} />
        <Route path="daemonic-incursion" element={<ld.DaemonicIncursion />} />
        <Route path="dread-carnival" element={<ld.DreadCarnival />} />
      </Route>

      <Route path="thousand-sons/" element={<ts.ThousandSons />}>
        <Route index element={<ts.ThousandSonsMenu />} />
        <Route path="chosen-cabal" element={<ts.ChosenCabal />} />
        <Route path="devoted-thralls" element={<ts.DevotedThralls />} />
        <Route path="fateseekers" element={<ts.Fateseekers />} />
      </Route>

      <Route path="tau/" element={<tau.Tau />}>
        <Route index element={<tau.TauMenu />} />
        <Route path="kroot-raiding-party" element={<tau.KrootRaidingParty />} />
      </Route>

      <Route path="tyranids/" element={<t.Tyranids />}>
        <Route index element={<t.TyranidsMenu />} />
        <Route path="infestation-swarm" element={<gd.InfestationSwarm />} />
        <Route path="biotide" element={<t.Biotide />} />
        <Route path="boarding-swarm" element={<t.BoardingSwarm />} />
        <Route path="tyranid-attack" element={<t.TyranidAttack />} />
      </Route>

      <Route path="world-eaters/" element={<we.WorldEaters />}>
        <Route index element={<we.WorldEatersMenu />} />
        <Route path="boarding-butchers" element={<we.BoardingButchers />} />
        <Route path="skullsworn" element={<we.Skullsworn />} />
      </Route>
    </Route>,
  ),
)

export default router
