import React from 'react';
import { Wand2, BookOpen, Sword, Crown } from 'lucide-react';

export default function Homebrew() {
  return (
    <div className="space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2"> {/* Updated color */}
          Homebrew Content
        </h1>
        <p className="text-light">
          Create, share, and discover custom D&D content
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-6 bg-dark-light rounded-lg hover:bg-dark transition-colors">
          <Wand2 className="h-8 w-8 text-primary mb-2" /> {/* Updated color */}
          <h2 className="font-semibold text-light">Spells</h2> {/* Updated color */}
          <p className="text-sm text-light-darker">Create custom spells</p>
        </button>

        <button className="p-6 bg-dark-light rounded-lg hover:bg-dark transition-colors">
          <BookOpen className="h-8 w-8 text-primary mb-2" /> {/* Updated color */}
          <h2 className="font-semibold text-light">Classes</h2> {/* Updated color */}
          <p className="text-sm text-light-darker">Design new classes</p>
        </button>

        <button className="p-6 bg-dark-light rounded-lg hover:bg-dark transition-colors">
          <Sword className="h-8 w-8 text-primary mb-2" /> {/* Updated color */}
          <h2 className="font-semibold text-light">Items</h2> {/* Updated color */}
          <p className="text-sm text-light-darker">Create magical items</p>
        </button>

        <button className="p-6 bg-dark-light rounded-lg hover:bg-dark transition-colors">
          <Crown className="h-8 w-8 text-primary mb-2" /> {/* Updated color */}
          <h2 className="font-semibold text-light">Races</h2> {/* Updated color */}
          <p className="text-sm text-light-darker">Add new races</p>
        </button>
      </div>

      <section className="bg-dark-light p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4"> {/* Updated color */}
          Popular Homebrew
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 bg-dark rounded-lg hover:bg-dark/80 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-light">Blood Mage Class</h3> {/* Updated color */}
                  <p className="text-sm text-light-darker">
                    A spellcaster who harnesses the power of blood magic
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-light-darker">by WizardMaster</span>
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
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
