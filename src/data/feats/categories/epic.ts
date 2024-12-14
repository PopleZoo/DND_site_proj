import { Feat } from '../../../types/character';
import { FEAT_CATEGORIES } from '../constants';

export const epicFeats: Feat[] = [
  {
    id: 'boon-of-high-magic',
    name: 'Boon of High Magic',
    description: 'Epic mastery of spellcasting',
    benefits: [
      'Regain one 3rd level spell slot on short rest',
      'Learn one 3rd level spell from any class'
    ],
    prerequisites: {
      requiredLevel: 18,
      requiredFeature: 'Spellcasting'
    },
    category: FEAT_CATEGORIES.EPIC
  },
  {
    id: 'boon-of-fortitude',
    name: 'Boon of Fortitude',
    description: 'Epic physical resilience',
    benefits: [
      'Increase Constitution by 2',
      'Gain additional hit points equal to level',
      'Advantage on death saving throws'
    ],
    prerequisites: {
      requiredLevel: 18
    },
    category: FEAT_CATEGORIES.EPIC
  },
  {
    id: 'boon-of-combat-prowess',
    name: 'Boon of Combat Prowess',
    description: 'Epic combat mastery',
    benefits: [
      'Additional attack on Attack action',
      'Critical hits deal maximum damage',
      'Advantage on initiative rolls'
    ],
    prerequisites: {
      requiredLevel: 18
    },
    category: FEAT_CATEGORIES.EPIC
  },
  {
    id: 'boon-of-fate',
    name: 'Boon of Fate',
    description: 'Epic manipulation of destiny',
    benefits: [
      'Three luck points per long rest',
      'Reroll any d20 roll',
      'Force creature to reroll attack against you'
    ],
    prerequisites: {
      requiredLevel: 18
    },
    category: FEAT_CATEGORIES.EPIC
  },
  {
    id: 'boon-of-immortality',
    name: 'Boon of Immortality',
    description: 'Epic life force',
    benefits: [
      'Stop aging',
      'Cannot be aged magically',
      'Cannot die of old age',
      'Advantage on saves against disease'
    ],
    prerequisites: {
      requiredLevel: 18
    },
    category: FEAT_CATEGORIES.EPIC
  }
];