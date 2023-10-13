const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");

router.use(homeController);
router.use("/users", userContoller);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;