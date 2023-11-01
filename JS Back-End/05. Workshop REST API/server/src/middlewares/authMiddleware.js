const { jwt } = require("../lib/jwt");

exports.auth = async (req, res, next) => {
    const token = req.header('X-Authorization');
    console.log("Token: " + token);

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, "secret");
            console.log("Decoded token:" + decodedToken);
            res.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).json({
                message: "Unauthorized"
            });
        }
    } else {
        console.log("no token");
        next();
    }
};