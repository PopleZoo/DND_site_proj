import { Feat } from '../../../types/character';
import { FEAT_CATEGORIES } from '../constants';

export const generalFeats: Feat[] = [
  {
    id: 'observant',
    name: 'Observant',
    description: 'Quick to notice details of your environment',
    benefits: [
      'Increase Intelligence or Wisdom by 1',
      '+5 to passive Perception and Investigation',
      'Can read lips if you can see a creature\'s mouth' // Fixed apostrophe
    ],
    prerequisites: null,
    category: FEAT_CATEGORIES.GENERAL
  },
  // ... other general feats
];