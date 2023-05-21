function ticTacToe(arr) {
    const dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let turn = "X";
    for (const position of arr) {
        let [row, col] = position.split(" ");
        row = Number(row); col = Number(col);
        if (dashboard[row][col] === false) {
            dashboard[row][col] = turn;
            if (checkForDraw(dashboard)) {
                console.log("The game ended! Nobody wins :(");
                let finalState = "";
                for (let i = 0; i < dashboard.length; i++) {
                    for (let j = 0; j < dashboard[i].length; j++) {
                        finalState += dashboard[i][j] + "\t";
                    }
                    finalState += "\n";
                }
                console.log(finalState);
                return;
            }
            if (checkForWinner(dashboard, turn)) {
                console.log(`Player ${turn} wins!`);
                let finalState = "";
                for (let i = 0; i < dashboard.length; i++) {
                    for (let j = 0; j < dashboard[i].length; j++) {
                        finalState += dashboard[i][j] + "\t";
                    }
                    finalState += "\n";
                }
                console.log(finalState);
                return;
            }
            turn === "X" ? turn = "O" : turn = "X";
        } else {
            console.log("This place is already taken. Please choose another!");
        }
    }

    function checkForWinner(gameboard, turn) {
        if (gameboard[0][0] === turn
            && gameboard[0][1] === turn
            && gameboard[0][2] === turn) {
            return true;
        } else if (gameboard[1][0] === turn
            && gameboard[1][1] === turn
            && gameboard[1][2] === turn) {
            return true;
        } else if (gameboard[2][0] === turn
            && gameboard[2][1] === turn
            && gameboard[2][2] === turn) {
            return true;
        } else if (gameboard[0][0] === turn
            && gameboard[1][0] === turn
            && gameboard[2][0] === turn) {
            return true;
        } else if (gameboard[0][1] === turn
            && gameboard[1][1] === turn
            && gameboard[2][1] === turn) {
            return true;
        } else if (gameboard[0][2] === turn
            && gameboard[1][2] === turn
            && gameboard[2][2] === turn) {
            return true;
        } else if (gameboard[0][0] === turn
            && gameboard[1][1] === turn
            && gameboard[2][2] === turn) {
            return true;
        } else if (gameboard[0][2] === turn
            && gameboard[1][1] === turn
            && gameboard[2][0] === turn) {
            return true;
        } else {
            return false;
        }
    }
    function checkForDraw(gameboard) {
        const allFields = [];
        for (let i = 0; i < gameboard.length; i++) {
            for (let j = 0; j < gameboard[i].length; j++) {
                allFields.push(gameboard[i][j]);
            }
        }
        const haveDraw = allFields.every(el => el !== false);
        if (haveDraw) return true;
        else return false;
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log("-------------");
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
console.log("-------------");
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
