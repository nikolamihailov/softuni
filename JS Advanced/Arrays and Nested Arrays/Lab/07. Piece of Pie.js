function pieceOfPie(arr, start, end) {
    const startIndex = arr.indexOf(start);
    const endIndex = arr.indexOf(end) + 1;
    return arr.slice(startIndex, endIndex);
}
const res = pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
console.log(res);