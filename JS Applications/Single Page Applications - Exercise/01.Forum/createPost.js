const BASE_URL = "http://localhost:3030/jsonstore/collections/myboard";
const postForm = document.querySelector(".container form");

export function createPost() {
    const formData = new FormData(postForm);
    const title = formData.get("topicName");
    const username = formData.get("username");
    const content = formData.get("postText");
    const dateOfCreation = new Date();
    if (title.trim() !== "" && username.trim() !== "" && content.trim() !== "") {
        fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title,
                username,
                content,
                dateOfCreation: dateOfCreation.toUTCString()
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                Array.from(postForm.querySelectorAll("input[type=text]"))
                    .map(e => e.value = "");
                postForm.querySelector("textarea").value = "";

            })
            .catch(err => console.log(err));
    }


}