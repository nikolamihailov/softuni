const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [5, "Name must be at least 5 chars!"]
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
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
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description must be at least 10 chars!"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"],
        minLength: [2, "Genre must be at least 2 chars!"]
    },
    platform: {
        type: String,
        required: [true, "Platform is required!"],
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },
    boughtBy: [
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

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

