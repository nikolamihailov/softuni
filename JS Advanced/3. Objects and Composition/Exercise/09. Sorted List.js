function sortedList() {
    const numbers = [];
    const obj = {
        size: 0,
        add(element) {
            numbers.push(element);
            this.size++;
            numbers.sort((a, b) => a - b);
        },
        remove(index) {
            if (numbers[index] !== undefined) {
                numbers.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (numbers[index] !== undefined) {
                return numbers[index];
            }
        },
    };
    return obj;
}
const list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));