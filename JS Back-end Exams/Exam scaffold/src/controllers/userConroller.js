const router = require("express").Router();

router.use("/login", (req, res) => {
    res.render("user/login");
});

router.use("/register", (req, res) => {
    res.render("user/register");
});

module.exports = router;


