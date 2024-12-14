import React from 'react';
import { Spell } from '../../../../types/spells';
import SpellCard from './SpellCard';

interface SpellListProps {
  spells: Spell[];
  selectedSpells: string[];
  onSpellSelect: (spellId: string) => void;
  maxSelections?: number;
}

export default function SpellList({
  spells,
  selectedSpells,
  onSpellSelect,
  maxSelections
}: SpellListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {spells.map((spell) => (
        <SpellCard
          key={spell.id}
          spell={spell}
          selected={selectedSpells.includes(spell.id)}
          onSelect={() => onSpellSelect(spell.id)}
          disabled={
            maxSelections !== undefined &&
            selectedSpells.length >= maxSelections &&
            !selectedSpells.includes(spell.id)
          }
        />
      ))}
    </div>
  );
}