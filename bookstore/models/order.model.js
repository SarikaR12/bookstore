let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookSchema",
    },
    quentity: {
        type: Number,
        default: 1,
    },
    orderdate: {
        type: String,
    }
})

let order = mongoose.model("orderSchema", orderSchema);

module.exports = order;