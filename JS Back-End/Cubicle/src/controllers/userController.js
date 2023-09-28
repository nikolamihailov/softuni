const router = require("express").Router();
const userService = require("../services/userService");

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    await userService.register({ username, password, repeatPassword });
    res.redirect("/users/login");
});

router.get("/logout", (req, res) => {
    res.render("index");
});

module.exports = router;