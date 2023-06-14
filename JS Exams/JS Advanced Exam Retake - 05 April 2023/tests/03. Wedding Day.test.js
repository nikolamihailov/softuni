const { expect } = require("chai");
const { weddingDay } = require("../03. Wedding Day");

describe("weeding day object", function () {
    describe("PickVenue function", function () {
        it("should throw error with invalid data", function () {
            expect(() => weddingDay.pickVenue("s", "s", 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(10, "s", 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue("s", 10, 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(10, 10, "")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue()).to.throw("Invalid Information!");
        });
        it("should throw error if location is different from Varna", function () {
            expect(() => weddingDay.pickVenue(10, 10, "Sofia")).to.throw("The location of this venue is not in the correct area!");
            expect(() => weddingDay.pickVenue(10, 10, "Plovdiv")).to.throw("The location of this venue is not in the correct area!");
            expect(() => weddingDay.pickVenue(10, 10, "Pleven")).to.throw("The location of this venue is not in the correct area!");
            expect(() => weddingDay.pickVenue(10, 10, "Burgas")).to.throw("The location of this venue is not in the correct area!");
        });
        it("should return a message that the requirements are not met with wrong data", function () {
            const res = weddingDay.pickVenue(10, 10, "Varna");
            const resTwo = weddingDay.pickVenue(160, 130, "Varna");
            expect(res).to.equal("This venue does not meet your requirements!");
            expect(resTwo).to.equal("This venue does not meet your requirements!");
        });
        it("should return a message that the requirements are met with correct data", function () {
            const res = weddingDay.pickVenue(200, 100, "Varna");
            const resTwo = weddingDay.pickVenue(150, 100, "Varna");
            const resThree = weddingDay.pickVenue(200, 120, "Varna");
            expect(res).to.equal("This venue meets the requirements, with capacity of 200 guests and 100$ cover.");
            expect(resTwo).to.equal("This venue meets the requirements, with capacity of 150 guests and 100$ cover.");
            expect(resThree).to.equal("This venue meets the requirements, with capacity of 200 guests and 120$ cover.");
        });
    });

    describe("OtherSpendings function", function () {
        it("should throw error with invalid data", function () {
            expect(() => weddingDay.otherSpendings("s", "s", 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(10, "s", 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings("s", 10, 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(10, 10, "")).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings()).to.throw("Invalid Information!");
        });
        it("should work with correct data and discount false", function () {
            const res = weddingDay.otherSpendings(["flowers", "flowers"], ["video", "video"], false);
            const resTwo = weddingDay.otherSpendings(["flowers", "flowers", "Fabric drapes and curtains"], ["video", "video", "video"], false);
            expect(res).to.equal("You spend 3600$ for wedding decoration and photography!");
            expect(resTwo).to.equal("You spend 5300$ for wedding decoration and photography!");
        });
        it("should work with correct data and discount treu", function () {
            const res = weddingDay.otherSpendings(["flowers", "flowers"], ["video", "video"], true);
            const resTwo = weddingDay.otherSpendings(["flowers", "flowers", "Fabric drapes and curtains"], ["video", "video", "video"], true);
            expect(res).to.equal("You spend 3060$ for wedding decoration and photography with 15% discount!");
            expect(resTwo).to.equal("You spend 4505$ for wedding decoration and photography with 15% discount!");
        });
    });

    describe("TableDistribution  function", function () {
        it("should throw error with invalid data", function () {
            expect(() => weddingDay.tableDistribution("s", 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, "s")).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(-10, 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, -10,)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(0, 10,)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, 0,)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution()).to.throw("Invalid Information!");
        });
        it("should work with over 6 and six people on table", function () {
            const res = weddingDay.tableDistribution(20, 2);
            const resTwo = weddingDay.tableDistribution(30, 3);
            const resThree = weddingDay.tableDistribution(18, 3);
            expect(res).to.equal("You have 2 tables with 10 guests on table.");
            expect(resTwo).to.equal("You have 3 tables with 10 guests on table.");
            expect(resThree).to.equal("You have 3 tables with 6 guests on table.");
        });
        it("should work with less than 6 people on table", function () {
            const res = weddingDay.tableDistribution(20, 5);
            const resTwo = weddingDay.tableDistribution(24, 6);
            const resThree = weddingDay.tableDistribution(12, 6);
            expect(res).to.equal("There is only 4 people on every table, you can join some tables.");
            expect(resTwo).to.equal("There is only 4 people on every table, you can join some tables.");
            expect(resThree).to.equal("There is only 2 people on every table, you can join some tables.");
        });

    });
    // TODO: …
});
