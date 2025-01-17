import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase"; // Adjust the import path as necessary
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { X, Loader } from 'lucide-react';
import { Session } from '@supabase/supabase-js'; // Import the Session type
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [session, setSession] = useState<Session | null>(null); // Correctly typed session
  const [menuVisible, setMenuVisible] = useState(false); // State to control menu visibility
  const navigate = useNavigate();

  useEffect(() => {
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

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMenuVisible(false); // Hide the menu after navigation
  };

  if (!session) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-dark-light rounded-lg p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-light hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-light mb-6">Sign In</h2>

          <button onClick={signInWithGoogle} className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md">
            Sign in with Google
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative">
        <h2 
          onMouseEnter={() => setMenuVisible(true)} 
          onMouseLeave={() => setMenuVisible(false)}
          className="text-2xl font-bold text-light mb-6 cursor-pointer"
        >
          {session.user.email}
        </h2>
        {menuVisible && (
          <div className="absolute bg-dark-light rounded-lg shadow-lg p-4">
            <button onClick={() => handleMenuClick('/characters')} className="block text-light hover:text-primary">My Characters</button>
            <button onClick={() => handleMenuClick('/homebrew')} className="block text-light hover:text-primary">My Homebrew</button>
            <button onClick={() => handleMenuClick('/campaigns')} className="block text-light hover:text-primary">My Campaigns</button>
          </div>
        )}
        <button onClick={signOut} className="mt-4">Sign out</button>
      </div>
    );
  }
}
