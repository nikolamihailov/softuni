interface CarInfo {
  brand: string;
  model: string;
  horsePower: number;
  printCarInfo: () => void;
}

class Car implements CarInfo {
  private _brand: string;
  private _model: string;
  private _horsePower: number;

  constructor(brand: string, model: string, horsePower: number) {
    this._brand = brand;
    this._model = model;
    this._horsePower = horsePower;
  }

  public get brand(): string {
    return this._brand;
  }

  public set brand(brand: string) {
    if (brand.trim() !== "") {
      this._brand = brand;
    }
  }

  public get model(): string {
    return this._model;
  }

  public set model(model: string) {
    if (model.trim() !== "") {
      this._model = model;
    }
  }

  public get horsePower(): number {
    return this._horsePower;
  }

  public set horsePower(horsePower: number) {
    if (horsePower > 0) {
      this._horsePower = horsePower;
    }
  }

  printCarInfo(): void {
    console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`);
  }
}

const input: string = "Chevrolet Impala 390";
const [brand, model, horsePower] = input.split(" ");
const carOne = new Car(brand, model, Number(horsePower));
carOne.printCarInfo();
