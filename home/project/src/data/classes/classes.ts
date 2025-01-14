import { Class } from '../../types/character';

export const classes: Class[] = [
  {
    id: 'artificer',
    name: 'Artificer',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Artificer',
      description: 'Masters of unlocking magic in everyday objects, artificers are supreme inventors. They use ingenuity and arcane tools to craft unique magical creations and support their allies in battle.',
      hitDice: 8,
      primaryAbility: 'Intelligence',
      savingThrows: ['Constitution', 'Intelligence'],
      classFeatures: [
        {
          id: 'magical-tinkering',
          name: 'Magical Tinkering',
          description: 'Imbue a spark of magic into mundane objects, granting minor effects like light or sound.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Artificers learn to cast spells using arcane tools as focuses, combining their creativity with magic.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'infuse-item',
          name: 'Infuse Item',
          description: 'Create magical prototypes by imbuing mundane objects with arcane energy.',
          level: 2,
          isHomebrew: false
        },
        {
          id: 'artificer-specialist',
          name: 'Artificer Specialist',
          description: 'Choose a subclass to specialize in unique magical crafting and support techniques.',
          level: 3,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'alchemist',
          name: 'Alchemist',
          description: 'An expert in combining magical reagents to create potent elixirs and support their allies.',
          features: [
            {
              id: 'experimental-elixir',
              name: 'Experimental Elixir',
              description: 'Create magical elixirs with random effects, ranging from healing to granting flight.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'alchemical-savant',
              name: 'Alchemical Savant',
              description: 'Enhance healing and damage spells using alchemical tools.',
              level: 5,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'artillerist',
          name: 'Artillerist',
          description: 'Masters of explosive magic, using Eldritch Cannons to devastate foes and protect allies.',
          features: [
            {
              id: 'eldritch-cannon',
              name: 'Eldritch Cannon',
              description: 'Create a magical cannon that can deal damage or provide support effects.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'explosive-cannon',
              name: 'Explosive Cannon',
              description: 'Enhance the power of your Eldritch Cannon, increasing its damage potential.',
              level: 5,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  },
  // Add other classes here following the same pattern...
];

// Export individual classes for direct access
export const artificer = classes.find(c => c.id === 'artificer');
export const barbarian = classes.find(c => c.id === 'barbarian');
export const bard = classes.find(c => c.id === 'bard');
export const cleric = classes.find(c => c.id === 'cleric');
export const druid = classes.find(c => c.id === 'druid');
export const fighter = classes.find(c => c.id === 'fighter');
export const monk = classes.find(c => c.id === 'monk');
export const paladin = classes.find(c => c.id === 'paladin');
export const ranger = classes.find(c => c.id === 'ranger');
export const rogue = classes.find(c => c.id === 'rogue');
export const sorcerer = classes.find(c => c.id === 'sorcerer');
export const warlock = classes.find(c => c.id === 'warlock');
export const wizard = classes.find(c => c.id === 'wizard');

// Helper functions
export function getClassById(id: string): Class | undefined {
  return classes.find(c => c.id === id);
}

export function getClassFeatures(classId: string, level: number): any[] {
  const classData = getClassById(classId);
  if (!classData) return [];
  return classData.definition.classFeatures.filter(f => f.level <= level);
}

export function getSubclasses(classId: string): any[] {
  const classData = getClassById(classId);
  return classData?.definition.subclasses || [];
}