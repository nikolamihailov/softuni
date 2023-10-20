const { auth, isAuctionPublisher } = require("../middlewares/authMiddleware");
const { getOptions } = require("../utils/dropdownHelper");
const { extractErrors } = require("../utils/errorHelper");

const router = require("express").Router();
const auctionService = require("../services/auctionService");
const { trimBody } = require("../middlewares/trimBody");

router.get("/all", async (req, res) => {
    try {
        const auctions = await auctionService.getAllAuctions();
        res.render("auction/browse", { title: "Browse Auctions", auctions });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/publish", auth, (req, res) => {
    try {
        const options = getOptions();
        res.render("auction/create", { title: "Publish Auction", options });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/publish", auth, trimBody, async (req, res) => {
    try {
        await auctionService.publishAuction({ ...req.body, author: req.user._id, bidder: null, isClosed: false });
        res.redirect("/auctions/all");
    } catch (error) {
        const errors = extractErrors(error);
        const auction = req.body;
        const options = getOptions(auction.category);
        res.render("auction/create", { title: "Publish Auction", auction, options, errors });
    }
});

router.get("/:auctionId/details", async (req, res) => {
    try {
        const auction = await auctionService.getAuctionById(req.params.auctionId);
        const author = auction.author.firstName + " " + auction.author.lastName;
        const isPublisher = req.user?._id === auction.author._id.toString();
        const isTopBidder = req.user?._id === auction.bidder?._id.toString();
        if (isPublisher) {
            res.render("auction/details-owner", {
                title: `${auction.title ? auction.title : "Auction"} details`,
                auction,
                author,
            });
        } else {
            res.render("auction/details", {
                title: `${auction.title ? auction.title : "Auction"} details`,
                auction,
                author,
                isTopBidder
            });
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:auctionId/bid", auth, trimBody, async (req, res) => {
    try {
        const auction = await auctionService.getAuctionById(req.params.auctionId);
        if (req.user._id !== auction.author._id.toString()) {
            const { bidAmount } = req.body;
            if (+bidAmount > auction.price) {
                await auctionService.updateAuction(req.params.auctionId, { bidder: req.user._id, price: +bidAmount });
                res.redirect(`/auctions/${req.params.auctionId}/details`);
            } else {
                res.render("auction/details", {
                    auction,
                    title: `${auction.title ? auction.title : "Auction"} details`,
                    errors: ["You cannot bid lower than the current price!"]
                });
            }
        } else {
            return res.redirect("/error-404-page");
        }
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:auctionId/edit", auth, isAuctionPublisher, async (req, res) => {
    try {
        const auction = await auctionService.getAuctionById(req.params.auctionId);
        const options = getOptions(auction.category);
        res.render("auction/edit",
            {
                title: `Edit ${auction.title ? auction.title : "Auction"}`,
                auction,
                options
            });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:auctionId/edit", auth, isAuctionPublisher, trimBody, async (req, res) => {
    try {
        await auctionService.updateAuction(req.params.auctionId, { ...req.body });
        res.redirect(`/auctions/${req.params.auctionId}/details`);
    } catch (error) {
        const auction = req.body;
        const errors = extractErrors(error);
        const options = getOptions(auction.category);
        res.render("auction/edit",
            {
                title: `Edit ${auction.title ? auction.title : "Auction"}`,
                auction,
                options,
                errors
            });
    }
});

router.get("/:auctionId/delete", auth, isAuctionPublisher, async (req, res) => {
    try {
        await auctionService.deleteAuction(req.params.auctionId);
        res.redirect("/auctions/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:auctionId/close", auth, isAuctionPublisher, async (req, res) => {
    try {

        await auctionService.updateAuction(req.params.auctionId, { isClosed: true });
        res.redirect("/auctions/closed");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/closed", auth, async (req, res) => {
    try {
        const auctions = await auctionService.getAllClosedAuctions(req.user._id);
        console.log(auctions);
        res.render("auction/closed-auctions", { title: "Closed Auctions", auctions });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

module.exports = router;