type TownTwo = {
  name: string;
  population: number;
};

function printTownsRegistry(townsInfo: string[]): string {
  const towns: TownTwo[] = [];
  townsInfo.forEach((townInfo) => {
    const [name, population] = townInfo.split(" <-> ");
    const town = {
      name,
      population: Number(population),
    };

    const idx: number = towns.findIndex((town: TownTwo) => town.name === name);
    if (idx !== -1) {
      towns[idx].population += Number(population);
    } else towns.push(town);
  });

  return towns.map((town) => `${town.name}: ${town.population}`).join("\n");
}

console.log(
  printTownsRegistry([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
  ])
);

console.log(
  printTownsRegistry([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
  ])
);
