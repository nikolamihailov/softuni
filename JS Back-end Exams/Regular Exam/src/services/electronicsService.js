const Electronics = require("../models/Electronics");

exports.getAllOffers = (name = "", type = "") => {
    const query = {};
    if (name) query.name = new RegExp(name, "i");
    if (type) query.type = new RegExp(type, "i");
    return Electronics.find(query).lean();
};

exports.createOffer = (offerData) => Electronics.create(offerData);

exports.getOfferById = (offerId) => Electronics.findById(offerId).lean();

exports.updateOffer = (offerId, offerData) => Electronics.findByIdAndUpdate(offerId, offerData, { runValidators: true });

exports.deleteOffer = (offerId) => Electronics.findByIdAndDelete(offerId);

exports.buyOffer = (offerId, userId) => Electronics.findByIdAndUpdate(offerId, { $push: { buyingList: userId } });
