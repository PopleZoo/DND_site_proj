/*
  # Database Schema Update
  
  1. Tables
    - Creates characters table for storing character data
    - Creates homebrew table for custom content
    - Creates campaigns table for managing game sessions
  
  2. Security
    - Enables RLS on all tables
    - Adds policies for data access control
    
  3. Utilities
    - Adds updated_at trigger functionality
*/

-- Create characters table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_public boolean DEFAULT false,
  CONSTRAINT valid_character_data CHECK (jsonb_typeof(data) = 'object')
);

-- Create homebrew table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.homebrew (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_public boolean DEFAULT false,
  CONSTRAINT valid_homebrew_data CHECK (jsonb_typeof(data) = 'object')
);

-- Create campaigns table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_public boolean DEFAULT false,
  CONSTRAINT valid_campaign_data CHECK (jsonb_typeof(data) = 'object')
);

-- Enable Row Level Security
DO $$ 
BEGIN
  ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.homebrew ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
EXCEPTION
  WHEN others THEN NULL;
END $$;

-- Characters policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can CRUD own characters" ON public.characters;
  DROP POLICY IF EXISTS "Public characters are readable by all" ON public.characters;
  
  CREATE POLICY "Users can CRUD own characters"
    ON public.characters
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

  CREATE POLICY "Public characters are readable by all"
    ON public.characters
    FOR SELECT
    TO authenticated
    USING (is_public = true);
END $$;

-- Homebrew policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can CRUD own homebrew" ON public.homebrew;
  DROP POLICY IF EXISTS "Public homebrew is readable by all" ON public.homebrew;
  
  CREATE POLICY "Users can CRUD own homebrew"
    ON public.homebrew
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

  CREATE POLICY "Public homebrew is readable by all"
    ON public.homebrew
    FOR SELECT
    TO authenticated
    USING (is_public = true);
END $$;

-- Campaign policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can CRUD own campaigns" ON public.campaigns;
  DROP POLICY IF EXISTS "Public campaigns are readable by all" ON public.campaigns;
  
  CREATE POLICY "Users can CRUD own campaigns"
    ON public.campaigns
    FOR ALL
    TO authenticated
    USING (user_id = auth.uid())
    WITH CHECK (user_id = auth.uid());

  CREATE POLICY "Public campaigns are readable by all"
    ON public.campaigns
    FOR SELECT
    TO authenticated
    USING (is_public = true);
END $$;

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
DO $$ 
BEGIN
  DROP TRIGGER IF EXISTS update_characters_updated_at ON public.characters;
  DROP TRIGGER IF EXISTS update_homebrew_updated_at ON public.homebrew;
  DROP TRIGGER IF EXISTS update_campaigns_updated_at ON public.campaigns;
  
  CREATE TRIGGER update_characters_updated_at
    BEFORE UPDATE ON public.characters
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

  CREATE TRIGGER update_homebrew_updated_at
    BEFORE UPDATE ON public.homebrew
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

  CREATE TRIGGER update_campaigns_updated_at
    BEFORE UPDATE ON public.campaigns
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
END $$;