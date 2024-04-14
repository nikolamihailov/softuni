type Town = {
  town: string;
  latitude: string;
  longitude: string;
};

function printTowns(townsInfo: string[]): Town[] {
  const towns: Town[] = [];

  townsInfo.forEach((townInfo) => {
    const [townName, latitude, longitude] = townInfo.split(" | ");
    const town: Town = {
      town: townName,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    towns.push(town);
  });

  return towns;
}
console.log(printTowwsn(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]));
