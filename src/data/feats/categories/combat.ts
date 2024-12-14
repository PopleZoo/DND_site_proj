import { Feat } from '../../../types/character';
import { FEAT_CATEGORIES } from '../constants';

export const combatFeats: Feat[] = [
  {
    id: 'shield-master',
    name: 'Shield Master',
    description: 'Expert at shield combat',
    benefits: [
      'Bonus action to shove with shield',
      'Add shield\'s AC bonus to Dexterity saves', // Fixed apostrophe
      'Take no damage on successful Dexterity saves'
    ],
    prerequisites: null,
    category: FEAT_CATEGORIES.COMBAT
  },
  // ... other combat feats
];