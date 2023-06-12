const { expect } = require("chai");
const { StringBuilder } = require("../13. String Builder");

describe("StringBuilder class", () => {
    it("should be instantiated with a passed in string", () => {
        expect(() => new StringBuilder('hello')).to.not.throw();
    });
    it("should be instantiated with nothing", () => {
        expect(() => new StringBuilder()).to.not.throw();
    });
    it("should throw Error when instantiated with number", () => {
        expect(() => new StringBuilder(15)).to.throw(TypeError);
    });
    it("should throw Error when instantiated with array", () => {
        expect(() => new StringBuilder(["10"])).to.throw(TypeError);
    });
    describe("append function", () => {
        it("should not throw Error with passed in string", () => {
            const str = new StringBuilder('hello');
            expect(() => str.append("str")).to.not.throw();
        });
        it("should not work with passed in number", () => {
            const str = new StringBuilder('hello');
            expect(() => str.append(10)).to.throw(TypeError);
        });
        it("should not work with passed in array", () => {
            const str = new StringBuilder('hello');
            expect(() => str.append(["0"])).to.throw(TypeError);
        });
        it("should work correctly with passed in string", () => {
            const str = new StringBuilder('ab');
            str.append("s");
            const res = "abs";
            expect(str.toString()).to.equal(res);
        });
    });

    describe("prepend function", () => {
        it("should not throw Error with passed in string", () => {
            const str = new StringBuilder('hello');
            expect(() => str.prepend("str")).to.not.throw();
        });
        it("should not work with passed in number", () => {
            const str = new StringBuilder('hello');
            expect(() => str.prepend(10)).to.throw(TypeError);
        });
        it("should not work with passed in array", () => {
            const str = new StringBuilder('hello');
            expect(() => str.prepend(["0"])).to.throw(TypeError);
        });
        it("should work correctly with passed in string", () => {
            const str = new StringBuilder('ab');
            str.prepend("s");
            const res = "sab";
            expect(str.toString()).to.equal(res);
        });
    });

    describe("insertAt function", () => {
        it("should not throw Error with passed in string and number", () => {
            const str = new StringBuilder('hello');
            expect(() => str.insertAt("str", 2)).to.not.throw();
        });
        it("should not work with passed in number as string param", () => {
            const str = new StringBuilder('hello');
            expect(() => str.insertAt(10, 2)).to.throw(TypeError);
        });
        it("should not work with passed in array as string param", () => {
            const str = new StringBuilder('hello');
            expect(() => str.insertAt(["0"], 2)).to.throw(TypeError);
        });
        it("should work correctly with passed in string and number", () => {
            const str = new StringBuilder('ab');
            str.insertAt("s", 1);
            const res = "asb";
            expect(str.toString()).to.equal(res);
        });
        it('Should be executed correctly 2', () => {
            const input = ' are';
            const inpu2 = ' fast';
            const expected = 'cars are';
            const expected2 = 'cars fast are';
            const expected3 = 'cars fast ae';
            const test = new StringBuilder('cars');
            test.insertAt(input, 4);
            expect(test.toString()).to.equal(expected);
            test.insertAt(inpu2, 4);
            expect(test.toString()).to.equal(expected2);
            test.remove(11, 1);
            expect(test.toString()).to.equal(expected3);
        });
    });

    describe("remove function", () => {
        it("should not throw Error with two passed numbers", () => {
            const str = new StringBuilder('hello');
            expect(() => str.remove(2, 2)).to.not.throw();
        });
        it("should work correctly with two passed numbers", () => {
            const str = new StringBuilder('abc');
            str.remove(1, 1);
            const res = "ac";
            expect(str.toString()).to.equal("ac");
        });
        it("should work correctly with two passed numbers", () => {
            const str = new StringBuilder('abc');
            str.remove(1, 2);
            const res = "a";
            expect(str.toString()).to.equal("a");
        });
    });

    describe("toString function", () => {
        it("should return the result joined correctly", () => {
            const str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            const res = str.toString();
            expect(res).to.equal("User,woop hello, there");
        });
    });
});