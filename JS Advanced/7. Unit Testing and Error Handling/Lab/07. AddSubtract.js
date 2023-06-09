function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    };
}

const myCalc = createCalculator();
myCalc.add(10);
myCalc.add(10);
myCalc.subtract(7);
console.log(myCalc.get());
module.exports = { createCalculator };