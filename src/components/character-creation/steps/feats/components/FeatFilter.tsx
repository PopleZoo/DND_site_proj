import React from 'react';
import { Search } from 'lucide-react';

interface FeatFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function FeatFilter({ searchTerm, onSearchChange }: FeatFilterProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search feats..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-9 pr-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  );
}