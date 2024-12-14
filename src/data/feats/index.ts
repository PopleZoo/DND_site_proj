import { Feat } from '../../types/character';

export const FEAT_CATEGORIES = {
  GENERAL: 'general',
  COMBAT: 'combat',
  MAGIC: 'magic',
  EPIC: 'epic'
} as const;

export type FeatCategory = typeof FEAT_CATEGORIES[keyof typeof FEAT_CATEGORIES];

export const FEAT_CATEGORY_LABELS: Record<FeatCategory, string> = {
  [FEAT_CATEGORIES.GENERAL]: 'General Feats',
  [FEAT_CATEGORIES.COMBAT]: 'Combat Feats',
  [FEAT_CATEGORIES.MAGIC]: 'Magic Feats',
  [FEAT_CATEGORIES.EPIC]: 'Epic Feats'
};

export const feats: Feat[] = [
  // General Feats
  {
    id: 'actor',
    name: 'Actor',
    description: 'Master of mimicry and dramatic flair',
    benefits: [
      'Advantage on Charisma (Deception) and (Performance) checks',
      'Can mimic speech patterns and accents',
      'Gain expertise in Deception or Performance'
    ],
    prerequisites: null,
    category: FEAT_CATEGORIES.GENERAL
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Always on watch for danger',
    benefits: [
      '+5 to initiative',
      'Cannot be surprised while conscious',
      'No advantage on attacks against you from hidden creatures'
    ],
    prerequisites: null,
    category: FEAT_CATEGORIES.GENERAL
  },

  // Combat Feats
  {
    id: 'defensive-duelist',
    name: 'Defensive Duelist',
    description: 'Master of defensive sword techniques',
    benefits: [
      'Add proficiency bonus to AC against melee attacks',
      'Reaction to boost defense when wielding finesse weapon'
    ],
    prerequisites: {
      requiredAbilityScore: { dexterity: 13 }
    },
    category: FEAT_CATEGORIES.COMBAT
  },
  {
    id: 'great-weapon-master',
    name: 'Great Weapon Master',
    description: 'Master of heavy weapon combat',
    benefits: [
      'Bonus attack on critical hit or reducing enemy to 0 HP',
      '-5 to hit for +10 damage with heavy weapons'
    ],
    prerequisites: {
      requiredProficiency: 'Martial Weapons'
    },
    category: FEAT_CATEGORIES.COMBAT
  },

  // Magic Feats
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

  // Epic Feats
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
  }
];

export function getFeatsByCategory(category: FeatCategory): Feat[] {
  return feats.filter(feat => feat.category === category);
}

export function getFeatById(id: string): Feat | undefined {
  return feats.find(feat => feat.id === id);
}

export function getAllFeats(): Feat[] {
  return feats;
}