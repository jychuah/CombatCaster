import { Encounter } from '../types';

export const encounter: Encounter = {
  name: 'Test Encounter',
  groups: {
    'spawn001': {
      'kobold001': 2,
      'goblin001': 1
    },
    'spawn002': {
      'kobold001': 3
    }
  }
}