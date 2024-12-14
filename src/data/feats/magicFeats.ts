import { Feat } from '../../types/character';

export const magicFeats: Feat[] = [
  {
    id: 'ritual-caster',
    name: 'Ritual Caster',
    description: 'Master of ritual magic',
    benefits: [
      'Learn two 1st-level ritual spells',
      'Can cast known ritual spells as rituals',
      'Can copy ritual spells into your ritual book'
    ],
    prerequisites: {
      requiredAbilityScore: { 
        intelligence: 13,
        wisdom: 13
      }
    }
  },
  {
    id: 'war-caster',
    name: 'War Caster',
    description: 'Master of combat casting',
    benefits: [
      'Advantage on Constitution saves for concentration',
      'Cast spells with somatic components while holding weapons/shield',
      'Cast spell as opportunity attack'
    ],
    prerequisites: {
      requiredFeature: 'Spellcasting'
    }
  },
  // Add more magic feats...
];