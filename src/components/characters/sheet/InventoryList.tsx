import React, { useState } from 'react';
import { Inventory } from '../../../types/character';
import { Plus, Search, Tag, DollarSign, Shield, Sparkles } from 'lucide-react';
import ItemSearch from './inventory/ItemSearch';
import AddCustomItem from './inventory/AddCustomItem';

interface InventoryListProps {
  inventory: Inventory[];
  isEditing?: boolean;
  onAddItem?: (item: Inventory) => void;
  onUpdateItem?: (item: Inventory) => void;
}

export default function InventoryList({ 
  inventory = [], 
  isEditing = false, 
  onAddItem,
  onUpdateItem 
}: InventoryListProps) {
  const [showItemSearch, setShowItemSearch] = useState(false);
  const [showCustomItemForm, setShowCustomItemForm] = useState(false);

  const handleAddItem = (item: Inventory) => {
    if (onAddItem) {
      onAddItem(item);
    }
  };

  const handleToggleEquipped = (item: Inventory) => {
    if (onUpdateItem) {
      onUpdateItem({
        ...item,
        equipped: !item.equipped
      });
    }
  };

  const handleToggleAttuned = (item: Inventory) => {
    if (onUpdateItem && item.definition?.requiresAttunement) {
      onUpdateItem({
        ...item,
        isAttuned: !item.isAttuned
      });
    }
  };

  if (!inventory.length && !isEditing) {
    return (
      <div className="text-center py-8 text-light-darker">
        No items in inventory
      </div>
    );
  }

  const equippedItems = inventory.filter(item => item.equipped);
  const unequippedItems = inventory.filter(item => !item.equipped);

  const renderItem = (item: Inventory) => (
    <div key={item.id} className="bg-dark-light p-4 rounded-lg border border-dark">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-light">{item.name}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <Tag className="w-4 h-4 text-light-darker" />
            <p className="text-sm text-light-darker">{item.type}</p>
            {item.definition?.cost && (
              <>
                <DollarSign className="w-4 h-4 text-primary ml-2" />
                <span className="text-sm text-primary">{item.definition.cost} GP</span>
              </>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          {isEditing ? (
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleEquipped(item)}
                className={`px-2 py-1 rounded flex items-center space-x-1 ${
                  item.equipped 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-dark text-light-darker hover:text-primary'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span className="text-xs">Equipped</span>
              </button>
              {item.definition?.requiresAttunement && (
                <button
                  onClick={() => handleToggleAttuned(item)}
                  className={`px-2 py-1 rounded flex items-center space-x-1 ${
                    item.isAttuned 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-dark text-light-darker hover:text-accent'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs">Attuned</span>
                </button>
              )}
            </div>
          ) : (
            <>
              {item.equipped && (
                <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                  Equipped
                </span>
              )}
              {item.isHomebrew && (
                <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                  Homebrew
                </span>
              )}
              {item.isAttuned && (
                <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                  Attuned
                </span>
              )}
            </>
          )}
        </div>
      </div>
      
      {isEditing ? (
        <textarea
          defaultValue={item.definition?.description || ''}
          className="w-full bg-dark text-light border border-dark rounded p-2 mt-2"
          rows={2}
        />
      ) : (
        item.definition?.description && (
          <p className="text-sm text-light-darker mt-2">{item.definition.description}</p>
        )
      )}

      <div className="mt-2 text-sm">
        {item.definition?.damage && (
          <p className="text-primary">
            Damage: {item.definition.damage.diceString}
          </p>
        )}
        {item.definition?.armorClass && (
          <p className="text-primary">AC: {item.definition.armorClass}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {isEditing && (
        <div className="flex space-x-4">
          <button
            onClick={() => setShowItemSearch(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-dark rounded hover:bg-primary-dark transition-colors"
          >
            <Search className="w-5 h-5" />
            <span>Search Items</span>
          </button>
          <button
            onClick={() => setShowCustomItemForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-dark-light text-light rounded hover:bg-dark transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Custom Item</span>
          </button>
        </div>
      )}

      {equippedItems.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-light">Equipped</h3>
          <div className="grid gap-4">
            {equippedItems.map(renderItem)}
          </div>
        </div>
      )}

      {unequippedItems.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-light">Inventory</h3>
          <div className="grid gap-4">
            {unequippedItems.map(renderItem)}
          </div>
        </div>
      )}

      {showItemSearch && (
        <ItemSearch 
          onClose={() => setShowItemSearch(false)} 
          onAddItem={handleAddItem}
        />
      )}

      {showCustomItemForm && (
        <AddCustomItem onClose={() => setShowCustomItemForm(false)} />
      )}
    </div>
  );
}