class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
        if (this.innerLength < 0) this.innerLength = 0;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) this.innerLength = 0;
    }

    toString() {
        if (this.innerLength === 0) {
            return "...";
        } else if (this.innerString.length > this.innerLength) {
            const diff = this.innerString.length - this.innerLength;
            const result = this.innerString.slice(0, this.innerLength) + (".").repeat(diff);
            return result;
        } else {
            return this.innerString;
        }
    }
}
const test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test