const express = require("express");
const router = express.Router();
const {
    authorById, list
} = require("../controllers/author");
const {
    create,
    bookById,
    read,
    listBooks,
} = require("../controllers/book");
router.get("/books", listBooks);
router.get("/book/:bookId", read);
router.post("/book/create/:authorId",create);
router.param("authorId", authorById);
router.param("bookId", bookById);

module.exports = router;
