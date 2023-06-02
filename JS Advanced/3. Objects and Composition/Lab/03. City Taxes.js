function cityTaxes(cityName, cityPopulation, cityTreasury) {
    const cityRecord = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population *= (1 + percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury *= (1 - percentage / 100);
        }
    };
    return cityRecord;
}