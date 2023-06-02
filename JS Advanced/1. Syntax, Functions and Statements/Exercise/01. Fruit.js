function fruit(fruitType, weightInGrams, pricePerKg) {
    console.log(`I need $${((weightInGrams / 1000) * pricePerKg).toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);