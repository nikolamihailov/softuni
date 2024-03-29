const router = require("express").Router();
const postService = require("../services/postService");
const { auth, isPostOwner } = require("../middlewares/authMiddleware");
const { extractErrors } = require("../utils/errorHelper");
const { trimBody } = require("../middlewares/trimBody");

router.get("/all", async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.render("post/all-posts", { title: "All posts", posts });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/create", auth, (req, res) => {
    res.render("post/create", { title: "Create post" });
});

router.post("/create", auth, trimBody, async (req, res) => {
    try {
        const { name, species, skinColor, eyeColor, image, description } = req.body;
        await postService.createPost({ name, species, skinColor, eyeColor, image, description, owner: req.user._id });
        res.redirect("/posts/all");
    } catch (error) {
        const postData = req.body;
        const errors = extractErrors(error);
        res.render("post/create", { title: "Create post", errors, postData });
    }
});

router.get("/:postId/details", async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await postService.getPostById(postId);
        const votes = post.votes.length;
        const voters = post.votes.map(p => p.email).join(", ");
        const author = post.owner.firstName + " " + post.owner.lastName;
        if (req.user) {
            const isAuthor = req.user._id === post.owner._id.toString();
            const canVote = !isAuthor && !post.votes.some(v => v._id.toString() === req.user._id);
            res.render("post/details", { title: `${post.name} details`, post, author, isAuthor, canVote, votes, voters });
        } else {
            res.render("post/details", { title: `${post.name} details`, post, author, votes, voters });
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:postId/vote", auth, async (req, res) => {
    try {
        const postId = req.params.postId;
        await postService.voteOnPost(postId, req.user._id);
        res.redirect(`/posts/${postId}/details`);
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:postId/edit", auth, isPostOwner, async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await postService.getPostById(postId);
        res.render("post/edit", { title: `Edit ${post.name ? post.name : "creature"}`, post });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:postId/edit", auth, isPostOwner, trimBody, async (req, res) => {
    try {
        const postId = req.params.postId;
        const { name, species, skinColor, eyeColor, image, description } = req.body;
        await postService.updatePost(postId, { name, species, skinColor, eyeColor, image, description });
        res.redirect(`/posts/${postId}/details`);
    } catch (error) {
        const post = req.body;
        const errors = extractErrors(error);
        res.render("post/edit", { title: `Edit ${post.name ? post.name : "creature"}`, errors, post });
    }
});

router.get("/:postId/delete", auth, isPostOwner, async (req, res) => {
    try {
        const postId = req.params.postId;
        await postService.deletePost(postId);
        res.redirect("/posts/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/my-posts", auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const posts = await postService.getAllUserPosts(userId);
        const author = req.user.firstName + " " + req.user.lastName;
        res.render("post/my-posts", { title: "Profile", posts, author });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

module.exports = router;