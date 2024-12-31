import { createIcons } from 'lucide';
import { displayCharacters } from './utils/characterDisplay';

// Initialize Lucide icons
createIcons();

// Initialize character display
document.addEventListener('DOMContentLoaded', () => {
    displayCharacters();
    setupEventListeners();
});

function setupEventListeners() {
    // Import button click handler
    const importButton = document.getElementById('import-button');
    const fileInput = document.getElementById('character-import') as HTMLInputElement;
    
    importButton?.addEventListener('click', () => {
        fileInput?.click();
    });

    // File input change handler
    fileInput?.addEventListener('change', handleFileImport);

    // Create character button handler
    const createButton = document.getElementById('create-character');
    createButton?.addEventListener('click', () => {
        window.location.href = '/create-character';
    });
}

function handleFileImport(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            displayCharacters();
        } catch (error) {
            console.error('Failed to import character:', error);
            alert('Failed to import character. Please check the file format.');
        }
    };
    reader.readAsText(file);
}