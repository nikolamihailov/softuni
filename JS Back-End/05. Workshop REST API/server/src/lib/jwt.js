const { promisify } = require("util");
const token = require("jsonwebtoken");

exports.jwt = {
    sign: promisify(token.sign),
    verify: promisify(token.verify),
};