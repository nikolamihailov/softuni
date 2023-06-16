window.addEventListener("load", solve);

function solve() {
  const [make, model, year, originalCost, sellingPrice] = Array.from(document.querySelectorAll("input"));
  const fuel = document.getElementById("fuel");
  const publishBtn = document.getElementById("publish");
  const tbody = document.getElementById("table-body");
  const profit = document.getElementById("profit");

  publishBtn.addEventListener("click", publishFunc);

  function publishFunc(e) {
    e.preventDefault();
    if (make.value.trim() === "" || model.value.trim() === ""
      || year.value.trim() === "" || originalCost.value.trim() === ""
      || sellingPrice.value.trim() === "" || fuel.value.trim() === ""
      || originalCost.value > sellingPrice.value) return;

    const tr = document.createElement("tr");
    tr.classList.add("row");
    const tdMake = document.createElement("td");
    tdMake.textContent = make.value;
    const tdModel = document.createElement("td");
    tdModel.textContent = model.value;
    const tdYear = document.createElement("td");
    tdYear.textContent = year.value;
    const tdFuel = document.createElement("td");
    tdFuel.textContent = fuel.value;
    const tdOriginalCost = document.createElement("td");
    tdOriginalCost.textContent = originalCost.value;
    const tdSellingPrice = document.createElement("td");
    tdSellingPrice.textContent = sellingPrice.value;
    const tdButtons = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editFunc);
    const sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.textContent = "Sell";
    sellBtn.addEventListener("click", sellFunc);
    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);
    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
    let makeF = make.value;
    let modelF = model.value;
    let yearF = year.value;
    let fuelF = fuel.value;
    let originalCostF = originalCost.value;
    let sellingPriceF = sellingPrice.value;
    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    function editFunc() {
      make.value = makeF;
      model.value = modelF;
      year.value = yearF;
      fuel.value = fuelF;
      originalCost.value = originalCostF;
      sellingPrice.value = sellingPriceF;
      tr.remove();
    }

    function sellFunc() {
      tr.remove();
      const ul = document.getElementById("cars-list");
      const li = document.createElement("li");
      li.classList.add("each-list");
      const spanOne = document.createElement("span");
      spanOne.textContent = `${makeF} ${modelF}`;
      const spanTwo = document.createElement("span");
      spanTwo.textContent = `${yearF}`;
      const spanThree = document.createElement("span");
      spanThree.textContent = `${Number(sellingPriceF) - Number(originalCostF)}`;
      li.appendChild(spanOne);
      li.appendChild(spanTwo);
      li.appendChild(spanThree);
      ul.appendChild(li);
      const newProfit = Number(sellingPriceF) - Number(originalCostF);
      const currentValue = parseFloat(profit.textContent);
      profit.textContent = (currentValue + newProfit).toFixed(2);

    }
  }

}
