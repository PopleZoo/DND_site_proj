import { Species } from '../../types/character';

export const species: Species[] = [
  {
    id: 'human',
    name: 'Human',
    description: 'Humans are adaptable and versatile, thriving in various environments and excelling in diverse pursuits.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'You can increase one ability score of your choice by 1.'
      },
      {
        name: 'Size',
        description: 'Medium'
      },
      {
        name: 'Speed',
        description: '30 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and one extra language of your choice.'
      }
    ],
    isHomebrew: false
  },
  {
    id: 'elf',
    name: 'Elf',
    description: 'Elves are graceful and attuned to magic and nature, known for their longevity and keen senses.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'Your Dexterity score increases by 2.'
      },
      {
        name: 'Size',
        description: 'Medium'
      },
      {
        name: 'Speed',
        description: '30 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Elvish.'
      }
    ],
    subraces: [
      {
        id: 'high-elf',
        name: 'High Elf',
        description: 'High Elves are scholars and spellcasters with an innate knack for magic.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Intelligence score increases by 1.'
          },
          {
            name: 'Cantrip',
            description: 'You know one cantrip of your choice from the wizard spell list.'
          }
        ]
      },
      {
        id: 'wood-elf',
        name: 'Wood Elf',
        description: 'Wood Elves are agile hunters who feel at home in forested terrains.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Wisdom score increases by 1.'
          },
          {
            name: 'Fleet of Foot',
            description: 'Your base walking speed increases to 35 feet.'
          }
        ]
      },
      {
        id: 'dark-elf',
        name: 'Dark Elf (Drow)',
        description: 'Dark Elves dwell in the Underdark and have a unique connection to magic and shadows.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Charisma score increases by 1.'
          },
          {
            name: 'Darkvision',
            description: 'You can see in dim light within 60 feet as if it were bright light.'
          }
        ]
      }
    ],
    isHomebrew: false
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description: 'Dwarves are strong and resilient, skilled in crafting and enduring hardship.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'Your Constitution score increases by 2.'
      },
      {
        name: 'Size',
        description: 'Medium'
      },
      {
        name: 'Speed',
        description: '25 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Dwarvish.'
      }
    ],
    subraces: [
      {
        id: 'hill-dwarf',
        name: 'Hill Dwarf',
        description: 'Hill Dwarves are known for their resilience and deep-rooted connection to nature.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Wisdom score increases by 1.'
          },
          {
            name: 'Hit Points',
            description: 'You gain an additional hit point at each level.'
          }
        ]
      },
      {
        id: 'mountain-dwarf',
        name: 'Mountain Dwarf',
        description: 'Mountain Dwarves are skilled warriors, accustomed to rugged terrains.',
        traits: [
          {
            name: 'Armor Proficiency',
            description: 'You gain proficiency with light and medium armor.'
          }
        ]
      }
    ],
    isHomebrew: false
  },
  {
    id: 'dragonborn',
    name: 'Dragonborn',
    description: 'Dragonborn are proud and noble beings, descended from dragons. Their ancestry grants them unique abilities tied to their draconic heritage.',
    traits: [
      {
        name: ' Ability Score Increase',
        description: 'Your Strength score increases by 2 and your Charisma score increases by 1.'
      },
      {
        name: 'Size',
        description: 'Medium'
      },
      {
        name: 'Speed',
        description: '30 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Draconic.'
      }
    ],
    subraces: [
      {
        id: 'chromatic-dragonborn',
        name: 'Chromatic Dragonborn',
        description: 'Dragonborn descended from chromatic dragons, known for their destructive breath and resilience.',
        variants: [
          {
            id: 'black-dragonborn',
            name: 'Black Dragonborn',
            description: 'Descendants of black dragons, feared for their acid breath.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 5x30 ft line of acid (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to acid damage.'
              }
            ]
          },
          {
            id: 'blue-dragonborn',
            name: 'Blue Dragonborn',
            description: 'Descendants of blue dragons, known for their mastery of lightning.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 5x30 ft line of lightning (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to lightning damage.'
              }
            ]
          },
          {
            id: 'green-dragonborn',
            name: 'Green Dragonborn',
            description: 'Descendants of green dragons, feared for their toxic breath.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 15 ft cone of poison (Constitution save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to poison damage.'
              }
            ]
          },
          {
            id: 'red-dragonborn',
            name: 'Red Dragonborn',
            description: 'Descendants of red dragons, embodying fiery destruction.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 15 ft cone of fire (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to fire damage.'
              }
            ]
          },
          {
            id: 'white-dragonborn',
            name: 'White Dragonborn',
            description: 'Descendants of white dragons, attuned to the icy cold.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 15 ft cone of cold (Constitution save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to cold damage.'
              }
            ]
          }
        ]
      },
      {
        id: 'metallic-dragonborn',
        name: 'Metallic Dragonborn',
        description: 'Dragonborn descended from metallic dragons, often noble and protective.',
        variants: [
          {
            id: 'brass-dragonborn',
            name: 'Brass Dragonborn',
            description: 'Descendants of brass dragons, known for their fiery breath.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 5x30 ft line of fire (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to fire damage.'
              }
            ]
          },
          {
            id: 'bronze-dragonborn',
            name: 'Bronze Dragonborn',
            description: 'Descendants of bronze dragons, adept in controlling lightning.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 5x30 ft line of lightning (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to lightning damage.'
              }
            ]
          },
          {
            id: 'copper-dragonborn',
            name: 'Copper Dragonborn',
            description: 'Descendants of copper dragons, known for their acidic breath.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 5x30 ft line of acid (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to acid damage.'
              }
            ]
          },
          {
            id: 'gold-dragonborn',
            name: 'Gold Dragonborn',
            description: 'Descendants of gold dragons, embodying fiery power and nobility.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 15 ft cone of fire (Dexterity save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to fire damage.'
              }
            ]
          },
          {
            id: 'silver-dragonborn',
            name: 'Silver Dragonborn',
            description: 'Descendants of silver dragons, attuned to the frigid cold.',
            traits: [
              {
                name: 'Breath Weapon',
                description: 'Exhale a 15 ft cone of cold (Constitution save).'
              },
              {
                name: 'Damage Resistance',
                description: 'You have resistance to cold damage.'
              }
            ]
          }
        ]
      }
    ],
    isHomebrew: false
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description: 'Halflings are small and nimble, known for their luck and resourcefulness.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'Your Dexterity score increases by 2.'
      },
      {
        name: 'Size',
        description: 'Small'
      },
      {
        name: 'Speed',
        description: '25 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Halfling.'
      }
    ],
    subraces: [
      {
        id: 'lightfoot-halfling',
        name: 'Lightfoot Halfling',
        description: 'Lightfoot Halflings are stealthy and charismatic.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Charisma score increases by 1.'
          },
          {
            name: 'Stealth',
            description: 'You can attempt to hide even when obscured by a creature larger than you.'
          }
        ]
      },
      {
        id: 'stout-halfling',
        name: 'Stout Halfling',
        description: 'Stout Halflings are hardier and more resilient than their Lightfoot kin.',
        traits: [
          {
            name: 'Ability Score Increase',
            description: 'Your Constitution score increases by 1.'
          },
          {
            name: 'Resilience',
            description: 'You have advantage on saving throws against poison.'
          }
        ]
      }
    ],
    isHomebrew: false
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description: 'Tieflings are individuals with infernal heritage, marked by their fiendish blood.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'Your Charisma score increases by 2 and your Intelligence score increases by 1.'
      },
      {
        name: 'Size',
        description: 'Medium'
      },
      {
        name: 'Speed',
        description: '30 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Infernal.'
      }
    ],
    subraces: [
      {
        id: 'infernal-tiefling',
        name: 'Infernal Tiefling',
        description: 'Tieflings with a connection to the Nine Hells, gaining unique spells and resistances.',
        traits: [
          {
            name: 'Darkvision',
            description: 'You can see in dim light within 60 feet as if it were bright light.'
          },
          {
            name: 'Spellcasting',
            description: 'You know the Thaumaturgy cantrip.'
          }
        ]
      },
      {
        id: 'abyssal-tiefling',
        name: 'Abyssal Tiefling',
        description: 'Tieflings connected to the Abyss, marked by chaotic energy.',
        traits: [
          {
            name: 'Darkvision',
            description: 'You can see in dim light within 60 feet as if it were bright light.'
          },
          {
            name: 'Spellcasting',
            description: 'You know the Eldritch Blast cantrip.'
          }
        ]
      }
    ],
    isHomebrew: false
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description: 'Gnomes are small, clever, and inventive, often with a deep connection to the earth.',
    traits: [
      {
        name: 'Ability Score Increase',
        description: 'Your Intelligence score increases by 2.'
      },
      {
        name: 'Size',
        description: 'Small'
      },
      {
        name: 'Speed',
        description: '25 feet'
      },
      {
        name: 'Languages',
        description: 'You can speak, read, and write Common and Gnomish.'
    }
  ],
  subraces: [
    {
      id: 'forest-gnome',
      name: 'Forest Gnome',
      description: 'Forest Gnomes are attuned to nature and often live in wooded areas.',
      traits: [
        {
          name: 'Ability Score Increase',
          description: 'Your Dexterity score increases by 1.'
        },
        {
          name: 'Natural Illusionist',
          description: 'You know the Minor Illusion cantrip.'
        }
      ]
    },
    {
      id: 'rock-gnome',
      name: 'Rock Gnome',
      description: 'Rock Gnomes are known for their inventiveness and craftsmanship.',
      traits: [
        {
          name: 'Ability Score Increase',
          description: 'Your Constitution score increases by 1.'
        },
        {
          name: 'Artificer\'s Lore',
          description: 'You have proficiency with artisan\'s tools.'
        }
      ]
    }
  ],
  isHomebrew: false
},
{
  id: 'orc',
  name: 'Orc',
  description: 'Orcs are fierce and strong, often living in tribal societies.',
  traits: [
    {
      name: 'Ability Score Increase',
      description: 'Your Strength score increases by 2 and your Constitution score increases by 1.'
    },
    {
      name: 'Size',
      description: 'Medium'
    },
    {
      name: 'Speed',
      description: '30 feet'
    },
    {
      name: 'Languages',
      description: 'You can speak, read, and write Common and Orc.'
    }
  ],
  isHomebrew: false
},
{
  id: 'goliath',
  name: 'Goliath',
  description: 'Towering over most folk, goliaths are distant descendants of giants, known for their supernatural boons tied to their giant heritage.',
  traits: [
    {
      name: 'Ability Score Increase',
      description: 'Your Strength score increases by 2 and your Constitution score increases by 1.'
    },
    {
      name: 'Size',
      description: 'Medium (about 7-8 feet tall)'
    },
    {
      name: 'Speed',
      description: '35 feet'
    },
    {
      name: 'Languages',
      description: 'You can speak, read, and write Common and Giant.'
    }
  ],
  subraces: [
    {
      id: 'stone-goliath',
      name: 'Stone Goliath',
      description: 'Goliaths connected to the resilience of stone, renowned for their endurance and strength.',
      traits: [
        {
          name: 'Stone\'s Endurance',
          description: 'As a reaction, reduce damage dealt to you by 1d12 + Constitution modifier.'
        }
      ]
    },
    {
      id: 'ice-goliath',
      name: 'Ice Goliath',
      description: 'Goliaths tied to the cold of their mountain homes, excelling in icy terrains and enduring freezing conditions.',
      traits: [
        {
          name: 'Cold Resistance',
          description: 'You have resistance to cold damage.'
        },
        {
          name: 'Ice Climber',
          description: 'You have advantage on Athletics checks related to climbing icy surfaces.'
        }
      ]
    },
    {
      id: 'storm-goliath',
      name: 'Storm Goliath',
      description: 'Goliaths infused with the power of storms, capable of wielding thunderous strength and resilience.',
      traits: [
        {
          name: 'Storm\'s Thunder',
          description: 'As a reaction, deal 1d8 thunder damage to a creature within 60 feet when damaged by it.'
        },
        {
          name: 'Thunder Strike',
          description: 'When you hit with a melee attack, deal an additional 1d6 thunder damage. Usable once per short rest.'
        }
      ]
    },
    {
      id: 'fire-goliath',
      name: 'Fire Goliath',
      description: 'Goliaths attuned to volcanic regions, harnessing fiery resilience and destructive power.',
      traits: [
        {
          name: 'Fire Resistance',
          description: 'You have resistance to fire damage.'
        },
        {
          name: 'Fires Burn',
          description: 'When a creature hits you with a melee attack, it takes fire damage equal to your proficiency bonus.'
        }
      ]
    }
  ],
  isHomebrew: false
}
];