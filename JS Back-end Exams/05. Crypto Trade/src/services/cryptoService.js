const Crypto = require("../models/Crypto");

exports.createOffer = (cryptoData) => Crypto.create(cryptoData);