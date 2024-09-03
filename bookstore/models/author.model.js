let mongoose = require("mongoose")

let authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: String,
        required: true,
        trim: true,
    }
})

let author = mongoose.model("authorSchema", authorSchema);

module.exports = author;