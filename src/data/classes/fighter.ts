import { Class } from '../../types/character';

export const fighter: Class = {
  id: 'fighter',
  name: 'Fighter',
  description: 'A master of martial combat, skilled with a variety of weapons and armor',
  hitDie: 10,
  primaryAbility: 'Strength or Dexterity',
  savingThrows: ['Strength', 'Constitution'],
  proficiencies: ['Simple Weapons', 'Martial Weapons', 'All Armor', 'Shields'],
  features: [
    {
      id: 'fighting-style',
      name: 'Fighting Style',
      description: 'Adopt a particular style of fighting as your specialty',
      level: 1
    },
    {
      id: 'second-wind',
      name: 'Second Wind',
      description: 'Regain hit points equal to 1d10 + fighter level as a bonus action',
      level: 1
    },
    {
      id: 'action-surge',
      name: 'Action Surge',
      description: 'Take one additional action on your turn',
      level: 2
    },
    {
      id: 'martial-archetype',
      name: 'Martial Archetype',
      description: 'Choose a martial archetype that defines your combat techniques',
      level: 3
    },
    {
      id: 'extra-attack',
      name: 'Extra Attack',
      description: 'Attack twice when you take the Attack action',
      level: 5
    }
  ],
  subclassLevel: 3,
  isHomebrew: false
};