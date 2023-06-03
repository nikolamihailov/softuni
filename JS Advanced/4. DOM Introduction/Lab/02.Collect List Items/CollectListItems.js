function extractText() {
    const items = Array.from(document.querySelectorAll("#items li"));
    const textarea = document.getElementById("result");
    textarea.textContent = items.map(item => item = item.textContent).join("\n");
}