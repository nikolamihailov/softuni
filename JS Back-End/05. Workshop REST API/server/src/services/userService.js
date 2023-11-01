const User = require("../models/User");
const bcrypt = require("bcrypt");
const { jwt } = require("../lib/jwt");

const getAuthResult = async function (user) {
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = await jwt.sign(payload, "secret", { expiresIn: "1d" });

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token
    };
    return result;
};

exports.register = async (userData) => {
    const user = await User.create(userData);
    const result = await getAuthResult(user);
    console.log(result);
    return result;
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid username or password!");

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) throw new Error("Invalid username or password!");

    const result = await getAuthResult(user);

    return result;

};
