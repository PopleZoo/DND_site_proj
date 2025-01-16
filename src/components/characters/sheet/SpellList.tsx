import React from 'react';
import { Shield, Star } from 'lucide-react';
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

  // Group spells by level
  const spellsByLevel = allSpells.reduce((acc, spell) => {
    const level = spell.level || 0;
    if (!acc[level]) acc[level] = [];
    acc[level].push(spell);
    return acc;
  }, {} as Record<number, (ClassSpell | RaceSpell | ItemSpell)[]>);

  return (
    <div className="space-y-8">
      {Object.entries(spellsByLevel)
        .sort(([a], [b]) => Number(a) - Number(b)) // Sort by level ascending
        .map(([level, levelSpells]) => (
          <div key={level} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-light">
                {level === '0' ? 'Cantrips' : `Level ${level} Spells`}
              </h3>
            </div>
            <div className="grid gap-4">
              {levelSpells.map((spell, index) => (
                <div
                  key={spell.id || index}
                  className="bg-dark-light p-4 rounded-lg border border-dark hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-light">{spell.name}</h4>
                        <div className="flex space-x-2">
                          {spell.alwaysPrepared && (
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                              Always Prepared
                            </span>
                          )}
                          {spell.concentration && (
                            <span className="px-2 py-1 text-xs bg-danger/10 text-danger rounded">
                              Concentration
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-light-darker">
                        {spell.school} {spell.ritual && '(Ritual)'}
                      </p>
                      <div className="mt-2">
                        <p className="text-light-darker">
                          <strong>Casting Time:</strong> {spell.castingTime || 'Unknown'}
                        </p>
                        <p className="text-light-darker">
                          <strong>Range:</strong> {spell.range?.origin || 'Unknown'}{' '}
                          {spell.range?.value || ''}
                        </p>
                        <p className="text-light-darker">
                          <strong>Duration:</strong> {spell.duration?.value || 'Unknown'}{' '}
                          {spell.duration?.unit || ''}
                        </p>
                      </div>
                      <div className="mt-2">
                        {isEditing ? (
                          <textarea
                            defaultValue={spell.description}
                            className="w-full bg-dark text-light border border-dark rounded p-2 min-h-[100px]"
                            rows={4}
                            placeholder="Spell description..."
                          />
                        ) : (
                          <div
                            className="prose prose-sm max-w-none text-light-darker"
                            dangerouslySetInnerHTML={{
                              __html: spell.description
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
