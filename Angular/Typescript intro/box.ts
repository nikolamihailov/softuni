class Box<A> {
    private _elements: A[] = [];

    public add(element: A) {
        this.elements.push(element);
    }

    public remove() {
        this.elements.pop();
    }

    get count(): number {
        return this.elements.length;
    }

    get elements() {
        return this._elements;
    }
}

/* const box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count); */

const box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);