import React from 'react';
import { Beer } from 'lucide-react'; // Importing homebrew icon
import { Swords } from 'lucide-react'; // Importing charater management icon
import { GiBookmark  } from "react-icons/gi";//Importing campaign icon
import { Link } from 'react-router-dom';
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
          <Swords className="h-12 w-12 text-[#F09D51] mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Characters</h2>
          <p className="text-[#E0DFD5] mb-4">
            Browse through example characters to see how others have created their adventures
          </p>
          <Link
            to="/characters"
            className="text-[#F09D51] hover:text-[#F06543] font-medium"
          >
            View Characters →
          </Link>
        </Card>

        <Card>
        <Beer className="h-12 w-12 text-[#F09D51] mb-4" />
        <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Homebrew Content</h2>
          <p className="text-[#E0DFD5] mb-4">
            Discover the full range of homebrew content available for your campaigns.
          </p>
          <Link
            to="/homebrew"
            className="text-[#F09D51] hover:text-[#F06543] font-medium"
          >
            Browse Homebrew →
          </Link>
        </Card>

        <Card>
          <GiBookmark   className="h-12 w-12 text-[#F09D51] mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#E8E9EB]">Campaign Tools</h2>
          <p className="text-[#E0DFD5] mb-4">
            Learn how to track your campaign progress and manage your party’s journey.
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
