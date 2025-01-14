import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
import { X, Loader } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { signIn, signUp, error, clearError } = useAuthStore();

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        setIsVerifying(true);
        await signIn(email, password);
        setIsVerifying(false);
        onClose();
      } else {
        setIsVerifying(true);
        await signUp(email, password, username);
        setShowVerificationMessage(true);
        setIsVerifying(false);
      }
    } catch (err) {
      setIsVerifying(false);
      if (err instanceof Error && err.message.includes('email_not_confirmed')) {
        setShowVerificationMessage(true);
      }
    }
  };

  if (showVerificationMessage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-dark-light rounded-lg p-6 w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-light hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-bold text-light mb-4">Verify Your Email</h2>
          <p className="text-light-darker mb-4">
            We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </p>
          <p className="text-light-darker mb-6">
            Once verified, you can sign in with your email and password.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                setShowVerificationMessage(false);
                setIsLogin(true);
              }}
              className="w-full bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md"
            >
              Go to Sign In
            </button>
            <button
              onClick={onClose}
              className="w-full bg-dark hover:bg-dark-dark text-light font-medium py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-light mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-dark border border-dark-light rounded-md text-light"
                required
                pattern="^[a-zA-Z0-9_-]{3,30}$"
                title="Username must be between 3 and 30 characters and can only contain letters, numbers, underscores, and hyphens"
                disabled={isVerifying}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-dark border border-dark-light rounded-md text-light"
              required
              disabled={isVerifying}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-light mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-dark border border-dark-light rounded-md text-light"
              required
              minLength={6}
              disabled={isVerifying}
            />
          </div>

          {error && (
            <div className="text-accent text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={isVerifying}
            className="w-full bg-primary hover:bg-primary-dark text-dark font-medium py-2 px-4 rounded-md relative"
          >
            {isVerifying ? (
              <div className="flex items-center justify-center">
                <Loader className="w-5 h-5 animate-spin mr-2" />
                <span>{isLogin ? 'Signing In...' : 'Creating Account...'}</span>
              </div>
            ) : (
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              clearError();
              setShowVerificationMessage(false);
            }}
            className="w-full text-primary hover:text-primary-dark text-sm"
            disabled={isVerifying}
          >
            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}