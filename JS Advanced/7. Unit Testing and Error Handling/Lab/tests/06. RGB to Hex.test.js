const { expect } = require("chai");
const { rgbToHexColor } = require("../06. RGB to Hex");

describe("rgbHexColor function", function () {
    it("should return undefined for red over 255", function () {
        expect(rgbToHexColor(500, 100, 100)).to.be.undefined;
    });
    it("should return undefined for red under 0", function () {
        expect(rgbToHexColor(-100, 100, 100)).to.be.undefined;
    });
    it("should return undefined for green over 255", function () {
        expect(rgbToHexColor(100, 500, 100)).to.be.undefined;
    });
    it("should return undefined for green under 0", function () {
        expect(rgbToHexColor(100, -100, 100)).to.be.undefined;
    });
    it("should return undefined for blue over 255", function () {
        expect(rgbToHexColor(100, 100, 500)).to.be.undefined;
    });
    it("should return undefined for blue under 0", function () {
        expect(rgbToHexColor(100, 100, -100)).to.be.undefined;
    });
    it("should return undefined for red not being an Integer", function () {
        expect(rgbToHexColor("str", 100, 100)).to.be.undefined;
    });
    it("should return undefined for green not being an Integer", function () {
        expect(rgbToHexColor(100, "str", 100)).to.be.undefined;
    });
    it("should return undefined for blue not being an Integer", function () {
        expect(rgbToHexColor(100, 100, "str")).to.be.undefined;
    });
    it("should return #646464 for 100, 100, 100", function () {
        expect(rgbToHexColor(100, 100, 100)).to.equal("#646464");
    });
    it("should return #FFFFFF for 255, 255, 255", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("should return #000000 for 0, 0, 0", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("should return undefined for input of type string", function () {
        expect(rgbToHexColor("str", "str", "str")).to.be.undefined;
    });
});