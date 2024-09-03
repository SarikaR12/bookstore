const { authorSchema } = require("../models")


let fetchAuthor = () => {
    return authorSchema.find()
}

let addAuthor = (body) => {
    return authorSchema.create(body)
}

let deleteauthor = (id) => {
    return authorSchema.findByIdAndDelete(id)
}

let updateauthor = (id, body) => {
    return authorSchema.findByIdAndUpdate(id, body)
}


module.exports = { fetchAuthor, addAuthor, deleteauthor,updateauthor }