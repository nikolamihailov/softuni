function aggregateElements(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const sumTwo = arr.reduce((a, b) => a + 1 / b, 0);
    const concat = arr.join("");
    console.log(`${sum}\n${sumTwo}\n${concat}`);
}
aggregateElements([1, 2, 3]);