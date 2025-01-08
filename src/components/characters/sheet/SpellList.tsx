import React from 'react';
import { ClassSpell, ItemSpell, RaceSpell } from '../../../types/character';

interface SpellListProps {
  classSpells: ClassSpell[];
  raceSpells: RaceSpell[];
  itemSpells: ItemSpell[];
}

export default function SpellList({
  classSpells = [],
  raceSpells = [],
  itemSpells = [],
}: SpellListProps) {
  const allSpells = [...classSpells, ...raceSpells, ...itemSpells];

  if (!allSpells.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No spells available
      </div>
    );
  }

  const spellsByLevel = allSpells.reduce((acc, spell) => {
    const level = spell.level;
    if (!acc[level]) acc[level] = [];
    acc[level].push(spell);
    return acc;
  }, {} as Record<number, (ClassSpell | RaceSpell | ItemSpell)[]>);

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
                    <h4 className="font-semibold text-gray-800">{spell.name}</h4>
                    <p className="text-sm text-purple-600">
                      {spell.school}
                      {spell.ritual && ' (Ritual)'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {spell.alwaysPrepared && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
                        Always Prepared
                      </span>
                    )}
                    {spell.concentration && (
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded">
                        Concentration
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>Casting Time:</strong> {spell.castingTime || 'Unknown'}</p>
                  <p><strong>Range:</strong> {spell.range?.origin || 'Unknown'} {spell.range?.value || ''}</p>
                  <p><strong>Duration:</strong> {spell.duration?.value || 'Unknown'} {spell.duration?.unit || ''}</p>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p dangerouslySetInnerHTML={{ __html: spell.description || 'No description provided.' }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
