function rotateArr(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "));
}
rotateArr(['1',
    '2',
    '3',
    '4'],
    2);