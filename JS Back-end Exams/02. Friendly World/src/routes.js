const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const animalController = require("./controllers/animalController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/animals", animalController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;