import React, { useEffect, useState } from 'react';
import { CiBeerMugFull } from "react-icons/ci";
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { classes } from '../../../../data/classes/classes';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { Check, Shield, Wand2, Swords, Heart, Book, Scroll } from 'lucide-react';

const classIcons: Record<string, React.ElementType> = {
  artificer: Shield,
  barbarian: Swords,
  bard: Scroll,
  cleric: Heart,
  druid: Book,
  fighter: Shield,
  monk: Swords,
  paladin: Shield,
  ranger: Swords,
  rogue: Swords,
  sorcerer: Wand2,
  warlock: Wand2,
  wizard: Book
};

export default function ClassSelection() {
  const {
    homebrewEnabled,
    selectedClass,
    setSelectedClass,
    characterLevel,
    setCharacterLevel,
    nextStep,
    previousStep,
    completeStep,
    setSelectedSubclass,
    setSelectedFeats
  } = useCharacterCreationStore();

  // Reset subclass and feats when class changes
  useEffect(() => {
    setSelectedSubclass('');
    setSelectedFeats([]);
  }, [selectedClass, setSelectedSubclass, setSelectedFeats]);

  const handleContinue = () => {
    if (selectedClass) {
      completeStep(2);
      nextStep();
    }
  };

  const availableClasses = homebrewEnabled
    ? classes
    : classes.filter(cls => !cls.isHomebrew);

  const selectedClassData = selectedClass 
    ? classes.find(c => c.id === selectedClass)
    : null;

  const getAvailableFeatures = () => {
    if (!selectedClassData) return [];
    return selectedClassData.definition.classFeatures.filter(
      feature => feature.level <= characterLevel
    ).sort((a, b) => b.level - a.level); // Sort features by level, newest first
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Choose Your Class"
        description="Your class shapes your character's capabilities and role in the party."
      />

      {/* Level Selector */}
      <div className="bg-dark p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="level-select" className="block text-sm font-medium text-light">
              Starting Level
            </label>
            <p className="text-sm text-light-darker">
              Choose your character's starting level
            </p>
          </div>
          <select
            id="level-select"
            value={characterLevel}
            onChange={(e) => setCharacterLevel(parseInt(e.target.value))}
            className="ml-4 px-4 py-2 bg-dark border border-dark rounded-md text-light focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
              <option key={level} value={level}>Level {level}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Class Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableClasses.map((classOption) => {
          const Icon = classIcons[classOption.id] || Shield;
          return (
            <button
              key={classOption.id}
              onClick={() => setSelectedClass(classOption.id)}
              className={`relative p-6 rounded-lg text-left transition-all ${
                selectedClass === classOption.id
                  ? 'bg-primary/20 border-2 border-primary'
                  : 'bg-dark border-2 border-dark hover:border-primary/50'
              }`}
            >
              {classOption.isHomebrew && (
                <div className="flex items-center">
                  <CiBeerMugFull className="w-4 h-4 text-primary" />
                  <span className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                    Homebrew
                  </span>
                </div>
              )}

              {selectedClass === classOption.id && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-dark" />
                </div>
              )}

              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-light">{classOption.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-light-darker">
                    <span>Hit Die: d{classOption.hitDice}</span>
                    {classOption.definition.spellcastingAbility && (
                      <>
                        <span>•</span>
                        <span>Spellcaster</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-light-darker mb-4">{classOption.definition.description}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-light">Primary Ability</h4>
                  <p className="text-sm text-light-darker">
                    {classOption.definition.primaryAbility}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-light">Saving Throws</h4>
                  <p className="text-sm text-light-darker">
                    {classOption.definition.savingThrows.join(', ')}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Class Features at Current Level */}
      {selectedClassData && (
        <div className="bg-dark p-6 rounded-lg">
          <h3 className="text-xl font-bold text-light mb-4">
            Features at Level {characterLevel}
          </h3>
          <div className="space-y-4">
            {getAvailableFeatures().map((feature) => (
              <div key={feature.name} className="bg-dark-light p-4 rounded-lg">
                <h4 className="font-medium text-primary">{feature.name}</h4>
                <p className="text-sm text-light-darker mt-2">{feature.description}</p>
                <div className="text-xs text-light-darker mt-1">
                  Gained at level {feature.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedClass}
        nextLabel="Continue to Background"
      />
    </div>
  );
}
