function mathOperations(a: number, b: number, operation: string): number {
  const operations = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    },
    "%": () => {
      if (b === 0) {
        throw new Error("Modulo by zero is not allowed.");
      }
      return a % b;
    },
    "**": () => a ** b,
  };

  return operations[operation]();
}

console.log(mathOperations(5, 6, "+"));
console.log(mathOperations(3, 5.5, "*"));
