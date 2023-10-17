const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const { isAuth } = require("../middlewares/authMiddleware");

function expCfg(app) {
    // body parser
    app.use(express.urlencoded({ extended: false }));
    // static resources - css/imgs
    app.use(express.static(path.resolve(__dirname, "../public")));
    app.use(cookieParser());
    app.use(isAuth);
}

module.exports = expCfg;