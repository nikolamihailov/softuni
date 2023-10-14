const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minLength: [3, "First name must be at least 3 chars!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be at least 3 chars!"]

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