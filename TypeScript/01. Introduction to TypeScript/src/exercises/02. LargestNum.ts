function largestNum(a: number, b: number, c: number): string {
  const allNums: number[] = [a, b, c];
  const largest: number = allNums.sort((a, b) => b - a)[0];
  return `The largest num is ${largest}.`;
}

console.log(largestNum(5, -3, 16));
console.log(largestNum(-3, -5, -22.5));
