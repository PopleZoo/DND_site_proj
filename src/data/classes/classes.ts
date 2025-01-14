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
  {
    id: 'barbarian',
    name: 'Barbarian',
    level: 1,
    hitDice: 12,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Barbarian',
      description: 'Fierce warriors who channel their rage into battle, shrugging off damage and dealing powerful attacks.',
      hitDice: 12,
      primaryAbility: 'Strength',
      savingThrows: ['Strength', 'Constitution'],
      classFeatures: [
        {
          id: 'rage',
          name: 'Rage',
          description: 'Enter a battle frenzy to gain damage resistance and increased melee power.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'reckless-attack',
          name: 'Reckless Attack',
          description: 'Attack with advantage but make yourself vulnerable to counterattacks.',
          level: 2,
          isHomebrew: false
        },
        {
          id: 'danger-sense',
          name: 'Danger Sense',
          description: 'Gain advantage on Dexterity saving throws against visible effects.',
          level: 2,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'path-of-the-berserker',
          name: 'Path of the Berserker',
          description: 'Channel rage into a frenzied state, allowing extra attacks at the cost of exhaustion.',
          features: [
            {
              id: 'frenzy',
              name: 'Frenzy',
              description: 'Make additional melee attacks while raging, but suffer exhaustion after each rage.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'mindless-rage',
              name: 'Mindless Rage',
              description: 'You cannot be charmed or frightened while raging.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'path-of-the-totem-warrior',
          name: 'Path of the Totem Warrior',
          description: 'Draw power from animal spirits to enhance your abilities and gain unique powers.',
          features: [
            {
              id: 'spirit-totem',
              name: 'Spirit Totem',
              description: 'Choose an animal spirit (e.g., bear, eagle) to gain specific benefits while raging.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'aspect-of-the-beast',
              name: 'Aspect of the Beast',
              description: 'Gain additional benefits from your chosen animal spirit.',
              level: 6,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Versatile performers and spellcasters who weave magic through music, storytelling, and creativity to inspire allies and influence the world.',
      hitDice: 8,
      primaryAbility: 'Charisma',
      savingThrows: ['Dexterity', 'Charisma'],
      classFeatures: [
        {
          id: 'bardic-inspiration',
          name: 'Bardic Inspiration',
          description: 'Inspire an ally with a bonus die to improve their rolls on ability checks, attack rolls, or saving throws.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Bards draw upon their creativity to cast spells, using their Charisma to influence the magic of the world.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'jack-of-all-trades',
          name: 'Jack of All Trades',
          description: 'Add half your proficiency bonus to ability checks that don’t already include it.',
          level: 2,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'college-of-lore',
          name: 'College of Lore',
          description: 'Bards who delve into ancient stories, gaining expertise in knowledge and magical secrets.',
          features: [
            {
              id: 'cutting-words',
              name: 'Cutting Words',
              description: 'Distract and weaken enemies by sapping their confidence.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'additional-magical-secrets',
              name: 'Additional Magical Secrets',
              description: 'Learn additional spells from any class to expand your repertoire.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'college-of-valor',
          name: 'College of Valor',
          description: 'Bards who inspire and fight alongside their allies, blending combat prowess with magic.',
          features: [
            {
              id: 'combat-inspiration',
              name: 'Combat Inspiration',
              description: 'Allow allies to improve their damage rolls or AC using your inspiration.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'extra-attack',
              name: 'Extra Attack',
              description: 'Attack twice instead of once whenever you take the Attack action on your turn.',
              level: 6,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Divine magic users who serve a deity, clerics can heal, protect, and smite foes with their spells.',
      hitDice: 8,
      primaryAbility: 'Wisdom',
      savingThrows: ['Wisdom', 'Charisma'],
      classFeatures: [
        {
          id: 'divine-domain',
          name: 'Divine Domain',
          description: 'Choose a domain that grants unique abilities and spells.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Clerics can cast spells using their Wisdom as their spellcasting ability.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'knowledge-domain',
          name: 'Knowledge Domain',
          description: 'Clerics who seek knowledge and understanding, gaining skills and spells related to lore.',
          features: [
            {
              id: 'blessings-of-knowledge',
              name: 'Blessings of Knowledge',
              description: 'Gain proficiency in two skills of your choice.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'channel-divinity',
              name: 'Channel Divinity: Knowledge of the Ages',
              description: 'Gain proficiency in any skill or tool for 10 minutes.',
              level: 2,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'life-domain',
          name: 'Life Domain',
          description: 'Clerics who focus on healing and protection, enhancing their healing spells.',
          features: [
            {
              id: 'bonus-proficiency',
              name: 'Bonus Proficiency',
              description: 'Gain proficiency with heavy armor.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'channel-divinity',
              name: 'Channel Divinity: Preserve Life',
              description: 'Restore hit points to creatures within a certain radius.',
              level: 2,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Nature\'s guardians who can shapeshift and cast spells, druids harness the power of the natural world.',
      hitDice: 8,
      primaryAbility: 'Wisdom',
      savingThrows: ['Intelligence', 'Wisdom'],
      classFeatures: [
        {
          id: 'wild-shape',
          name: 'Wild Shape',
          description: 'Transform into animals you have seen before.',
          level: 2,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Druids can cast spells using their Wisdom as their spellcasting ability.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'circle-of-the-moon',
          name: 'Circle of the Moon',
          description: 'Druids who excel in combat and can transform into more powerful beasts.',
          features: [
            {
              id: 'combat-wild-shape',
              name: 'Combat Wild Shape',
              description: 'Use a bonus action to expend a spell slot to regain hit points while in beast form.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'primal-strike',
              name: 'Primal Strike',
              description: 'Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'circle-of-the-land',
          name: 'Circle of the Land',
          description: 'Druids who draw power from the land, gaining additional spells and abilities based on their chosen terrain.',
          features: [
            {
              id: 'natural-recovery',
              name: 'Natural Recovery',
              description: 'Regain spell slots during a short rest.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'land-stride',
              name: 'Land\'s Stride',
              description: 'Move through nonmagical difficult terrain without expending extra movement.',
              level: 6,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Skilled warriors who excel in combat, fighters can specialize in various fighting styles and tactics.',
      hitDice: 10,
      primaryAbility: 'Strength or Dexterity',
      savingThrows: ['Strength', 'Constitution'],
      classFeatures: [
        {
          id: 'fighting-style',
          name: 'Fighting Style',
          description: 'Choose a style that enhances your combat abilities.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'second-wind',
          name: 'Second Wind',
          description: 'Regain hit points as a bonus action.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'champion',
          name: 'Champion',
          description: 'Fighters who focus on physical prowess and athleticism.',
          features: [
            {
              id: 'improved-crit',
              name: 'Improved Critical',
              description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'remarkable-athlete',
              name: 'Remarkable Athlete',
              description: 'Add half your proficiency bonus to any Strength, Dexterity, or Constitution check you make.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'battle-master',
          name: 'Battle Master',
          description: 'Fighters who use tactical maneuvers to gain an advantage in combat.',
          features: [
            {
              id: 'maneuvers',
              name: 'Maneuvers',
              description: 'Learn special combat techniques that can be used to gain an edge in battle.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'superiority-dice',
              name: 'Superiority Dice',
              description: 'Gain a pool of dice to fuel your maneuvers.',
              level: 3,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'eldritch-knight',
          name: 'Eldritch Knight',
          description: 'Fighters who blend martial prowess with arcane magic.',
          features: [
            {
              id: 'spellcasting',
              name: 'Spellcasting',
              description: 'Learn to cast spells from the wizard spell list.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'arcane-ward',
              name: 'Arcane Ward',
              description: 'Create a magical ward that absorbs damage.',
              level: 7,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Monks are martial artists who harness the power of ki to perform extraordinary feats, combining physical prowess with spiritual discipline.',
      hitDice: 8,
      primaryAbility: 'Dexterity',
      savingThrows: ['Strength', 'Dexterity'],
      classFeatures: [
        {
          id: 'unarmored-defense',
          name: 'Unarmored Defense',
          description: 'While not wearing armor, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'martial-arts',
          name: 'Martial Arts',
          description: 'You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'way-of-the-open-hand',
          name: 'Way of the Open Hand',
          description: 'Monks who focus on unarmed combat and can manipulate their opponents\' bodies.',
          features: [
            {
              id: 'open-hand-technique',
              name: 'Open Hand Technique',
              description: 'When you hit a creature with an unarmed strike, you can impose one of several effects.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'wholeness-of-body',
              name: 'Wholeness of Body',
              description: 'You can heal yourself for a number of hit points equal to three times your monk level.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'way-of-shadow',
          name: 'Way of Shadow',
          description: 'Monks who use stealth and deception to gain the upper hand in combat.',
          features: [
            {
              id: 'shadow-step',
              name: 'Shadow Step',
              description: 'You can teleport from one shadow to another, gaining advantage on the first melee attack you make.',
              level: 6,
              isHomebrew: false
            },
            {
              id: 'cloak-of-shadows',
              name: 'Cloak of Shadows',
              description: 'You can use your ki to become invisible in dim light or darkness.',
              level: 11,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'way-of-the-four-elements',
          name: 'Way of the Four Elements',
          description: 'Monks who can harness elemental powers to cast spells.',
          features: [
            {
              id: 'elemental-adept',
              name: 'Elemental Adept',
              description: 'You can spend ki points to cast spells that deal elemental damage.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'elemental-master',
              name: 'Elemental Master',
              description: 'You can cast powerful elemental spells using your ki.',
              level: 11,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'paladin',
    name: 'Paladin',
    level: 1,
    hitDice: 10,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Paladin',
      description: 'Holy warriors who wield divine power to protect the innocent and smite evil.',
      hitDice: 10,
      primaryAbility: 'Strength',
      savingThrows: ['Wisdom', 'Charisma'],
      classFeatures: [
        {
          id: 'divine-sense',
          name: 'Divine Sense',
          description: 'You can sense the presence of fiends, undead, and celestial beings.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'lay-on-hands',
          name: 'Lay on Hands',
          description: 'You can heal wounds by touch, restoring a number of hit points equal to your paladin level times 5.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'oath-of-the-ancients',
          name: 'Oath of the Ancients',
          description: 'Paladins who draw power from the forces of nature and the light.',
          features: [
            {
              id: 'channel-divinity',
              name: 'Channel Divinity: Nature\'s Wrath',
              description: 'You can use your Channel Divinity to ensnare foes in magical vines.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'undying-sentiment',
              name: 'Undying Sentiment',
              description: 'You gain resistance to damage from spells.',
              level: 7,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'oath-of-vengeance',
          name: 'Oath of Vengeance',
          description: 'Paladins who seek retribution against those who have wronged others.',
          features: [
            {
              id: 'abjure-enemy',
              name: 'Abjure Enemy',
              description: 'As an action, you can force a creature to make a Wisdom saving throw or be frightened.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'vow-of-enmity',
              name: 'Vow of Enmity',
              description: 'You can choose a creature to gain advantage on attack rolls against it for a minute.',
              level: 7,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'oath-of-glory',
          name: 'Oath of Glory',
          description: 'Paladins who believe in their own heroism and inspire others to achieve greatness.',
          features: [
            {
              id: 'channel-divinity-peerless-athlete',
              name: 'Channel Divinity: Peerless Athlete',
              description: 'As an action, you can use your Channel Divinity to enhance your athletic abilities.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'aura-of-alacrity',
              name: 'Aura of Alacrity',
              description: 'You radiate an aura that increases the movement speed of friendly creatures within 10 feet.',
              level: 7,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'oath-of-devotion',
          name: 'Oath of Devotion',
          description: 'Paladins who uphold the highest ideals of justice, virtue, and honor.',
          features: [
            {
              id: 'channel-divinity-sacred-weapon',
              name: 'Channel Divinity: Sacred Weapon',
              description: 'As an action, imbue a weapon with positive energy, adding your Charisma modifier to attack rolls.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'aura-of-devotion',
              name: 'Aura of Devotion',
              description: 'You and friendly creatures within 10 feet can\'t be charmed while conscious.',
              level: 7,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Hunters and trackers who are adept in wilderness survival and combat.',
      hitDice: 10,
      primaryAbility: 'Dexterity',
      savingThrows: ['Strength', 'Dexterity'],
      classFeatures: [
        {
          id: 'favored-enemy',
          name: 'Favored Enemy',
          description: 'Choose a type of creature to gain bonuses against.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'natural-explorer',
          name: 'Natural Explorer',
          description: 'You are adept at navigating and surviving in a chosen terrain.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'hunter',
          name: 'Hunter',
          description: 'Rangers who specialize in tracking and defeating foes.',
          features: [
            {
              id: 'hunter\'s-prey',
              name: 'Hunter\'s Prey',
              description: 'Choose a feature that enhances your combat abilities against your favored enemies.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'defensive-tactics',
              name: 'Defensive Tactics',
              description: 'Gain benefits when fighting against your favored enemies.',
              level: 7,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'beast-master',
          name: 'Beast Master',
          description: 'Rangers who form a bond with a beast companion.',
          features: [
            {
              id: 'animal-companion',
              name: 'Animal Companion',
              description: 'You gain a beast companion that fights alongside you.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'extra-attack',
              name: 'Extra Attack',
              description: 'You can attack twice instead of once whenever you take the Attack action on your turn.',
              level: 5,
              isHomebrew: false
            }
          ]
        }
      ]
    }
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
      description: 'Cunning and stealthy, rogues excel in deception, trickery, and precision strikes.',
      hitDice: 8,
      primaryAbility: 'Dexterity',
      savingThrows: ['Dexterity', 'Intelligence'],
      classFeatures: [
        {
          id: 'sneak-attack',
          name: 'Sneak Attack',
          description: 'Deal extra damage when you have advantage on the attack roll or when an ally is within 5 feet of the target.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'thieves-cant',
          name: 'Thieves\' Cant',
          description: 'You can communicate in a secret language known only to rogues.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'thief',
          name: 'Thief',
          description: 'Rogues who specialize in stealth and agility, excelling in thievery and acrobatics.',
          features: [
            {
              id: 'fast-hands',
              name: 'Fast Hands',
              description: 'You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves\' tools to disarm a trap or open a lock, or take the Use an Object action.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'second-story-work',
              name: 'Second-Story Work',
              description: 'You can climb faster than normal and can make a running jump.',
              level: 3,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'assassin',
          name: 'Assassin',
          description: 'Rogues who specialize in infiltration and assassination, dealing devastating damage to unsuspecting foes.',
          features: [
            {
              id: 'assassinate',
              name: 'Assassinate',
              description: 'You have advantage on attack rolls against any creature that hasn\'t taken a turn in the combat yet.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'infiltration-expert',
              name: 'Infiltration Expert',
              description: 'You can unerringly mimic speech and writing.',
              level: 9,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'arcane-trickster',
          name: 'Arcane Trickster',
          description: 'Rogues who blend magic with stealth, using spells to enhance their trickery.',
          features: [
            {
              id: 'spellcasting',
              name: 'Spellcasting',
              description: 'You can cast spells from the wizard spell list.',
              level: 3,
              isHomebrew: false
            },
            {
              id: 'magical-ambush',
              name: 'Magical Ambush',
              description: 'You can cast a spell and then use your Sneak Attack on the same turn.',
              level: 9,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    level: 1,
    hitDice: 6,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Sorcerer',
      description: 'Innate spellcasters who draw their magic from their bloodline or a powerful source.',
      hitDice: 6,
      primaryAbility: 'Charisma',
      savingThrows: ['Constitution', 'Charisma'],
      classFeatures: [
        {
          id: 'sorcery-points',
          name: 'Sorcery Points',
          description: 'You have a pool of points that you can use to create spell slots or fuel your spells.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Sorcerers can cast spells using their Charisma as their spellcasting ability.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'draconic-bloodline',
          name: 'Draconic Bloodline',
          description: 'Sorcerers who have dragon ancestry, gaining abilities related to their dragon type.',
          features: [
            {
              id: 'draconic-resilience',
              name: 'Draconic Resilience',
              description: 'Your hit point maximum increases by 1 for each sorcerer level you have.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'elemental-affinity',
              name: 'Elemental Affinity',
              description: 'When you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'wild-magic',
          name: 'Wild Magic',
          description: 'Sorcerers who harness chaotic magic, leading to unpredictable effects.',
          features: [
            {
              id: 'wild-magic-surge',
              name: 'Wild Magic Surge',
              description: 'Whenever you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, you roll on the Wild Magic Surge table.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'tides-of-chaos',
              name: 'Tides of Chaos',
              description: 'You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw.',
              level: 1,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'warlock',
    name: 'Warlock',
    level: 1,
    hitDice: 8,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Warlock',
      description: 'Spellcasters who gain their magic through pacts with powerful entities.',
      hitDice: 8,
      primaryAbility: 'Charisma',
      savingThrows: ['Wisdom', 'Charisma'],
      classFeatures: [
        {
          id: 'otherworldly-patron',
          name: 'Otherworldly Patron',
          description: 'Choose a patron that grants you unique abilities and spells.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Warlocks can cast spells using their Charisma as their spellcasting ability.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'the-archfey',
          name: 'The Archfey',
          description: 'Warlocks who make pacts with powerful fey beings, gaining abilities related to illusion and enchantment.',
          features: [
            {
              id: 'fey-ancestry',
              name: 'Fey Ancestry',
              description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'misty-step',
              name: 'Misty Step',
              description: 'You can cast Misty Step as a spell without expending a spell slot.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'the-fiend',
          name: 'The Fiend',
          description: 'Warlocks who make pacts with fiendish entities, gaining abilities related to fire and destruction.',
          features: [
            {
              id: 'dark-one\'s-blessing',
              name: 'Dark One\'s Blessing',
              description: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'fireball',
              name: 'Fireball',
              description: 'You can cast Fireball as a spell without expending a spell slot.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'the-great-old-one',
          name: 'The Great Old One',
          description: 'Warlocks who make pacts with ancient, unknowable entities, gaining abilities related to madness and telepathy.',
          features: [
            {
              id: 'enthralling-performance',
              name: 'Enthralling Performance',
              description: 'You can charm creatures with your performance.',
              level: 1,
              isHomebrew: false
            },
            {
              id: 'whispers-of-the-deep',
              name: 'Whispers of the Deep',
              description: 'You can communicate telepathically with creatures within a certain range.',
              level: 6,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'wizard',
    name: 'Wizard',
    level: 1,
    hitDice: 6,
    isStartingClass: true,
    isHomebrew: false,
    definition: {
      name: 'Wizard',
      description: 'Scholars of arcane magic, wizards learn spells through study and practice, wielding powerful magic.',
      hitDice: 6,
      primaryAbility: 'Intelligence',
      savingThrows: ['Intelligence', 'Wisdom'],
      classFeatures: [
        {
          id: 'spellcasting',
          name: 'Spellcasting',
          description: 'Wizards can cast spells using their Intelligence as their spellcasting ability.',
          level: 1,
          isHomebrew: false
        },
        {
          id: 'arcane-recovery',
          name: 'Arcane Recovery',
          description: 'You can regain some of your magical energy during a short rest.',
          level: 1,
          isHomebrew: false
        }
      ],
      subclasses: [
        {
          id: 'school-of-abjuration',
          name: 'School of Abjuration',
          description: 'Wizards who specialize in protective magic.',
          features: [
            {
              id: 'abjuration-savvy',
              name: 'Abjuration Savvy',
              description: 'You gain proficiency in the Arcana skill.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'projected-ward',
              name: 'Projected Ward',
              description: 'You can create a magical ward that absorbs damage.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-conjuration',
          name: 'School of Conjuration',
          description: 'Wizards who specialize in summoning creatures and objects.',
          features: [
            {
              id: 'conjuration-savvy',
              name: 'Conjuration Savvy',
              description: 'You can conjure objects and creatures more effectively.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'minor-conjuration',
              name: 'Minor Conjuration',
              description: 'You can conjure a small object out of thin air.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-divination',
          name: 'School of Divination',
          description: 'Wizards who specialize in foresight and knowledge.',
          features: [
            {
              id: 'divination-savvy',
              name: 'Divination Savvy',
              description: 'You can gain insights into the future.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'third-eye',
              name: 'Third Eye',
              description: 'You can see into the ethereal plane.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-enchantment',
          name: 'School of Enchantment',
          description: 'Wizards who specialize in charming and manipulating others.',
          features: [
            {
              id: 'enchantment-savvy',
              name: 'Enchantment Savvy',
              description: 'You can charm creatures more effectively.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'hypnotic-gaze',
              name: 'Hypnotic Gaze',
              description: 'You can mesmerize a creature with your gaze.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-evocation',
          name: 'School of Evocation',
          description: 'Wizards who specialize in destructive magic.',
          features: [
            {
              id: 'evocation-savvy',
              name: 'Evocation Savvy',
              description: 'You can maximize the damage of your evocation spells.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'sculpt-spells',
              name: 'Sculpt Spells',
              description: 'You can create pockets of safety within your evocation spells.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-illusion',
          name: 'School of Illusion',
          description: 'Wizards who specialize in creating illusions.',
          features: [
            {
              id: 'illusion-savvy',
              name: 'Illusion Savvy',
              description: 'You can create more convincing illusions.',
              level: 2,
              isHomebrew: false
            },
            {              id: 'improved-illusion',
              name: 'Improved Illusion',
              description: 'Your illusions can have more powerful effects.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-necromancy',
          name: 'School of Necromancy',
          description: 'Wizards who specialize in manipulating life and death.',
          features: [
            {
              id: 'necromancy-savvy',
              name: 'Necromancy Savvy',
              description: 'You can gain temporary hit points when you cast necromancy spells.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'command-undead',
              name: 'Command Undead',
              description: 'You can control undead creatures more effectively.',
              level: 6,
              isHomebrew: false
            }
          ]
        },
        {
          id: 'school-of-transmutation',
          name: 'School of Transmutation',
          description: 'Wizards who specialize in changing the properties of objects and creatures.',
          features: [
            {
              id: 'transmutation-savvy',
              name: 'Transmutation Savvy',
              description: 'You can enhance the effects of your transmutation spells.',
              level: 2,
              isHomebrew: false
            },
            {
              id: 'master-transmuter',
              name: 'Master Transmuter',
              description: 'You can change the properties of objects and creatures more effectively.',
              level: 6,
              isHomebrew: false
            }
          ]
        }
      ]
    }
  }
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