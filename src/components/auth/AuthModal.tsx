import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { X } from "lucide-react";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setSession(null);
      setUsername(null);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      throw error;
    }
  };

  const handleAuth = async () => {
    setError(null);
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        alert("Check your email to confirm your account!");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    setMenuVisible(false);
  };

  if (!session) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none">
          <div 
            className="bg-dark-light rounded-xl p-8 w-full max-w-md shadow-2xl pointer-events-auto transform transition-all duration-200 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-light/60 hover:text-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-light mb-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            {isSignUp && (
              <div className="space-y-2 mb-4">
                <label className="text-sm text-light/60">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 bg-dark border border-dark-light rounded-lg text-light placeholder-light/30 focus:border-primary transition-colors"
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div className="space-y-2 mb-4">
              <label className="text-sm text-light/60">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-dark border border-dark-light rounded-lg text-light placeholder-light/30 focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm text-light/60">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-dark border border-dark-light rounded-lg text-light placeholder-light/30 focus:border-primary transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-primary hover:bg-primary-dark text-light font-medium py-3 px-4 rounded-lg transition-colors"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="w-full mt-4 text-sm text-primary hover:text-primary-light transition-colors"
            >
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-light text-light/60">Or continue with</span>
              </div>
            </div>

            <button
              onClick={signInWithGoogle}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="relative">
        <h2
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
          className="text-2xl font-bold text-light mb-6 cursor-pointer"
        >
          {session.user.email}...
        </h2>
        {menuVisible && (
          <div className="absolute bg-dark-light rounded-lg shadow-lg p-4">
            <button
              onClick={() => handleMenuClick("/characters")}
              className="block text-light hover:text-primary"
            >
              My Characters
            </button>
            <button
              onClick={() => handleMenuClick("/homebrew")}
              className="block text-light hover:text-primary"
            >
              My Homebrew
            </button>
            <button
              onClick={() => handleMenuClick("/campaigns")}
              className="block text-light hover:text-primary"
            >
              My Campaigns
            </button>
          </div>
        )}
        <button onClick={signOut} className="mt-4">
          Sign out
        </button>
      </div>
    );
  }
}