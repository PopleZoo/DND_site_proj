import React, { useState } from 'react';
import { Character, Inventory } from '../../types/character';
import { useNavigate } from 'react-router-dom';
import { Shield, Heart, Dumbbell, Book, Scroll, Wand2, X, Edit, Save, Dice1 } from 'lucide-react';
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

  const [dieType, setDieType] = useState<'d4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'>('d20');
  const [rollCount, setRollCount] = useState<number>(1);
  const [modifier, setModifier] = useState<number>(0);
  const [rollResult, setRollResult] = useState<string>('');

  const diceSides = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100,
  };

  const rollDice = () => {
    let total = 0;
    let individualRolls: number[] = [];
    
    for (let i = 0; i < rollCount; i++) {
      const roll = Math.floor(Math.random() * diceSides[dieType as keyof typeof diceSides]) + 1;
      individualRolls.push(roll);
      total += roll;
    }

    // Apply the modifier
    total += modifier;

    // Format the result to show individual rolls and the modifier
    const resultText = `${individualRolls.join(' + ')} + ${modifier} = ${total}`;
    setRollResult(resultText);
  };

  // Flatten class features
  const classFeatures = Array.isArray(character.classes)
    ? character.classes.flatMap(cls => cls.features || [])
    : [];

  // Toggle edit mode
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

  // Update specific inventory item
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

  // Add new inventory item
  const handleAddInventoryItem = (newItem: Inventory) => {
    if (!onUpdate) return;

    onUpdate({
      ...character,
      inventory: [...character.inventory, newItem]
    });
  };

  // Navigate to character creator
  const handleEditInCreator = () => {
    navigate('/create-character', { state: { editCharacter: character } });
  };

  return (
    <div className="h-full flex flex-col bg-dark relative">
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
                className={`px-6 py-3 flex items-center space-x-2 transition-colors ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-light-darker hover:text-primary'}`}
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

      {/* Dice Roller Section */}
<div className="fixed bottom-4 left-4 p-4 space-y-4 z-50">
  <button
    onClick={rollDice}
    className="bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md transition-colors flex items-center space-x-4"
  >
    <Dice1 className="w-5 h-5" />
    <span>Roll Dice</span>

    {/* Dice Count Input */}
    <input
      type="number"
      value={rollCount}
      onChange={(e) => setRollCount(Math.max(1, parseInt(e.target.value)))}
      placeholder="Count"
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20"
    />

    {/* Dice Type Select */}
    <select
      value={dieType}
      onChange={(e) => setDieType(e.target.value as 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100')}
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20"
    >
      {Object.keys(diceSides).map((die) => (
        <option key={die} value={die}>
          {die}
        </option>
      ))}
    </select>

    <span>+</span>

    {/* Modifier Input */}
    <input
      type="number"
      value={modifier}
      onChange={(e) => setModifier(parseInt(e.target.value))}
      placeholder="Modifier"
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20"
    />

    <span>mod =</span>

    {/* Roll Result */}
    {rollResult && (
      <div className="bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-0 rounded-md transition-colors w-auto flex items-center space-x-4">
        <span>Result: {rollResult}</span>
      </div>
    )}
  </button>
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
