import React, { useRef, useState } from 'react';
import { FileUp } from 'lucide-react';
import { CharacterPDFImporter } from '../../utils/pdf/characterImporter';
import { useCharacterStore } from '../../store/characterStore';

export default function PDFCharacterImport() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isImporting, setIsImporting] = useState(false);
  const { addCharacter } = useCharacterStore();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    try {
      const character = await CharacterPDFImporter.importCharacter(file);
      addCharacter(character);
    } catch (error) {
      console.error('Failed to import character from PDF:', error);
      // Handle error appropriately
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg text-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept=".pdf"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isImporting}
        className="flex items-center justify-center space-x-2 mx-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
      >
        <FileUp className="h-5 w-5" />
        <span>
          {isImporting ? 'Importing Character...' : 'Import Character from PDF'}
        </span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Import a character from a PDF character sheet
      </p>
    </div>
  );
}