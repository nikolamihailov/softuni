const router = require("express").Router();
const cubeService = require("../services/cubeService");

// path /cubes/create
router.get("/create", (req, res) => {
    console.log(cubeService.getAllCubes());
    res.render("create");
});

router.post("/create", (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    cubeService.create({ name, description, imageUrl, difficultyLevel: +difficultyLevel });
    res.redirect("/");
});
module.exports = router;