const router = require("express").Router();
const animalService = require("../services/animalService");

router.get("/", async (req, res) => {
    try {
        const lastAddedAnimals = await animalService.getLatestThreeAnimals();
        res.render("home", { lastAddedAnimals });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/error-404-page", (req, res) => {
    res.render("404", { title: "Error page" });
});

module.exports = router;