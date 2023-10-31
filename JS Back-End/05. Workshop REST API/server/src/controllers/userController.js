const router = require("express").Router();
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        // const { email, password, rePass } = req.body;
        const user = await userService.register({ ...req.body });

        res.json({
            email: user.email,
            authToken,
            userId: user._id
        });
    } catch (error) {

    }
});

module.exports = router;