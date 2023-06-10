function juiceFlavors(arr) {
    const juices = {};
    const bottlesM = new Map();
    for (const line of arr) {
        const [flavor, quantity] = line.split(" => ");
        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = {};
            juices[flavor].quantity = 0;
        }
        juices[flavor].quantity += Number(quantity);
        if (juices[flavor].quantity >= 1000) {
            const bottles = Math.floor(juices[flavor].quantity / 1000);
            juices[flavor].quantity -= bottles * 1000;
            if (bottlesM.has(flavor)) {
                const newValue = bottlesM.get(flavor) + bottles;
                bottlesM.set(flavor, newValue);
            } else {
                bottlesM.set(flavor, bottles);
            }
        }
    }
    for (const [key, value] of bottlesM) {
        console.log(`${key} => ${value}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
console.log("----------------");
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);