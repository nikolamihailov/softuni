const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
    const token = await userService.register({ firstName, lastName, email, password, repeatPassword });
    res.cookie("auth", token);
    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });
    res.cookie("auth", token);
    res.redirect("/");
});


module.exports = router;


