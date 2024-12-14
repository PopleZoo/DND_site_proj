import { Feat } from '../../types/character';
import { FEAT_CATEGORIES } from './categories';

export const combatFeats: Feat[] = [
  {
    id: 'defensive-duelist',
    name: 'Defensive Duelist',
    description: 'Master of defensive sword techniques',
    benefits: [
      'Add proficiency bonus to AC against one melee attack'
    ],
    prerequisites: {
      requiredAbilityScore: { dexterity: 13 }
    },
    category: FEAT_CATEGORIES.COMBAT
  },
  // Add more combat feats with category...
];