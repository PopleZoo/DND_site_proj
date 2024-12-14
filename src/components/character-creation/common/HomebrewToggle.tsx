import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { Beaker } from 'lucide-react';

export default function HomebrewToggle() {
  const { homebrewEnabled, toggleHomebrew } = useCharacterCreationStore();

  return (
    <div className="flex items-center justify-end mb-6 space-x-2">
      <span className="text-sm text-gray-600">Community Homebrew</span>
      <button
        onClick={toggleHomebrew}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          homebrewEnabled ? 'bg-purple-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            homebrewEnabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <Beaker className={`w-5 h-5 ${homebrewEnabled ? 'text-purple-600' : 'text-gray-400'}`} />
    </div>
  );
}