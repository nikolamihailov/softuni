function solve() {
  const [furnitureList, result] = Array.from(document.querySelectorAll("#exercise textarea"));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("#exercise button"));
  const tbody = document.querySelector("tbody");

  generateBtn.addEventListener("click", () => {
    const allFurniture = JSON.parse(furnitureList.value);
    for (const furniture of allFurniture) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td><img src=${furniture.img}></td>
                      <td><p>${furniture.name}</p></td>
                      <td><p>${furniture.price}</p></td>
                      <td><p>${furniture.decFactor}</p></td>
                      <td><input type="checkbox"/></td>`;
      tbody.appendChild(tr);
    }
  });

  buyBtn.addEventListener("click", () => {
    const checkboxes = Array.from(document.querySelectorAll("tr input"));
    let totalPrice = 0;
    const allFurniture = [];
    const decFactors = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const tr = checkbox.parentElement.parentElement;
        const name = tr.querySelector("td:nth-child(2) p").textContent;
        const price = Number(tr.querySelector("td:nth-child(3) p").textContent);
        const decFactor = Number(tr.querySelector("td:nth-child(4) p").textContent);
        allFurniture.push(name);
        totalPrice += price;
        decFactors.push(decFactor);
      }
    });

    const avgFactor = decFactors.reduce((a, b) => a + b, 0) / decFactors.length;
    result.value += `Bought furniture: ${allFurniture.join(", ")}\n`;
    result.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    result.value += `Average decoration factor: ${avgFactor}`;
  });
}