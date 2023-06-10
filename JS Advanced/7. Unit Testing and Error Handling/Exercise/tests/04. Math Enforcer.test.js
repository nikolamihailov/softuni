const { expect } = require("chai");
const { mathEnforcer } = require("../04. Math Enforcer");

describe("matEnforcer object", () => {
    it("should have addFive function", () => {
        const obj = mathEnforcer;
        expect(obj).to.have.a.property("addFive").that.is.a('function');
    });
    it("should have subtractTen function", () => {
        const obj = mathEnforcer;
        expect(obj).to.have.a.property("subtractTen").that.is.a('function');
    });
    it("should have sum function", () => {
        const obj = mathEnforcer;
        expect(obj).to.have.a.property("sum").that.is.a('function');
    });
    describe("addFive function", () => {
        it("should return undefined with parameter of type not a number", () => {
            const obj = mathEnforcer;
            const res = obj.addFive("str");
            const resTwo = obj.addFive([1, 2, 3]);
            expect(res).to.be.undefined;
            expect(resTwo).to.be.undefined;
        });
        it("should return 10 with parameter 5", () => {
            const obj = mathEnforcer;
            const res = obj.addFive(5);
            expect(res).to.equal(10);
        });
        it("should return 105 with parameter 100", () => {
            const obj = mathEnforcer;
            const res = obj.addFive(100);
            expect(res).to.equal(105);
        });
        it("should be able to work with positive, negative and floating numbers", () => {
            const obj = mathEnforcer;
            const res = obj.addFive(0);
            const resTwo = obj.addFive(-100);
            const resThree = obj.addFive(3.4);
            expect(res).to.equal(5);
            expect(resTwo).to.equal(-95);
            expect(resThree).to.equal(8.4);
        });
    });
    describe("subtractTen function", () => {
        it("should return undefined with parameter of type not a number", () => {
            const obj = mathEnforcer;
            const res = obj.subtractTen("str");
            const resTwo = obj.subtractTen([1, 2, 3]);
            expect(res).to.be.undefined;
            expect(resTwo).to.be.undefined;
        });
        it("should return -5 with parameter 5", () => {
            const obj = mathEnforcer;
            const res = obj.subtractTen(5);
            expect(res).to.equal(-5);
        });
        it("should return 90 with parameter 100", () => {
            const obj = mathEnforcer;
            const res = obj.subtractTen(100);
            expect(res).to.equal(90);
        });
        it("should be able to work with positive, negative and floating numbers", () => {
            const obj = mathEnforcer;
            const res = obj.subtractTen(0);
            const resTwo = obj.subtractTen(-100);
            const resThree = obj.subtractTen(3.4);
            expect(res).to.equal(-10);
            expect(resTwo).to.equal(-110);
            expect(resThree).to.equal(-6.6);
        });
    });
    describe("sum function", () => {
        it("should return undefined with first parameter not a number", () => {
            const obj = mathEnforcer;
            const res = obj.sum(5, "str2");
            const resTwo = obj.sum(5, [3, 2, 1]);
            expect(res).to.be.undefined;
            expect(resTwo).to.be.undefined;
        });
        it("should return undefined with second parameter not a number", () => {
            const obj = mathEnforcer;
            const res = obj.sum("str", 10);
            const resTwo = obj.sum([1, 2, 3], 10);
            expect(res).to.be.undefined;
            expect(resTwo).to.be.undefined;
        });
        it("should return undefined with parameters not of type number", () => {
            const obj = mathEnforcer;
            const res = obj.sum("str", "str2");
            const resTwo = obj.sum([1, 2, 3], [3, 2, 1]);
            expect(res).to.be.undefined;
            expect(resTwo).to.be.undefined;
        });
        it("should return 10 with parameters 5,5", () => {
            const obj = mathEnforcer;
            const res = obj.sum(5, 5);
            expect(res).to.equal(10);
        });
        it("should return 200 with parameter 100, 100", () => {
            const obj = mathEnforcer;
            const res = obj.sum(100, 100);
            expect(res).to.equal(200);
        });
        it("should be able to work with positive, negative and floating numbers", () => {
            const obj = mathEnforcer;
            const res = obj.sum(10, 10);
            const resTwo = obj.sum(-100, -100);
            const resThree = obj.sum(5.6, 4.4);
            expect(res).to.equal(20);
            expect(resTwo).to.equal(-200);
            expect(resThree).to.be.closeTo(10, 0.01);
        });
    });
});