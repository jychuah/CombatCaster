export interface Combatant {
  ac?: number,
  maxHP?: number,
  name?: string,
  currentHP?: number,
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
  attacks: Attack[],
  url?: string
}

export interface CombatGroup {
  combatants: {
    [uid: string]: Combatant
  },
  initiative: number,
  type: string,
  focus?: boolean,
  uid: string
}

export interface Spawn {
  uid: string,
  count: number
}

export interface SpawnGroup {
  spawns: Spawn[]
}

export interface Combat {
  encounter: Encounter,
  groups: {
    [uid: string]: CombatGroup
  },
  initiative: number
}

export interface Encounter {
  name: string,
  groups: SpawnGroup[]
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

export interface ImageMetadata {
  lastModified: number,
  type: string,
  size: number,
  url?: string,
  storageKey: string
}

export interface ImageContentStore {
  [key: string]: string
}

export interface ImageMetaStore {
  thumbnail?: {
    [uid: string]: ImageMetadata
  },
  portrait?: {
    [uid: string]: ImageMetadata
  }
}