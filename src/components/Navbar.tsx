import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beer, Swords } from 'lucide-react'; // Importing new icons
import { GiBookmark, GiSwordman } from 'react-icons/gi'; // Campaign and user icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { useAuthStore } from '../store/authStore';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const { user, username, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="bg-dark border-b border-dark-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faDiceD20} className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-light">Nat20</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/characters"
              className="flex items-center space-x-1 text-light hover:text-primary transition-colors"
            >
              <Swords className="h-5 w-5" />
              <span>Characters</span>
            </Link>
            <Link
              to="/homebrew"
              className="flex items-center space-x-1 text-light hover:text-primary transition-colors"
            >
              <Beer className="h-5 w-5" />
              <span>Homebrew</span>
            </Link>
            <Link
              to="/campaigns"
              className="flex items-center space-x-1 text-light hover:text-primary transition-colors"
            >
              <GiBookmark className="h-5 w-5" />
              <span>Campaigns</span>
            </Link>

            <div className="relative">
              {user ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-light hover:text-primary transition-colors"
                >
                  <GiSwordman className="h-5 w-5" />
                  <span>{username || 'User'}</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 text-light hover:text-primary transition-colors"
                >
                  <GiSwordman className="h-5 w-5" />
                  <span>Sign In</span>
                </button>
              )}

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-dark-light rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/characters"
                    className="block px-4 py-2 text-light hover:bg-dark hover:text-primary"
                    onClick={() => setShowUserMenu(false)}
                  >
                    My Characters
                  </Link>
                  <Link
                    to="/homebrew"
                    className="block px-4 py-2 text-light hover:bg-dark hover:text-primary"
                    onClick={() => setShowUserMenu(false)}
                  >
                    My Homebrew
                  </Link>
                  <Link
                    to="/campaigns"
                    className="block px-4 py-2 text-light hover:bg-dark hover:text-primary"
                    onClick={() => setShowUserMenu(false)}
                  >
                    My Campaigns
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setShowUserMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-light hover:bg-dark hover:text-primary"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </nav>
  );
}
