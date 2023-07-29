import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFact, getFactById } from "../api/facts.js";
import { getLikes, getUserLikes, like } from "../api/likes.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (fact, onDelete, onLike) => html`
   <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${fact.imageUrl}" alt="example1" />
          <p id="details-category">${fact.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${fact.description}</p>
              <p id="more-info">${fact.moreInfo}</p>
            </div>
            <h3>Likes:<span id="likes">${fact.likes}</span></h3>
            ${fact.canLike || fact.canEdit ? html`
            <div id="action-buttons">
             ${fact.canEdit ? html`
              <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` : null}
               ${fact.canLike ? html` <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
            </div> `: null}
          </div>
        </div>
      </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;

  const requests = [getFactById(id), getLikes(id)];

  const user = getUserData();

  if (user) {
    requests.push(getUserLikes(id, user._id));
  }

  const [fact, likes, hasLiked] = await Promise.all(requests);
  fact.likes = likes;
  if (user) {
    fact.canEdit = user._id === fact._ownerId;
    fact.canLike = fact.canEdit == false && hasLiked === 0;
  }

  update();

  function update() {
    ctx.render(detailsTemplate(fact, onDelete, onLike));
  }

  async function onDelete() {
    const choice = confirm("Do you want to delete this fact?");

    if (choice) {
      await deleteFact(id);
      ctx.page.redirect("/fun-facts");
    }
  }

  async function onLike() {
    await like(id);
    fact.likes++;
    fact.canLike = false;
    update();
  }
}
