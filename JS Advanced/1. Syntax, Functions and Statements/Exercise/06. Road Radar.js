function roadRadar(speed, area) {
    const areaLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    };
    if (speed <= areaLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
    } else {
        let status = "reckless driving";
        if (speed > areaLimits[area] + 20 && speed <= areaLimits[area] + 40) {
            status = "excessive speeding";
        } else if (speed <= areaLimits[area] + 20) {
            status = "speeding";
        }
        console.log(`The speed is ${speed - areaLimits[area]} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`);
    }
}
roadRadar(200, 'motorway');