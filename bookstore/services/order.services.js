const { orderSchema } = require("../models")
const { getData, createData, deleteData, findData, updateData } = require("../Query.js/query")


let fetchOrder = () => {
    return orderSchema.find().populate([{ path: 'user', select: 'name' }]).populate({ path: "book", select: "title price" })
}

let registerOrder = (body) => {
    return createData(orderSchema, body)
}

let deleteAndFind = (id) => {
    return deleteData(orderSchema, id)
}

let findId = (id) => {
    return findData(orderSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(orderSchema, id, body)
}

module.exports = { fetchOrder, registerOrder, deleteAndFind, findId, findByIdAndUpdate }