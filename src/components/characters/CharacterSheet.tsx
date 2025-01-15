import React, { useState } from 'react';
import { Character, Inventory } from '../../types/character';
import { useNavigate } from 'react-router-dom';
import { Shield, Heart, Dumbbell, Book, Scroll, Wand2, X, Edit, Save } from 'lucide-react';
import AbilityScores from './sheet/AbilityScores';
import SpellList from './sheet/SpellList';
import InventoryList from './sheet/InventoryList';
import FeatureList from './sheet/FeatureList';

interface CharacterSheetProps {
  character: Character;
  onClose: () => void;
  onUpdate?: (character: Character) => void;
}

export default function CharacterSheet({ character, onClose, onUpdate }: CharacterSheetProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('stats');
  const [isEditing, setIsEditing] = useState(false);
  const classFeatures = Array.isArray(character.classes)
    ? character.classes.flatMap(cls => cls.features || [])
    : [];

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      if (onUpdate) {
        onUpdate(character);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleUpdateInventory = (updatedItem: Inventory) => {
    if (!onUpdate) return;

    const updatedInventory = character.inventory.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    );

    onUpdate({
      ...character,
      inventory: updatedInventory
    });
  };

  const handleAddInventoryItem = (newItem: Inventory) => {
    if (!onUpdate) return;

    onUpdate({
      ...character,
      inventory: [...character.inventory, newItem]
    });
  };

  const handleEditInCreator = () => {
    navigate('/create-character', { state: { editCharacter: character } });
  };

  return (
    <div className="h-full flex flex-col bg-dark">
      {/* Header */}
      <div className="bg-dark-light border-b border-dark p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-light">{character.name}</h1>
            <p className="text-light-darker">
              Level {character.level} {character.race?.baseRaceName} {character.classes?.[0]?.name}
              {character.classes?.[0]?.subclass?.name && ` (${character.classes[0].subclass.name})`}
            </p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={handleEdit}
              className="p-2 hover:bg-dark rounded-full transition-colors text-light hover:text-primary"
            >
              {isEditing ? <Save className="w-6 h-6" /> : <Edit className="w-6 h-6" />}
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-dark rounded-full transition-colors text-light hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Core Stats */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <div className="text-light-darker text-sm">Armor Class</div>
              <div className="text-2xl font-bold text-light">{character.armorClass}</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8 text-accent" />
            <div>
              <div className="text-light-darker text-sm">Hit Points</div>
              <div className="text-2xl font-bold text-light">
                {character.hitPoints.current}/{character.hitPoints.max}
                {character.hitPoints.temp > 0 && <span className="text-sm ml-1">(+{character.hitPoints.temp})</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Dumbbell className="w-8 h-8 text-primary" />
            <div>
              <div className="text-light-darker text-sm">Initiative</div>
              <div className="text-2xl font-bold text-light">
                {character.initiative >= 0 ? `+${character.initiative}` : character.initiative}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-dark-light border-b border-dark">
        <div className="flex space-x-1">
          {[
            { id: 'stats', name: 'Abilities', icon: Book },
            { id: 'features', name: 'Features', icon: Scroll },
            { id: 'inventory', name: 'Inventory', icon: Shield },
            { id: 'spells', name: 'Spells', icon: Wand2 }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-light-darker hover:text-primary'
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
      <div className="flex-1 overflow-y-auto p-6 bg-dark">
        {activeTab === 'stats' && (
          <AbilityScores stats={character.stats} isEditing={isEditing} />
        )}
        {activeTab === 'features' && (
          <FeatureList features={classFeatures} isEditing={isEditing} />
        )}
        {activeTab === 'inventory' && (
          <InventoryList 
            inventory={character.inventory} 
            isEditing={isEditing}
            onAddItem={handleAddInventoryItem}
            onUpdateItem={handleUpdateInventory}
          />
        )}
        {activeTab === 'spells' && (
          <SpellList
            classSpells={character.spells.class}
            raceSpells={character.spells.race}
            itemSpells={character.spells.item}
            isEditing={isEditing}
          />
        )}
      </div>

      {/* Edit in Creator Button */}
      {isEditing && (
        <div className="p-4 bg-dark-light border-t border-dark">
          <button
            onClick={handleEditInCreator}
            className="w-full bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md transition-colors"
          >
            Edit in Character Creator
          </button>
        </div>
      )}
    </div>
  );
}