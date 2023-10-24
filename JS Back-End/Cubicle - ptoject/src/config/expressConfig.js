const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { auth } = require("../middlewares/authMiddleware");

function expressConfig(app) {
    // express static config
    // relative to absolute path
    app.use(express.static(path.resolve(__dirname, "../public")));
    // parses all data send from form to obj
    // works with query strings also
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfig;