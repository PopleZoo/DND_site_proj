export const species = [
  {
    id: 'aasimar',
    name: 'Aasimar',
    description: 'Blessed with celestial heritage, Aasimar are beings touched by divine power.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Celestial Resistance: Resistance to Necrotic and Radiant damage',
      'Darkvision: See in dim light within 60 feet as if bright light',
      'Healing Hands: Heal a creature by touching it, rolling d4s equal to your Proficiency Bonus',
      'Light Bearer: You know the Light cantrip'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Proud dragon-like humanoids with powerful breath weapons and draconic heritage.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Draconic Ancestry: Choose a dragon type for breath weapon and damage resistance',
      'Breath Weapon: Attack with elemental damage based on ancestry',
      'Damage Resistance: Resistance to your breath weapons damage type'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Strong and hardy, dwarves are known for their skill in warfare and craftsmanship.',
    size: 'Medium',
    speed: 25,
    traits: [
      'Dwarven Resilience: Advantage on saving throws against poison and resistance to poison damage',
      'Darkvision: See in dim light within 60 feet as if bright light',
      'Tool Proficiency: Proficiency with artisans tools of your choice',
      'Dwarven Toughness: +1 HP per level'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Graceful and long-lived, elves are known for their magic affinity and connection to nature.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Darkvision: See in dim light within 60 feet as if bright light',
      'Keen Senses: Proficiency in Perception',
      'Fey Ancestry: Advantage against being charmed, magic cant put you to sleep',
      'Trance: Meditate for 4 hours instead of sleeping',
      'Elf Weapon Training: Proficiency with longsword, shortsword, shortbow, and longbow'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Clever and curious, gnomes are known for their technological aptitude and magical innovation.',
    size: 'Small',
    speed: 25,
    traits: [
      'Darkvision: See in dim light within 60 feet as if bright light',
      'Gnome Cunning: Advantage on Intelligence, Wisdom, and Charisma saving throws against magic',
      'Artificers Lore: Double proficiency bonus for History checks on magic items and technological devices'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'goliath',
    name: 'Goliath',
    description: 'Powerful mountain-dwelling folk known for their great strength and endurance.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Mountain Born: Resistance to cold damage and acclimated to high altitudes',
      'Stones Endurance: Reduce damage using d12 + Constitution modifier',
      'Powerful Build: Count as one size larger for carrying capacity'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Small but brave folk known for their luck and stealth.',
    size: 'Small',
    speed: 30,
    traits: [
      'Lucky: Reroll 1s on d20 tests',
      'Brave: Advantage on saving throws against being frightened',
      'Halfling Nimbleness: Move through spaces of larger creatures',
      'Naturally Stealthy: Can hide behind larger creatures'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'human',
    name: 'Human',
    description: 'Versatile and ambitious, humans are known for their adaptability and determination.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Resourceful: Gain Heroic Inspiration after a Long Rest',
      'Skillful: Proficiency in one skill of your choice',
      'Versatile: Choose an Origin feat'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'orc',
    name: 'Orc',
    description: 'Fierce warriors known for their strength and relentless endurance.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Adrenaline Rush: Dash as bonus action and gain temporary HP',
      'Darkvision: See in dim light within 120 feet as if bright light',
      'Relentless Endurance: Drop to 1 HP instead of 0 once per long rest'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description: 'Bearing an infernal legacy, tieflings combine human and fiendish traits.',
    size: 'Medium',
    speed: 30,
    traits: [
      'Darkvision: See in dim light within 60 feet as if bright light',
      'Hellish Resistance: Resistance to fire damage',
      'Infernal Legacy: Know Thaumaturgy cantrip, gain additional spells at higher levels'
    ],
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  }
];