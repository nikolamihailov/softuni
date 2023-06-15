window.addEventListener('load', solve);

function solve() {
    const [reservationInfo, confirmReservation] = Array.from(document.querySelectorAll("ul"));
    const nextBtn = document.getElementById("next-btn");
    const [firstName, lastName, checkInDate, checkOutDate, guests] = Array.from(document.querySelectorAll("input"));
    const h1 = document.getElementById("verification");

    nextBtn.addEventListener("click", addTicket);
    function addTicket(e) {
        e.preventDefault();

        if (firstName.value.trim() === "" || lastName.value.trim() === ""
            || checkInDate.value.trim() === "" || checkOutDate.value.trim() === ""
            || guests.value.trim() === ""
        ) return;

        function isBefore(date1, date2) {
            return date1 < date2;
        }

        const d1 = new Date(checkInDate.value);
        const d2 = new Date(checkOutDate.value);
        if (!isBefore(d1, d2)) return;

        const li = document.createElement("li");
        li.classList.add("reservation-content");
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        const pInDate = document.createElement("p");
        pInDate.textContent = `From date: ${checkInDate.value}`;
        const pOutDate = document.createElement("p");
        pOutDate.textContent = `To date: ${checkOutDate.value}`;
        const pGuests = document.createElement("p");
        pGuests.textContent = `For ${guests.value} people`;
        article.appendChild(h3);
        article.appendChild(pInDate);
        article.appendChild(pOutDate);
        article.appendChild(pGuests);
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
        reservationInfo.appendChild(li);
        let fN = firstName.value;
        let lN = lastName.value;
        let dateIn = checkInDate.value;
        let dateOut = checkOutDate.value;
        let guestsF = guests.value;
        firstName.value = "";
        lastName.value = "";
        checkInDate.value = "";
        checkOutDate.value = "";
        guests.value = "";
        nextBtn.disabled = true;

        function editFunc() {
            firstName.value = fN;
            lastName.value = lN;
            checkInDate.value = dateIn;
            checkOutDate.value = dateOut;
            guests.value = guestsF;
            nextBtn.disabled = false;
            li.remove();
        }

        function continueFunc() {

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
            confirmReservation.appendChild(li);
        }

        function cancelFunc() {
            li.remove();
            h1.classList.add("reservation-cancelled");
            h1.textContent = "Cancelled.";
            nextBtn.disabled = false;
        }

        function confirmFunc() {
            li.remove();
            h1.classList.add("reservation-confirmed");
            h1.textContent = "Confirmed.";
            nextBtn.disabled = false;
        }
    }
}





