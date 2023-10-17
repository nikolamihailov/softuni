const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [2, "Title must be at least 2 chars!"]
    },
    author: {
        type: String,
        required: [true, "Author is required!"],
        minLength: [5, "Author must be at least 5 chars!"]
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
        match: [/^https?:\/\/.+/, "Provide valid creature image link!"]
    },
    bookReview: {
        type: String,
        required: [true, "Book review is required!"],
        minLength: [10, "Book review must be at least 10 chars!"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"],
        minLength: [3, "Genre must be at least 3 chars!"]
    },
    stars: {
        type: Number,
        required: [true, "Stars is required!"],
        validate: {
            validator: function (value) {
                return value >= 1 && value <= 5;
            },
            message: 'Stars must be 1-5!'
        }
    },
    wishingList: [
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

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

