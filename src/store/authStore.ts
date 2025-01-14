import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  username: string | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkUser: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  username: null,
  loading: true,
  error: null,
  signIn: async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      // Fetch username after successful sign in
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('username')
        .eq('id', (await supabase.auth.getUser()).data.user?.id)
        .single();

      if (userError) throw userError;
      set({ username: userData.username, error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: 'An unexpected error occurred' });
      }
      throw error;
    }
  },
  signUp: async (email: string, password: string, username: string) => {
    try {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        }
      });
      if (error) throw error;

      if (user) {
        // Insert username into users table
        const { error: profileError } = await supabase
          .from('users')
          .insert([{ id: user.id, email: user.email, username }]);

        if (profileError) throw profileError;
      }

      set({ error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: 'An unexpected error occurred' });
      }
      throw error;
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, username: null, error: null });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
      throw error;
    }
  },
  checkUser: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Fetch username
        const { data: userData } = await supabase
          .from('users')
          .select('username')
          .eq('id', user.id)
          .single();
        
        set({ user, username: userData?.username || null, loading: false, error: null });
      } else {
        set({ user: null, username: null, loading: false, error: null });
      }
    } catch (error) {
      set({ user: null, username: null, loading: false });
      if (error instanceof Error) {
        set({ error: error.message });
      }
    }
  },
  clearError: () => set({ error: null }),
}));