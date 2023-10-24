const input = document.querySelector("input[type='file']");
const img = document.querySelector("img");
if (input) {
    input.addEventListener("change", (e) => {
        img.src = URL.createObjectURL(e.target.files[0]);
    });
}
