import { Spells } from '../../../types/character';

export function mapSpells(spellData: any[]): Spells {
  if (!spellData?.length) return { class: [], race: [], item: [] };

  return {
    class: mapClassSpells(spellData[0]?.spells || []),
    race: [],
    item: []
  };
}

function mapClassSpells(spells: any[]): any[] {
  return spells.map(spell => ({
    id: spell.definition.id,
    name: spell.definition.name,
    level: spell.definition.level,
    school: spell.definition.school,
    castingTime: spell.definition.activation?.activationTime,
    range: mapSpellRange(spell.definition.range),
    components: spell.definition.components,
    duration: mapSpellDuration(spell.definition.duration),
    description: spell.definition.description,
    prepared: spell.prepared,
    alwaysPrepared: spell.alwaysPrepared,
    ritual: spell.definition.ritual,
    concentration: spell.definition.concentration,
    attackType: spell.definition.attackType,
    saveDC: spell.definition.saveDcAbilityId,
    damage: mapSpellDamage(spell.definition.modifiers)
  }));
}

function mapSpellRange(range: any): any {
  if (!range) return null;
  return {
    origin: range.origin,
    value: range.rangeValue,
    aoeType: range.aoeType,
    aoeValue: range.aoeValue
  };
}

function mapSpellDuration(duration: any): any {
  if (!duration) return null;
  return {
    type: duration.durationType,
    value: duration.durationInterval,
    unit: duration.durationUnit
  };
}

function mapSpellDamage(modifiers: any[]): any {
  if (!modifiers?.length) return null;
  
  const damageModifiers = modifiers.filter(mod => mod.type === 'damage');
  if (!damageModifiers.length) return null;

  return damageModifiers.map(mod => ({
    diceString: mod.die?.diceString,
    type: mod.subType,
    scaling: mod.atHigherLevels
  }));
}