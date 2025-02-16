import React, { useState } from 'react';
import { supabase } from '../../../../lib/supabase';
import { CustomBackgroundOptions } from '../../../../data/backgrounds';
import { Plus, X } from 'lucide-react';

interface CustomBackgroundFormProps {
  onSave: (background: any) => void;
  onCancel: () => void;
}

export default function CustomBackgroundForm({ onSave, onCancel }: CustomBackgroundFormProps) {
  const [formData, setFormData] = useState<CustomBackgroundOptions>({
    abilityScores: {
      type: 'choose2',
      increases: {}
    },
    skills: [],
    tool: '',
    languages: 2,
    equipment: [],
    gold: 50,
    feat: '',
    feature: {
      name: '',
      description: ''
    }
  });

  const [customEquipment, setCustomEquipment] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillOptions = [
    'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
    'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine',
    'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion',
    'Sleight of Hand', 'Stealth', 'Survival'
  ];

  const toolOptions = [
    'Alchemist\'s Supplies', 'Brewer\'s Supplies', 'Calligrapher\'s Supplies',
    'Carpenter\'s Tools', 'Cartographer\'s Tools', 'Cobbler\'s Tools',
    'Cook\'s Utensils', 'Glassblower\'s Tools', 'Jeweler\'s Tools',
    'Leatherworker\'s Tools', 'Mason\'s Tools', 'Painter\'s Supplies',
    'Potter\'s Tools', 'Smith\'s Tools', 'Tinker\'s Tools', 'Weaver\'s Tools',
    'Woodcarver\'s Tools', 'Disguise Kit', 'Forgery Kit', 'Herbalism Kit',
    'Navigator\'s Tools', 'Poisoner\'s Kit', 'Thieves\' Tools'
  ];

  const handleAbilityScoreChange = (ability: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      abilityScores: {
        ...prev.abilityScores,
        increases: {
          ...prev.abilityScores.increases,
          [ability]: value
        }
      }
    }));
  };

  const handleSkillChange = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(prev => prev.filter(s => s !== skill));
    } else if (selectedSkills.length < 2) {
      setSelectedSkills(prev => [...prev, skill]);
    }
    setFormData(prev => ({ ...prev, skills: selectedSkills }));
  };

  const handleAddEquipment = () => {
    if (customEquipment.trim()) {
      setFormData(prev => ({
        ...prev,
        equipment: [...prev.equipment, customEquipment.trim()]
      }));
      setCustomEquipment('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { data, error } = await supabase
        .from('homebrew')
        .insert([{
          user_id: user.id,
          name: formData.feature.name || 'Custom Background',
          type: 'background',
          data: formData,
          is_public: false
        }])
        .select()
        .single();

      if (error) throw error;
      onSave(data);
    } catch (error) {
      console.error('Error saving custom background:', error);
    }
  };

  return (
    <div className="glass p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-light">Create Custom Background</h2>
        <button
          onClick={onCancel}
          className="p-2 text-light/60 hover:text-accent transition-colors rounded-lg"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ability Score Increases */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Ability Score Increases</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map(ability => (
              <div key={ability} className="flex items-center justify-between p-4 glass">
                <label className="text-light">{ability}</label>
                <select
                  value={formData.abilityScores.increases[ability.toLowerCase()] || 0}
                  onChange={(e) => handleAbilityScoreChange(ability.toLowerCase(), parseInt(e.target.value))}
                  className="select"
                >
                  <option value="0">+0</option>
                  <option value="1">+1</option>
                  <option value="2">+2</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Proficiencies */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Skill Proficiencies (Choose 2)</h3>
          <div className="grid grid-cols-3 gap-4">
            {skillOptions.map(skill => (
              <label key={skill} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  disabled={selectedSkills.length >= 2 && !selectedSkills.includes(skill)}
                  className="form-checkbox"
                />
                <span className="text-light">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tool Proficiency */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Tool Proficiency</h3>
          <select
            value={formData.tool}
            onChange={(e) => setFormData(prev => ({ ...prev, tool: e.target.value }))}
            className="select w-full"
          >
            <option value="">Select a tool</option>
            {toolOptions.map(tool => (
              <option key={tool} value={tool}>{tool}</option>
            ))}
          </select>
        </div>

        {/* Equipment */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Starting Equipment</h3>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={customEquipment}
                onChange={(e) => setCustomEquipment(e.target.value)}
                placeholder="Add equipment item"
                className="input flex-1"
              />
              <button
                type="button"
                onClick={handleAddEquipment}
                className="button primary"
              >
                <Plus className="h-5 w-5" />
                <span>Add</span>
              </button>
            </div>
            <ul className="space-y-2">
              {formData.equipment.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-2 glass">
                  <span className="text-light">{item}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      equipment: prev.equipment.filter((_, i) => i !== index)
                    }))}
                    className="text-accent hover:text-accent-light"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature */}
        <div>
          <h3 className="text-lg font-semibold text-light mb-4">Background Feature</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={formData.feature.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                feature: { ...prev.feature, name: e.target.value }
              }))}
              placeholder="Feature Name"
              className="input w-full"
            />
            <textarea
              value={formData.feature.description}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                feature: { ...prev.feature, description: e.target.value }
              }))}
              placeholder="Feature Description"
              className="input w-full h-32 resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="button secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button primary"
          >
            Save Background
          </button>
        </div>
      </form>
    </div>
  );
}