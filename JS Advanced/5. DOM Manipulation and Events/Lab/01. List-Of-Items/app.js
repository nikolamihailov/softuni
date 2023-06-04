function addItem() {
    const ul = document.getElementById("items");
    const inputText = document.getElementById("newItemText");
    const li = document.createElement("li");
    li.textContent = inputText.value;
    ul.appendChild(li);
    inputText.value = "";
}