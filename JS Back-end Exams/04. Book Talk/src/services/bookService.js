const Book = require("../models/Book");

exports.getAllBooks = () => Book.find().lean();

exports.createBook = (bookData) => Book.create(bookData);

exports.findBookById = (bookId) => Book.findById(bookId).lean();

exports.addBookToWishlist = (bookId, userId) => Book.findByIdAndUpdate(bookId, { $push: { wishingList: userId } });

exports.updateBook = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });

exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId);

exports.getWishListBooks = (bookId) => Book.findById(bookId).populate("wishingList").lean();