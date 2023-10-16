const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const gameController = require("./controllers/gameController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/games", gameController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;