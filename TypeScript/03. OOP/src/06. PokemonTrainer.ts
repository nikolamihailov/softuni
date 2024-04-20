interface PokemonInfo {
  name: string;
  element: string;
  health: number;
}

interface TrainerInfo {
  name: string;
  badges: number;
  pokemons: Pokemon[];
}

class Pokemon implements PokemonInfo {
  private _name: string;
  private _element: string;
  private _health: number;

  constructor(name: string, element: string, health: number) {
    this._name = name;
    this._element = element;
    this._health = health;
  }

  get name(): string {
    return this._name;
  }

  get element(): string {
    return this._element;
  }

  get health(): number {
    return this._health;
  }
}

class Trainer implements TrainerInfo {
  private _name: string;
  private _badges: number = 0;
  private _pokemons: Pokemon[];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get badges(): number {
    return this._badges;
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }
}
