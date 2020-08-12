export interface Combatant {
  ac?: number,
  maxHP?: number,
  name?: string,
  currentHP?: number,
  portrait?: string,
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
  attacks: Attack[]
}

export interface MonsterSpawn {
  uid: string,
  count: number
}

export interface SpawnGroup {
  spawns: MonsterSpawn[]
}

export interface Combat {
  encounter: Encounter,
  combatants: Combatant[]
}

export interface Encounter {
  name: string,
  groups: SpawnGroup[],
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
