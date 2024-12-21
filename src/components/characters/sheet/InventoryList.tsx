import React from 'react';
import { Inventory } from '../../../types/character';

interface InventoryListProps {
  inventory: Inventory[];
}

export default function InventoryList({ inventory = [] }: InventoryListProps) {
  if (!inventory.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No items in inventory
      </div>
    );
  }

  const equippedItems = inventory.filter(item => item.equipped);
  const unequippedItems = inventory.filter(item => !item.equipped);

  const renderItem = (item: Inventory) => (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.type}</p>
        </div>
        <div className="flex space-x-2">
          {item.equipped && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">
              Equipped
            </span>
          )}
          {item.isHomebrew && (
            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">
              Homebrew
            </span>
          )}
          {item.isAttuned && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
              Attuned
            </span>
          )}
        </div>
      </div>
      {item.definition?.description && (
        <p className="text-sm text-gray-600 mt-2">{item.definition.description}</p>
      )}
      <div className="mt-2 text-sm">
        {item.definition?.damage && (
          <p className="text-purple-600">
            Damage: {item.definition.damage.diceString} {item.definition.damage.type}
          </p>
        )}
        {item.definition?.armorClass && (
          <p className="text-purple-600">AC: {item.definition.armorClass}</p>
        )}
        {item.definition?.properties?.length > 0 && (
          <p className="text-gray-500">
            Properties: {item.definition.properties.join(', ')}
          </p>
        )}
        {item.definition?.requiresAttunement && (
          <p className="text-gray-500">Requires Attunement</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {equippedItems.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-900">Equipped</h3>
          <div className="grid gap-4">
            {equippedItems.map(renderItem)}
          </div>
        </div>
      )}

      {unequippedItems.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-900">Inventory</h3>
          <div className="grid gap-4">
            {unequippedItems.map(renderItem)}
          </div>
        </div>
      )}
    </div>
  );
}