function solve() {
    const loadBtn = document.getElementById("loadBooks");
    const tbody = document.querySelector("tbody");
    const formTitle = document.querySelector("form h3");
    const [bookTitleInput, bookAuthorInput] = Array.from(
        document.querySelectorAll("form input[type=text]")
    );
    const submitBtn = document.querySelector("form button");

    const BOOKS_URL = "http://localhost:3030/jsonstore/collections/books";

    loadBtn.addEventListener("click", loadBooks);
    submitBtn.addEventListener("click", createBook);
    let idE = "";
    async function loadBooks() {
        try {
            tbody.innerHTML = "";
            const res = await fetch(BOOKS_URL);
            const data = await res.json();
            Object.entries(data).forEach(([id, { author, title }]) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>`;
                const [editBtn, deleteBtn] = Array.from(tr.querySelectorAll("button"));
                editBtn.addEventListener("click", async (e) => {
                    e.preventDefault();
                    formTitle.textContent = "Edit FORM";
                    submitBtn.textContent = "Save";
                    const [title, author, _] = Array.from(tr.querySelectorAll("td"));
                    bookTitleInput.value = title.textContent.trim();
                    bookAuthorInput.value = author.textContent.trim();
                    idE = id;
                });
                deleteBtn.addEventListener("click", async () => {
                    const resD = await fetch(`${BOOKS_URL}/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    const dataD = await resD.json();
                    console.log(dataD);
                    alert("Book deleted!");
                    loadBooks();
                });
                tbody.appendChild(tr);
            });

        } catch (error) {
            console.log(error);
        }
    }

    async function createBook(e) {
        e.preventDefault();
        try {
            if (e.target.textContent === "Save") {
                const resE = await fetch(`${BOOKS_URL}/${idE}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        author: bookAuthorInput.value.trim(),
                        title: bookTitleInput.value.trim()
                    })
                });
                const dataE = await resE.json();
                console.log(dataE);
                e.target.textContent = "Submit";
                formTitle.textContent = "FORM";
                bookAuthorInput.value = "";
                bookTitleInput.value = "";
                alert("Book updated!");
                loadBooks();
            } else {
                const resE = await fetch(BOOKS_URL, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        author: bookAuthorInput.value.trim(),
                        title: bookTitleInput.value.trim()
                    })
                });
                const dataE = await resE.json();
                console.log(dataE);
                alert("Book added!");
                loadBooks();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
solve();
