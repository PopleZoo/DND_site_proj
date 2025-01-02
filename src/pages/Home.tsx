import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Scroll } from 'lucide-react';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">
          Welcome to D&D Homebrew Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your ultimate platform for creating, sharing, and managing D&D characters
          with a special focus on homebrew content.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <Users className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Character Management</h2>
          <p className="text-gray-600 mb-4">
            Create, import, and manage your D&D characters with our intuitive tools.
          </p>
          <Link
            to="/characters"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Manage Characters →
          </Link>
        </Card>

        <Card>
          <Book className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Homebrew Content</h2>
          <p className="text-gray-600 mb-4">
            Explore and create custom classes, races, items, and more.
          </p>
          <Link
            to="/homebrew"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Browse Homebrew →
          </Link>
        </Card>

        <Card>
          <Scroll className="h-12 w-12 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Campaign Tools</h2>
          <p className="text-gray-600 mb-4">
            Organize your campaigns and keep track of your adventures.
          </p>
          <Link
            to="/campaigns"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View Campaigns →
          </Link>
        </Card>
      </div>

      <section className="bg-purple-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">
          Featured Homebrew Content
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold">Artificer's Apprentice</h3>
            <p className="text-sm text-gray-600">
              A new class focused on magical innovation
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold">Celestial Weapons</h3>
            <p className="text-sm text-gray-600">
              Custom magical items with divine properties
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}