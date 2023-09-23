const mongoose = require("mongoose");
const { CONNECTION_STR } = require("../constants");

async function connectToDB() {
    await mongoose.connect(CONNECTION_STR);
}

module.exports = connectToDB;