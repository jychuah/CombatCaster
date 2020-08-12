export interface Combatant {
  ac?: number,
  maxHP?: number,
  name?: string,
  currentHP?: number,
  portrait?: string,
  uid: string,
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
  monsterUid: string,
  count: number
}

export interface SpawnGroup {
  spawns: MonsterSpawn[]
}

export interface Combat {
  encounterUid: string,
  combatants: Combatant[]
}

export interface Encounter {
  uid: string,
  name: string,
  groups: SpawnGroup[],
}

export interface AppData {
  players: Player[],
  monsters: Monster[],
  encounters: Encounter[],
  combat: Combat,
}