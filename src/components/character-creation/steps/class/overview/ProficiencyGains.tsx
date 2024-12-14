import React from 'react';
import { Class } from '../../../../../types/character';
import { Shield } from 'lucide-react';

interface ProficiencyGainsProps {
  classData: Class;
  level: number;
}

export default function ProficiencyGains({ classData, level }: ProficiencyGainsProps) {
  // Only show proficiencies at level 1
  if (level > 1) return null;

  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Shield className="w-5 h-5 text-purple-600" />
        <h4 className="font-semibold">Proficiencies</h4>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="text-sm font-medium text-gray-700 mb-2">Armor & Weapons</h5>
          <ul className="space-y-1 text-sm text-gray-600">
            {classData.proficiencies.map((prof, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>•</span>
                <span>{prof}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-700 mb-2">Saving Throws</h5>
          <ul className="space-y-1 text-sm text-gray-600">
            {classData.savingThrows.map((save, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>•</span>
                <span>{save}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}