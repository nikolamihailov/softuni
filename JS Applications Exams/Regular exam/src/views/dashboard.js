import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFunFacts } from "../api/facts.js";

const funFactsTemplate = (facts) => html`
  <h2>Fun Facts</h2>
  ${facts && facts.length > 0 ? html`
        <section id="dashboard">${facts.map(f => html`${funFactTemplate(f)}`)}</section>
  ` : html`<h2>No Fun Facts yet.</h2>`}
`;

const funFactTemplate = (f) => html`
    <div class="fact">
          <a class="details-btn" href="/details/${f._id}"><img src="${f.imageUrl}" alt="example1" /></a>
          <h3 class="category">${f.category}</h3>
          <p class="description">${f.description}</p>
          <a class="details-btn" href="/details/${f._id}">More Info</a>
        </div>
`;

export async function dashBoardPage(ctx) {
  const funFacts = await getAllFunFacts();
  ctx.render(funFactsTemplate(funFacts));
}