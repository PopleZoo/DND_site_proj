import { barbarianSubclasses } from './barbarian';
import { fighterSubclasses } from './fighter';
// Import other subclass groups...

export const subclasses = {
  barbarian: barbarianSubclasses,
  fighter: fighterSubclasses,
  // Add other class subclasses...
};

export * from './types';
export * from './utils';