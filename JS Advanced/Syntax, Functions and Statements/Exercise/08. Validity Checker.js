function pointsValidation(x1, y1, x2, y2) {
    let distanceOne = Math.sqrt(Math.pow((x1), 2) + Math.pow((y1), 2));
    let distanceTwo = Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2));
    let distanceBetweenPoints = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (distanceOne % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (distanceTwo % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (distanceBetweenPoints % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation(2, 1, 1, 1);