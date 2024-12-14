// Update Character interface
export interface Character {
  id: string;
  name: string;
  playerName?: string;
  species: string; // Changed from race
  class: string;
  level: number;
  background?: string;
  alignment?: string;
  experiencePoints?: number;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  isHomebrew: boolean;
}

// Update Species interface (renamed from Race)
export interface Species {
  id: string;
  name: string;
  description: string;
  size: string;
  speed: number;
  traits: string[];
  abilityScoreIncreases: {
    options: Array<{
      type: 'choose' | 'all';
      count?: number;
      value: number;
    }>;
  };
  isHomebrew: boolean;
}