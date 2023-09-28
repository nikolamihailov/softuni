const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", (req, res) => {
    const { username, password, repeatPassword } = req.body;
    console.log(username, password, repeatPassword);
    res.redirect("/users/login");
});

router.get("/logout", (req, res) => {
    res.render("index");
});

module.exports = router;