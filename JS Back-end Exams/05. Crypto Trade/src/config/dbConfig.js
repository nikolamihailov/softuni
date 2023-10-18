const mongoose = require("mongoose");
const { CONN_STR, DB_NAME } = require("../constants");

async function connectToDb() {
    await mongoose.connect(`${CONN_STR}${DB_NAME}`);
}

module.exports = connectToDb;

