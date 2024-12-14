export const backgrounds = [
  {
    id: 'acolyte',
    name: 'Acolyte',
    description: 'You have spent your life in service to a temple.',
    skillProficiencies: ['Insight', 'Religion'],
    toolProficiencies: ['Navigator tools'],
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
      description: 'You command respect from religious followers and can perform ceremonies.'
    },
    isHomebrew: false
  },
  {
    id: 'custom',
    name: 'Custom Background',
    description: 'Create your own background that fits your character concept.',
    skillProficiencies: [],
    toolProficiencies: [],
    languages: 2,
    equipment: [],
    feature: {
      name: 'Custom Feature',
      description: 'Choose a feature that aligns with your background story.'
    },
    isCustomizable: true,
    customizationOptions: {
      abilityScoreIncreases: [
        { type: 'choose2', value: 2 },
        { type: 'choose3', value: 1 }
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