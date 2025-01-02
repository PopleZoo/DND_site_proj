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
      <h3 className="text-xl font-semibold">Choose Your Subclass</h3>
      <p className="text-gray-600">
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
                ? 'bg-purple-50 border-2 border-purple-600'
                : 'bg-white border-2 border-gray-100 hover:border-purple-200'
            }`}
          >
            {selectedSubclass === subclass.id && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            <h4 className="font-semibold">{subclass.name}</h4>
            <p className="text-sm text-gray-600 mt-2">{subclass.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
