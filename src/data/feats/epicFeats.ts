import { Feat } from '../../types/character';

export const epicFeats: Feat[] = [
  {
    id: 'boon-of-fortitude',
    name: 'Boon of Fortitude',
    description: 'Epic blessing of physical resilience',
    benefits: [
      'Increase Constitution by 2',
      'Gain additional hit points equal to level'
    ],
    prerequisites: {
      requiredLevel: 18
    }
  },
  {
    id: 'boon-of-spellcasting',
    name: 'Boon of Spellcasting',
    description: 'Epic blessing of magical power',
    benefits: [
      'Increase maximum spell level by 1',
      'Gain additional spell slot of new maximum level'
    ],
    prerequisites: {
      requiredLevel: 18,
      requiredFeature: 'Spellcasting'
    }
  },
  // Add more epic feats...
];