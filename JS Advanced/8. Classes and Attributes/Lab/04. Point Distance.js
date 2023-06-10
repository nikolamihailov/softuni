class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(obj1, obj2) {
        const x1 = Math.max(obj1.x, obj2.x);
        const x2 = Math.min(obj1.x, obj2.x);
        const y1 = Math.max(obj1.y, obj2.y);
        const y2 = Math.min(obj1.y, obj2.y);
        const a = x1 - x2;
        const b = y1 - y2;
        const res = Math.sqrt(a ** 2 + b ** 2);
        return res;
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));