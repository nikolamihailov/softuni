const posts = Array.from(document.querySelectorAll(".topic-container div"));
const newTopicContainer = document.querySelector(".new-topic-border");
const allTopicContainer = document.querySelector(".topic-title");
const commentsContainer = document.querySelector(".comment");
const writeCommentConatiner = document.querySelector(".answer-comment");

const POST_URL = "http://localhost:3030/jsonstore/collections/myboard/posts";
const COMMENTS_URL = "http://localhost:3030/jsonstore/collections/myboard/comments";

export function showDetails(post) {
    const postId = post.id;
    newTopicContainer.style.display = "none";
    allTopicContainer.style.display = "none";
    commentsContainer.style.display = "block";
    writeCommentConatiner.style.display = "block";
    const header = commentsContainer.querySelector(".header");

    fetch(`${POST_URL}/${postId}`)
        .then(res => res.json())
        .then(p => {
            header.innerHTML = `
            <img src="./static/profile.png" alt="avatar">
            <p><span>${p.username}</span> posted on <time>${p.dateOfCreation}</time></p>
            <p class="post-content">${p.content}</p>`;
        })
        .catch(err => console.log(err));

}