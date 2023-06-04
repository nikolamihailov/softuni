function addItem() {
    const ul = document.getElementById("items");
    const inputText = document.getElementById("newItemText");
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.textContent = inputText.value;
    a.textContent = "[Delete]";
    a.href = "#";
    a.addEventListener("click", () => { li.remove(); });
    li.appendChild(a);
    ul.appendChild(li);
    inputText.value = "";
}