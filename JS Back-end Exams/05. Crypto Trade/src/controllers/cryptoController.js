const { auth, isOfferOwner } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const { trimQuery } = require("../middlewares/trimQuery");
const { extractErrors } = require("../utils/errorHelper");
const cryptoService = require("../services/cryptoService");
const { getOptions } = require("../utils/dropdownHelper");
const router = require("express").Router();

router.get("/all", async (req, res) => {
    try {
        const offers = await cryptoService.getAllOffers();
        res.render("crypto/catalog", { title: "All Crypto", offers });
    } catch (error) {
        console.log(1);
        res.redirect("/error-404-page");
    }
});

router.get("/create", auth, (req, res) => {
    res.render("crypto/create", { title: "Create Offer" });
});

router.post("/create", auth, trimBody, async (req, res) => {
    try {
        const { name, image, price, description, payment } = req.body;
        await cryptoService.createOffer({ name, image, price: +price, description, payment, owner: req.user._id });
        res.redirect("/cryptos/all");
    } catch (error) {
        const errors = extractErrors(error);
        const cryptoData = req.body;
        res.render("crypto/create", { title: "Create Offer", cryptoData, errors });
    }
});

router.get("/:cryptoId/details", async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        const offer = await cryptoService.getOfferById(cryptoId);
        const isCreator = req.user?._id === offer.owner.toString();
        const canBuy = !isCreator && !offer.boughtCrypto.some(b => b.toString() === req.user?._id);
        res.render("crypto/details", { title: `${offer.name ? offer.name : "Offer"} details`, offer, isCreator, canBuy });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:cryptoId/buy", auth, async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        const offer = await cryptoService.getOfferById(cryptoId);
        if (req.user._id !== offer.owner.toString()) {
            await cryptoService.buyOffer(cryptoId, req.user._id);
            res.redirect(`/cryptos/${cryptoId}/details`);
        } else {
            return res.redirect("/error-404-page");
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:cryptoId/edit", auth, isOfferOwner, async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        const offer = await cryptoService.getOfferById(cryptoId);
        const options = getOptions(offer.payment);
        res.render("crypto/edit", { title: `Edit ${offer.name ? offer.name : "Offer"}`, offer, options });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:cryptoId/edit", auth, isOfferOwner, trimBody, async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        const { name, image, price, description, payment } = req.body;
        await cryptoService.updateOffer(cryptoId, { name, image, price: +price, description, payment });
        res.redirect(`/cryptos/${cryptoId}/details`);
    } catch (error) {
        const offer = req.body;
        const errors = extractErrors(error);
        const options = getOptions(offer.payment);
        res.render("crypto/edit", { title: `Edit ${offer.name ? offer.name : "Offer"}`, offer, options, errors });
    }
});

router.get("/:cryptoId/delete", auth, isOfferOwner, async (req, res) => {
    try {
        const cryptoId = req.params.cryptoId;
        await cryptoService.deleteOffer(cryptoId);
        res.redirect("/cryptos/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/search", auth, trimQuery, async (req, res) => {
    try {
        const { name, payment } = req.query;
        const offers = await cryptoService.getAllOffers(name, payment);
        res.render("crypto/search", { title: "Search page", offers });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});


module.exports = router;