import { SpellList } from '../../types/spells';

export const spellLists: Record<string, SpellList> = {
  bard: {
    spellcastingAbility: 'Charisma',
    spellcastingFocus: 'Musical Instrument',
    cantrips: [
      { id: 'vicious-mockery', name: 'Vicious Mockery', level: 0, school: 'Enchantment', description: 'Unleash a string of insults laced with subtle enchantments.' },
      { id: 'dancing-lights', name: 'Dancing Lights', level: 0, school: 'Evocation', description: 'Create up to four torch-sized lights.' },
      { id: 'prestidigitation', name: 'Prestidigitation', level: 0, school: 'Transmutation', description: 'Perform minor magical tricks.' }
    ],
    spells: {
      1: [
        { id: 'cure-wounds', name: 'Cure Wounds', level: 1, school: 'Evocation', description: 'Heal a creature you touch.' },
        { id: 'dissonant-whispers', name: 'Dissonant Whispers', level: 1, school: 'Enchantment', description: 'Whisper a discordant melody that only one creature can hear.' },
        { id: 'faerie-fire', name: 'Faerie Fire', level: 1, school: 'Evocation', description: 'Outline creatures in blue, green, or violet light.' }
      ],
      2: [
        { id: 'hold-person', name: 'Hold Person', level: 2, school: 'Enchantment', description: 'Paralyze a humanoid.' },
        { id: 'shatter', name: 'Shatter', level: 2, school: 'Evocation', description: 'Create a burst of thunderous sound.' }
      ]
    }
  },
  cleric: {
    spellcastingAbility: 'Wisdom',
    spellcastingFocus: 'Holy Symbol',
    cantrips: [
      { id: 'sacred-flame', name: 'Sacred Flame', level: 0, school: 'Evocation', description: 'Flame-like radiance descends on a creature.' },
      { id: 'spare-the-dying', name: 'Spare the Dying', level: 0, school: 'Necromancy', description: 'Stabilize a dying creature.' },
      { id: 'thaumaturgy', name: 'Thaumaturgy', level: 0, school: 'Transmutation', description: 'Manifest minor wonders.' }
    ],
    spells: {
      1: [
        { id: 'bless', name: 'Bless', level: 1, school: 'Enchantment', description: 'Bless up to three creatures.' },
        { id: 'cure-wounds', name: 'Cure Wounds', level: 1, school: 'Evocation', description: 'Heal a creature you touch.' },
        { id: 'shield-of-faith', name: 'Shield of Faith', level: 1, school: 'Abjuration', description: 'Create a shimmering field of protection.' }
      ],
      2: [
        { id: 'spiritual-weapon', name: 'Spiritual Weapon', level: 2, school: 'Evocation', description: 'Create a floating spectral weapon.' },
        { id: 'lesser-restoration', name: 'Lesser Restoration', level: 2, school: 'Abjuration', description: 'Cure a condition or disease.' }
      ]
    }
  }
};