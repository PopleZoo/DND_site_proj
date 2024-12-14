import { Class, ClassFeature } from '../types/character';
import { classes } from '../data/classes';

export function getClassFeatures(classId: string, level: number): ClassFeature[] {
  const classData = classes.find(c => c.id === classId);
  if (!classData) return [];

  return classData.features.filter(feature => feature.level <= level);
}

export function getPreviousFeatures(classId: string, level: number): ClassFeature[] {
  const classData = classes.find(c => c.id === classId);
  if (!classData) return [];

  return classData.features.filter(feature => feature.level < level);
}

export function getNewFeatures(classId: string, currentLevel: number, previousLevel: number): ClassFeature[] {
  const classData = classes.find(c => c.id === classId);
  if (!classData) return [];

  return classData.features.filter(
    feature => feature.level <= currentLevel && feature.level > previousLevel
  );
}

export function getFeaturesByLevel(classId: string, level: number): ClassFeature[] {
  const classData = classes.find(c => c.id === classId);
  if (!classData) return [];

  return classData.features.filter(feature => feature.level === level);
}