function orbit(arr) {
    let matrixWidth = arr.shift();
    let matrixHeight = arr.shift();
    let oneX = arr.shift();
    let oneY = arr.shift();
    let start = 1;
    let orbitMatrix = new Array(matrixWidth).fill(0).map(() => new Array(matrixHeight).fill(0));
    orbitMatrix[oneX][oneY] = start;
    start++;

    for (let i = 0; i < matrixWidth; i++) {
        for (let j = 0; j < matrixHeight; j++) {
            orbitMatrix[i][j] = Math.max(Math.abs(i - oneX) + 1, Math.abs(j - oneY) + 1);
        }
    }
    for (let i = 0; i < orbitMatrix.length; i++) {
        let result = "";
        for (let j = 0; j < orbitMatrix.length; j++) {
            result += `${orbitMatrix[i][j]} `;
        }
        console.log(result);
    }
}