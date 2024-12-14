import React from 'react';
import { MapPin, Users, Calendar, Plus } from 'lucide-react';

export default function Campaigns() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-900">Campaigns</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          <Plus className="h-5 w-5" />
          <span>New Campaign</span>
        </button>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Curse of Strahd</h2>
              <p className="text-gray-600">Gothic Horror Campaign</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Barovia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>4 Players</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Weekly, Fridays 7PM</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-4 py-2 bg-purple-100 text-purple-600 rounded hover:bg-purple-200">
                View
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}