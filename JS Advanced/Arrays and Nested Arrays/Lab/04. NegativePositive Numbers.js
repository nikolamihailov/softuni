function negativePositive(arr) {
    const resArr = [];
    for (const el of arr) {
        el >= 0 ? resArr.push(el) : resArr.unshift(el);
    }
    console.log(resArr.join("\n"));
}
negativePositive([7, -2, 8, 9]);
