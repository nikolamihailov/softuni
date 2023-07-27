import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/offers.js";

const dashboardTemplate = (offers) => html`
 <section id="dashboard">
        <h2>Job Offers</h2>
        ${offers.length > 0 ? offers.map(x => html`${offerTemplate(x)}`)
        : html`<h2> No offers yet.</h2 > `}
      </section>
`;

const offerTemplate = (o) => html`
<div class="offer">
          <img src="${o.imageUrl}" alt="${o.imageUrl}" />
          <p>
            <strong>Title: </strong><span class="title">${o.title}</span>
          </p>
          <p><strong>Salary:</strong><span class="salary">${o.salary}</span></p>
          <a class="details-btn" href="/dashboard/${o._id}">Details</a>
        </div>
`;

export async function dashBoardPage(ctx) {
    const offers = await getAllOffers();
    ctx.render(dashboardTemplate(offers));
}