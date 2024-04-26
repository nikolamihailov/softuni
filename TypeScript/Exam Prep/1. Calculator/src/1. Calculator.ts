function calculatorTwoNums(numOne: number, operator: string, numTwo: number): string {
  const operations = {
    "+": (a: number, b: number) => (a + b).toFixed(2),
    "-": (a: number, b: number) => (a - b).toFixed(2),
    "*": (a: number, b: number) => (a * b).toFixed(2),
    "/": (a: number, b: number) => {
      if (b === 0) throw new Error("Cannot devide by 0!");
      return (a / b).toFixed(2);
    },
  };

  if (!operations[operator]) throw new Error("Invalid operator!");

  return operations[operator](numOne, numTwo);
}

// const res1 = calculatorTwoNums(5, "f", 10);
const res2 = calculatorTwoNums(5, "+", 10);
const res3 = calculatorTwoNums(5, "-", 10);
const res4 = calculatorTwoNums(5, "*", 10);
const res5 = calculatorTwoNums(5, "/", 10);
// const res6 = calculatorTwoNums(5, "/", 0);
console.log(res2, res3, res4, res5);
