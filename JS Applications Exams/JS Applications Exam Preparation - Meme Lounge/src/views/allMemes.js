import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../api/memes.js";

const allMemesTemplate = (memes) => html`
 <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                <!-- Display : All memes in database ( If any ) -->
      ${memes && memes.length > 0 ? html`
      ${memes.map(m => html`${memeTemplate(m)}`)}
      ` : html` <p class="no-memes">No memes in database.</p>`}
                <!-- Display : If there are no memes in database -->
               
            </div>
        </section>
`;

const memeTemplate = (m) => html`
   <div class="meme">
            <div class="card">
                                                <div class="info">
                                                    <p class="meme-title">${m.title}</p>
                                                    <img class="meme-image" alt="meme-img" src="${m.imageUrl}">
                                                </div>
                                                <div id="data-buttons">
                                                    <a class="button" href="/details/${m._id}">Details</a>
                                                </div>
                                                                                       </div>
                </div>
`;

export async function allMemesPage(ctx) {
    const memes = await getAllMemes();
    ctx.render(allMemesTemplate(memes));
}

