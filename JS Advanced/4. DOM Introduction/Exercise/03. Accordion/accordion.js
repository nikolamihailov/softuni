function toggle() {
    const buttonTxt = document.querySelector(".head .button");
    const extraText = document.getElementById("extra");
    if (buttonTxt.textContent === "More") {
        extraText.style.display = "block";
        buttonTxt.textContent = "Less";
    } else if (buttonTxt.textContent === "Less") {
        extraText.style.display = "none";
        buttonTxt.textContent = "More";
    }
}