const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    fisrtName: {
        type: String,
        required: [true, "First name is required!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
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
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
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