import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Beer, Swords, BookOpen } from 'lucide-react';
import { FaDiceD20 } from "react-icons/fa";
import { useAuthStore } from '../store/authStore';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface NavbarProps {
  toggleModal: () => void;
}

export default function Navbar({ toggleModal }: NavbarProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleMenuClick = (path: string) => {
    // Handle menu item clicks
    window.location.href = path;
    setMenuVisible(false);
  };

  return (
    <nav className="navbar relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              <FaDiceD20 className="h-10 w-10 text-accent transition-colors duration-300 group-hover:text-accent-light" />
              <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-black text-light tracking-tight">NAT20</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/characters"
              className="flex items-center space-x-2 text-light/80 hover:text-light transition-colors"
            >
              <Swords className="h-5 w-5" />
              <span className="font-medium">Characters</span>
            </Link>
            <Link
              to="/homebrew"
              className="flex items-center space-x-2 text-light/80 hover:text-light transition-colors"
            >
              <Beer className="h-5 w-5" />
              <span className="font-medium">Homebrew</span>
            </Link>
            <Link
              to="/campaigns"
              className="flex items-center space-x-2 text-light/80 hover:text-light transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Campaigns</span>
            </Link>

            {!session ? (
              <button
                onClick={toggleModal}
                className="button primary"
              >
                Sign In
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setMenuVisible(!menuVisible)}
                  className="flex items-center space-x-2 text-light/80 hover:text-light transition-colors"
                >
                  <FaDiceD20 className="h-5 w-5" />
                  <span className="font-medium">
                    {session.user.email?.split('@')[0]}
                  </span>
                </button>

                {menuVisible && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-dark-light rounded-lg shadow-xl">
                    <button
                      onClick={() => handleMenuClick('/mycharacters')}
                      className="block w-full px-4 py-2 text-left text-light/80 hover:text-light hover:bg-dark/50"
                    >
                      My Characters
                    </button>
                    <button
                      onClick={() => handleMenuClick('/myhomebrew')}
                      className="block w-full px-4 py-2 text-left text-light/80 hover:text-light hover:bg-dark/50"
                    >
                      My Homebrew
                    </button>
                    <button
                      onClick={() => handleMenuClick('/campaigns')}
                      className="block w-full px-4 py-2 text-left text-light/80 hover:text-light hover:bg-dark/50"
                    >
                      My Campaigns
                    </button>
                    <hr className="my-2 border-dark" />
                    <button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        setMenuVisible(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-light/80 hover:text-light hover:bg-dark/50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
