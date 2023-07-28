import { html } from "../../node_modules/lit-html/lit-html.js";
import { editShoe, geShoeById } from "../api/shoes.js";
import { createFormHandler } from "../utils.js";

const editShoeTemplate = (shoe, onEdit) => html`
  <section id="edit">
        <div class="form">
          <h2>Edit item</h2>

          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="brand" .value=${shoe.brand} id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" .value=${shoe.model} id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" .value=${shoe.imageUrl} id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" .value=${shoe.release} id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" .value=${shoe.designer} id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" .value=${shoe.value} id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const shoe = await geShoeById(id);
   // console.log(shoe);
    ctx.render(editShoeTemplate(shoe, createFormHandler(onEdit)));

    async function onEdit({ brand, model, imageUrl, release, designer, value }) {
        if ([ brand, model, imageUrl, release, designer, value].some(f => f === "")) {
            return alert("All fields are required!");
        }

        await editShoe(id, {  brand, model, imageUrl, release, designer, value });
        ctx.page.redirect("/dashboard/details/"+id);
    }
}