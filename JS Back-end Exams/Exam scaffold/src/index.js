const express = require("express");
const { PORT } = require("./constants");

const app = express();
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routes = require("./routes");

expressConfig(app);
handlebarsConfig(app);
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));