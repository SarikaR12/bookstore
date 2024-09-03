const { bookSchema } = require("../models")


let fetchBook = () => {
    return bookSchema.find()
}

let addBook = (body) => {
    return bookSchema.create(body)
}

let deletebook = (id) => {
    return bookSchema.findByIdAndDelete(id)
};


let updatebook = (id, body) => {
    return bookSchema.findByIdAndUpdate(id, body)
}


module.exports = { fetchBook, addBook,deletebook,updatebook }