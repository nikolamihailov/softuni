const Crypto = require("../models/Crypto");

exports.getAllOffers = () => Crypto.find().lean();

exports.createOffer = (cryptoData) => Crypto.create(cryptoData);

exports.getOfferById = (cryptoId) => Crypto.findById(cryptoId).lean();

exports.buyOffer = (cryptoId, userId) => Crypto.findByIdAndUpdate(cryptoId, { $push: { boughtCrypto: userId } });

exports.updateOffer = (cryptoId, data) => Crypto.findByIdAndUpdate(cryptoId, data, { runValidators: true });

exports.deleteOffer = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);