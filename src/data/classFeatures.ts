```typescript
export interface ClassFeature {
  name: string;
  description: string;
  level: number;
}

export const classFeatures: Record<string, ClassFeature[]> = {
  barbarian: [
    {
      name: 'Rage',
      description: 'Enter a battle frenzy for increased damage and resistance.',
      level: 1
    },
    {
      name: 'Unarmored Defense',
      description: 'While not wearing armor, your AC equals 10 + Dexterity modifier + Constitution modifier.',
      level: 1
    },
    {
      name: 'Reckless Attack',
      description: 'Gain advantage on melee weapon attack rolls using Strength, but attack rolls against you have advantage.',
      level: 2
    },
    {
      name: 'Primal Path',
      description: 'Choose your Primal Path that shapes your rage.',
      level: 3
    }
  ],
  bard: [
    {
      name: 'Spellcasting',
      description: 'You can cast spells using Charisma as your spellcasting ability.',
      level: 1
    },
    {
      name: 'Bardic Inspiration',
      description: 'Use a bonus action to inspire another creature within 60 feet.',
      level: 1
    },
    {
      name: 'Jack of All Trades',
      description: 'Add half your proficiency bonus to ability checks you aren\'t proficient in.',
      level: 2
    },
    {
      name: 'Bard College',
      description: 'Choose your Bard College, which shapes your magical performances.',
      level: 3
    }
  ],
  fighter: [
    {
      name: 'Fighting Style',
      description: 'Adopt a particular style of fighting as your specialty.',
      level: 1
    },
    {
      name: 'Second Wind',
      description: 'Regain hit points equal to 1d10 + fighter level as a bonus action.',
      level: 1
    },
    {
      name: 'Action Surge',
      description: 'Take one additional action on your turn.',
      level: 2
    },
    {
      name: 'Martial Archetype',
      description: 'Choose a martial archetype that defines your combat techniques.',
      level: 3
    }
  ]
  // Add other classes similarly
};

export const subclassUnlockLevels: Record<string, number> = {
  barbarian: 3, // Primal Path
  bard: 3, // Bard College
  cleric: 1, // Divine Domain
  druid: 2, // Druid Circle
  fighter: 3, // Martial Archetype
  monk: 3, // Monastic Tradition
  paladin: 3, // Sacred Oath
  ranger: 3, // Ranger Archetype
  rogue: 3, // Roguish Archetype
  sorcerer: 1, // Sorcerous Origin
  warlock: 1, // Otherworldly Patron
  wizard: 2 // Arcane Tradition
};

export const featLevels = [4, 8, 12, 16, 19];

export function getAvailableFeatures(classId: string, level: number): ClassFeature[] {
  return (classFeatures[classId] || []).filter(feature => feature.level <= level);
}

export function shouldShowSubclass(classId: string, level: number): boolean {
  return level >= (subclassUnlockLevels[classId] || 3);
}

export function shouldShowFeatSelection(level: number): boolean {
  return featLevels.includes(level);
}
```