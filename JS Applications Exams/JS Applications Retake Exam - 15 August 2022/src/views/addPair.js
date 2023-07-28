import { html } from "../../node_modules/lit-html/lit-html.js";
import { createShoe } from "../api/shoes.js";
import { createFormHandler } from "../utils.js";

const createShoeTemplate = (onCreate) => html`
  <section id="create">
        <div class="form">
          <h2>Add item</h2>
          <form class="create-form" @submit=${onCreate}>
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function createPage(ctx) {
    ctx.render(createShoeTemplate(createFormHandler(onCreate)));

    async function onCreate({ brand, model, imageUrl, release, designer, value }) {
        if ([ brand, model, imageUrl, release, designer, value].some(f => f === "")) {
            return alert("All fields are required!");
        }

        await createShoe({  brand, model, imageUrl, release, designer, value });
        ctx.page.redirect("/dashboard");
    }
}