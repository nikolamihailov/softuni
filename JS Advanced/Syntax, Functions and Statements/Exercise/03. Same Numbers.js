function sameNums(num) {
    const numS = num.toString().split("");
    console.log(numS.every(el => el === numS[0]));
    console.log(numS.reduce((sum, num) => sum + Number(num), 0));
}
sameNums(2222222);