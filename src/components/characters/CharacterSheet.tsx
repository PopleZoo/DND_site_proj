import React, { useState } from 'react';
import { Character, AbilityScore, InventoryItem, Spell } from '../../types/character'; // Ensure these types are defined

interface CharacterSheetProps {
  character: Character;
  onClose: () => void; // Added onClose prop for exit button functionality
}

const getAbilityName = (id: number): string => {
  const abilities: { [key: number]: string } = {
    1: 'Strength',
    2: 'Dexterity',
    3: 'Constitution',
    4: 'Intelligence',
    5: 'Wisdom',
    6: 'Charisma',
  };
  return abilities[id] || 'Unknown';
};

const calculateModifier = (score: number): string => {
  const modifier = Math.floor((score - 10) / 2);
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
};

const calculateAC = (character: Character): number => {
  const equippedArmor = character.inventory?.find(
    (item: InventoryItem) => item.type === 'Armor' && item.equipped
  );
  return equippedArmor?.definition?.armorClass || 10;
};

const rollDice = (sides: number) => Math.floor(Math.random() * sides) + 1;

const CharacterSheet = ({ character, onClose }: CharacterSheetProps) => {
  const stats = Array.isArray(character.stats) ? character.stats : [];
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [homebrewFilter, setHomebrewFilter] = useState(false); // Changed to boolean

  const equippedItems = character.inventory?.filter((item) => item.equipped) || [];
  const unequippedItems = character.inventory?.filter((item) => !item.equipped) || [];
  const spells = character.spells || [];

  const filteredItems = [...equippedItems, ...unequippedItems].filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter ? item.type === typeFilter : true;
    const matchesHomebrew = homebrewFilter ? item.isHomebrew === true : true; // Only show homebrew items when filter is on
    return matchesSearch && matchesType && matchesHomebrew;
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 w-full max-w-screen-lg h-[90vh] mx-auto relative overflow-auto">
        {/* Exit Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-purple-500 p-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700"
        >
          <span className="text-xl font-bold">X</span>
        </button>

        {/* Character Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black-800">{character.name || 'Unknown Character'}</h1>
          <p className="text-purple-600">
            Level {character.level} {character.race?.baseRaceName || 'Unknown Race'}{' '}
            {character.classes?.[0]?.name || 'Unknown Class'}
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Abilities Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600">Abilities</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map((stat: AbilityScore) => (
                <div key={stat.id} className="text-center">
                  <div className="font-medium text-black-700">{getAbilityName(stat.id)}</div>
                  <div className="text-2xl text-black-900">{stat.value || '?'}</div>
                  <div className="text-purple-500 text-sm">
                    Modifier: {calculateModifier(stat.value || 0)}
                  </div>
                  <button
                    className="mt-2 px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-700"
                    onClick={() => alert(`Rolled: ${rollDice(20)}`)}
                  >
                    Roll d20
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Combat Stats Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600">Combat Stats</h2>
            <div className="space-y-2 mt-4">
              <div>
                <span className="font-medium text-black-700">HP:</span>{' '}
                {character.hitPoints?.current || '?'} / {character.hitPoints?.max || '?'}
              </div>
              <div>
                <span className="font-medium text-black-700">AC:</span> {calculateAC(character)}
              </div>
              <div>
                <span className="font-medium text-black-700">Speed:</span> {character.speed || '?'} ft
              </div>
              <div>
                <span className="font-medium text-black-700">Initiative:</span>{' '}
                {character.initiative || '?'}
              </div>
            </div>
          </div>

          {/* Equipment Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600">Equipment</h2>

            {/* Search and Filters */}
            <div className="space-y-4 mb-4">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full p-2 border rounded-lg border-purple-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="space-x-4">
                <select
                  className="p-2 border rounded-lg border-purple-300"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="">Filter by Type</option>
                  <option value="Armor">Armor</option>
                  <option value="Potion">Potion</option>
                  <option value="Ring">Ring</option>
                  <option value="Rod">Rod</option>
                  <option value="Scroll">Scroll</option>
                  <option value="Staff">Staff</option>
                  <option value="Wand">Wand</option>
                  <option value="Weapon">Weapon</option>
                  <option value="Wondrous">Wondrous</option>
                  <option value="Other Gear">Other Gear</option>
                  <option value="Proficient">Proficient</option>
                  <option value="Common">Common</option>
                  <option value="Magical">Magical</option>
                  <option value="Container">Container</option>
                </select>
                <label className="flex items-center space-x-2">
                  <span>Homebrew</span>
                  <div
                    className={`relative inline-flex items-center cursor-pointer ${
                      homebrewFilter ? 'text-green-500' : 'text-gray-500'
                    }`}
                    onClick={() => setHomebrewFilter(!homebrewFilter)}
                  >
                    <span className="sr-only">Homebrew Toggle</span>
                    <div
                      className={`${
                        homebrewFilter ? 'bg-purple-600' : 'bg-gray-300'
                      } relative inline-block w-12 h-6 rounded-full`}
                    >
                      <span
                        className={`${
                          homebrewFilter ? 'translate-x-6' : 'translate-x-0'
                        } inline-block w-6 h-6 bg-white rounded-full transform transition`}
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Equipment Items */}
            <ul className="mt-4 space-y-2">
              {filteredItems.map((item: InventoryItem) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> ({item.type}){' '}
                  {item.equipped && <span className="text-green-500">[Equipped]</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spells Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-black-600">Spells</h2>
          <div className="space-y-2 mt-4">
            {spells.length > 0 ? (
              spells.map((spell: Spell) => (
                <div key={spell.id} className="p-2 border rounded bg-purple-50">
                  <h3 className="font-semibold text-purple-700">{spell.name}</h3>
                  <p className="text-purple-600">{spell.description || 'No description available'}</p>
                </div>
              ))
            ) : (
              <p className="text-purple-600">No spells available</p>
            )}
          </div>
        </div>

        {/* Notes Section */}
        {character.notes && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black-600">Notes</h2>
            <p className="mt-4 text-purple-700">{character.notes.join('\n')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterSheet;
