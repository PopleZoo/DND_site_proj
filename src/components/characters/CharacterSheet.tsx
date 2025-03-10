import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useCharacterStore } from '../../store/characterStore';
import { Character } from '../../types/character';
import DiceRoller from './DiceRoller';
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
  const [showDiceRoller, setShowDiceRoller] = useState(false);
  const navigate = useNavigate();

  // Get user authentication data
  const { user, isAuthenticated, openAuthModal } = useAuthStore();
  const { userCharacters, addCharacter } = useCharacterStore();

  // Check if the user owns this character
  const isOwner = (userCharacters && Array.isArray(userCharacters)) ? userCharacters.some(c => c.id === character.id) : false;

  useEffect(() => {
    if (isAuthenticated && !isOwner && character) {
      // If the user is logged in but doesn't own the character, add it to their collection
      addCharacter(character);
      navigate('/my-characters'); // Redirect to "My Characters" page
    }
  }, [isAuthenticated, isOwner, character, addCharacter, navigate]);

  const handleEdit = () => {
    if (!isAuthenticated) {
      openAuthModal(); // Prompt sign-up/sign-in modal
      return;
    }

    if (isEditing && onUpdate) {
      onUpdate(character);
    }
    setIsEditing(!isEditing);
  };

  return (
<div className="character-sheet-container min-h-screen min-w-screen bg-gradient-to-br from-dark to-dark-dark text-light pt-10">
{/* Header */}
      <header className="character-sheet-header top-50 z-50 bg-dark-light/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <FaDiceD20 className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-xl font-black tracking-tight">{character.name}</h1>
                <p className="text-sm text-light/60">
                  Level {character.level} {character.race?.baseRaceName} {character.classes[0]?.name}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {isOwner && (
                <button
                  onClick={handleEdit}
                  className="p-2 text-light/60 hover:text-accent transition-colors rounded-lg"
                >
                  {isEditing ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                </button>
              )}
              <button
                onClick={() => setShowDiceRoller(true)}
                className="p-2 text-light/60 hover:text-accent transition-colors rounded-lg"
              >
                <FaDiceD20 className="h-5 w-5" />
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
          <div className="grid grid-cols-4 gap-2 mt-3">
            <div className="glass p-2 flex items-center space-x-2">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-4">
            <AbilityChecks abilityChecks={character.abilityChecks || []} isEditing={isEditing} />
          </div>

          {/* Main Content Area */}
          <div className="col-span-8">
            {activeTab === 'abilities' && <AbilityScores stats={character.stats} isEditing={isEditing} />}
            {activeTab === 'features' && <FeatureList features={character.classes.flatMap(cls => cls.features).filter((feature): feature is ClassFeature => feature !== undefined) || []} isEditing={isEditing} />}
            {activeTab === 'inventory' && <InventoryList inventory={character.inventory || []} isEditing={isEditing} />}
            {activeTab === 'spells' && <SpellList classSpells={character.spells.class || []} raceSpells={character.spells.race || []} itemSpells={character.spells.item || []} />}
          </div>
        </div>
      </main>

      {showDiceRoller && (
        <div className="dice-roller-overlay fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
          <DiceRoller onClose={() => setShowDiceRoller(false)} />
        </div>
      )}
    </div>
  );
}
