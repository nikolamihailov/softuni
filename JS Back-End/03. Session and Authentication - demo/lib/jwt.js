const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = {
    sign: promisify(jwt.sign),
    verify: promisify(jwt.verify),
};