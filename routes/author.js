const express = require("express");
const router = express.Router();

const {
    create,
    authorById,
    read,
    list
} = require("../controllers/author");

router.get("/author/:authorId", read);
router.post("/author/create/", create);
router.get("/authors", list);

router.param("authorId", authorById);

module.exports = router;
