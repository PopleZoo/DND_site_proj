import { Subclass } from '../../../types/character';

export const zealot: Subclass = {
  id: 'zealot',
  name: 'Path of the Zealot',
  parentClass: 'barbarian',
  description: 'A primal path that channels divine fury through rage',
  features: [
    {
      id: 'divine-fury',
      name: 'Divine Fury',
      description: 'While raging, deal extra radiant or necrotic damage on the first hit each turn',
      level: 3
    },
    {
      id: 'warrior-of-the-gods',
      name: 'Warrior of the Gods',
      description: 'Spells that restore you to life don't require material components',
      level: 6
    },
    {
      id: 'zealous-presence',
      name: 'Zealous Presence',
      description: 'As a bonus action, grant up to 10 creatures advantage on attacks and saving throws',
      level: 10
    },
    {
      id: 'rage-beyond-death',
      name: 'Rage Beyond Death',
      description: 'While raging, dropping to 0 hit points doesn't knock you unconscious',
      level: 14
    }
  ],
  isHomebrew: false
};