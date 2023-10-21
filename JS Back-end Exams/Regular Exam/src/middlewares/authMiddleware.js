const { SECRET } = require("../constants");
const jwt = require("../lib/jwt");
const Electronics = require("../models/Electronics");

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

// check if the current logged user is the creator
exports.isElectronicsOwner = async (req, res, next) => {
    const offerId = req.params.offerId;
    const offer = await Electronics.findById(offerId);
    if (req.user._id !== offer.owner.toString()) return res.redirect("/error-404-page");
    next();
};