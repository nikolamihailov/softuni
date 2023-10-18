const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"],
        minLength: [5, "Username must be at least 5 chars!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        minLength: [10, "Email must be at least 10 chars!"],
        unique: true,
        validate: {
            validator: async function (email) {
                const user = await User.findOne({ email });
                return !user;
            },
            message: 'Email already exists!',
        },
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [4, "Password must be at least 4 chars!"]
    },
});

userSchema.virtual("repeatPassword").set(function (val) {
    if (val !== this.password) throw new Error("Passwords mismatched!");
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;