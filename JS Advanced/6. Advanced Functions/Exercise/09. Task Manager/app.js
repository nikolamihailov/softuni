function solve() {
    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const addBtn = document.getElementById("add");
    const [addTaskS, openS, inProgressS, completeS] = Array.from(document.querySelectorAll("section"));
    let taskV, descriptionV, dateV;
    addBtn.addEventListener("click", addTask);

    function addTask(e) {
        e.preventDefault();
        if (task.value.trim() === "" || description.value.trim() === "" || date.value.trim() === "") return;
        const div = openS.querySelector("div:nth-child(2)");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = task.value;
        taskV = task.value;
        const pDes = document.createElement("p");
        pDes.textContent = `Description: ` + description.value;
        descriptionV = description.value;
        const pDate = document.createElement("p");
        pDate.textContent = `Due Date: ` + date.value;
        dateV = date.value;
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex");
        const startBtn = document.createElement("button");
        startBtn.textContent = "Start";
        startBtn.classList.add("green");
        startBtn.addEventListener("click", startTask);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("red");
        deleteBtn.addEventListener("click", () => { article.remove(); });
        buttonsDiv.appendChild(startBtn);
        buttonsDiv.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(pDes);
        article.appendChild(pDate);
        article.appendChild(buttonsDiv);
        div.appendChild(article);
        task.value = "";
        description.value = "";
        date.value = "";
    }

    function startTask(event) {
        const articleO = event.target.parentElement.parentElement;
        const div = inProgressS.querySelector("div:nth-child(2)");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = articleO.querySelector("h3").textContent;
        const pDes = document.createElement("p");
        pDes.textContent = articleO.children[1].textContent;
        const pDate = document.createElement("p");
        pDate.textContent = articleO.children[2].textContent;
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("red");
        deleteBtn.addEventListener("click", () => { article.remove(); });
        const finishBtn = document.createElement("button");
        finishBtn.textContent = "Finish";
        finishBtn.classList.add("orange");
        finishBtn.addEventListener("click", finishTask);
        buttonsDiv.appendChild(deleteBtn);
        buttonsDiv.appendChild(finishBtn);
        article.appendChild(h3);
        article.appendChild(pDes);
        article.appendChild(pDate);
        article.appendChild(buttonsDiv);
        div.appendChild(article);
        articleO.remove();
    }

    function finishTask(ev) {
        const articleI = ev.target.parentElement.parentElement;
        const div = completeS.querySelector("div:nth-child(2)");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = articleI.querySelector("h3").textContent;
        const pDes = document.createElement("p");
        pDes.textContent = articleI.children[1].textContent;
        const pDate = document.createElement("p");
        pDate.textContent = articleI.children[2].textContent;
        article.appendChild(h3);
        article.appendChild(pDes);
        article.appendChild(pDate);
        div.appendChild(article);
        articleI.remove();
    }
}