function sumOfNums(n, m) {
    let sum = 0;
    const start = Number(n);
    const end = Number(m);
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNums('-8', '20');