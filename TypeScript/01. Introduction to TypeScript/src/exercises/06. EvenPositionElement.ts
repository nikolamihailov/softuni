function findEvenPositionElement(arr: string[]): string {
  return arr
    .map((el, idx) => (idx % 2 == 0 ? el : ""))
    .filter((el) => el !== "")
    .join(" ");
}

console.log(findEvenPositionElement(["20", "30", "40", "50", "60"]));
console.log(findEvenPositionElement(["5", "10"]));
