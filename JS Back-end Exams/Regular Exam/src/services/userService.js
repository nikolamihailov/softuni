const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants");

exports.register = async (userData) => {
    const { username, email } = userData;
    const user = await User.create(userData);
    const payload = { _id: user._id, username, email };
    const token = await jwt.sign(payload, SECRET, { expiresIn: "12h" });
    return token;
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid email or password");

    const isPassCorrect = await bcrypt.compare(password, user.password);

    if (!isPassCorrect) throw new Error("Invalid email or password");

    const payload = { _id: user._id, email, user: user.username };
    const token = await jwt.sign(payload, SECRET, { expiresIn: "12h" });
    return token;
};