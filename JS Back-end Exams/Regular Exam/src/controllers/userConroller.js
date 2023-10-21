const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrors } = require("../utils/errorHelper");
const { trimBody } = require("../middlewares/trimBody");

router.get("/register", (req, res) => {
    res.render("user/register", { title: "Register Page" });
});

router.post("/register", trimBody, async (req, res) => {
    try {
        const { username, email, password, rePassword } = req.body;
        const token = await userService.register({ username, email, password, rePassword });
        res.cookie("auth", token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const userData = req.body;
        const errors = extractErrors(error);
        res.render("user/register", { title: "Register page", errors, userData });
    }
});

router.get("/login", (req, res) => {
    res.render("user/login", { title: "Login Page" });
});

router.post("/login", trimBody, async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        res.cookie("auth", token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const errors = extractErrors(error);
        res.render("user/login", { title: "Login Page", errors, email: req.body.email });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});

module.exports = router;


