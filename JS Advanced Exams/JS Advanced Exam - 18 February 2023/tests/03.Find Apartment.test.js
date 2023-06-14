const { expect } = require("chai");
const findNewApartment = require("../03.Find Apartment");

describe("findNewApartment object", function () {
    describe("isGoodLocation function", function () {
        it("should throw an error if city not of type string", function () {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation(["8"], true)).to.throw("Invalid input!");
        });
        it("should throw an error if nearPublicTransportation not of type booalen", function () {
            expect(() => findNewApartment.isGoodLocation("az", 5)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("az", "az2")).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("az", ["5"])).to.throw("Invalid input!");
        });
        it("should return specific message if city different than Sofia, Plovdiv, Varna", function () {
            const res = findNewApartment.isGoodLocation("az", true);
            const res2 = findNewApartment.isGoodLocation("azzz", true);
            const res3 = findNewApartment.isGoodLocation("azzzz", true);
            expect(res).to.equal("This location is not suitable for you.");
            expect(res2).to.equal("This location is not suitable for you.");
            expect(res3).to.equal("This location is not suitable for you.");
        });
        it("should return you can go on home tour with nearPublicTransportation being true", function () {
            const res = findNewApartment.isGoodLocation("Sofia", true);
            const res2 = findNewApartment.isGoodLocation("Varna", true);
            const res3 = findNewApartment.isGoodLocation("Plovdiv", true);
            expect(res).to.equal("You can go on home tour!");
            expect(res2).to.equal("You can go on home tour!");
            expect(res3).to.equal("You can go on home tour!");
        });
        it("should return there is no public transport with nearPublicTransportation being false", function () {
            const res = findNewApartment.isGoodLocation("Sofia", false);
            const res2 = findNewApartment.isGoodLocation("Varna", false);
            const res3 = findNewApartment.isGoodLocation("Plovdiv", false);
            expect(res).to.equal("There is no public transport in area.");
            expect(res2).to.equal("There is no public transport in area.");
            expect(res3).to.equal("There is no public transport in area.");
        });
    });

    describe("isLargeEnough  function", function () {
        it("should throw an error if apartments not of type array or empty array", function () {
            expect(() => findNewApartment.isLargeEnough(5, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(true, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough("8", true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], true)).to.throw("Invalid input!");
        });
        it("should throw an error if minimalSquareMeters not of type number", function () {
            expect(() => findNewApartment.isLargeEnough(["az"], ["az"])).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(["az"], "az2")).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough(["az"], true)).to.throw("Invalid input!");
        });
        it("should return apartments that match the criteria with correct data", function () {
            const res = findNewApartment.isLargeEnough([10, 20, 30], 5);
            const res2 = findNewApartment.isLargeEnough([10, 20, 30], 10);
            const res3 = findNewApartment.isLargeEnough([10, 20, 30], 20);
            expect(res).to.equal("10, 20, 30");
            expect(res2).to.equal("10, 20, 30");
            expect(res3).to.equal("20, 30");
        });
    });

    describe("isItAffordable  function", function () {
        it("should throw an error if price not of type number or below and equal to 0", function () {
            expect(() => findNewApartment.isItAffordable("l", true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(true, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(["a"], true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-5, true)).to.throw("Invalid input!");
        });
        it("should throw an error if budget not of type number or below and equal to 0", function () {
            expect(() => findNewApartment.isItAffordable(10, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(10, "l")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(10, ["a"])).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(10, 0)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(10, -5)).to.throw("Invalid input!");
        });

        it("should return you dont have money if price-budget<0", function () {
            const res = findNewApartment.isItAffordable(4, 3);
            const res2 = findNewApartment.isItAffordable(100, 90);
            const res3 = findNewApartment.isItAffordable(60, 59);
            expect(res).to.equal("You don't have enough money for this house!");
            expect(res2).to.equal("You don't have enough money for this house!");
            expect(res3).to.equal("You don't have enough money for this house!");
        });
        it("should return you can afford if price-budget>=0", function () {
            const res = findNewApartment.isItAffordable(4, 4);
            const res2 = findNewApartment.isItAffordable(100, 150);
            const res3 = findNewApartment.isItAffordable(60, 70);
            expect(res).to.equal("You can afford this home!");
            expect(res2).to.equal("You can afford this home!");
            expect(res3).to.equal("You can afford this home!");
        });
    });

    // TODO: …
});
