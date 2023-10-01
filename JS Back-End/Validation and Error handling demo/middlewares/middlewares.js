exports.validateName = (req, res, next) => {
    if (!req.body.name || req.body.name.trim().length <= 3)
        return res.status(404).send("Invalid username");

    next();
};