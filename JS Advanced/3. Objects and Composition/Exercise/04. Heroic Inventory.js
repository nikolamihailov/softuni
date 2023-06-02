function heroicInventory(arr) {
    const heroes = [];
    for (const heroInfo of arr) {
        const [name, level, allItems] = heroInfo.split(" / ");
        if (allItems) {
            const items = allItems.split(", ");
            heroes.push({ name, level: Number(level), items });
            continue;
        }
        heroes.push({ name, level: Number(level), items: [] });
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);