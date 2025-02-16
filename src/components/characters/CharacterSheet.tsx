import React, { useState } from 'react';
import { Character } from '../../types/character';
import { Shield, Heart, Dumbbell, Scroll, Wand2, X, Edit, Save, FolderOpen, Sword } from 'lucide-react';
import { FaDiceD20 } from "react-icons/fa";
import AbilityScores from './sheet/AbilityScores';
import AbilityChecks from './sheet/AbilityChecks';
import SpellList from './sheet/SpellList';
import InventoryList from './sheet/InventoryList';
import FeatureList from './sheet/FeatureList';

interface CharacterSheetProps {
  character: Character;
  onClose: () => void;
  onUpdate?: (character: Character) => void;
}

export default function CharacterSheet({ character, onClose, onUpdate }: CharacterSheetProps) {
  const [activeTab, setActiveTab] = useState('abilities');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing && onUpdate) {
      onUpdate(character);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-dark-dark text-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-light/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <FaDiceD20 className="h-10 w-10 text-accent" />
              <div>
                <h1 className="text-2xl font-black tracking-tight">{character.name}</h1>
                <p className="text-light/60">
                  Level {character.level} {character.race?.baseRaceName} {character.classes[0]?.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleEdit}
                className="p-2 text-light/60 hover:text-accent transition-colors rounded-lg"
              >
                {isEditing ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-light/60 hover:text-accent transition-colors rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Core Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="glass p-4 flex items-center space-x-3">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm text-light/60">Armor Class</p>
                <p className="text-2xl font-bold">{character.armorClass}</p>
              </div>
            </div>

            <div className="glass p-4 flex items-center space-x-3">
              <Heart className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm text-light/60">Hit Points</p>
                <p className="text-2xl font-bold">
                  {character.hitPoints.current}/{character.hitPoints.max}
                  {character.hitPoints.temp > 0 && (
                    <span className="text-sm text-accent ml-1">+{character.hitPoints.temp}</span>
                  )}
                </p>
              </div>
            </div>

            <div className="glass p-4 flex items-center space-x-3">
              <Dumbbell className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm text-light/60">Initiative</p>
                <p className="text-2xl font-bold">
                  {character.initiative >= 0 ? `+${character.initiative}` : character.initiative}
                </p>
              </div>
            </div>

            <div className="glass p-4 flex items-center space-x-3">
              <Sword className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm text-light/60">Speed</p>
                <p className="text-2xl font-bold">{character.speed} ft.</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1 mt-6">
            <button
              onClick={() => setActiveTab('abilities')}
              className={`tab ${activeTab === 'abilities' ? 'active' : ''}`}
            >
              <FaDiceD20 className="h-5 w-5" />
              <span>Abilities</span>
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
            >
              <Scroll className="h-5 w-5" />
              <span>Features</span>
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`tab ${activeTab === 'inventory' ? 'active' : ''}`}
            >
              <FolderOpen className="h-5 w-5" />
              <span>Inventory</span>
            </button>
            <button
              onClick={() => setActiveTab('spells')}
              className={`tab ${activeTab === 'spells' ? 'active' : ''}`}
            >
              <Wand2 className="h-5 w-5" />
              <span>Spells</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-4">
            <AbilityScores stats={character.stats} isEditing={isEditing} />
            <div className="mt-8">
              <AbilityChecks abilityChecks={character.abilityChecks || []} isEditing={isEditing} />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-8">
            {activeTab === 'abilities' && (
              <div className="space-y-8">
                {/* Actions */}
                <section className="glass p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Sword className="h-5 w-5 text-accent" />
                    <span>Actions</span>
                  </h2>
                  <div className="space-y-4">
                    {character.actions?.map((action) => (
                      <div key={action.id} className="p-4 bg-dark/50 rounded-lg">
                        <h3 className="font-semibold">{action.name}</h3>
                        <p className="text-light/60 mt-1">{action.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'features' && (
              <FeatureList
                features={character.classes?.flatMap((cls) => cls.features) || []}
                isEditing={isEditing}
              />
            )}

            {activeTab === 'inventory' && (
              <InventoryList
                inventory={character.inventory || []}
                isEditing={isEditing}
                onAddItem={(item) => onUpdate?.({ ...character, inventory: [...(character.inventory || []), item] })}
                onUpdateItem={(item) =>
                  onUpdate?.({
                    ...character,
                    inventory: (character.inventory || []).map((inv) => (inv.id === item.id ? item : inv)),
                  })
                }
              />
            )}

            {activeTab === 'spells' && (
              <SpellList
                classSpells={character.spells?.class || []}
                raceSpells={character.spells?.race || []}
                itemSpells={character.spells?.item || []}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}