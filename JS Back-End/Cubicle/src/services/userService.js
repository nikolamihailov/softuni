const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");

const SECRET = "alabala";

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error("Cannot find username or password");

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) throw new Error("Cannot find username or password");

    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

    return token;
}



