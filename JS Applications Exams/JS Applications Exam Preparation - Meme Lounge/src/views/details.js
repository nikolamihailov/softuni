import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMemeById } from "../api/memes.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (meme, onDelete) => html`
    <section id="meme-details">
            <h1>Meme Title: ${meme.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${meme.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>
${meme.canEdit ? html`
                  <a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>
` : null}
                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                  

                </div>
            </div>
        </section>
`;


export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const user = getUserData();
    const meme = await getMemeById(id);

    if (user && user._id === meme._ownerId) {
        meme.canEdit = true;
    }

    update();

    function update() {
        ctx.render(detailsTemplate(meme, onDelete));
    }


    async function onDelete() {
        const choice = confirm("Do you want to delete this game?");

        if (choice) {
            await deleteMeme(id);
            ctx.page.redirect("/all-memes");
        }
    }
}