import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase"; // Adjust the import path as necessary
import { X } from "lucide-react";
import { Session } from "@supabase/supabase-js"; // Import the Session type
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-up and sign-in
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
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error signing out:", error);
  };

  const handleAuth = async () => {
    setError(null); // Clear previous error
    if (isSignUp) {
      // Sign-up logic
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        alert("Check your email to confirm your account!");
      }
    } else {
      // Sign-in logic
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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-dark-light rounded-lg p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-light hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-light mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" // New input for username
            className="w-full p-2 mb-4 border border-dark rounded-md bg-dark text-light"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-4 border border-dark rounded-md bg-dark text-light"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border border-dark rounded-md bg-dark text-light"
          />

          <button
            onClick={handleAuth}
            className="w-full bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full mt-4 text-sm text-primary underline"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>

          <hr className="my-4 border-dark" />

          <button
            onClick={signInWithGoogle}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
          >
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
