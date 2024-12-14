```typescript
export interface CharacterData {
  name: string;
  playerName: string;
  alignment: string;
  species: string;
  class: string;
  level: number;
  experiencePoints: number;
  background: {
    name: string;
    features: string[];
    skills: string[];
    startingEquipment: string[];
  };
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  savingThrows: Record<string, number>;
  skills: Record<string, number>;
  abilities: {
    initiative: number;
    speed: string;
    armorClass: number;
    hitPoints: {
      maximum: number;
      current: number;
      temporary: number;
    };
    proficiencyBonus: number;
  };
  inspiration: boolean;
  deathSaves: {
    successes: number;
    failures: number;
  };
  equipment: {
    gold: {
      cp: number;
      sp: number;
      ep: number;
      gp: number;
      pp: number;
    };
    items: Array<{
      name: string;
      quantity: number;
      weight: number;
    }>;
    carryingCapacity: {
      currentWeight: number;
      maximumWeight: number;
    };
  };
  featuresAndTraits: string[];
  attacksAndSpells: Array<{
    name: string;
    type: string;
    damage: string;
    damageType: string;
    attackBonus: number;
  }>;
  spellcasting?: {
    class: string;
    ability: string;
    saveDC: number;
    attackBonus: number;
    spells: Array<{
      name: string;
      level: number;
      castingTime: string;
      range: string;
      components: string;
      duration: string;
      prepared: boolean;
    }>;
  };
  personality: {
    traits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
  };
  appearance: {
    gender: string;
    age: string;
    height: string;
    weight: string;
    eyeColor: string;
    hairColor: string;
    skinColor: string;
  };
  notes: string;
  alliesAndOrganizations: string[];
  backstory: string;
}
```