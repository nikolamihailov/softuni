function add(num) {
    let sum = num;

    function addAgain(num2) {
        sum += num2;
        return addAgain;
    };

    addAgain.toString = function () {
        return sum;
    };

    return addAgain;
}
console.log(add(5)(45).toString());