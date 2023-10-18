const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 chars!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Price must be positive number!'
        }
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description must be at least 10 chars!"]
    },
    payment: {
        type: String,
        required: [true, "Payment is required!"],
        enum: ["Crypto-wallet", "Credit-card", "Debit-card", "PayPal"],
    },
    boughtCrypto: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;