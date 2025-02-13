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
  Name: string | null; // Name of the spell
  Level: string | null; // Level of the spell
  School: string | null; // School of magic
  CastingTime: string | null; // Casting time
  Duration: string | null; // Duration
  Range: string | null; // Range
  Area: string | null; // Area of effect
  Save: string | null; // Save type
  DamageEffect: string | null; // Damage or effect description
  Ritual: boolean | null; // Is it a ritual spell?
  Concentration: boolean | null; // Is it a concentration spell?
  Verbal: boolean | null; // Requires verbal components?
  Somatic: boolean | null; // Requires somatic components?
  Material: boolean | null; // Requires material components?
  MaterialDetails: string | null; // Details about material components
  Source: string | null; // Source of the spell
  Details: string | null; // Additional details
  Attack: string | null; // Attack type
  Components: string | null; // Components required
}

const MyHomebrew = () => {
  const [homebrewData, setHomebrewData] = useState<HomebrewItem[]>([]);
  const [templates, setTemplates] = useState<HomebrewItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<HomebrewItem | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [templateType, setTemplateType] = useState('');
  const [spells, setSpells] = useState<Spell[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // Default search term
  const [selectedTypeFilter, setSelectedTypeFilter] = useState(''); // New filter state

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [spellsPerPage] = useState(10); // Number of spells to show per page

  const [pageInput, setPageInput] = useState(currentPage.toString());

  const [levelFilter, setLevelFilter] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');

  // Sorting state
  const [sortColumn, setSortColumn] = useState<keyof Spell | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handlePageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPageInput(value);
    }
  };

  const handlePageJump = () => {
    const newPage = parseInt(pageInput, 10);
    if (newPage > 0 && newPage <= Math.ceil(filteredSpells.length / spellsPerPage)) {
      setCurrentPage(newPage);
      setPageInput(newPage.toString()); // Update the page input to reflect the current page
    } else {
      setPageInput(currentPage.toString()); // reset to current page if input is out of range
    }
  };

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
        setSpells(data);
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

  // Filter logic
  const filteredHomebrewData = homebrewData.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTypeFilter ? item.type === selectedTypeFilter : true)
    );
  });

const filteredSpells = spells.filter((spell: Spell) => {
    console.log('Filtering spell:', spell); // Debugging line
    console.log('Level Filter:', levelFilter); // Debugging line
    console.log('School Filter:', schoolFilter); // Debugging line
    return (
        spell.Name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (levelFilter ? spell.Level === levelFilter : true) &&
        (schoolFilter ? spell.School === schoolFilter : true) 
    );
});



  console.log('Filtered Spells:', filteredSpells); // Debugging line

  // Sorting logic
  const sortedSpells = [...filteredSpells].sort((a, b) => {
    const aValue = a[sortColumn as keyof Spell] ?? '';
    const bValue = b[sortColumn as keyof Spell] ?? '';
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Pagination logic for spells
  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = sortedSpells.slice(indexOfFirstSpell, indexOfLastSpell);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPageInput(page.toString()); // Update the page input to reflect the current page
  };

  // Sorting handler
  const handleSort = (column: keyof Spell) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Filter Homebrew</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={selectedTypeFilter}
            onChange={(e) => setSelectedTypeFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Types</option>
            {['Magic Items', 'Species', 'Spells', 'Classes'].map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </section>

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
                {filteredHomebrewData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-2 text-center">No Content Yet</td>
                  </tr>
                ) : (
                  filteredHomebrewData.map(item => (
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
{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-dark p-4 rounded shadow-lg w-full max-w-4xl">
      <h2 className="text-accent font-bold mb-2">Select a Spell</h2>
      
      {/* Search Bar and Filters */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search spells..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-2 border border-dark-400 rounded"
        />
        <div className="flex gap-4">
          {/* Level Filter */}
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Levels</option>
            {[...Array(9).keys()].map(level => (
              <option key={level} value={level + 1}>Level {level + 1}</option>
            ))}
          </select>

          {/* School Filter */}
          <select
            value={schoolFilter}
            onChange={(e) => setSchoolFilter(e.target.value)}
            className="p-2 border rounded border"
          >
            <option value="">All Schools</option>
            {['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'].map(school => (
              <option key={school} value={school}>{school}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Spell Table */}
      <table className="min-w-full text-primary table-auto">
        <thead>
          <tr className="bg-gray-700 text-accent">
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('Name')}>Name {sortColumn === 'Name' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('Level')}>Level {sortColumn === 'Level' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('School')}>School {sortColumn === 'School' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('CastingTime')}>Casting Time {sortColumn === 'CastingTime' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('Duration')}>Duration {sortColumn === 'Duration' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
            <th className="p-3 border-b-2 cursor-pointer" onClick={() => handleSort('Range')}>Range {sortColumn === 'Range' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
          </tr>
        </thead>
        <tbody>
          {currentSpells.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-3 text-center text-accent">No Spells Found</td>
            </tr>
          ) : (
            currentSpells.map(spell => (
              <tr key={spell.id} className="hover:bg-dark-light cursor-pointer">
                <td className="p-3 border-b">{spell.Name ?? 'N/A'}</td>
                <td className="p-3 border-b">{spell.Level ?? 'N/A'}</td>
                <td className="p-3 border-b">{spell.School ?? 'N/A'}</td>
                <td className="p-3 border-b">{spell.CastingTime ?? 'N/A'}</td>
                <td className="p-3 border-b">{spell.Duration ?? 'N/A'}</td>
                <td className="p-3 border-b">{spell.Range ?? 'N/A'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <span className="flex justify-center items-center mt-4">
        <div className="flex items-center">
          <button
            className="p-2 text-dark bg-primary rounded mr-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="p-2 text-accent bg-dark rounded mr-2">Page</span>
          <input
            type="text"
            value={pageInput}
            onChange={handlePageInputChange}
            onBlur={handlePageJump}
            className="p-2 text-accent bg-dark rounded w-16 text-center"
          />
          <span className="p-2 text-accent bg-dark rounded ml-2">
            / {Math.ceil(filteredSpells.length / spellsPerPage)}
          </span>
          <button
            className="p-2 text-dark bg-primary rounded ml-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastSpell >= filteredSpells.length}
          >
            Next
          </button>
        </div>
      </span>
    </div>
  </div>
)}

    </div>
  );
};

export default MyHomebrew;
