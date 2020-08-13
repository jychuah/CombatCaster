import { Monster, Attack, Combatant } from '../types';

export const kobold: Monster = {
  name: 'Kobold',
  ac: 12,
  maxHP: 5,
  numAttacks: 1,
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

export const goblin: Monster = {
  name: 'Goblin',
  ac: 15,
  maxHP: 7,
  numAttacks: 1,
  attacks: [
    {
      name: 'Scimitar',
      bonus: 4,
      medianDamage: 5,
      dice: '1d6+2'
    },
    {
      name: 'Shortbow',
      bonus: 4,
      medianDamage: 5,
      dice: '1d6+2'
    }
  ]
}