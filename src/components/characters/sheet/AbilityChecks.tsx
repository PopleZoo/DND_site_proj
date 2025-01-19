import React, { useState } from 'react';
import { AbilityCheck } from '../../../types/character';

interface AbilityChecksProps {
  abilityChecks: AbilityCheck[]; // Make sure this is an array
  isEditing: boolean;
}

const AbilityChecks: React.FC<AbilityChecksProps> = ({ abilityChecks, isEditing }) => {
  const [rollType, setRollType] = useState<'normal' | 'advantage' | 'disadvantage'>('normal');
  const [rollResult, setRollResult] = useState<number | null>(null);

  const diceSides = {
    d20: 20,
  };

  // Roll the dice, considering the type (normal, advantage, or disadvantage)
  const rollDice = (modifier: number) => {
    const sides = diceSides.d20;
    const roll = Math.floor(Math.random() * sides) + 1;

    let finalRoll = roll + modifier;

    if (rollType === 'advantage') {
      const secondRoll = Math.floor(Math.random() * sides) + 1;
      finalRoll = Math.max(roll, secondRoll) + modifier;
    }

    if (rollType === 'disadvantage') {
      const secondRoll = Math.floor(Math.random() * sides) + 1;
      finalRoll = Math.min(roll, secondRoll) + modifier;
    }

    setRollResult(finalRoll);
  };

  // Handle right-click to allow user to choose roll type
  const handleRightClick = (e: React.MouseEvent, abilityCheck: AbilityCheck) => {
    e.preventDefault();
    const selectedType = window.prompt(
      `Roll Type for ${abilityCheck.abilityName}: "advantage", "disadvantage", or "normal"`,
      rollType
    );
    if (selectedType && ['normal', 'advantage', 'disadvantage'].includes(selectedType)) {
      setRollType(selectedType as 'normal' | 'advantage' | 'disadvantage');
    }
  };

  // Default values for Ability Checks with modifiers set to 0
  const defaultAbilityChecks: AbilityCheck[] = [
    { abilityName: 'Acrobatics', modifier: 0 },
    { abilityName: 'Animal Handling', modifier: 0 },
    { abilityName: 'Arcana', modifier: 0 },
    { abilityName: 'Athletics', modifier: 0 },
    { abilityName: 'Deception', modifier: 0 },
    { abilityName: 'History', modifier: 0 },
    { abilityName: 'Insight', modifier: 0 },
    { abilityName: 'Intimidation', modifier: 0 },
    { abilityName: 'Medicine', modifier: 0 },
    { abilityName: 'Nature', modifier: 0 },
    { abilityName: 'Perception', modifier: 0 },
    { abilityName: 'Performance', modifier: 0 },
    { abilityName: 'Persuasion', modifier: 0 },
    { abilityName: 'Religion', modifier: 0 },
    { abilityName: 'Sleight of Hand', modifier: 0 },
    { abilityName: 'Stealth', modifier: 0 },
    { abilityName: 'Survival', modifier: 0 },
  ];

  // Ensure abilityChecks is an array before rendering
  const abilityChecksArray = Array.isArray(abilityChecks) && abilityChecks.length > 0
    ? abilityChecks
    : defaultAbilityChecks;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Ability Checks</h3>
      <div className="grid grid-cols-2 gap-4">
        {abilityChecksArray.map((stat) => (
          <div
            key={stat.abilityName}
            className="flex items-center space-x-3 p-4 rounded bg-dark-light"
            onContextMenu={(e) => handleRightClick(e, stat)} // Right-click to select roll type
          >
            <div className="flex flex-col items-center justify-center w-16">
              <div
                className={`w-4 h-4 rounded-full ${stat.modifier ? 'bg-primary' : 'bg-gray-500'}`}
              />
              <div className="text-sm text-light">{stat.abilityName}</div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Ability Check Modifier */}
              <button
                onClick={() => rollDice(stat.modifier)}
                className="text-2xl font-semibold"
              >
                {stat.modifier >= 0 ? `+${stat.modifier}` : stat.modifier}
              </button>

              {rollResult !== null && (
                <div className="text-xl font-bold">
                  Result: {rollResult}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbilityChecks;
