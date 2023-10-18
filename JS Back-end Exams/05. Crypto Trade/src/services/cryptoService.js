const Crypto = require("../models/Crypto");

exports.getAllOffers = (name, payment) => {
    const query = {};
    if (name) {
        query.name = new RegExp(name, "i");
    }

    if (payment) {
        query.payment = payment;
    }

    return Crypto.find(query).lean();
};

exports.createOffer = (cryptoData) => Crypto.create(cryptoData);

exports.getOfferById = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.buyOffer = (cryptoId, userId) => Crypto.findByIdAndUpdate(cryptoId, { $push: { boughtCrypto: userId } });

exports.updateOffer = (cryptoId, data) => Crypto.findByIdAndUpdate(cryptoId, data, { runValidators: true });

exports.deleteOffer = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);