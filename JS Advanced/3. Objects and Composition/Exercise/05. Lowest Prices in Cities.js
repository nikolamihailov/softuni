function lowestPrices(arr) {
    const products = {};
    for (const info of arr) {
        const [town, product, price] = info.split(" | ");
        if (products.hasOwnProperty(product)) {
            if (products[product].price > Number(price)) {
                products[product].town = town;
                products[product].price = Number(price);
            }
        } else {
            products[product] = {};
            products[product].town = town;
            products[product].price = Number(price);
        }
    }
    for (const [product, info] of Object.entries(products)) {
        console.log(`${product} -> ${info.price} (${info.town})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);