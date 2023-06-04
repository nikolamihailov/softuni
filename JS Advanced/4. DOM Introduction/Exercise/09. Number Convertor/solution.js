function solve() {
    const result = document.getElementById("result");
    const toValue = document.getElementById("selectMenuTo");
    toValue.innerHTML = ` <option selected value="binary">Binary</option>
                          <option value="hexadecimal">Hexadecimal</option>`;
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const input = Number(document.getElementById("input").value);
        if (toValue.value === "binary") {
            result.value = input.toString(2);
        } else {
            result.value = input.toString(16).toUpperCase();
        }
    });
}