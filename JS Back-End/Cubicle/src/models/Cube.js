const mongoose = require("mongoose");

const cubeSchema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    diffucultyLevel: Number
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;