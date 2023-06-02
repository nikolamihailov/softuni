function lastKSeq(n, k) {
    const arr = [1];
    for (let i = 0; i < n - 1; i++) {
        const newEl = arr.slice(-k).reduce((a, b) => a + b, 0);
        arr.push(newEl);
    }
    return arr;
}
lastKSeq(6, 3);