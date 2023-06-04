function solve() {
  const textarea = document.getElementById("input");
  const output = document.getElementById("output");
  const sentences = textarea.value.split(".").filter(s => s.length >= 1);
  while (sentences.length > 0) {
    const p = document.createElement("p");
    p.textContent = sentences.splice(0, 3).join(".") + ".";
    output.appendChild(p);
  }
}