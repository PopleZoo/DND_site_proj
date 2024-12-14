import { Class, ClassFeature } from '../../types/character';
import { classes } from './index';

export function getClassById(id: string): Class | undefined {
  return classes.find(c => c.id === id);
}

export function getClassFeatures(classId: string, level: number): ClassFeature[] {
  const classData = getClassById(classId);
  if (!classData) return [];

  return classData.features.filter(feature => feature.level <= level);
}

export function getNewFeatures(classId: string, currentLevel: number, previousLevel: number): ClassFeature[] {
  const classData = getClassById(classId);
  if (!classData) return [];

  return classData.features.filter(
    feature => feature.level <= currentLevel && feature.level > previousLevel
  );
}

export function shouldShowSubclass(classId: string, level: number): boolean {
  const classData = getClassById(classId);
  return classData ? level >= classData.subclassLevel : false;
}

export function getSubclassUnlockLevel(classId: string): number {
  const classData = getClassById(classId);
  return classData?.subclassLevel || 3;
}