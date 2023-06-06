function listProcessor(commands) {
    let collection = [];
    const obj = {
        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter(el => el !== str),
        print: () => console.log(collection.join(","))
    };
    for (const commandInfo of commands) {
        const [command, str] = commandInfo.split(" ");
        obj[command](str);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);