import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../api/search.js";
import { createFormHandler, getUserData } from "../utils.js";

const searchTemplate = (user,shoes, onSearch) => html`
<section id="search">
        <h2>Search by Brand</h2>

        <form class="search-wrapper cf" @submit=${onSearch}>
          <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
          <button type="submit">Search</button>
        </form>

        <h3>Results:</h3>
  <div id="search-container">
        ${shoes && shoes.length > 0 ? html`
          <ul class="card-wrapper">
            ${shoes.map(s => html`${shoeTempl(s, user)}`)}
          
          </ul>
        ` : html`<h2>There are no results found.</h2>`}
        </div>
      </section>
`;

const shoeTempl = (s, user) => html`
  <li class="card">
              <img src="${s.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${s.brand}</span>
              </p>
              <p>
                <strong>Model: </strong><span class="model">${s.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${s.value}</span>$</p>
              ${user ? html`<a class="details-btn"  href="/dashboard/details/${s._id}" >Details</a>`: null}
            </li>
`

export async function searchPage(ctx) {
    let shoes;
    const user = getUserData();

    function update() {
        ctx.render(searchTemplate(user, shoes, createFormHandler(onSearch)));
    }

    update();

    async function onSearch({ search }) {
        if (search === "") return alert("You must fill search in order to search!")
        shoes = await getAllShoes(search);
        update(); 
    }
    
}
