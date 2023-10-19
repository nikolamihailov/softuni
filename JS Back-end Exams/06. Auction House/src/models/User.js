const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minLength: [1, "First name should be at least 1 char!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [2, "Last name should be at least 1 char!"]

    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        validate: {
            validator: async function (email) {
                const user = await User.findOne({ email });
                return !user;
            },
            message: 'Email already exists!',
        },
        validate: {
            validator: function (value) {
                return /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value);
            },
            message: 'Invalid email format. The email should be in the format: <name>@<domain>.<extension>',
        },
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [5, "Password should be at least 5 chars!"]
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