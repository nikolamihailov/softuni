const router = require("express").Router();
const { auth, isElectronicsOwner } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const { trimQuery } = require("../middlewares/trimQuery");
const electronicsService = require("../services/electronicsService");
const { extractErrors } = require("../utils/errorHelper");

router.get("/all", async (req, res) => {
    try {
        const electronics = await electronicsService.getAllOffers();
        res.render("electronics/catalog", {
            title: "All Offers",
            electronics
        });
    } catch (error) {
        res.status(500).render("electronics/catalog", {
            title: "All Offers",
            errors: ["We are experiencing problems right now! We will be back soon!"]
        });
    }
});

router.get("/create", auth, (req, res) => {
    res.render("electronics/create", { title: "Create Offer", });
});

router.post("/create", auth, trimBody, async (req, res) => {
    try {
        await electronicsService.createOffer({ ...req.body, owner: req.user._id });
        res.redirect("/electronics/all");
    } catch (error) {
        const electronics = req.body;
        const errors = extractErrors(error);
        res.render("electronics/create", {
            title: "Create Offer",
            electronics,
            errors,
        });
    }
});


router.get("/:offerId/details", async (req, res) => {
    try {
        const electronics = await electronicsService.getOfferById(req.params.offerId);
        const isCreator = req.user?._id === electronics.owner.toString();
        const canBuy = !isCreator && !electronics.buyingList.some(e => e.toString() === req.user?._id);
        res.render("electronics/details", {
            title: `${electronics.name} Details`,
            electronics,
            isCreator,
            canBuy
        });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:offerId/edit", auth, isElectronicsOwner, async (req, res) => {
    try {
        const electronics = await electronicsService.getOfferById(req.params.offerId);
        res.render("electronics/edit", {
            title: `Edit ${electronics.name}`,
            electronics,
        });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:offerId/edit", auth, isElectronicsOwner, trimBody, async (req, res) => {
    const electronics = req.body;
    try {
        await electronicsService.updateOffer(req.params.offerId, electronics);
        res.redirect(`/electronics/${req.params.offerId}/details`);
    } catch (error) {
        const errors = extractErrors(error);
        res.render("electronics/edit", {
            title: `Edit ${electronics.name ? electronics.name : "Offer"}`,
            electronics,
            errors
        });
    }
});

router.get("/:offerId/delete", auth, isElectronicsOwner, async (req, res) => {
    try {
        await electronicsService.deleteOffer(req.params.offerId);
        res.redirect("/electronics/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:offerId/buy", auth, async (req, res) => {
    try {
        const { offerId } = req.params;
        const electronics = await electronicsService.getOfferById(offerId);
        if (req.user._id !== electronics.owner.toString()) {

            await electronicsService.buyOffer(offerId, req.user._id);

            return res.redirect(`/electronics/${offerId}/details`);
        }
        res.redirect("/error-404-page");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/search", auth, trimQuery, async (req, res) => {
    try {
        const { name, type } = req.query;
        const electronics = await electronicsService.getAllOffers(name, type);
        res.render("electronics/search", {
            title: "Search Offers",
            electronics,
        });
    } catch (error) {
        res.status(500).render("electronics/search", {
            title: "Search Offers",
            errors: ["We are experiencing problems right now! We will be back soon!"]
        });
    }
});

module.exports = router;