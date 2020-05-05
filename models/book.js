const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaBook = new Schema({
    title: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: Array },
    link: { type: String },
    _id: { type: String }
});

const Book = mongoose.model("Book", schemaBook);

module.exports = Book;
