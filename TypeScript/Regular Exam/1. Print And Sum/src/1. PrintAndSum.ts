function printAndSum(startNum: number, endNum: number): void {
  const nums: number[] = [];
  let sum: number = 0;

  for (let i = startNum; i <= endNum; i++) {
    nums.push(i);
    sum += i;
  }
  console.log(nums.join(" "));
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
