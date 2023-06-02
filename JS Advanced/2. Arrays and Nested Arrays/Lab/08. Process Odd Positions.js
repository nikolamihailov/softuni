function processOddPositions(arr) {
    return arr.filter((v, i) => i % 2 !== 0).map(el => el * 2).reverse().join(" ");
}
const res = processOddPositions([10, 15, 20, 25]);
console.log(res);