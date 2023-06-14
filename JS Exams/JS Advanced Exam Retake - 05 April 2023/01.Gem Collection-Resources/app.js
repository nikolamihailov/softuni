window.addEventListener("load", solve);

function solve() {
    const [name, color, carats, price, addBtn] = Array.from(document.querySelectorAll("form input"));
    const type = document.getElementById("type");
    const [previewList, collection] = Array.from(document.querySelectorAll("ul"));

    addBtn.addEventListener("click", addGem);

    function addGem(e) {
        e.preventDefault();
        if (name.value.trim() === "" || color.value.trim() === ""
            || carats.value.trim() === "" || price.value.trim() === ""
            || type.value === "") return;
        const li = document.createElement("li");
        li.classList.add("gem-info");
        const article = document.createElement("article");
        const h4 = document.createElement("h4");
        h4.textContent = name.value;
        const pColor = document.createElement("p");
        pColor.textContent = `Color: ` + color.value;
        const pCarats = document.createElement("p");
        pCarats.textContent = `Carats: ` + carats.value;
        const pPrice = document.createElement("p");
        pPrice.textContent = `Price: ` + price.value + "$";
        const pType = document.createElement("p");
        pType.textContent = `Type: ` + type.value;
        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save to Collection";
        saveBtn.classList.add("save-btn");
        saveBtn.addEventListener("click", saveFunc);
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit Information";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", editFunc);
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.addEventListener("click", cancelFunc);
        li.appendChild(article);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);
        previewList.appendChild(li);
        let nameF = name.value;
        let colorF = color.value;
        let caratsF = carats.value;
        let priceF = price.value;
        let typeF = type.value;
        name.value = "";
        color.value = "";
        carats.value = "";
        price.value = "";
        type.value = "";
        addBtn.disabled = true;

        function saveFunc() {
            li.classList.remove("gem-info");
            li.innerHTML = "";
            const p = document.createElement("p");
            p.classList.add("collection-item");
            p.textContent = `${nameF} - Color: ${colorF}/ Carats: ${caratsF}/ Price: ${priceF}$/ Type: ${typeF}`;
            li.appendChild(p);
            collection.appendChild(li);
            addBtn.disabled = false;
        }

        function editFunc() {
            name.value = nameF;
            color.value = colorF;
            carats.value = caratsF;
            price.value = priceF;
            type.value = typeF;
            addBtn.disabled = false;
            li.remove();
        }

        function cancelFunc() {
            li.remove();
            addBtn.disabled = false;
        }
    }
}
