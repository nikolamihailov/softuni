const router = require("express").Router();
const { auth, isAnimalCreator } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const animalService = require("../services/animalService");
const { extractErrors } = require("../utils/errorHelper");

router.get("/add", (req, res) => {
    res.render("animal/create", { title: "Add animal" });
});

router.post("/add", auth, trimBody, async (req, res) => {
    try {
        const { name, years, kind, need, image, location, description } = req.body;
        await animalService.addAnimal({ name, years, kind, need, image, location, description, owner: req.user._id });
        res.redirect("/");
    } catch (error) {
        const animalData = req.body;
        const errors = extractErrors(error);
        res.render("animal/create", { title: "Add animal", errors, animalData });
    }
});

router.get("/all", async (req, res) => {
    try {
        const allAnimals = await animalService.getAllAnimals();
        res.render("animal/dashboard", { title: "All animals", allAnimals });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:animalId/details", async (req, res) => {
    try {
        const animalId = req.params.animalId;
        const animal = await animalService.getAnimalById(animalId);
        const isCreator = req.user?._id === animal.owner.toString();
        const canDonate = !isCreator && !animal.donations.some(a => a._id.toString() === req.user?._id);
        res.render("animal/details", { title: `${animal.name} details`, animal, isCreator, canDonate });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:animalId/edit", auth, isAnimalCreator, async (req, res) => {
    try {
        const animalId = req.params.animalId;
        const animal = await animalService.getAnimalById(animalId);
        res.render("animal/edit", { title: `Edit ${animal.name}`, animal });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:animalId/edit", auth, isAnimalCreator, trimBody, async (req, res) => {
    const animal = req.body;
    try {
        const animalId = req.params.animalId;
        await animalService.updateAnimal(animalId, animal);
        res.redirect(`/animals/${animalId}/details`);
    } catch (error) {
        const errors = extractErrors(error);
        res.render("animal/edit", { title: `Edit ${animal.name ? animal.name : "animal"}`, animal, errors });
    }
});

router.get("/:animalId/delete", auth, isAnimalCreator, async (req, res) => {
    try {
        const animalId = req.params.animalId;
        await animalService.deleteAnimal(animalId);
        res.redirect("/animals/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:animalId/donate", auth, async (req, res) => {
    try {
        const animalId = req.params.animalId;
        const animal = await animalService.getAnimalById(animalId);
        if (req.user.id !== animal.owner.toString()) {
            await animalService.donateToAnimal(animalId, req.user._id);
            console.log(animal);
            res.redirect(`/animals/${animalId}/details`);
        } else {
            return res.redirect("/error-404-page");
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/search", auth, trimBody, async (req, res) => {
    try {
        const location = req.query.location;
        const animals = await animalService.getAllAnimals(location);
        res.render("animal/search", { title: "Search animals", animals });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});


module.exports = router;