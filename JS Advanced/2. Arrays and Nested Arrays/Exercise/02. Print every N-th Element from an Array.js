function printhNthElement(arr, step) {
    const resArr = [];
    for (let i = 0; i < arr.length; i += step) {
        resArr.push(arr[i]);
    }
    return resArr;
}
const res = printhNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
console.log(res);