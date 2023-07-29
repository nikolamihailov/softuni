import { html } from "../../node_modules/lit-html/lit-html.js";
import { createMeme } from "../api/memes.js";
import { createFormHandler, showHideNotification } from "../utils.js";

const createMemeTemplate = (onCreate) => html`
   <section id="create-meme">
            <form id="create-form" @submit=${onCreate}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export async function createPage(ctx) {
    ctx.render(createMemeTemplate(createFormHandler(onCreate)));

    async function onCreate({ title, description, imageUrl }) {
        if ([title, description, imageUrl].some(f => f === "")) {
            return showHideNotification("All fields are required!");
        }

        await createMeme({ title, description, imageUrl });
        ctx.page.redirect("/all-memes");
    }
}