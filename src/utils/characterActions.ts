import { CharacterStorage } from './characterStorage';
import { CharacterImporter } from './characterImporter';

export function viewCharacter(id: string) {
    const character = CharacterStorage.getCharacter(id);
    if (character) {
        window.location.href = `/character/${id}`;
    }
}

export function exportCharacter(id: string) {
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
}

// Add to window object for onclick handlers
declare global {
    interface Window {
        viewCharacter: typeof viewCharacter;
        exportCharacter: typeof exportCharacter;
    }
}

window.viewCharacter = viewCharacter;
window.exportCharacter = exportCharacter;