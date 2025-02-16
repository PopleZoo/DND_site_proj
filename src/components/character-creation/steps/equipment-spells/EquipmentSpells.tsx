import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import ItemSearch from './ItemSearch';
import MagicItemSearch from './MagicItemSearch';
import SpellSelection from '../spells/SpellSelection';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { Shield, Wand2, Sparkles } from 'lucide-react';

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
        description="Choose your starting equipment, magic items, and spells."
      />

      <div className="flex space-x-1 border-b border-white/10">
        <button
          className={`tab ${activeTab === 'equipment' ? 'active' : ''}`}
          onClick={() => setActiveTab('equipment')}
        >
          <Shield className="h-5 w-5" />
          <span>Equipment</span>
        </button>
        <button
          className={`tab ${activeTab === 'magic-items' ? 'active' : ''}`}
          onClick={() => setActiveTab('magic-items')}
        >
          <Sparkles className="h-5 w-5" />
          <span>Magic Items</span>
        </button>
        <button
          className={`tab ${activeTab === 'spells' ? 'active' : ''}`}
          onClick={() => setActiveTab('spells')}
        >
          <Wand2 className="h-5 w-5" />
          <span>Spells</span>
        </button>
      </div>

      {activeTab === 'equipment' && <ItemSearch />}
      {activeTab === 'magic-items' && <MagicItemSearch />}
      {activeTab === 'spells' && <SpellSelection className={selectedClass || ''} />}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        nextLabel="Review Character"
      />
    </div>
  );
}