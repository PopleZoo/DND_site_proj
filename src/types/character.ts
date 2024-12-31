export interface Character {
  id: string;
  name: string;
  level: number;
  race: Race;
  classes: Class[];
  stats: Stats[];
  hitPoints: HitPoints;
  armorClass: number;
  initiative: number;
  speed: number;
  inventory: Inventory[];
  spells: Spells;
  features: Feature[];
  conditions: Condition[];
  notes: string[];
  background?: Background;
  currencies: Currencies;
  preferences: Preferences;
}

export interface Race {
  baseRaceName: string;
  subRaceName?: string;
  isHomebrew: boolean;
  racialTraits: RacialTrait[];
}

export interface RacialTrait {
  name: string;
  description: string;
  snippet: string;
}

export interface Class {
  id: string;
  name: string;
  level: number;
  hitDice: number;
  isStartingClass: boolean;
  definition: ClassDefinition;
  subclass?: Subclass;
  isHomebrew: boolean;
}

export interface ClassDefinition {
  name: string;
  description: string;
  hitDice: number;
  spellcastingAbility?: number;
  classFeatures: ClassFeature[];
}

export interface Subclass {
  name: string;
  description: string;
  features: ClassFeature[];
}

export interface ClassFeature {
  name: string;
  description: string;
  level: number;
  isHomebrew: boolean;
}

export interface Stats {
  id: number;
  name: string;
  value: number;
  modifier: number;
  bonusValue: number | null;
  overrideValue: number | null;
}

export interface HitPoints {
  current: number;
  max: number;
  temp: number;
  bonusHitPoints: number;
  overrideHitPoints: number | null;
}

export interface Inventory {
  id: string;
  name: string;
  type: string;
  equipped: boolean;
  quantity: number;
  weight: number;
  definition: ItemDefinition;
  isAttuned: boolean;
  isHomebrew: boolean;
}

export interface ItemDefinition {
  description: string;
  armorClass?: number;
  damage?: ItemDamage;
  properties?: string[];
  rarity: string;
  magic: boolean;
  cost?: number;
  requiresAttunement: boolean;
}

export interface ItemDamage {
  diceCount: number;
  diceValue: number;
  diceString: string;
  type: string;
}

export interface Spells {
  class: ClassSpell[];
  race: RaceSpell[];
  item: ItemSpell[];
}

export interface ClassSpell {
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: number;
  range: SpellRange;
  components: string[];
  duration: SpellDuration;
  description: string;
  prepared: boolean;
  alwaysPrepared: boolean;
  ritual: boolean;
  concentration: boolean;
  attackType?: number;
  saveDC?: number;
  damage?: SpellDamage[];
}

export interface SpellRange {
  origin: string;
  value: number;
  aoeType?: string;
  aoeValue?: number;
}

export interface SpellDuration {
  type: string;
  value: number;
  unit: string;
}

export interface SpellDamage {
  diceString: string;
  type: string;
  scaling?: any;
}

export interface RaceSpell extends Omit<ClassSpell, 'prepared'> {}
export interface ItemSpell extends Omit<ClassSpell, 'prepared'> {}

export interface Feature {
  name: string;
  description: string;
  source: string;
  level?: number;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
}

export interface Background {
  name: string;
  description: string;
  feature: {
    name: string;
    description: string;
  };
  isCustom: boolean;
}

export interface Currencies {
  cp?: number;
  sp?: number;
  ep?: number;
  gp?: number;
  pp?: number;
}

export interface Preferences {
  useHomebrewContent?: boolean;
  [key: string]: any;
}