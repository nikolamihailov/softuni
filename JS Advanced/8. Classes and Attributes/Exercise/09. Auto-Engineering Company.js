function autoEngineeringCompany(cars) {
    const carBrands = {};
    for (const line of cars) {
        const [brand, model, producedCars] = line.split(" | ");
        if (!carBrands.hasOwnProperty(brand)) {
            carBrands[brand] = [];
        }
        const car = carBrands[brand].find(car => car.model === model);
        if (car) {
            car.producedCars += Number(producedCars);
            continue;
        }
        carBrands[brand].push({ model, producedCars: Number(producedCars) });
    }
    for (const [brand, models] of Object.entries(carBrands)) {
        console.log(`${brand}`);
        console.log(`${models.map(m => `###${m.model} -> ${m.producedCars}`).join("\n")}`);
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);