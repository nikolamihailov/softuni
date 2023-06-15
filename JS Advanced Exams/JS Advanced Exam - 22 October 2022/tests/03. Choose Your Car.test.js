const { expect } = require("chai");
const chooseYourCar = require("../03. Choose Your Car");

describe("chooseYourCar object", function () {
    describe("choosingType function", function () {
        it("should throw Error with invalid year less than 1900 or more than 2022", function () {
            expect(() => chooseYourCar.choosingType("Sedan", "red", 1000)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "red", 1850)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2023)).to.throw("Invalid Year!");
            expect(() => chooseYourCar.choosingType("Sedan", "red", 2026)).to.throw("Invalid Year!");
        });
        it("should throw Error with type different from Sedan", function () {
            expect(() => chooseYourCar.choosingType("Mini", 2000, "red", 2000)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Truck", 2000, "red", 2000)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Cabrio", 2000, "red", 2000)).to.throw("This type of car is not what you are looking for.");
            expect(() => chooseYourCar.choosingType("Jeep", "red", 2000)).to.throw("This type of car is not what you are looking for.");
        });
        it("should return meets the requiremnets if year is 2010 or over", function () {
            const res = chooseYourCar.choosingType("Sedan", "red", 2010);
            const res2 = chooseYourCar.choosingType("Sedan", "red", 2015);
            const res3 = chooseYourCar.choosingType("Sedan", "red", 2022);
            expect(res).to.equal("This red Sedan meets the requirements, that you have.");
            expect(res2).to.equal("This red Sedan meets the requirements, that you have.");
            expect(res3).to.equal("This red Sedan meets the requirements, that you have.");
        });
        it("should return too old if year <2010", function () {
            const res = chooseYourCar.choosingType("Sedan", "red", 2009);
            const res2 = chooseYourCar.choosingType("Sedan", "red", 2006);
            const res3 = chooseYourCar.choosingType("Sedan", "red", 2007);
            expect(res).to.equal("This Sedan is too old for you, especially with that red color.");
            expect(res2).to.equal("This Sedan is too old for you, especially with that red color.");
            expect(res3).to.equal("This Sedan is too old for you, especially with that red color.");
        });
    });

    describe("brandName function ", function () {
        it("should throw Error with brands not of type array", function () {
            expect(() => chooseYourCar.brandName(5, 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName([], 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName("as", 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(true, 1)).to.throw("Invalid Information!");
        });
        it("should throw Error with index not of type number or below 0 or above/equal to the brands length", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -6)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5)).to.throw("Invalid Information!");
        });
        it("should return the changed array without the brand at the given index", function () {
            const res = chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1);
            const res2 = chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0);
            const res3 = chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2);
            expect(res).to.equal("BMW, Peugeot");
            expect(res2).to.equal("Toyota, Peugeot");
            expect(res3).to.equal("BMW, Toyota");
        });
    });

    describe("CarFuelConsumption  function ", function () {
        it("should throw Error with distanceInKilometers not of type number or <=0", function () {
            expect(() => chooseYourCar.carFuelConsumption("xss", 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(["ss"], 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-5, 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(true, 1)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw("Invalid Information!");
        });
        it("should throw Error with consumptedFuelInLiters not of type number or <=0", function () {
            expect(() => chooseYourCar.carFuelConsumption(10, "xss")).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, ["ss"])).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, -5)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, true)).to.throw("Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(10, 0)).to.throw("Invalid Information!");
        });

        it("should return the car is efficient message when consumption <=7", function () {
            const res = chooseYourCar.carFuelConsumption(100, 7);
            const res2 = chooseYourCar.carFuelConsumption(100, 6);
            const res3 = chooseYourCar.carFuelConsumption(100, 5);
            const res4 = chooseYourCar.carFuelConsumption(100, 4);

            expect(res).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            expect(res2).to.equal("The car is efficient enough, it burns 6.00 liters/100 km.");
            expect(res3).to.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
            expect(res4).to.equal("The car is efficient enough, it burns 4.00 liters/100 km.");

        });
        it("should return the car burns too much message when consumption >7", function () {
            const res = chooseYourCar.carFuelConsumption(100, 8);
            const res2 = chooseYourCar.carFuelConsumption(100, 16);
            const res3 = chooseYourCar.carFuelConsumption(100, 15);
            const res4 = chooseYourCar.carFuelConsumption(100, 14);

            expect(res).to.equal("The car burns too much fuel - 8.00 liters!");
            expect(res2).to.equal("The car burns too much fuel - 16.00 liters!");
            expect(res3).to.equal("The car burns too much fuel - 15.00 liters!");
            expect(res4).to.equal("The car burns too much fuel - 14.00 liters!");
        });
    });
});
