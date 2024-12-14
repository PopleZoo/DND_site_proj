import { SpellSchool, SpellLevel, SpellcastingClass } from '../types/spells';

export const spells = {
  wizard: {
    cantrips: [
      {
        id: 'fire-bolt',
        name: 'Fire Bolt',
        level: 0,
        school: 'Evocation',
        castingTime: '1 action',
        range: '120 feet',
        components: ['V', 'S'],
        duration: 'Instantaneous',
        description: 'Ranged spell attack that deals 1d10 fire damage.'
      },
      {
        id: 'mage-hand',
        name: 'Mage Hand',
        level: 0,
        school: 'Conjuration',
        castingTime: '1 action',
        range: '30 feet',
        components: ['V', 'S'],
        duration: '1 minute',
        description: 'Conjure a spectral hand that can manipulate objects.'
      }
    ],
    level1: [
      {
        id: 'magic-missile',
        name: 'Magic Missile',
        level: 1,
        school: 'Evocation',
        castingTime: '1 action',
        range: '120 feet',
        components: ['V', 'S'],
        duration: 'Instantaneous',
        description: 'Create three darts of magical force that automatically hit.'
      },
      {
        id: 'shield',
        name: 'Shield',
        level: 1,
        school: 'Abjuration',
        castingTime: '1 reaction',
        range: 'Self',
        components: ['V', 'S'],
        duration: '1 round',
        description: 'Create an invisible barrier of magical force.'
      }
    ]
  },
  cleric: {
    cantrips: [
      {
        id: 'sacred-flame',
        name: 'Sacred Flame',
        level: 0,
        school: 'Evocation',
        castingTime: '1 action',
        range: '60 feet',
        components: ['V', 'S'],
        duration: 'Instantaneous',
        description: 'Flame-like radiance descends on a creature.'
      },
      {
        id: 'spare-the-dying',
        name: 'Spare the Dying',
        level: 0,
        school: 'Necromancy',
        castingTime: '1 action',
        range: 'Touch',
        components: ['V', 'S'],
        duration: 'Instantaneous',
        description: 'Stabilize a dying creature.'
      }
    ],
    level1: [
      {
        id: 'cure-wounds',
        name: 'Cure Wounds',
        level: 1,
        school: 'Evocation',
        castingTime: '1 action',
        range: 'Touch',
        components: ['V', 'S'],
        duration: 'Instantaneous',
        description: 'Heal a creature you touch.'
      },
      {
        id: 'bless',
        name: 'Bless',
        level: 1,
        school: 'Enchantment',
        castingTime: '1 action',
        range: '30 feet',
        components: ['V', 'S', 'M'],
        duration: 'Concentration, up to 1 minute',
        description: 'Bless up to three creatures.'
      }
    ]
  }
};

export const spellcastingClasses = ['wizard', 'cleric', 'bard', 'druid', 'sorcerer', 'warlock'];

export function getSpellsByClass(className: string) {
  return spells[className as keyof typeof spells] || null;
}

export function isSpellcaster(className: string): boolean {
  return spellcastingClasses.includes(className);
}