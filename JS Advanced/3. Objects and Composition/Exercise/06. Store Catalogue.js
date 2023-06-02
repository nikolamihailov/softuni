function storeCatalogue(arr) {
    const products = [];
    for (const productInfo of arr) {
        const [name, price] = productInfo.split(" : ");
        products.push({ name, price: Number(price) });
    }
    products.sort((a, b) => (a.name).localeCompare(b.name));
    let firstLetter = products[0].name[0];
    console.log(firstLetter);
    for (const [idx, { name, price }] of Object.entries(products)) {
        if (firstLetter !== name[0]) {
            firstLetter = name[0];
            console.log(firstLetter);
        }
        console.log(`  ${name}: ${price}`);
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);