const { expect } = require("chai");
const { lookupChar } = require("../03. Char Lookup");

describe("lookupChar function", () => {
    it("should return undefined if the first parameter is not of type string", () => {
        expect(lookupChar(15, 10)).to.be.undefined;
    });
    it("should return undefined if the second parameter is not of type number", () => {
        expect(lookupChar("cocoa", "is nice")).to.be.undefined;
    });
    it("should return undefined if the second parameter is not of type number", () => {
        expect(lookupChar("cocoa", 5.6)).to.be.undefined;
    });
    it("should return Incorrect index if the second parameter is over the length of the string", () => {
        expect(lookupChar("cocoa", 100)).to.equal("Incorrect index");
    });
    it("should return Incorrect index if the second parameter is exactly the length of the string", () => {
        expect(lookupChar("cocoa", 5)).to.equal("Incorrect index");
    });
    it("should return Incorrect index if the second parameter is below zero", () => {
        expect(lookupChar("cocoa", -5)).to.equal("Incorrect index");
    });
    it("should return t with statue and 1", () => {
        expect(lookupChar("statue", 1)).to.equal("t");
    });
    it("should return s with statue and 0", () => {
        expect(lookupChar("statue", 0)).to.equal("s");
    });
});