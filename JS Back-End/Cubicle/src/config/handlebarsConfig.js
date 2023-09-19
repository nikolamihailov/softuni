const handlebars = require("express-handlebars");

function handlebarsConfig(app) {
    // Handlebars config
    app.engine("hbs", handlebars.engine({
        extname: "hbs"
    }));
    app.set("view engine", "hbs");
    // global express variables that makes it search the views folder not in the root dir
    app.set("views", "src/views");

}

module.exports = handlebarsConfig;