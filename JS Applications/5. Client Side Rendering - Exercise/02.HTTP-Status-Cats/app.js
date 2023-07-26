import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const catsContainer = document.getElementById("allCats");



const ulTem = () => html`
<ul>
    ${cats.map(c => html`${cardTemplate(c)}`)}
</ul>
`;

const cardTemplate = (c) => html`
 <li>
                <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${(e) => showHide(e)}>Show status code</button>
                    <div class="status" style="display: none" id="200">
                        <h4 class="card-title">Status Code: ${c.statusCode}</h4>
                        <p class="card-text">${c.statusMessage}</p>
                    </div>
                </div>
            </li>
`;

function showHide(e) {
    const btnText = e.target.textContent;
    const parent = e.target.parentElement;
    const statusSection = parent.querySelector(".status");
    if (btnText === "Show status code") {
        statusSection.style.display = "block";
        e.target.textContent = "Hide status code";
    } else {
        statusSection.style.display = "none";
        e.target.textContent = "Show status code";
    }
}
render(ulTem(), catsContainer);