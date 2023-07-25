import { getAllIdeas } from "../api/ideas.js";

const catalogPage = document.getElementById("dashboard-holder");
catalogPage.addEventListener("click", onDetails);

let context = null;

export async function showCatalog(ctx) {
    context = ctx;
    catalogPage.innerHTML = "";
    ctx.showSection(catalogPage);
    const ideas = await getAllIdeas();
    ideas.forEach(idea => {
        createIdea(idea);
    });
}

function createIdea(idea) {
    const div = document.createElement("div");
    div.className = "card overflow-hidden current-card details";
    div.style.width = "20rem";
    div.style.height = "18rem";
    div.innerHTML = `
     <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a class="btn" id="${idea._id}" href="/details">Details</a>`;
    catalogPage.appendChild(div);
}

function onDetails(event) {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const id = event.target.id;
        if (id) {
            context.goTo("/details", id);
        }
    }
}