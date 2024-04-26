type ProductInfo = {
  cityFromName: string;
  productPrice: number;
};

function lowestPricesInCities(citiesInfo: string[]): string {
  const lowestPricedProducts = new Map();

  citiesInfo.forEach((cityInfo) => {
    const [name, productName, productPrice] = cityInfo.split(" | ");

    const productInfo: ProductInfo = {
      cityFromName: name,
      productPrice: Number(productPrice),
    };

    if (
      lowestPricedProducts.has(productName) &&
      lowestPricedProducts.get(productName).productPrice > Number(productPrice)
    ) {
      lowestPricedProducts.set(productName, productInfo);
    }

    if (!lowestPricedProducts.has(productName)) {
      lowestPricedProducts.set(productName, productInfo);
    }
  });

  const results: string[] = [];
  for (const [productName, { cityFromName, productPrice }] of lowestPricedProducts) {
    results.push(`${productName} -> ${productPrice} (${cityFromName})`);
  }
  return results.join("\n");
}

console.log(
  lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 0.1",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
