import { Drink } from "./Drink";

interface VendingMachineInfo {
  buttonCapacity: number;
  drinks: Drink[];
  addDrink: (drink: Drink) => void;
  removeDrink: (name: string) => boolean;
  getLongest: () => string;
  getCheapest: () => string;
  buyDrink: (name: string) => string;
  report: () => string;
}

export class VendingMachine implements VendingMachineInfo {
  private _buttonCapacity: number;
  private _drinks: Drink[] = [];

  constructor(buttonCapacity: number) {
    this._buttonCapacity = buttonCapacity;
  }

  get buttonCapacity(): number {
    return this._buttonCapacity;
  }

  get drinks(): Drink[] {
    return this._drinks;
  }

  get getCount(): number {
    return this.drinks.length;
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) this.drinks.push(drink);
  }

  removeDrink(name: string): boolean {
    const idx = this.drinks.findIndex((drink) => drink.name === name);

    if (idx !== -1) {
      this.drinks.splice(idx, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    if (this.drinks.length === 1) return this.drinks[0].toString();
    const drink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
    return drink.toString();
  }

  getCheapest(): string {
    if (this.drinks.length === 1) return this.drinks[0].toString();
    const drink = [...this.drinks].sort((a, b) => a.price - b.price)[0];
    return drink.toString();
  }

  buyDrink(name: string): string {
    const drink = this.drinks.find((drink) => drink.name === name);
    return drink.toString();
  }

  report(): string {
    const drrinksInfo = [...this.drinks].map((drink) => drink.toString()).join("\n");
    return `Drinks available:\n${drrinksInfo}`;
  }
}
