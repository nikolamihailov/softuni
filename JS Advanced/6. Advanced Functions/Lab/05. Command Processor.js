function commandProcessor() {
    let str = "";
    return {
        append: (string) => str += string,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, -n),
        print: () => console.log(str)
    };
}
let secondZeroTest = commandProcessor();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();