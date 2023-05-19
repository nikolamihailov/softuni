function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice(-Math.ceil(arr.length / 2));
}
const res = biggerHalf([3, 19, 14, 7, 2, 19, 6]);
console.log(res);