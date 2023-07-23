//const COMMENTS_URL = "http://localhost:3030/jsonstore/collections/myboard/comments";

const commentForm = document.querySelector(".asnwer-comment form");

export function createComment() {
    const formData = new FormData(commentForm);
    const username = formData.get("username");
    const text = formData.get("postText");
}