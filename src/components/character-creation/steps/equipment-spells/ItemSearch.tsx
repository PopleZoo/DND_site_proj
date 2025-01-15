import React, { useState, useEffect } from 'react';
import { Search, Shield } from 'lucide-react';
import Papa from 'papaparse';

interface Item {
  Category: string;
  'Sub-Category': string;
  Item: string;
  Weight: string;
  Cost: string;
  Source: string;
}

export default function ItemSearch() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    fetch('/items.csv')
      .then(response => response.text())
      .then(csv => {
        const { data } = Papa.parse(csv, { header: true });
        setItems(data as Item[]);
      });
  }, []);

  const categories = Array.from(new Set(items.map(item => item.Category)));

  const filteredItems = items.filter(item => {
    const matchesSearch = item.Item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.Category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.Category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemSelect = (itemName: string) => {
    setSelectedItems(prev => {
      if (prev.includes(itemName)) {
        return prev.filter(name => name !== itemName);
      }
      return [...prev, itemName];
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-[#F09D51]" />
          <h2 className="text-lg font-semibold text-[#E0DFD5]">Equipment</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#E0DFD5]" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 bg-[#4a4f52] border border-[#313638] rounded-md text-[#E0DFD5] focus:ring-2 focus:ring-[#F09D51] focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            !selectedCategory
              ? 'bg-[#F09D51] text-[#313638]'
              : 'bg-[#4a4f52] text-[#E0DFD5] hover:bg-[#313638]'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-[#F09D51] text-[#313638]'
                : 'bg-[#4a4f52] text-[#E0DFD5] hover:bg-[#313638]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemSelect(item.Item)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedItems.includes(item.Item)
                ? 'bg-[#F09D51]/20 border-2 border-[#F09D51]'
                : 'bg-[#4a4f52] border-2 border-[#313638] hover:border-[#F09D51]/50'
            }`}
          >
            <h3 className="font-medium text-[#E0DFD5]">{item.Item}</h3>
            <div className="mt-1 text-sm text-[#E0DFD5]/70">
              <p>{item.Category} {item['Sub-Category'] && `- ${item['Sub-Category']}`}</p>
              <div className="flex justify-between mt-2">
                <span>Cost: {item.Cost}</span>
                <span>Weight: {item.Weight}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}