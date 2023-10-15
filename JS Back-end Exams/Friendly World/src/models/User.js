const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
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
        minLength: [10, "Email should be at least 10 chars!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [4, "Password should be at least 4 chars!"]
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