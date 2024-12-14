export interface CharacterCreationState {
  currentStep: number;
  completedSteps: number[];
  homebrewEnabled: boolean;
  selectedSpecies: string | null;
  selectedClass: string | null;
  selectedSubclass: string | null;
  selectedBackground: string | null;
  characterLevel: number;
  abilityScores: Record<string, number>;
  selectedEquipment: Record<string, string>;
  selectedSpells: string[];
  selectedFeats: string[]; // Array of feat IDs
  nextStep: () => void;
  previousStep: () => void;
  setStep: (step: number) => void;
  toggleHomebrew: () => void;
  setSelectedSpecies: (species: string) => void;
  setSelectedClass: (className: string) => void;
  setSelectedSubclass: (subclass: string) => void;
  setSelectedBackground: (background: string) => void;
  setCharacterLevel: (level: number) => void;
  setAbilityScores: (scores: Record<string, number>) => void;
  setSelectedEquipment: (choices: Record<string, string>) => void;
  setSelectedSpells: (spells: string[]) => void;
  setSelectedFeats: (feats: string[] | ((prev: string[]) => string[])) => void;
  completeStep: (step: number) => void;
  resetCharacterCreation: () => void;
}