import { AbilityScore } from '../types/character';

export const ABILITY_SCORES: AbilityScore[] = [
  {
    id: 'strength',
    name: 'Strength',
    description: 'Natural athleticism, bodily power, and raw physical force',
    skills: ['Athletics'],
    savingThrowDescription: 'Breaking restraints, forcing open doors, resisting forced movement'
  },
  {
    id: 'dexterity',
    name: 'Dexterity',
    description: 'Physical agility, reflexes, balance, and poise',
    skills: ['Acrobatics', 'Sleight of Hand', 'Stealth'],
    savingThrowDescription: 'Dodging attacks, avoiding traps, maintaining balance'
  },
  {
    id: 'constitution',
    name: 'Constitution',
    description: 'Health, stamina, and vital force',
    skills: [],
    savingThrowDescription: 'Resisting poison, disease, and extreme conditions'
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    description: 'Mental acuity, information recall, and analytical skill',
    skills: ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'],
    savingThrowDescription: 'Resisting mental attacks, recalling knowledge'
  },
  {
    id: 'wisdom',
    name: 'Wisdom',
    description: 'Awareness, intuition, and insight',
    skills: ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
    savingThrowDescription: 'Resisting deception, sensing danger, maintaining concentration'
  },
  {
    id: 'charisma',
    name: 'Charisma',
    description: 'Force of personality, persuasiveness, and leadership',
    skills: ['Deception', 'Intimidation', 'Performance', 'Persuasion'],
    savingThrowDescription: 'Resisting charm effects, maintaining morale'
  }
];