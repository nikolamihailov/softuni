const mongoose = require("mongoose");

const accessorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Accessory name is required!"],
        minLength: [5, "Accessory name must be at least 5 chars!"],
        match: [/^[A-Za-z0-9 ]$/, "Accessory name must be alphanumeric!"]
    },
    description: {
        type: String,
        minLength: [20, "Accessory description must be at least 20 chars!"],
        match: [/^[A-Za-z0-9 ]$/, "Accessory description must be alphanumeric!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Accessory image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid accessory image link!"]
    }
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;