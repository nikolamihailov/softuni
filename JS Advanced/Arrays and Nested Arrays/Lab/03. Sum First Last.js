function sumFirstLast(arr) {
    return Number(arr[0]) + Number(arr.pop());
}
const res = sumFirstLast(['20', '30', '40']);
console.log(res);