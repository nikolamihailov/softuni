exports.trimQuery = (req, res, next) => {
    for (const key in req.query) {
        req.query[key] = req.query[key].trim();
    }
    next();
};