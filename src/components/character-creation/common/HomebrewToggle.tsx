import React from 'react';
import { useCharacterCreationStore } from '../../../store/characterCreationStore';
import { Beer } from 'lucide-react';

export default function HomebrewToggle() {
  const { homebrewEnabled, toggleHomebrew } = useCharacterCreationStore();

  return (
    <div className="flex justify-end items-center space-x-3 mb-8">
      <span className="text-sm font-medium text-light/60">Allow Homebrew</span>
      <button
        onClick={toggleHomebrew}
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
          homebrewEnabled ? 'bg-accent' : 'bg-dark-light'
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
            homebrewEnabled 
              ? 'translate-x-6 bg-dark' 
              : 'translate-x-0 bg-light/10'
          }`}
        />
      </button>
      <Beer className={`h-5 w-5 ${homebrewEnabled ? 'text-accent' : 'text-light/40'}`} />
    </div>
  );
}