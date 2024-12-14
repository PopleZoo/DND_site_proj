import { Subclass } from '../../../types/character';

export const wildHeart: Subclass = {
  id: 'wild-heart',
  name: 'Path of the Wild Heart',
  parentClass: 'barbarian',
  description: 'A primal path that channels the power of nature and animal spirits',
  features: [
    {
      id: 'totemic-spirit',
      name: 'Totemic Spirit',
      description: 'Choose an animal spirit to grant you special abilities while raging',
      level: 3
    },
    {
      id: 'aspect-of-the-beast',
      name: 'Aspect of the Beast',
      description: 'Gain special abilities based on your chosen animal spirit even while not raging',
      level: 6
    },
    {
      id: 'spirit-walker',
      name: 'Spirit Walker',
      description: 'Cast the commune with nature spell as a ritual',
      level: 10
    },
    {
      id: 'totemic-attunement',
      name: 'Totemic Attunement',
      description: 'Gain powerful abilities based on your chosen animal spirit',
      level: 14
    }
  ],
  isHomebrew: false
};