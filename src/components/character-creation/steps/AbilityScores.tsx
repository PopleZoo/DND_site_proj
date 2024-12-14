import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import Button from '../../ui/Button';
import { ArrowLeft, ArrowRight, Dice6 } from 'lucide-react';

const ABILITY_SCORES = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
const POINT_BUY_COSTS = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
};

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

  const rollAbilityScores = () => {
    const newScores = {} as Record<string, number>;
    ABILITY_SCORES.forEach(ability => {
      // Roll 4d6, drop lowest
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      const total = rolls.sort().slice(1).reduce((sum, roll) => sum + roll, 0);
      newScores[ability.toLowerCase()] = total;
    });
    setAbilityScores(newScores);
  };

  const handleContinue = () => {
    completeStep(4);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Determine Ability Scores</h2>
        <p className="text-gray-600">
          Choose how you want to determine your character's ability scores.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <Button
          variant={method === 'standard' ? 'primary' : 'outline'}
          onClick={() => setMethod('standard')}
        >
          Standard Array
        </Button>
        <Button
          variant={method === 'pointbuy' ? 'primary' : 'outline'}
          onClick={() => setMethod('pointbuy')}
        >
          Point Buy
        </Button>
        <Button
          variant={method === 'roll' ? 'primary' : 'outline'}
          onClick={() => setMethod('roll')}
          icon={Dice6}
        >
          Roll Scores
        </Button>
      </div>

      {method === 'pointbuy' && (
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">Points Remaining: {pointsRemaining}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ABILITY_SCORES.map((ability) => (
          <div
            key={ability}
            className="bg-white p-6 rounded-lg border-2 border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-2">{ability}</h3>
            <div className="flex items-center space-x-4">
              <select
                value={abilityScores[ability.toLowerCase()]}
                onChange={(e) => handleScoreChange(ability, parseInt(e.target.value))}
                className="w-20 p-2 border rounded"
              >
                {Object.keys(POINT_BUY_COSTS).map((score) => (
                  <option key={score} value={score}>
                    {score} ({Math.floor((parseInt(score) - 10) / 2)})
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">
                Modifier: {Math.floor((abilityScores[ability.toLowerCase()] - 10) / 2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {method === 'roll' && (
        <div className="text-center">
          <Button onClick={rollAbilityScores} icon={Dice6}>
            Roll All Scores
          </Button>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button
          onClick={previousStep}
          variant="outline"
          icon={ArrowLeft}
        >
          Back to Background
        </Button>
        <Button
          onClick={handleContinue}
          icon={ArrowRight}
        >
          Continue to Equipment & Spells
        </Button>
      </div>
    </div>
  );
}