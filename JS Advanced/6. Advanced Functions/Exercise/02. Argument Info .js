function argumentInfo(...args) {
    const types = {};
    for (const arg of args) {
        const type = typeof arg;
        if (types.hasOwnProperty(type)) {
            types[type]++;
        } else {
            types[type] = 1;
        }
        console.log(`${type}: ${arg}`);
    }
    const sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);
    for (const [type, count] of sortedTypes) {
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });