// Race interface
export interface Race {
  baseRaceName: string; // Name of the base race, e.g., "Elf"
  subRaceName?: string; // Optional subrace name, e.g., "High Elf"
  isHomebrew?: boolean; // Indicates if the race is homebrew
}

// Class interface
export interface Class {
  name: string; // Class name, e.g., "Paladin"
  level: number; // Level in the class
  hitDice?: string; // Optional hit dice for the class, e.g., "d10"
  definition?: { 
    name: string; // Full name of the class
    description: string; // Detailed class description
  };
  subclass?: { 
    name: string; // Optional subclass name, e.g., "Oath of Devotion"
  };
  isHomebrew?: boolean; // Indicates if the class is homebrew
}

// Feat interface
export interface Feat {
  id: string; // Unique feat identifier
  name: string; // Feat name
  description: string; // Detailed feat description
  isHomebrew?: boolean; // Indicates if the feat is homebrew
}

// Spells interface
export interface Spell {
  id: string; // Unique spell identifier
  name: string; // Spell name
  level: number; // Spell level
  description: string; // Detailed spell description
  prepared?: boolean; // Is the spell prepared?
  isHomebrew?: boolean; // Indicates if the spell is homebrew
}

// Inventory Item interface
export interface InventoryItem {
  id: string; // Unique item identifier
  name: string; // Item name
  type: string; // Item type, e.g., "Armor", "Weapon"
  equipped: boolean; // Is the item equipped?
  definition?: { 
    description: string; 
    armorClass?: number; // For armor items
    damage?: string; // For weapon items
  };
  isHomebrew?: boolean; // Indicates if the item is homebrew
}
export interface Background {
  definition: string;
  customBackground?: { 
    name: string;
    description: string;
  };
}

export interface BackgroundDetails {
  definition: string;
  hasCustomBackground: boolean;
  customBackground?: { 
    name: string;
    description: string;
  };
}

export interface AbilityScore {
  id: number; // 1-6 for STR, DEX, CON, INT, WIS, CHA
  value: number;
}

export interface Modifier {
  type: string;
  value: number;
}

export interface Skill {
  name: string;
  proficient: boolean;
  modifier: number;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
}

export interface HitPoints {
  current: number;
  max: number;
  temp?: number;
}

// Character interface (additionally includes homebrew check for character itself)
export interface Character {
  id?: string; // Unique character identifier
  name: string; // Character name
  level: number; // Total character level
  race?: Race; // Race information
  classes?: Class[]; // Array of class objects
  background?: Background; // Background information
  backgroundDetails?: BackgroundDetails; // Optional detailed background
  stats?: AbilityScore[]; // Array of ability scores
  modifiers?: Modifier[]; // Array of modifiers
  inventory?: InventoryItem[]; // Inventory items
  feats?: Feat[]; // Array of feats
  spells?: Spell[]; // Array of spells
  skills?: Skill[]; // Array of skills
  conditions?: Condition[]; // Array of conditions
  hitPoints?: HitPoints; // Hit points information
  armorClass?: number; // Armor class
  initiative?: number; // Initiative bonus
  speed?: number; // Speed in feet
  inspiration?: boolean; // Does the character have inspiration?
  notes?: string[]; // Array of character notes
  isHomebrew?: boolean; // Is this a homebrew character?
}
