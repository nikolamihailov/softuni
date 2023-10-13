const express = require("express");

const app = express();
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");

expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => console.log("Server is listneing on port 3000"));