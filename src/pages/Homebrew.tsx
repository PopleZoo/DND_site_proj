import React from 'react';
import { Wand2, BookOpen, Sword, Crown } from 'lucide-react';

export default function Homebrew() {
  return (
    <div className="space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">
          Homebrew Content
        </h1>
        <p className="text-gray-600">
          Create, share, and discover custom D&D content
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Wand2 className="h-8 w-8 text-purple-600 mb-2" />
          <h2 className="font-semibold">Spells</h2>
          <p className="text-sm text-gray-600">Create custom spells</p>
        </button>

        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
          <h2 className="font-semibold">Classes</h2>
          <p className="text-sm text-gray-600">Design new classes</p>
        </button>

        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Sword className="h-8 w-8 text-purple-600 mb-2" />
          <h2 className="font-semibold">Items</h2>
          <p className="text-sm text-gray-600">Create magical items</p>
        </button>

        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Crown className="h-8 w-8 text-purple-600 mb-2" />
          <h2 className="font-semibold">Races</h2>
          <p className="text-sm text-gray-600">Add new races</p>
        </button>
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Popular Homebrew</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Blood Mage Class</h3>
                  <p className="text-sm text-gray-600">
                    A spellcaster who harnesses the power of blood magic
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">by WizardMaster</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}