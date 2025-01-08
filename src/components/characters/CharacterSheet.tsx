import React, { useState } from 'react';
import { Character, Stats } from '../../types/character';
import { CharacterStorage } from '../../utils/characterStorage';
import { Shield, Heart, Dumbbell, Book, Scroll, Wand2, X } from 'lucide-react';
import AbilityScores from './sheet/AbilityScores';
import SpellList from './sheet/SpellList';
import InventoryList from './sheet/InventoryList';
import FeatureList from './sheet/FeatureList';

interface CharacterSheetProps {
  character: Character;
  onClose: () => void;
}

export default function CharacterSheet({ character, onClose }: CharacterSheetProps) {
  const [activeTab, setActiveTab] = useState('stats');

  const hitPoints = {
    current: character.hitPoints?.current ?? 0,
    max: character.hitPoints?.max ?? 0,
    temp: character.hitPoints?.temp ?? 0
  };

  const displayInitiative = character.initiative ?? 0;
  const displayArmorClass = character.armorClass ?? 10;

  // Safely gather all class features, ensuring we only access them if they exist
  const classFeatures = Array.isArray(character.classes)
  ? character.classes.flatMap(cls => cls.features || [])// incorreclty flagged as error
  : []; 
  const inventory = character.inventory ?? [];
  console.log('Class spells:', character);

  
  const [stats, setStats] = useState(character.stats ?? []);

  const handleSaveStats = (updatedStats: Stats[]) => {
    setStats(updatedStats);
    
    // Create a deep copy of the character
    const updatedCharacter = JSON.parse(JSON.stringify(character));
    updatedCharacter.stats = updatedStats;
    
    // Save the updated character
    CharacterStorage.saveCharacter(updatedCharacter);
  };

  const tabs = [
    { id: 'stats', name: 'Abilities', icon: Book, component: <AbilityScores stats={stats} onSave={handleSaveStats} /> },
    { id: 'features', name: 'Features', icon: Scroll, component: <FeatureList features={classFeatures} /> },
    { id: 'inventory', name: 'Inventory', icon: Shield, component: <InventoryList inventory={inventory} /> },
    { id: 'spells', name: 'Spells', icon: Wand2, component: <SpellList
      classSpells={character.spells.class}
      raceSpells={character.spells.race}
      itemSpells={character.spells.item}
    />
     }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-purple-900 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{character.name}</h1>
            <p className="text-purple-200">
              Level {character.level} {character.race?.baseRaceName} {character.classes?.[0]?.name}
              {character.classes?.[0]?.subclass?.name && ` (${character.classes[0].subclass.name})`}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-purple-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Core Stats */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-purple-300" />
            <div>
              <div className="text-purple-200 text-sm">Armor Class</div>
              <div className="text-2xl font-bold">{displayArmorClass}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-red-400" />
            <div>
              <div className="text-purple-200 text-sm">Hit Points</div>
              <div className="text-2xl font-bold">
                {hitPoints.current}/{hitPoints.max}
                {hitPoints.temp > 0 && <span className="text-sm ml-1">(+{hitPoints.temp})</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Dumbbell className="w-8 h-8 text-purple-300" />
            <div>
              <div className="text-purple-200 text-sm">Initiative</div>
              <div className="text-2xl font-bold">
                {displayInitiative >= 0 ? `+${displayInitiative}` : displayInitiative}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="flex space-x-1">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 flex items-center space-x-2 transition-colors ${activeTab === tab.id
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600 hover:text-purple-600'}`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}
