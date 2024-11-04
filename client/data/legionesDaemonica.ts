import { UnitData } from '../../models/models'
// x: {name: "x", points: 0, models: []},

export const dreadCarnivalUnits: Record<string, UnitData>[] = [
  {
    contorted: { name: 'Contorted Epitome', points: [80], models: [1] },
    infernal: { name: 'Infernal Enrapturess', points: [60], models: [1] },
    masque: { name: 'The Masque of Slaanesh', points: [85], models: [1] },
    trance: { name: 'Tranceweaver', points: [60], models: [1] },
  },
  {
    daemonettes1: { name: 'Daemonettes', points: [100], models: [10] },
    daemonettes2: { name: 'Daemonettes', points: [100], models: [10] },
    daemonettes3: { name: 'Daemonettes', points: [100], models: [10] },
    fiends: { name: 'Fiends', points: [180], models: [3] },
  },
]
