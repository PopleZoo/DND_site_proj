import { Subclass } from '../../../types/character';

export const champion: Subclass = {
  id: 'champion',
  name: 'Champion',
  parentClass: 'fighter',
  description: 'A master of physical combat focused on raw power and athletic prowess',
  features: [
    {
      id: 'improved-critical',
      name: 'Improved Critical',
      description: 'Your weapon attacks score a critical hit on a roll of 19 or 20',
      level: 3
    },
    {
      id: 'remarkable-athlete',
      name: 'Remarkable Athlete',
      description: 'Add half your proficiency bonus to certain ability checks and increase jump distance',
      level: 7
    },
    {
      id: 'additional-fighting-style',
      name: 'Additional Fighting Style',
      description: 'Choose a second fighting style',
      level: 10
    }
  ],
  isHomebrew: false
};