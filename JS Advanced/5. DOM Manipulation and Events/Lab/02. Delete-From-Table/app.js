function deleteByEmail() {
    const rows = Array.from(document.querySelectorAll("#customers tbody tr"));
    const input = document.querySelector('input[name="email"]');
    const result = document.getElementById("result");
    const match = rows.find(row => row.children[1].textContent === input.value);
    if (match) {
        match.remove();
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
    input.value = "";
}