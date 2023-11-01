const router = require("express").Router();
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
    try {
        const result = await userService.register({ ...req.body });
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "off grumna" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const result = await userService.login({ ...req.body });
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "off grumna" });
    }
});

router.get("/logout", (req, res) => {
    res.end();
});

module.exports = router;