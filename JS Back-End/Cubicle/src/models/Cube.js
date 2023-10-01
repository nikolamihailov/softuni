const mongoose = require("mongoose");

const cubeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Cube name is required!"],
        minLength: [5, "Cube name must be at least 5 chars!"],
        match: [/^[A-Za-z0-9 ]+$/, "Cube name must be alphanumeric!"]
    },
    description: {
        type: String,
        required: [true, "Cube description is required!"],
        minLength: [20, "Cube description must be at least 20 chars!"],
        match: [/^[A-Za-z0-9 ]+$/, "Cube description must be alphanumeric!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Cube image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid cube image link!"]
    },
    difficultyLevel: {
        type: Number,
        required: [true, "Cube difficulty is required!"],
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: "Accessory"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;