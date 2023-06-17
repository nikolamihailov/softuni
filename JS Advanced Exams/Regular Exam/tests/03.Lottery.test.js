const { expect } = require("chai");
const lottery = require("../03.Lottery");


describe("lottery obj", function () {
    describe("buyLotteryTicket func", function () {
        it("should throw Error if buy is false", function () {
            expect(() => lottery.buyLotteryTicket(5, 3, false)).to.throw("Unable to buy lottery ticket!");
        });
        it("should throw Error if ticketPrice not of type number or <=0", function () {
            expect(() => lottery.buyLotteryTicket("az", 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(true, 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(["sdcd"], 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(-5, 3, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(0, 3, true)).to.throw("Invalid input!");
        });
        it("should throw Error if ticketCount not of type number or < 1", function () {
            expect(() => lottery.buyLotteryTicket(3, "aaa", true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, false, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, ["axas"], true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, -10, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, 0, true)).to.throw("Invalid input!");
        });
        it("should throw Error if buy not of type boolean", function () {
            expect(() => lottery.buyLotteryTicket(3, 3, 3)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, 3, "aa")).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, 3, ["ds"])).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, 3, -6)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(3, 3, 154)).to.throw("Invalid input!");
        });
        it("should return message with correct data", function () {
            const res = lottery.buyLotteryTicket(1, 3, true);
            const res2 = lottery.buyLotteryTicket(1, 1, true);
            const res3 = lottery.buyLotteryTicket(3, 5, true);
            expect(res).to.equal("You bought 3 tickets for 3$.");
            expect(res2).to.equal("You bought 1 tickets for 1$.");
            expect(res3).to.equal("You bought 5 tickets for 15$.");
        });
    });

    describe("checkTicket  func", function () {
        it("should throw Error if ticketNumbers not of type array or length !=6", function () {
            expect(() => lottery.checkTicket(1, 1)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(true, 1)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket("ass", 1)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(["s"], 1)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket(["s", "", "", "", ""], 1)).to.throw("Invalid input!");

        });
        it("should throw Error if luckyNumbers not of type array or length !=6", function () {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 1)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], "ddd")).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], true)).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], ["s"])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], ["s", "", "", "", ""])).to.throw("Invalid input!");
        });

        it("should return message with correct data for winNums between 3 and 5", function () {
            const res = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 6, 8, 10]);
            const res2 = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 100, 100]);
            const res3 = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9]);

            expect(res).to.equal("Congratulations you win, check your reward!");
            expect(res2).to.equal("Congratulations you win, check your reward!");
            expect(res3).to.equal("Congratulations you win, check your reward!");

        });
        it("should return message with correct data for winNums = 6", function () {
            const res = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
            expect(res).to.equal("You win the JACKPOT!!!");
        });
    });


    describe("secondChance  func", function () {
        it("should throw Error if buy is ticketID not of type number", function () {
            expect(() => lottery.secondChance("aa", ["ssd"])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(true, ["ssd"])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(["dccd"], ["ssd"])).to.throw("Invalid input!");
            expect(() => lottery.secondChance([], ["ssd"])).to.throw("Invalid input!");
        });
        it("should throw Error if buy is secondChanceWinningIDs not of type array", function () {
            expect(() => lottery.secondChance(5, "dsd")).to.throw("Invalid input!");
            expect(() => lottery.secondChance(5, 5)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(5, true)).to.throw("Invalid input!");
            expect(() => lottery.secondChance(5, 100)).to.throw("Invalid input!");
        });

        it("should return message with correcr data if ticketid is in secondChanceWinningIDs", function () {
            const res = lottery.secondChance(3, [1, 2, 3, 6, 8, 10]);
            const res2 = lottery.secondChance(1, [1, 2, 3, 6, 8, 10]);
            const res3 = lottery.secondChance(10, [1, 2, 3, 6, 8, 10]);
            expect(res).to.equal("You win our second chance prize!");
            expect(res2).to.equal("You win our second chance prize!");
            expect(res3).to.equal("You win our second chance prize!");

        });
        it("should return message with correcr data if ticketid is in not in secondChanceWinningIDs", function () {
            const res = lottery.secondChance(9, [1, 2, 3, 6, 8, 10]);
            const res2 = lottery.secondChance(4, [1, 2, 3, 6, 8, 10]);
            const res3 = lottery.secondChance(75, [1, 2, 3, 6, 8, 10]);
            expect(res).to.equal("Sorry, your ticket didn't win!");
            expect(res2).to.equal("Sorry, your ticket didn't win!");
            expect(res3).to.equal("Sorry, your ticket didn't win!");
        });
    });
    // TODO: …
});
