import { getIdeaById } from "../api/ideas.js";

const detailsPage = document.getElementById("detailsPage");

export async function showDetails(context, id) {
    console.log("...selected idea with id....", id);

    context.showSection(detailsPage);

    const idea = await getIdeaById(id);

    detailsPage.innerHTML = createIdeaHTML(idea);
}

function createIdeaHTML(idea) {
    const html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    <div class="text-center">
        <a class="btn detb" href="">Delete</a>
    </div>
  `;

    return html;
}