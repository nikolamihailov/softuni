const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const postController = require("./controllers/postController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/posts", postController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;