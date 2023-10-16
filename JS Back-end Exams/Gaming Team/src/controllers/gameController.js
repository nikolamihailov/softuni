const router = require("express").Router();
const { auth } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const gameService = require("../services/gameService");
const { extractErrors } = require("../utils/errorHelper");

router.get("/all", async (req, res) => {
    try {
        const games = await gameService.getAllGames();
        res.render("game/catalog", { title: "All games", games });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/create", (req, res) => {
    res.render("game/create", { title: "Create game" });
});

router.post("/create", auth, trimBody, async (req, res) => {
    try {
        const { name, image, price, description, genre, platform } = req.body;
        await gameService.createGame({ name, image, price, description, genre, platform, owner: req.user._id });
        res.redirect("/games/all");
    } catch (error) {
        const errors = extractErrors(error);
        res.render("game/create", { title: "Create game", errors });
    }
});

router.get("/:gameId/details", async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const game = await gameService.getGameById(gameId);
        const isCreator = req.user?._id === game.owner.toString();
        res.render("game/details", { title: `${game.name} details`, game, isCreator });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});
module.exports = router;