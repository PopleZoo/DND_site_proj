import { Feat } from '../../types/character';
import { FEAT_CATEGORIES } from './categories';

export const generalFeats: Feat[] = [
  {
    id: 'actor',
    name: 'Actor',
    description: 'Master of mimicry and dramatic flair',
    benefits: [
      'Proficiency in Deception and Performance',
      'Advantage on Charisma (Deception) and (Performance) checks when passing as another person',
      'Mimic speech patterns and accents of others'
    ],
    prerequisites: null,
    category: FEAT_CATEGORIES.GENERAL
  },
  // Add more general feats with category...
];