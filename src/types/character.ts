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
  traits?: RacialTrait[];
  configuration?: any;
  feats?: Feat[];
  customAdjustments?: CustomAdjustments;
  characterValues?: any;
  deathSaves?: DeathSaves;
  spellSlots?: SpellSlots;
  pactMagic?: PactMagic;
  sourceCategories?: any;
  options?: any;
  choices?: any;
  actions?: Action[];
  modifiers?: any;
  classSpells?: any;
  customItems?: any;
  campaign?: Campaign;
  creatures?: any;
  inspiration?: boolean;
  optionalFeatures?: OptionalFeatures;
  meta?: Meta;
  bonusActions?: Action[];
  reactions?: Action[];
  proficiencyBonus: number; // Newly added property
  abilityChecks?: AbilityCheck[];  // Optional ability check records
  proficiencies?: Proficiency[];  // List of character proficiencies
}

interface Action {
  id: string; // Unique identifier for the action
  name: string; // The name of the action (e.g., "Attack", "Cast Spell")
  description: string; // A brief description of what the action does
  type: 'Attack' | 'Spell' | 'Bonus' | 'Reaction'; // Type of action (you can expand this if necessary)
  // Add other relevant properties as needed, such as 'damage', 'cost', etc.
}
export interface Proficiency {
  name: string;  // Name of proficiency (e.g., Acrobatics, Athletics, etc.)
  type: 'skill' | 'savingThrow' | 'weapon' | 'armor' | 'tool' | 'language';  // Type of proficiency
  description?: string;  // Optional description for the proficiency (e.g., special effect or use case)
}

export interface AbilityCheck {
  abilityName: string;  // Name of the ability like Strength, Dexterity, etc.
  modifier: number;  // Modifier from character's stat (e.g., +3)
}

export interface Race {
  baseRaceName: string;
  subRaceName?: string;
  VariantName?: string;
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
  features?: ClassFeature[];
}

export interface ClassDefinition {
  name: string;
  description: string;
  hitDice: number;
  primaryAbility: string;
  savingThrows: string[];
  spellcastingAbility?: string;
  classFeatures: ClassFeature[];
  subclasses?: Subclass[];
}

export interface Subclass {
  id: string;
  name: string;
  description: string;
  features: ClassFeature[];
}

export interface ClassFeature {
  id: string;
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
  flaws?: any;
  ideals?: any;
  traits?: any;
  bonds?: any;
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

export interface Feat {
  name: string;
  description: string;
  source: string;
}

export interface CustomAdjustments {
  defense?: any;
  senses?: any;
  speeds?: any;
  proficiencies?: any;
  actions?: any;
}

export interface DeathSaves {
  successes: number;
  failures: number;
  isStable: boolean;
}

export interface SpellSlots {
  [level: string]: {
    max: number;
    current: number;
  };
}

export interface PactMagic {
  max: number;
  current: number;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
}

export interface OptionalFeatures {
  origins?: any;
  classFeatures?: any;
}

export interface LevelGains {
  hitPoints: number;
  proficiencyBonus: number;
  features: ClassFeature[];
  spellcasting?: {
    cantripsKnown: number;
    spellsKnown?: number;
    spellSlots: Record<string, number>;
  };
  abilityScoreImprovement?: boolean;
}

export interface Meta {
  dateModified?: any;
  providedFrom?: any;
  canEdit?: any;
  status?: any;
  statusSlug?: any;
  campaignSetting?: any;
}

