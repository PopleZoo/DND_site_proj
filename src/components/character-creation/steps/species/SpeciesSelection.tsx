import React, { useState } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { species } from '../../../../data/species/species';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { Check } from 'lucide-react';

interface SubspeciesModalProps {
  species: any;
  onSelect: (subspecies: string, variant?: string) => void;
  onClose: () => void;
}

function SubspeciesModal({ species, onSelect, onClose }: SubspeciesModalProps) {
  const [selectedSubspecies, setSelectedSubspecies] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('');

  const handleConfirm = () => {
    onSelect(selectedSubspecies, selectedVariant);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#4a4f52] rounded-lg w-full max-w-2xl p-6">
        <h3 className="text-xl font-bold text-[#E0DFD5] mb-4">Choose a Subspecies</h3>
        
        <div className="space-y-4">
          {species.subraces?.map(subrace => (
            <div key={subrace.id} className="space-y-2">
              <button
                onClick={() => setSelectedSubspecies(subrace.id)}
                className={`w-full p-4 rounded-lg text-left ${
                  selectedSubspecies === subrace.id
                    ? 'bg-[#F09D51]/20 border-2 border-[#F09D51]'
                    : 'bg-[#313638] border-2 border-[#313638] hover:border-[#F09D51]/50'
                }`}
              >
                <h4 className="font-medium text-[#E0DFD5]">{subrace.name}</h4>
                <p className="text-sm text-[#E0DFD5]/70">{subrace.description}</p>
                <ul className="mt-2 space-y-1">
                  {Array.isArray(subrace.traits) && subrace.traits.map((trait: any, index: number) => (
                    <li key={index} className="text-sm text-[#E0DFD5]/70">
                      • {typeof trait === 'string' ? trait : trait.name}
                    </li>
                  ))}
                </ul>
              </button>

              {selectedSubspecies === subrace.id && subrace.variants && (
                <div className="ml-6 space-y-2">
                  <h5 className="text-sm font-medium text-[#E0DFD5]">Choose a Variant</h5>
                  {subrace.variants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`w-full p-3 rounded-lg text-left ${
                        selectedVariant === variant.id
                          ? 'bg-[#F06543]/20 border-2 border-[#F06543]'
                          : 'bg-[#313638] border-2 border-[#313638] hover:border-[#F06543]/50'
                      }`}
                    >
                      <h6 className="font-medium text-[#E0DFD5]">{variant.name}</h6>
                      <p className="text-sm text-[#E0DFD5]/70">{variant.description}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#313638] text-[#E0DFD5] hover:bg-[#313638]/80"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedSubspecies || (species.subraces?.find(s => s.id === selectedSubspecies)?.variants && !selectedVariant)}
            className="px-4 py-2 rounded-lg bg-[#F09D51] text-[#313638] hover:bg-[#F09D51]/80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SpeciesSelection() {
  const {
    homebrewEnabled,
    selectedSpecies,
    setSelectedSpecies,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const [showSubspeciesModal, setShowSubspeciesModal] = useState(false);
  const [selectedSpeciesData, setSelectedSpeciesData] = useState<any>(null);

  const handleSpeciesSelect = (speciesData: any) => {
    if (speciesData.subraces?.length) {
      setSelectedSpeciesData(speciesData);
      setShowSubspeciesModal(true);
    } else {
      setSelectedSpecies(speciesData.id);
    }
  };

  const handleSubspeciesSelect = (subspecies: string, variant?: string) => {
    setSelectedSpecies(selectedSpeciesData.id);
    setShowSubspeciesModal(false);
  };

  const handleContinue = () => {
    if (selectedSpecies) {
      completeStep(1);
      nextStep();
    }
  };

  const availableSpecies = homebrewEnabled
    ? species
    : species.filter(s => !s.isHomebrew);

  return (
    <div className="space-y-6">
      <StepHeader
        title="Choose Your Species"
        description="Your species determines your character's ancestral traits and natural abilities."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableSpecies.map((speciesOption) => (
          <button
            key={speciesOption.id}
            onClick={() => handleSpeciesSelect(speciesOption)}
            className={`relative p-6 rounded-lg text-left transition-all ${
              selectedSpecies === speciesOption.id
                ? 'bg-[#F09D51]/20 border-2 border-[#F09D51]'
                : 'bg-[#4a4f52] border-2 border-[#313638] hover:border-[#F09D51]/50'
            }`}
          >
            {speciesOption.isHomebrew && (
              <span className="absolute top-4 right-4 px-2 py-1 bg-[#F06543]/20 text-[#F06543] text-xs rounded">
                Homebrew
              </span>
            )}

            {selectedSpecies === speciesOption.id && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#F09D51] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-[#313638]" />
              </div>
            )}

            <h3 className="text-lg font-semibold text-[#E0DFD5] mb-2">{speciesOption.name}</h3>
            <p className="text-sm text-[#E0DFD5]/70 mb-4">{speciesOption.description}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-4 text-sm text-[#E0DFD5]/70">
                <span>Size: {speciesOption.size}</span>
                <span>Speed: {speciesOption.speed} ft.</span>
              </div>

              <div>
                <h4 className="text-sm font-medium text-[#E0DFD5] mb-1">Traits:</h4>
                <ul className="text-sm text-[#E0DFD5]/70 space-y-1">
                  {Array.isArray(speciesOption.traits) && speciesOption.traits.map((trait: any, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-[#F09D51] mt-1">•</span>
                      <span className="flex-1">
                        {typeof trait === 'string' ? trait : trait.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>

      {showSubspeciesModal && selectedSpeciesData && (
        <SubspeciesModal
          species={selectedSpeciesData}
          onSelect={handleSubspeciesSelect}
          onClose={() => setShowSubspeciesModal(false)}
        />
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedSpecies}
        nextLabel="Continue to Class"
      />
    </div>
  );
}