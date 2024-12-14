import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import Button from '../../ui/Button';
import { ArrowLeft, ArrowRight, Shield, Wand } from 'lucide-react';
import { getStartingEquipment, getAvailableSpells } from '../../../data/equipment';

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
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Equipment & Spells</h2>
        <p className="text-gray-600">
          Choose your starting equipment{hasSpells ? ' and spells' : ''}.
        </p>
      </div>

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
              <Wand className="w-5 h-5" />
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
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Available Spells</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Spells Selected:</span>
              <span className="font-medium">0/3</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSpells.map((spell) => (
              <label
                key={spell.id}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg border-2 border-gray-100 hover:border-purple-200 cursor-pointer"
              >
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-medium">{spell.name}</p>
                  <p className="text-sm text-gray-500">{spell.level} Level</p>
                  <p className="text-sm text-gray-600 mt-1">{spell.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button
          onClick={previousStep}
          variant="outline"
          icon={ArrowLeft}
        >
          Back to Ability Scores
        </Button>
        <Button
          onClick={handleContinue}
          icon={ArrowRight}
        >
          Review Character
        </Button>
      </div>
    </div>
  );
}