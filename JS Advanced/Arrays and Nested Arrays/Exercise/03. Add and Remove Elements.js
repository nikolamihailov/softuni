function addRemoveElements(arr) {
    let initial = 0;
    const resArr = [];
    for (const el of arr) {
        initial++;
        if (el === "add") {
            resArr.push(initial);
        } else {
            resArr.pop();
        }
    }
    if (resArr.length > 0) return resArr.join("\n");
    else return "Empty";
}
console.log(addRemoveElements(['remove',
    'remove',
    'remove'])); 