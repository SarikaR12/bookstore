const { bookServices } = require("../services")
const uploadImage = require("../services/cloudinary.services")



let get_book = async (req, res) => {
    try {
        let book = await bookServices.fetchBook()

        res.status(200).json({
            message: "book get success",
            book,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let add_book = async (req, res) => {
    try {

        let body = req.body;
        console.log(req.file);

        let { path, originalname } = req.file;

        let colud = await uploadImage(path, originalname)

        let newBody = {
            ...body,
            profile: colud.url,
        }

        let book = await bookServices.addBook(newBody)

        res.status(200).json({
            message: "book add success",
            book,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let delete_book = async (req, res) => {
    try {
        let { id } = req.params;
        let book = await bookServices.deletebook(id)

        res.status(200).json({
            message: "book delete success",
            book,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let update_book = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let newbody = {
            id,
            ...body,
        }

        let book = await bookServices.updatebook(id, body)

        res.status(201).json({
            message: "author update success",
            newbody,
        })


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { get_book, add_book, delete_book,update_book }