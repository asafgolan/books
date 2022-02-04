const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            maxlength: 32
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            maxlength: 32
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Author", authorSchema);
