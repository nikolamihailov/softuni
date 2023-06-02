function sortingNums(arr) {
    arr.sort((a, b) => a - b);
    const copy = arr.slice();
    const resArr = [];
    for (let i = 0; i < copy.length; i++) {
        i % 2 === 0 ? resArr.push(arr.shift()) : resArr.push(arr.pop());
    }
    return resArr;
}
const res = sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(res);