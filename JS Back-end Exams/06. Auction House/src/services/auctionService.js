const Auction = require("../models/Auction");

exports.publishAuction = (auctionData) => Auction.create(auctionData);

exports.getAllAuctions = () => Auction.find().lean();

exports.getAuctionById = (auctionId) => Auction.findById(auctionId).populate(["author", "bidder"]).lean();

exports.updateAuction = (auctionId, auctionData) => Auction.findByIdAndUpdate(auctionId, auctionData);