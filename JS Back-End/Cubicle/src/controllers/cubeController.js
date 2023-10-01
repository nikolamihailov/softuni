const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
const { getDifficultyOptionsViewData } = require("../utils/viewHelpers");
const { isAuth } = require("../middlewares/authMiddleware");
const { extractErrorMessages } = require("../utils/errorHelper");
// path /cubes/create
router.get("/create", isAuth, (req, res) => {
    // console.log(cubeService.getAllCubes());
    res.render("cube/create");
});

router.get("/:cubeId/details", async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const accessories = cube.accessories;
    if (!cube) return res.redirect("/404-page-not-found");
    let isOwner = req.user?._id === cube.owner?.toString();
    if (req.user?._id === undefined && cube.owner?.toString() === undefined) isOwner = false;
    res.render("cube/details", { cube, accessories, isOwner });
});

router.post("/create", isAuth, async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    try {
        await cubeService.create({ name, description, imageUrl, difficultyLevel: +difficultyLevel, owner: req.user._id });
        res.redirect("/");
    } catch (error) {
        const errors = extractErrorMessages(error);
        res.render("cube/create", { errors });
    }
});

router.get("/:cubeId/attach-accessory", isAuth, async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const accessories = await accessoryService.getAvailableAccessories(cube.accessories);
    const hasAccessories = accessories.length > 0;
    res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", isAuth, async (req, res) => {
    const { accessory: accessoryId } = req.body;
    const cubeId = req.params.cubeId;
    try {
        await cubeService.attachAccessory(cubeId, accessoryId);
        res.redirect(`/cubes/${cubeId}/details`);
    } catch (error) {
        const errors = extractErrorMessages(error);
        res.render("accessory/attach", { errors });
    }
});

router.get("/:cubeId/delete", isAuth, async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const options = getDifficultyOptionsViewData(cube.difficultyLevel);
    res.render("cube/delete", { cube, options });
});

router.post("/:cubeId/delete", isAuth, isAuth, async (req, res) => {
    try {
        await cubeService.deleteCube(req.params.cubeId);
        res.redirect("/");
    } catch (error) {
        const errors = extractErrorMessages(error);
        res.render("cube/delete", { errors });
    }
});

router.get("/:cubeId/edit", isAuth, async (req, res) => {
    const cube = await cubeService.getCubeById(req.params.cubeId);
    const options = getDifficultyOptionsViewData(cube.difficultyLevel);
    res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", isAuth, async (req, res) => {
    const cubeData = req.body;
    try {
        if (!cubeData.name || cubeData.name.trim().length < 5) throw new Error("Cube name is required (5 caharacters) and must be alphanumeric!");
        if (!cubeData.description || cubeData.description.trim().length < 20) throw new Error("Cube description is required (20 characters) and must be alphanumeric!");
        if (!cubeData.imageUrl || !`/^https?:\/\/.+/`.test(cubeData.imageUrl)) throw new Error("Cube image is required and must be valid link!");
        await cubeService.updateCube(req.params.cubeId, cubeData, { runValidators: true });
        res.redirect(`/cubes/${req.params.cubeId}/details`);
    } catch (error) {
        const errors = extractErrorMessages(error);
        res.render("cube/edit", { errors });
    }
});

module.exports = router;