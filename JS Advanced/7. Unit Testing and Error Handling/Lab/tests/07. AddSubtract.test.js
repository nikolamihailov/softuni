const { expect } = require("chai");
const { createCalculator } = require("../07. AddSubtract");

describe("createCalculator function", () => {
    it('should return an object', () => {
        const result = createCalculator();
        expect(result).to.be.an('object');
    });
    it('should return an object that has add function', () => {
        const result = createCalculator();
        expect(result).to.be.an('object');
        expect(result).to.have.property('add').that.is.a('function');
    });
    it('should return an object that has subtract function', () => {
        const result = createCalculator();
        expect(result).to.be.an('object');
        expect(result).to.have.property('subtract').that.is.a('function');
    });
    it('should return an object that has get function', () => {
        const result = createCalculator();
        expect(result).to.be.an('object');
        expect(result).to.have.property('get').that.is.a('function');
    });
    it('should be able to work with number parameter for add function', () => {
        const result = createCalculator();
        result.add(10);
        const number = result.get();
        expect(number).to.be.equal(10);
    });
    it('should always start with 0 initial value', () => {
        const result = createCalculator();
        result.add(0);
        const number = result.get();
        expect(number).to.be.equal(0);
    });
    it('should be able to work with number as a string parameter for add function', () => {
        const result = createCalculator();
        result.add("10");
        const number = result.get();
        expect(number).to.be.equal(10);
    });
    it('should be able to work with number parameter for subtract function', () => {
        const result = createCalculator();
        result.subtract(10);
        const number = result.get();
        expect(number).to.be.equal(-10);
    });
    it('should be able to work with number as a string parameter for subtract function', () => {
        const result = createCalculator();
        result.subtract("10");
        const number = result.get();
        expect(number).to.be.equal(-10);
    });
    it('should return NaN if add or subtract numbers and strings', () => {
        const result = createCalculator();
        result.add(152);
        result.subtract("str");
        const number = result.get();
        expect(number).to.be.NaN;
    });
});