function attachGradientEvents() {
    const resultPercent = document.getElementById("result");
    const gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", (event) => {
        resultPercent.textContent = `${Math.floor((event.offsetX) / 3)}%`;
    });
}