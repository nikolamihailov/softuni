function jansNotation(arr) {
    const nums = [];
    while (arr.length > 0) {
        const el = arr.shift();
        if (typeof el === "number") {
            nums.push(el);
            continue;
        } else {
            const numTwo = nums.pop();
            const numOne = nums.pop();
            if (numOne === undefined || numTwo === undefined) {
                return console.log("Error: not enough operands!");
            }
            switch (el) {
                case "+":
                    nums.push(numOne + numTwo);
                    break;
                case "-":
                    nums.push(numOne - numTwo);
                    break;
                case "*":
                    nums.push(numOne * numTwo);
                    break;
                case "/":
                    nums.push(numOne / numTwo);
                    break;
            }
        }
    }
    if (nums.length > 1) {
        return console.log("Error: too many operands!");
    }
    console.log(nums[0]);
}
