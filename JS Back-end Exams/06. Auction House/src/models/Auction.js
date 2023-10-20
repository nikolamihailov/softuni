const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [4, "Title must be at least 4 chars!"]
    },
    description: {
        type: String,
        maxLength: [200, "Description must be no more that 200 chars!"]
    },
    category: {
        type: String,
        required: [true, "category is required!"],
        enum: ["vehicles", "estate", "electronics", "furniture", "other"],
    },
    image: {
        type: String,
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
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
    bidder: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;