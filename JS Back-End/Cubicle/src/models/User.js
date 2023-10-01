const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username field is required!"],
        minLength: [5, "Username length must be at least 5 chars!"],
        match: [/^[A-Za-z0-9]+$/, "Username must consist of only english letters and digits!"],
        validate: {
            validator: async function (username) {
                const user = await User.findOne({ username });
                return !user;
            },
            message: 'Username already exists',
        },
    },
    password: {
        type: String,
        required: [true, "Password field is required!"],
        minLength: [8, "Password length must be at least 8 chars!"],
        match: [/^[A-Za-z0-9]+$/, "Password must consist of only english letters and digits!"]
    }
});

userSchema.virtual("repeatPassword").set(function (value) {
    if (value !== this.password) throw new Error("Passwords do not match!");
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;

