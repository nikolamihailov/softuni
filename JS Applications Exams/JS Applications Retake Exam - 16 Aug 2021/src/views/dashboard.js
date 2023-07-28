import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllGamesCatalogPage } from "../api/games.js";

const dashboardTemplate = (games) => html`
 <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
         ${games && games.length > 0 ? html`
         ${games.map(g => html`${gameTemplate(g)}`)}`
  : html`<h3 class="no-articles">No articles yet</h3>`}
            <!-- Display paragraph: If there is no games  -->
       
        </section>
`;

const gameTemplate = (g) => html`
   <div class="allGames">
                <div class="allGames-info">
                     <img src="${g.imageUrl}">
                    <h6>${g.category}</h6>
                    <h2>${g.title}</h2>
                    <a href="/details/${g._id}" class="details-button">Details</a>
                </div>

            </div>
`;

export async function dashBoardPage(ctx) {
    const games = await getAllGamesCatalogPage() ;
    ctx.render(dashboardTemplate(games));
}

  