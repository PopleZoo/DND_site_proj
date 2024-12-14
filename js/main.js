import { CharacterImporter } from './utils/characterImporter.js';
import { CharacterStorage } from './utils/characterStorage.js';

// Handle file import
function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const character = CharacterImporter.importFromDndBeyond(e.target.result);
            CharacterStorage.saveCharacter(character);
            displayCharacters();
        } catch (error) {
            console.error('Failed to import character:', error);
            alert('Failed to import character. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

// Display characters
function displayCharacters() {
    const charactersList = document.querySelector('#characters-list');
    if (!charactersList) return;

    const characters = CharacterStorage.getAllCharacters();
    charactersList.innerHTML = characters.length ? characters.map(character => `
        <div class="card character-card">
            <div class="character-header">
                <h3>${character.name}</h3>
                <p>Level ${character.classes.reduce((total, cls) => total + cls.level, 0)} 
                   ${character.race.baseRaceName} 
                   ${character.classes[0].definition.name}</p>
            </div>
            ${character.race.isHomebrew ? '<span class="badge">Homebrew</span>' : ''}
            <div class="character-details">
                <p>HP: ${character.baseHitPoints + (character.bonusHitPoints || 0)}</p>
                <p>XP: ${character.currentXp}</p>
            </div>
            <div class="character-actions">
                <button class="button secondary" onclick="viewCharacter('${character.id}')">View Details</button>
                <button class="button outline" onclick="exportCharacter('${character.id}')">Export</button>
            </div>
        </div>
    `).join('') : `
        <div class="empty-state">
            <i data-lucide="file-json" class="icon-lg"></i>
            <h2>No Characters Yet</h2>
            <p>Create a new character or import an existing one to get started</p>
        </div>
    `;
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const importButton = document.getElementById('character-import');
    if (importButton) {
        importButton.addEventListener('change', handleFileImport);
    }
    displayCharacters();
});

// Export functions to window for button onclick handlers
window.viewCharacter = (id) => {
    const character = CharacterStorage.getCharacter(id);
    if (character) {
        // TODO: Implement character view/edit page
        console.log('Viewing character:', character);
    }
};

window.exportCharacter = (id) => {
    const character = CharacterStorage.getCharacter(id);
    if (character) {
        const exportData = CharacterImporter.exportToDndBeyond(character);
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${character.name.toLowerCase().replace(/\s+/g, '-')}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};