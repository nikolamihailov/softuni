const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const bookController = require("./controllers/bookController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/books", bookController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;