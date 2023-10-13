const router = require("express").Router();

const userContoller = require("./controllers/userConroller");

router.use("/users", userContoller);

router.get("/", (req, res) => {
    res.render("home");
});

router.get("*", (req, res) => {
    res.render("404");
});

module.exports = router;