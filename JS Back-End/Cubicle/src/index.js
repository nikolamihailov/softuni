const { PORT } = require("./constants");
const express = require("express");

const expressConfig = require("./config/expressConfig");
// or  require("./config/expressConfig")(app)
const handlebarsConfig = require("./config/handlebarsConfig");
const dbConnect = require("./config/dbConfig");
const routes = require("../src/routes");
const app = express();

dbConnect()
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log(`Db error ${err}`));

expressConfig(app);
handlebarsConfig(app);
// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));