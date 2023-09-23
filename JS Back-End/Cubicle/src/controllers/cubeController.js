const router = require("express").Router();
const cubeService = require("../services/cubeService");

// path /cubes/create
router.get("/create", (req, res) => {
    // console.log(cubeService.getAllCubes());
    res.render("cube/create");
});

router.get("/:cubeId/details", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    if (!cube) return res.redirect("/404-page-not-found");
    res.render("details", { cube });
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create({ name, description, imageUrl, difficultyLevel: +difficultyLevel });
    res.redirect("/");
});
module.exports = router;