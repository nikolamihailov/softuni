const PORT = 5050;
const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController");

const app = express();

expressConfig(app);
handlebarsConfig(app);
// or  require("./config/expressConfig")(app)



// Routes

// modular router
app.use(homeController);

// if the req starts with /cubes use the router in cubeController
// all the req in the cubeController start with /cubes
app.use("/cubes", cubeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));