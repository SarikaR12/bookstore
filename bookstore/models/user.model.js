let mongoose = require("mongoose")


let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    profile: {
        type: String,
    }
})


let user = mongoose.model("userSchema", userSchema)

module.exports = user;

