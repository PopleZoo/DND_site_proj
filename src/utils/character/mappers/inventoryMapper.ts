import { Inventory } from '../../../types/character';

export function mapInventory(inventoryData: any[]): Inventory[] {
  return inventoryData.map(item => ({
    id: item.id,
    name: item.definition.name,
    type: item.definition.type,
    equipped: item.equipped,
    quantity: item.quantity,
    weight: item.definition.weight,
    definition: {
      description: item.definition.description,
      armorClass: item.definition.armorClass,
      damage: mapDamage(item.definition.damage),
      properties: item.definition.properties,
      rarity: item.definition.rarity,
      magic: item.definition.magic,
      cost: item.definition.cost,
      requiresAttunement: item.definition.requiresAttunement
    },
    isAttuned: item.isAttuned,
    isHomebrew: item.definition.isHomebrew
  }));
}

function mapDamage(damage: any): any {
  if (!damage) return null;
  return {
    diceCount: damage.diceCount,
    diceValue: damage.diceValue,
    diceString: damage.diceString,
    type: damage.damageType
  };
}