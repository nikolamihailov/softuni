type City = {
  name: string;
  productName: string;
  productPrice: number;
};

function lowestPricesInCities(cityInfo: string[]): string {
  const cities = new Map();

  cityInfo.forEach((cityInfo) => {
    const [name, productName, productPrice] = cityInfo.split(" | ");
    const city: City = {
      name,
      productName,
      productPrice: Number(productPrice),
    };
    if (cities.has(productName) && cities.get(productName).productPrice > productPrice) {
      cities.get(productName).product;
    }
  });
  return;
}
