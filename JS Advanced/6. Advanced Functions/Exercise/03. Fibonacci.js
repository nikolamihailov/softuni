function getFibonator() {
    const fibSeries = [0];
    return function () {
        if (fibSeries.length === 1) {
            fibSeries.push(1); return 1;
        }
        const newEl = fibSeries.slice(-2).reduce((a, b) => a + b, 0);
        fibSeries.push(newEl);
        return newEl;
    };
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13