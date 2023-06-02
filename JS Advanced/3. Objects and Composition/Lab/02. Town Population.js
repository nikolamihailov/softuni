function townPopulation(arr) {
    const towns = {};
    for (const townInfo of arr) {
        const [name, population] = townInfo.split(" <-> ");
        if (!towns.hasOwnProperty(name)) {
            towns[name] = Number(population);
        } else {
            towns[name] += Number(population);
        }
    }
    for (const [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }
}