const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/error-404-page", (req, res) => {
    res.status(404).render("404", { title: "Error Page" });
});

module.exports = router;