import React, { useState } from 'react';
import { Subclass } from '../../../../../types/character';
import { Check } from 'lucide-react';

interface SubclassSelectionProps {
  subclasses: Subclass[];
  onSelect: (subclass: Subclass) => void;
}

export default function SubclassSelection({ subclasses, onSelect }: SubclassSelectionProps) {
  const [selectedSubclass, setSelectedSubclass] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-light">Choose Your Subclass</h3> {/* Updated color */}
      <p className="text-light-darker">
        At 3rd level, you choose a subclass that shapes your abilities and playstyle.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subclasses.map(subclass => (
          <button
            key={subclass.id}
            onClick={() => {
              setSelectedSubclass(subclass.id);
              onSelect(subclass);
            }}
            className={`relative p-6 rounded-lg text-left transition-all ${
              selectedSubclass === subclass.id
                ? 'bg-primary/20 border-2 border-primary' // Updated color
                : 'bg-dark border-2 border-dark hover:border-primary/50'
            }`}
          >
            {selectedSubclass === subclass.id && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center"> {/* Updated color */}
                <Check className="w-4 h-4 text-dark" />
              </div>
            )}

            <h4 className="font-semibold text-light">{subclass.name}</h4> {/* Updated color */}
            <p className="text-sm text-light-darker mt-2">{subclass.description}</p> {/* Updated color */}
          </button>
        ))}
      </div>
    </div>
  );
}
