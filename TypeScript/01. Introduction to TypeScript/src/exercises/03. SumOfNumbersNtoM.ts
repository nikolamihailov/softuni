function sumOfNumbersNtoM(n: string, m: string): number {
  let sum: number = 0;
  for (let i = Number(n); i <= Number(m); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbersNtoM("1", "5"));
console.log(sumOfNumbersNtoM("-8", "20"));
