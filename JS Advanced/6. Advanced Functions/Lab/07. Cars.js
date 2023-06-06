function cars(arr) {
    const cars = {};
    const commandsObj = {
        create: (name, doesInherit, parent) => {
            if (doesInherit) {
                cars[name] = Object.create(cars[parent]);
            } else {
                cars[name] = {};
            }
        },
        set: (name, key, value) => { cars[name][key] = value; },
        print: (name) => {
            const result = [];
            for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }
            console.log(result.join(","));
        }
    };

    for (const line of arr) {
        const [command, ...params] = line.split(" ");
        commandsObj[command](...params);
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);