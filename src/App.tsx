import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Homebrew from './pages/Homebrew';
import Campaigns from './pages/Campaigns';
import CharacterCreationWizard from './components/character-creation/CharacterCreationWizard';
import AuthCallback from './components/auth/AuthCallback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#313638]"> {/* Updated to use dark background */}
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/create-character" element={<CharacterCreationWizard />} />
            <Route path="/homebrew" element={<Homebrew />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;