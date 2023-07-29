import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFunFact } from "../api/facts.js";
import { createFormHandler } from "../utils.js";

const createFactTemplate = (onCreate) => html`
<section id="create">
        <div class="form">
          <h2>Add Fact</h2>
          <form class="create-form" @submit=${onCreate}>
            <input type="text" name="category" id="category" placeholder="Category" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"cols="50"></textarea>
            <button type="submit">Add Fact</button>
          </form>
        </div>
      </section>
`;

export async function createPage(ctx) {
  ctx.render(createFactTemplate(createFormHandler(onCreate)));

  async function onCreate({ category, "image-url": imageUrl, description, "additional-info": moreInfo }) {
    if ([category, imageUrl, description, moreInfo].some(f => f === "")) {
      return alert("All fields are required!");
    }

    await createFunFact({ category, imageUrl, description, moreInfo });
    ctx.page.redirect("/fun-facts");
  }
}