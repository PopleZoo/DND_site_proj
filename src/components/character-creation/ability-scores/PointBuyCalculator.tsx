import React from 'react';

interface PointBuyCalculatorProps {
  pointsRemaining: number;
  pointCosts: Record<number, number>;
}

export default function PointBuyCalculator({
  pointsRemaining,
  pointCosts
}: PointBuyCalculatorProps) {
  return (
    <div className="bg-white p-4 rounded-lg border-2 border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Point Buy Calculator</h3>
          <p className="text-sm text-gray-600">Points Remaining: {pointsRemaining}</p>
        </div>
        <table className="text-sm">
          <thead>
            <tr>
              <th className="px-2">Score</th>
              <th className="px-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(pointCosts).map(([score, cost]) => (
              <tr key={score}>
                <td className="px-2 text-center">{score}</td>
                <td className="px-2 text-center">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}