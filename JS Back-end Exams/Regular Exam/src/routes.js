const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const electronicsController = require("./controllers/electronicsController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/electronics", electronicsController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;