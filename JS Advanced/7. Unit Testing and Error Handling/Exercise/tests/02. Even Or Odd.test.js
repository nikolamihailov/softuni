const { expect } = require("chai");
const { isOddOrEven } = require("../02. Even Or Odd");

describe("isOddOrEven function", () => {
    it("should return undefined for input of type array", () => {
        expect(isOddOrEven(["str", 2])).to.be.undefined;
    });
    it("should return undefined for input of type number", () => {
        expect(isOddOrEven(42)).to.be.undefined;
    });
    it("should return even for input of type string with even length", () => {
        expect(isOddOrEven("word")).to.equal("even");
    });
    it("should return odd for input of type string with odd length", () => {
        expect(isOddOrEven("top")).to.equal("odd");
    });
});