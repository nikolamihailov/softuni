const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

// path /cubes/create
router.get("/create", (req, res) => {
    // console.log(cubeService.getAllCubes());
    res.render("cube/create");
});

router.get("/:cubeId/details", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const accessories = cube.accessories;
    if (!cube) return res.redirect("/404-page-not-found");
    res.render("cube/details", { cube, accessories });
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create({ name, description, imageUrl, difficultyLevel: +difficultyLevel, owner: req.user._id });
    res.redirect("/");
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const accessories = await accessoryService.getAvailableAccessories(cube.accessories);
    const hasAccessories = accessories.length > 0;
    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    await cubeService.attachAccessory(cubeId, accessoryId);
    res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/:cubeId/delete", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    console.log(cube);
    res.render("cube/delete", { cube });
});

router.post("/:cubeId/delete", async (req, res) => {
    await cubeService.deleteCube(req.params.cubeId);
    res.redirect("/");
});

module.exports = router;