import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { Beer } from 'lucide-react'; // Importing homebrew icon
import { BeerOff } from 'lucide-react'; // Importing homebrew off icon

export default function HomebrewToggle() {
  const { homebrewEnabled, toggleHomebrew } = useCharacterCreationStore();

  return (
    <div className="flex items-center justify-end mb-6 space-x-2">
      <span className="text-sm text-[#E0DFD5]">Allow Homebrew</span>
      <button
        onClick={toggleHomebrew}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          homebrewEnabled ? 'bg-[#F06543]' : 'bg-[#4a4f52]'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            homebrewEnabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      {homebrewEnabled ? (
        <Beer className={`w-5 h-5 text-[#F06543]`} />
      ) : (
        <BeerOff className={`w-5 h-5 text-[#E0DFD5]`} />
      )}
    </div>
  );
}
// Allow homebrew content, this homebrew content will be added from the user's collection of homebrew content.
