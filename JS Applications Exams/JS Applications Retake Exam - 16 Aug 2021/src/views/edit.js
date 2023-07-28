import { html } from "../../node_modules/lit-html/lit-html.js";
import { editGame, getGameById } from "../api/games.js";
import { createFormHandler } from "../utils.js";

const editGameTemplate = (game, onEdit) => html`
    <section id="edit-page" class="auth">
            <form id="edit" @submit=${onEdit}>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" .value=${game.title} name="title" value="">

                    <label for="category">Category:</label>
                    <input type="text" id="category" .value=${game.category} name="category" value="">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" .value=${game.maxLevel} name="maxLevel" min="1" value="">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" .value=${game.imageUrl} name="imageUrl" value="">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" .value=${game.summary} id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const game = await getGameById(id);
   // console.log(shoe);
    ctx.render(editGameTemplate(game, createFormHandler(onEdit)));

    async function onEdit({title, category, maxLevel, imageUrl, summary}) {
        if ([ title, category, maxLevel, imageUrl, summary].some(f => f === "")) {
            return alert("All fields are required!");
        }

        await editGame(id, {  title, category, maxLevel, imageUrl, summary });
        ctx.page.redirect("/details/"+id);
    }
}