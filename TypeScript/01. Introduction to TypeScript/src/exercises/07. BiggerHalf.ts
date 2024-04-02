function biggerHalf(nums: number[]): number[] {
  const half: number = Math.floor(nums.length / 2);
  return nums.sort((a, b) => a - b).slice(half);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
