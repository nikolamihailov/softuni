const PORT = 5050;
const express = require("express");

const expressConfig = require("./config/expressConfig");
// or  require("./config/expressConfig")(app)
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require("../src/routes");
const app = express();

expressConfig(app);
handlebarsConfig(app);
// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));