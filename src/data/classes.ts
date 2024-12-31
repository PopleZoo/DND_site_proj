import { Class } from '../types/character';

export const classes: Class[] = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    level: 1,
    hitDice: 12,
    isStartingClass: true,
    definition: {
      name: 'Barbarian',
      description: 'A fierce warrior who can enter a battle rage',
      hitDice: 12,
      primaryAbility: 'Strength',
      savingThrows: ['Strength', 'Constitution'],
      classFeatures: [
        {
          name: 'Rage',
          description: 'Enter a battle frenzy for increased damage and resistance',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Unarmored Defense',
          description: 'Add Constitution modifier to AC when not wearing armor',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Reckless Attack',
          description: 'Gain advantage on attacks at the cost of easier hits against you',
          level: 2,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'bard',
    name: 'Bard',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Bard',
      description: 'An inspiring magician whose power echoes the music of creation',
      hitDice: 8,
      primaryAbility: 'Charisma',
      savingThrows: ['Dexterity', 'Charisma'],
      spellcastingAbility: 'Charisma',
      classFeatures: [
        {
          name: 'Spellcasting',
          description: 'Cast spells using Charisma',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Bardic Inspiration',
          description: 'Grant allies bonus dice for their actions',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Jack of All Trades',
          description: 'Add half proficiency to unproficient ability checks',
          level: 2,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'cleric',
    name: 'Cleric',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Cleric',
      description: 'A priestly champion who wields divine magic in service of a higher power',
      hitDice: 8,
      primaryAbility: 'Wisdom',
      savingThrows: ['Wisdom', 'Charisma'],
      spellcastingAbility: 'Wisdom',
      classFeatures: [
        {
          name: 'Spellcasting',
          description: 'Cast spells using Wisdom',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Channel Divinity',
          description: 'Channel divine energy for various effects',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Divine Domain',
          description: 'Choose a domain that grants additional abilities',
          level: 1,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'druid',
    name: 'Druid',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Druid',
      description: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms',
      hitDice: 8,
      primaryAbility: 'Wisdom',
      savingThrows: ['Intelligence', 'Wisdom'],
      spellcastingAbility: 'Wisdom',
      classFeatures: [
        {
          name: 'Spellcasting',
          description: 'Cast spells using Wisdom',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Wild Shape',
          description: 'Transform into various animal forms',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Druidic',
          description: 'Secret language of druids',
          level: 1,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'fighter',
    name: 'Fighter',
    level: 1,
    hitDice: 10,
    isStartingClass: true,
    definition: {
      name: 'Fighter',
      description: 'A master of martial combat, skilled with a variety of weapons and armor',
      hitDice: 10,
      primaryAbility: 'Strength or Dexterity',
      savingThrows: ['Strength', 'Constitution'],
      classFeatures: [
        {
          name: 'Fighting Style',
          description: 'Specialized combat technique',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Second Wind',
          description: 'Recover hit points as a bonus action',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Action Surge',
          description: 'Take an additional action on your turn',
          level: 2,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'monk',
    name: 'Monk',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Monk',
      description: 'A master of martial arts, harnessing the power of body and soul',
      hitDice: 8,
      primaryAbility: 'Dexterity and Wisdom',
      savingThrows: ['Strength', 'Dexterity'],
      classFeatures: [
        {
          name: 'Martial Arts',
          description: 'Use Dexterity for unarmed strikes',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Ki',
          description: 'Channel mystical energy for special abilities',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Unarmored Defense',
          description: 'Add Wisdom modifier to AC',
          level: 1,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'paladin',
    name: 'Paladin',
    level: 1,
    hitDice: 10,
    isStartingClass: true,
    definition: {
      name: 'Paladin',
      description: 'A holy warrior bound to a sacred oath',
      hitDice: 10,
      primaryAbility: 'Strength and Charisma',
      savingThrows: ['Wisdom', 'Charisma'],
      spellcastingAbility: 'Charisma',
      classFeatures: [
        {
          name: 'Divine Sense',
          description: 'Detect celestial, fiend, or undead presence',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Lay on Hands',
          description: 'Pool of healing power',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Divine Smite',
          description: 'Channel divine energy into weapon strikes',
          level: 2,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'ranger',
    name: 'Ranger',
    level: 1,
    hitDice: 10,
    isStartingClass: true,
    definition: {
      name: 'Ranger',
      description: 'A warrior who combats threats on the edges of civilization',
      hitDice: 10,
      primaryAbility: 'Dexterity and Wisdom',
      savingThrows: ['Strength', 'Dexterity'],
      spellcastingAbility: 'Wisdom',
      classFeatures: [
        {
          name: 'Favored Enemy',
          description: 'Advantage against certain creature types',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Natural Explorer',
          description: 'Expert at navigating the natural world',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Hunters Mark',
          description: 'Deal extra damage to marked targets',
          level: 2,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'rogue',
    name: 'Rogue',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Rogue',
      description: 'A scoundrel who uses stealth and trickery to overcome obstacles',
      hitDice: 8,
      primaryAbility: 'Dexterity',
      savingThrows: ['Dexterity', 'Intelligence'],
      classFeatures: [
        {
          name: 'Sneak Attack',
          description: 'Deal extra damage to distracted foes',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Cunning Action',
          description: 'Take certain actions as a bonus action',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Thieves Cant',
          description: 'Secret rogue language',
          level: 1,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    level: 1,
    hitDice: 6,
    isStartingClass: true,
    definition: {
      name: 'Sorcerer',
      description: 'A spellcaster who draws on inherent magic from a gift or bloodline',
      hitDice: 6,
      primaryAbility: 'Charisma',
      savingThrows: ['Constitution', 'Charisma'],
      spellcastingAbility: 'Charisma',
      classFeatures: [
        {
          name: 'Spellcasting',
          description: 'Cast spells using Charisma',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Sorcery Points',
          description: 'Modify spells with magical effects',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Metamagic',
          description: 'Alter spells in various ways',
          level: 3,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'warlock',
    name: 'Warlock',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    definition: {
      name: 'Warlock',
      description: 'A wielder of magic derived from a bargain with an extraplanar entity',
      hitDice: 8,
      primaryAbility: 'Charisma',
      savingThrows: ['Wisdom', 'Charisma'],
      spellcastingAbility: 'Charisma',
      classFeatures: [
        {
          name: 'Pact Magic',
          description: 'Unique spellcasting that recovers on short rests',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Eldritch Invocations',
          description: 'Supernatural abilities',
          level: 2,
          isHomebrew: false
        },
        {
          name: 'Pact Boon',
          description: 'Special gift from patron',
          level: 3,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  },
  {
    id: 'wizard',
    name: 'Wizard',
    level: 1,
    hitDice: 6,
    isStartingClass: true,
    definition: {
      name: 'Wizard',
      description: 'A scholarly magic-user capable of manipulating the structures of reality',
      hitDice: 6,
      primaryAbility: 'Intelligence',
      savingThrows: ['Intelligence', 'Wisdom'],
      spellcastingAbility: 'Intelligence',
      classFeatures: [
        {
          name: 'Spellcasting',
          description: 'Cast spells using Intelligence',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Arcane Recovery',
          description: 'Recover spell slots on a short rest',
          level: 1,
          isHomebrew: false
        },
        {
          name: 'Spellbook',
          description: 'Learn and prepare spells from a book',
          level: 1,
          isHomebrew: false
        }
      ]
    },
    subclass: undefined,
    isHomebrew: false
  }
];