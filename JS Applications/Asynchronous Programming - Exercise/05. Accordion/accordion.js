function solution() {
    const main = document.getElementById("main");
    const LIST_URL = "http://localhost:3030/jsonstore/advanced/articles/list";
    const DETAILS_URL = "http://localhost:3030/jsonstore/advanced/articles/details";
    fetch(LIST_URL)
        .then(res => res.json())
        .then(data => {
            data.forEach(article => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("accordion");
                articleDiv.innerHTML = `
                        <div class="head">
                            <span>${article.title}</span>
                            <button class="button" id="${article["_id"]}">More</button>
                        </div>
                        <div class="extra">
                        <p></p>
                        </div>`;
                const showMoreLessBtn = articleDiv.querySelector(".head button");
                showMoreLessBtn.addEventListener("click", () => {
                    fetch(`${DETAILS_URL}/${article["_id"]}`)
                        .then(ress => ress.json())
                        .then(innerData => {
                            const extraContentDiv = articleDiv.querySelectorAll("div")[1];
                            const p = extraContentDiv.querySelector("p");
                            p.textContent = innerData.content;
                            if (showMoreLessBtn.textContent === "More") {
                                extraContentDiv.style.display = "block";
                                showMoreLessBtn.textContent = "Less";
                            } else {
                                extraContentDiv.style.display = "none";
                                showMoreLessBtn.textContent = "More";
                            }
                        })
                        .catch(err => console.log(err));

                });
                main.appendChild(articleDiv);
            });
        })
        .catch(err => console.log(err));
}
solution();