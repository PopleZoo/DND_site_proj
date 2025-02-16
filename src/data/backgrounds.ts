export const backgrounds = [
  {
    id: 'acolyte',
    name: 'Acolyte',
    description: 'You devoted yourself to service in a temple, learning sacred rites and providing sacrifices to the gods.',
    skillProficiencies: ['Insight', 'Religion'],
    toolProficiencies: ['Any one Musical Instrument or Any one Gaming Set'],
    languages: 2,
    equipment: [
      'A holy symbol',
      'Prayer book or prayer wheel',
      '5 sticks of incense',
      'Vestments',
      'Common clothes',
      '15 gp'
    ],
    feature: {
      name: 'Shelter of the Faithful',
      description: 'You command respect from religious followers and can perform ceremonies. You can conduct religious ceremonies of your faith, and temple staff of your faith will support you (and your adventuring companions) with basic needs.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'artisan',
    name: 'Artisan',
    description: 'You learned a particular craft or trade, creating goods with skill and precision.',
    skillProficiencies: ['Investigation', 'Persuasion'],
    toolProficiencies: ['Any one type of Artisan Tools'],
    languages: 1,
    equipment: [
      'A set of artisan\'s tools',
      'A letter of introduction from your guild',
      'Traveler\'s clothes',
      '15 gp'
    ],
    feature: {
      name: 'Guild Membership',
      description: 'Your guild membership grants you shelter, support, and access to resources and potential jobs.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'charlatan',
    name: 'Charlatan',
    description: 'You have always had a way with people, convincing them to part with their valuables through cunning and misdirection.',
    skillProficiencies: ['Deception', 'Sleight of Hand'],
    toolProficiencies: ['Disguise Kit', 'Forgery Kit'],
    languages: 1,
    equipment: [
      'A set of fine clothes',
      'A disguise kit',
      'Tools of the con of your choice',
      '15 gp'
    ],
    feature: {
      name: 'False Identity',
      description: 'You have created a second identity that includes documentation, established acquaintances, and disguises.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'criminal',
    name: 'Criminal',
    description: 'You have a history of breaking the law and surviving by your wits and skills.',
    skillProficiencies: ['Deception', 'Stealth'],
    toolProficiencies: ['Thieves Tools', 'One Gaming Set'],
    languages: 1,
    equipment: [
      'A crowbar',
      'Dark common clothes with a hood',
      '15 gp'
    ],
    feature: {
      name: 'Criminal Contact',
      description: 'You have a reliable contact who acts as your liaison to a network of criminals.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'entertainer',
    name: 'Entertainer',
    description: 'You thrive in front of an audience, entertaining them with your music, dance, or other performances.',
    skillProficiencies: ['Acrobatics', 'Performance'],
    toolProficiencies: ['Disguise Kit', 'One Musical Instrument'],
    languages: 1,
    equipment: [
      'A musical instrument',
      'The favor of an admirer',
      'Costume clothes',
      '15 gp'
    ],
    feature: {
      name: 'By Popular Demand',
      description: 'You can always find a place to perform and receive free lodging and food in return for your performances.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'farmer',
    name: 'Farmer',
    description: 'You worked the land, growing food for others and understanding the cycles of nature.',
    skillProficiencies: ['Animal Handling', 'Nature'],
    toolProficiencies: ['Vehicles (Land)', 'Herbalism Kit'],
    languages: 1,
    equipment: [
      'A shovel',
      'An iron pot',
      'Common clothes',
      '10 gp'
    ],
    feature: {
      name: 'Rustic Hospitality',
      description: 'You can find a place to hide, rest, or recuperate among commoners, unless you\'ve proven yourself to be a danger.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'guard',
    name: 'Guard',
    description: 'You served as a guard, protecting people, places, or property.',
    skillProficiencies: ['Athletics', 'Perception'],
    toolProficiencies: ['One Gaming Set', 'Vehicles (Land)'],
    languages: 1,
    equipment: [
      'A uniform',
      'A horn or whistle',
      'Manacles',
      '10 gp'
    ],
    feature: {
      name: 'Watcher\'s Eye',
      description: 'Your experience watching for trouble helps you notice details others might miss.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'noble',
    name: 'Noble',
    description: 'You were born into a family of wealth, power, and privilege.',
    skillProficiencies: ['History', 'Persuasion'],
    toolProficiencies: ['One Gaming Set'],
    languages: 2,
    equipment: [
      'Fine clothes',
      'Signet ring',
      'Scroll of pedigree',
      '25 gp'
    ],
    feature: {
      name: 'Position of Privilege',
      description: 'Your noble birth grants you special treatment and access to high society.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'pilgrim',
    name: 'Pilgrim',
    description: 'Your life has been dedicated to a spiritual journey or religious quest.',
    skillProficiencies: ['Medicine', 'Religion'],
    toolProficiencies: ['One Musical Instrument'],
    languages: 2,
    equipment: [
      'A religious symbol',
      'Prayer beads',
      'Traveling clothes',
      '10 gp'
    ],
    feature: {
      name: 'Wanderer\'s Faith',
      description: 'You can find safe haven in any temple or religious community of your faith.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'sage',
    name: 'Sage',
    description: 'You spent years learning the lore of the multiverse.',
    skillProficiencies: ['Arcana', 'History'],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      'A bottle of ink',
      'A quill',
      'A small knife',
      'A letter from a dead colleague',
      'Common clothes',
      '10 gp'
    ],
    feature: {
      name: 'Researcher',
      description: 'When attempting to learn or recall information, you know where to find it.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'sailor',
    name: 'Sailor',
    description: 'You worked aboard a ship for years, navigating waterways and surviving storms.',
    skillProficiencies: ['Athletics', 'Perception'],
    toolProficiencies: ['Navigator\'s Tools', 'Vehicles (Water)'],
    languages: 1,
    equipment: [
      'A belaying pin (club)',
      '50 feet of silk rope',
      'Lucky charm',
      'Common clothes',
      '10 gp'
    ],
    feature: {
      name: 'Ship\'s Passage',
      description: 'You can secure free passage on sailing ships for yourself and companions.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'soldier',
    name: 'Soldier',
    description: 'You trained and served in a military organization.',
    skillProficiencies: ['Athletics', 'Intimidation'],
    toolProficiencies: ['One Gaming Set', 'Vehicles (Land)'],
    languages: 1,
    equipment: [
      'An insignia of rank',
      'Trophy from a fallen enemy',
      'Playing cards',
      'Common clothes',
      '10 gp'
    ],
    feature: {
      name: 'Military Rank',
      description: 'You have a military rank and can exert influence over other soldiers.'
    },
    abilityScoreIncreases: {
      options: [
        { type: 'choose', count: 2, value: 2 },
        { type: 'all', value: 1 }
      ]
    },
    isHomebrew: false
  },
  {
    id: 'custom',
    name: 'Custom Background',
    description: 'Create your own background that fits your character concept.',
    skillProficiencies: [],
    toolProficiencies: [],
    languages: 0,
    equipment: [],
    feature: {
      name: 'Custom Feature',
      description: 'Choose a feature that aligns with your background story.'
    },
    isCustomizable: true,
    customizationOptions: {
      abilityScoreIncreases: [
        { type: 'choose2', value: 2 },
        { type: 'choose1', value: 1 },
        { type: 'all', value: 1 }
      ],
      skillProficiencies: { choose: 2 },
      toolProficiencies: { choose: 1 },
      languages: { choose: 2 },
      feat: { level: 1 },
      startingEquipment: {
        equipment: { maxValue: 50 },
        gold: 50
      }
    },
    isHomebrew: false
  }
];

export interface CustomBackgroundOptions {
  abilityScores: {
    type: 'choose2' | 'choose1' | 'all';
    increases: Record<string, number>;
  };
  skills: string[];
  tool: string;
  languages: number;
  equipment: string[];
  gold: number;
  feat: string;
  feature: {
    name: string;
    description: string;
  };
}

export function createCustomBackground(options: CustomBackgroundOptions) {
  return {
    id: `custom-${Date.now()}`,
    name: 'Custom Background',
    description: 'A personalized background reflecting your character\'s unique history.',
    skillProficiencies: options.skills,
    toolProficiencies: [options.tool],
    languages: options.languages,
    equipment: options.equipment,
    gold: options.gold,
    feature: options.feature,
    abilityScoreIncreases: {
      type: options.abilityScores.type,
      increases: options.abilityScores.increases
    },
    feat: options.feat,
    isHomebrew: true,
    isCustom: true
  };
}

export function validateCustomBackground(options: CustomBackgroundOptions): boolean {
  // Validate ability score increases
  const totalIncrease = Object.values(options.abilityScores.increases).reduce((a, b) => a + b, 0);
  if (options.abilityScores.type === 'choose2' && totalIncrease !== 3) return false;
  if (options.abilityScores.type === 'choose1' && totalIncrease !== 2) return false;
  if (options.abilityScores.type === 'all' && totalIncrease !== 6) return false;

  // Validate skills
  if (options.skills.length !== 2) return false;

  // Validate tool proficiency
  if (!options.tool) return false;

  // Validate equipment value
  const equipmentValue = calculateEquipmentValue(options.equipment);
  if (equipmentValue + options.gold > 50) return false;

  return true;
}

function calculateEquipmentValue(equipment: string[]): number {
  // This would need a proper equipment price list to be implemented
  return 0; // Placeholder
}