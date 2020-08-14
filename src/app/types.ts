export interface Combatant {
  ac?: number,
  maxHP?: number,
  name?: string,
  currentHP?: number,
  portrait?: string
}

export interface Attack {
  name: string,
  bonus: number,
  medianDamage: number,
  dice: string
}

export interface Player extends Combatant {
  url?: string,
}

export interface Monster extends Combatant {
  numAttacks: number,
  attacks: Attack[]
}

export interface CombatGroup {
  combatants: {
    [uid: string]: Combatant
  },
  initiative: number,
  type: string,
  uid: string
}

export interface SpawnGroup {
  [uid: string]: number
}

export interface Combat {
  encounter: Encounter,
  groups: {
    [uid: string]: CombatGroup
  }
}

export interface Encounter {
  name: string,
  groups: {
    [uid: string]: SpawnGroup
  }
}

export interface PlayerMap {
  [uid: string]: Player
}

export interface MonsterMap {
  [uid: string]: Monster
}

export interface EncounterMap {
  [uid: string]: Encounter
}
