const { expect } = require("chai");
const { PaymentPackage } = require("../12. Payment Package");


describe("class PaymentPackage", function () {
    it('Constructor tests', () => {
        const instance = new PaymentPackage('Name', 200);
        const expected = [
            `Package: Name`,
            `- Value (excl. VAT): 200`,
            `- Value (VAT 20%): 240`,
        ];
        expect(instance._name).to.equal('Name');
        expect(instance._value).to.equal(200);
        expect(instance._VAT).to.equal(20);
        expect(instance._active).to.equal(true);
        expect(instance.toString()).to.equal(expected.join('\n'));
    });
    it('should throw an Error if nothing is passed', () => {
        expect(() => new PaymentPackage()).to.throw();
    });
    it('should throw an Error if only name is passed', () => {
        expect(() => new PaymentPackage('Package 1')).to.throw();
    });
    it('should throw an Error if only value is passed', () => {
        expect(() => new PaymentPackage(100)).to.throw();
    });
    it('should throw an Error if name is empty string', () => {
        expect(() => new PaymentPackage("", 100)).to.throw();
    });
    it('should throw an Error if name is not of type string', () => {
        expect(() => new PaymentPackage(100, 100)).to.throw();
    });
    it('should throw an Error if name is of type array', () => {
        expect(() => new PaymentPackage(["", ""], 100)).to.throw();
    });
    it('should throw an Error if value is not of type number', () => {
        expect(() => new PaymentPackage("P", "ackage")).to.throw();
    });
    it('should throw an Error if value is a negative number', () => {
        expect(() => new PaymentPackage("P", -100)).to.throw();
    });
    it('should throw an Error if value is of type array', () => {
        expect(() => new PaymentPackage("abc", ["", ""])).to.throw();
    });
    it('should be able to set the value of name to a string with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        payment.name = "Package 2";
        expect(payment.name).to.equal("Package 2");
    });
    it('should throw an Error if we set the value of name to a number with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(() => payment.name = 150).to.throw();
    });
    it('should be able to set the value to a number with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        payment.value = 40;
        expect(payment.value).to.equal(40);
    });
    it('should throw an Error if we set the value to a string with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(() => payment.value = "abc").to.throw();
    });
    it('should get the default value of VAT with the getter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(payment.VAT).to.equal(20);
    });
    it('should throw an Error if VAT is not of type number', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(() => payment.VAT = "").to.throw();
    });
    it('should throw an Error if VAT is a negative number', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(() => payment.VAT = -100).to.throw();
    });
    it('should be able to set the value of VAT  to a number with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        payment.VAT = 40;
        expect(payment.VAT).to.equal(40);
    });
    it('should throw an Error if active is a not boolean', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(() => payment.active = -100).to.throw();
    });
    it('should get the default value of active with the getter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(payment.active).to.be.true;
    });
    it('should be able to set the value of active  to false with the setter', () => {
        const payment = new PaymentPackage('Package 1', 100);
        payment.active = false;
        expect(payment.active).to.be.false;
    });
    it("should have toString() method", () => {
        const payment = new PaymentPackage('Package 1', 100);
        expect(payment).to.have.a.property("toString").that.is.a('function');
    });
    it('should return data if toString() is called and active is true', () => {
        const payment = new PaymentPackage('HR Services', 1500);
        expect(payment.toString()).to.equal(`Package: HR Services
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`);
    });
    it('should return data with inactive lable if toString() is called and active is false', () => {
        const payment = new PaymentPackage('HR Services', 1500);
        payment.active = false;
        expect(payment.toString()).to.equal(`Package: HR Services (inactive)
- Value (excl. VAT): 1500
- Value (VAT 20%): 1800`);
    });
    it('should return data if toString() is called and active is true and VAT is changed', () => {
        const payment = new PaymentPackage('HR Services', 1500);
        payment.VAT = 30;
        expect(payment.toString()).to.equal(`Package: HR Services
- Value (excl. VAT): 1500
- Value (VAT 30%): 1950`);
    });
    it('should have a method toString() that returns a string', () => {
        const payment = new PaymentPackage('HR Services', 1500);
        const res = payment.toString();
        expect(typeof res).to.equal("string");
    });


    it('Should change Value to 0', () => {
        expect(() => new PaymentPackage('Test', 0)).to.not.throw('Value must be a non-negative number');
    });

});