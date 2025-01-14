import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Scroll } from 'lucide-react';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-[#F09D51] mb-4">
          Welcome to Nat20
        </h1>
        <p className="text-xl text-[#E0DFD5] max-w-2xl mx-auto">
          Your ultimate platform for creating, sharing, and managing D&D characters
          with a special focus on homebrew content.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <Users className="h-12 w-12 text-[#F09D51] mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Character Management</h2>
          <p className="text-[#E0DFD5] mb-4">
            Create, import, and manage your D&D characters with our intuitive tools.
          </p>
          <Link
            to="/characters"
            className="text-[#F09D51] hover:text-[#F06543] font-medium"
          >
            Manage Characters →
          </Link>
        </Card>

        <Card>
          <Book className="h-12 w-12 text-[#F09D51] mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Homebrew Content</h2>
          <p className="text-[#E0DFD5] mb-4">
            Explore and create custom classes, races, items, and more.
          </p>
          <Link
            to="/homebrew"
            className="text-[#F09D51] hover:text-[#F06543] font-medium"
          >
            Browse Homebrew →
          </Link>
        </Card>

        <Card>
          <Scroll className="h-12 w-12 text-[#F09D51] mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Campaign Tools</h2>
          <p className="text-[#E0DFD5] mb-4">
            Organize your campaigns and keep track of your adventures.
          </p>
          <Link
            to="/campaigns"
            className="text-[#F09D51] hover:text-[#F06543] font-medium"
          >
            View Campaigns →
          </Link>
        </Card>
      </div>

      <section className="bg-[#313638] p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-[#F09D51] mb-4">
          Featured Homebrew Content
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold text-[#E8E9EB]">Artificer's Apprentice</h3>
            <p className="text-sm text-[#E0DFD5]">
              A new class focused on magical innovation
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-[#E8E9EB]">Celestial Weapons</h3>
            <p className="text-sm text-[#E0DFD5]">
              Custom magical items with divine properties
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
