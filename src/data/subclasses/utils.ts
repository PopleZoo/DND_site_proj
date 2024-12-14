import { Subclass } from '../../types/character';
import { subclasses } from './index';

export function getSubclassesByClass(classId: string): Subclass[] {
  return subclasses[classId as keyof typeof subclasses] || [];
}

export function getSubclassById(classId: string, subclassId: string): Subclass | undefined {
  const classSubclasses = getSubclassesByClass(classId);
  return classSubclasses.find(sc => sc.id === subclassId);
}

export function getSubclassFeatures(classId: string, subclassId: string, level: number) {
  const subclass = getSubclassById(classId, subclassId);
  if (!subclass) return [];

  return subclass.features.filter(feature => feature.level <= level);
}