function diagonalAttack(arr) {
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        let numEl = arr[i].split(' ').map(Number);
        numArr.push(numEl);
    }
    let diagonalOne = 0;
    let diagonalTwo = 0;
    for (let j = 0; j < numArr.length; j++) {
        diagonalOne += numArr[j][j];
        diagonalTwo += numArr[j][(numArr.length - 1) - j];
    }
    let row = "";
    if (diagonalOne === diagonalTwo) {
        for (let l = 0; l < numArr.length; l++) {
            for (let m = 0; m < numArr[l].length; m++) {
                if (l === m || m === (numArr.length - 1) - l) {
                    row += `${numArr[l][m]} `;
                } else {
                    row += `${diagonalOne} `;
                }
            }
            console.log(row);
            row = "";
        }
    } else {
        for (let l = 0; l < numArr.length; l++) {
            for (let m = 0; m < numArr[l].length; m++) {
                row += `${numArr[l][m]} `;
            }
            console.log(row);
            row = "";
        }
    }
}