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
  description: string;
}

export interface SpellList {
  spellcastingAbility: string;
  spellcastingFocus: string;
  cantrips: Spell[];
  spells: Record<number, Spell[]>;
}