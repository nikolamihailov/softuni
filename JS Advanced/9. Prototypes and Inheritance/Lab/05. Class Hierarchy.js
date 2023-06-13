function returnClasses() {
    class Figure {
        constructor() {
            this.units = "cm";
        }
        get area() { }
        changeUnits(units) {
            this.units = units;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        get area() {
            return this.radius ** 2 * Math.PI;
        }
        toString() {
            return `Figures units: cm Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
            this.units = units;
        }
        get area() {
            const units = this.units;
            if (units === "cm") return this.width * this.height;
            else if (units === "m") return (this.width / 100 * this.height / 100);
            return (this.width * 10 * this.height * 10);

        }
        changeUnits(units) {
            this.units = units;
        }
        toString() {
            const units = this.units;
            if (units === "cm") return `Figures units: ${units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
            else if (units === "m") return `Figures units: ${units} Area: ${this.area} - width: ${this.width / 100}, height: ${this.height / 100}`;
            else return `Figures units: ${units} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}
const a = returnClasses();
let c = new a.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new a.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
