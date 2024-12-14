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