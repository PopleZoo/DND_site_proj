import React, { useState, useEffect } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { backgrounds } from '../../../../data/backgrounds';
import { supabase } from '../../../../lib/supabase';
import BackgroundCard from '../../cards/BackgroundCard';
import CustomBackgroundForm from './CustomBackgroundForm';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import { Plus, AlertCircle } from 'lucide-react';

export default function BackgroundSelection() {
  const {
    homebrewEnabled,
    selectedBackground,
    setSelectedBackground,
    nextStep,
    previousStep,
    completeStep
  } = useCharacterCreationStore();

  const [homebrewBackgrounds, setHomebrewBackgrounds] = useState<any[]>([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check authentication status
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const fetchHomebrewBackgrounds = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setHomebrewBackgrounds([]);
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('homebrew')
          .select('*')
          .eq('type', 'background')
          .or(`is_public.eq.true,user_id.eq.${user.id}`);

        if (error) throw error;
        setHomebrewBackgrounds(data || []);
      } catch (error) {
        console.error('Error fetching homebrew backgrounds:', error);
      } finally {
        setLoading(false);
      }
    };

    if (homebrewEnabled) {
      fetchHomebrewBackgrounds();
    } else {
      setLoading(false);
    }
  }, [homebrewEnabled]);

  const handleContinue = () => {
    if (selectedBackground) {
      completeStep(3);
      nextStep();
    }
  };

  const handleSaveCustomBackground = (background: any) => {
    setHomebrewBackgrounds(prev => [...prev, background]);
    setShowCustomForm(false);
  };

  const availableBackgrounds = [
    ...backgrounds,
    ...(homebrewEnabled && user ? homebrewBackgrounds : [])
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StepHeader
        title="Choose Your Background"
        description="Your background reveals where you came from and your place in the world."
      />

      {homebrewEnabled && !user && (
        <div className="glass p-4 mb-6 flex items-center space-x-3 text-light/60">
          <AlertCircle className="h-5 w-5 text-accent" />
          <p>Sign in to access and create homebrew backgrounds</p>
        </div>
      )}

      {showCustomForm ? (
        <CustomBackgroundForm
          onSave={handleSaveCustomBackground}
          onCancel={() => setShowCustomForm(false)}
        />
      ) : (
        <>
          {user && (
            <div className="flex justify-end">
              <button
                onClick={() => setShowCustomForm(true)}
                className="button primary"
              >
                <Plus className="h-5 w-5" />
                <span>Create Custom Background</span>
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBackgrounds.map((background) => (
              <BackgroundCard
                key={background.id}
                background={background}
                selected={selectedBackground === background.id}
                onSelect={() => setSelectedBackground(background.id)}
              />
            ))}
          </div>
        </>
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedBackground}
        nextLabel="Continue to Ability Scores"
      />
    </div>
  );
}