import { Stats } from '../../../types/character';

export function mapStats(statsData: any[]): Stats[] {
  return statsData.map(stat => ({
    id: stat.id,
    value: stat.value,
    name: getStatName(stat.id),
    modifier: calculateModifier(stat.value),
    bonusValue: stat.bonusValue || null,
    overrideValue: stat.overrideValue || null
  }));
}

function calculateModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function getStatName(id: number): string {
  const statNames: Record<number, string> = {
    1: 'Strength',
    2: 'Dexterity',
    3: 'Constitution',
    4: 'Intelligence',
    5: 'Wisdom',
    6: 'Charisma'
  };
  return statNames[id] || 'Unknown';
}