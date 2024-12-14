import { Subclass } from '../../../types/character';

export const worldTree: Subclass = {
  id: 'world-tree',
  name: 'Path of the World Tree',
  parentClass: 'barbarian',
  description: 'A primal path that connects to the cosmic world tree and its natural powers',
  features: [
    {
      id: 'root-walker',
      name: 'Root Walker',
      description: 'While raging, you can use a bonus action to teleport up to 30 feet to an unoccupied space you can see',
      level: 3
    },
    {
      id: 'resilient-form',
      name: 'Resilient Form',
      description: 'Gain resistance to cold, fire, and lightning damage while raging',
      level: 6
    },
    {
      id: 'branching-strike',
      name: 'Branching Strike',
      description: 'Your melee attacks reach 10 feet further and deal additional force damage while raging',
      level: 10
    },
    {
      id: 'heartwood-resilience',
      name: 'Heartwood Resilience',
      description: 'While raging, you have advantage on all saving throws and can't be critically hit',
      level: 14
    }
  ],
  isHomebrew: false
};