/*
  # Create users table and add username

  1. Changes
    - Create users table if it doesn't exist
    - Add username column with constraints
  
  2. Security
    - Enable RLS
    - Add policy for authenticated users
*/

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  username text UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Add constraint to ensure username follows valid pattern
ALTER TABLE users
ADD CONSTRAINT valid_username CHECK (
  username ~ '^[a-zA-Z0-9_-]{3,30}$'
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create policy for authenticated users to update their own data
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create policy for authenticated users to insert their own data
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);