class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }
    plus(param) {
        if (typeof data === "object") {
            const result = this.value + param.value;
            return new Hex(result);
        } else {
            const result = this.value + param;
            return new Hex(result);
        }
    }
    minus(param) {
        if (typeof data === "object") {
            const result = this.value - param.value;
            return new Hex(result);
        } else {
            const result = this.value - param;
            return new Hex(result);
        }
    }
    parse(str) {
        return parseInt(str, 16);
    }
}
const FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
const a = new Hex(10);
const b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));