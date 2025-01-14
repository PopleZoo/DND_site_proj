import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Loader } from 'lucide-react';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthRedirect = async () => {
      try {
        const { error: authError } = await supabase.auth.getSessionFromUrl();
        if (authError) throw authError;
        
        // Redirect to home page after successful verification
        navigate('/', { replace: true });
      } catch (err) {
        console.error('Error handling auth callback:', err);
        setError(err instanceof Error ? err.message : 'An error occurred during verification');
      }
    };

    handleAuthRedirect();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center p-8 bg-dark-light rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-accent mb-4">Verification Failed</h2>
          <p className="text-light-darker mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-primary text-dark rounded-md hover:bg-primary-dark"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark">
      <Loader className="w-8 h-8 text-primary animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-light mb-2">Verifying your email...</h2>
      <p className="text-light-darker">Please wait while we complete the verification process.</p>
    </div>
  );
}