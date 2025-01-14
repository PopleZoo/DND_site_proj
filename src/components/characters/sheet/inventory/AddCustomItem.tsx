import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddCustomItemProps {
  onClose: () => void;
}

export default function AddCustomItem({ onClose }: AddCustomItemProps) {
  const [itemData, setItemData] = useState({
    name: '',
    type: '',
    description: '',
    weight: '',
    cost: '',
    damage: '',
    armorClass: '',
    properties: '',
    isHomebrew: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add item to inventory
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-light rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b border-dark">
          <h2 className="text-xl font-bold text-light">Add Custom Item</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-light" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Name
              </label>
              <input
                type="text"
                value={itemData.name}
                onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Type
              </label>
              <input
                type="text"
                value={itemData.type}
                onChange={(e) => setItemData({ ...itemData, type: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-light mb-1">
              Description
            </label>
            <textarea
              value={itemData.description}
              onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
              className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Weight
              </label>
              <input
                type="text"
                value={itemData.weight}
                onChange={(e) => setItemData({ ...itemData, weight: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                placeholder="e.g., 2 lb."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Cost
              </label>
              <input
                type="text"
                value={itemData.cost}
                onChange={(e) => setItemData({ ...itemData, cost: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                placeholder="e.g., 10 GP"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Damage
              </label>
              <input
                type="text"
                value={itemData.damage}
                onChange={(e) => setItemData({ ...itemData, damage: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                placeholder="e.g., 1d8 slashing"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light mb-1">
                Armor Class
              </label>
              <input
                type="text"
                value={itemData.armorClass}
                onChange={(e) => setItemData({ ...itemData, armorClass: e.target.value })}
                className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
                placeholder="e.g., 14"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-light mb-1">
              Properties
            </label>
            <input
              type="text"
              value={itemData.properties}
              onChange={(e) => setItemData({ ...itemData, properties: e.target.value })}
              className="w-full px-3 py-2 bg-dark text-light border border-dark rounded"
              placeholder="e.g., Light, Finesse, Thrown (20/60)"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-dark text-light rounded hover:bg-dark/80 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-dark rounded hover:bg-primary-dark transition-colors"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}