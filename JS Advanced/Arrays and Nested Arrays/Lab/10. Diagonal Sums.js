function diagonalSums(arr) {
    let d1 = 0, d2 = 0;
    for (let i = 0; i < arr.length; i++) {
        d1 += arr[i][i];
        d2 += arr[i][arr.length - 1 - i];
    }
    console.log(`${d1} ${d2}`);
}
diagonalSums([[3, 5, 17], [-1, 7, 14],
[1, -8, 89]]);