export interface Character {
  id: string;
  userId: string;
  username: string;
  name: string;
  level: number;
  isAssignedToPlayer: boolean;
  readonlyUrl: string;
  decorations: Record<string, any>; // Changed to more specific Record type for clarity
  personalDetails: {
    socialName: string;
    gender: string;
    faith: string;
    age: number;
    hair: string;
    eyes: string;
    skin: string;
    height: string;
    weight: string;
  };
  inspiration: boolean;
  hitPoints: HitPoints;
  xp: {
    current: number;
    adjustment: number;
  };
  alignmentId: number;
  lifestyleId: number;
  stats: Stats;
  background: any; // Assuming any is still necessary, could be further refined
  race: string; // Changed to string to match expected type
  raceDefinition: {
    id: number;
    typeId: number;
  };
  notes: string[];
  traits: any[]; // Assuming traits can be varied
  preferences: any;
  configuration: any;
  lifestyle: any;
  inventory: any[]; // Assuming inventory items are not defined more specifically
  currencies: any;
  classes: Class[];
  feats: any[];
  features: any[];
  customAdjustments: {
    defense: any;
    senses: any;
    speeds: any;
    proficiencies: any;
    actions: any;
  };
  characterValues: any[];
  conditions: any[];
  deathSaves: any;
  spellSlots: any[];
  pactMagic: any;
  sourceCategories: any[];
  spells: any[];
  options: any;
  choices: any;
  actions: any[];
  modifiers: any[];
  classSpells: any[];
  customItems: any[];
  campaign: any;
  creatures: any[];
  optionalFeatures: {
    origins: any;
    classFeatures: any;
  };
  meta: {
    dateModified: string;
    providedFrom: string;
    canEdit: boolean;
    status: string;
    statusSlug: string;
    campaignSetting: string;
  };
}
export interface Stats {
  base: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  bonus: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  override: {
    strength: number | null;
    dexterity: number | null;
    constitution: number | null;
    intelligence: number | null;
    wisdom: number | null;
    charisma: number | null;
  };
}
export interface Class {
  id: number;
  level: number;
  definition: {
    id: number;
    name: string;
    description: string;
    hitDice: number;
    spellcastingAbilityId: number | null;
    classFeatures: any[];
  };
  subclassDefinition?: {
    id: number;
    name: string;
    description: string;
    features: any[];
  };
  isStartingClass: boolean;
}

export interface Race {
  id: number;
  baseRaceName: string;
  subRaceName?: string;
  definition: {
    id: number;
    typeId: number;
  };
  isHomebrew?: boolean;
}

export interface CharacterRace {
  baseRaceName: string;
  subRaceName?: string;
  isHomebrew?: boolean;
}

export interface Stats {
  base: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  bonus: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  override: {
    strength: number | null;
    dexterity: number | null;
    constitution: number | null;
    intelligence: number | null;
    wisdom: number | null;
    charisma: number | null;
  };
}

export interface HitPoints {
  base: number;
  current: number;
  temp: number;
  bonus: number;
  override: number | null;
}
