import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { ABILITY_SCORES } from '../../../../data/abilityScores';
import { POINT_BUY_COSTS, STANDARD_ARRAY } from '../../../../constants/characterCreation';
import AbilityScoreMethods from './AbilityScoreMethods';
import AbilityScoreCard from './AbilityScoreCard';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';

export default function AbilityScores() {
  const {
    abilityScores,
    setAbilityScores,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const [method, setMethod] = useState<'standard' | 'pointbuy' | 'roll'>('standard');
  const [pointsRemaining, setPointsRemaining] = useState(27);

  const handleScoreChange = (ability: string, value: number) => {
    if (method === 'pointbuy') {
      const oldCost = POINT_BUY_COSTS[abilityScores[ability.toLowerCase()]];
      const newCost = POINT_BUY_COSTS[value];
      if (pointsRemaining + oldCost - newCost >= 0) {
        setPointsRemaining(prev => prev + oldCost - newCost);
        setAbilityScores({ ...abilityScores, [ability.toLowerCase()]: value });
      }
    } else {
      setAbilityScores({ ...abilityScores, [ability.toLowerCase()]: value });
    }
  };

  const handleContinue = () => {
    completeStep(4);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Determine Ability Scores"
        description="Choose how you want to determine your character's ability scores."
      />

      <AbilityScoreMethods
        selectedMethod={method}
        onMethodChange={setMethod}
      />

      {method === 'pointbuy' && (
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">Points Remaining: {pointsRemaining}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ABILITY_SCORES.map((ability) => (
          <AbilityScoreCard
            key={ability.id}
            abilityScore={ability}
            value={abilityScores[ability.id]}
            onChange={(value) => handleScoreChange(ability.id, value)}
            min={8}
            max={15}
            disabled={method === 'standard'}
          />
        ))}
      </div>

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        nextLabel="Continue to Equipment & Spells"
      />
    </div>
  );
}