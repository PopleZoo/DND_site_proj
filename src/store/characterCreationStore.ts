import { create } from 'zustand';
import { CharacterCreationState } from '../types/store';

const initialState = {
  currentStep: 1,
  completedSteps: [],
  homebrewEnabled: false,
  selectedSpecies: null,
  selectedClass: null,
  selectedSubclass: null,
  selectedBackground: null,
  characterLevel: 1,
  abilityScores: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  selectedEquipment: {},
  selectedSpells: [],
  selectedFeats: [] as string[],
};

const createActions = (set: any) => ({
  nextStep: () => set((state: CharacterCreationState) => ({
    currentStep: Math.min(state.currentStep + 1, 6),
  })),
  previousStep: () => set((state: CharacterCreationState) => ({
    currentStep: Math.max(state.currentStep - 1, 1),
  })),
  setStep: (step: number) => set({ currentStep: step }),
  toggleHomebrew: () => set((state: CharacterCreationState) => ({ 
    homebrewEnabled: !state.homebrewEnabled 
  })),
  setSelectedSpecies: (species: string) => set({ selectedSpecies: species }),
  setSelectedClass: (className: string) => set({ selectedClass: className }),
  setSelectedSubclass: (subclass: string) => set({ selectedSubclass: subclass }),
  setSelectedBackground: (background: string) => set({ selectedBackground: background }),
  setCharacterLevel: (level: number) => set({ characterLevel: level }),
  setAbilityScores: (scores: Record<string, number>) => set({ abilityScores: scores }),
  setSelectedEquipment: (choices: Record<string, string>) => set({ selectedEquipment: choices }),
  setSelectedSpells: (spells: string[]) => set({ selectedSpells: spells }),
  setSelectedFeats: (feats: string[] | ((prev: string[]) => string[])) => 
    set((state: CharacterCreationState) => ({
      selectedFeats: typeof feats === 'function' 
        ? feats(state.selectedFeats)
        : feats
    })),
  completeStep: (step: number) => set((state: CharacterCreationState) => ({
    completedSteps: [...new Set([...state.completedSteps, step])],
  })),
  resetCharacterCreation: () => set(initialState),
});

export const useCharacterCreationStore = create<CharacterCreationState>((set) => ({
  ...initialState,
  ...createActions(set),
}));