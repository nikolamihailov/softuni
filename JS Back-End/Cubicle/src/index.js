const PORT = 5050;
const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require("../src/routes");
const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(routes);
// or  require("./config/expressConfig")(app)

// Routes



app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));