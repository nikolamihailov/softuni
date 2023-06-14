class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) throw new Error("Not enough space in the cellar.");
        this.space--;
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) throw new Error(`${wineName} is not in the cellar.`);
        if (wine.paid) throw new Error(`${wineName} has already been paid.`);
        wine.paid = true;
        this.bill += wine.price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) throw new Error(`The wine, you're looking for, is not found.`);
        if (wine.paid === false) throw new Error(`${wineName} need to be paid before open the bottle.`);
        this.wines = this.wines.filter(w => w.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (arguments.length === 0) {
            const res = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`];
            this.wines.sort((a, b) => (a.wineName).localeCompare(b.wineName));
            this.wines.forEach(wine => {
                const paidMessage = wine.paid ? "Has Paid" : "Not Paid";
                res.push(`${wine.wineName} > ${wine.wineType} - ${paidMessage}.`);
            });
            return res.join("\n");
        } else {
            const wine = this.wines.find(w => w.wineType === wineType);
            if (!wine) throw new Error(`There is no ${wineType} in the cellar.`);
            const paidMessage = wine.paid ? "Has Paid" : "Not Paid";
            return `${wine.wineName} > ${wine.wineType} - ${paidMessage}.`;
        }
    }
}
/*
const selection = new WineSelection(2);
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

const selection = new WineSelection(2);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

const selection = new WineSelection(2);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

const selection = new WineSelection(2);
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));
*/
const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


