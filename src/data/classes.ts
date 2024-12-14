export const classes = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    description: 'A fierce warrior who can enter a battle rage',
    hitDie: 12,
    primaryAbility: 'Strength',
    savingThrows: ['Strength', 'Constitution'],
    features: [
      'Rage: Enter a battle frenzy for increased damage and resistance',
      'Unarmored Defense: Add Constitution modifier to AC when not wearing armor',
      'Reckless Attack: Gain advantage on attacks at the cost of easier hits against you'
    ],
    spellcasting: false,
    isHomebrew: false
  },
  {
    id: 'bard',
    name: 'Bard',
    description: 'An inspiring magician whose power echoes the music of creation',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Dexterity', 'Charisma'],
    features: [
      'Spellcasting: Cast spells using Charisma',
      'Bardic Inspiration: Grant allies bonus dice for their actions',
      'Jack of All Trades: Add half proficiency to unproficient ability checks'
    ],
    spellcasting: true,
    spellcastingAbility: 'Charisma',
    isHomebrew: false
  },
  {
    id: 'cleric',
    name: 'Cleric',
    description: 'A priestly champion who wields divine magic in service of a higher power',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Wisdom', 'Charisma'],
    features: [
      'Spellcasting: Cast spells using Wisdom',
      'Channel Divinity: Channel divine energy for various effects',
      'Divine Domain: Choose a domain that grants additional abilities'
    ],
    spellcasting: true,
    spellcastingAbility: 'Wisdom',
    isHomebrew: false
  },
  {
    id: 'druid',
    name: 'Druid',
    description: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms',
    hitDie: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Intelligence', 'Wisdom'],
    features: [
      'Spellcasting: Cast spells using Wisdom',
      'Wild Shape: Transform into various animal forms',
      'Druidic: Secret language of druids'
    ],
    spellcasting: true,
    spellcastingAbility: 'Wisdom',
    isHomebrew: false
  },
  {
    id: 'fighter',
    name: 'Fighter',
    description: 'A master of martial combat, skilled with a variety of weapons and armor',
    hitDie: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['Strength', 'Constitution'],
    features: [
      'Fighting Style: Specialized combat technique',
      'Second Wind: Recover hit points as a bonus action',
      'Action Surge: Take an additional action on your turn'
    ],
    spellcasting: false,
    isHomebrew: false
  },
  {
    id: 'monk',
    name: 'Monk',
    description: 'A master of martial arts, harnessing the power of body and soul',
    hitDie: 8,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    features: [
      'Martial Arts: Use Dexterity for unarmed strikes',
      'Ki: Channel mystical energy for special abilities',
      'Unarmored Defense: Add Wisdom modifier to AC'
    ],
    spellcasting: false,
    isHomebrew: false
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'A holy warrior bound to a sacred oath',
    hitDie: 10,
    primaryAbility: 'Strength and Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    features: [
      'Divine Sense: Detect celestial, fiend, or undead presence',
      'Lay on Hands: Pool of healing power',
      'Divine Smite: Channel divine energy into weapon strikes'
    ],
    spellcasting: true,
    spellcastingAbility: 'Charisma',
    isHomebrew: false
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description: 'A warrior who combats threats on the edges of civilization',
    hitDie: 10,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    features: [
      'Favored Enemy: Advantage against certain creature types',
      'Natural Explorer: Expert at navigating the natural world',
      'Hunters Mark: Deal extra damage to marked targets'
    ],
    spellcasting: true,
    spellcastingAbility: 'Wisdom',
    isHomebrew: false
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: 'A scoundrel who uses stealth and trickery to overcome obstacles',
    hitDie: 8,
    primaryAbility: 'Dexterity',
    savingThrows: ['Dexterity', 'Intelligence'],
    features: [
      'Sneak Attack: Deal extra damage to distracted foes',
      'Cunning Action: Take certain actions as a bonus action',
      'Thieves Cant: Secret rogue language'
    ],
    spellcasting: false,
    isHomebrew: false
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'A spellcaster who draws on inherent magic from a gift or bloodline',
    hitDie: 6,
    primaryAbility: 'Charisma',
    savingThrows: ['Constitution', 'Charisma'],
    features: [
      'Spellcasting: Cast spells using Charisma',
      'Sorcery Points: Modify spells with magical effects',
      'Metamagic: Alter spells in various ways'
    ],
    spellcasting: true,
    spellcastingAbility: 'Charisma',
    isHomebrew: false
  },
  {
    id: 'warlock',
    name: 'Warlock',
    description: 'A wielder of magic derived from a bargain with an extraplanar entity',
    hitDie: 8,
    primaryAbility: 'Charisma',
    savingThrows: ['Wisdom', 'Charisma'],
    features: [
      'Pact Magic: Unique spellcasting that recovers on short rests',
      'Eldritch Invocations: Supernatural abilities',
      'Pact Boon: Special gift from patron'
    ],
    spellcasting: true,
    spellcastingAbility: 'Charisma',
    isHomebrew: false
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description: 'A scholarly magic-user capable of manipulating the structures of reality',
    hitDie: 6,
    primaryAbility: 'Intelligence',
    savingThrows: ['Intelligence', 'Wisdom'],
    features: [
      'Spellcasting: Cast spells using Intelligence',
      'Arcane Recovery: Recover spell slots on a short rest',
      'Spellbook: Learn and prepare spells from a book'
    ],
    spellcasting: true,
    spellcastingAbility: 'Intelligence',
    isHomebrew: false
  }
];