import React, { useState } from 'react';
import { Character, Stats } from '../../types/character';
import { useNavigate } from 'react-router-dom';
import { Shield, Heart, Dumbbell, Dices, Scroll, Wand2, X, Edit, Save } from 'lucide-react';
import AbilityScores from './sheet/AbilityScores';
import SpellList from './sheet/SpellList';
import InventoryList from './sheet/InventoryList';
import FeatureList from './sheet/FeatureList';

interface CharacterSheetProps {
  character: Character;
  onClose: () => void;
  onUpdate?: (character: Character) => void;
}

const diceSides = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
  d100: 100,
};

export default function CharacterSheet({ character, onClose, onUpdate }: CharacterSheetProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('abilities');
  const [isEditing, setIsEditing] = useState(false);
  const [rollCount, setRollCount] = useState(1);
  const [dieType, setDieType] = useState<'d4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'>('d20');
  const [modifier, setModifier] = useState(0);
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isRollOpen, setIsRollOpen] = useState(false); // State to control the collapsible dice roll section

  const handleEdit = () => {
    if (isEditing && onUpdate) {
      onUpdate(character);
    }
    setIsEditing(!isEditing);
  };

  const stats: Stats[] = character?.stats || []; // Ensure stats is an array
  const actions = character?.actions || []; // Actions to be included in abilities tab
  const bonusActions = character?.bonusActions || [];
  const reactions = character?.reactions || [];

  // Roll Dice function
  const rollDice = () => {
    const sides = diceSides[dieType];
    const roll = Array.from({ length: rollCount }).map(() =>
      Math.floor(Math.random() * sides) + 1
    );
    const result = roll.reduce((sum, val) => sum + val, 0) + modifier;
    setRollResult(result);
  };

  return (
    <div className="h-full flex flex-col bg-dark text-light relative p-6">
      {/* Header */}
      <div className="bg-dark-light border-b border-dark p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold">{character?.name || 'Unnamed Character'}</h1>
              <p className="text-light-darker">
                Level {character?.level || 1} {character?.race?.baseRaceName || 'Unknown Race'}{' '}
                {character?.classes?.map((cls) => cls.name).join(', ') || 'Unknown Classes'}
              </p>
            </div>
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

      {/* Navigation Tabs */}
      <div className="bg-dark-light border-b border-dark">
        <div className="flex space-x-1">
          {[
            { id: 'abilities', name: 'Abilities', icon: Dices },
            { id: 'features', name: 'Features', icon: Scroll },
            { id: 'inventory', name: 'Inventory', icon: Shield },
            { id: 'spells', name: 'Spells', icon: Wand2 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 flex items-center space-x-2 transition-colors ${
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

      {/* Content Section */}
      <div className="flex-1 overflow-y-auto p-4 bg-dark">
        {activeTab === 'abilities' && (
          <>
            <AbilityScores stats={stats} isEditing={isEditing} />

            {/* Ability Checks */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Ability Checks</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat: Stats) => (
                  <div key={stat.id} className="flex items-center justify-between text-light">
                    <div className="font-semibold capitalize">{stat.name}</div>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {stat.modifier >= 0 ? `+${stat.modifier}` : stat.modifier}
                      </div>
                      <div className="text-sm text-light-darker">(Modifier)</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Actions</h3>
              <div className="space-y-4">
                {actions.map((action) => (
                  <div key={action.id} className="text-light">
                    <div className="font-semibold">{action.name}</div>
                    <p>{action.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Other Tabs */}
        {activeTab === 'features' && (
          <FeatureList features={character?.classes?.flatMap((cls) => cls.features) || []} isEditing={isEditing} />
        )}
        {activeTab === 'inventory' && (
          <InventoryList
            inventory={character?.inventory || []}
            isEditing={isEditing}
            onAddItem={(item) => onUpdate?.({ ...character, inventory: [...(character?.inventory || []), item] })}
            onUpdateItem={(item) =>
              onUpdate?.({
                ...character,
                inventory: (character?.inventory || []).map((inv) => (inv.id === item.id ? item : inv)),
              })
            }
          />
        )}
        {activeTab === 'spells' && (
          <SpellList
            classSpells={character?.spells?.class || []}
            raceSpells={character?.spells?.race || []}
            itemSpells={character?.spells?.item || []}
          />
        )}
      </div>

      {/* Dice Roller Section */}
<div className="fixed bottom-4 left-4 p-4 space-y-4 z-50">
  {/* Roll Dice Button */}
  {isRollOpen && (
    <button
    onClick={rollDice}
    className="bg-primary text-dark font-medium py-2 px-4 rounded-md transition-colors flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-accent"
  >
    <Dices className="w-5 h-5" />
    <span>Roll Dice</span>
  
    {/* Dice Count Input */}
    <input
      type="number"
      value={rollCount}
      onChange={(e) => setRollCount(Math.max(1, parseInt(e.target.value)))}
      placeholder="Count"
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20 focus:ring-2 focus:ring-accent focus:outline-none"
    />
  
    {/* Dice Type Select */}
    <select
      value={dieType}
      onChange={(e) => setDieType(e.target.value as 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100')}
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20 focus:ring-2 focus:ring-accent focus:accent"
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
      className="p-2 border border-dark rounded-md bg-primary text-dark w-20 focus:ring-2 focus:ring-accent focus:outline-none"
    />
  
    <span>mod =</span>
  
    {/* Roll Result */}
    {rollResult && (
      <div className="bg-primary text-dark font-medium py-2 px-0 rounded-md w-auto flex items-center space-x-4">
        <span>Result: {rollResult}</span>
      </div>
    )}
  </button>
  
  )}

  {/* Collapsible Dice Roll Section Button */}
  <button
    onClick={() => setIsRollOpen(!isRollOpen)}
    className="bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md transition-colors flex items-center space-x-4"
  >
    {isRollOpen ? <X className="w-5 h-5" /> : <Dices className="w-5 h-5" />}
  </button>
</div>

</div>
  );
}
