function add(num) {
    return function (a) {
        return num + a;
    };
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));