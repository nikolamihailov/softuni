function focused() {
    const inputs = Array.from(document.querySelectorAll("div input"));
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("focused");
        });
        input.addEventListener("blur", () => {
            input.parentElement.classList.remove("focused");
        });
    });
}