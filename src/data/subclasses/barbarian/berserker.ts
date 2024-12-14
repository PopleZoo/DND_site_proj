import { Subclass } from '../../../types/character';

export const berserker: Subclass = {
  id: 'berserker',
  name: 'Path of the Berserker',
  parentClass: 'barbarian',
  description: 'A primal path that channels pure rage and aggression',
  features: [
    {
      id: 'frenzy',
      name: 'Frenzy',
      description: 'While raging, you can make a single melee weapon attack as a bonus action on each of your turns',
      level: 3
    },
    {
      id: 'mindless-rage',
      name: 'Mindless Rage',
      description: 'You cannot be charmed or frightened while raging',
      level: 6
    },
    {
      id: 'intimidating-presence',
      name: 'Intimidating Presence',
      description: 'Use your action to frighten someone with your menacing presence',
      level: 10
    },
    {
      id: 'retaliation',
      name: 'Retaliation',
      description: 'When you take damage from a creature within 5 feet, you can use your reaction to make a melee weapon attack',
      level: 14
    }
  ],
  isHomebrew: false
};