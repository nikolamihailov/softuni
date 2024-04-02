function aggregateElements(nums: number[]): string {
  const result: number[] = [];
  const sumOne: number = nums.reduce((acc: number, el: number) => acc + el, 0);
  const sumTwo: number = nums.reduce((acc: number, el: number) => acc + 1 / el, 0);
  const concat: number = Number(nums.join(""));
  result.push(sumOne, sumTwo, concat);
  return result.join("\n");
}

console.log(aggregateElements([1, 2, 3]));
console.log(aggregateElements([2, 4, 8, 16]));
