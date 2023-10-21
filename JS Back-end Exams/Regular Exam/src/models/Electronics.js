const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [10, "Name must be at least 10 characters!"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minLength: [2, "Type must be at least 2 characters!"]
    },
    damages: {
        type: String,
        required: [true, "Damages is required!"],
        minLength: [10, "Damages must be at least 10 characters!"]
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description must be at least 10 characters!"],
        maxLength: [200, "Description must be no more than 200 characters!"],
    },
    production: {
        type: Number,
        required: [true, "Production is required!"],
        validate: {
            validator: function (value) {
                return value >= 1900 && value <= 2023;
            },
            message: 'Production must be from 1900 to 2023!'
        }
    },
    exploitation: {
        type: Number,
        required: [true, "Exploitation is required!"],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Exploitation must be a positive number!'
        }
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Price must be a positive number!'
        }
    },
    buyingList: [
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

const Electronics = mongoose.model("Electronics", electronicsSchema);

module.exports = Electronics;