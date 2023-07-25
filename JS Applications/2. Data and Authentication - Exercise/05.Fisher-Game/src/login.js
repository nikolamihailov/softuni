const form = document.querySelector("form");
const loginBtn = document.querySelector("button");
const notificationError = document.querySelector(".notification");

const LOGIN_URL = "http://localhost:3030/users/login";
function login() {
    const accessToken = sessionStorage.getItem("accessToken");
    const guestNav = document.getElementById("guest");

    document.getElementById("logout").style.display = "none";

    loginBtn.addEventListener("click", loginUser);

    async function loginUser(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        if (email.trim() === "" || password.trim() === "") {
            notificationError.textContent = "Fields cannot be empty!";
            return;
        }

        try {
            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!res.ok) {
                throw new Error(res.statusText);
            }
            const data = await res.json();

            sessionStorage.setItem("accessToken", data.accessToken);
            sessionStorage.setItem("email", data.email);
            sessionStorage.setItem("_id", data._id);

            window.location = "index.html";
        } catch (error) {
            notificationError.textContent = error;
        }
    }
}

login();