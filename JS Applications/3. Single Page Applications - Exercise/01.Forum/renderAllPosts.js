const allPost = document.querySelector(".topic-container");
import { showDetails } from "./showDetails.js";

export function getAllPosts() {
    allPost.innerHTML = "";
    fetch("http://localhost:3030/jsonstore/collections/myboard/posts")
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(p => {
                const divP = document.createElement("div");
                divP.classList.add("topic-name-wrapper");
                divP.id = p._id;
                divP.innerHTML = `
                 <div class="topic-name">
                    <a href="#" class="normal">
                    <h2>${p.title}</h2>
                    </a>
                 <div class="columns">
                <div>
                    <p>Date: <time>${p.dateOfCreation}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${p.username}</span></p>
                    </div>
                </div>
                </div>
                </div>`;
                const h2 = divP.querySelector("h2");
                h2.addEventListener("click", () => {
                    showDetails(divP);
                });
                allPost.appendChild(divP);
            });
        })
        .catch(err => console.log(err));
}
