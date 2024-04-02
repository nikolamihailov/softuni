function findEvenPositionElement(arr: string[]): string {
  return arr.map((el, idx) => idx % 2 == 0 && el).join(" ");
}

findEvenPositionElement(["20", "30", "40", "50", "60"]);
findEvenPositionElement(["5", "10"]);
