const Electronics = require("../models/Electronics");

exports.getAllOffers = (name = "", type = "") => {
    if (name && type) {
        return Electronics.find({
            $and: [
                { name: new RegExp(name, "i") },
                { type: new RegExp(type, "i") }
            ]
        }).lean();
    }
    if (name) return Electronics.find({ name: new RegExp(name, "i") }).lean();

    if (type) return Electronics.find({ type: new RegExp(type, "i") }).lean();

    return Electronics.find({
        $and: [
            { name: new RegExp(name, "i") },
            { type: new RegExp(type, "i") }
        ]
    }).lean();
};

exports.createOffer = (offerData) => Electronics.create(offerData);

exports.getOfferById = (offerId) => Electronics.findById(offerId).lean();

exports.updateOffer = (offerId, offerData) => Electronics.findByIdAndUpdate(offerId, offerData, { runValidators: true });

exports.deleteOffer = (offerId) => Electronics.findByIdAndDelete(offerId);

exports.buyOffer = (offerId, userId) => Electronics.findByIdAndUpdate(offerId, { $push: { buyingList: userId } });
