import React from 'react';
import { ClassSpell, RaceSpell, ItemSpell } from '../../../types/character';

interface SpellListProps {
  classSpells: ClassSpell[];
  raceSpells: RaceSpell[];
  itemSpells: ItemSpell[];
  isEditing?: boolean;
}

export default function SpellList({
  classSpells = [],
  raceSpells = [],
  itemSpells = [],
  isEditing = false
}: SpellListProps) {
  const allSpells = [...classSpells, ...raceSpells, ...itemSpells];

  if (!allSpells.length) {
    return (
      <div className="text-center py-8 text-light-darker">
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
      {Object.entries(spellsByLevel).map(([level, spells]) => (
        <div key={level} className="space-y-4">
          <h3 className="text-lg font-semibold text-light">
            {level === '0' ? 'Cantrips' : `Level ${level} Spells`}
          </h3>
          <div className="grid gap-4">
            {spells.map((spell) => (
              <div key={spell.id} className="bg-dark-light p-4 rounded-lg border border-dark">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-light">{spell.name}</h4>
                    <p className="text-sm text-primary">
                      {spell.school}
                      {spell.ritual && ' (Ritual)'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {spell.alwaysPrepared && (
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                        Always Prepared
                      </span>
                    )}
                    {spell.concentration && (
                      <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                        Concentration
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 text-sm text-light-darker">
                  <p><strong>Casting Time:</strong> {spell.castingTime || 'Unknown'}</p>
                  <p><strong>Range:</strong> {spell.range?.origin || 'Unknown'} {spell.range?.value || ''}</p>
                  <p><strong>Duration:</strong> {spell.duration?.value || 'Unknown'} {spell.duration?.unit || ''}</p>
                </div>

                {isEditing ? (
                  <textarea
                    defaultValue={spell.description}
                    className="w-full bg-dark text-light border border-dark rounded p-2 mt-2"
                    rows={3}
                  />
                ) : (
                  <p className="text-light-darker mt-2">{spell.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}