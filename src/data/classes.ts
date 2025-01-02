import { Class } from '../types/character';

export const classes: Class[] = [
  {
    id: 'barbarian',
    name: 'Barbarian',
    level: 1,
    hitDice: 12,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Barbarian',
      description: 'A fierce warrior who can enter a battle rage.',
      hitDice: 12,
      primaryAbility: 'Strength',
      savingThrows: ['Strength', 'Constitution'],
      classFeatures: [
        {
          id: 'rage',
          name: 'Rage',
          description:
            'Enter a battle frenzy for increased damage and resistance to physical damage.',
          level: 1,
          isHomebrew: false,
        },
        {
          id: 'unarmored-defense',
          name: 'Unarmored Defense',
          description:
            'Your AC equals 10 + Dexterity modifier + Constitution modifier while not wearing armor.',
          level: 1,
          isHomebrew: false,
        },
        {
          id: 'reckless-attack',
          name: 'Reckless Attack',
          description:
            'Gain advantage on melee weapon attack rolls using Strength, but attack rolls against you have advantage.',
          level: 2,
          isHomebrew: false,
        },
        {
          id: 'danger-sense',
          name: 'Danger Sense',
          description:
            'Advantage on Dexterity saving throws against effects you can see.',
          level: 2,
          isHomebrew: false,
        },
        {
          id: 'primal-knowledge',
          name: 'Primal Knowledge',
          description:
            'Gain proficiency in one skill of your choice from the Barbarian skill list.',
          level: 3,
          isHomebrew: false,
        },
        {
          id: 'extra-attack',
          name: 'Extra Attack',
          description:
            'You can attack twice instead of once whenever you take the Attack action on your turn.',
          level: 5,
          isHomebrew: false,
        },
        {
          id: 'fast-movement',
          name: 'Fast Movement',
          description:
            'Your speed increases by 10 feet while you are not wearing heavy armor.',
          level: 5,
          isHomebrew: false,
        },
      ],
      subclasses: [
        {
          id: 'berserker',
          name: 'Path of the Berserker',
          description: 'Channel your rage into violent fury.',
          features: []
        },
        {
          id: 'wild-heart',
          name: 'Path of the Wild Heart',
          description: 'Embrace your connection to nature and animals.',
          features: []
        },
        {
          id: 'world-tree',
          name: 'Path of the World Tree',
          description: 'Draw power from the cosmic tree Yggdrasil.',
          features: []
        },
        {
          id: 'zealot',
          name: 'Path of the Zealot',
          description: 'Unleash divine fury in battle.',
          features: []
        },
      ],
    },
  },
  {
    id: 'bard',
    name: 'Bard',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Bard',
      description:
        'An inspiring magician whose power echoes the music of creation.',
      hitDice: 8,
      primaryAbility: 'Charisma',
      savingThrows: ['Dexterity', 'Charisma'],
      spellcastingAbility: 'Charisma',
      classFeatures: [
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Cast spells using Charisma.',
          level: 1,
          isHomebrew: false,
        },
        {
          id: 'bardic-inspiration',
          name: 'Bardic Inspiration',
          description:
            'Use your bonus action to grant a creature a bonus die to its rolls.',
          level: 1,
          isHomebrew: false,
        },
        {
          id: 'jack-of-all-trades',
          name: 'Jack of All Trades',
          description:
            'Add half of your proficiency bonus to any ability check you are not proficient in.',
          level: 2,
          isHomebrew: false,
        },
        {
          id: 'expertise',
          name: 'Expertise',
          description:
            'Choose two skills in which you double your proficiency bonus.',
          level: 3,
          isHomebrew: false,
        },
        {
          id: 'magical-secrets',
          name: 'Magical Secrets',
          description:
          'Learn spells from any class’s spell list, expanding your magical repertoire.',
        level: 10,
        isHomebrew: false,
      },
      {
        id: 'countercharm',
        name: 'Countercharm',
        description:
          'You can use your musical ability to disrupt harmful effects against you and your allies.',
        level: 6,
        isHomebrew: false,
      },
      {
        id: 'song-of-rest',
        name: 'Song of Rest',
        description:
          'You can use soothing music or oration to help revitalize your wounded allies during a short rest.',
        level: 2,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'college-of-valor',
          name: 'College of Valor',
          description: 'Inspire others to greatness in battle.',
          features: []
        },
      {
        id: 'college-of-knowledge',
        name: 'College of Lore',
        description: 'Master the art of storytelling and knowledge.',
        features: []
      },
      {
        id: 'college-of-whispers',
        name: 'College of Whispers',
        description: 'Use fear and secrets to manipulate others.',
        features: []
      },
      {
        id: 'college-of-creation',
        name: 'College of Creation',
        description: 'Bring art and magic together to create wonders.',
        features: []
      },
    ],
  },
},
{
  id: 'cleric',
  name: 'Cleric',
  level: 1,
  hitDice: 8,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Cleric',
    description:
      'A priestly champion who wields divine magic in service of a higher power.',
    hitDice: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Wisdom', 'Charisma'],
    spellcastingAbility: 'Wisdom',
    classFeatures: [
      {
        id: 'spellcasting',
        name: 'Spellcasting',
        description: 'Cast spells using Wisdom.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'channel-divinity',
        name: 'Channel Divinity',
        description:
          'Channel divine energy to fuel magical effects granted by your domain.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'divine-domain',
        name: 'Divine Domain',
        description:
          'Choose a domain that grants additional features and spells.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'destroy-undead',
        name: 'Destroy Undead',
        description:
          'Turn or destroy undead creatures based on your cleric level.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'channel-divinity-empowered-healing',
        name: 'Empowered Healing',
        description:
          'When you use your Channel Divinity to heal, you can maximize the healing.',
        level: 6,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'life-domain',
          name: 'Life Domain',
          description: 'Focus on healing and protection.',
          features: []
        },
      {
        id: 'light-domain',
        name: 'Light Domain',
        description: 'Wield the power of light and fire.',
        features: []
      },
      {
        id: 'trickery-domain',
        name: 'Trickery Domain',
        description: 'Embrace deception and stealth.',
        features: []
      },
      {
        id: 'war-domain',
        name: 'War Domain',
        description: 'Become a champion of battle.',
        features: []
      },
    ],
  },
},
{
  id: 'druid',
  name: 'Druid',
  level: 1,
  hitDice: 8,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Druid',
    description:
      'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
    hitDice: 8,
    primaryAbility: 'Wisdom',
    savingThrows: ['Intelligence', 'Wisdom'],
    spellcastingAbility: 'Wisdom',
    classFeatures: [
      {
        id: 'spellcasting',
        name: 'Spellcasting',
        description: 'Cast spells using Wisdom.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'wild-shape',
        name: 'Wild Shape',
        description: 'Transform into various animal forms.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'druidic',
        name: 'Druidic',
        description: 'Secret language of druids.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'circle-spells',
        name: 'Circle Spells',
        description: 'Gain additional spells based on your chosen circle.',
        level: 3,
        isHomebrew: false,
      },
      {
        id: 'timeless-body',
        name: 'Timeless Body',
        description: 'Your body no longer ages, and you can’t be aged magically.',
        level: 18,
        isHomebrew: false,
      },
      {
        id: 'archdruid',
        name: 'Archdruid',
        description: 'You can use your Wild Shape an unlimited number of times.',
        level: 20,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'circle-of-the-land',
          name: 'Circle of the Land',
          description: 'Draw power from the land and its natural magic.',
          features: []
        },
      {
        id: 'circle-of-the-moon',
        name: 'Circle of the Moon',
        description: 'Become a fierce shapeshifter and warrior.',
        features: []
      },
      {
        id: 'circle-of-spores',
        name: 'Circle of Spores',
        description: 'Harness the power of decay and fungi.',
        features: []
      },
      {
        id: 'circle-of-wildfire',
        name: 'Circle of Wildfire',
        description: 'Embrace the destructive and renewing power of fire.',
        features: []
      },
    ],
  },
},
{
  id: 'fighter',
  name: 'Fighter',
  level: 1,
  hitDice: 10,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Fighter',
    description:
      'A master of martial combat, skilled with a variety of weapons and armor.',
    hitDice: 10,
    primaryAbility: 'Strength or Dexterity',
    savingThrows: ['Strength', 'Constitution'],
    classFeatures: [
      {
        id: 'fighting-style',
        name: 'Fighting Style',
        description: 'Adopt a particular style of fighting to enhance your combat abilities.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'second-wind',
        name: 'Second Wind',
        description: 'Regain hit points equal to 1d10 + your fighter level as a bonus action.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'action-surge',
        name: 'Action Surge',
        description: 'Take one additional action on your turn.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'extra-attack',
        name: 'Extra Attack',
        description: 'You can attack twice instead of once whenever you take the Attack action on your turn.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'indomitable',
        name: 'Indomitable',
        description: 'You can reroll a saving throw that you fail.',
        level: 9,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'champion',
          name: 'Champion',
          description: 'Focus on physical prowess and combat skills.',
          features: []
        },
      {
        id: 'battle-master',
        name: 'Battle Master',
        description: 'Master tactical maneuvers in combat.',
        features: []
      },
      {
        id: 'eldritch-knight',
        name: 'Eldritch Knight',
        description: 'Blend martial prowess with arcane magic.',
        features: []
      },
    ],
  },
},
{
  id: 'monk',
  name: 'Monk',
  level: 1,
  hitDice: 8,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Monk',
    description: 'A master of martial arts, harnessing the power of body and soul.',
    hitDice: 8,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    classFeatures: [
      {
        id: 'martial-arts',
        name: 'Martial Arts',
        description: 'Use Dexterity instead of Strength for unarmed strikes and monk weapons.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'unarmored-defense',
        name: 'Unarmored Defense',
        description: 'Your AC equals 10 + Dexterity modifier + Wisdom modifier when not wearing armor.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'ki',
        name: 'Ki',
        description: 'Use ki points to perform special techniques.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'unarmored-movement',
        name: 'Unarmored Movement',
        description: 'Your speed increases by 10 feet while you are not wearing armor or wielding a shield.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'extra-attack',
        name: 'Extra Attack',
        description: 'You can attack twice instead of once whenever you take the Attack action on your turn.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'stunning-strike',
        name: 'Stunning Strike',
        description: 'You can spend ki to attempt to stun a creature you hit with a melee attack.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'purity-of-body',
        name: 'Purity of Body',
        description: 'You are immune to disease and poison.',
        level: 10,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'way-of-the-open-hand',
          name: 'Way of the Open Hand',
          description: 'Master the art of unarmed combat and healing.',
          features: []
        },
      {
        id: 'way-of-shadow',
        name: 'Way of Shadow',
        description: 'Become a master of stealth and deception.',
        features: []
      },
      {
        id: 'way-of-the-four-elements',
        name: 'Way of the Four Elements',
        description: 'Harness the elemental forces in your martial arts.',
        features: []
      },
      {
        id: 'way-of-the-dragon',
        name: 'Way of the Dragon',
        description: 'Channel the power of dragons in your martial arts.',
        features: []
      },
    ],
  },
},
{
  id: 'ranger',
  name: 'Ranger',
  level: 1,
  hitDice: 10,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Ranger',
    description:
      'A wanderer of the wilds skilled in tracking, hunting, and nature magic.',
    hitDice: 10,
    primaryAbility: 'Dexterity and Wisdom',
    savingThrows: ['Strength', 'Dexterity'],
    spellcastingAbility: 'Wisdom',
    classFeatures: [
      {
        id: 'favored-enemy',
        name: 'Favored Enemy',
        description: 'Choose a type of enemy to gain bonuses when tracking or fighting them.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'natural-explorer',
        name: 'Natural Explorer',
        description: 'You are particularly adept at traveling and surviving in certain types of environments.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'spellcasting',
        name: 'Spellcasting',
        description: 'Gain the ability to cast spells from the Ranger spell list.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'extra-attack',
        name: 'Extra Attack',
        description: 'You can attack twice instead of once whenever you take the Attack action on your turn.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'hunter\'s-mark',
        name: 'Hunter\'s Mark',
        description: 'You can mark a target to deal extra damage to it.',
        level: 1,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'hunter',
          name: 'Hunter',
          description: 'Focus on tracking and defeating foes.',
          features: []
        },
      {
        id: 'beast-master',
        name: 'Beast Master',
        description: 'Form a bond with a beast companion.',
        features: []
      },
      {
        id: 'gloom-stalker',
        name: 'Gloom Stalker',
        description: 'Master the shadows and ambush your foes.',
        features: []
      },
      {
        id: 'swarmkeeper',
        name: 'Swarmkeeper',
        description: 'Command a swarm of nature spirits to aid you.',
        features: []
      },
    ],
  },
},
{
  id: 'rogue',
  name: 'Rogue',
  level: 1,
  hitDice: 8,
  isStartingClass: true,
  isHomebrew: false,
  definition: {
    name: 'Rogue',
    description:
      'A scoundrel who uses stealth and trickery to overcome obstacles and exploit enemies.',
    hitDice: 8,
    primaryAbility: 'Dexterity',
    savingThrows: ['Dexterity', 'Intelligence'],
    classFeatures: [
      {
        id: 'sneak-attack',
        name: 'Sneak Attack',
        description: 'Deal extra damage to creatures you have advantage against.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'cunning-action',
        name: 'Cunning Action',
        description: 'Take a bonus action to Dash, Disengage, or Hide.',
        level: 2,
        isHomebrew: false,
      },
      {
        id: 'thieves-cant',
        name: 'Thieves Cant',
        description: 'Learn the secret language of thieves.',
        level: 1,
        isHomebrew: false,
      },
      {
        id: 'uncanny-dodge',
        name: 'Uncanny Dodge',
        description: 'Use your reaction to halve the damage from an attack.',
        level: 5,
        isHomebrew: false,
      },
      {
        id: 'evasion',
        name: 'Evasion',
        description: 'Take no damage on a successful Dexterity saving throw against area effects.',
        level: 7,
        isHomebrew: false,
      },
      {
        id: 'slippery',
        name: 'Slippery',
        description: 'You can escape grapples more easily.',
        level: 9,
        isHomebrew: false,
      },
    ],
    subclasses: [
        {
          id: 'thief',
          name: 'Thief',
          description: 'Master of stealth and agility, skilled in thievery.',
          features: []
        },
      {
        id: 'assassin',
        name: 'Assassin',
        description: 'Expert in infiltration and dealing deadly strikes.',
        features: []
      },
      {
        id: 'arcane-trickster',
        name: 'Arcane Trickster',
        description: 'Blend magic with stealth and trickery.',
        features: []
      },
      {
        id: 'inquisitive',
        name: 'Inquisitive',
        description: 'Keen-eyed and perceptive, skilled in investigation.',
        features: []
      },
    ],
  },
},
];