function attachEvents() {
    const phoneBookUl = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");
    const [personInput, phoneInput] = Array.from(document.querySelectorAll("input[type=text]"));
    const createBtn = document.getElementById("btnCreate");

    const PHONEBOOK_URL = "http://localhost:3030/jsonstore/phonebook";

    loadBtn.addEventListener("click", loadPhonebookEntries);
    createBtn.addEventListener("click", createPhonebookEntry);

    async function loadPhonebookEntries() {
        try {
            const res = await fetch(PHONEBOOK_URL);
            const data = await res.json();
            phoneBookUl.innerHTML = "";
            Object.values(data).forEach(el => {
                const li = document.createElement("li");
                li.textContent = `${el.person}: ${el.phone}`;
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click", () => {
                    fetch(`${PHONEBOOK_URL}/${el._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json"
                        },
                    }).then(res => {
                        if (res.ok) alert("Deleted!");
                    }).catch(err => {
                        console.log(err);
                    });
                });
                li.appendChild(deleteBtn);
                phoneBookUl.appendChild(li);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function createPhonebookEntry() {
        try {
            const res = await fetch(PHONEBOOK_URL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    person: personInput.value,
                    phone: phoneInput.value
                })
            });
            const data = await res.json();
            console.log(data);
            personInput.value = "";
            phoneInput.value = "";
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();