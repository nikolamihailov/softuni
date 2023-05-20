function equalNeighbors(arr) {
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j < arr[i].length - 1 && arr[i][j] === arr[i][j + 1]) pairs++;
            if (i < arr.length - 1 && arr[i][j] === arr[i + 1][j]) pairs++;
        }
    }
    console.log(pairs);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
console.log("-----------");
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
console.log("-----------");
equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 5, 5]]);