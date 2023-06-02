function wordsUpperase(str) {
    console.log(str.match(/\w+/g).map(m => m.toUpperCase()).join(", "));
}
wordsUpperase('Hi, how are you?');