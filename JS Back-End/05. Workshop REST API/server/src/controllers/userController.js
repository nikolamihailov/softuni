const router = require("express").Router();

router.post("/register", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("ok");
});

module.exports = router;