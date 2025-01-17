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
        const { error: authError } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (authError) throw authError;

        navigate('/', { replace: true });
      } catch (err) {
        console.error('Auth callback error:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
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
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <Loader className="w-8 h-8 text-primary animate-spin" />
      <h2 className="text-xl font-semibold text-light mt-4">Verifying...</h2>
    </div>
  );
}
