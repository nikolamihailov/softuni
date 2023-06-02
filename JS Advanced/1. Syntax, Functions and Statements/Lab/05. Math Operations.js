function mathOperations(a, b, operation) {
    const operations = {
        "+": () => a + b,
        "-": () => a - b,
        "*": () => a * b,
        "/": () => a / b,
        "%": () => a % b,
        "**": () => a ** b
    };
    console.log(operations[operation]());
}
mathOperations(3, 5.5, '*');