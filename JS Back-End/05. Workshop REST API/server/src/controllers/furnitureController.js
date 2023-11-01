const router = require("express").Router();
const furnitureService = require("../services/furnitureService");


router.get("/", async (req, res) => {
    const { where } = req.query;
    if (where) {
        const furniture = await furnitureService.getAllMine(where);
        return res.status(200).json(furniture);
    }
    const furniture = await furnitureService.getAll();
    res.status(200).json(furniture);
});

router.post("/", async (req, res) => {
    const furniture = await furnitureService.create({ ...req.body, _ownerId: req.user._id });
    res.status(201).json(furniture);
});

router.get("/:furnitureId", async (req, res) => {
    const furniture = await furnitureService.getOne(req.params.furnitureId);
    res.status(200).json(furniture);
});

router.put("/:furnitureId", async (req, res) => {
    const furniture = await furnitureService.update(req.params.furnitureId, { ...req.body });
    res.status(200).json(furniture);
});

router.delete("/:furnitureId", async (req, res) => {
    const furniture = await furnitureService.delete(req.params.furnitureId);
    res.status(200).json(furniture);
});

module.exports = router;