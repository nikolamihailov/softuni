import { html } from "../../node_modules/lit-html/lit-html.js";
import { loadComments, postComment } from "../api/comments.js";
import { deleteGame, getGameById } from "../api/games.js";
import { createFormHandler, getUserData } from "../utils.js";

const detailsTemplate = (game, onDelete, user, comments, onComment) => html`
 <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
                <div class="game-header">
                    <img class="game-img" src="${game.imageUrl}" />
                    <h1>${game.title}</h1>
                    <span class="levels">${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>
                <p class="text">${game.summary}</p>
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                    ${comments && comments.length > 0 ? html`
                    ${comments.map(c=>html`${commentTemplate(c)}`)}
                    `: html`  <p class="no-comment">No comments.</p>`}
                    </ul>
                </div>
${game.canEdit ? html` <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a href="javascript:void(0)" @click=${onDelete} class="button">Delete</a>
                </div>`: null}
            </div>
            ${user && game.canEdit===false ? html`
             <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`: null}
        </section>
`;

const commentTemplate = (c) => html`
 <li class="comment">
      <p>${c.comment}</p>
    </li>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const user = getUserData();
    const game = await getGameById(id);
    const comments = await loadComments(id);

    if (user && user._id===game._ownerId) {
      game.canEdit = true;
    } else if (user && user._id !== game._ownerId) {
      game.canEdit = false;
  }

    update();

    function update() {
        ctx.render(detailsTemplate(game, onDelete ,user, comments, createFormHandler(onComment)));
    }


    async function onDelete() {
        const choice = confirm("Do you want to delete this game?");

        if (choice) {
            await deleteGame(id);
            ctx.page.redirect("/");
        }
  }

  async function onComment({ comment }, form) {
    if (comment === "") return alert("Enter comment text!");
    await postComment({ gameId: id, comment });
    form.reset();
    ctx.page.redirect("/details/"+id);
  }
}