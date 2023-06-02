function sortByTwoCriterias(arr) {
    console.log(arr.sort((a, b) => { return a.length - b.length || a.localeCompare(b); }).join("\n"));
}
sortByTwoCriterias(['alpha',
    'beta', 'gamma']);
