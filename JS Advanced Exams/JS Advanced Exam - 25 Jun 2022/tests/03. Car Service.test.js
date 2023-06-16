const { expect } = require("chai");
const carService = require("../03. Car Service");

describe("carService object", function () {
    describe("isItExpensive function", function () {
        it("should return specific message for Engine or Transmission", function () {
            const res = carService.isItExpensive("Engine");
            const res2 = carService.isItExpensive("Transmission");
            expect(res).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(res2).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("should return specific message for parts other than Engine and Transmission", function () {
            const res = carService.isItExpensive("Tire");
            const res2 = carService.isItExpensive("Headlight");
            expect(res).to.equal(`The overall price will be a bit cheaper`);
            expect(res2).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe("discount function", function () {
        it("should throw Error for numberOfParts not of type number", function () {
            expect(() => carService.discount("a", 10)).to.throw("Invalid input");
            expect(() => carService.discount(true, 10)).to.throw("Invalid input");
            expect(() => carService.discount(["a"], 10)).to.throw("Invalid input");
        });
        it("should throw Error for totalPrice not of type number", function () {
            expect(() => carService.discount(10, "a")).to.throw("Invalid input");
            expect(() => carService.discount(10, true)).to.throw("Invalid input");
            expect(() => carService.discount(10, ["a"])).to.throw("Invalid input");
        });
        it("should return specific message if numberOfParts<=2", function () {
            const res = carService.discount(2, 5);
            const res2 = carService.discount(1, 5);
            expect(res).to.equal("You cannot apply a discount");
            expect(res2).to.equal("You cannot apply a discount");
        });
        it("should apply 15% discount and return discount message if numberOfParts>2&&<=7", function () {
            const res = carService.discount(3, 100);
            const res2 = carService.discount(5, 100);
            const res3 = carService.discount(7, 100);
            expect(res).to.equal(`Discount applied! You saved 15$`);
            expect(res2).to.equal(`Discount applied! You saved 15$`);
            expect(res3).to.equal(`Discount applied! You saved 15$`);
        });
        it("should apply 30% discount and return discount message if numberOfParts>7", function () {
            const res = carService.discount(8, 100);
            const res2 = carService.discount(10, 100);
            const res3 = carService.discount(15, 100);
            expect(res).to.equal(`Discount applied! You saved 30$`);
            expect(res2).to.equal(`Discount applied! You saved 30$`);
            expect(res3).to.equal(`Discount applied! You saved 30$`);
        });
    });

    describe("discount function", function () {
        it("should throw Error for partsCatalog not of type array", function () {
            expect(() => carService.partsToBuy("a", 10)).to.throw("Invalid input");
            expect(() => carService.partsToBuy(true, 10)).to.throw("Invalid input");
            expect(() => carService.partsToBuy(["a"], 10)).to.throw("Invalid input");
        });
        it("should throw Error for neededParts not of type number", function () {
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], "a")).to.throw("Invalid input");
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 10)).to.throw("Invalid input");
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], true)).to.throw("Invalid input");
        });
        it("should return 0 if partsCatalog is empty", function () {
            const res = carService.partsToBuy([], ["injectors"]);
            expect(res).to.equal(0);
        });
        it("should return total price with correct data", function () {
            const res = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"]);
            const res2 = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil springs"]);
            const res3 = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil"]);
            expect(res).to.equal(145);
            expect(res2).to.equal(230);
            expect(res3).to.equal(0);
        });
    });
});
