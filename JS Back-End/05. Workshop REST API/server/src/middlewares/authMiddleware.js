const { jwt } = require("../lib/jwt");

exports.auth = async (req, res, next) => {
    const token = req.header('X-Authorization');

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, "secret");
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    } else {
        next();
    }
};