window.addEventListener('load', solve);

function solve() {
    const [ticketPreview, confirmTicket] = Array.from(document.querySelectorAll("ul"));
    const nextBtn = document.getElementById("next-btn");
    const [firstName, lastName, numberPeople, date, days] = Array.from(document.querySelectorAll("input"));

    nextBtn.addEventListener("click", addTicket);
    function addTicket(e) {
        e.preventDefault();
        if (firstName.value.trim() === "" || lastName.value.trim() === ""
            || numberPeople.value.trim() === "" || date.value.trim() === ""
            || days.value.trim() === ""
        ) return;
        const li = document.createElement("li");
        li.classList.add("ticket");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        const pDate = document.createElement("p");
        pDate.textContent = `From date: ${date.value}`;
        const pNumberPeople = document.createElement("p");
        pNumberPeople.textContent = `For ${numberPeople.value} people`;
        const pDays = document.createElement("p");
        pDays.textContent = `For ${days.value} days`;
        article.appendChild(h3);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pNumberPeople);
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editFunc);
        const continueBtn = document.createElement("button");
        continueBtn.classList.add("continue-btn");
        continueBtn.textContent = "Continue";
        continueBtn.addEventListener("click", continueFunc);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        ticketPreview.appendChild(li);
        let fN = firstName.value;
        let lN = lastName.value;
        let dateF = date.value;
        let peopleF = numberPeople.value;
        let daysF = days.value;
        firstName.value = "";
        lastName.value = "";
        numberPeople.value = "";
        date.value = "";
        days.value = "";
        nextBtn.disabled = true;

        function editFunc() {
            firstName.value = fN;
            lastName.value = lN;
            numberPeople.value = peopleF;
            date.value = dateF;
            days.value = daysF;
            nextBtn.disabled = false;
            li.remove();
        }

        function continueFunc() {
            li.classList.remove("ticket");
            li.classList.add("ticket-content");
            li.innerHTML = "";
            li.appendChild(article);
            const confirmBtn = document.createElement("button");
            confirmBtn.classList.add("confirm-btn");
            confirmBtn.textContent = "Confirm";
            confirmBtn.addEventListener("click", confirmFunc);
            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel-btn");
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", cancelFunc);
            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);
            confirmTicket.appendChild(li);
        }

        function cancelFunc() {
            li.remove();
            nextBtn.disabled = false;
        }

        function confirmFunc() {
            const main = document.getElementById("main");
            main.remove();
            const body = document.body;
            const h1 = document.createElement("h1");
            h1.id = "thank-you";
            h1.textContent = "Thank you, have a nice day!";
            const backBtn = document.createElement("button");
            backBtn.id = "back-btn";
            backBtn.textContent = "Back";
            backBtn.addEventListener("click", () => { location.reload(); });
            body.appendChild(h1);
            body.appendChild(backBtn);
            nextBtn.disabled = false;
        }
    }
}




