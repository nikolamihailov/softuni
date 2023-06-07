function solve() {
    const [movies, archive] = Array.from(document.querySelectorAll("section ul"));
    const [name, hall, price] = Array.from(document.querySelectorAll("#container input"));
    const onScreenBtn = document.querySelector("#container button");
    const clearBtn = document.querySelector("#archive button");
    clearBtn.addEventListener("click", () => { archive.innerHTML = ""; });

    onScreenBtn.addEventListener("click", addMovie);

    function addMovie(e) {
        e.preventDefault();
        if (name.value.trim() === "" || hall.value.trim() === "" || price.value.trim() === ""
            || isNaN(price.value)) return;
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = name.value;
        const strong = document.createElement("strong");
        strong.textContent = `Hall: ` + hall.value;
        const div = document.createElement("div");
        const strongInDiv = document.createElement("strong");
        strongInDiv.textContent = price.value;
        const input = document.createElement("input");
        input.placeholder = "Tickets Sold";
        const archiveBtn = document.createElement("button");
        archiveBtn.textContent = "Archive";
        archiveBtn.addEventListener("click", archiveF);
        div.appendChild(strongInDiv);
        div.appendChild(input);
        div.appendChild(archiveBtn);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        movies.appendChild(li);
        let priceC = 0;
        priceC = price.value;
        name.value = "";
        hall.value = "";
        price.value = "";

        function archiveF() {
            if (input.value.trim() === "" || isNaN(input.value)) return;
            const totalPrice = Number(input.value) * Number(priceC);
            strong.textContent = `Total amount: ` + totalPrice.toFixed(2);
            div.remove();
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => { li.remove(); });
            li.appendChild(deleteBtn);
            archive.appendChild(li);
        }
    }
}