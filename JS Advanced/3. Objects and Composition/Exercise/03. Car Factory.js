function carFactory(obj) {
    const engineTypes = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    };
    const car = {
        model: obj.model
    };
    if (obj.power <= 90) {
        car.engine = engineTypes.small;
    } else if (obj.power > 90 && obj.power < 200) {
        car.engine = engineTypes.normal;
    } if (obj.power >= 200) {
        car.engine = engineTypes.monster;
    }

    if (obj.carriage === "hatchback") {
        car.carriage = { type: "hatchback", color: obj.color };
    } else if (obj.carriage === "coupe") {
        car.carriage = { type: "coupe", color: obj.color };
    }
    let wS = obj.wheelsize;
    if (wS % 2 === 0) {
        wS--;
    }
    car.wheels = [wS, wS, wS, wS];
    return car;
}
const res = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log(res);