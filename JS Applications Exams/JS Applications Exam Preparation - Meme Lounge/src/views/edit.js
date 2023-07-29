import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMeme, getMemeById } from "../api/memes.js";
import { createFormHandler, showHideNotification } from "../utils.js";

const editGameTemplate = (meme, onEdit) => html`
    <section id="edit-meme">
            <form id="edit-form" @submit=${onEdit}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" .value=${meme.title} placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" .value=${meme.description} placeholder="Enter Description" name="description">
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" .value=${meme.imageUrl} placeholder="Enter Meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const meme = await getMemeById(id);
    ctx.render(editGameTemplate(meme, createFormHandler(onEdit)));

    async function onEdit({ title, description, imageUrl }) {
        if ([title, description, imageUrl].some(f => f === "")) {
            return showHideNotification("All fields are required!");
        }

        await editMeme(id, { title, description, imageUrl });
        ctx.page.redirect("/details/" + id);
    }
}