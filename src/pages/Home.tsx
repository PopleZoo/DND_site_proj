import React from 'react';
import { Beer } from 'lucide-react'; // Importing homebrew icon
import { Swords } from 'lucide-react'; // Importing character management icon
import { GiBookmark } from "react-icons/gi"; // Importing campaign icon
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Welcome to Nat20
        </h1>
        <p className="text-xl text-light max-w-2xl mx-auto">
          Your ultimate platform for creating, sharing, and managing D&D characters
          with a special focus on homebrew content.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <Swords className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-light">
            Characters
          </h2>
          <p className="text-light mb-4">
            Browse through example characters to see how others have created their adventures
          </p>
          <Link
            to="/characters"
            className="text-light hover:text-accent font-medium"
          >
            View Characters →
          </Link>
        </Card>

        <Card>
          <Beer className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-light">
            Homebrew Content
          </h2>
          <p className="text-light mb-4">
            Discover the full range of homebrew content available for your campaigns.
          </p>
          <Link
            to="/homebrew"
            className="text-light hover:text-accent font-medium"
          >
            Browse Homebrew →
          </Link>
        </Card>

        <Card>
          <GiBookmark className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-light">
            Campaign Tools
          </h2>
          <p className="text-light mb-4">
            Learn how to track your campaign progress and manage your party’s journey.
          </p>
          <Link
            to="/campaigns"
            className="text-light hover:text-accent font-medium"
          >
            View Campaigns →
          </Link>
        </Card>
      </div>

      <section className="bg-dark p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-accent mb-4">
          Featured Homebrew Content
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold text-light">
              Artificer's Apprentice
            </h3>
            <p className="text-sm text-light">
              A new class focused on magical innovation
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-light">
              Celestial Weapons
            </h3>
            <p className="text-sm text-light">
              Custom magical items with divine properties
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
