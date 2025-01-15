import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import ItemSearch from './ItemSearch';
import SpellSelection from '../spells/SpellSelection';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { Shield, Wand2 } from 'lucide-react';

export default function EquipmentSpells() {
  const {
    selectedClass,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const [activeTab, setActiveTab] = useState('equipment');

  const handleContinue = () => {
    completeStep(5);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Equipment & Spells"
        description="Choose your starting equipment and spells."
      />

      <div className="flex space-x-4 border-b border-[#4a4f52]">
        <button
          className={`px-4 py-2 font-medium flex items-center space-x-2 ${
            activeTab === 'equipment'
              ? 'text-[#F09D51] border-b-2 border-[#F09D51]'
              : 'text-[#E0DFD5] hover:text-[#F09D51]'
          }`}
          onClick={() => setActiveTab('equipment')}
        >
          <Shield className="w-5 h-5" />
          <span>Equipment</span>
        </button>
        <button
          className={`px-4 py-2 font-medium flex items-center space-x-2 ${
            activeTab === 'spells'
              ? 'text-[#F09D51] border-b-2 border-[#F09D51]'
              : 'text-[#E0DFD5] hover:text-[#F09D51]'
          }`}
          onClick={() => setActiveTab('spells')}
        >
          <Wand2 className="w-5 h-5" />
          <span>Spells</span>
        </button>
      </div>

      {activeTab === 'equipment' ? (
        <ItemSearch />
      ) : (
        <SpellSelection className={selectedClass || ''} />
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        nextLabel="Review Character"
      />
    </div>
  );
}