interface DrinkInfo {
  name: string;
  price: number;
  volume: number;
}

export class Drink implements DrinkInfo {
  private _name: string;
  private _price: number;
  private _volume: number;

  constructor(name: string, price: number, volume: number) {
    this._name = name;
    this._price = price;
    this._volume = volume;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(volume: number) {
    this._volume = volume;
  }

  toString(): string {
    return `Name: ${this.name}, Price: $${this.price.toFixed(1)}, Volume: ${this.volume} ml`;
  }
}
