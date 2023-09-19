const express = require("express");
const path = require("path");

function expressConfig(app) {
    // express static config
    // relative to absolute path
    app.use(express.static(path.resolve(__dirname, "../public")));
    // parses all data send from from to obj
    app.use(express.urlencoded({ extended: false }));
}

module.exports = expressConfig;