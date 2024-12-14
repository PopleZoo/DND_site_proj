import React from 'react';
import { Link } from 'react-router-dom';
import { Dice6, Book, Users, Scroll, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dice6 className="h-8 w-8" />
              <span className="font-bold text-xl">D&D Homebrew Hub</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/characters" className="flex items-center space-x-1 hover:text-purple-200">
              <Users className="h-5 w-5" />
              <span>Characters</span>
            </Link>
            <Link to="/homebrew" className="flex items-center space-x-1 hover:text-purple-200">
              <Book className="h-5 w-5" />
              <span>Homebrew</span>
            </Link>
            <Link to="/campaigns" className="flex items-center space-x-1 hover:text-purple-200">
              <Scroll className="h-5 w-5" />
              <span>Campaigns</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}