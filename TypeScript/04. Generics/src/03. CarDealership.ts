interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar: (dealerId: T, model: T) => void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
  modelsSold = {};
  soldCars = 0;
  dealershipName: T;

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
  }

  sellCar(dealerId: T, model: T) {
    this.modelsSold[dealerId.toString()] = model;
    this.soldCars++;
  }

  showDetails(): string {
    const report = [];
    report.push(this.dealershipName + ":");
    for (const [dealerId, model] of Object.entries(this.modelsSold)) {
      report.push(`${dealerId} sold ${model}`);
    }
    return report.join("\n");
  }
}

const dealership = new CarDealership("SilverStar");

dealership.sellCar("BG01", "C Class");

dealership.sellCar("BG02", "S Class");

dealership.sellCar("BG03", "ML Class");

dealership.sellCar("BG04", "CLK Class");

console.log(dealership.showDetails());
