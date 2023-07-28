import { html } from "../../node_modules/lit-html/lit-html.js";
import {  deleteShoe, geShoeById } from "../api/shoes.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (shoe, onDelete) => html`
 <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Shoe Details</p>
          <div id="img-wrapper">
            <img src="${shoe.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
              Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
          </div>
${shoe.canEdit ? html`
  <div id="action-buttons">
            <a href="/dashboard/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
          </div>` : null}
          <!--Edit and Delete are only for creator-->
        
        </div>
      </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const user = getUserData();
    const shoe = await geShoeById(id);
    //console.log(shoe);

    if (user && user._id===shoe._ownerId) {
        shoe.canEdit = true;
    }

    update();

    function update() {
        ctx.render(detailsTemplate(shoe, onDelete));
    }


    async function onDelete() {
        const choice = confirm("Do you want to delete this offer?");

        if (choice) {
            await deleteShoe(id);
            ctx.page.redirect("/dashboard");
        }
    }
}