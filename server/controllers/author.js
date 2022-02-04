const Author = require("../models/author");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.authorById = (req, res, next, id) => {
    Author.findById(id).exec((err, author) => {
        if (err || !author) {
            return res.status(400).json({
                error: "author does not exist"
            });
        }
        req.author = author;
        next();
    });
};

exports.create = (req, res) => {
    const author = new Author(req.body);
    author.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.author);
};

// exports.update = (req, res) => {
//     const category = req.author;
//     category.name = req.body.name;
//     category.save((err, data) => {
//         if (err) {
//             return res.status(400).json({
//                 error: errorHandler(err)
//             });
//         }
//         res.json(data);
//     });
// };

// exports.remove = (req, res) => {
//     const category = req.category;
//     category.remove((err, data) => {
//         if (err) {
//             return res.status(400).json({
//                 error: errorHandler(err)
//             });
//         }
//         res.json({
//             message: "Category deleted"
//         });
//     });
// };

exports.list = (req, res) => {
    Author.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
