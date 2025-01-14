import React from 'react';
import { MapPin, Users, Calendar, Plus } from 'lucide-react';

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Campaigns</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-dark rounded-md hover:bg-primary-dark transition-colors">
          <Plus className="h-5 w-5" />
          <span>New Campaign</span>
        </button>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-dark-light p-6 rounded-lg">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-light">Curse of Strahd</h2>
              <p className="text-light-darker">Gothic Horror Campaign</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-light-darker">
                <MapPin className="h-4 w-4" />
                <span>Barovia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-light-darker">
                <Users className="h-4 w-4" />
                <span>4 Players</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-light-darker">
                <Calendar className="h-4 w-4" />
                <span>Weekly, Fridays 7PM</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-4 py-2 bg-primary text-dark rounded hover:bg-primary-dark transition-colors">
                View
              </button>
              <button className="flex-1 px-4 py-2 bg-dark text-light rounded hover:bg-dark/80 transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}