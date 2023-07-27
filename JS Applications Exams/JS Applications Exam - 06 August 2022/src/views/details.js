import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { apply, getAplications, getUserAplications } from "../api/applications.js";
import { deleteOffer, getOfferById } from "../api/offers.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (offer, onDelete, onApply) => html`
<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${offer.imageUrl.slice(1)}" alt="${offer.title}" />
          <p id="details-title">${offer.title}</p>
          <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
          </p>
          <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
          </p>
          <div id="info-wrapper">
            <div id="details-description">
              <h4>Description</h4>
              <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
              <h4>Requirements</h4>
             <span>${offer.requirements}</span>
            </div>
          </div>
          <p>Applications: <strong id="applications">${offer.applications}</strong></p> 
${offer.canEdit || offer.canApply ? html`
        <div id="action-buttons">
            ${offer.canEdit ? html`
              <a href="/dashboard/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` : null}
${offer.canApply ? html`<a href="javascript:void(0)" @click=${onApply} id="apply-btn">Apply</a>` : null}
          </div>` : null}
        </div>
      </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const requests = [
        getOfferById(id),
        getAplications(id)
    ];

    const user = getUserData();

    if (user) {
        requests.push(getUserAplications(id, user._id));
    }

    const [offer, applications, hasApplied] = await Promise.all(requests);
    offer.applications = applications;
    if (user) {
        offer.canEdit = user._id === offer._ownerId;
        offer.canApply = offer.canEdit == false && hasApplied === 0;
    }

    update();

    function update() {
        ctx.render(detailsTemplate(offer, onDelete, onApply));
    }


    async function onDelete() {
        const choice = confirm("Do you want to delete this offer?");

        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect("/dashboard");
        }
    }

    async function onApply() {
        await apply(id);
        offer.applications++;
        offer.canApply = false;
        update();

    }
}