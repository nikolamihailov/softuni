var Box = /** @class */ (function () {
    function Box() {
        this._elements = [];
    }
    Box.prototype.add = function (element) {
        this.elements.push(element);
    };
    Box.prototype.remove = function () {
        this.elements.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
/* const box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count); */
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
