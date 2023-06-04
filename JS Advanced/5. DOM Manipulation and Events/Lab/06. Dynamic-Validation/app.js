function validate() {
    const email = document.getElementById("email");
    const reg = /[a-z]+@[a-z]+[.][a-z]+/g;
    email.addEventListener("change", () => {
        if (reg.test(email.value)) {
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        }
    });
}