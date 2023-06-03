function solve() {
  const text = document.getElementById("text").value.toLowerCase();
  const namingConvention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");
  const words = text.split(" ");
  if (namingConvention === "Camel Case") {
    const changedWords = words.map(w => w = w[0].toUpperCase() + w.slice(1));
    changedWords[0] = changedWords[0][0].toLowerCase() + changedWords[0].slice(1);
    result.textContent = changedWords.join("");
  } else if (namingConvention === "Pascal Case") {
    result.textContent = words.map(w => w = w[0].toUpperCase() + w.slice(1)).join("");
  } else {
    result.textContent = "Error!";
  }
}