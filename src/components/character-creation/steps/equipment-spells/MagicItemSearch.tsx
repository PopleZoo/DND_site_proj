import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { Search, Filter, AlertCircle } from 'lucide-react';

interface MagicItem {
  id: string;
  name: string;
  type: string;
  rarity: string;
  attunement: boolean;
  description: string;
}

export default function MagicItemSearch() {
  const [items, setItems] = useState<MagicItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MagicItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check authentication status
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const fetchMagicItems = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        const query = supabase
          .from('Magic Items')
          .select('*');

        if (user) {
          query.or(`is_public.eq.true,user_id.eq.${user.id}`);
        } else {
          query.eq('is_public', true);
        }

        const { data, error } = await query;

        if (error) throw error;
        setItems(data || []);
        setFilteredItems(data || []);
      } catch (error) {
        console.error('Error fetching magic items:', error);
        setError('Failed to load magic items');
      } finally {
        setLoading(false);
      }
    };

    fetchMagicItems();
  }, []);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRarity) {
      filtered = filtered.filter(item => item.rarity === selectedRarity);
    }

    if (selectedType) {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    setFilteredItems(filtered);
  }, [searchTerm, selectedRarity, selectedType, items]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading-spinner" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass p-4 text-center">
        <AlertCircle className="h-8 w-8 text-accent mx-auto mb-2" />
        <p className="text-light">{error}</p>
      </div>
    );
  }

  const rarities = Array.from(new Set(items.map(item => item.rarity)));
  const types = Array.from(new Set(items.map(item => item.type)));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-light/40" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search magic items..."
            className="input pl-10 w-full"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="select"
          >
            <option value="">All Rarities</option>
            {rarities.map(rarity => (
              <option key={rarity} value={rarity}>{rarity}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="select"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="glass p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-light">{item.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.rarity === 'Common' ? 'bg-light/10 text-light' :
                item.rarity === 'Uncommon' ? 'bg-primary/20 text-primary' :
                item.rarity === 'Rare' ? 'bg-accent/20 text-accent' :
                item.rarity === 'Very Rare' ? 'bg-purple-500/20 text-purple-500' :
                'bg-yellow-500/20 text-yellow-500'
              }`}>
                {item.rarity}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-light/60">
              <span>{item.type}</span>
              {item.attunement && (
                <>
                  <span>•</span>
                  <span>Requires Attunement</span>
                </>
              )}
            </div>
            
            <p className="text-light/80">{item.description}</p>
            
            <button className="button primary w-full">
              Add to Inventory
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-light/60">No magic items found matching your criteria</p>
        </div>
      )}
    </div>
  );
}