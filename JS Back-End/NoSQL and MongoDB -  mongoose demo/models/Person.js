const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const person = mongoose.model("Person", personSchema);

module.exports = person;