function attachEvents() {
    const loadPostsBtn = document.getElementById("btnLoadPosts");
    const postsSelect = document.getElementById("posts");
    const viewBtn = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const ulPostComments = document.getElementById("post-comments");

    const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";
    let posts = "";

    loadPostsBtn.addEventListener("click", async () => {
        try {
            const res = await fetch(POSTS_URL);
            const data = await res.json();
            postsSelect.innerHTML = "";
            posts = Object.values(data);
            posts.forEach(post => {
                const option = document.createElement("option");
                option.textContent = post.title;
                option.setAttribute("value", post.id);
                postsSelect.appendChild(option);
            });
        } catch (error) {
            console.log(error);
        }
    });

    viewBtn.addEventListener("click", async () => {
        try {
            ulPostComments.innerHTML = "";
            const id = postsSelect.value;
            postTitle.textContent = posts.find(post => post.id === id).title;
            postBody.textContent = posts.find(post => post.id === id).body;
            const resC = await fetch(`${COMMENTS_URL}`);
            const dataC = await resC.json();
            const allComments = Object.values(dataC).filter(el => el.postId === id);
            allComments.forEach(comment => {
                const li = document.createElement("li");
                li.id = comment.id;
                li.textContent = comment.text;
                ulPostComments.appendChild(li);
            });
        } catch (error) {
            console.log(error);
        }
    });
}

attachEvents();