let getData = (schema) => {
    return schema.find()
}

let createData = (schema, body) => {
    return schema.create(body)
}

let deleteData = (schema, id) => {
    return schema.findByIdAndDelete(id)
}

let updateData = (schema, id, body) => {
    return schema.findByIdAndUpdate(id, body)
}

let findData = (schema, id) => {
    return schema.findById(id)
}

let findOneData = (schema, email) => {
    return schema.findOne(email)
}

module.exports = { getData, createData, deleteData, updateData, findData, findOneData }