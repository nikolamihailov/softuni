const router = require("express").Router();
const accessoryService = require("../services/accessoryService");
const { extractErrorMessages } = require("../utils/errorHelper");

router.get("/create", (req, res) => {
    res.render("accessory/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl } = req.body;
    try {
        await accessoryService.create({ name, description, imageUrl });
        res.redirect("/");
    } catch (error) {
        const errors = extractErrorMessages(error);
        res.render("accessory/create", { errors });
    }
});



module.exports = router;