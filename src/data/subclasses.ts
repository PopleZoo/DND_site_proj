export const subclasses: Record<string, Array<{
  id: string;
  name: string;
  description: string;
  features: string[];
  isHomebrew: boolean;
}>> = {
  fighter: [
    {
      id: 'champion',
      name: 'Champion',
      description: 'A master of physical combat focused on raw power and athletic prowess.',
      features: [
        'Improved Critical',
        'Remarkable Athlete',
        'Additional Fighting Style'
      ],
      isHomebrew: false
    },
    {
      id: 'battlemaster',
      name: 'Battle Master',
      description: 'A skilled tactician and student of warfare who uses maneuvers to control the battlefield.',
      features: [
        'Combat Superiority',
        'Student of War',
        'Know Your Enemy'
      ],
      isHomebrew: false
    }
  ],
  wizard: [
    {
      id: 'evocation',
      name: 'School of Evocation',
      description: 'Specialists in spells that create powerful elemental effects.',
      features: [
        'Evocation Savant',
        'Sculpt Spells',
        'Potent Cantrip'
      ],
      isHomebrew: false
    },
    {
      id: 'chronurgy',
      name: 'Chronurgy Magic',
      description: 'Masters of time who bend moments to their will.',
      features: [
        'Temporal Awareness',
        'Chronal Shift',
        'Momentary Stasis'
      ],
      isHomebrew: true
    }
  ]
};