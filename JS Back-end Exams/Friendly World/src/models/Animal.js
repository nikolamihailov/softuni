const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 chars!"]
    },
    kind: {
        type: String,
        required: [true, "Kind is required!"],
        minLength: [3, "Kind must be at least 3 chars!"]
    },
    years: {
        type: Number,
        required: [true, "Years is required!"],
        validate: {
            validator: function (value) {
                return value >= 1 && value <= 100;
            },
            message: 'Years must be 1-100!'
        }
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
    },
    need: {
        type: String,
        required: [true, "Need is required!"],
        minLength: [3, "Need must be at least 3 chars!"],
        maxLength: [20, "Need should be no more than 20 chars!"]
    },
    location: {
        type: String,
        required: [true, "Location is required!"],
        minLength: [5, "Location must be at least 5 chars!"],
        maxLength: [15, "Location should be no more than 15 chars!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [5, "Description must be at least 5 chars!"],
        maxLength: [50, "Description should be no more than 50 chars!"]
    },
    donations: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;