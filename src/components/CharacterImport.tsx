import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { useCharacterStore } from '../store/characterStore';

export default function CharacterImport() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { importCharacter } = useCharacterStore();
  
  const [isDragOver, setIsDragOver] = useState(false);

  // Handle file change when selected via input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    readFile(file);
  };

  // Handle drop event (file dragged and dropped)
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      readFile(file);
    }
    setIsDragOver(false); // Reset drag state
  };

  // Handle drag over event (to show the drag highlight)
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true); // Set drag over state to highlight the area
  };

  // Handle drag leave event (reset the drag highlight)
  const handleDragLeave = () => {
    setIsDragOver(false); // Reset drag state when leaving the area
  };

  // Read file content and import character data
  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      if (typeof text === 'string') {
        try {
          const characterData = JSON.parse(text);
          importCharacter(characterData);
        } catch (error) {
          console.error('Failed to parse JSON:', error);
          // Handle error appropriately
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      className={`p-4 border-2 rounded-lg text-center ${isDragOver ? 'border-purple-600 bg-purple-100' : 'border-purple-300'}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center space-x-2 mx-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        <Upload className="h-5 w-5" />
        <span>Import Character</span>
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Supports JSON character files
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Or drag and drop your file here
      </p>
    </div>
  );
}
