import { CharacterStorage } from './characterStorage';
import { createIcons } from 'lucide';
import { FileJson } from '../components/ui/icons';

export function displayCharacters() {
    const charactersList = document.getElementById('characters-list');
    if (!charactersList) return;

    const characters = CharacterStorage.getAllCharacters();
    
    if (characters.length === 0) {
        charactersList.innerHTML = `
            <div class="empty-state">
                <i data-lucide="file" class="icon-lg"></i>
                <h2>No Characters Yet</h2>
                <p>Create a new character or import an existing one to get started</p>
            </div>
        `;
    } else {
        charactersList.innerHTML = characters.map(character => `
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
        `).join('');
    }

    // Reinitialize Lucide icons
    createIcons();
}