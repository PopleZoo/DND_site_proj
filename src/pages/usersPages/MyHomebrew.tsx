import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Adjust the import based on your project structure

// Define the type for homebrew data
interface HomebrewItem {
  id: string;
  name: string;
  description: string;
  type: string; // Assuming each homebrew has a type (e.g., "Magic Item", "Species", etc.)
}

interface Spell {
  id: string;
  name: string | null; // Name of the spell
  level: string | null; // Level of the spell
  school: string | null; // School of magic
  castingTime: string | null; // Casting time
  duration: string | null; // Duration
  range: string | null; // Range
  area: string | null; // Area of effect
  save: string | null; // Save type
  damageEffect: string | null; // Damage or effect description
  ritual: boolean | null; // Is it a ritual spell?
  concentration: boolean | null; // Is it a concentration spell?
  verbal: boolean | null; // Requires verbal components?
  somatic: boolean | null; // Requires somatic components?
  material: boolean | null; // Requires material components?
  materialDetails: string | null; // Details about material components
  source: string | null; // Source of the spell
  details: string | null; // Additional details
  attack: string | null; // Attack type
  components: string | null; // Components required
}

const MyHomebrew = () => {
  const [homebrewData, setHomebrewData] = useState<HomebrewItem[]>([]);
  const [templates, setTemplates] = useState<HomebrewItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<HomebrewItem | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [templateType, setTemplateType] = useState('');
  const [spells, setSpells] = useState<Spell[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHomebrewData = async () => {
      const { data, error } = await supabase
        .from("user's homebrew") // Correct table name
        .select('*');

      if (error) {
        console.error('Error fetching homebrew data:', error);
      } else {
        setHomebrewData(data as HomebrewItem[]);
      }
    };

    const fetchTemplates = async () => {
      const fetchClasses = supabase.from('classes').select('*');
      const fetchItems = supabase.from('items').select('*');
      const fetchSpecies = supabase.from('species').select('*');
      const fetchSpells = supabase.from('spells').select('*');

      const [classesRes, itemsRes, speciesRes, spellsRes] = await Promise.all([fetchClasses, fetchItems, fetchSpecies, fetchSpells]);

      if (classesRes.error || itemsRes.error || speciesRes.error || spellsRes.error) {
        console.error('Error fetching templates:', {
          classesRes: classesRes.error,
          itemsRes: itemsRes.error,
          speciesRes: speciesRes.error,
          spellsRes: spellsRes.error,
        });
      } else {
        const combinedTemplates = [
          ...classesRes.data,
          ...itemsRes.data,
          ...speciesRes.data,
          ...spellsRes.data,
        ];
        setTemplates(combinedTemplates as HomebrewItem[]);
      }
    };

    const fetchSpells = async () => {
      const { data, error } = await supabase
        .from('spells') // Correct table name
        .select('*');

      if (error) {
        console.error('Error fetching spells:', error);
      } else {
        console.log('Fetched spells:', data); // Debugging log
        // Check the structure of the fetched data
        console.log('Fetched spells structure:', JSON.stringify(data, null, 2));
        console.log('Fetched spells structure:', JSON.stringify(data, null, 2));
        setSpells(data as Spell[]);

      }
    };

    fetchHomebrewData();
    fetchTemplates();
    fetchSpells();
  }, []);

  const handleCreateCopy = async () => {
    if (selectedItem) {
      const newItem = { ...selectedItem, id: `COPY_OF_${selectedItem.id}`, name: `COPY_OF_${selectedItem.name}` };
      const { error } = await supabase
        .from("user's homebrew") // Correct table name
        .insert([newItem]);

      if (error) {
        console.error('Error creating copy:', error);
      } else {
        setHomebrewData(prev => [...prev, newItem]);
        setShowPopup(false); // Close the popup after saving
      }
    }
  };

  const handleEditSave = async () => {
    if (selectedItem) {
      const { error } = await supabase
        .from("user's homebrew") // Correct table name
        .upsert([selectedItem]);

      if (error) {
        console.error('Error saving changes:', error);
      } else {
        setShowPopup(false); // Close the popup after saving
      }
    }
  };

  const filteredSpells = spells.filter(spell => 
    spell.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cards for Homebrew Types */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Create Homebrew</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Magic Items', 'Species', 'Spells', 'Classes'].map(type => (
            <div key={type} className="p-4 bg-dark-light rounded-lg cursor-pointer">
              <h3 className="font-semibold text-light">{type}</h3>
              <p className="text-sm text-light-darker">Create new {type.toLowerCase()}</p>
              <button onClick={() => { 
                setShowPopup(true); 
                setTemplateType(type); 
                setSelectedItem(null); 
              }} className="mt-2 p-2 bg-primary text-white rounded">
                Start from Template
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Homebrew Data Section */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Your Homebrew</h2>
        <div className="bg-dark-light p-4 rounded">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {homebrewData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-2 text-center">No Content Yet</td>
                  </tr>
                ) : (
                  homebrewData.map(item => (
                    <tr
                      key={item.id}
                      className="cursor-pointer hover:bg-light-dark"
                      onClick={() => { setSelectedItem(item); setShowPopup(true); }}
                    >
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.type}</td>
                      <td className="p-2">{item.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Spells Popup */}
      {showPopup && templateType === 'Spells' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-dark p-4 rounded">
            <h2 className="text-accent font-bold mb-2">Select a Spell</h2>
            <input
              type="text"
              placeholder="Search spells..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <table className="min-w-full text-primary">
              <thead>
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Level</th>
                  <th className="p-2">School</th>
                  <th className="p-2">Casting Time</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">Range</th>
                </tr>
              </thead>
              <tbody>
                {filteredSpells.map(spell => (
                  <tr key={spell.id} className="hover:bg-gray-200 cursor-pointer">
                    <td className="p-2">{spell.name}</td>
                    <td className="p-2">{spell.level}</td>
                    <td className="p-2">{spell.school}</td>
                    <td className="p-2">{spell.castingTime}</td>
                    <td className="p-2">{spell.duration}</td>
                    <td className="p-2">{spell.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setShowPopup(false)} className="mt-2 p-2 bg-primary text-dark font-bold rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Popup for Detailed View & Edit */}
      {showPopup && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Edit {selectedItem.name}</h2>
            <div>
              <label className="block text-sm">Name</label>
              <input
                type="text"
                value={selectedItem.name}
                onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                className="w-full p-2 mb-4 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Description</label>
              <textarea
                value={selectedItem.description}
                onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                className="w-full p-2 mb-4 border rounded"
              />
            </div>
            <button onClick={handleEditSave} className="mt-4 p-2 bg-primary text-white rounded">
              Save Changes
            </button>
            <button onClick={() => setShowPopup(false)} className="mt-2 p-2 bg-gray-300 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyHomebrew;
