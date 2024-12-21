import React from 'react';
import { Character } from '../../types/character'; // Ensure correct import
import CharacterSheet from './CharacterSheet'; // Import CharacterSheet

interface ModalProps {
  onClose: () => void;
  character: Character; // Add character prop
  children?: React.ReactNode; // Make children optional
}

const Modal = ({ onClose, character, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold"
        >
          X
        </button>
        <CharacterSheet character={character} onClose={close} />
        </div>
    </div>
  );
};

export default Modal;