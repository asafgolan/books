const Book = require("../models/book");
const { errorHandler } = require("../helpers/dbErrorHandler");
const Author = require("../models/author");

exports.bookById = (req, res, next, id) => {
    Book.findById(id).exec((err, book) => {
        if (err || !book) {
            return res.status(400).json({
                error: "book not found"
            });
        }
        req.book = book;
        next();
    });
};

exports.read = (req, res) => {
    return res.json(req.book);
};

exports.create = (req, res) => {
    console.log("create book", req.body);
    const book = new Book(req.body);
    book.author = req.author._id ? req.author._id : undefined;
    book.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        let returnData = {bookId :data._id};
        res.json(returnData);
    });
};

exports.listBooks = (req, res) => {
    Book.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
