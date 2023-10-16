const router = require("express").Router();
const { auth, isGameOwner } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const gameService = require("../services/gameService");
const { getOptions } = require("../utils/dropdownHelper");
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
        const canBuy = !isCreator && !game.boughtBy.some(g => g._id.toString() === req.user?._id);
        res.render("game/details", { title: `${game.name} details`, game, isCreator, canBuy });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:gameId/buy", auth, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const game = await gameService.getGameById(gameId);
        if (req.user._id !== game.owner.toString()) {
            await gameService.buyGame(gameId, req.user._id);
            res.redirect(`/games/${game._id}/details`);
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:gameId/edit", auth, isGameOwner, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const game = await gameService.getGameById(gameId);
        const options = getOptions(game.platform);
        res.render("game/edit", { title: `Edit ${game.name ? game.name : "game"}`, game, options });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});


router.post("/:gameId/edit", auth, isGameOwner, async (req, res) => {
    const game = req.body;
    try {
        const gameId = req.params.gameId;
        await gameService.updateGame(gameId, game);
        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        const options = getOptions(game.platform);
        const errors = extractErrors(error);
        res.render("game/edit", { title: `Edit ${game.name ? game.name : "game"}`, game, options, errors });
    }
});

router.get("/:gameId/delete", auth, isGameOwner, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        await gameService.deleteGame(gameId);
        res.redirect(`/games/all`);
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/search", auth, async (req, res) => {
    try {
        const { name, platform } = req.query;
        const games = await gameService.getAllGames(name, platform);
        res.render("game/search", { title: "Search game", games });

    } catch (error) {
        res.redirect("/error-404-page");
    }
});

module.exports = router;