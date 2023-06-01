function fromJSONtoHTMLtable(str) {
    const arr = JSON.parse(str);
    let res = "<table>\n   <tr>";
    for (const key of Object.keys(arr[0])) {
        res += `<th>${key.trim()}</th>`;
    }
    res += "</tr>\n";
    for (const obj of arr) {
        res += `   <tr>`;
        for (const [key, value] of Object.entries(obj)) {
            res += `<td>${escapeString(value)}</td>`;
        }
        res += `</tr>\n`;
    }
    res += "</table>";
    function escapeString(key) {
        let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return key.toString().replace(/[&<> "]/g, (key) => entityMap[key]);
    }
    console.log(res);
}
fromJSONtoHTMLtable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);