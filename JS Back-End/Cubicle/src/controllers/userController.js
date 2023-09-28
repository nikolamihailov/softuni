const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.get("/logout", (req, res) => {
    res.render("index");
});

module.exports = router;