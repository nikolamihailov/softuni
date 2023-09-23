const router = require("express").Router();

const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController");
const accessoryController = require("./controllers/accessoryController");
// modular router
router.use(homeController);

// if the req starts with /cubes use the router in cubeController
// all the req in the cubeController start with /cubes
router.use("/cubes", cubeController);
router.use("/accessories", accessoryController);

router.get("*", (req, res) => {
    res.redirect("/404-page-not-found");
});

module.exports = router;