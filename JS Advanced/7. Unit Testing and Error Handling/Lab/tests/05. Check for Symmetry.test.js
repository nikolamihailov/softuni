const { expect } = require("chai");
const isSymmetric = require("../05. Check for Symmetry");

describe("symmetric function", function () {
    it("should not work with input of type string", function () {
        expect(isSymmetric("str")).to.be.false;
    });
    it("should not work with input of type floating number", function () {
        expect(isSymmetric(42.6)).to.be.false;
    });
    it("should not work with input of type number", function () {
        expect(isSymmetric(150)).to.be.false;
    });
    it("should return true with symmetric numeric array", function () {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it("should return true with symmetric string array", function () {
        expect(isSymmetric(["c", "x", "c"])).to.be.true;
    });
    it("should return false with asymmetric numeric array", function () {
        expect(isSymmetric([189, 2, 5])).to.be.false;
    });
    it("should return false with symmetric but mismatched types array", function () {
        expect(isSymmetric(["10", 2, 2, 10])).to.be.false;
    });
});