function extract(id) {
    const pText = document.getElementById(id).textContent;
    const regex = /[(]{1}[\w ]+[)]{1}/g;
    const result = pText.match(regex)
        .map(el => el = el.slice(1, -1))
        .join("; ");
    return result;
}