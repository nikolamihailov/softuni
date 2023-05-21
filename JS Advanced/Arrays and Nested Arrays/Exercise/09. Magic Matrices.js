function magicMatrix(arr) {
    let magicNumberR = 0;
    let magicNumberC = 0;
    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        let columnSum = 0;
        for (let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
            columnSum += arr[j][i];
            if (i === 0) {
                magicNumberR = rowSum;
                magicNumberC = columnSum;
            }
        }
        if (rowSum !== columnSum || rowSum !== magicNumberR || columnSum != magicNumberC) {
            return console.log("false");
        }
    }
    console.log("true");
}