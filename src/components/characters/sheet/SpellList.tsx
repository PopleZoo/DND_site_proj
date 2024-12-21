import React from 'react';
import { ClassSpell } from '../../../types/character';

interface SpellListProps {
  spells: ClassSpell[];
}

export default function SpellList({ spells = [] }: SpellListProps) {
  if (!spells.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No spells available
      </div>
    );
  }

  // Group spells by level
  const spellsByLevel = spells.reduce((acc, spell) => {
    const level = spell.level;
    if (!acc[level]) acc[level] = [];
    acc[level].push(spell);
    return acc;
  }, {} as Record<number, ClassSpell[]>);

  return (
    <div className="space-y-6">
      {Object.entries(spellsByLevel).map(([level, levelSpells]) => (
        <div key={level} className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-900">
            {level === '0' ? 'Cantrips' : `Level ${level} Spells`}
          </h3>
          <div className="grid gap-4">
            {levelSpells.map((spell) => (
              <div key={spell.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{spell.name}</h4>
                    <p className="text-sm text-purple-600">
                      {spell.school}
                      {spell.ritual && ' (Ritual)'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {spell.prepared && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                        Prepared
                      </span>
                    )}
                    {spell.concentration && (
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded">
                        Concentration
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p><strong>Casting Time:</strong> {spell.castingTime}</p>
                  <p><strong>Range:</strong> {spell.range?.origin} {spell.range?.value}</p>
                  <p><strong>Duration:</strong> {spell.duration?.value} {spell.duration?.unit}</p>
                  <p className="mt-2">{spell.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}