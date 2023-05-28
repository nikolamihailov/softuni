function objectFactory(obj, arr) {
    const resArr = [];
    const composedObj = {};
    for (const [key, func] of Object.entries(obj)) {
        composedObj[key] = func;
    }

    for (const object of arr) {
        const newObj = {};
        for (const [key, value] of Object.entries(object.template)) {
            newObj[key] = value;
        }
        for (const func of object.parts) {
            newObj[func] = composedObj[func];
        }
        resArr.push(newObj);
    }
    return resArr;
}