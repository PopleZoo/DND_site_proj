import React, { useState, useEffect } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { Search, Book } from 'lucide-react';
import SpellCard from './SpellCard';
import Papa from 'papaparse';

interface Spell {
  'Spell Name': string;
  Level: string;
  School: string;
  'Casting Time': string;
  Range: string;
  Components: string;
  Classes: string;
}

export default function SpellSelection({ className }: { className: string }) {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>('0');
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedSpells, setSelectedSpells } = useCharacterCreationStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/spellList.csv')
      .then(response => response.text())
      .then(csv => {
        const { data } = Papa.parse(csv, { header: true });
        setSpells(data as Spell[]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading spells:', error);
        setIsLoading(false);
      });
  }, []);

  const filteredSpells = spells.filter(spell => {
    if (!spell.Classes || !spell['Spell Name'] || !spell.School) return false;
    
    const matchesClass = spell.Classes.toLowerCase().includes(className.toLowerCase());
    const matchesLevel = spell.Level === selectedLevel;
    const matchesSearch = spell['Spell Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spell.School.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesLevel && matchesSearch;
  });

  const handleSpellSelect = (spellName: string) => {
    setSelectedSpells(prev => {
      if (prev.includes(spellName)) {
        return prev.filter(name => name !== spellName);
      }
      return [...prev, spellName];
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-[#E0DFD5]">Loading spells...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book className="w-5 h-5 text-[#F09D51]" />
          <h2 className="text-lg font-semibold text-[#E0DFD5]">Available Spells</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#E0DFD5]" />
          <input
            type="text"
            placeholder="Search spells..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 bg-[#4a4f52] border border-[#313638] rounded-md text-[#E0DFD5] focus:ring-2 focus:ring-[#F09D51] focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto">
        {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedLevel === level
                ? 'bg-[#F09D51] text-[#313638]'
                : 'bg-[#4a4f52] text-[#E0DFD5] hover:bg-[#313638]'
            }`}
          >
            {level === '0' ? 'Cantrips' : `Level ${level}`}
          </button>
        ))}
      </div>

      {filteredSpells.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpells.map((spell) => (
            <SpellCard
              key={spell['Spell Name']}
              spell={spell}
              selected={selectedSpells.includes(spell['Spell Name'])}
              onSelect={() => handleSpellSelect(spell['Spell Name'])}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-[#E0DFD5]/70">
          No spells found for the selected criteria
        </div>
      )}
    </div>
  );
}