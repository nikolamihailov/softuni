const mongoose = require("mongoose");

const creatureSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 chars!"]

    },
    species: {
        type: String,
        required: [true, "Species is required!"],
        minLength: [3, "Species must be at least 3 chars!"]

    },
    skinColor: {
        type: String,
        required: [true, "Skin color is required!"],
        minLength: [3, "Skin color must be at least 3 chars!"]

    },
    eyeColor: {
        type: String,
        required: [true, "Eye color is required!"],
        minLength: [3, "Eye color must be at least 3 chars!"]

    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [5, "Description must be at least 5 chars!"],
        maxLength: [500, "Description must be no more than 500 chars!"],

    },
    votes: [
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

const Creature = mongoose.model("Creature", creatureSchema);

module.exports = Creature;