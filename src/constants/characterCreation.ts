export const CREATION_STEPS = [
  { id: 1, name: 'Species' },
  { id: 2, name: 'Class' },
  { id: 3, name: 'Background' },
  { id: 4, name: 'Ability Scores' },
  { id: 5, name: 'Equipment & Spells' },
  { id: 6, name: 'Review' },
];

export const POINT_BUY_COSTS = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

export const ABILITY_SCORE_METHODS = [
  {
    id: 'standard',
    name: 'Standard Array',
    description: 'Use the standard set of scores: 15, 14, 13, 12, 10, 8'
  },
  {
    id: 'pointbuy',
    name: 'Point Buy',
    description: 'Spend points to customize your ability scores'
  },
  {
    id: 'roll',
    name: 'Roll Scores',
    description: 'Roll 4d6, drop the lowest die for each ability score'
  }
];