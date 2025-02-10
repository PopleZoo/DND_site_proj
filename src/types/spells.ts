export type SpellSchool =
  | 'Abjuration'
  | 'Conjuration'
  | 'Divination'
  | 'Enchantment'
  | 'Evocation'
  | 'Illusion'
  | 'Necromancy'
  | 'Transmutation';

export interface Spell {
  id: string;
  name: string;
  level: number;
  school: SpellSchool;
  castingTime: string; // New property
  duration: string;    // New property
  range: string;       // New property
  description: string;
}

export interface SpellList {
  spellcastingAbility: string;
  spellcastingFocus: string;
  cantrips: Spell[];
  spells: Record<number, Spell[]>;
}
