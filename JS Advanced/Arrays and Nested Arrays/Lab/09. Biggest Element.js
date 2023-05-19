function biggestEl(arr) {
    const oneArr = arr.flatMap(subArray => subArray);
    const largestNum = Math.max(...oneArr);
    return largestNum;
}
function biggestEl(matrix) {
    const res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            res.push(matrix[i][j]);
        }
    }
    console.log(res.sort((a, b) => b - a)[0]);
}
const res = biggestElement([[20, 50, 10],
[8, 33, 145]]);
console.log(res);
