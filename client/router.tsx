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
  orks as o,
  leaguesOfVotann as lov,
  necrons as n,
  greyKnights as gk,
  drukhari as d,
  deathGuard as dg,
  astraMilitarum as ami,
  agentsOfTheImperium as ai,
} from './components/FactionImports'

import Layout from './components/Layout'
import Home from './pages/Home'
import Updates from './pages/Updates'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="updates" element={<Updates />} />

      <Route path="adepta-sororitas/" element={<as.AdeptaSororitasMenu />} />
      <Route
        path="adepta-sororitas/penitents-and-pilgrims"
        element={<as.PenitentsAndPilgrims />}
      />
      <Route
        path="adepta-sororitas/pious-protectors"
        element={<as.PiousProtectors />}
      />

      <Route path="adeptus-astartes/" element={<aa.AdeptusAstartesMenu />} />
        <Route path="adeptus-astartes/boarding-strike" element={<aa.BoardingStrike />} />
        <Route path="adeptus-astartes/pilum-strike" element={<aa.PilumStrike />} />
        <Route path="adeptus-astartes/terminator-assault" element={<aa.TerminatorAssault />} />
    

      <Route path="adeptus-custodes/" element={<ac.AdeptusCustodesMenu />} />
        <Route
          path="adeptus-custodes/black-ship-guardians"
          element={<ac.BlackShipGuardians />}
        />

      <Route path="adeptus-mechanicus/" element={<am.AdeptusMechanicusMenu />} />
        <Route path="adeptus-mechanicus/electromartyrs" element={<am.Electromartyrs />} />
        <Route path="adeptus-mechanicus/machine-cult" element={<am.MachineCult />} />
        <Route path="adeptus-mechanicus/response-clade" element={<am.ResponseClade />} />

      <Route path="aeldari/" element={<a.AeldariMenu />} />
        <Route path="aeldari/khaines-arrow" element={<a.KhainesArrow />} />
        <Route path="aeldari/protector-host" element={<a.ProtectorHost />} />
        <Route path="aeldari/wraiths-of-the-void" element={<a.WraithsOfTheVoid />} />
        <Route path="aeldari/star-dancer-masque" element={<a.StarDancerMasque />} />

      <Route
        path="agents-of-the-imperium/"
        element={<ai.AgentsOfTheImperiumMenu />}
      />
        <Route path="agents-of-the-imperium/interdiction-team" element={<ai.InterdictionTeam />} />
        <Route path="agents-of-the-imperium/voidships-company" element={<ai.VoidshipsCompany />} />

      <Route path="astra-militarum/" element={<ami.AstraMilitarumMenu />} />
        <Route path="astra-militarum/embarked-regiment" element={<ami.EmbarkedRegiment />} />
        <Route
          path="astra-militarum/tempestus-boarding-regiment"
          element={<ami.TempestusBoardingRegiment />}
        />

      <Route path="death-guard/" element={<dg.DeathGuardMenu />} />
        <Route path="death-guard/arch-contaminators" element={<dg.ArchContaminators />} />
        <Route path="death-guard/unclean-uprising" element={<dg.UncleanUprising />} />
        <Route path="death-guard/vectors-of-decay" element={<dg.VectorsOfDecay />} />

      <Route path="drukhari/" element={<d.DrukhariMenu />} />
        <Route path="drukhari/kabalite-corsairs" element={<d.KabaliteCorsairs />} />
        <Route path="drukhari/painbringers" element={<d.Painbringers />} />
        <Route path="drukhari/ship-killer-cult" element={<d.ShipKillerCult />} />
        <Route path="drukhari/space-lane-raiders" element={<d.SpaceLaneRaiders />} />

      <Route path="genestealer-cults/" element={<gc.GenestealerCultsMenu />} />
        <Route path="genestealer-cults/cult-unveiled" element={<gc.CultUnveiled />} />
        <Route path="genestealer-cults/genespawn-onslaught" element={<gc.GenespawnOnslaught />} />
        <Route path="genestealer-cults/infestation-swarm" element={<gd.InfestationSwarm />} />

      <Route path="grey-knights/" element={<gk.GreyKnightsMenu />} />
        <Route path="grey-knights/baneslayer-strike" element={<gk.BaneslayerStrike />} />
        <Route path="grey-knights/void-purge-force" element={<gk.VoidPurgeForce />} />

      <Route path="heretic-astartes/" element={<ha.HereticAstartesMenu />} />
        <Route path="heretic-astartes/champions-of-chaos" element={<ha.ChampionsOfChaos />} />
        <Route path="heretic-astartes/infernal-reavers" element={<ha.InfernalReavers />} />
        <Route path="heretic-astartes/underdeck-uprising" element={<ha.UnderdeckUprising />} />

      <Route path="leagues-of-votann/" element={<lov.LeaguesOfVotannMenu />} />
        <Route path="leagues-of-votann/hearthfire-strike" element={<lov.HearthfireStrike />} />
        <Route path="leagues-of-votann/void-salvagers" element={<lov.VoidSalvagers />} />

      <Route path="legiones-daemonica/" element={<ld.LegionesDaemonicaMenu />} />
        <Route path="legiones-daemonica/daemonic-incursion" element={<ld.DaemonicIncursion />} />
        <Route path="legiones-daemonica/dread-carnival" element={<ld.DreadCarnival />} />
        <Route path="legiones-daemonica/infernal-onslaught" element={<ld.InfernalOnslaught />} />
        <Route
          path="legiones-daemonica/pandaemoniac-inferno"
          element={<ld.PandaemoniacInferno />}
        />
        <Route path="legiones-daemonica/rotten-and-rusted" element={<ld.RottenAndRusted />} />

      <Route path="necrons/" element={<n.NecronsMenu />} />
        <Route path="necrons/canoptek-harvesters" element={<n.CanoptekHarvesters />} />
        <Route path="necrons/deranged-outcasts" element={<n.DerangedOutcasts />} />
        <Route path="necrons/tomb-ship-compliment" element={<n.TombShipCompliment />} />

      <Route path="orks/" element={<o.OrksMenu />} />
        <Route path="orks/kaptin-killers" element={<o.KaptinKillers />} />
        <Route path="orks/ramship-raiders" element={<o.RamshipRaiders />} />

      <Route path="thousand-sons/" element={<ts.ThousandSonsMenu />} />
        <Route path="thousand-sons/chosen-cabal" element={<ts.ChosenCabal />} />
        <Route path="thousand-sons/devoted-thralls" element={<ts.DevotedThralls />} />
        <Route path="thousand-sons/fateseekers" element={<ts.Fateseekers />} />

      <Route path="tau/" element={<tau.TauMenu />} />
        <Route path="tau/kroot-raiding-party" element={<tau.KrootRaidingParty />} />
        <Route path="tau/starfire-cadre" element={<tau.StarfireCadre />} />

      <Route path="tyranids/" element={<t.TyranidsMenu />} />
        <Route path="tyranids/infestation-swarm" element={<gd.InfestationSwarm />} />
        <Route path="tyranids/biotide" element={<t.Biotide />} />
        <Route path="tyranids/boarding-swarm" element={<t.BoardingSwarm />} />
        <Route path="tyranids/tyranid-attack" element={<t.TyranidAttack />} />

      <Route path="world-eaters/" element={<we.WorldEatersMenu />} />
        <Route path="world-eaters/boarding-butchers" element={<we.BoardingButchers />} />
        <Route path="world-eaters/skullsworn" element={<we.Skullsworn />} />
      </Route>
  ),
)

export default router
