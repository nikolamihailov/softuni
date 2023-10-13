const express = require("express");
const path = require("path");

function expCfg(app) {
    // body parser
    app.use(express.urlencoded({ extended: false }));
    // static resources - css/imgs
    app.use(express.static(path.resolve(__dirname, "../public")));
}

module.exports = expCfg;