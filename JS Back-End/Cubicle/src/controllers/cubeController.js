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
    if (!cube) return res.redirect("/404-page-not-found");
    res.render("details", { cube });
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create({ name, description, imageUrl, difficultyLevel: +difficultyLevel });
    res.redirect("/");
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const accessories = await accessoryService.getAllAccessories();
    const hasAccessories = accessories.length > 0;
    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    await cubeService.attachAccessory(cubeId, accessoryId);
    res.redirect(`/cubes/${cubeId}/details`);
});
module.exports = router;