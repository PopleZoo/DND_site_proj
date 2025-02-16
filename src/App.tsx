import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import MyCharacters from './pages/usersPages/MyCharacters';
import Homebrew from './pages/Homebrew';
import MyHomebrew from './pages/usersPages/MyHomebrew';
import Campaigns from './pages/Campaigns';
import CharacterCreationWizard from './components/character-creation/CharacterCreationWizard';
import AuthCallback from './components/auth/AuthCallback';
import AuthModal from './components/auth/AuthModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar toggleModal={toggleModal} />
        
        {/* Render AuthModal here */}
        {isModalVisible && <AuthModal onClose={toggleModal} />}
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/mycharacters" element={<MyCharacters />} />
            <Route path="/create-character" element={<CharacterCreationWizard />} />
            <Route path="/homebrew" element={<Homebrew />} />
            <Route path="/myhomebrew" element={<MyHomebrew />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
