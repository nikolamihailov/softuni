import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { editOffer, getOfferById } from "../api/offers.js";
import { createFormHandler } from "../utils.js";

const editTemplate = (offer, onEdit) => html`
<section id="edit">
        <div class="form">
          <h2>Edit Offer</h2>
          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="title" .value=${offer.title} id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" .value=${offer.imageUrl} id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" .value=${offer.category} placeholder="Category" />
            <textarea id="job-description" name="description" .value=${offer.description} placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" .value=${offer.requirements} placeholder="Requirements" rows="4"
              cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" .value=${offer.salary}  placeholder="Salary" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createFormHandler(onEdit)));

    async function onEdit({ title, imageUrl, category, description, requirements, salary }) {
        if ([title, imageUrl, category, description, requirements, salary].some(f => f === "")) {
            return alert("All fields are required!");
        }

        await editOffer(id, { title, imageUrl, category, description, requirements, salary });
        ctx.page.redirect("/dashboard/" + id);
    }
}