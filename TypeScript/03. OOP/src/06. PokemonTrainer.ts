interface PokemonInfo {
  name: string;
  element: string;
  health: number;
}

interface TrainerInfo {
  name: string;
  badges: number;
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  reduceHealthAndRemoveDead: () => void;
  hasPokemonOfType: (type: string) => boolean;
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

  set health(health: number) {
    this._health = health;
  }
}

class Trainer implements TrainerInfo {
  private _name: string;
  private _badges: number = 0;
  private _pokemons: Pokemon[] = [];

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

  set badges(badges: number) {
    this._badges = badges;
  }

  addPokemon(pokemon: Pokemon) {
    this._pokemons.push(pokemon);
  }

  hasPokemonOfType(type: string): boolean {
    let hasType: boolean = false;
    this._pokemons.forEach((p) => {
      if (p.element === type) {
        hasType = true;
        return hasType;
      }
    });
    return hasType;
  }

  reduceHealthAndRemoveDead() {
    this._pokemons = this._pokemons
      .map((p) => {
        return new Pokemon(p.name, p.element, p.health - 10);
      })
      .filter((p) => p.health > 0);
  }
}

function pokemonGame(lines: string[]): string {
  const trainers: Trainer[] = [];
  const idxTrainersEnd = lines.indexOf("Tournament");

  const allTrainers = lines.splice(0, idxTrainersEnd);
  const commands = lines.splice(1);

  allTrainers.forEach((trainerInfo) => {
    const [trainerName, pokemonName, pokemonElement, pokemonHealth] = trainerInfo.split(" ");
    const trainerIdx = trainers.findIndex((tr) => tr.name === trainerName);

    const pokemon = new Pokemon(pokemonName, pokemonElement, +pokemonHealth);

    if (trainerIdx !== -1) trainers[trainerIdx].addPokemon(pokemon);
    if (trainerIdx === -1) {
      const trainer = new Trainer(trainerName);
      trainer.addPokemon(pokemon);
      trainers.push(trainer);
    }
  });

  commands.forEach((command) => {
    switch (command) {
      case "Fire":
      case "Water":
      case "Electricity":
        trainers.forEach((trainer) => {
          if (!trainer.hasPokemonOfType(command)) {
            trainer.reduceHealthAndRemoveDead();
          }
          if (trainer.hasPokemonOfType(command)) {
            trainer.badges++;
          }
        });
        break;
      default:
        break;
    }
  });

  return trainers
    .sort((a, b) => b.badges - a.badges)
    .map((tr) => `${tr.name} ${tr.badges} ${tr.pokemons.length}`)
    .join("\n");
}

const results = pokemonGame([
  "Peter Charizard Fire 100",
  "George Squirtle Water 38",
  "Peter Pikachu Electricity 10",
  "Tournament",
  "Fire",
  "Electricity",
  "End",
]);
console.log(results);
