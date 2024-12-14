import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { getStartingEquipment, getAvailableSpells } from '../../../../data/equipment';
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
  const startingEquipment = getStartingEquipment(selectedClass || '');
  const availableSpells = getAvailableSpells(selectedClass || '');
  const hasSpells = availableSpells.length > 0;

  const handleContinue = () => {
    completeStep(5);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Equipment & Spells"
        description={`Choose your starting equipment${hasSpells ? ' and spells' : ''}.`}
      />

      {hasSpells && (
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'equipment'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('equipment')}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Equipment</span>
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'spells'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('spells')}
          >
            <div className="flex items-center space-x-2">
              <Wand2 className="w-5 h-5" />
              <span>Spells</span>
            </div>
          </button>
        </div>
      )}

      {activeTab === 'equipment' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {startingEquipment.map((choice, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Choice {index + 1}</h3>
              <div className="space-y-3">
                {choice.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="flex items-start space-x-3">
                    <input
                      type="radio"
                      name={`choice-${index}`}
                      className="mt-1"
                      defaultChecked={optionIndex === 0}
                    />
                    <div>
                      <p className="font-medium">{option.name}</p>
                      {option.description && (
                        <p className="text-sm text-gray-600">{option.description}</p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <SpellSelection className={selectedClass || ''} level={1} />
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        nextLabel="Review Character"
      />
    </div>
  );
}