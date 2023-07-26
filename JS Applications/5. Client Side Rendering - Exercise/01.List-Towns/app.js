import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const form = document.querySelector(".content");
const loadBtn = document.getElementById("btnLoadTowns");
const root = document.getElementById("root");

loadBtn.addEventListener("click", loadTows);

function loadTows(e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const townsInput = formdata.get("towns");
    render(towns(townsInput.trim().split(", ")), root);
}

const towns = (t) => html`
  <ul>
    ${t.map((town) => html`<li>${town}</li>`)}
  </ul>
`;