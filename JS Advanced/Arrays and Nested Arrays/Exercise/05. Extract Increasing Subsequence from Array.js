function extractIncrSeq(arr) {
    let biggest = arr[0];
    return arr.reduce((acc, current) => {
        if (current >= biggest) {
            acc.push(current);
            biggest = current;
        }
        return acc;
    }, []);
}
const res = extractIncrSeq([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
console.log(res);