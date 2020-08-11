export interface Combatant {
  ac: number,
  maxHP: number,
  name: string,
  currentHP?: number,
  intiative?: number,
  portrait?: any,
  id: number
}

export interface Player extends Combatant {
}

export interface Monster extends Combatant {
}

export interface Encounter {
  combatants: Combatant[]
  monsters: Monster[]
}

export interface AppData {
  players: Player[],
  monsters: Monster[],
  encounters: Encounter[],
}