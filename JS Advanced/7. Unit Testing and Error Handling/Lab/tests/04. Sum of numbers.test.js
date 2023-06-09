const { expect } = require("chai");
const sum = require("../04. Sum of Numbers");

describe("sum function", function () {
    it("should sum negative nums and floating nums", function () {
        const arr = [-5, 1.6, 10];
        const result = sum(arr);
        expect(result).to.equal(6.6);
    });
});