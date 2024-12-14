import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { species } from '../../../../data/species';
import { classes } from '../../../../data/classes';
import { backgrounds } from '../../../../data/backgrounds';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { User, Shield, Scroll, Dumbbell } from 'lucide-react';

export default function CharacterSummary() {
  const navigate = useNavigate();
  const {
    selectedSpecies,
    selectedClass,
    selectedBackground,
    abilityScores,
    previousStep,
  } = useCharacterCreationStore();

  const [characterName, setCharacterName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedSpeciesData = species.find(s => s.id === selectedSpecies);
  const selectedClassData = classes.find(c => c.id === selectedClass);
  const selectedBackgroundData = backgrounds.find(b => b.id === selectedBackground);

  const handleFinalize = async () => {
    if (!characterName) return;

    setIsSubmitting(true);
    try {
      // Create character object
      const character = {
        id: crypto.randomUUID(),
        name: characterName,
        species: selectedSpecies,
        class: selectedClass,
        background: selectedBackground,
        level: 1,
        abilityScores,
        isHomebrew: selectedSpeciesData?.isHomebrew || selectedClassData?.isHomebrew || selectedBackgroundData?.isHomebrew || false,
      };

      // Save character to local storage
      const existingCharacters = JSON.parse(localStorage.getItem('characters') || '[]');
      localStorage.setItem('characters', JSON.stringify([...existingCharacters, character]));

      // Navigate back to characters page
      navigate('/characters');
    } catch (error) {
      console.error('Failed to save character:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Review Your Character"
        description="Review your choices and provide a name for your character."
      />

      <div className="bg-white p-6 rounded-lg border-2 border-gray-100">
        <div className="mb-6">
          <label htmlFor="characterName" className="block text-sm font-medium text-gray-700 mb-2">
            Character Name
          </label>
          <input
            type="text"
            id="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter character name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold">Species</h3>
                <p className="text-gray-600">{selectedSpeciesData?.name}</p>
                <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                  {selectedSpeciesData?.traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold">Class</h3>
                <p className="text-gray-600">{selectedClassData?.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Hit Die: d{selectedClassData?.hitDie}
                </p>
                <p className="text-sm text-gray-500">
                  Primary Ability: {selectedClassData?.primaryAbility}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <Scroll className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold">Background</h3>
                <p className="text-gray-600">{selectedBackgroundData?.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Skills: {selectedBackgroundData?.skillProficiencies.join(', ')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Dumbbell className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold">Ability Scores</h3>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {Object.entries(abilityScores).map(([ability, score]) => (
                    <div key={ability} className="text-sm text-gray-600">
                      <span className="font-medium">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</span>{' '}
                      {score} ({Math.floor((score - 10) / 2)})
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleFinalize}
        disableNext={!characterName || isSubmitting}
        nextLabel={isSubmitting ? 'Creating Character...' : 'Create Character'}
      />
    </div>
  );
}