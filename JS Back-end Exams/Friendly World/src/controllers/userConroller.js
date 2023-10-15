const router = require("express").Router();
const userService = require("../services/userService");
const { extractErrors } = require("../utils/errorHelper");

router.get("/register", (req, res) => {
    res.render("user/register", { title: "Register" });
});

router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password, repeatPassword } = req.body;
        const token = await userService.register({ firstName, lastName, email, password, repeatPassword });
        res.cookie("auth", token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const userData = req.body;
        const errors = extractErrors(error);
        res.render("user/register", { title: "Register", errors, userData });
    }
});

router.get("/login", (req, res) => {
    res.render("user/login", { title: "Login" });
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        res.cookie("auth", token, { httpOnly: true });
        res.redirect("/");
    } catch (error) {
        const errors = extractErrors(error);
        res.render("user/login", { title: "Login", errors, email: req.body.email });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
});


module.exports = router;


