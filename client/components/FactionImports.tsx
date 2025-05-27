// this file imports all of the faction pages and exports them as an object. It's then
// imported in the client/router.tsx file to declutter an already pretty bloated file.

import AdeptusAstartesMenu from '../pages/adeptusAstartes/AdeptusAstartesMenu'
import BoardingStrike from '../pages/adeptusAstartes/BoardingStrike'
import PilumStrike from '../pages/adeptusAstartes/PilumStrike'
import TerminatorAssault from '../pages/adeptusAstartes/TerminatorAssault'
import LegionesDaemonicaMenu from '../pages/legionesDaemonica/LegionesDaemonicaMenu'
import DaemonicIncursion from '../pages/legionesDaemonica/DaemonicIncursion'
import DreadCarnival from '../pages/legionesDaemonica/DreadCarnival'
import AeldariMenu from '../pages/aeldari/AeldariMenu'
import WraithsOfTheVoid from '../pages/aeldari/WraithsOfTheVoid'
import StarDancerMasque from '../pages/aeldari/StarDancerMasque'
import KhainesArrow from '../pages/aeldari/KhainesArrow'
import ProtectorHost from '../pages/aeldari/ProtectorHost'
import HereticAstartesMenu from '../pages/hereticAstartes/HereticAstartesMenu'
import ChampionsOfChaos from '../pages/hereticAstartes/ChampionsOfChaos'
import InfernalReavers from '../pages/hereticAstartes/InfernalReavers'
import UnderdeckUprising from '../pages/hereticAstartes/UnderdeckUprising'
import AdeptaSororitasMenu from '../pages/adeptaSororitas/AdeptaSororitasMenu'
import PiousProtectors from '../pages/adeptaSororitas/PiousProtectors'
import AdeptusMechanicusMenu from '../pages/adeptusMechanicus/AdeptusMechanicusMenu'
import MachineCult from '../pages/adeptusMechanicus/MachineCult'
import ResponseClade from '../pages/adeptusMechanicus/ResponseClade'
import Electromartyrs from '../pages/adeptusMechanicus/Electromartyrs'
import AdeptusCustodesMenu from '../pages/adeptusCustodes/AdeptusCustodesMenu'
import BlackShipGuardians from '../pages/adeptusCustodes/BlackShipGuardians'
import GenestealerCultsMenu from '../pages/genestealerCults/GenestealerCultsMenu'
import InfestationSwarm from '../pages/greatDevourer/InfestationSwarm'
import TyranidsMenu from '../pages/tyranids/TyranidsMenu'
import Biotide from '../pages/tyranids/Biotide'
import WorldEatersMenu from '../pages/worldEaters/WorldEatersMenu'
import Skullsworn from '../pages/worldEaters/Skullsworn'
import BoardingButchers from '../pages/worldEaters/BoardingButchers'
import BoardingSwarm from '../pages/tyranids/BoardingSwarm'
import TyranidAttack from '../pages/tyranids/TyranidAttack'
import ThousandSonsMenu from '../pages/thousandSons/ThousandSonsMenu'
import Fateseekers from '../pages/thousandSons/Fateseekers'
import DevotedThralls from '../pages/thousandSons/DevotedThralls'
import ChosenCabal from '../pages/thousandSons/ChosenCabal'
import TauMenu from '../pages/tau/TauMenu'
import KrootRaidingParty from '../pages/tau/KrootRaidingParty'
import PenitentsAndPilgrims from '../pages/adeptaSororitas/PenitentsAndPilgrims'
import StarfireCadre from '../pages/tau/StarfireCadre'
import PandaemoniacInferno from '../pages/legionesDaemonica/PandaemoniacInferno'
import InfernalOnslaught from '../pages/legionesDaemonica/InfernalOnslaught'
import RottenAndRusted from '../pages/legionesDaemonica/RottenAndRusted'
import GenespawnOnslaught from '../pages/genestealerCults/GenespawnOnslaught'
import CultUnveiled from '../pages/genestealerCults/CultUnveiled'
import OrksMenu from '../pages/orks/OrksMenu'
import KaptinKillers from '../pages/orks/KaptinKillers'
import RamshipRaiders from '../pages/orks/RamshipRaiders'
import LeaguesOfVotannMenu from '../pages/leaguesOfVotann/LeaguesOfVotannMenu'
import HearthfireStrike from '../pages/leaguesOfVotann/HearthfireStrike'
import VoidSalvagers from '../pages/leaguesOfVotann/VoidSalvagers'
import NecronsMenu from '../pages/necrons/NecronsMenu'
import CanoptekHarvesters from '../pages/necrons/CanoptekHarvesters'
import DerangedOutcasts from '../pages/necrons/DerangedOutcasts'
import TombShipCompliment from '../pages/necrons/TombShipCompliment'
import GreyKnightsMenu from '../pages/greyKnights/GreyKnightsMenu'
import BaneslayerStrike from '../pages/greyKnights/BaneslayerStrike'
import VoidPurgeForce from '../pages/greyKnights/VoidPurgeForce'
import DrukhariMenu from '../pages/drukhari/DrukhariMenu'
import Painbringers from '../pages/drukhari/Painbringers'
import ShipKillerCult from '../pages/drukhari/ShipKillerCult'
import KabaliteCorsairs from '../pages/drukhari/KabaliteCorsairs'
import SpaceLaneRaiders from '../pages/drukhari/SpaceLaneRaiders'
import DeathGuardMenu from '../pages/deathGuard/DeathGuardMenu'
import ArchContaminators from '../pages/deathGuard/ArchContaminators'
import UncleanUprising from '../pages/deathGuard/UncleanUprising'
import VectorsOfDecay from '../pages/deathGuard/VectorsOfDecay'
import AstraMilitarumMenu from '../pages/astraMilitarum/AstraMilitarumMenu'
import TempestusBoardingRegiment from '../pages/astraMilitarum/TempestusBoardingRegiment'
import EmbarkedRegiment from '../pages/astraMilitarum/EmbarkedRegiment'
import AgentsOfTheImperiumMenu from '../pages/agentsOfTheImperium/AgentsOfTheImperiumMenu'
import InterdictionTeam from '../pages/agentsOfTheImperium/InterdictionTeam'
import VoidshipsCompany from '../pages/agentsOfTheImperium/VoidshipsCompany'
import VoyagersInDarkness from '../pages/adeptusCustodes/VoyagersInDarkness'
import SublimeStrike from '../pages/emperorsChildren/SublimeStrike'
import EmperorsChildrenMenu from '../pages/emperorsChildren/EmperorsChildrenMenu'

