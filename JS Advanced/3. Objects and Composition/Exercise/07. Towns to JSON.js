function townstoJSON(arr) {
    const result = [];
    arr.shift();
    for (const line of arr) {
        const [_, town, latitude, longtitude] = line.split("|");
        result.push({
            Town: town.trim(),
            Latitude: Number(Number(latitude.trim()).toFixed(2)),
            Longitude: Number(Number(longtitude.trim()).toFixed(2))
        });
    }
    console.log(JSON.stringify(result));
}
townstoJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);