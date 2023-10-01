const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrorMessages } = require("../utils/errorHelper");

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    res.cookie("auth", token, { httpOnly: true });

    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    try {
        await userService.register({ username, password, repeatPassword });
        res.redirect("/users/login");

    } catch (error) {
        const errors = extractErrorMessages(error);
        res.status(400).render("user/register", { errors });
    }
});

router.get("/logout", (req, res) => {
    res.render("index");
});

module.exports = router;