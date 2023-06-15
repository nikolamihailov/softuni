const { expect } = require("chai");
const motorcycleRider = require("../03.Motorcycle Rider");

describe("motorcycleRider object", function () {
    describe("licenseRestriction function", function () {
        it("should throw Error for value different from AM, A1, A2, A", function () {
            expect(() => motorcycleRider.licenseRestriction("a")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("b")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("c")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("d")).to.throw("Invalid Information!");
        });
        it("should return message for AM", function () {
            const res = motorcycleRider.licenseRestriction("AM");
            expect(res).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });
        it("should return message for A1", function () {
            const res = motorcycleRider.licenseRestriction("A1");
            expect(res).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });
        it("should return message for A2", function () {
            const res = motorcycleRider.licenseRestriction("A2");
            expect(res).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });
        it("should return message for A", function () {
            const res = motorcycleRider.licenseRestriction("A");
            expect(res).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
    });

    describe("motorcycleShowroom function", function () {
        it("should throw Error for engineVolume not of type array or empty array", function () {
            expect(() => motorcycleRider.motorcycleShowroom("a", 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(100, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(true, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([])).to.throw("Invalid Information!");
        });
        it("should throw Error for maximumEngineVolume not of type number or number below 50", function () {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], "az")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], -10)).to.throw("Invalid Information!");
        });
        it("should return available motorcycles with correct data", function () {
            const res = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 50);
            const res2 = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 125);
            const res3 = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250);
            expect(res).to.equal("There are 0 available motorcycles matching your criteria!");
            expect(res2).to.equal("There are 1 available motorcycles matching your criteria!");
            expect(res3).to.equal("There are 2 available motorcycles matching your criteria!");
        });
    });


    describe("otherSpendings  function", function () {
        it("should throw Error for equipment not of type array ", function () {
            expect(() => motorcycleRider.otherSpendings("a", 100, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(100, 100, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(true, 100, 100)).to.throw("Invalid Information!");
        });
        it("should throw Error for consumebales not of type array ", function () {
            expect(() => motorcycleRider.otherSpendings(["helmet"], 100, 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet"], "kl", 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet"], true, 100)).to.throw("Invalid Information!");
        });
        it("should throw Error for discount not of type booalen ", function () {
            expect(() => motorcycleRider.otherSpendings(["helmet"], ["engine oil"], 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet"], ["engine oil"], "a")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet"], ["engine oil"], ["a"])).to.throw("Invalid Information!");
        });

        it("should return spent money message without discount for discount being false", function () {
            const res = motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false);
            const res2 = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false);
            const res3 = motorcycleRider.otherSpendings(["helmet", "helmet"], ["engine oil", "engine oil"], false);
            expect(res).to.equal("You spend $270.00 for equipment and consumables!");
            expect(res2).to.equal("You spend $600.00 for equipment and consumables!");
            expect(res3).to.equal("You spend $540.00 for equipment and consumables!");
        });
        it("should return spent money message without discount for discount being true", function () {
            const res = motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true);
            const res2 = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true);
            const res3 = motorcycleRider.otherSpendings(["helmet", "helmet"], ["engine oil", "engine oil"], true);
            expect(res).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
            expect(res2).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
            expect(res3).to.equal("You spend $486.00 for equipment and consumables with 10% discount!");
        });
    });
    // TODO: …
});

