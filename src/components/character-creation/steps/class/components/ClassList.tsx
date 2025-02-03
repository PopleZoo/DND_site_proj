import React from 'react';
import { Class } from '../../../../../types/character';
import ClassCard from '../../../cards/ClassCard';

interface ClassListProps {
  classes: Class[];
  selectedClass: string | null;
  onClassSelect: (classId: string) => void;
}

export default function ClassList({ classes, selectedClass, onClassSelect }: ClassListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classOption) => (
        <ClassCard
          key={classOption.id}
          classOption={classOption}
          selected={selectedClass === classOption.id}
          onSelect={() => onClassSelect(classOption.id)}
        />
      ))}
    </div>
  );
}
