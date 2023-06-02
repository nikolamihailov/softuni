function timeToWalk(steps, stepLength, speedKmPerHour) {
    const distanceInKm = (stepLength * steps) / 1000;
    const time = distanceInKm / speedKmPerHour;
    const hours = Math.floor(time);
    const minutes = (time - hours) * 60;
    const seconds = (minutes - Math.floor(minutes)) * 60;
    const additionalTime = Math.floor(distanceInKm * 1000 / 500);
    const format = (time) => time < 10 ? "0" + time : time;
    console.log(`${format(hours)}:${format(Math.floor(minutes + additionalTime))}:${format(Math.ceil(seconds))}`);
}
timeToWalk(4000, 0.60, 5);