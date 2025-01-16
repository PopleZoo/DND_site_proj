import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCharacterCreationStore } from '../../store/characterCreationStore';
import StepProgress from './navigation/StepProgress';
import HomebrewToggle from './common/HomebrewToggle';


import {
  SpeciesSelection,
  ClassSelection,
  BackgroundSelection,
  AbilityScores,
  EquipmentSpells,
  CharacterSummary
} from './steps';
import { Character } from '../../types/character';

export default function CharacterCreationWizard() {
  const navigate = useNavigate();
  const location = useLocation();
  const editCharacter = location.state?.editCharacter as Character | undefined;
  
  const { 
    currentStep, 
    resetCharacterCreation,
    setSelectedSpecies,
    setSelectedClass,
    setSelectedSubclass,
    setSelectedBackground,
    setAbilityScores,
    setSelectedEquipment,
    setSelectedSpells,
    setCharacterLevel
  } = useCharacterCreationStore();

  useEffect(() => {
    resetCharacterCreation();
    
    if (editCharacter) {
      // Load character data into store
      setSelectedSpecies(editCharacter.race.baseRaceName.toLowerCase());
      setSelectedClass(editCharacter.classes[0]?.id || '');
      setSelectedSubclass(editCharacter.classes[0]?.subclass?.id || '');
      setSelectedBackground(editCharacter.background?.name.toLowerCase() || '');
      setAbilityScores(
        editCharacter.stats.reduce((acc, stat) => ({
          ...acc,
          [stat.name.toLowerCase()]: stat.value
        }), {})
      );
      setCharacterLevel(editCharacter.level);

      // Map equipment and spells
      const equipment = editCharacter.inventory.reduce((acc, item) => ({
        ...acc,
        [item.id]: item
      }), {});
      setSelectedEquipment(equipment);

      const spells = editCharacter.spells.class.map(spell => spell.id);
      setSelectedSpells(spells);
    }
  }, [editCharacter]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SpeciesSelection />;
      case 2:
        return <ClassSelection />;
      case 3:
        return <BackgroundSelection />;
      case 4:
        return <AbilityScores />;
      case 5:
        return <EquipmentSpells isEditing={!!editCharacter} />;
      case 6:
        return <CharacterSummary isEditing={!!editCharacter} />;
      default:
        navigate('/characters');
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#313638] text-[#E0DFD5]">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[#F09D51] mb-2">
              {editCharacter ? 'Edit Character' : 'Create Your Character'}
            </h1>
            <p className="text-[#E0DFD5]">
              {editCharacter 
                ? 'Modify your existing character'
                : 'Follow the steps below to create your character'
              }
            </p>
          </div>

          <HomebrewToggle />
          <StepProgress />
          
          <div className="mt-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
