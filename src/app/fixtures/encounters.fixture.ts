import { Encounter } from '../types';

export const encounter: Encounter = {
  name: 'Test Encounter',
  groups: [
    {
      spawns: [
        {
          uid: 'kobold001',
          count: 3
        }
      ]
    }
  ]
}