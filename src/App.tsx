import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Homebrew from './pages/Homebrew';
import Campaigns from './pages/Campaigns';
import CharacterCreationWizard from './components/character-creation/CharacterCreationWizard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/create-character" element={<CharacterCreationWizard />} />
            <Route path="/homebrew" element={<Homebrew />} />
            <Route path="/campaigns" element={<Campaigns />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;