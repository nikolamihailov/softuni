import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../api/shoes.js";

const dashboardTemplate = (shoes) => html`
<section id="dashboard">
        <h2>Collectibles</h2>
        ${shoes && shoes.length > 0 ? html`
             <ul class="card-wrapper">${shoes.map(x=>html`${shoeTemplate(x)}`)}</ul>
        ` : html`  <h2>There are no items added yet.</h2>`}
      </section>
`;

const shoeTemplate = (s) => html`
 <li class="card">
            <a href="/dashboard/details/${s._id}"><img src="${s.imageUrl}" alt="travis" /></a>
            <p>
              <strong>Brand: </strong><span class="brand">${s.brand}</span>
            </p>
            <p>
              <strong>Model: </strong><span class="model">${s.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${s.value}</span>$</p>
            <a class="details-btn" href="/dashboard/details/${s._id}">Details</a>
          </li>
`;

export async function dashBoardPage(ctx) {
    const shoes = await getAllShoes();
    ctx.render(dashboardTemplate(shoes));
}

  