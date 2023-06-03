function editElement(h1, str, replacer) {
    const reg = new RegExp(str, 'g');
    const text = h1.textContent;
    const result = text.replace(reg, replacer);
    h1.textContent = result;
}