const app = require("express")();
const { PORT } = require("./constants");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const connectToDb = require("./config/dbConfig");
const routes = require("./routes");

connectToDb()
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log(`Db error ${err}`));

expressConfig(app);
handlebarsConfig(app);
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));