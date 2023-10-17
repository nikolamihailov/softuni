const { auth, isBookOwner } = require("../middlewares/authMiddleware");
const { trimBody } = require("../middlewares/trimBody");
const bookService = require("../services/bookService");
const { extractErrors } = require("../utils/errorHelper");

const router = require("express").Router();

router.get("/all", async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.render("book/catalog", { title: "All books", books });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/create", auth, (req, res) => {
    res.render("book/create", { title: "Create book review" });
});

router.post("/create", auth, trimBody, async (req, res) => {
    try {
        const { title, author, genre, stars, image, bookReview } = req.body;
        await bookService.createBook({ title, author, genre, stars: +stars, image, bookReview, owner: req.user._id });
        res.redirect("/books/all");
    } catch (error) {
        const bookData = req.body;
        const errors = extractErrors(error);
        res.render("book/create", { title: "Create book review", bookData, errors });
    }
});

router.get("/:bookId/details", async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await bookService.findBookById(bookId);
        const isCreator = req.user?._id === book.owner.toString();
        const canAddToWishlist = !isCreator && !book.wishingList.some(b => b.toString() === req.user?._id);
        res.render("book/details", { title: `${book.title} details`, book, isCreator, canAddToWishlist });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:bookId/add-to-wishlist", auth, async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const userId = req.user._id;
        await bookService.addBookToWishlist(bookId, userId);
        res.redirect(`/books/${bookId}/details`);
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/:bookId/edit", auth, isBookOwner, async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await bookService.findBookById(bookId);
        res.render("book/edit", { title: `Edit ${book.title ? book.title : "book"}`, book });
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.post("/:bookId/edit", auth, isBookOwner, trimBody, async (req, res) => {
    try {
        const { title, author, genre, stars, image, bookReview } = req.body;
        const bookId = req.params.bookId;
        await bookService.updateBook(bookId, { title, author, genre, stars: +stars, image, bookReview });
        res.redirect(`/books/${bookId}/details`);
    } catch (error) {
        const book = req.body;
        const errors = extractErrors(error);
        res.render("book/edit", { title: `Edit ${book.title ? book.title : "book review"}`, book, errors });
    }
});

router.get("/:bookId/delete", auth, isBookOwner, async (req, res) => {
    try {
        const bookId = req.params.bookId;
        await bookService.deleteBook(bookId);
        res.redirect("/books/all");
    } catch (error) {
        res.redirect("/error-404-page");
    }
});

router.get("/wish-list", auth, async (req, res) => {
    try {

    } catch (error) {
        res.redirect("/error-404-page");
    }
});



module.exports = router;;;