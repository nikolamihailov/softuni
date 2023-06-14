class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }
    addSmartphone(model, storage, price, condition) {
        if (model.trim() === "" || typeof model !== "string"
            || storage < 0 || !Number.isInteger(storage)
            || price < 0 || typeof price !== "number"
            || condition.trim() === "" || typeof condition !== "string") {
            throw new Error("Invalid smartphone!");
        }
        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const phone = this.availableSmartphones.find(s => s.model === model);
        if (!phone) throw new Error(`${model} was not found!`);
        const storage = phone.storage;
        let soldPrice = 0;
        if (storage >= desiredStorage) {
            soldPrice = phone.price;
        } else if (desiredStorage - storage <= 128) {
            soldPrice = phone.price * 0.9;
        } else if (desiredStorage - storage > 128) {
            soldPrice = phone.price * 0.8;
        }
        this.availableSmartphones = this.availableSmartphones.filter(s => s.model !== model);
        this.soldSmartphones.push({ model, storage, soldPrice });
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) throw new Error("There are no available smartphones!");
        for (const phone of this.availableSmartphones) {
            phone.storage *= 2;
        }
        let res = ["Upgraded Smartphones:"];
        for (const phone of this.availableSmartphones) {
            res.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }
        return res.join("\n");
    }

    salesJournal(criteria) {
        if (criteria === "storage") {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria === "model") {
            this.soldSmartphones.sort((a, b) => (a.model).localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }
        let res = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:`];
        for (const phone of this.soldSmartphones) {
            res.push(`${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`);
        }
        return res.join("\n");
    }
}
/*
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
/*

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.upgradePhones());
*/


let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.upgradePhones());
console.log(retailer.salesJournal('storage'));



