import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function CharacterCreationWizard() {
  const navigate = useNavigate();
  const { currentStep, resetCharacterCreation } = useCharacterCreationStore();

  useEffect(() => {
    resetCharacterCreation();
  }, [resetCharacterCreation]);

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
        return <EquipmentSpells />;
      case 6:
        return <CharacterSummary />;
      default:
        navigate('/characters');
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">Create Your Character</h1>
            <p className="text-gray-600">Follow the steps below to create your character</p>
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