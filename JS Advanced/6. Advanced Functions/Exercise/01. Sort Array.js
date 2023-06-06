function sortArr(arr, sortKind) {
    if (sortKind === "asc") return arr.sort((a, b) => a - b);
    if (sortKind === "desc") return arr.sort((a, b) => b - a);
}
const sorted = sortArr([14, 7, 17, 6, 8], 'desc');
console.log(sorted);