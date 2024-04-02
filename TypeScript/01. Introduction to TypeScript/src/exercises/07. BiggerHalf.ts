function betterHalf(nums: number[]): number[] {
  const half: number = Math.ceil(nums.length / 2);
  return nums.sort((a, b) => a - b).slice(half);
}

console.log(betterHalf([4, 7, 2, 5]));
console.log(betterHalf([7, 14, 19, 19]));
