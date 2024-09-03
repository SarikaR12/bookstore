const { userSchema } = require("../models")

let getUser = () => {
    return userSchema.find()
}

let addUser = (body) => {
    return userSchema.create(body)
}
                                                                                
let deleteUser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updateUser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

module.exports = { getUser, addUser, deleteUser, updateUser }




