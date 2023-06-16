const { expect } = require("chai");
const movieTheater = require("../03. Movie Theater");

describe("movieTheater object", function () {
    describe("ageRestrictions function", function () {
        it("should retun message for G", function () {
            const res = movieTheater.ageRestrictions("G");
            expect(res).to.equal("All ages admitted to watch the movie");
        });
        it("should retun message for PG", function () {
            const res = movieTheater.ageRestrictions("PG");
            expect(res).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });
        it("should retun message for R", function () {
            const res = movieTheater.ageRestrictions("R");
            expect(res).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });
        it("should retun message for NC-17", function () {
            const res = movieTheater.ageRestrictions("NC-17");
            expect(res).to.equal("No one under 17 admitted to watch the movie");
        });
        it("should retun no restrictions for movieRating different from G, PG, R, NC-17", function () {
            const res = movieTheater.ageRestrictions("A");
            expect(res).to.equal("There are no age restrictions for this movie");
        });
    });

    describe("moneySpent  function", function () {
        it("should throw Error if tickets not of type number", function () {
            expect(() => movieTheater.moneySpent("ko", ["Nachos"], ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(true, ["Nachos"], ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(["a"], ["Nachos"], ["Soda"])).to.throw("Invalid input");
        });
        it("should throw Error if food not of type array", function () {
            expect(() => movieTheater.moneySpent(5, 6, ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(5, "Nachos", ["Soda"])).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(5, true, ["Soda"])).to.throw("Invalid input");
        });
        it("should throw Error if drinks not of type array", function () {
            expect(() => movieTheater.moneySpent(5, ["Nachos"], 6)).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(5, ["Nachos"], "sas")).to.throw("Invalid input");
            expect(() => movieTheater.moneySpent(5, ["Nachos"], true)).to.throw("Invalid input");
        });
        it("should return discount message for total cost with correct data and bill >50", function () {
            const res = movieTheater.moneySpent(20, ["Nachos"], ["Soda"]);
            const res2 = movieTheater.moneySpent(10, ["Nachos"], ["Soda"]);
            const res3 = movieTheater.moneySpent(30, ["Nachos"], ["Soda"]);
            expect(res).to.equal("The total cost for the purchase with applied discount is 246.80");
            expect(res2).to.equal("The total cost for the purchase with applied discount is 126.80");
            expect(res3).to.equal("The total cost for the purchase with applied discount is 366.80");
        });
        it("should return message for total cost with correct data and bill<50", function () {
            const res = movieTheater.moneySpent(2, ["Nachos"], ["Soda"]);
            const res2 = movieTheater.moneySpent(1, ["Nachos"], ["Soda"]);
            const res3 = movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"]);
            expect(res).to.equal("The total cost for the purchase is 38.50");
            expect(res2).to.equal("The total cost for the purchase is 23.50");
            expect(res3).to.equal("The total cost for the purchase is 44.50");
        });
    });

    describe("reservation  function", function () {
        it("should throw Error if rowsArray not of type array", function () {
            expect(() => movieTheater.reservation("ko", 5)).to.throw("Invalid input");
            expect(() => movieTheater.reservation(true, 5)).to.throw("Invalid input");
            expect(() => movieTheater.reservation(20, 5)).to.throw("Invalid input");
        });
        it("should throw Error if neededSeatsCount not of type number", function () {
            expect(() => movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], "dsdds"))).to.throw("Invalid input");
            expect(() => movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], true))).to.throw("Invalid input");
            expect(() => movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], ["sss"]))).to.throw("Invalid input");
        });
        it("should return message for total cost with correct data and bill<50", function () {
            const res = movieTheater.reservation([{ rowNumber: 1, freeSeats: 4 }, { rowNumber: 2, freeSeats: 5 }], 5);
            const res2 = movieTheater.reservation([{ rowNumber: 1, freeSeats: 4 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 5 }], 5);
            const res3 = movieTheater.reservation([{ rowNumber: 1, freeSeats: 4 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 5 }, { rowNumber: 4, freeSeats: 5 }], 5);

            expect(res).to.equal(2);
            expect(res2).to.equal(3);
            expect(res3).to.equal(4);
        });
    });
});
