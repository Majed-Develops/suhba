// Main game content aggregator - imports from separate game modules
import { fiqhMaster } from './games/fiqhMaster';
import { wisdomSeeker } from './games/wisdomSeeker';
import { imanDefender } from './games/imanDefender';

// Re-export all game content in the original structure for backward compatibility
export const newGameContent = {
  fiqhMaster,
  wisdomSeeker,
  imanDefender
};

// Helper function to get question names - preserved from original
export function getQuestionNames(): string[] {
  return [
    'fiqhMaster',
    'wisdomSeeker', 
    'imanDefender'
  ];
}

// Export individual games for direct imports (optional)
export { fiqhMaster, wisdomSeeker, imanDefender };