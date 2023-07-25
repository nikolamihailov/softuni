import { createPost } from "./createPost.js";
import { getAllPosts } from "./renderAllPosts.js";


getAllPosts();

const postForm = document.querySelector(".container form");
const [cancelBtn, postBtn] = Array.from(postForm.querySelectorAll("button"));

const commentsContainer = document.querySelector(".comment");
const writeCommentConatiner = document.querySelector(".answer-comment");

commentsContainer.style.display = "none";
writeCommentConatiner.style.display = "none";

const commentForm = document.querySelector(".answer-comment form");
const postCommentBtn = commentForm.querySelector("button");



postBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createPost();
    getAllPosts();
    alert("Post created!");
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Array.from(postForm.querySelectorAll("input[type=text]"))
        .map(e => e.value = "");
    postForm.querySelector("textarea").value = "";
});

postCommentBtn.addEventListener("click", (e) => {
    e.preventDefault();
});
