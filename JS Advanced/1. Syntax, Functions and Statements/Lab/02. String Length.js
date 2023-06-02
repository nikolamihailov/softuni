function strLength(str1, str2, str3) {
    const allStrings = str1 + str2 + str3;
    const avgLength = Math.floor(allStrings.length / 3);
    console.log(`${allStrings.length}\n${avgLength}`);
}
strLength('chocolate', 'ice cream', 'cake');
