function validate() {
    const [name, email, pass, passAgain, checkbox, companyNum] =
        Array.from(document.querySelectorAll("#registerForm input"));
    const submitBtn = document.getElementById("submit");
    const validDiv = document.getElementById("valid");

    submitBtn.addEventListener("click", validation);
    let companyNumShowing = false;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.getElementById("companyInfo").style.display = "block";
            companyNumShowing = true;
        } else {
            document.getElementById("companyInfo").style.display = "none";
            companyNumShowing = false;
        }
    });

    function validation(e) {
        e.preventDefault();
        const nameRegex = /^[A-Za-z0-9]{3,20}$/;
        const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        const passwordRegex = /^[\w]{5,15}$/;
        let isNameValid = false;
        let isEmailValid = false;
        let isPassValid = false;
        let isPassAgainValid = false;
        let isCompanyNumValid = true;

        if (!nameRegex.test(name.value)) {
            name.style.borderColor = "red";
            isNameValid = false;
        } else {
            name.style.border = "none";
            isNameValid = true;
        }

        if (!emailRegex.test(email.value)) {
            email.style.borderColor = "red";
            isEmailValid = false;
        } else {
            email.style.border = "none";
            isEmailValid = true;

        }

        if (pass.value === passAgain.value
            && passwordRegex.test(pass.value)
            && passwordRegex.test(passAgain.value)) {
            pass.style.border = "none";
            isPassValid = true;
            passAgain.style.border = "none";
            isPassAgainValid = true;
        } else {
            pass.style.borderColor = "red";
            isPassValid = false;
            passAgain.style.borderColor = "red";
            isPassAgainValid = false;
        }

        if (companyNumShowing) {
            if (companyNum.value >= 1000 && companyNum.value <= 9999) {
                companyNum.style.border = "none";
                isCompanyNumValid = true;
            } else {
                companyNum.style.borderColor = "red";
                isCompanyNumValid = false;
            }
        }

        if (isNameValid && isEmailValid &&
            isPassValid && isPassAgainValid && isCompanyNumValid) {
            validDiv.style.display = "block";
        } else {
            validDiv.style.display = "none";
        }
    }
}
