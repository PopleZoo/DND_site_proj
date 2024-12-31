import React, { useEffect } from 'react';
import { useCharacterCreationStore } from '../../../../store/characterCreationStore';
import { classes } from '../../../../data/classes';
import ClassList from './components/ClassList';
import ClassFeatures from './features/ClassFeatures';
import SubclassSelection from '../SubclassSelection';
import FeatSelection from '../feats/FeatSelection';
import StepHeader from '../../common/StepHeader';
import StepNavigation from '../../common/StepNavigation';
import LevelSelector from './LevelSelector';

export default function ClassSelection() {
  const {
    homebrewEnabled,
    selectedClass,
    setSelectedClass,
    characterLevel,
    setCharacterLevel,
    nextStep,
    previousStep,
    completeStep,
    setSelectedSubclass,
    setSelectedFeats
  } = useCharacterCreationStore();

  // Reset subclass and feats when class changes
  useEffect(() => {
    setSelectedSubclass('');
    setSelectedFeats([]);
  }, [selectedClass, setSelectedSubclass, setSelectedFeats]);

  const handleClassSelect = (classId: string) => {
    if (selectedClass !== classId) {
      setSelectedClass(classId);
    }
  };

  const handleContinue = () => {
    if (selectedClass) {
      completeStep(2);
      nextStep();
    }
  };

  const availableClasses = homebrewEnabled
    ? classes
    : classes.filter(cls => !cls.isHomebrew);

  const selectedClassData = classes.find(c => c.id === selectedClass);
  const shouldShowSubclass = characterLevel >= 3;
  const featLevels = [4, 8, 12, 16, 19];
  const shouldShowFeatSelection = featLevels.includes(characterLevel);

  return (
    <div className="space-y-6">
      <StepHeader
        title="Choose Your Class"
        description="Your class shapes your character's capabilities and role in the party."
      />

      <LevelSelector
        level={characterLevel}
        onChange={setCharacterLevel}
        selectedClass={selectedClassData}
      />

      <ClassList
        classes={availableClasses}
        selectedClass={selectedClass}
        onClassSelect={handleClassSelect}
      />

      {selectedClass && selectedClassData && (
        <>
          <ClassFeatures
            classData={selectedClassData}
            level={characterLevel}
          />

          <LevelOverview 
            classData={selectedClassData}
            level={characterLevel}
          />
        </>
      )}

      {selectedClass && shouldShowSubclass && (
        <SubclassSelection classId={selectedClass} />
      )}

      {selectedClass && shouldShowFeatSelection && (
        <FeatSelection level={characterLevel} classId={selectedClass} />
      )}

      <StepNavigation
        onPrevious={previousStep}
        onNext={handleContinue}
        disableNext={!selectedClass}
        nextLabel="Continue to Background"
      />
    </div>
  );
}