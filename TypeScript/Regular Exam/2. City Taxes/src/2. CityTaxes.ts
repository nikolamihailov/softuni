interface CityInfo {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => void;
  applyGrowth: (percent: number) => void;
  applyRecession: (percent: number) => void;
}

function cityTaxes(cityName: string, population: number, treasury: number) {
  class City implements CityInfo {
    name: string;
    population: number;
    treasury: number;
    taxRate: number = 10;

    constructor(name: string, population: number, treasury: number) {
      this.name = name;
      this.population = population;
      this.treasury = treasury;
    }

    collectTaxes(): void {
      this.treasury += Math.floor(this.population * this.taxRate);
    }

    applyGrowth(percent: number): void {
      this.population += Math.floor(this.population * (percent / 100));
    }

    applyRecession(percent: number): void {
      this.treasury -= Math.floor(this.treasury * (percent / 100));
    }
  }

  const city: CityInfo = new City(cityName, population, treasury);
  return city;
}

/* const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
 */

const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
