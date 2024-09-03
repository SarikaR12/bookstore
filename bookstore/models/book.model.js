let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    profile: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
    },
    rating: {
        type: Number,
        default: 1,
        enum: [1, 2, 3, 4, 5]
    },
    inStock: {
        type: Boolean,
        default: true,
    }
})
let book = mongoose.model("bookSchema", bookSchema);

module.exports = book;