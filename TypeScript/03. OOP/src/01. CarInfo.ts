interface Car {
  brand: string;
  model: string;
  horsePower: number;
}

class CarInfo implements Car {
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
      this.brand = brand;
    }
  }
  public set model(brand: string) {
    if (brand.trim() !== "") {
      this.brand = brand;
    }
  }

  public get model(): string {
    return this.model;
  }

  public get horsePower(): number {
    return this._horsePower;
  }
}
