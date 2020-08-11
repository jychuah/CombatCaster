export interface Combatant {
  ac: number,
  maxHP: number,
  name: string,
  currentHP?: number,
  portrait?: any,
  uid: string,
}

export interface Attack {
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

export interface Group {
  combatants: Combatant[],
  initiative: number,
  visible: boolean
}

export interface Combat {
  encounterUid: string,
  groups: Group[]
}

export interface Encounter {
  uid: string,
  name: string,
  combatants: Combatant[],
  groups: Group[],
}

export interface AppData {
  players: Player[],
  monsters: Monster[],
  encounters: Encounter[],
  combat: Combat,
}