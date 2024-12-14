import { Class } from '../../types/character';

export const barbarian: Class = {
  id: 'barbarian',
  name: 'Barbarian',
  description: 'A fierce warrior who can enter a battle rage',
  hitDie: 12,
  primaryAbility: 'Strength',
  savingThrows: ['Strength', 'Constitution'],
  proficiencies: [
    'Simple Weapons',
    'Martial Weapons',
    'Light Armor',
    'Medium Armor',
    'Shields'
  ],
  features: [
    {
      id: 'rage',
      name: 'Rage',
      description: 'Enter a battle frenzy for increased damage and resistance to physical damage',
      level: 1
    },
    {
      id: 'unarmored-defense',
      name: 'Unarmored Defense',
      description: 'While not wearing armor, your AC equals 10 + Dexterity modifier + Constitution modifier',
      level: 1
    },
    {
      id: 'reckless-attack',
      name: 'Reckless Attack',
      description: 'Gain advantage on melee weapon attack rolls using Strength, but attack rolls against you have advantage',
      level: 2
    },
    {
      id: 'danger-sense',
      name: 'Danger Sense',
      description: 'Advantage on Dexterity saving throws against effects you can see',
      level: 2
    },
    {
      id: 'primal-path',
      name: 'Primal Path',
      description: 'Choose your Primal Path that shapes your rage',
      level: 3
    },
    {
      id: 'extra-attack',
      name: 'Extra Attack',
      description: 'Attack twice when you take the Attack action',
      level: 5
    },
    {
      id: 'fast-movement',
      name: 'Fast Movement',
      description: 'Your speed increases by 10 feet while not wearing heavy armor',
      level: 5
    },
    {
      id: 'feral-instinct',
      name: 'Feral Instinct',
      description: 'Advantage on initiative rolls and can act normally on first turn when surprised',
      level: 7
    },
    {
      id: 'brutal-critical-1',
      name: 'Brutal Critical (1 die)',
      description: 'Roll one additional weapon damage die when determining the extra damage for a critical hit',
      level: 9
    },
    {
      id: 'relentless-rage',
      name: 'Relentless Rage',
      description: 'Drop to 1 hit point instead of 0 when raging (DC 10 + 5 per use)',
      level: 11
    },
    {
      id: 'brutal-critical-2',
      name: 'Brutal Critical (2 dice)',
      description: 'Roll two additional weapon damage dice when determining the extra damage for a critical hit',
      level: 13
    },
    {
      id: 'persistent-rage',
      name: 'Persistent Rage',
      description: 'Your rage only ends early if you fall unconscious or choose to end it',
      level: 15
    },
    {
      id: 'brutal-critical-3',
      name: 'Brutal Critical (3 dice)',
      description: 'Roll three additional weapon damage dice when determining the extra damage for a critical hit',
      level: 17
    },
    {
      id: 'indomitable-might',
      name: 'Indomitable Might',
      description: 'If your Strength check is less than your Strength score, use that score instead',
      level: 18
    },
    {
      id: 'primal-champion',
      name: 'Primal Champion',
      description: 'Your Strength and Constitution scores increase by 4, and their maximum increases to 24',
      level: 20
    }
  ],
  subclassLevel: 3,
  isHomebrew: false
};