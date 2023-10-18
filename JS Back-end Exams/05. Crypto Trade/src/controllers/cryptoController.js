const { auth } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/all", (req, res) => {
    res.render("crypto/catalog");
});

router.get("/create", auth, (req, res) => {
    res.render("crypto/create");
});

module.exports = router;