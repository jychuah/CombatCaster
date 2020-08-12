import { Monster, Attack, Combatant } from '../types';

export const kobold: Monster = {
  name: 'Kobold',
  ac: 12,
  maxHP: 5,
  attacks: [
    {
      name: 'Dagger',
      bonus: 4,
      medianDamage: 4,
      dice: '1d4+2'
    },
    {
      name: 'Sling',
      bonus: 4,
      medianDamage: 4,
      dice: '1d4+2'
    }
  ]
}