function addItem() {
    const menu = document.getElementById("menu");
    const optionText = document.getElementById("newItemText");
    const optionValue = document.getElementById("newItemValue");
    const option = document.createElement("option");
    option.value = optionValue.value;
    option.textContent = optionText.value;
    menu.appendChild(option);
    optionText.value = "";
    optionValue.value = "";
}