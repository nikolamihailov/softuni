const form = document.querySelector("form");
const registerBtn = document.querySelector("button");
const notificationError = document.querySelector(".notification");
const REGISTER_URL = "http://localhost:3030/users/register";

document.getElementById("logout").style.display = "none";
registerBtn.addEventListener("click", registerUser);

async function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const passRe = formData.get("rePass");

    if (email.trim() === "" || password.trim() === "" || passRe.trim() === "") {
        notificationError.textContent = "Fields cannot be empty!";
        return;
    }
    if (password.trim() !== passRe.trim()) {
        notificationError.textContent = "Passwords must be the same!";
        return;
    }

    try {
        const res = await fetch(REGISTER_URL, {
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

