function cookingByNums(number, ...operations) {
    let num = Number(number);
    const operationsO = {
        "chop": () => num /= 2,
        "dice": () => num = Math.sqrt(num),
        "spice": () => num += 1,
        "bake": () => num *= 3,
        "fillet": () => num -= num * 0.2
    };
    for (const operation of operations) {
        operationsO[operation]();
        console.log(num);
    }
}
cookingByNums('9', 'dice', 'spice', 'chop', 'bake',
    'fillet');