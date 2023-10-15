const { SECRET } = require("../constants");
const jwt = require("../lib/jwt");
const Animal = require("../models/Animal");

exports.isAuth = async (req, res, next) => {
    const token = req.cookies["auth"];
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
        } catch (error) {
            res.clearCookie("auth");
            return res.redirect("/users/login");
        }
    } else {
        next();
    }
};

exports.auth = (req, res, next) => {
    if (!req.user) return res.redirect("/users/login");
    next();
};

exports.isAnimalCreator = async (req, res, next) => {
    const animalId = req.params.animalId;
    const animal = await Animal.findById(animalId);
    if (req.user._id !== animal.owner.toString()) return res.redirect("/error-404-page");
    next();
};