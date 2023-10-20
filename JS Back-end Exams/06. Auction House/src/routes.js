const router = require("express").Router();

const homeController = require("./controllers/homeController");
const userContoller = require("./controllers/userConroller");
const auctionController = require("./controllers/auctionController");

router.use(homeController);
router.use("/users", userContoller);
router.use("/auctions", auctionController);

router.get("*", (req, res) => {
    res.redirect("/error-404-page");
});

module.exports = router;