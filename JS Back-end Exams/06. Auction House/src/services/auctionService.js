const Auction = require("../models/Auction");

exports.publishAuction = (auctionData) => Auction.create(auctionData);

exports.getAllAuctions = () => Auction.find({ isClosed: false }).lean();

exports.getAllClosedAuctions = (userId) => Auction.find({ isClosed: true, author: userId }).populate("bidder").lean();

exports.getAuctionById = (auctionId) => Auction.findById(auctionId).populate(["author", "bidder"]).lean();

exports.updateAuction = (auctionId, auctionData) => Auction.findByIdAndUpdate(auctionId, auctionData, { runValidators: true });

exports.deleteAuction = (auctionId) => Auction.findByIdAndDelete(auctionId);