export const adeptusAstartes = {
  AdeptusAstartesMenu,
  BoardingStrike,
  PilumStrike,
  TerminatorAssault,
}
export const legionesDaemonica = {
  LegionesDaemonicaMenu,
  DreadCarnival,
  DaemonicIncursion,
  PandaemoniacInferno,
  InfernalOnslaught,
  RottenAndRusted,
}
export const aeldari = {
  AeldariMenu,
  WraithsOfTheVoid,
  StarDancerMasque,
  KhainesArrow,
  ProtectorHost,
}
export const hereticAstartes = {
  HereticAstartesMenu,
  ChampionsOfChaos,
  InfernalReavers,
  UnderdeckUprising,
}
export const adeptaSororitas = {
  AdeptaSororitasMenu,
  PiousProtectors,
  PenitentsAndPilgrims,
}
export const adeptusMechanicus = {
  AdeptusMechanicusMenu,
  MachineCult,
  ResponseClade,
  Electromartyrs,
}
export const adeptusCustodes = {
  AdeptusCustodesMenu,
  BlackShipGuardians,
  VoyagersInDarkness,
}
export const genestealerCults = {
  GenestealerCultsMenu,
  GenespawnOnslaught,
  CultUnveiled,
}
export const greatDevourer = { InfestationSwarm }
export const tyranids = {
  TyranidsMenu,
  Biotide,
  BoardingSwarm,
  TyranidAttack,
}
export const worldEaters = {
  WorldEatersMenu,
  Skullsworn,
  BoardingButchers,
}
export const thousandSons = {
  ThousandSonsMenu,
  Fateseekers,
  DevotedThralls,
  ChosenCabal,
}
export const tau = {
  TauMenu,
  KrootRaidingParty,
  StarfireCadre,
}
export const orks = {
  OrksMenu,
  KaptinKillers,
  RamshipRaiders,
}
export const leaguesOfVotann = {
  LeaguesOfVotannMenu,
  HearthfireStrike,
  VoidSalvagers,
}
export const necrons = {
  NecronsMenu,
  CanoptekHarvesters,
  DerangedOutcasts,
  TombShipCompliment,
}
export const greyKnights = {
  GreyKnightsMenu,
  BaneslayerStrike,
  VoidPurgeForce,
}
export const drukhari = {
  DrukhariMenu,
  Painbringers,
  ShipKillerCult,
  KabaliteCorsairs,
  SpaceLaneRaiders,
}
export const deathGuard = {
  DeathGuardMenu,
  ArchContaminators,
  UncleanUprising,
  VectorsOfDecay,
}
export const astraMilitarum = {
  AstraMilitarumMenu,
  TempestusBoardingRegiment,
  EmbarkedRegiment,
}
export const agentsOfTheImperium = {
  AgentsOfTheImperiumMenu,
  InterdictionTeam,
  VoidshipsCompany,
}

export const emperorsChildren = {
  EmperorsChildrenMenu,
  SublimeStrike
}