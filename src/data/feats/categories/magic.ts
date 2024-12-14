import { Feat } from '../../../types/character';
import { FEAT_CATEGORIES } from '../constants';

export const magicFeats: Feat[] = [
  {
    id: 'war-caster',
    name: 'War Caster',
    description: 'Master of combat spellcasting',
    benefits: [
      'Advantage on Constitution saves for concentration',
      'Cast spells with somatic components while wielding weapons/shield',
      'Cast spell as opportunity attack'
    ],
    prerequisites: {
      requiredFeature: 'Spellcasting'
    },
    category: FEAT_CATEGORIES.MAGIC
  },
  {
    id: 'spell-sniper',
    name: 'Spell Sniper',
    description: 'Master of ranged spellcasting',
    benefits: [
      'Double range of attack roll spells',
      'Ignore half and three-quarters cover',
      'Learn one ranged cantrip'
    ],
    prerequisites: {
      requiredFeature: 'Spellcasting'
    },
    category: FEAT_CATEGORIES.MAGIC
  },
  {
    id: 'elemental-adept',
    name: 'Elemental Adept',
    description: 'Master of elemental magic',
    benefits: [
      'Spells ignore resistance to chosen damage type',
      'Treat 1s on damage dice as 2s for chosen element',
      'Choose from acid, cold, fire, lightning, or thunder'
    ],
    prerequisites: {
      requiredFeature: 'Spellcasting'
    },
    category: FEAT_CATEGORIES.MAGIC
  },
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
    },
    category: FEAT_CATEGORIES.MAGIC
  },
  {
    id: 'metamagic-adept',
    name: 'Metamagic Adept',
    description: 'Limited metamagic abilities',
    benefits: [
      'Learn two Metamagic options',
      'Gain 2 sorcery points to use with Metamagic',
      'Regain spent sorcery points on a long rest'
    ],
    prerequisites: {
      requiredFeature: 'Spellcasting'
    },
    category: FEAT_CATEGORIES.MAGIC
  }
];