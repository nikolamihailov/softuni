const { auth } = require("../middlewares/authMiddleware");
const { getOptions } = require("../utils/dropdownHelper");
const { extractErrors } = require("../utils/errorHelper");

const router = require("express").Router();
const auctionService = require("../services/auctionService");

router.get("/all", async (req, res) => {
    try {
        const auctions = await auctionService.getAllAuctions();
        res.render("auction/browse", { title: "Browse Auctions", auctions });
    } catch (error) {
        console.log(error);
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

router.post("/publish", auth, async (req, res) => {
    try {
        await auctionService.publishAuction({ ...req.body, author: req.user._id, bidder: null });
        console.log(req.body);
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

router.post("/:auctionId/bid", auth, async (req, res) => {
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

    }
});

module.exports = router;