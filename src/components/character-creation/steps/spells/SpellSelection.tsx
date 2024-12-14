import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { spellLists } from '../../../../data/spells/spellLists';
import SpellLevelSelector from './SpellLevelSelector';
import SpellList from './SpellList';
import { Book, Search } from 'lucide-react';

interface SpellSelectionProps {
  className: string;
}

export default function SpellSelection({ className }: SpellSelectionProps) {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedSpells, setSelectedSpells } = useCharacterCreationStore();

  const spellList = spellLists[className];
  if (!spellList) return null;

  const availableLevels = [0, ...Object.keys(spellList.spells).map(Number)];
  
  const getSpellsForLevel = (level: number) => {
    if (level === 0) return spellList.cantrips;
    return spellList.spells[level] || [];
  };

  const currentLevelSpells = getSpellsForLevel(selectedLevel).filter(spell =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spell.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSpellSelect = (spellId: string) => {
    setSelectedSpells(prev => {
      if (prev.includes(spellId)) {
        return prev.filter(id => id !== spellId);
      }
      return [...prev, spellId];
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book className="w-5 h-5 text-purple-600" />
          <div>
            <h2 className="text-lg font-semibold">Spells</h2>
            <p className="text-sm text-gray-600">
              Spellcasting Ability: {spellList.spellcastingAbility}
            </p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search spells..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <SpellLevelSelector
        availableLevels={availableLevels}
        selectedLevel={selectedLevel}
        onLevelSelect={setSelectedLevel}
      />

      <SpellList
        spells={currentLevelSpells}
        selectedSpells={selectedSpells}
        onSpellSelect={handleSpellSelect}
        maxSelections={selectedLevel === 0 ? 3 : undefined}
      />
    </div>
  );
}