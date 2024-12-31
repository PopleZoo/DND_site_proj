import React, { useState, useEffect } from 'react';
import { Character, Stats } from '../../types/character';
import { Shield, Heart, Dumbbell, Book, Scroll, Wand2, X, Sword } from 'lucide-react';
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

  // Extract and safely handle values
  const hitPoints = {
    current: character.hitPoints.current,
    max: character.hitPoints.base,
    temp: character.hitPoints.temp
  };

  const displayInitiative = character.stats.bonus.dexterity ?? 0;
  const displayArmorClass = 10 + (character.stats.bonus.dexterity ?? 0);

  interface DisplayStat extends Stats {
    id: string;
    name: string;
    value: number;
    modifier: number;
  }

  // Convert stats to array format for display
  const statsArray: DisplayStat[] = Object.entries(character.stats.base).map(([name, value]) => ({
    base: character.stats.base,
    bonus: character.stats.bonus,
    override: character.stats.override,
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value: value,
    modifier: Math.floor((value - 10) / 2)
  }));

  const tabs = [
    { id: 'stats', name: 'Abilities', icon: Book, component: <AbilityScores stats={statsArray} /> },
    { id: 'features', name: 'Features', icon: Scroll, component: <FeatureList features={character.features ?? []} /> },
    { id: 'inventory', name: 'Inventory', icon: Shield, component: <InventoryList inventory={character.inventory ?? []} /> },
    { id: 'spells', name: 'Spells', icon: Wand2, component: <SpellList spells={character.spells ?? []} /> }
  ];

  useEffect(() => {
    if (!character) {
      console.warn('Character data is missing.');
    }
  }, [character]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-purple-900 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{character.name}</h1>
            <p className="text-purple-200">
              Level {character.classes.reduce((sum, cls) => sum + cls.level, 0)} 
              {character.race} 
              {character.classes.map(cls => cls.definition.name).join(' / ')}
              {character.classes[0]?.subclassDefinition?.name && ` (${character.classes[0].subclassDefinition.name})`}
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
                className={`px-6 py-3 flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
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

        {/* Features Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-purple-900 mb-4">Features & Abilities</h2>
          
          {character.features?.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Class Features</h3>
              <ul>
                {character.features.map((feature, index) => (
                  <li key={index} className="text-purple-700">
                    {feature.name}: {feature.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
