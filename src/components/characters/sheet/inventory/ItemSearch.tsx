import React, { useState, useEffect } from 'react';
import { Search, X, Filter } from 'lucide-react';

interface ItemSearchProps {
  onClose: () => void;
  onAddItem?: (item: any) => void;
}

interface Item {
  Category: string;
  'Sub-Category': string;
  Item: string;
  Weight: string;
  Cost: string;
  Source: string;
}

export default function ItemSearch({ onClose, onAddItem }: ItemSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Load and parse CSV data
    fetch('/items.csv')
      .then(response => response.text())
      .then(csvText => {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        const parsedItems = lines.slice(1).map(line => {
          const values = line.split(',');
          const item: any = {};
          headers.forEach((header, index) => {
            item[header.trim()] = values[index]?.trim() || '';
          });
          return item;
        });

        setItems(parsedItems);
      })
      .catch(error => console.error('Error loading items:', error));
  }, []);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.Item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(item => item.Category === selectedCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, items]);

  const handleAddItem = (item: Item) => {
    if (onAddItem) {
      const inventoryItem = {
        id: crypto.randomUUID(),
        name: item.Item,
        type: item.Category,
        equipped: false,
        quantity: 1,
        weight: parseFloat(item.Weight) || 0,
        definition: {
          description: `${item.Category} - ${item['Sub-Category']}`,
          cost: parseFloat(item.Cost) || 0,
          properties: [],
          rarity: 'Common',
          magic: false,
          requiresAttunement: false
        },
        isAttuned: false,
        isHomebrew: false
      };
      onAddItem(inventoryItem);
    }
    onClose();
  };

  const categories = Array.from(new Set(items.map(item => item.Category)));

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-light rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-dark">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-light">Search Items</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-dark rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-light" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-darker" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search items..."
                className="w-full pl-10 pr-4 py-2 bg-dark text-light border border-dark rounded"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-dark rounded transition-colors"
            >
              <Filter className="w-5 h-5 text-light" />
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-3 py-1 rounded text-sm ${
                  !selectedCategory
                    ? 'bg-primary text-dark'
                    : 'bg-dark text-light hover:bg-dark/80'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-dark'
                      : 'bg-dark text-light hover:bg-dark/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="overflow-y-auto max-h-[calc(80vh-200px)] p-4">
          <div className="grid gap-4">
            {filteredItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleAddItem(item)}
                className="bg-dark p-4 rounded-lg hover:bg-dark/80 cursor-pointer transition-colors text-left"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-light">{item.Item}</h3>
                    <p className="text-sm text-light-darker">{item.Category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-medium">{item.Cost}</p>
                    <p className="text-sm text-light-darker">Weight: {item.Weight}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}