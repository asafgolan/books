const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// });


const bookSchema = new mongoose.Schema(
    {
      bookName: {
          type: String,
          trim: true,
          required: true,
          //unique: true
      },
        ISBN: {
            type: String,
            trim: true,
            required: true,
            //unique: true
        },
      author: {
            type: ObjectId,
            ref: "Author",
            required: true
      }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
