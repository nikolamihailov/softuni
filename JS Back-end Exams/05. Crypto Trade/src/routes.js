const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const cryptoController = require("./controllers/cryptoController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/cryptos", cryptoController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;