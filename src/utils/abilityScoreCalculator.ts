export const POINT_BUY_COSTS: Record<number, number> = {
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

export function calculateModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function rollAbilityScore(): number {
  // Roll 4d6, drop lowest
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  return rolls.sort((a, b) => b - a).slice(0, 3).reduce((sum, roll) => sum + roll, 0);
}

export function calculatePointBuyCost(scores: Record<string, number>): number {
  return Object.values(scores).reduce((total, score) => total + (POINT_BUY_COSTS[score] || 0), 0);
}

export function isValidPointBuy(scores: Record<string, number>): boolean {
  const totalCost = calculatePointBuyCost(scores);
  return totalCost <= 27;
}