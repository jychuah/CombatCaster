import { Encounter } from '../types';

export const encounter: Encounter = {
  uid: 'encounter001',
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